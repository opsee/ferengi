import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
import Highlight from '../../global/Highlight';
import TryCheck from '../../check/TryCheck';

import {Col, Padding, Row} from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
import logoDark from '../../images/logos/opsee/opseelogo-screen-light-one.svg';

const GuidesGoChecks = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Effective Health Checks in Go</h1>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={12} sm={8} smOffset={2}>

              <p>Go is popping up all over the place these days. Its relatively simple syntax, rapidly growing library ecosystem, and lightweight statically compiled build artifacts have earned it a place in many microservice architectures. Fortunately, even if you&#8217;re not using frameworks and simply implementing a bare bones Go service it&#8217;s fast and easy to add simple health checks.</p>

              <h2 id="theminimalapproach">The Minimal Approach</h2>

              <p>Go ships with the <code className={style.inlineCode}>net/http</code> package which provides straightforward http client and server implementations. Because go makes it so easy to spin up multiple http servers, it&#8217;s a good idea serve customer facing functions and internal administrative functions on different ports. Otherwise one must be careful to mask any admin endpoints at the load balancer or reverse proxy. The simplest possible health check can be expressed with just a few lines of Go:</p>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`adminHandler := http.NewServeMux()
adminHandler.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "ok")
})
admin := &http.Server{
            Addr:    ":8081",
            Handler: adminHandler,
}
log.Fatal(admin.ListenAndServe())`
}
                  </Padding>
                </Highlight>

              <p>This sets up an admin handler and starts it listening on port 8081. The handler has one endpoint at <code className={style.inlineCode}>/health</code> which simply returns a 200 OK status code with <code className={style.inlineCode}>ok</code> as its body. Simple and straightforward, but we can do better.</p>

              <h2 id="gometrics">Go Metrics</h2>

              <p>If you&#8217;re using the <a target="_blank" href="https://github.com/rcrowley/go-metrics">go metrics library</a>, you get a lot of functionality out of the box that can be wired into your admin server. Go-metrics comes with its own healthcheck interface, which lets you easily create lightweight internal healthchecks and register them with the global metrics registry:</p>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`check := metrics.NewHealthcheck(func(h Healthcheck) {
  err := dbHandle.Ping()
  if err != nil {
    h.Unhealthy(err)
  } else {
    h.Healthy()
  }
})
metrics.Register("database", check)`
}
                </Padding>
              </Highlight>

              <p>The results of your health checks can be output en masse along with the rest of your metrics via a JSON endpoint:</p>

              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`adminHandler.HandleFunc("/metrics", func(w http.ResponseWriter, r *http.Request) {
  metrics.WriteJSONOnce(metrics.DefaultRegistry, w)
})`
}
                </Padding>
              </Highlight>

              <p>However, this doesn&#8217;t provide an explicit way to fail the HTTP call if the health checks don&#8217;t pass. It will merely put the error string in the healthcheck JSON, leaving it to you to parse out the results. To make a proper health check endpoint that will fail out the request if there&#8217;s an issue, you have to do some work:</p>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`adminHandler.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
  data := make(map[string]interface{})
  failed := false
  metrics.DefaultRegistry.Each(func(name string, i interface{}) {
    switch check := i.(type) {
      case metrics.Healthcheck:
          check.Check()
          if err := check.Error(); nil != err {
            data[name] = check.Error().Error()
            failed = true
          } else {
            data[name] = true
          }
    }
  })
  bytes, _ := json.Marshal(data)
  if failed {
    w.WriteHeader(500)
  }
  w.Write(bytes)
})`
}
                  </Padding>
                </Highlight>

              <p>This handler will evaluate all of your healthchecks, and report a json object associating the check name with either <code className={style.inlineCode}>true</code> for passing, or an error string if not. And the response code is set to 500 if any of the tests fail. This endpoint can then either be used by a load balancer to determine the liveness of a service instance, or by a monitoring system to notify you of a failure.</p>

              <h2>A Working Example</h2>

              <p>A full working example of a go metrics endpoint is included below. The try it button will let you make a request against the metrics endpoint and parse out metrics from the response, just like in the Opsee app. Full source for the example app is on <a href="https://github.com/opsee/guides-go" target="_blank">github</a>.</p>

              <TryCheck url="http://guides-go.opsee.com/metrics" />

                <Padding t={3}>
                  <BaseSVG className={style.logoGuideFooter} svg={logoDark} />
                  <p className={style.guideFooter}>When you deploy services with health checks, use Opsee to monitor them—Opsee continuously tests your services so you can deploy with confidence.</p>
                </Padding>

              </Col>
            </Row>
          </Panel>
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default GuidesGoChecks;
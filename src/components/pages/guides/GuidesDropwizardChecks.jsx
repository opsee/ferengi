import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
import Highlight from '../../global/Highlight';
import TryCheck from '../../check/TryCheck';

import {Col, Padding, Row} from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';
// import { Heading } from '../../type';

import BaseSVG from '../../images/BaseSVG';
import logoDark from '../../images/logos/opsee/opseelogo-screen-light-one.svg';
// import solutionsStartupSVG from '../../images/solutions-startup.svg';
// import solutionsEnterpriseSVG from '../../images/solutions-enterprise.svg';

const GuidesDropwizardChecks = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Effective Health Checks With Dropwizard</h1>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={12} sm={8} smOffset={2}>

              <p>One of the nice features of Dropwizard is providing you with a consistent mechanism for exposing your services&#8217; health checks. Having a consistent scheme for health checks make everything from deployment to monitoring that much easier, especially in polyglot environments where multiple languages and/or frameworks are being deployed into production.</p>

              <p>Dropwizard is unique among web frameworks in that it separates internal administrative endpoints from customer facing endpoints by way of listening on different ports. By default, the port for customer facing endpoints is 8080, and the administrative port is 8081. The nice part about this setup is that you can choose to only expose the customer facing endpoint in a load balancer, thus ensuring that errant web requests cannot invoke your administrative functions.</p>

              <h2 id="thebasichealthcheck">The Basic Health Check</h2>

              <p>All health checks in Dropwizard extend the <code className={style.inlineCode}>HealthCheck</code> class. The <code className={style.inlineCode}>HealthCheck</code> class provides a protected method for you to override, called <code className={style.inlineCode}>check()</code>. Within the check method you can perform arbitrary logic in order to verify the correct functioning of the service. The canonical example would be checking that a database dependency is running:</p>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`public class DatabaseHealthCheck extends HealthCheck {
  private final DBI dbi;

  public DatabaseHealthCheck(DBI jdbi) {
    this.dbi = jdbi;
  }

  @Override
  protected Result check() throws Exception {
    try (Handle h = dbi.open()) {
      h.execute("select 1;");
      return Result.healthy();
    }
  }
}`
}
                  </Padding>
                </Highlight>

              <p>In this example we pass a <code className={style.inlineCode}>DataSouce</code> in the constructor, which we&#8217;re assuming represents the global database handle for this entire service. Every time the health check is evaluated we open a database handle and attempt to execute <code className={style.inlineCode}>&quot;select 1;&quot;</code> which should at least verify that the database server is running. If a problem is encountered, an exception will be thrown which will fail the health check.</p>

              <p>In order to use this health check it must be added to the Dropwizard environment. The Environment object has a registry specifically for instances of <code className={style.inlineCode}>HealthCheck</code>.</p>

              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`@Override
  public void run(ExampleConfiguration config, Environment env) {
    final DBIFactory factory = new DBIFactory();
    final DBI jdbi = factory.build(env, config.getDataSourceFactory(), "postgresql");
    final dbHealthCheck = new DatabaseHealthCheck(jdbi);
    environment.healthChecks().register("database", dbHealthCheck);
  }
`
}
                </Padding>
              </Highlight>

              <p>After starting up your Dropwizard service, a GET request to {'http://localhost:8081/healthcheck'} will invoke your database health check, in addition to any other checks registered with the health check registry. If all of the health checks pass, a <code className={style.inlineCode}>200 OK</code> response will be generated, otherwise the response status will be <code className={style.inlineCode}>500 Internal Service Error</code>. The response body is intended to be a human readable <code className={style.inlineCode}>text/plain</code> entity.</p>

              <h2 id="ratiohealthchecks">Ratio Health Checks</h2>
              <h3>(thanks to <a href="https://twitter.com/gjesse">Jesse Hodges</a>)</h3>
              <p>Actively pinging a database or other dependency is relatively straightforward, however sometimes can cause its own issues. You may not be able to make a meaningful request to a backend service without causing additional and unnecessary load, for instance. In those cases you can measure the success rate of the calls you&rsquo;d be making in the normal course of events and health check on that. The ratio health check class looks thusly:</p>
              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`/**
 * Gauge-based health check that will return unhealthy if the
 * gauge value falls below the threshold
 */
public class RatioGaugeHealthCheck extends HealthCheck {

    private final RatioGauge gauge;
    private final double threshold;
    private final String name;

    public RatioGaugeHealthCheck(String name, RatioGauge gauge, double threshold) {
        this.name = requireNonNull(name);
        this.gauge = requireNonNull(gauge);
        this.threshold = threshold;

        checkArgument(!name.isEmpty(), "name must be specified");
        checkArgument(threshold >= 0 && threshold <= 1, String.format("threshold out of range: [%.02f]", threshold));
    }

    public String getName() {
        return name;
    }

    @Override
    protected Result check() throws Exception {
        final Double value =  gauge.getValue();
        if (Double.isNaN(value)) {
            return Result.healthy("Unable to determine health. Gauge value is Double.NaN. The gauge may have no data or there may be a problem.");
        } else if ( value >= threshold ) {
            return Result.healthy();
        } else {
            return Result.unhealthy("Healthcheck [%s] value of %.02f is below threshold %.02f", name, value, threshold);
        }
    }
}`
}
                </Padding>
              </Highlight>

              <p>Using the health check involves setting up two meters, that get marked when the call to a dependency either succceeds or fails:</p>

              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`// mark these meters on success/failure
private static final Meter PUBLISH_STATE_OK = new Meter();
private static final Meter PUBLISH_STATE_NOT_OK = new Meter();
private static final RatioGauge PUBLISH_STATE_GAUGE = new RatioGauge() {
    @Override
    protected Ratio getRatio() {
        final double numerator = PUBLISH_STATE_OK.getOneMinuteRate();
        final double denominator = numerator + PUBLISH_STATE_NOT_OK.getOneMinuteRate();
        return Ratio.of(numerator, denominator);
    }
};

// register a health check

final RatioGaugeHealthCheck check =
    new RatioGaugeHealthCheck("publish-success", PUBLISH_STATE_GAUGE, configuration.getPublishHealthThreshold());
environment.healthChecks().register(check.getName(), check);
}`
}
                </Padding>
              </Highlight>

              <h2 id="drainfullhealthchecks">Drain / Full Health Checks</h2>

              <p>The results of a health check are often used to control whether a service is eligible as a backend for a load balancer. The basic algorithm used by most load balancing software will fail out a backend after it has failed a certain number of health checks, and reinstate the service once its checks start passing again. This can be used creatively to gain more fine grained operability and control over one&#8217;s services. For instance, if one need a way to manually take down a service gracefully, without enduring customer visible hiccups, one could implement a drain task hooked to a health check.</p>

              <h3 id="draintask">Drain Task</h3>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`public class DrainTask extends Task {
  private final AtomicBoolean draining;

  public DrainTask(AtomicBoolean draining) {
    this.draining = draining;
  }

  @Override
  public void execute(ImmutableMultimap<String, String>; params, PrintWriter output) throws Exception {
    //flip the drain parameter
    final boolean oldVal = draining.get();
    draining.compareAndSet(oldVal, !oldVal);
    if (!oldVal) {
      output.println("** Draining service! **");
    } else {
      output.println("** Resuming service! **");
    }
  }
}`
}
                  </Padding>
                </Highlight>

              <h3 id="drainhealthcheck">Drain HealthCheck</h3>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`public class DrainHealthCheck extends HealthCheck {
  private final AtomicBoolean draining;

  public DrainHealthCheck(AtomicBoolean draining) {
    this.draining = draining;
  }

  @Override
  protected Result check() throws Exception {
    if (draining.get()) {
      return Result.unhealthy("Service is being drained for maintenance!");
    }
    return Result.healthy();
  }
}`
}
                  </Padding>
                </Highlight>

              <h3 id="puttingitalltogether">Putting It All Together</h3>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`@Override
  public void run(ExampleConfiguration config, Environment env) {
    final draining = new AtomicBoolean(config.startDrained());

    final DrainHealthCheck drainCheck = new DrainHealthCheck(draining);
    final DrainTask drainTask = new DrainTask(draining);
    env.healthChecks().register("drain", drainCheck);
    env.admin().addTask(drainTask);
  }`
}
                  </Padding>
                </Highlight>

              <p>After starting up your service a <code className={style.inlineCode}>POST</code> request to {'http://localhost:8081/tasks/drain'} will flip the drain switch for your service. Also, notice that we added a <code className={style.inlineCode}>startDrained</code> parameter to the service config. This allows for starting services in a drained state, which can be useful for canary testing experimental code or manually controlling when new services enter the load balancer backend.</p>

              <h2 id="metricshealthchecks">Metrics Health Checks</h2>

              <p>It&#8217;s also possible to create health checks based on internal metrics, around things like queue depth or latency. For instance, if you wanted to health check on the 99th percentile latency of a particular piece of code you could do so quite easily:</p>

              <h3 id="histogramhealthcheck">HistogramHealthCheck</h3>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`public class HistogramHealthCheck extends HealthCheck {
  final Timer timer;
  final double threshold;

  public HistogramHealthCheck(Timer timer, double threshold) {
    this.timer = timer;
    this.threshold = threshold;
  }

  @Override
  public Result check() throws Exception {
    latency = timer.getSnapshot().get99thPercentile();
    if (latency > threshold) {
      return Result.unhealthy("latency of " + latency + "ms is outside threshold of " threshold "ms!");
    }
    return Result.healthy();
  }
}`
}
                  </Padding>
                </Highlight>

              <p>And then in the timed code something like: </p>

                <Highlight style={{background: '#303030'}}>
                  <Padding>
{
`public void doAThing(Timer timer) throws Exception {
  try(Timer.Context ctx = timer.time()) {
    doSomeLongRunningWork();
  }
}
`
}
                  </Padding>
                </Highlight>

              <p>An important caveat with using metrics based health checks like this is to work through what might happen with them at scale, especially with regard to load balancers. For instance, suppose the dropwizard health checks are being used to determine load balancer membership. Suppose further that under heavy load a database latency check starts to fail. The load balancer will dutifully remove that instance, compounding the load on the remaining instances. The cascading failure that results can go on for quite some time. Therefore it&#8217;s important to maintain a distinction between health checking for load balancer health and health checking for monitoring. In the latter case it may make more sense to query Dropwizard&#8217;s metrics endpoint at {'http://localhost:8081/metrics'} and use a monitoring system that can parse the resultant JSON for alerting purposes.</p>

              <TryCheck url="http://nameless-castle-75548.herokuapp.com/metrics?pretty=true" />

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

export default GuidesDropwizardChecks;
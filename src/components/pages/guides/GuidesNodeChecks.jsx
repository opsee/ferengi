import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
import Highlight from '../../global/Highlight';

import {Col, Padding, Row} from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
import logoDark from '../../images/logos/opsee/opseelogo-screen-light-one.svg';

const GuidesNodeChecks = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Effective Health Checks in Node.js</h1>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={12} sm={8} smOffset={2}>

              <p>JavaScript, in the form of Node.js, is the language of choice in many microservice architectures. Its lightweight feel, fast startup times and ability to share code with the frontend makes it easy to get started with and develop new services. However, in many cases Node.JS adheres to a fail-fast design philosophy, often exiting a process under unexpected conditions. This makes monitoring health checks all the more essential for a production Node.JS deployment.</p>

              <h2 id="asimplehealthcheck">A Simple Health Check</h2>

              <p>The simplest possible health check for a Node.JS service is an HTTP request handler that always returns 200:</p>


              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`var http = require('http');
var dispatcher = require('httpdispatcher');

function handleRequest(req, res) {
  try {
    dispatcher.dispatch(req, res);
  } catch (err) {
    console.log(err);
  }
}

dispatcher.onGet("/healthcheck", function(request, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('ok');
});

http.createServer(handleRequest).listen(8080);`
}
                </Padding>
              </Highlight>

              <p>This starts an http server on port 8080, which will always return <code className={style.inlineCode}>200 OK</code> for the <code className={style.inlineCode}>/health</code> route. While this may be fine for the simplest applications where liveness is our only concern, we can do more interesting things in more complex environments.</p>

              <h2 id="clustercheck">Cluster Check</h2>

              <p>Node execution is single threaded, so even though its event based architecture allows it to concurrently handle more than one request at a time it can only do so on a single CPU. Thus, it is common on multi-core machines to use Node&#8217;s cluster capabilities to distribute requests across multiple processors. In the default configuration there will be one master process which listens to the port and hands off incoming connections to a pool of workers. Because the workers are expected to handle all of the logic for serving a request, it&#8217;s important that a properly sized pool of workers is maintained. For better or worse, Node hands off responsibility for maintaining the worker pool to you. In this case you might want more than a simple health check, for instance you might want to fail the health check if workers are being restarted too often. In this example we&#8217;re setting the threshold at 5 bad exits per second:</p>

              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;
const movingaverage = require('moving-average');
const THRESHOLD = 5.0;
const ma = movingaverage(1000);

if (cluster.isMaster) {
  for (var i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    if (!worker.exitedAfterDisconnect) {
      ma.push(Date.now(), 1);
    }
    cluster.fork();
  });

  http.createServer(function (req, res) {
    if (ma.movingAverage() < THRESHOLD) {
      res.writeHeader(500, {'Content-Type': 'text/plain'});
      res.end(ma.movingAverage() + ' errs/sec exceeds threshold of ' + THRESHOLD + '\n');
    } else {
      res.writeHeader(200, {'Content-Type': 'text/plain'});
      res.end('ok');
    }
  }).listen(8081);
} else {
  http.createServer(function (req, res) {
    //serve the real customer request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
  }).listen(8080);
}`
}
                </Padding>
              </Highlight>

              <p/>

              <h2 id="kardia">Kardia</h2>

              <p>Fortunately there&#8217;s an NPM package that automates most of the health check reporting you&#8217;d want to do from Node, called <a target="_blank" href="https://www.npmjs.com/package/kardia">Kardia</a>. Kardia is designed to work with Node clustering, providing a health check endpoint on the master process that can report on aggregated status for all of its workers, as well as register custom health check logic via the <code className={style.inlineCode}>registerHealthcheck</code> function.</p>

              <Highlight style={{background: '#303030'}}>
                <Padding>
{
`const http = require('http');
const cluster = require('cluster');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < cpus; i++) {
    cluster.fork();
  }

  var Kardia = require('kardia');
  var kardia = Kardia.start({name: "example-service", host: '0.0.0.0', port: 8081});

} else {
  var kardia = require('kardia');
  http.createServer(function (req, res) {
    //serve the real customer request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
  }).listen(8080);
}`
}
                </Padding>
              </Highlight>

              <p>Kardia has a ton more functionality than that, including event stacks, counters, and throughput. It can also integrate with Consul, fluentd and even aggregate statistics across more than one host. Overkill for many use cases, however getting started with it is still fairly easy.</p>

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

export default GuidesNodeChecks;
import { renderServer, renderClient } from './modules';

/*
 * This rendering happens on the client-side
 */
if (typeof document !== 'undefined') {
  renderClient();
}

/*
 * This is the render function used by the static site generator plugin.
 * It will get called once per route, generating the corresponding static
 * HTML for that route (e.g., /about will generate about.html).
 */
module.exports = (locals, callback) => renderServer(locals, callback);
import foo from './foo';

// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

/*
 * This is the render function used by the static site generator plugin.
 */
module.exports = function render(locals, callback) {
  callback(null, '<html>...</html>');
};
module.exports = PassThrough;
var __dep_exact_b12acdf897490fdf = require("gge-module:exact_b12acdf897490fdf");
function PassThrough(__s1param0) {
  if (!(this instanceof PassThrough)) {
    return new PassThrough(__s1param0);
  }
  __dep_exact_b12acdf897490fdf.call(this, __s1param0);
}
require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1")(PassThrough, __dep_exact_b12acdf897490fdf);
PassThrough.prototype._transform = function (__s4param0, __s4param1, __s4param2) {
  __s4param2(null, __s4param0);
};

var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(__s3param0, __s3param1) {
  this.handlers.push({
    fulfilled: __s3param0,
    rejected: __s3param1
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(__s5param0) {
  this.handlers[__s5param0] &&= null;
};
InterceptorManager.prototype.forEach = function forEach(__s7param0) {
  __dep_exact_6ce7d38fc7165545.forEach(this.handlers, function forEachHandler(__s9param0) {
    if (__s9param0 !== null) {
      __s7param0(__s9param0);
    }
  });
};
module.exports = InterceptorManager;

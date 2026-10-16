var __dep_exact_6ce7d38fc7165545 = require("gge-module:exact_6ce7d38fc7165545");
var __dep_exact_2416fb10de508ed7 = require("gge-module:exact_2416fb10de508ed7");
var __dep_class_Axios = require("gge-module:class_Axios");
var __dep_exact_6b2a0d86639e35c8 = require("gge-module:exact_6b2a0d86639e35c8");
function createInstance(__s1param0) {
  var __s1local0 = new __dep_class_Axios(__s1param0);
  var __s1local1 = __dep_exact_2416fb10de508ed7(__dep_class_Axios.prototype.request, __s1local0);
  __dep_exact_6ce7d38fc7165545.extend(__s1local1, __dep_class_Axios.prototype, __s1local0);
  __dep_exact_6ce7d38fc7165545.extend(__s1local1, __s1local0);
  return __s1local1;
}
var __s0local0 = createInstance(require("gge-module:exact_45e5b8490c4eebaf"));
__s0local0.Axios = __dep_class_Axios;
__s0local0.create = function create(__s3param0) {
  return createInstance(__dep_exact_6b2a0d86639e35c8(__s0local0.defaults, __s3param0));
};
__s0local0.Cancel = require("gge-module:class_Cancel");
__s0local0.CancelToken = require("gge-module:class_CancelToken");
__s0local0.isCancel = require("gge-module:exact_a40acf5af8b5b22e");
__s0local0.all = function all(__s5param0) {
  return Promise.all(__s5param0);
};
__s0local0.spread = require("gge-module:exact_76ac4c85e3f7e14a");
__s0local0.isAxiosError = require("gge-module:exact_173aed48ee80b456");
module.exports = __s0local0;
module.exports.default = __s0local0;

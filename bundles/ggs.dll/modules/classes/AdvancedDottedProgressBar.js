Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __s0local0 = function () {
  function AdvancedDottedProgressBar(__s3param0, __s3param1, __s3param2) {
    this.disp = __s3param0;
    this.instanceName = __s3param1;
    this.toolTipText = __s3param2;
    this.initBar();
  }
  AdvancedDottedProgressBar.prototype.initBar = function () {
    var __s5local0 = 0;
    var __s5local1 = false;
    for (this.dotList = []; !__s5local1;) {
      if (__s5local0 > 500) {
        __s5local1 = true;
      }
      if (this.disp[this.instanceName + __s5local0]) {
        this.dotList.push(this.disp[this.instanceName + __s5local0]);
        this.disp[this.instanceName + __s5local0].toolTipText = this.toolTipText;
      } else {
        __s5local1 = true;
      }
      __s5local0++;
    }
  };
  AdvancedDottedProgressBar.prototype.setLoadingBarPercent = function (__s12param0, __s12param1 = "") {
    for (var __s12local0 = __dep_exact_6fa490d8c1ec56fc.int(this.dotList.length), __s12local1 = 0; __s12local1 < __s12local0; __s12local1++) {
      this.dotList[__s12local1].visible = Number((__s12local1 + 1) / __s12local0) <= __s12param0;
      if (__s12param1 != "") {
        this.dotList[__s12local1].toolTipText = __s12param1;
      }
    }
  };
  return AdvancedDottedProgressBar;
}();
exports.AdvancedDottedProgressBar = __s0local0;

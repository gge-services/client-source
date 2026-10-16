Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CheckboxesGroup(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = 0) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheckboxesGroup, __s1param0);
  CheckboxesGroup.prototype.click = function (__s5param0) {
    this.selectButton(__s5param0, !this.isSelected(__s5param0));
  };
  return CheckboxesGroup;
}(require("gge-module:export_AChooseGroup").AChooseGroup);
exports.CheckboxesGroup = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISurveyFormField");

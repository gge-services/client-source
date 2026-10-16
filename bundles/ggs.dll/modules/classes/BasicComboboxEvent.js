Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function BasicComboboxEvent(__s3param0, __s3param1 = 0, __s3param2 = false, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.state = 0;
    __s3local0.userHasSelected = false;
    __s3local0.state = __s3param1;
    __s3local0.userHasSelected = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicComboboxEvent, __s1param0);
  BasicComboboxEvent.COMBOBOXCHANGE = "comboboxchange";
  BasicComboboxEvent.COMBOBOXSELECT = "comboboxselect";
  return BasicComboboxEvent;
}(createjs.Event);
exports.BasicComboboxEvent = __s0local0;

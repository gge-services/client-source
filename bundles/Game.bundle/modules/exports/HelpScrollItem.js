Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function HelpScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.actLikeButton = true;
    __s3local0.itxtField = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HelpScrollItem, __s1param0);
  HelpScrollItem.prototype.onActiveStateChange = function () {
    if (this.isActive) {
      this._disp.mc_bg.gotoAndStop(2);
    } else {
      this._disp.mc_bg.gotoAndStop(1);
    }
  };
  HelpScrollItem.prototype.customFillItem = function () {
    this.itxtField.textContentVO.stringValue = this.scrollItemVO.itemText;
  };
  Object.defineProperty(HelpScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return HelpScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.HelpScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");

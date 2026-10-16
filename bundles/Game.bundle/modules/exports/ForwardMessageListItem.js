Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ForwardMessageListItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ForwardMessageListItem, __s1param0);
  ForwardMessageListItem.prototype.customFillItem = function () {
    this.textFieldManager.registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.itemVO.name));
    this.textFieldManager.registerTextField(this._disp.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(this.itemVO.level + ""));
    this.textFieldManager.registerTextField(this._disp.txt_honor, new __dep_exact_92d05af59ee2ff30.TextVO(this.itemVO.honor + ""));
    this._disp.btn_moveLeft.toolTipText = "dialog_forwardMessage_removeRecipient";
    this._disp.btn_moveRight.toolTipText = "dialog_forwardMessage_addRecipient";
    this._disp.btn_moveLeft.visible = false;
    this._disp.btn_moveRight.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this._disp.btn_moveLeft, this._disp.btn_moveRight]);
  };
  ForwardMessageListItem.prototype.onRollOver = function (__s7param0) {
    if (this.itemVO.isReceiver) {
      this._disp.btn_moveLeft.visible = true;
    } else {
      this._disp.btn_moveRight.visible = true;
    }
  };
  ForwardMessageListItem.prototype.onRollOut = function (__s11param0) {
    this._disp.btn_moveLeft.visible = false;
    this._disp.btn_moveRight.visible = false;
  };
  Object.defineProperty(ForwardMessageListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForwardMessageListItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ForwardMessageListItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ForwardMessageListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");

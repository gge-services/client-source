Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleChatVO(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = null, __s3param6 = null, __s3param7 = null, __s3param8 = null) {
    this.txt_chat = __s3param0;
    this.txt_chat.textColor = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.txt_inputField = __s3param1;
    this.btn_submit = __s3param2;
    this.mc_inputBlocker = __s3param3;
    this.btn_scrollUp = __s3param4;
    this.btn_scrollDown = __s3param5;
    this.btn_slider = __s3param6;
    this.mc_sliderLine = __s3param7;
    this.visibilityItems = __s3param8;
    if (!this.txt_chat) {
      throw new Error("--> Error - CastleTextScrollVO(): There is no chatTextfield. (txt_chat is null)");
    }
    if (this.btn_slider && !this.mc_sliderLine) {
      throw new Error("--> Error - CastleTextScrollVO(): There is a SliderButton but no SliderLine.");
    }
  }
  CastleChatVO.prototype.getScrollVO = function () {
    return new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.txt_chat, this.btn_scrollUp, this.btn_scrollDown, this.btn_slider, this.mc_sliderLine, this.visibilityItems);
  };
  Object.defineProperty(CastleChatVO.prototype, "stage", {
    get: function () {
      if (this.txt_chat) {
        return this.txt_chat.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatVO;
}();
exports.CastleChatVO = __s0local0;
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");

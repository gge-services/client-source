Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTextScrollVO(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = null) {
    this.txt_content = __s3param0;
    this.btn_scrollUp = __s3param1;
    this.btn_scrollDown = __s3param2;
    this.btn_slider = __s3param3;
    this.mc_sliderLine = __s3param4;
    this.visibilityItems = __s3param5;
    if (!this.txt_content) {
      throw new Error("--> Error - CastleTextScrollVO(): There is no Textfield to scroll. (txt_content is null)");
    }
    if (this.btn_slider && !this.mc_sliderLine) {
      throw new Error("--> Error - CastleTextScrollVO(): There is a SliderButton but no SliderLine.");
    }
  }
  Object.defineProperty(CastleTextScrollVO.prototype, "stage", {
    get: function () {
      if (this.txt_content) {
        return this.txt_content.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleTextScrollVO;
}();
exports.CastleTextScrollVO = __s0local0;

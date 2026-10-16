Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Container;
var __s0local2 = function () {
  function BasicDebugHud() {}
  BasicDebugHud.showDebugInformationHud = function (__s5param0) {
    var __s5local0 = new __s0local1();
    __s5param0.addChild(__s5local0);
    BasicDebugHud._target = __s5local0;
    BasicDebugHud.removeDefaultItems();
    BasicDebugHud._xpos = 0;
    BasicDebugHud.displayTestModeViaFlashvarsInfo();
    BasicDebugHud.displayDebugModeInfo();
  };
  BasicDebugHud.removeDefaultItems = function () {};
  BasicDebugHud.displayDebugModeInfo = function () {};
  BasicDebugHud.displayTestModeViaFlashvarsInfo = function () {
    if (window.location.href.match(/test=(on|true|1)/)) {
      var __s11local0 = new __s0local0();
      __s11local0.graphics.beginFill("#EEC900");
      __s11local0.graphics.drawRect(BasicDebugHud._xpos, 0, BasicDebugHud.DEBUG_SQUARE_SIZE, BasicDebugHud.DEBUG_SQUARE_SIZE);
      BasicDebugHud._target.addChild(__s11local0);
      BasicDebugHud._xpos += BasicDebugHud.DEBUG_SQUARE_HORIZONTAL_GAP;
      BasicDebugHud.CONTEXT_INFO_TEXT_PREFIX;
      BasicDebugHud.DEBUG_MODE_CONTEXT_INFO_TEXT;
      BasicDebugHud.CONTEXT_INFO_TEXT_POSTFIX;
    }
  };
  BasicDebugHud.updateAwayFromKeyboardPixelVisibility = function (__s14param0) {
    if (BasicDebugHud._awayFromKeyboardStatusPixel) {
      BasicDebugHud._awayFromKeyboardStatusPixel.visible = !__s14param0;
    }
  };
  BasicDebugHud.CONTEXT_INFO_TEXT_PREFIX = "Running in [ ";
  BasicDebugHud.CONTEXT_INFO_TEXT_POSTFIX = " ] Mode";
  BasicDebugHud.DEBUG_MODE_CONTEXT_INFO_TEXT = "DEBUG";
  BasicDebugHud.TEST_MODE_CONTEXT_INFO_TEXT = "Test";
  BasicDebugHud.DEBUG_SQUARE_SIZE = 4;
  BasicDebugHud.DEBUG_SQUARE_HORIZONTAL_GAP = 4;
  return BasicDebugHud;
}();
exports.BasicDebugHud = __s0local2;

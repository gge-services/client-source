Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function PlaceholderToolTip() {}
  PlaceholderToolTip.show = function (__s5param0, __s5param1) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(PlaceholderToolTip.disp);
    PlaceholderToolTip.disp.addChild(__s5param1);
    var __s5local0 = __s5param0.localToGlobal(new __s0local1(0, 0));
    PlaceholderToolTip.disp.x = __s5local0.x;
    PlaceholderToolTip.disp.y = __s5local0.y - __s5param0.height / 2;
    this.disp.visible = true;
  };
  PlaceholderToolTip.showProxy = function (__s7param0) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(PlaceholderToolTip.disp);
    PlaceholderToolTip.disp.addChild(__s7param0);
    PlaceholderToolTip.disp.x = 0;
    PlaceholderToolTip.disp.y = 0;
    this.disp.visible = true;
  };
  PlaceholderToolTip.hideToolTip = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(PlaceholderToolTip.disp);
    this.disp.visible = false;
  };
  Object.defineProperty(PlaceholderToolTip, "disp", {
    get: function () {
      PlaceholderToolTip._disp ||= new __s0local0();
      return PlaceholderToolTip._disp;
    },
    enumerable: true,
    configurable: true
  });
  return PlaceholderToolTip;
}();
exports.PlaceholderToolTip = __s0local2;

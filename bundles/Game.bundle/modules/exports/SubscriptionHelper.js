Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function SubscriptionHelper() {}
  SubscriptionHelper.showSubscriptionStarToTextField = function (__s5param0, __s5param1, __s5param2, __s5param3 = null, __s5param4 = true, __s5param5 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR) {
    var __s5local0 = __s5param0.originalTextField;
    if (__s5param1) {
      __s5param3 ||= new __s0local0();
      if (__s5local0.parent.getChildByName("subStar") != null) {
        __s5local0.parent.removeChild(__s5local0.parent.getChildByName("subStar"));
      }
      var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0.x + __s5param3.x);
      var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.y + __s5local0.height + __s5param3.y);
      var __s5local3 = new Library.CastleInterfaceElements_Icons.Icon_SubscriptionStar();
      __s5local3.scaleX = __s5local3.scaleY = __s5param2 / __s5local3.width;
      if (__s5param4) {
        __s5local0.parent.addChild(__s5local3);
      }
      __s5local3.x = __s5local1;
      __s5local3.y = __s5local2;
      __s5local3.name = "subStar";
      __s5param0.color = __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION;
    } else {
      var __s5local4 = __s5local0.parent.getChildByName("subStar");
      __s5param0.color = __s5param5;
      if (!__s5local4) {
        return;
      }
      __s5local0.parent.removeChild(__s5local4);
    }
  };
  return SubscriptionHelper;
}();
exports.SubscriptionHelper = __s0local1;

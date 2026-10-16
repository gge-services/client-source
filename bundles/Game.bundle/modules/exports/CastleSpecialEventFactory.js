Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSpecialEventFactory() {}
  CastleSpecialEventFactory.createByEventType = function (__s5param0) {
    try {
      __s5param0 = __s5param0.substr(0, 1).toUpperCase() + __s5param0.substr(1);
      return new (__dep_exact_81dacdf05bd32292.getDefinitionByName(__s5param0 + "EventVO"))();
    } catch (__s8local0) {
      return null;
    }
  };
  CastleSpecialEventFactory.__initialize_static_members = function () {
    CastleSpecialEventFactory.EVENT_VO_CLASSPATH = "com.goodgamestudios.castle.model.components.specialevents.";
  };
  return CastleSpecialEventFactory;
}();
exports.CastleSpecialEventFactory = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function WorldmapEasterEggHelper() {}
  Object.defineProperty(WorldmapEasterEggHelper, "isCatModeActive", {
    get: function () {
      return WorldmapEasterEggHelper._isCatModeActive;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapEasterEggHelper.activateCatMode = function () {
    if (!WorldmapEasterEggHelper._isCatModeActive) {
      WorldmapEasterEggHelper._isCatModeActive = true;
      WorldmapEasterEggHelper.rebuildMapobjects();
    }
  };
  WorldmapEasterEggHelper.reset = function () {
    WorldmapEasterEggHelper._isCatModeActive = false;
  };
  WorldmapEasterEggHelper.rebuildMapobjects = function () {
    var __s12local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen;
    if (__s12local0 && __s12local0.renderer) {
      __s12local0.renderer.clearMapobjects(true, true);
    }
  };
  WorldmapEasterEggHelper.KEY_WORD_CAT_MODE = "iwantcats";
  WorldmapEasterEggHelper.ASSET_DUMMY_MAPOBJECT = "Dummy_Mapobject";
  WorldmapEasterEggHelper._isCatModeActive = false;
  return WorldmapEasterEggHelper;
}();
exports.WorldmapEasterEggHelper = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");

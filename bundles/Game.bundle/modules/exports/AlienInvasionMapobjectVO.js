Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_AAlienInvasionMapobjectVO = require("gge-module:export_AAlienInvasionMapobjectVO");
var __s0local0 = function (__s1param0) {
  function AlienInvasionMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "AlienInvasion";
    __s3local0.type = "-";
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._associatedEventID = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE;
    __s3local0._alienPlayerID = __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_USER_INVASION;
    __s3local0.areaType = __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ALIEN_CAMP;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlienInvasionMapobjectVO, __s1param0);
  Object.defineProperty(AlienInvasionMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("alienInvasion_castleName");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienInvasionMapobjectVO.prototype, "assetTypeName", {
    get: function () {
      return "AlienInvasion";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionMapobjectVO.AAlienInvasionMapobjectVO.prototype, "assetTypeName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return AlienInvasionMapobjectVO;
}(__dep_export_AAlienInvasionMapobjectVO.AAlienInvasionMapobjectVO);
exports.AlienInvasionMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");

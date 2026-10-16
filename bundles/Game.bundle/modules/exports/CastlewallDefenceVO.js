Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_ADefenceBuildingVO = require("gge-module:export_ADefenceBuildingVO");
var __dep_export_AShopVO = require("gge-module:export_AShopVO");
var __s0local0 = function (__s1param0) {
  function CastlewallDefenceVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Castlewall";
    __s3local0._group = "Defence";
    __s3local0._width = 1;
    __s3local0._height = 1;
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlewallDefenceVO, __s1param0);
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByBuildOrder", {
    get: function () {
      var __s5local0 = __dep_exact_f855840627e6e145.int(this.isoData ? this.isoData.objects.defences.currentWallLevel : __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel);
      return this.level == __s5local0 + 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByLevelAndEffect", {
    get: function () {
      return this.isAvailableByBuildOrder && Object.getOwnPropertyDescriptor(__dep_export_AShopVO.AShopVO.prototype, "isAvailableByLevelAndEffect").get.call(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isAvailableByLevel", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AShopVO.AShopVO.prototype, "isAvailableByLevel").get.call(this);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO.prototype, "isAvailableByLevel").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVO.prototype.getNameString = function () {
    return "castlewall_name";
  };
  Object.defineProperty(CastlewallDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVO.prototype.createInfoDialogItems = function (__s23param0) {
    __s23param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Defence, "dialog_defence_defenceBonusWall", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.wallBonus]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return CastlewallDefenceVO;
}(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO);
exports.CastlewallDefenceVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

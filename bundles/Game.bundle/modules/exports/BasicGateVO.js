Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ADefenceBuildingVO = require("gge-module:export_ADefenceBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function BasicGateVO() {
    var __s3local0 = this;
    __s3local0._gateBonus = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicGateVO, __s1param0);
  BasicGateVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    if (this.rotation == 0) {
      this._spawnPoints.push(new __s0local0(0, 1), new __s0local0(1, 1));
    } else {
      this._spawnPoints.push(new __s0local0(1, 0), new __s0local0(1, 1));
    }
  };
  BasicGateVO.prototype.parseXmlNode = function (__s9param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s9param0);
    this._gateBonus = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("gateBonus", __s9param0));
  };
  BasicGateVO.prototype.getNameString = function () {
    return this.group.toLowerCase() + "_name";
  };
  BasicGateVO.prototype.getShortInfoString = function () {
    return this.group.toLowerCase() + "_short_info";
  };
  BasicGateVO.prototype.getUpgradeInfoString = function () {
    return this.group.toLowerCase() + "_upgrade_info";
  };
  BasicGateVO.prototype.canUpgrade = function () {
    return __s1param0.prototype.canUpgrade.call(this) && this.level < __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel;
  };
  Object.defineProperty(BasicGateVO.prototype, "usesColorFourCrest", {
    get: function () {
      return this.level <= 1;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO.prototype, "usesColorFourCrest").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVO.prototype, "innerSpawnPoint", {
    get: function () {
      return this.spawnPoints[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGateVO.prototype, "outerSpawnPoint", {
    get: function () {
      return this.spawnPoints[1];
    },
    enumerable: true,
    configurable: true
  });
  BasicGateVO.prototype.createInfoPanelItems = function (__s27param0) {
    __s27param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_UnitPercent, "dialog_defence_defenceBonusGate", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.gateBonus]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      __s27param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(BasicGateVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGateVO;
}(__dep_export_ADefenceBuildingVO.ADefenceBuildingVO);
exports.BasicGateVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IShopVO", "ICostVO", "IInventoryVO");

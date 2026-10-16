Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __s0local0 = function (__s1param0) {
  function AABGBoosterBuildingVO() {
    var __s3local0 = this;
    __s3local0.skinID = 0;
    __s3local0.scoreSystemID = 0;
    __s3local0.lastSentPoints = 0;
    __s3local0.lastSentTimeStamp = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AABGBoosterBuildingVO, __s1param0);
  AABGBoosterBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this.skinID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("skinID", __s5param0));
    this.scoreSystemID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("scoringID", __s5param0));
  };
  AABGBoosterBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s1param0.prototype.createInfoPanelItems.call(this, __s7param0);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_InfluenceDepletion, "depletion_influence_tt", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("relicequip_dialog_relicDecrease_value_single", [this.mineVO.reductionDisplay]));
  };
  AABGBoosterBuildingVO.prototype.createInfoDialogItems = function (__s9param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s9param0);
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_InfluenceDepletion, "depletion_influence_tt", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("relicequip_dialog_relicDecrease_value_single", [this.mineVO.reductionDisplay]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  AABGBoosterBuildingVO.prototype.parseServerObject = function (__s11param0) {
    __s1param0.prototype.parseServerObject.call(this, __s11param0);
    if (__s11param0.length > 0) {
      this.lastSentPoints = __dep_exact_f855840627e6e145.int(__s11param0[2]);
      this.lastSentTimeStamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    }
  };
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "skinName", {
    get: function () {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    },
    enumerable: true,
    configurable: true
  });
  AABGBoosterBuildingVO.prototype.isAvailableInAreaType = function (__s16param0) {
    return !!__dep_export_ABGHelper.ABGHelper.abgEvent && __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.skinID == this.skinID && __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID == this.scoreSystemID && __s1param0.prototype.isAvailableInAreaType.call(this, __s16param0);
  };
  AABGBoosterBuildingVO.prototype.getVisualClassName = function () {
    var __s18local0 = this.name + "_" + this.group;
    if (this.type != "") {
      __s18local0 += "_" + this.type;
    }
    return __s18local0 + "_" + this.skinName;
  };
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "currentCollectedInfluencePoints", {
    get: function () {
      var __s21local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.lastSentTimeStamp;
      var __s21local1 = __dep_exact_f855840627e6e145.int(__s21local0 * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC * (this.mineVO.amountInfluencePerMinute / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC));
      return Math.min(this.lastSentPoints + __s21local1, this.mineVO.maxInfluencePoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGBoosterBuildingVO.prototype, "timeTillEmptyInSeconds", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this.mineVO.maxInfluencePoints - this.currentCollectedInfluencePoints) / (this.mineVO.amountInfluencePerMinute / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return AABGBoosterBuildingVO;
}(require("gge-module:export_AMineBuildingVO").AMineBuildingVO);
exports.AABGBoosterBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

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
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __s0local0 = function (__s1param0) {
  function ImperialCouncilHallBuildingVO() {
    var __s3local0 = this;
    __s3local0._offensiveToolsSpeedBoost = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ImperialCouncilHallBuildingVO, __s1param0);
  ImperialCouncilHallBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._offensiveToolsSpeedBoost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("offensiveToolsSpeedBoost", __s5param0));
  };
  ImperialCouncilHallBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.offensiveToolsSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ImperialCouncilHallBuildingVO.prototype.createInfoDialogItems = function (__s9param0) {
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.offensiveToolsSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(ImperialCouncilHallBuildingVO.prototype, "offensiveToolsSpeedBoost", {
    get: function () {
      return this._offensiveToolsSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  return ImperialCouncilHallBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ImperialCouncilHallBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GeneralGeneralSlotXmlVO(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "slotID", {
    get: function () {
      return this._slotID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "abilityGroupIDs", {
    get: function () {
      return this._abilityGroupIDs;
    },
    enumerable: true,
    configurable: true
  });
  GeneralGeneralSlotXmlVO.prototype.fillFromParamXml = function (__s10param0) {
    var __s10local0 = this;
    this._slotID = parseInt(__s10param0.slotID || "0");
    var __s10local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("abilityGroupIDs", __s10param0, ""), ",");
    this._abilityGroupIDs = [];
    __s10local1.forEach(function (__s12param0) {
      var __s12local0 = __dep_export_CastleModel.CastleModel.generalsData.getAbilityGroupByID(__s12param0);
      if (__s12local0 && __s12local0.length > 0) {
        __s10local0._abilityGroupIDs.push(__s12param0);
      }
    });
  };
  Object.defineProperty(GeneralGeneralSlotXmlVO.prototype, "abilityGroups", {
    get: function () {
      var __s15local0 = [];
      for (var __s15local1 = 0; __s15local1 < this.abilityGroupIDs.length; __s15local1++) {
        __s15local0.push(__dep_export_CastleModel.CastleModel.generalsData.getAbilityGroupByID(this.abilityGroupIDs[__s15local1]));
      }
      return __s15local0;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralGeneralSlotXmlVO;
}();
exports.GeneralGeneralSlotXmlVO = __s0local0;

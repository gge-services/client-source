Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CastleResearchCompleteDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._researchId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._researchId = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s3param0));
    __s3local0._researchVO = __dep_export_CastleModel.CastleModel.researchData.researchVOs.get(__s3local0._researchId);
    var __s3local1 = __s3local0._researchVO.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID);
    if (__s3local1) {
      __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.addNewBlueprints(__s3local1.effectValue.rawValues);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchCompleteDialogProperties, __s1param0);
  Object.defineProperty(CastleResearchCompleteDialogProperties.prototype, "researchVO", {
    get: function () {
      return this._researchVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchCompleteDialogProperties.prototype, "researchId", {
    get: function () {
      return this._researchId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResearchCompleteDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleResearchCompleteDialogProperties = __s0local0;

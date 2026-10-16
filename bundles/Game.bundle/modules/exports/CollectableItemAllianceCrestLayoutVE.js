Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CollectableItemAllianceCrestLayoutVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAllianceCrestLayoutVE, __s1param0);
  CollectableItemAllianceCrestLayoutVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
  };
  CollectableItemAllianceCrestLayoutVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.getAssetName(), __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getAssetName())));
  };
  CollectableItemAllianceCrestLayoutVE.prototype.tooltipCreate = function () {
    var __s9local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text);
    return __dep_exact_92d05af59ee2ff30.Localize.text("allianceCoat_Layout_name_" + this.collVO.layoutVO.allianceCoatLayoutID) + "\n" + __s9local0;
  };
  Object.defineProperty(CollectableItemAllianceCrestLayoutVE.prototype, "collVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemAllianceCrestLayoutVE.prototype.getAssetName = function () {
    return "Collectable_AllianceLayout_" + this.collVO.layoutVO.allianceCoatLayoutID;
  };
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldUpdate = function () {
    this.textfieldSetText(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text));
  };
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldSetTextAsNumber = function (__s19param0) {
    this.textfieldSetText(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text));
  };
  return CollectableItemAllianceCrestLayoutVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemAllianceCrestLayoutVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

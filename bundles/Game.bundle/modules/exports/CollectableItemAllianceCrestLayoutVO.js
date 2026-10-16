Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemAllianceCrestLayoutVO(__s3param0 = 0, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    __s3local0._durationInSeconds = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this).id = __s3param0;
    __s3local0._durationInSeconds = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAllianceCrestLayoutVO, __s1param0);
  CollectableItemAllianceCrestLayoutVO.prototype.parseServerObject = function (__s5param0) {
    this.id = __s5param0.ACLI;
    this._durationInSeconds = __s5param0.D;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    this._id = __dep_exact_f855840627e6e145.int(__s7local0[0]);
    this._durationInSeconds = __dep_exact_f855840627e6e145.int(__s7local0[1]);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.updateLayoutVO = function () {
    this._layoutVO = __dep_export_CastleModel.CastleModel.allianceCrestData.getLayoutVOById(this._id);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.clone = function () {
    var __s11local0 = __s1param0.prototype.clone.call(this);
    __s11local0.id = this._id;
    __s11local0.durationInSeconds = this._durationInSeconds;
    return __s11local0;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.isCombineAbleWith = function (__s13param0) {
    var __s13local0 = __s13param0;
    return !!__s13local0 && this._id == __s13local0.id;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.combineWith = function (__s15param0) {
    if (this.isCombineAbleWith(__s15param0)) {
      var __s15local0 = __s15param0;
      this._durationInSeconds += __s15local0.durationInSeconds;
    }
  };
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "layoutVO", {
    get: function () {
      return this._layoutVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s22param0) {
      this._id = __s22param0;
      this.updateLayoutVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    set: function (__s26param0) {
      this._durationInSeconds = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceCrestLayoutVO.prototype.getDescriptionTextId = function () {
    var __s28local0 = "";
    if (this.layoutVO.effects.length > 0) {
      for (var __s28local1 = 0, __s28local2 = this.layoutVO.effects; __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        if (__s28local0.length > 0) {
          __s28local0 += "\n";
        }
        __s28local0 += __dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_description_" + __s28local3.effect.name, __s28local3.effectValue.textReplacements);
      }
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_CoARewardPopUp_desc") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("allianceCoat_Layout_desc", [__s28local0]) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_CoALayoutDuration_desc", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(this.layoutVO.maxDuration)]);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.getNameTextId = function () {
    return "allianceCoat_Layout_name_" + this._layoutVO.allianceCoatLayoutID;
  };
  CollectableItemAllianceCrestLayoutVO.__initialize_static_members = function () {
    CollectableItemAllianceCrestLayoutVO.SERVER_KEY = "ACL";
    CollectableItemAllianceCrestLayoutVO.XML_KEY = "allianceCoatLayout";
  };
  return CollectableItemAllianceCrestLayoutVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemAllianceCrestLayoutVO = __s0local0;
__s0local0.__initialize_static_members();

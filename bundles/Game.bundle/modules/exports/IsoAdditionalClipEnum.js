Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoAdditionalClipEnum(__s3param0, __s3param1, __s3param2, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0._addWithoutSubClip = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._layerName = __s3param2;
    __s3local0._assetAndClipName = __s3param1;
    __s3local0._addWithoutSubClip = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoAdditionalClipEnum, __s1param0);
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "layerName", {
    get: function () {
      return this._layerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "assetAndClipName", {
    get: function () {
      return this._assetAndClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "addWithoutSubClip", {
    get: function () {
      return this._addWithoutSubClip;
    },
    enumerable: true,
    configurable: true
  });
  IsoAdditionalClipEnum.__initialize_static_members = function () {
    IsoAdditionalClipEnum.NONE = new IsoAdditionalClipEnum("none", "", "");
    IsoAdditionalClipEnum.FLAG = new IsoAdditionalClipEnum("flag", "FX_BuildingFlag", "flagHolder");
    IsoAdditionalClipEnum.DAMAGE = new IsoAdditionalClipEnum("damage", "FX_RoofFlame", "damageHolder", true);
    IsoAdditionalClipEnum.PLAGUE = new IsoAdditionalClipEnum("damage", "FX_RoofPlague", "damageHolder");
    IsoAdditionalClipEnum.SMOKE = new IsoAdditionalClipEnum("smoke", "", "smokeHolder");
    IsoAdditionalClipEnum.CAMP_FIRE = new IsoAdditionalClipEnum("campFire", "FX_Campfire", "fx_campfire");
    IsoAdditionalClipEnum.BARRACK_FIRE = new IsoAdditionalClipEnum("barrackFire", "FX_Campfire", "fx_barracksfire");
    IsoAdditionalClipEnum.COLOSSUS_FIRE = new IsoAdditionalClipEnum("colossusFire", "FX_Campfire", "fx_colossusFire");
    IsoAdditionalClipEnum.EXCLAMATION_MARK = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "fx_exclamationmark");
    IsoAdditionalClipEnum.EXCLAMATION_MARK2 = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "FX_Exclamationmark");
    IsoAdditionalClipEnum.EXCLAMATION_MARK3 = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "exclamation");
    IsoAdditionalClipEnum.KOC_FIRE1 = new IsoAdditionalClipEnum("kocFire1", "FX_Campfire", "fx_throne_fire1");
    IsoAdditionalClipEnum.KOC_FIRE2 = new IsoAdditionalClipEnum("kocFire2", "FX_Campfire", "fx_throne_fire2");
    IsoAdditionalClipEnum.KOC_FIRE3 = new IsoAdditionalClipEnum("kocFire3", "FX_Campfire", "fx_throne_fire3");
    IsoAdditionalClipEnum.KOC_FIRE4 = new IsoAdditionalClipEnum("kocFire4", "FX_Campfire", "fx_throne_fire4");
  };
  return IsoAdditionalClipEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoAdditionalClipEnum = __s0local0;
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function AreaDataEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._associatedClass = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataEnum, __s1param0);
  Object.defineProperty(AreaDataEnum.prototype, "associatedClass", {
    get: function () {
      return this._associatedClass;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataEnum.__initialize_static_members = function () {
    AreaDataEnum.COMMON_INFO = new AreaDataEnum("info", __dep_export_AreaDataCommonInfo.AreaDataCommonInfo);
    AreaDataEnum.ISO_DATA = new AreaDataEnum("isoData", __dep_export_IsoData.IsoData);
    AreaDataEnum.STORAGE = new AreaDataEnum("storage", __dep_export_AreaDataStorage.AreaDataStorage);
    AreaDataEnum.CONSTRUCTION_LIST = new AreaDataEnum("constructionList", __dep_export_AreaDataConstructionList.AreaDataConstructionList);
    AreaDataEnum.CONSTRUCTION_ITEMS = new AreaDataEnum("constructionItems", __dep_export_AreaDataConstructionItems.AreaDataConstructionItems);
    AreaDataEnum.MORALITY = new AreaDataEnum("morality", __dep_export_AreaDataMorality.AreaDataMorality);
    AreaDataEnum.SLUM = new AreaDataEnum("slum", __dep_export_AreaDataSlum.AreaDataSlum);
  };
  return AreaDataEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.AreaDataEnum = __s0local0;
var __dep_export_IsoData = require("gge-module:export_IsoData");
var __dep_export_AreaDataCommonInfo = require("gge-module:export_AreaDataCommonInfo");
var __dep_export_AreaDataConstructionItems = require("gge-module:export_AreaDataConstructionItems");
var __dep_export_AreaDataConstructionList = require("gge-module:export_AreaDataConstructionList");
var __dep_export_AreaDataMorality = require("gge-module:export_AreaDataMorality");
var __dep_export_AreaDataSlum = require("gge-module:export_AreaDataSlum");
var __dep_export_AreaDataStorage = require("gge-module:export_AreaDataStorage");
__s0local0.__initialize_static_members();

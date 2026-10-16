Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function ConstructorBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructorBuildingVE, __s1param0);
  Object.defineProperty(ConstructorBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Constructor;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ConstructorBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && __dep_export_CastleModel.CastleModel.constructionItemData.hasNewExpiredItems()) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
  };
  ConstructorBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED, this.bindFunction(this.onExpirationDataChanged));
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.NEC_RECEIVED, this.bindFunction(this.onExpirationDataChanged));
  };
  ConstructorBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED, this.bindFunction(this.onExpirationDataChanged));
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.NEC_RECEIVED, this.bindFunction(this.onExpirationDataChanged));
  };
  ConstructorBuildingVE.prototype.onExpirationDataChanged = function (__s16param0) {
    this.updateAdditionalClips();
  };
  ConstructorBuildingVE.prototype.getRingMenuButtons = function () {
    var __s18local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s18local0.push(new __dep_export_RingMenuButtonConstructor.RingMenuButtonConstructor());
    return __s18local0;
  };
  return ConstructorBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.ConstructorBuildingVE = __s0local0;
var __dep_export_RingMenuButtonConstructor = require("gge-module:export_RingMenuButtonConstructor");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");

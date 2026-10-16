Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastlePlagueMonkEventDialogProperties = require("gge-module:export_CastlePlagueMonkEventDialogProperties");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function PlagueEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlagueEventVO, __s1param0);
  Object.defineProperty(PlagueEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return PlagueEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Plague";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_PLAGUE_MONK;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  PlagueEventVO.prototype.openMerchantDialog = function (__s17param0, __s17param1) {
    this.executeOpenDialog(__s17param0, __dep_export_CastlePlagueMonkEventDialog.CastlePlagueMonkEventDialog, new __dep_export_CastlePlagueMonkEventDialogProperties.CastlePlagueMonkEventDialogProperties(this));
  };
  Object.defineProperty(PlagueEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_plagueDoctor_description";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "primesaleDescriptionTextID").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlagueEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return "dialog_primeday_primesale_plagueDoctor_banner";
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  PlagueEventVO.__initialize_static_members = function () {
    PlagueEventVO.EVENT_BUILDING_WOD = 289;
  };
  return PlagueEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.PlagueEventVO = __s0local0;
var __dep_export_CastlePlagueMonkEventDialog = require("gge-module:export_CastlePlagueMonkEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();

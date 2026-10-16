Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __s0local0 = function (__s1param0) {
  function AUnitProductionBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AUnitProductionBuildingVE, __s1param0);
  AUnitProductionBuildingVE.prototype.addEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
    __s1param0.prototype.addEventListener.call(this);
  };
  AUnitProductionBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
    __s1param0.prototype.removeEventListener.call(this);
  };
  AUnitProductionBuildingVE.prototype.getRingMenuButtons = function () {
    var __s9local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s9local0.push(new __dep_export_RingMenuButtonRecruit.RingMenuButtonRecruit());
    __s9local0.push(new __dep_export_RingMenuButtonProduce.RingMenuButtonProduce());
    __s9local0.push(new __dep_export_RingMenuButtonOverseer.RingMenuButtonOverseer());
    return __s9local0;
  };
  AUnitProductionBuildingVE.prototype.onPackageUpdate = function (__s11param0) {
    this.updateStatusIcon();
  };
  Object.defineProperty(AUnitProductionBuildingVE.prototype, "unitProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AUnitProductionBuildingVE;
}(require("gge-module:export_AProductionBuildingVE").AProductionBuildingVE);
exports.AUnitProductionBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RingMenuButtonOverseer = require("gge-module:export_RingMenuButtonOverseer");
var __dep_export_RingMenuButtonProduce = require("gge-module:export_RingMenuButtonProduce");
var __dep_export_RingMenuButtonRecruit = require("gge-module:export_RingMenuButtonRecruit");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");

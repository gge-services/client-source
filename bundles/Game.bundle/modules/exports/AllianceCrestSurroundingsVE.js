Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestCreationDialog = require("gge-module:export_AllianceCrestCreationDialog");
var __dep_export_CastleAllianceMessageToallDialogProperties = require("gge-module:export_CastleAllianceMessageToallDialogProperties");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function AllianceCrestSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestSurroundingsVE, __s1param0);
  AllianceCrestSurroundingsVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  AllianceCrestSurroundingsVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  AllianceCrestSurroundingsVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(AllianceCrestSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestSurroundingsVE.prototype.onLevelUp = function (__s15param0) {
    this.updateAdditionalClips();
  };
  AllianceCrestSurroundingsVE.prototype.onMouseClick = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_AllianceCrestCreationDialog.AllianceCrestCreationDialog, new __dep_export_CastleAllianceMessageToallDialogProperties.CastleAllianceMessageToallDialogProperties(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO));
  };
  return AllianceCrestSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.AllianceCrestSurroundingsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");

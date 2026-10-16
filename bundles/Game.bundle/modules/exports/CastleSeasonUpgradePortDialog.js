Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSeasonUpgradePortDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonUpgradePortDialog, __s1param0);
  CastleSeasonUpgradePortDialog.prototype.getClipColor = function () {
    var __s5local0 = [];
    __s5local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo));
    return __s5local0;
  };
  CastleSeasonUpgradePortDialog.prototype.getPictureClassName = function () {
    return "UpgradePortPicture_Level" + (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel + 1);
  };
  CastleSeasonUpgradePortDialog.__initialize_static_members = function () {
    CastleSeasonUpgradePortDialog.NAME = "CastleUpgradePort";
  };
  return CastleSeasonUpgradePortDialog;
}(require("gge-module:export_CastleSeasonBaseRepairDialog").CastleSeasonBaseRepairDialog);
exports.CastleSeasonUpgradePortDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

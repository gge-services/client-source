Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_BuildingDistrictDialog = require("gge-module:export_BuildingDistrictDialog");
var __dep_export_BuildingDistrictDialogProperties = require("gge-module:export_BuildingDistrictDialogProperties");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __s0local0 = function (__s1param0) {
  function ADistrictGachaEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADistrictGachaEventVO, __s1param0);
  ADistrictGachaEventVO.prototype.hasDistrict = function () {
    return !!this.getDistrictBuildingVO();
  };
  ADistrictGachaEventVO.prototype.getDistrictBuildingVO = function () {
    return __dep_export_Iso.Iso.data.objects.provider.getFunctionalBuildingByType(this.getDistrictType());
  };
  ADistrictGachaEventVO.prototype.openDialog = function (__s9param0 = true) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_GachaEventMainDialog.GachaEventMainDialog);
  };
  ADistrictGachaEventVO.prototype.openDistrictDialog = function () {
    var __s11local0 = this.getDistrictBuildingVO();
    if (__s11local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_BuildingDistrictDialog.BuildingDistrictDialog, new __dep_export_BuildingDistrictDialogProperties.BuildingDistrictDialogProperties(__s11local0));
    }
  };
  ADistrictGachaEventVO.prototype.getDistrictType = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ADistrictGachaEventVO.prototype, "animationFPS", {
    get: function () {
      return 24;
    },
    enumerable: true,
    configurable: true
  });
  return ADistrictGachaEventVO;
}(require("gge-module:export_AGachaEventVO").AGachaEventVO);
exports.ADistrictGachaEventVO = __s0local0;

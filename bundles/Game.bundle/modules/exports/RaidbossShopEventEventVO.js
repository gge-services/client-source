Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ApprenticeSmithEventDialog = require("gge-module:export_ApprenticeSmithEventDialog");
var __dep_export_ApprenticeSmithEventDialogProperties = require("gge-module:export_ApprenticeSmithEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function RaidbossShopEventEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RaidbossShopEventEventVO, __s1param0);
  RaidbossShopEventEventVO.prototype.getEventPackagesByCurrencyType = function (__s5param0) {
    var __s5local0 = this.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE);
    var __s5local1 = [];
    if (__s5local0 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined && __s5local4.getXmlCosts().containsTypeVO(__s5param0)) {
          __s5local1.push(__s5local4);
        }
      }
    }
    return __s5local1;
  };
  RaidbossShopEventEventVO.prototype.openMerchantDialog = function (__s11param0, __s11param1) {
    this.executeOpenDialog(__s11param0, __dep_export_ApprenticeSmithEventDialog.ApprenticeSmithEventDialog, new __dep_export_ApprenticeSmithEventDialogProperties.ApprenticeSmithEventDialogProperties(this, __s11param1, this.eventId));
  };
  Object.defineProperty(RaidbossShopEventEventVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return RaidbossShopEventEventVO;
}(require("gge-module:export_BuyPackagesEventVO").BuyPackagesEventVO);
exports.RaidbossShopEventEventVO = __s0local0;

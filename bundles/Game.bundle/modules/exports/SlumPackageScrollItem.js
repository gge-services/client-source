Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSlumPackageBuyDialogProperties = require("gge-module:export_CastleSlumPackageBuyDialogProperties");
var __s0local0 = function (__s1param0) {
  function SlumPackageScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumPackageScrollItem, __s1param0);
  Object.defineProperty(SlumPackageScrollItem.prototype, "isLocked", {
    get: function () {
      var __s5local0 = this.slumPackageScrollItemVO;
      return __s5local0.activeSlumLevel < __s5local0.level;
    },
    enumerable: true,
    configurable: true
  });
  SlumPackageScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.disp.mc_locked.visible = this.isLocked;
  };
  SlumPackageScrollItem.prototype.handleTooltip = function () {
    __s1param0.prototype.handleTooltip.call(this);
    if (this.isLocked) {
      this.disp.toolTipText = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_buy_levellock", [this.slumPackageScrollItemVO.level]);
    }
  };
  SlumPackageScrollItem.prototype.createDialogProperties = function () {
    var __s12local0 = new __dep_export_CastleSlumPackageBuyDialogProperties.CastleSlumPackageBuyDialogProperties();
    __s12local0.parseDataFromSlumPackageScrollItemVO(this.slumPackageScrollItemVO);
    return __s12local0;
  };
  Object.defineProperty(SlumPackageScrollItem.prototype, "slumPackageScrollItemVO", {
    get: function () {
      return this.packageScrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return SlumPackageScrollItem;
}(require("gge-module:export_AMerchantScrollItem").AMerchantScrollItem);
exports.SlumPackageScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");

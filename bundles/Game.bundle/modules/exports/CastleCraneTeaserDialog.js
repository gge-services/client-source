Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleCraneTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleCraneTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCraneTeaserDialog, __s1param0);
  CastleCraneTeaserDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.lastDiscountLevel + 1);
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy5, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_discount", [__s5local0, this.dialogProperties.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.seal.tfPercentage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProperties.discount]));
  };
  CastleCraneTeaserDialog.prototype.initLoaded = function (__s7param0 = null) {
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnBuild]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy4, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_copy4"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy5, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_craneteaser_discount", [0, 0]));
    this.textFieldManager.registerTextField(this.dialogDisp.seal.tfPercentage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.dialogDisp.btnBuild.toolTipText = "dialog_craneteaser_buildNow";
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleCraneTeaserDialog.prototype.onClick = function (__s9param0) {
    switch (__s9param0.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnBuild:
        this.hide();
        __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
        if (this.layoutManager.isInMyCastleBuildMode) {
          var __s9local0 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1);
          var __s9local1 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
          __s9local1.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL);
          __s9local1.centerAndHighlightBuildingInShop(__s9local0);
        }
    }
  };
  Object.defineProperty(CastleCraneTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraneTeaserDialog.__initialize_static_members = function () {
    CastleCraneTeaserDialog.NAME = "CastleCraneTeaser";
  };
  return CastleCraneTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleCraneTeaserDialog = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

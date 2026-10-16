Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __dep_export_SlumPackageScrollItemVO = require("gge-module:export_SlumPackageScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleSlumPackageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSlumPackageDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumPackageDialog, __s1param0);
  CastleSlumPackageDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.slumUpdatedLevel));
    this.buyPackagesComponent.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleSlumPackageDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.slumUpdatedLevel));
    this.buyPackagesComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleSlumPackageDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.initBasicButtons([this.dialogDisp.btn_upgrade]);
    this.initLevelBars();
    this.titleBar = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.titleBar.autoFitToBounds = true;
  };
  CastleSlumPackageDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_charHolder);
    this.dialogDisp.mc_charHolder.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CastleSlumPackageCharacter_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleSlumPackageCharacter_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName), null, 0, false).asDisplayObject());
    this.setCurrentUpgradeBarState();
    this.updateLevelBars();
  };
  CastleSlumPackageDialog.prototype.setCurrentUpgradeBarState = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_upgrade, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_level", [__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel]));
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel < __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.slumVOs.length - 1) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, true);
      this.dialogDisp.btn_upgrade.toolTipText = "dialog_village_upgrade_title";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, false);
      this.dialogDisp.btn_upgrade.toolTipText = "dialog_alliance_maxUpgradeLevel";
    }
  };
  CastleSlumPackageDialog.prototype.setSlumText = function (__s17param0) {
    this.titleBar.textContentVO.textId = __s17param0;
  };
  CastleSlumPackageDialog.prototype.initBasicButtons = function (__s19param0) {
    __s19param0 = __s19param0.concat([this.dialogDisp.btn_upgrade]);
    __s1param0.prototype.initBasicButtons.call(this, __s19param0);
  };
  CastleSlumPackageDialog.prototype.getItemListVOs = function () {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel);
    var __s21local1 = [];
    for (var __s21local2 = 0, __s21local3 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.slumVOs; __s21local2 < __s21local3.length; __s21local2++) {
      var __s21local4 = __s21local3[__s21local2];
      if (__s21local4 !== undefined) {
        for (var __s21local5 = 0, __s21local6 = __s21local4.packages; __s21local5 < __s21local6.length; __s21local5++) {
          var __s21local7 = __s21local6[__s21local5];
          if (__s21local7 !== undefined && __s21local7.isVisible(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType)) {
            var __s21local8 = new __dep_export_SlumPackageScrollItemVO.SlumPackageScrollItemVO();
            __s21local8.eventPackageVO = __s21local7;
            __s21local8.specialEventVO = this.dialogProperties.buyPackageEventVO;
            __s21local8.slumVO = __s21local4;
            __s21local8.level = __s21local4.level;
            __s21local8.activeSlumLevel = __s21local0;
            __s21local1.push(__s21local8);
          }
        }
      }
    }
    return __s21local1;
  };
  CastleSlumPackageDialog.prototype.onScroll = function (__s29param0) {
    this.updateLevelBars();
  };
  CastleSlumPackageDialog.prototype.initLevelBars = function () {
    for (var __s31local0 = 0; __s31local0 < 3; __s31local0++) {
      this.dialogDisp.itemList2["item" + __s31local0].bg.gotoAndStop(this.backgroundFrame);
    }
  };
  Object.defineProperty(CastleSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageDialog.prototype.updateLevelBars = function () {
    var __s37local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.activeSlumLevel);
    for (var __s37local1 = 0; __s37local1 < 3; __s37local1++) {
      var __s37local2 = this.dialogDisp.itemList2["item" + __s37local1];
      var __s37local3 = __dep_exact_f855840627e6e145.int(this.buyPackagesComponent.currentStartIndex / 2 + __s37local1 + 1);
      if (__s37local0 < __s37local3) {
        this.textFieldManager.registerTextField(__s37local2.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_needlevel", [__s37local3]));
        __s37local2.visible = true;
      } else {
        __s37local2.visible = false;
      }
    }
  };
  CastleSlumPackageDialog.prototype.slumUpdatedLevel = function (__s43param0) {
    this.updateLevelBars();
    this.buyPackagesComponent.update();
    this.setCurrentUpgradeBarState();
  };
  CastleSlumPackageDialog.prototype.onClick = function (__s45param0) {
    __s1param0.prototype.onClick.call(this, __s45param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s45param0.target)) {
      switch (__s45param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", "");
          break;
        case this.dialogDisp.btn_upgrade:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSlumDonateUpdateDialog.CastleSlumDonateUpdateDialog);
      }
    }
  };
  CastleSlumPackageDialog.prototype.onMouseOver = function (__s49param0) {
    __s1param0.prototype.onMouseOver.call(this, __s49param0);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s49param0.target, "MovieClip") && __s49param0.target.equipVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s49param0.target, __s49param0.target.equipVO);
    }
  };
  CastleSlumPackageDialog.__initialize_static_members = function () {
    CastleSlumPackageDialog.ASSET_NAME = "CastleSlumPackage";
  };
  return CastleSlumPackageDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleSlumPackageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSlumDonateUpdateDialog = require("gge-module:export_CastleSlumDonateUpdateDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

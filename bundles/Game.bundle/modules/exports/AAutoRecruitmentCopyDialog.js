Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SDuplicateRecruitmentInfoVO = require("gge-module:export_C2SDuplicateRecruitmentInfoVO");
var __dep_export_C2SDuplicateRecruitmentLoopVO = require("gge-module:export_C2SDuplicateRecruitmentLoopVO");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_AutoRecruitmentEvent = require("gge-module:export_AutoRecruitmentEvent");
var __dep_export_AutoRecruitmentInfoEvent = require("gge-module:export_AutoRecruitmentInfoEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_AutoRecruitmentCopySublayerProperties = require("gge-module:export_AutoRecruitmentCopySublayerProperties");
var __s0local0 = function (__s1param0) {
  function AAutoRecruitmentCopyDialog(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AAutoRecruitmentCopyDialog.ASSET_URL)) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoRecruitmentCopyDialog, __s1param0);
  AAutoRecruitmentCopyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_double.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_purchaseLoop_costs_doubling")).autoFitToBounds = true;
    this._itxt_amount = this.textFieldManager.registerTextField(this.dialogDisp.mc_amount.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this._itxt_amount.autoFitToBounds = true;
    this.updateTabs();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_amount.toolTipText = this.recruitmentAmountToolTip;
    this.dialogDisp.mc_amount.mouseChildren = false;
    this._listComponent = new __dep_export_AutoRecruitmentCopyListComponent.AutoRecruitmentCopyListComponent(this.dialogDisp.mc_list, this.listItemClass);
  };
  AAutoRecruitmentCopyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_COPY_SUCCESS, this.bindFunction(this.onCopySuccess));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.addEventListener(__dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, this.bindFunction(this.onDuplicateRecruitmentInfoResponse));
    this.requestDRI();
  };
  AAutoRecruitmentCopyDialog.prototype.requestDRI = function () {
    this.showLoading();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDuplicateRecruitmentInfoVO.C2SDuplicateRecruitmentInfoVO(this.dialogProperties.listId, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID));
  };
  AAutoRecruitmentCopyDialog.prototype.hideOnLoading_0 = function () {
    this.hide();
  };
  AAutoRecruitmentCopyDialog.prototype.showLoading = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(this.hideOnLoading_0), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  AAutoRecruitmentCopyDialog.prototype.removeLoading = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  AAutoRecruitmentCopyDialog.prototype.onDuplicateRecruitmentInfoResponse = function (__s17param0) {
    if (__s17param0.response) {
      this.dialogProperties.parseServerInformation(__s17param0.serverData);
      this._listComponent.initWithNewData(this.dialogProperties.listData);
      this._listComponent.onShow();
      this.setupSublayer();
      this._sublayerSwitcher.switchTo(AAutoRecruitmentCopyDialog.SUBLAYER_COSTS);
      this._sublayerSwitcher.show();
      this.updateAmount();
      this.updateTabs();
      this.updateOkButton();
      this._listComponent.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
      this._sublayerSwitcher.addOnSwitchedListener(this.bindFunction(this.onTabSwitched));
      this.removeLoading();
    } else {
      this.hide();
    }
  };
  AAutoRecruitmentCopyDialog.prototype.onPackageListUpdated = function (__s21param0) {
    if (__dep_export_CastleModel.CastleModel.militaryData.getPackageListById(this.dialogProperties.listId).slotsInUse == 0) {
      this.hide();
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties("attention", this.alertOnCloseTextID));
      return;
    }
    this.requestDRI();
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onTabSwitched = function (__s26param0) {
    this.updateTabs();
  };
  AAutoRecruitmentCopyDialog.prototype.updateTabs = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tab_queue.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.overviewTabTextID)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.tab_costs.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.costTabTextID)).autoFitToBounds = true;
  };
  AAutoRecruitmentCopyDialog.prototype.updateAmount = function () {
    var __s30local0;
    var __s30local1 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListById(this.dialogProperties.listId);
    for (var __s30local2 = __dep_exact_f855840627e6e145.int(__s30local1.slotsArray.length), __s30local3 = __dep_exact_f855840627e6e145.int(__s30local1.currentProductionSlot.amount), __s30local4 = 0; __s30local4 < __s30local2; __s30local4++) {
      __s30local0 = __s30local1.getSlotByArrayPos(__s30local4);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s30local0, "UnitPackageSlotVO") && __s30local0.amount > 0) {
        __s30local3 += __dep_exact_f855840627e6e145.int(__s30local0.amount);
      }
    }
    this._itxt_amount.textContentVO.stringValue = String(__s30local3);
  };
  AAutoRecruitmentCopyDialog.prototype.setupSublayer = function () {
    if (!this._sublayerSwitcher) {
      this._sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(function () {
        return new __dep_export_AutoRecruitmentCopySublayerProperties.AutoRecruitmentCopySublayerProperties(this.dialogProperties.listId, this.dialogProperties.loopFeeCosts, this._listComponent);
      });
      this._sublayerSwitcher.add(AAutoRecruitmentCopyDialog.SUBLAYER_COSTS, this.dialogDisp.tab_costs, new __dep_export_AutoRecruitmentCopyCostSublayer.AutoRecruitmentCopyCostSublayer(this.dialogDisp.mc_costs));
      this._sublayerSwitcher.add(AAutoRecruitmentCopyDialog.SUBLAYER_OVERVIEW, this.dialogDisp.tab_queue, new __dep_export_AutoRecruitmentCopyQueueInfoSublayer.AutoRecruitmentCopyQueueInfoSublayer(this.dialogDisp.mc_queue));
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "costTabTextID", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onPurchaseLoopedSlots = function (__s46param0) {
    this.onOkButton();
  };
  AAutoRecruitmentCopyDialog.prototype.onCopySuccess = function (__s48param0) {
    this.hide();
  };
  AAutoRecruitmentCopyDialog.prototype.hide = function () {
    this.removeLoading();
    this.controller.removeEventListener(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_COPY_SUCCESS, this.bindFunction(this.onCopySuccess));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
    this.controller.removeEventListener(__dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, this.bindFunction(this.onDuplicateRecruitmentInfoResponse));
    this._listComponent.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
    if (this._sublayerSwitcher) {
      this._sublayerSwitcher.removeOnSwitchedListener(this.bindFunction(this.onTabSwitched));
      this._sublayerSwitcher.hide();
    }
    __s1param0.prototype.hide.call(this);
  };
  AAutoRecruitmentCopyDialog.prototype.updateOkButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this._listComponent.getSelectedCastlesCount() > 0);
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "listItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.prototype.onClick = function (__s57param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s57param0.target)) {
      switch (__s57param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
          break;
        case this.dialogDisp.btn_help:
          this.onHelpButton();
      }
    }
  };
  AAutoRecruitmentCopyDialog.prototype.onHelpButton = function () {};
  AAutoRecruitmentCopyDialog.prototype.onOkButton = function () {
    var __s63local0 = [];
    for (var __s63local1 = 0, __s63local2 = this._listComponent.listData; __s63local1 < __s63local2.length; __s63local1++) {
      var __s63local3 = __s63local2[__s63local1];
      if (__s63local3 !== undefined && __s63local3.isSelected) {
        __s63local0.push({
          SID: __s63local3.kingdomId,
          AID: __s63local3.areaId
        });
      }
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDuplicateRecruitmentLoopVO.C2SDuplicateRecruitmentLoopVO(this.dialogProperties.listId, __s63local0, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId));
  };
  AAutoRecruitmentCopyDialog.prototype.onItemSelectionChanged = function () {
    this.updateOkButton();
  };
  Object.defineProperty(AAutoRecruitmentCopyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyDialog.__initialize_static_members = function () {
    AAutoRecruitmentCopyDialog.ASSET_URL = "AutoRecruitmentCopy";
    AAutoRecruitmentCopyDialog.SUBLAYER_COSTS = 0;
    AAutoRecruitmentCopyDialog.SUBLAYER_OVERVIEW = 1;
  };
  return AAutoRecruitmentCopyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AAutoRecruitmentCopyDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_AutoRecruitmentCopyCostSublayer = require("gge-module:export_AutoRecruitmentCopyCostSublayer");
var __dep_export_AutoRecruitmentCopyQueueInfoSublayer = require("gge-module:export_AutoRecruitmentCopyQueueInfoSublayer");
var __dep_export_AutoRecruitmentCopyListComponent = require("gge-module:export_AutoRecruitmentCopyListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

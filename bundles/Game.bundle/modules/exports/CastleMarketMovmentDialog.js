Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMarketMovmentDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMarketMovmentDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMarketMovmentDialog, __s1param0);
  CastleMarketMovmentDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_marketMovement_title"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_marketMovement_desc_hasGoods"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._movementResourceList = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_ressourceList, Library.CastleInterfaceElements.ResourceListCompnent_Item);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome]);
  };
  CastleMarketMovmentDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.mapMovementVO;
    if (__s7local0.lootList.length > 0) {
      this.itxt_description.textContentVO.textId = "dialog_marketMovement_desc_hasGoods";
    } else {
      this.itxt_description.textContentVO.textId = "dialog_marketMovement_desc_hasNoGoods";
    }
    this.dialogDisp.mc_ressourceList.visible = __s7local0.lootList.length > 0;
    this._movementResourceList.updateComponent(__s7local0.lootList, __dep_exact_92d05af59ee2ff30.Localize.text("goods"));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(__s7local0, this.bindFunction(this.hide));
    this.onArmyDataUpdated(null);
  };
  CastleMarketMovmentDialog.prototype.onArmyRemoved = function (__s11param0) {
    if (__s11param0.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleMarketMovmentDialog.prototype.onArmyDataUpdated = function (__s14param0) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleMarketMovmentDialog.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      switch (__s18param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_marketMovment"));
      }
    }
  };
  CastleMarketMovmentDialog.prototype.hideLoaded = function (__s22param0 = null) {
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
  };
  Object.defineProperty(CastleMarketMovmentDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMarketMovmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMarketMovmentDialog.__initialize_static_members = function () {
    CastleMarketMovmentDialog.NAME = "CastleMarketMovement";
  };
  return CastleMarketMovmentDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMarketMovmentDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

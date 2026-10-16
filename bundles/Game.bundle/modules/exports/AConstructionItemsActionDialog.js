Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SReplaceConstructionItemVO = require("gge-module:export_C2SReplaceConstructionItemVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AConstructionItemsActionDialog(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AConstructionItemsActionDialog, __s1param0);
  AConstructionItemsActionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_accept, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
  };
  AConstructionItemsActionDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itxt_Timer = null;
    this._expiringCI = null;
  };
  AConstructionItemsActionDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_accept:
          this.onClickAccept();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.onClickCancel();
      }
    }
  };
  AConstructionItemsActionDialog.prototype.onClickAccept = function () {
    this.hide();
  };
  AConstructionItemsActionDialog.prototype.onClickCancel = function () {
    this.hide();
  };
  AConstructionItemsActionDialog.prototype.sendReplaceCommand = function (__s17param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReplaceConstructionItemVO.C2SReplaceConstructionItemVO(this.dialogProperties.buildingVO.objectId, this.dialogProperties.constructionItemVO.id, this.dialogProperties.slotVO.index, __s17param0, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId));
  };
  AConstructionItemsActionDialog.prototype.renderBuilding = function (__s19param0, __s19param1) {
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s19param0, __s19param1.mc_icon, __s19param1.width, __s19param1.height);
  };
  AConstructionItemsActionDialog.prototype.renderConstructionItem = function (__s21param0, __s21param1, __s21param2 = false, __s21param3 = null) {
    var __s21local0 = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s21param1), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, AConstructionItemsActionDialog.CONSTRUCTION_ITEM_SIZE));
    __s21local0.changeItemVO(new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO(__s21param0.id));
    __s21local0.options.icon.renderAsBroken = __s21param2;
    __s21local0.update();
    this.collectableRenderList.push(__s21local0);
    if (__s21param3) {
      if (__s21param0.isTemporary) {
        __s21param3.visible = true;
        __s21param3.toolTipText = "resttime";
        __s21param3.mouseChildren = false;
        var __s21local1 = this.textFieldManager.registerTextField(__s21param3.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s21param0.getRemainingTime())));
        if (__s21param0.isExpiring()) {
          this._itxt_Timer = __s21local1;
          this._expiringCI = __s21param0;
          __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
        }
      } else {
        __s21param3.visible = false;
      }
    }
  };
  AConstructionItemsActionDialog.prototype.onTimer = function (__s27param0) {
    if (this._itxt_Timer && this._expiringCI) {
      this._itxt_Timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this._expiringCI.getRemainingTime());
    }
  };
  Object.defineProperty(AConstructionItemsActionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AConstructionItemsActionDialog.__initialize_static_members = function () {
    AConstructionItemsActionDialog.CONSTRUCTION_ITEM_SIZE = new __s0local0(52, 52);
  };
  return AConstructionItemsActionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AConstructionItemsActionDialog = __s0local1;
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

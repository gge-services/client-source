Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SMarketCarriageNotifyVO = require("gge-module:export_C2SMarketCarriageNotifyVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTradeMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTradeMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTradeMessageDialog, __s1param0);
  CastleTradeMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.dialogDisp.mc_nameEnemy.mc_searchAlliance.visible = false;
    this.dialogDisp.mc_nameOwn.mc_searchAlliance.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_startAttack_from"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_to, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_startAttack_to"));
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tradeMessage_title"));
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tradeMessage_description"));
    this.icastleOwn_txt ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_nameOwn.castleName_txt, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.icastleNmy_txt ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_nameEnemy.castleName_txt, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleTradeMessageDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.itxt_title.textContentVO.textId = "dialog_tradeMessage_title";
    this.itxt_description.textContentVO.textId = "dialog_tradeMessage_description";
    this._tradeMessageResourceList = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_resources, __dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleResourceListCompnentItem"));
  };
  CastleTradeMessageDialog.prototype.showLoaded = function (__s9param0 = null) {
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.GET_TRADE_DATA, this.bindFunction(this.onGetTradeData));
    this.requestTradeData();
    __s1param0.prototype.showLoaded.call(this, __s9param0);
  };
  CastleTradeMessageDialog.prototype.hideLoaded = function (__s11param0 = null) {
    this._tradeMessageResourceList.destroy();
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.GET_TRADE_DATA, this.bindFunction(this.onGetTradeData));
  };
  CastleTradeMessageDialog.prototype.requestTradeData = function () {
    this.isWaitingForServerMessage = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarketCarriageNotifyVO.C2SMarketCarriageNotifyVO(this.infoProperties.messageVO.messageID));
  };
  CastleTradeMessageDialog.prototype.onGetTradeData = function (__s15param0) {
    this.isWaitingForServerMessage = false;
    var __s15local0 = __s15param0.params;
    if (__s15local0) {
      this._ownerAreaVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s15local0[0].gaa.AI[0]);
      this._targetAreaVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s15local0[0].gaa.AI[1]);
      this.fillUserCastle();
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, __dep_export_CastleModel.CastleModel.userData.playerCrest);
      this.drawEnemyCastle();
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest0, this._ownerAreaVO.ownerInfo.crest);
      var __s15local1 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s15local0[0].R);
      this._tradeMessageResourceList.updateComponent(__s15local1, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_tradeMessage_resourcesSent"));
    } else {
      this.hide();
    }
  };
  CastleTradeMessageDialog.prototype.fillUserCastle = function (__s19param0 = null) {
    var __s19local0 = this._targetAreaVO;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder1);
    this.dialogDisp.mc_holder1.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s19local0, new __s0local0(100, 75), true, false, true, "panel_action_jumpTo"));
    this.icastleNmy_txt.textContentVO.stringValue = __s19local0.areaNameString;
    this.dialogDisp.mc_nameEnemy.mc_dove.visible = false;
    this.dialogDisp.mc_nameEnemy.mc_rank.visible = false;
    this.dialogDisp.mc_nameEnemy.mc_searchAlliance.visible = false;
  };
  CastleTradeMessageDialog.prototype.drawEnemyCastle = function () {
    var __s21local0 = this._ownerAreaVO;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder0);
    this.dialogDisp.mc_holder0.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s21local0, new __s0local0(100, 75), true, false, true, "panel_action_jumpTo"));
    this.icastleOwn_txt.textContentVO.stringValue = __s21local0.areaNameString;
    this.dialogDisp.mc_nameOwn.mc_dove.visible = false;
    this.dialogDisp.mc_nameOwn.mc_searchAlliance.visible = false;
    this.dialogDisp.mc_nameOwn.mc_rank.visible = false;
  };
  CastleTradeMessageDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleTradeMessageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTradeMessageDialog.__initialize_static_members = function () {
    CastleTradeMessageDialog.NAME = "CastleTradeMessage";
  };
  return CastleTradeMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTradeMessageDialog = __s0local1;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

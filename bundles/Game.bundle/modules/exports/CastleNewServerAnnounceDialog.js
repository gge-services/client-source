Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleNewServerAnnounceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNewServerAnnounceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNewServerAnnounceDialog, __s1param0);
  CastleNewServerAnnounceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mail_newServer_header"));
  };
  CastleNewServerAnnounceDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy;
    var __s7local1 = this.getServerName(__s7local0.selectedInstanceVO);
    var __s7local2 = this.getServerName(__s7local0.getInstanceVOByZoneID(this.dialogProperties.zoneId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mail_newServer_desc2", [__s7local2]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_instructions, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mail_newServer_instructions", [__s7local2]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mail_newServer_desc3", [__s7local1]));
    var __s7local3 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO(this.dialogProperties.wodId);
    var __s7local4 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_reward);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s7local4, __s7local3, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(80, 87)));
    this.dialogDisp.mc_reward.mouseChildren = true;
    if (this.dialogProperties.url) {
      this.displayLink();
    } else {
      this.dialogProperties.onLinkReceived.addOnce(this.bindFunction(this.displayLink));
    }
  };
  CastleNewServerAnnounceDialog.prototype.getServerName = function (__s11param0) {
    if (__s11param0) {
      if (__s11param0.instanceLocaId) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__s11param0.instanceLocaId) + __s11param0.instanceCountID;
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__s11param0.instanceLocaId);
      }
    } else {
      return "[New server name will be here, hopefully]";
    }
  };
  CastleNewServerAnnounceDialog.prototype.displayLink = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_link, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.url));
  };
  CastleNewServerAnnounceDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.txt_link:
        this.goToURL();
    }
  };
  CastleNewServerAnnounceDialog.prototype.goToURL = function () {
    __dep_exact_81dacdf05bd32292_2.navigateToURL(new __dep_exact_81dacdf05bd32292.URLRequest(this.dialogProperties.url), "_blank");
  };
  Object.defineProperty(CastleNewServerAnnounceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNewServerAnnounceDialog.__initialize_static_members = function () {
    CastleNewServerAnnounceDialog.NAME = "CastleNewServerAnnounceDialog";
  };
  return CastleNewServerAnnounceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNewServerAnnounceDialog = __s0local1;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

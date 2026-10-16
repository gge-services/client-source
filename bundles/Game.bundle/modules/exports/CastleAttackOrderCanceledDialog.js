Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAttackOrderCanceledDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAttackOrderCanceledDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAttackOrderCanceledDialog, __s1param0);
  CastleAttackOrderCanceledDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_jumpTo]);
    this.dialogDisp.mc_coords.toolTipText = "coordinates";
    this.dialogDisp.mc_coords.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.crestComponent = new __dep_export_CastleCastleCrestComponent.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
    this.jumpToButton = new __dep_export_ButtonJumpToAllianceBookmark.ButtonJumpToAllianceBookmark(this.dialogDisp.btn_jumpTo);
    this.itxt_coords = this.textFieldManager.registerTextField(this.dialogDisp.mc_coords.txt_coords, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COORDS, [0, 0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.titleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.copyTextId));
  };
  CastleAttackOrderCanceledDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    if (this.dialogProperties.bookmarkVO) {
      this.initComponents();
    } else {
      this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
      __dep_export_CastleModel.CastleModel.messageData.getBodyForTextMessage(this.dialogProperties.messageID);
    }
  };
  CastleAttackOrderCanceledDialog.prototype.onMessageBodyAvailable = function (__s11param0) {
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    this.dialogProperties.bookmarkVO = __dep_export_CastleModel.CastleModel.bookmarkData.parseBookmarkObject(__s11param0.params[1]);
    this.initComponents();
  };
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete", {
    get: function () {
      return !this.dialogProperties.bookmarkVO || !this.dialogProperties.bookmarkVO.worldmapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderCanceledDialog.prototype.initComponents = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    if (this.isMessageObsolete) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_quitTournament"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_66")));
      this.hide();
      return;
    }
    var __s15local0;
    var __s15local1 = this.dialogProperties.bookmarkVO;
    __s15local0 = __s15local1.kingdomId == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s15local1.worldmapObjectVO.ownerInfo) : __s15local1.worldmapObjectVO.ownerInfo.crest;
    this.crestComponent.initComponent(__s15local0, __s15local1.worldmapObjectVO);
    var __s15local2 = this.getPosition();
    this.itxt_coords.textContentVO.textReplacements = [__s15local2.x, __s15local2.y];
    this.jumpToButton.init(__s15local1.worldmapObjectVO);
    this.initAttackOrderDetails();
  };
  CastleAttackOrderCanceledDialog.prototype.getPosition = function () {
    return new __s0local0(this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPosX, this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPosY);
  };
  CastleAttackOrderCanceledDialog.prototype.initAttackOrderDetails = function () {
    this.dialogDisp.mc_details.visible = false;
  };
  CastleAttackOrderCanceledDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    this.jumpToButton.destroy();
  };
  CastleAttackOrderCanceledDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helperTextId));
          break;
        case this.dialogDisp.btn_jumpTo:
          this.jumpToButton.onClick();
      }
    }
  };
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "helperTextId", {
    get: function () {
      return "help_alliance_bookmarks_attackMessage";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "copyTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackCanceled_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "titleTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackCanceled_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderCanceledDialog.__initialize_static_members = function () {
    CastleAttackOrderCanceledDialog.NAME = "CastleBookmarkAttackOrderMessage";
  };
  return CastleAttackOrderCanceledDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAttackOrderCanceledDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonJumpToAllianceBookmark = require("gge-module:export_ButtonJumpToAllianceBookmark");
var __dep_export_CastleCastleCrestComponent = require("gge-module:export_CastleCastleCrestComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

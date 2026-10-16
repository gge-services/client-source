Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleMessageTipDialog() {
    var __s3local0 = this;
    __s3local0._textId = 0;
    __s3local0._imageId = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleMessageTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageTipDialog, __s1param0);
  CastleMessageTipDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_description, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
  };
  CastleMessageTipDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this);
    if (this.msgTipProperties) {
      this._textId = __dep_exact_f855840627e6e145.int(this.msgTipProperties.offerID);
      this._imageId = __dep_exact_f855840627e6e145.int(this.msgTipProperties.privateOfferType);
    }
    this.setupText();
    this.dialogDisp.btnMessageTipHelp.mouseChildren = false;
    this.dialogDisp.btnMessageTipHelp.actLikeButton = true;
    this._scrollComponent.scrollToStart();
  };
  CastleMessageTipDialog.prototype.setupImage = function () {
    if (this.msgTipProperties) {
      this._imageId = __dep_exact_f855840627e6e145.int(this.msgTipProperties.privateOfferType);
    }
    this.tipGraphic = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("MessageTip_" + this._imageId, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.messageImageId), null, 0, false);
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageImageId", {
    get: function () {
      return "MessageTip_" + this._imageId;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.prototype.setupText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.messageTitleId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.messageDescriptionId));
    this.textFieldManager.registerTextField(this.dialogDisp.btnMessageTipHelp.tf_help, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.messageHelpId));
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageHelpId", {
    get: function () {
      return "dialog_helper_ingameHelpLink";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageDescriptionId", {
    get: function () {
      return "dialog_messageTip_body_" + this._textId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageTitleId", {
    get: function () {
      return "dialog_messageTip_title_" + this._textId;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.prototype.showLoaded = function (__s23param0 = null) {
    if (this._scrollComponent) {
      this._scrollComponent.onShow();
    }
    this.setupImage();
    __s1param0.prototype.showLoaded.call(this);
    if (this.tipGraphic != null) {
      this.dialogDisp.picHolder.addChild(this.tipGraphic);
    }
  };
  CastleMessageTipDialog.prototype.hideLoaded = function (__s27param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
    while (this.dialogDisp.picHolder.numChildren > 0) {
      this.dialogDisp.picHolder.removeChildAt(0);
    }
  };
  CastleMessageTipDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btnMessageTipHelp:
      case this.dialogDisp.btn_help:
        this.hide();
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_INGAMEHELP_COMMAND);
    }
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "msgTipProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.__initialize_static_members = function () {
    CastleMessageTipDialog.NAME = "CastleMessageTipDialog";
  };
  return CastleMessageTipDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMessageTipDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

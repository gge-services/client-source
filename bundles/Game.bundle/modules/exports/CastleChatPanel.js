Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleChatVO = require("gge-module:export_CastleChatVO");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleChatPanel() {
    return __s1param0.call(this, new Library.CastleInterfaceElements.ChatPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChatPanel, __s1param0);
  CastleChatPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.chatPanel, 1);
    this.chatPanel.mouseChildren = false;
    this.textFieldManager.registerTextField(this.chatPanel.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("allianceChat"));
    this._chatComponent = new __dep_export_CastleChatComponent.CastleChatComponent(new __dep_export_CastleChatVO.CastleChatVO(this.chatPanel.txt_chat), this);
    this._chatComponent.maxShownMessages = 4;
  };
  CastleChatPanel.prototype.show = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this._chatComponent.onShow();
      __s1param0.prototype.show.call(this);
      this.updateVisibility();
      this.allowCaching = true;
    }
  };
  CastleChatPanel.prototype.hide = function () {
    this._chatComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleChatPanel.prototype.addEventListenerOnInit = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleChatPanel.prototype.removeEventListenerOnDestroy = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleChatPanel.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
  };
  CastleChatPanel.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
  };
  CastleChatPanel.prototype.updateVisibility = function () {
    this.chatPanel.visible = __dep_export_CastleModel.CastleModel.settingsData.miniChatVisible;
  };
  CastleChatPanel.prototype.updatePosition = function () {
    var __s22local0 = 0;
    var __s22local1 = 0;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      __s22local0 = 40;
      __s22local1 = 85;
    }
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight + this.dispOffset.y + __s22local0;
      this.disp.x = this.disp.stage.stageWidth + this.dispOffset.x + __s22local1;
    }
  };
  CastleChatPanel.prototype.onAllianceStatusChanged = function (__s26param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.show();
    } else {
      this.hide();
    }
  };
  CastleChatPanel.prototype.onSettingChanged = function (__s30param0) {
    this.updateVisibility();
  };
  CastleChatPanel.prototype.onClick = function (__s32param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      __s1param0.prototype.onClick.call(this, __s32param0);
      switch (__s32param0.target) {
        case this.chatPanel:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION));
      }
    }
  };
  Object.defineProperty(CastleChatPanel.prototype, "dispOffset", {
    get: function () {
      if (this.layoutManager.isInTreasureEvent) {
        return CastleChatPanel.SEASION_OFFSET;
      } else {
        return CastleChatPanel.NORMAL_OFFSET;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatPanel.prototype, "chatPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleChatPanel.__initialize_static_members = function () {
    CastleChatPanel.NORMAL_OFFSET = new __s0local0(-329, -50);
    CastleChatPanel.SEASION_OFFSET = new __s0local0(-165, -50);
  };
  CastleChatPanel.NAME = "CastleChatPanel";
  return CastleChatPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleChatPanel = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChatComponent = require("gge-module:export_CastleChatComponent");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__s0local1.__initialize_static_members();

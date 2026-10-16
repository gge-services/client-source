Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialog() {
    return __s1param0.call(this, CastleAllianceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialog, __s1param0);
  CastleAllianceDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    if (this.dialogDisp.txt_title) {
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    }
    this.dialogDisp.cat_forge.visible = false;
    this.dialogDisp.btn_tab_forge.visible = true;
    this._subLayer = new Map();
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_OVERVIEW, new __dep_export_CastleAllianceDialogOverview.CastleAllianceDialogOverview(this.dialogDisp.cat_overview));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MEMBERLIST, new __dep_export_CastleAllianceDialogMemberlist.CastleAllianceDialogMemberlist(this.dialogDisp.cat_memberlist));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MANAGEMENT, new __dep_export_CastleAllianceDialogManagement.CastleAllianceDialogManagement(this.dialogDisp.cat_management));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_TREASURY, new __dep_export_CastleAllianceDialogTreasury.CastleAllianceDialogTreasury(this.dialogDisp.cat_treasury));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION, new __dep_export_CastleAllianceDialogCommunication.CastleAllianceDialogCommunication(this.dialogDisp.cat_communication));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_DIPLOMACY, new __dep_export_CastleAllianceDialogDiplomacy.CastleAllianceDialogDiplomacy(this.dialogDisp.cat_diplomacy));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FAME, new __dep_export_CastleAllianceDialogFame.CastleAllianceDialogFame(this.dialogDisp.cat_fame));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE, new __dep_export_CastleAllianceDialogForge.CastleAllianceDialogForge(this.dialogDisp.cat_forge));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE_HIGH, new __dep_export_CastleAllianceDialogForgeHigh.CastleAllianceDialogForgeHigh(this.dialogDisp.cat_forgeHigh));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_BOOKMARKS, new __dep_export_CastleAllianceDialogBookmarks.CastleAllianceDialogBookmarks(this.dialogDisp.cat_bookmarks));
    this._subLayer.set(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_ABG, new __dep_export_CastleAllianceDialogABG.CastleAllianceDialogABG(this.dialogDisp.cat_abg));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_overview, this.dialogDisp.btn_memberlist, this.dialogDisp.btn_management, this.dialogDisp.btn_treasury, this.dialogDisp.btn_chat, this.dialogDisp.btn_diplomacy, this.dialogDisp.btn_fame, this.dialogDisp.btn_tab_forge, this.dialogDisp.btn_tab_abg, this.dialogDisp.btn_bookmarks]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_overview.toolTipText = "dialog_alliance_overview";
    this.dialogDisp.btn_memberlist.toolTipText = "dialog_alliance_memberlist";
    this.dialogDisp.btn_management.toolTipText = "dialog_alliance_management";
    this.dialogDisp.btn_treasury.toolTipText = "dialog_alliance_treasury_tooltip";
    this.dialogDisp.btn_chat.toolTipText = "allianceForum";
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    this.dialogDisp.btn_fame.toolTipText = "level";
    this.dialogDisp.btn_tab_forge.toolTipText = "dialog_alliance_tab_forge";
    this.dialogDisp.btn_tab_abg.toolTipText = "dialog_alliance_centersOfPower_title";
    this.dialogDisp.btn_bookmarks.toolTipText = "Bookmarks_addBookmark_allianceTab_tooltip";
  };
  CastleAllianceDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    this.initHeader();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_diplomacy, !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_fame, !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    this.dialogDisp.btn_fame.visible = !__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector;
    this.dialogDisp.btn_tab_abg.visible = __dep_export_ABGHelper.ABGHelper.isOnABGAndCollector;
    this.dialogDisp.btn_tab_forge.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay();
  };
  CastleAllianceDialog.prototype.initHeader = function () {
    var __s14local0;
    var __s14local1 = true;
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      __s14local1 = !__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO || __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO.isEmpty;
    }
    this.dialogDisp.header_standard.visible = __s14local1;
    this.dialogDisp.header_crest.visible = !__s14local1;
    __s14local0 = __s14local1 ? this.dialogDisp.header_standard.txt_title : this.dialogDisp.header_crest.txt_title;
    if (this.itxt_title) {
      this.textFieldManager.unregisterTextFieldByReference(this.itxt_title);
    }
    this.itxt_title = this.textFieldManager.registerTextField(__s14local0, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_title.textContentVO.stringValue = this.allianceInfoVO ? this.allianceInfoVO.allianceName : "";
  };
  Object.defineProperty(CastleAllianceDialog.prototype, "allianceInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialog.prototype.drawAllianceCrest = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.header_crest.alliance_symbol_container_left);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.header_crest.alliance_symbol_container_right);
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && !__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO.isEmpty) {
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.header_crest.alliance_symbol_container_left, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.M, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.header_crest.alliance_symbol_container_right, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.M, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
    }
  };
  CastleAllianceDialog.prototype.applyPropertiesLoaded = function (__s23param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s23param0);
    this._currentCategory = __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_NONE;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
    this.lockDialog();
  };
  CastleAllianceDialog.prototype.onAllianceStatusChanged = function (__s25param0) {
    if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.hide();
    }
  };
  CastleAllianceDialog.prototype.onOwnAllianceDataUpdated = function (__s28param0) {
    if (this.allianceInfoVO) {
      if (this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_NONE) {
        if (this.dialogProperties.defaultCatergory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_NONE) {
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_OVERVIEW);
        } else {
          this.changeCategory(this.dialogProperties.defaultCatergory);
        }
      } else {
        this.showSublayer(this._currentSublayer, [this.allianceInfoVO, this.dialogProperties]);
      }
      this.dialogDisp.btn_diplomacy.icon.gotoAndStop(this.allianceInfoVO.allianceRequestAvailable ? 2 : 1);
      this.unLockDialog();
      this.initHeader();
      this.drawAllianceCrest();
    }
  };
  CastleAllianceDialog.prototype.onClick = function (__s35param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s35param0.target)) {
      __s1param0.prototype.onClick.call(this, __s35param0);
      switch (__s35param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_overview:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_OVERVIEW);
          break;
        case this.dialogDisp.btn_memberlist:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MEMBERLIST);
          break;
        case this.dialogDisp.btn_management:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MANAGEMENT);
          break;
        case this.dialogDisp.btn_treasury:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_TREASURY);
          break;
        case this.dialogDisp.btn_chat:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION);
          break;
        case this.dialogDisp.btn_diplomacy:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_DIPLOMACY);
          break;
        case this.dialogDisp.btn_fame:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FAME);
          break;
        case this.dialogDisp.btn_tab_forge:
          if (__dep_exact_26a421b704832cff.AllianceForgeConst.canUseRelicAllianceForge(__dep_export_CastleModel.CastleModel.userData.userLegendLevel)) {
            this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE_HIGH);
          } else {
            this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE);
          }
          break;
        case this.dialogDisp.btn_bookmarks:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_BOOKMARKS);
          break;
        case this.dialogDisp.btn_tab_abg:
          this.changeCategory(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_ABG);
      }
    }
  };
  CastleAllianceDialog.prototype.changeCategory = function (__s41param0) {
    if (this._currentCategory != __s41param0) {
      if (__s41param0 == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE && __dep_exact_26a421b704832cff.AllianceForgeConst.canUseRelicAllianceForge(__dep_export_CastleModel.CastleModel.userData.userLegendLevel)) {
        __s41param0 = __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE_HIGH;
      }
      __s1param0.prototype.changeCategory.call(this, __s41param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.allianceInfoVO, this.dialogProperties]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_overview, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_OVERVIEW);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_memberlist, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MEMBERLIST);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_management, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_MANAGEMENT);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_treasury, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_TREASURY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_chat, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_diplomacy, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_DIPLOMACY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_fame, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FAME);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_forge, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE || this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_FORGE_HIGH);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_bookmarks, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_BOOKMARKS);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_abg, this._currentCategory == __dep_export_ClientConstAlliance.ClientConstAlliance.CAT_ABG);
    }
  };
  CastleAllianceDialog.prototype.hideLoaded = function (__s45param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s45param0);
  };
  Object.defineProperty(CastleAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialog.__initialize_static_members = function () {
    CastleAllianceDialog.DEFAULT_BEHAVIOR = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE_INSTANCE);
  };
  CastleAllianceDialog.NAME = "CastleAlliance_JUL2026";
  return CastleAllianceDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceDialog = __s0local0;
var __dep_export_CastleAllianceDialogCommunication = require("gge-module:export_CastleAllianceDialogCommunication");
var __dep_export_CastleAllianceDialogABG = require("gge-module:export_CastleAllianceDialogABG");
var __dep_export_CastleAllianceDialogBookmarks = require("gge-module:export_CastleAllianceDialogBookmarks");
var __dep_export_CastleAllianceDialogDiplomacy = require("gge-module:export_CastleAllianceDialogDiplomacy");
var __dep_export_CastleAllianceDialogFame = require("gge-module:export_CastleAllianceDialogFame");
var __dep_export_CastleAllianceDialogForge = require("gge-module:export_CastleAllianceDialogForge");
var __dep_export_CastleAllianceDialogForgeHigh = require("gge-module:export_CastleAllianceDialogForgeHigh");
var __dep_export_CastleAllianceDialogManagement = require("gge-module:export_CastleAllianceDialogManagement");
var __dep_export_CastleAllianceDialogMemberlist = require("gge-module:export_CastleAllianceDialogMemberlist");
var __dep_export_CastleAllianceDialogOverview = require("gge-module:export_CastleAllianceDialogOverview");
var __dep_export_CastleAllianceDialogTreasury = require("gge-module:export_CastleAllianceDialogTreasury");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

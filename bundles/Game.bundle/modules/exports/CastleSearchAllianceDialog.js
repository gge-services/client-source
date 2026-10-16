Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceSetSearchAllianceVO = require("gge-module:export_C2SAllianceSetSearchAllianceVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_ListSearchAllianceItemVO = require("gge-module:export_ListSearchAllianceItemVO");
var __s0local0 = function (__s1param0) {
  function CastleSearchAllianceDialog() {
    var __s3local0 = this;
    __s3local0._isSearching = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSearchAllianceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSearchAllianceDialog, __s1param0);
  CastleSearchAllianceDialog.prototype.initLoaded = function (__s5param0) {
    var __s5local0 = this;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    __s1param0.prototype.initLoaded.call(this);
    var __s5local1 = new __dep_export_SimplePopoverConfig.SimplePopoverConfig("StatusPopover");
    __s5local1.waitDuration = -1;
    __s5local1.fadeInDuration = 0;
    __s5local1.fadeOutDuration = 0;
    __s5local1.closeOnClick = false;
    __s5local1.useClickArea = false;
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(__s5local1);
    this._popoverComponent.doWhenLoaded(function () {
      var __s8local0 = __s5local0._popoverComponent.getAssetDisp();
      __s8local0.mc_icon.gotoAndStop(2);
      __s5local0.textFieldManager.registerTextField(__s8local0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("searchingOngoing")).autoFitToBounds = true;
    });
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_searchAlliance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_language, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_language_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_language_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yes, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_no, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_btn_no"));
    this.textFieldManager.registerTextField(this.dialogDisp.item0.txt_recommended, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("recommended_quest")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_searchAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_lookingForAlliance_name"));
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.dialogDisp.icon_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp.mc_searchAllianceHelp.toolTipText = "dialog_alliance_ImSearching";
    this._searchListComponent = new __dep_exact_9e901e8e2483a22f.ItemList(this.dialogDisp);
    this._searchListComponent.scrollItemClass = __dep_export_ListSearchAllianceItem.ListSearchAllianceItem;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_allianceLanguage], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.chkBox_yes, this.dialogDisp.chkBox_no]);
  };
  CastleSearchAllianceDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this._popoverComponent.onShow();
    this._searchListComponent.clear();
    this._isSearching = __dep_export_CastleModel.CastleModel.userData.isSearchingAlliance;
    this.isSearching = this._isSearching;
    this.setAllianceLanguage("", false);
    this.fillList(this.dialogProperties.searchList);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleAllianceSearchEvent.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, this.bindFunction(this.onSearchUpdated));
  };
  CastleSearchAllianceDialog.prototype.onSearchUpdated = function (__s12param0) {
    this._popoverComponent.endSequence();
    this.fillList(__s12param0.searchList);
  };
  CastleSearchAllianceDialog.prototype.onClickScrollistItem = function (__s14param0) {
    var __s14local0 = __dep_exact_f855840627e6e145.int(__s14param0.scrollItem.itemVO.listVO.allianceID);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s14local0), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleSearchAllianceDialog.prototype.fillList = function (__s16param0) {
    this._searchListComponent.clear();
    if (__s16param0 != null) {
      for (var __s16local0 = 0, __s16local1 = __s16param0; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          var __s16local3 = new __dep_export_ListSearchAllianceItemVO.ListSearchAllianceItemVO();
          __s16local3.listVO = __s16local2;
          this._searchListComponent.pushContent(__s16local3);
        }
      }
    }
    this._searchListComponent.initList();
    this._searchListComponent.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  Object.defineProperty(CastleSearchAllianceDialog.prototype, "isSearching", {
    set: function (__s22param0) {
      if (this._isSearching != __s22param0) {
        this._isSearching = __s22param0;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceSetSearchAllianceVO.C2SAllianceSetSearchAllianceVO(__s22param0));
      }
      __dep_export_CastleModel.CastleModel.userData.isSearchingAlliance = this._isSearching;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes, this._isSearching);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no, !this._isSearching);
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchAllianceDialog.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    switch (__s25param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.chkBox_yes:
        this.isSearching = true;
        break;
      case this.dialogDisp.chkBox_no:
        this.isSearching = false;
        break;
      case this.dialogDisp.btn_allianceLanguage:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceLanguageSelectionDialog.AllianceLanguageSelectionDialog, new __dep_export_AllianceLanguageSelectionDialogProperties.AllianceLanguageSelectionDialogProperties(this.selectedAllianceLanguage, this.bindFunction(this.setAllianceLanguage), true));
    }
  };
  CastleSearchAllianceDialog.prototype.hideLoaded = function (__s28param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s28param0);
    this._searchListComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    this._popoverComponent.onHide();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleAllianceSearchEvent.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, this.bindFunction(this.onSearchUpdated));
  };
  CastleSearchAllianceDialog.prototype.setAllianceLanguage = function (__s30param0, __s30param1 = true) {
    this.selectedAllianceLanguage = __s30param0;
    __dep_export_CastleAllianceForumData.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = __s30param0;
    if (this.selectedAllianceLanguage != "") {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("language_native_" + this.selectedAllianceLanguage));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allLanguages_desc"));
    }
    if (__s30param1) {
      this.fillList(null);
      this._popoverComponent.startSequence();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAutoAllianceSearchVO.C2SAutoAllianceSearchVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_name_default"), "", this.selectedAllianceLanguage));
    }
  };
  Object.defineProperty(CastleSearchAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchAllianceDialog.NAME = "CastleAllianceSearch_W";
  return CastleSearchAllianceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSearchAllianceDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_ListSearchAllianceItem = require("gge-module:export_ListSearchAllianceItem");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AllianceLanguageSelectionDialog = require("gge-module:export_AllianceLanguageSelectionDialog");
var __dep_export_AllianceLanguageSelectionDialogProperties = require("gge-module:export_AllianceLanguageSelectionDialogProperties");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleAllianceSearchEvent = require("gge-module:export_CastleAllianceSearchEvent");
var __dep_export_C2SAutoAllianceSearchVO = require("gge-module:export_C2SAutoAllianceSearchVO");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

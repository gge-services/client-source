Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceApplicationListVO = require("gge-module:export_C2SAllianceApplicationListVO");
var __dep_export_C2SAllianceSearchMemberListVO = require("gge-module:export_C2SAllianceSearchMemberListVO");
var __dep_export_C2SAllianceSetSearchMemberVO = require("gge-module:export_C2SAllianceSetSearchMemberVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_CastleSearchMemberDialogProperties = require("gge-module:export_CastleSearchMemberDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSearchMemberDialog() {
    var __s3local0 = this;
    __s3local0._isSearching = false;
    __s3local0._isAccepting = false;
    __s3local0._isNowSearching = false;
    __s3local0._isNowAccepting = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSearchMemberDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSearchMemberDialog, __s1param0);
  CastleSearchMemberDialog.prototype.initLoaded = function (__s5param0 = null) {
    if (!this._subLayer) {
      this._subLayer = new Map();
      this._subLayer.set(CastleSearchMemberDialog.CAT_REQUESTS, new __dep_export_CastleSearchMemberDialogApplications.CastleSearchMemberDialogApplications(this.dialogDisp.cat_requestList));
      this._subLayer.set(CastleSearchMemberDialog.CAT_MEMBERLIST, new __dep_export_CastleSearchMemberDialogSearch.CastleSearchMemberDialogSearch(this.dialogDisp.cat_searchList));
    }
    this.hideAllSublayer();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_getNewMember"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yes, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_no, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_btn_no"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_joinall, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_btn_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_joinno, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_btn_no"));
    this.dialogDisp.mc_joinStatus.toolTipText = "dialog_alliance_openAlliance_icon_tooltip";
    this.dialogDisp.btn_openRequests.toolTipText = "dialog_alliance_openRequests";
    this.dialogDisp.btn_searchMember.toolTipText = "dialog_alliance_searchMember";
    this.dialogDisp.mc_searchStatus.toolTipText = "dialog_alliance_WeAreSearching";
    this.dialogDisp.mc_searchStatus.mouseChildren = false;
    this._isSearching = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isSearchingMembers;
    this._isAccepting = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isAcceptingMembers;
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.chkBox_yes, this.dialogDisp.chkBox_no, this.dialogDisp.chkBox_yes2, this.dialogDisp.chkBox_no2, this.dialogDisp.btn_openRequests, this.dialogDisp.btn_searchMember]);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_yes);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_yes2);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_no);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.chkBox_no2);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleSearchMemberDialog.prototype.showLoaded = function (__s8param0 = null) {
    this._currentCategory = CastleSearchMemberDialog.CAT_NONE;
    this.isNowSearching = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isSearchingMembers;
    this.isNowAccepting = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isAcceptingMembers;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceSearchMemberListVO.C2SAllianceSearchMemberListVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceApplicationListVO.C2SAllianceApplicationListVO());
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_SEARCH_MEMBER_LIST_UPDATED, this.bindFunction(this.onSearchMemberListUpdated));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    this.lockDialog();
    __s1param0.prototype.showLoaded.call(this, __s8param0);
  };
  CastleSearchMemberDialog.prototype.onAllianceDataUpdated = function (__s10param0) {
    this._allianceInfoVO = __s10param0.allianceInfoVO;
    if (this._allianceInfoVO) {
      if (this._currentCategory == CastleSearchMemberDialog.CAT_MEMBERLIST) {
        var __s10local0 = new __dep_export_CastleSearchMemberDialogProperties.CastleSearchMemberDialogProperties(this._allianceInfoVO);
        if (this.dialogProperties.searchMemberList != null) {
          __s10local0.searchMemberList = this.dialogProperties.searchMemberList;
        }
        this.showSublayer(this._currentSublayer, [__s10local0]);
      }
    } else {
      this.hide();
    }
  };
  CastleSearchMemberDialog.prototype.onSearchMemberListUpdated = function (__s16param0) {
    this.dialogProperties.searchMemberList = __s16param0.params[0];
  };
  CastleSearchMemberDialog.prototype.onApplicationListUpdated = function (__s18param0) {
    this.dialogProperties.applicationList = __s18param0.params[0];
    this.changeCategory(CastleSearchMemberDialog.CAT_REQUESTS);
    this.unLockDialog();
  };
  CastleSearchMemberDialog.prototype.checkStatusChange = function () {
    if (this._isNowSearching != this._isSearching || this._isNowAccepting != this._isAccepting) {
      this._isSearching = this._isNowSearching;
      this._isAccepting = this._isNowAccepting;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceSetSearchMemberVO.C2SAllianceSetSearchMemberVO(this._isSearching, this._isAccepting));
      __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isSearchingMembers = this._isSearching;
      __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isAcceptingMembers = this._isAccepting;
    }
  };
  Object.defineProperty(CastleSearchMemberDialog.prototype, "isNowSearching", {
    set: function (__s23param0) {
      this._isNowSearching = __s23param0;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes, this._isNowSearching);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no, !this._isNowSearching);
      if (this._isNowSearching) {
        this.dialogDisp.mc_searchStatus.gotoAndStop(1);
      } else {
        this.dialogDisp.mc_searchStatus.gotoAndStop(2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialog.prototype, "isNowAccepting", {
    set: function (__s27param0) {
      this._isNowAccepting = __s27param0;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_yes2, this._isNowAccepting);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.chkBox_no2, !this._isNowAccepting);
      if (this._isNowAccepting) {
        this.dialogDisp.mc_joinStatus.gotoAndStop(1);
      } else {
        this.dialogDisp.mc_joinStatus.gotoAndStop(2);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchMemberDialog.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    switch (__s31param0.target) {
      case this.dialogDisp.btn_ok:
        this.checkStatusChange();
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.chkBox_yes:
        this.isNowSearching = true;
        break;
      case this.dialogDisp.chkBox_no:
        this.isNowSearching = false;
        break;
      case this.dialogDisp.chkBox_yes2:
        this.isNowAccepting = true;
        break;
      case this.dialogDisp.chkBox_no2:
        this.isNowAccepting = false;
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.btn_openRequests:
        this.changeCategory(CastleSearchMemberDialog.CAT_REQUESTS);
        break;
      case this.dialogDisp.btn_searchMember:
        this.changeCategory(CastleSearchMemberDialog.CAT_MEMBERLIST);
    }
  };
  CastleSearchMemberDialog.prototype.hideLoaded = function (__s34param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s34param0);
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    this._allianceInfoVO = null;
  };
  CastleSearchMemberDialog.prototype.changeCategory = function (__s36param0) {
    if (this._currentCategory != __s36param0) {
      __s1param0.prototype.changeCategory.call(this, __s36param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.dialogProperties]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openRequests, this._currentCategory == CastleSearchMemberDialog.CAT_REQUESTS);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_searchMember, this._currentCategory == CastleSearchMemberDialog.CAT_MEMBERLIST);
    }
  };
  Object.defineProperty(CastleSearchMemberDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSearchMemberDialog.__initialize_static_members = function () {
    CastleSearchMemberDialog.NAME = "CastleSearchMember";
    CastleSearchMemberDialog.CAT_NONE = "CAT_NONE";
    CastleSearchMemberDialog.CAT_REQUESTS = "CAT_REQUESTS";
    CastleSearchMemberDialog.CAT_MEMBERLIST = "CAT_MEMBERLIST";
  };
  return CastleSearchMemberDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CastleSearchMemberDialog = __s0local0;
var __dep_export_CastleSearchMemberDialogApplications = require("gge-module:export_CastleSearchMemberDialogApplications");
var __dep_export_CastleSearchMemberDialogSearch = require("gge-module:export_CastleSearchMemberDialogSearch");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

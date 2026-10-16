Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SAllianceActionListVO = require("gge-module:export_C2SAllianceActionListVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleChangeDescriptionDialogPrpoerties = require("gge-module:export_CastleChangeDescriptionDialogPrpoerties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleAllianceDialogOverview(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentPage = 0;
    __s3local0._maxPage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(__s3local0.subLayerDisp.txt_anouncement, __s3local0.subLayerDisp.mc_scrollHandle.btn_up, __s3local0.subLayerDisp.mc_scrollHandle.btn_down, __s3local0.subLayerDisp.mc_scrollHandle.btn_slider, __s3local0.subLayerDisp.mc_scrollHandle.mc_sliderLine, [__s3local0.subLayerDisp.mc_scrollHandle]));
    __s3local0._scrollComponent.invisibleOnFit = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_editAnouncement, __s3local0.subLayerDisp.mc_list.btn_up, __s3local0.subLayerDisp.mc_list.btn_down]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogOverview, __s1param0);
  CastleAllianceDialogOverview.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_date, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_date"));
    this.itxt_anouncementTitle = this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncementTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("anouncement"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_chronic, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_chronic"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_player, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_chronic_name"));
    if (!this.itxt_anouncement) {
      this.itxt_anouncement = this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncement, new __dep_exact_92d05af59ee2ff30_3.TextVO(" "));
      this.itxt_anouncement.selectable = true;
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncementTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("anouncement"));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_editAnouncement, __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_ANNOUNCEMENT));
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editAnouncement)) {
      this.subLayerDisp.btn_editAnouncement.toolTipText = "dialog_alliance_changeAnouncement";
    } else {
      this.subLayerDisp.btn_editAnouncement.toolTipText = "dialog_alliance_rankToLow";
    }
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    this.subLayerDisp.mc_list.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    this.itxt_anouncement.textContentVO.stringValue = this.allianceInfoVO.anouncement;
    this._scrollComponent.onShow();
    this._scrollComponent.scrollToStart();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceActionListVO.C2SAllianceActionListVO());
  };
  CastleAllianceDialogOverview.prototype.hide = function () {
    this._scrollComponent.onHide();
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    this.subLayerDisp.mc_list.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceDialogOverview.prototype.onActionListUpdate = function (__s12param0) {
    this.fillActionList();
  };
  CastleAllianceDialogOverview.prototype.fillActionList = function () {
    if (this.allianceInfoVO.actionList) {
      this.initArrows(this.allianceInfoVO.actionList.length);
    }
    var __s14local0 = this._currentPage * CastleAllianceDialogOverview.QUESTS_PER_PAGE;
    for (var __s14local1 = 0; __s14local1 < CastleAllianceDialogOverview.QUESTS_PER_PAGE; __s14local1++) {
      var __s14local2 = this.subLayerDisp.mc_list["i" + __s14local1];
      __s14local2.btn_playerName.txt_playerName.mouseEnabled = true;
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s14local2.btn_playerName);
      if (this.allianceInfoVO.actionList && __s14local0 < this.allianceInfoVO.actionList.length) {
        var __s14local3 = this.allianceInfoVO.actionList[__s14local0];
        this.textFieldManager.registerTextField(__s14local2.txt_date, new __dep_exact_92d05af59ee2ff30_1.LocalizedDateTimeVO(__s14local3.bornDate)).autoFitToBounds = true;
        var __s14local4 = __s14local3.getActionText();
        this.textFieldManager.registerTextField(__s14local2.txt_action, __s14local4);
        var __s14local5 = __s14local3.playerName.indexOf("!!!_") == 0;
        var __s14local6 = __dep_exact_f855840627e6e145.int(__s14local5 ? -1 : __s14local3.playerID);
        var __s14local7 = __dep_exact_f855840627e6e145.int(__s14local3.playerID == -1 ? __s14local3.actionValues[0] : -1);
        var __s14local8 = !__s14local5;
        if (__s14local5) {
          this.textFieldManager.registerTextField(__s14local2.btn_playerName.txt_playerName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("deleted_Player")).autoFitToBounds = true;
        } else if (__s14local3.playerID == -1) {
          var __s14local9;
          switch (__s14local3.action) {
            case __dep_exact_26a421b704832cff.AllianceConst.TOURNAMENTREWARD:
              __s14local9 = __s14local3.actionValues[2];
              __s14local6 = -1;
              __s14local7 = -1;
              __s14local8 = false;
              break;
            case __dep_exact_26a421b704832cff.AllianceConst.TOURNAMENTRANK:
              __s14local9 = "";
              __s14local6 = -1;
              __s14local7 = -1;
              __s14local8 = false;
              break;
            default:
              if (!(__s14local9 = __s14local3.actionValues[1])) {
                __s14local8 = false;
              }
          }
          this.textFieldManager.registerTextField(__s14local2.btn_playerName.txt_playerName, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s14local9)).autoFitToBounds = true;
        } else {
          this.textFieldManager.registerTextField(__s14local2.btn_playerName.txt_playerName, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s14local3.playerName)).autoFitToBounds = true;
        }
        __s14local2.btn_playerName.playerID = __s14local6;
        __s14local2.btn_playerName.allianceID = __s14local7;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s14local2.btn_playerName, __s14local8);
        this.changeBackgroundColor(__s14local2, __s14local3.action);
        __s14local2.visible = true;
      } else {
        __s14local2.visible = false;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s14local2.btn_playerName, false);
      }
      __s14local0++;
    }
  };
  CastleAllianceDialogOverview.prototype.changeBackgroundColor = function (__s26param0, __s26param1) {
    var __s26local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    switch (__s26param1) {
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_JOIN:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_LEFT:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_KICKED:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_NEW_LEADER:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DEMOTE:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_PROMOTE:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_MEMBER;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_C1:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_C2:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_RES:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_DEPOSIT;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.GET_REQUEST_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.SEND_REQUEST_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.REFUSE_DIPLOMACY:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_DIPLOMACY;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.LEVEL_DOWN:
      case __dep_exact_26a421b704832cff.AllianceConst.LEVEL_UP:
      case __dep_exact_26a421b704832cff.AllianceConst.DONATE_C1_BY_LEVELUP:
      case __dep_exact_26a421b704832cff.AllianceConst.DONATE_C2_BY_LEVELUP:
      case __dep_exact_26a421b704832cff.AllianceConst.DONATE_RES_BY_LEVELUP:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_EARN_FAME:
      case __dep_exact_26a421b704832cff.AllianceConst.TOURNAMENTREWARD:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED:
      case __dep_exact_26a421b704832cff.AllianceConst.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED:
      case __dep_exact_26a421b704832cff.AllianceConst.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_LEVEL;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.CONQUERED_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOST_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOOSING_CAPITAL:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_PALACE;
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_NAME:
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_ANNOUNCEMENT:
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_DESCRIPTION:
      case __dep_exact_26a421b704832cff.AllianceConst.UPGRADE:
      case __dep_exact_26a421b704832cff.AllianceConst.TOURNAMENTRANK:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_RESET:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_POINTS_GAINED:
      default:
        __s26local0.color = __dep_export_ClientConstColor.ClientConstColor.ALLIANCE_COLOR_DEFAULT;
    }
    __s26param0.mc_backgroundColor.useFilters([new createjs.ColorFilter(__s26local0.redMultiplier, __s26local0.greenMultiplier, __s26local0.blueMultiplier, __s26local0.alphaMultiplier, __s26local0.redOffset, __s26local0.greenOffset, __s26local0.blueOffset, __s26local0.alphaOffset)]);
  };
  CastleAllianceDialogOverview.prototype.initArrows = function (__s29param0) {
    this._maxPage = __dep_exact_f855840627e6e145.int((__s29param0 - 1) / CastleAllianceDialogOverview.QUESTS_PER_PAGE);
    this.subLayerDisp.mc_list.btn_down.visible = this._maxPage > 0 && this._currentPage < this._maxPage;
    this.subLayerDisp.mc_list.btn_up.visible = this._maxPage > 0 && this._currentPage > 0;
  };
  CastleAllianceDialogOverview.prototype.onMouseUp = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      if (__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s31param0.target)) {
        if (__s31param0.target.playerID > -1) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s31param0.target.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        } else if (__s31param0.target.allianceID > -1) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(__s31param0.target.allianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
      switch (__s31param0.target) {
        case this.subLayerDisp.btn_editAnouncement:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangeAnouncementDialog.CastleChangeAnouncementDialog, new __dep_export_CastleChangeDescriptionDialogPrpoerties.CastleChangeDescriptionDialogPrpoerties(this._params[0]));
          break;
        case this.subLayerDisp.mc_list.btn_up:
        case this.subLayerDisp.mc_list.btn_down:
          this.onClickArrow(__s31param0);
      }
    }
  };
  CastleAllianceDialogOverview.prototype.onMouseWheel_0 = function (__s38param0) {
    __s1param0.prototype.onMouseOut.call(this, __s38param0);
    var __s38local0 = this.subLayerDisp.txt_anouncement;
    if (__s38param0.target != __s38local0) {
      if (__s38param0.delta < 0) {
        this.scrollUp();
      } else if (__s38param0.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleAllianceDialogOverview.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceOverview"));
  };
  CastleAllianceDialogOverview.prototype.onClickArrow = function (__s45param0) {
    if (__s45param0.target == this.subLayerDisp.mc_list.btn_up) {
      this.scrollUp();
    } else {
      this.scrollDown();
    }
  };
  CastleAllianceDialogOverview.prototype.scrollUp = function () {
    var __s49local0 = this._currentPage;
    this._currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._currentPage - 1));
    if (__s49local0 != this._currentPage) {
      this.fillActionList();
    }
  };
  CastleAllianceDialogOverview.prototype.scrollDown = function () {
    var __s52local0 = this._currentPage;
    this._currentPage = __dep_exact_f855840627e6e145.int(Math.min(this._maxPage, this._currentPage + 1));
    if (__s52local0 != this._currentPage) {
      this.fillActionList();
    }
  };
  Object.defineProperty(CastleAllianceDialogOverview.prototype, "allianceInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogOverview.QUESTS_PER_PAGE = 6;
  return CastleAllianceDialogOverview;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogOverview = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleChangeAnouncementDialog = require("gge-module:export_CastleChangeAnouncementDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");

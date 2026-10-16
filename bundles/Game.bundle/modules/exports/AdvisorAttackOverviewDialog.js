Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAdvisorAttackOverviewVO = require("gge-module:export_C2SAdvisorAttackOverviewVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_AdvisorAttackOverviewEvent = require("gge-module:export_AdvisorAttackOverviewEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AdvisorAttackOverviewCancelDialog = require("gge-module:export_AdvisorAttackOverviewCancelDialog");
var __dep_export_AdvisorAttackOverviewCancelDialogProperties = require("gge-module:export_AdvisorAttackOverviewCancelDialogProperties");
var __dep_export_AdvisorAttackOverviewComponent = require("gge-module:export_AdvisorAttackOverviewComponent");
var __dep_export_AdvisorAttackOverviewScrollItem = require("gge-module:export_AdvisorAttackOverviewScrollItem");
var __dep_export_AdvisorAttackOverviewScrollItemVO = require("gge-module:export_AdvisorAttackOverviewScrollItemVO");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackOverviewDialog() {
    return __s1param0.call(this, AdvisorAttackOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewDialog, __s1param0);
  AdvisorAttackOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_cancelAll, this.dialogDisp.mc_idle.btn_selectOnMap], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackOverview")));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_idle.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attack_setUp")));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.btn_cancelAll.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_advisorCancelAll")));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_speechBubble.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("advisor_speechBubble_nomad")).autoFitToBounds = true;
    this.attackSummaryComponent = new __dep_export_AdvisorAttackOverviewComponent.AdvisorAttackOverviewComponent(this.dialogDisp.mc_summary, false);
    var __s5local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_active).addMaskMc(this.dialogDisp.mc_active.mc_items.mask);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AdvisorAttackOverviewScrollItem.AdvisorAttackOverviewScrollItem, "NomadAdvisorOverviewAttackItem", AdvisorAttackOverviewDialog.NAME);
    this.scrollComponent = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s5local0, __s5local1);
    this.dialogDisp.mc_char_1.mouseChildren = false;
    this.dialogDisp.mc_char_2.mouseChildren = false;
    this.dialogDisp.mc_char_3.mouseChildren = false;
    if (this.dialogDisp.mc_char_4) {
      this.dialogDisp.mc_char_4.mouseChildren = false;
    }
  };
  AdvisorAttackOverviewDialog.prototype.showLoaded = function (__s8param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_idle.btn_selectOnMap.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_SelectCamp_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.advisorType))));
    var __s8local0 = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON ? "advisor_speechBubble_baron" : "advisor_speechBubble_nomad";
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_speechBubble.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s8local0)).autoFitToBounds = true;
    this.controller.addEventListener(__dep_export_AdvisorAttackOverviewEvent.AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, this.bindFunction(this.onAdvisorOverviewReceived));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
    this.onMovementsUpdated();
    this.dialogDisp.mc_speechBubble.visible = false;
    this.dialogDisp.mc_char_1.mc_selected.visible = false;
    this.dialogDisp.mc_char_2.mc_selected.visible = false;
    this.dialogDisp.mc_char_3.mc_selected.visible = false;
    this.dialogDisp.mc_idle.icon_wmo.gotoAndStop(this.advisorType);
    this.updateIconWmoVariant();
    this.dialogDisp.mc_char_1.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
    this.dialogDisp.mc_char_2.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI;
    this.dialogDisp.mc_char_3.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    if (this.dialogDisp.mc_char_4) {
      this.dialogDisp.mc_char_4.mc_selected.visible = false;
      this.dialogDisp.mc_char_4.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON;
    }
  };
  AdvisorAttackOverviewDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this.controller.removeEventListener(__dep_export_AdvisorAttackOverviewEvent.AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, this.bindFunction(this.onAdvisorOverviewReceived));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    if (this.scrollComponent) {
      this.scrollComponent.onHide();
    }
    if (this.attackSummaryComponent) {
      this.attackSummaryComponent.onHide();
    }
  };
  AdvisorAttackOverviewDialog.prototype.onAdvisorOverviewReceived = function (__s15param0) {
    this.attackSummaryComponent.update(__s15param0.advisorAttackOverviewVO);
  };
  AdvisorAttackOverviewDialog.prototype.onMovementsUpdated = function (__s17param0 = null) {
    var __s17local0 = this.getAdvisorMovements();
    if (__s17local0.length == 0) {
      this.dialogDisp.mc_active.visible = false;
      this.dialogDisp.mc_idle.visible = true;
      this.dialogDisp.btn_cancelAll.visible = false;
      this.scrollComponent.onHide();
    } else {
      this.dialogDisp.mc_active.visible = true;
      this.dialogDisp.mc_idle.visible = false;
      this.dialogDisp.btn_cancelAll.visible = this.getCancellableAdvisorMovements().length > 0;
      this.scrollComponent.onShow();
      var __s17local1 = __s17local0.map(function (__s21param0) {
        return new __dep_export_AdvisorAttackOverviewScrollItemVO.AdvisorAttackOverviewScrollItemVO(__s21param0);
      });
      this.scrollComponent.updateWithNewData(__s17local1, !!__s17param0);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAdvisorAttackOverviewVO.C2SAdvisorAttackOverviewVO(this.advisorType));
  };
  AdvisorAttackOverviewDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      switch (__s23param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("description_advisorInformation_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.advisorType)));
          break;
        case this.dialogDisp.btn_cancelAll:
          this.cancelAll();
          break;
        case this.dialogDisp.mc_idle.btn_selectOnMap:
          this.selectOnMap();
      }
    }
  };
  AdvisorAttackOverviewDialog.prototype.cancelAll = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewCancelDialog.AdvisorAttackOverviewCancelDialog, new __dep_export_AdvisorAttackOverviewCancelDialogProperties.AdvisorAttackOverviewCancelDialogProperties(this.getCancellableAdvisorMovements()));
  };
  AdvisorAttackOverviewDialog.prototype.selectOnMap = function () {
    var __s29local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getKingdomIDFromAdvisorType(this.advisorType);
    var __s29local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s29local0);
    __s29local1 ||= __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s29local0, __s29local1.absAreaPosX, __s29local1.absAreaPosY]);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
  };
  AdvisorAttackOverviewDialog.prototype.onGAAarrived = function (__s31param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAraTypeFromAdvisorType(this.advisorType), __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getKingdomIDFromAdvisorType(this.advisorType), -1, -1, __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getNpcIDFromAdvisorType(this.advisorType)));
  };
  AdvisorAttackOverviewDialog.prototype.getAdvisorMovements = function () {
    return __dep_export_CastleModel.CastleModel.armyData.getAdvisorMovements(this.advisorType);
  };
  AdvisorAttackOverviewDialog.prototype.getCancellableAdvisorMovements = function () {
    return this.getAdvisorMovements().filter(function (__s37param0) {
      return !__s37param0.advisorIsLastAttack;
    });
  };
  AdvisorAttackOverviewDialog.prototype.onMouseOver = function (__s39param0) {
    __s1param0.prototype.onMouseOver.call(this, __s39param0);
    if (__s39param0.target == this.dialogDisp.mc_char_1 || __s39param0.target == this.dialogDisp.mc_char_2 || __s39param0.target == this.dialogDisp.mc_char_3 || this.dialogDisp.mc_char_4 && __s39param0.target == this.dialogDisp.mc_char_4) {
      this.dialogDisp.mc_speechBubble.visible = !this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char_1.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char_2.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char_3.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
      if (this.dialogDisp.mc_char_4) {
        this.dialogDisp.mc_char_4.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
      }
    }
  };
  AdvisorAttackOverviewDialog.prototype.onMouseOut = function (__s43param0) {
    __s1param0.prototype.onMouseOut.call(this, __s43param0);
    if (__s43param0.target == this.dialogDisp.mc_char_1 || __s43param0.target == this.dialogDisp.mc_char_2 || __s43param0.target == this.dialogDisp.mc_char_3 || this.dialogDisp.mc_char_4 && __s43param0.target == this.dialogDisp.mc_char_4) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char_1.mc_selected.visible = false;
      this.dialogDisp.mc_char_2.mc_selected.visible = false;
      this.dialogDisp.mc_char_3.mc_selected.visible = false;
      if (this.dialogDisp.mc_char_4) {
        this.dialogDisp.mc_char_4.mc_selected.visible = false;
      }
    }
  };
  AdvisorAttackOverviewDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s47local0 = 1;
      if (this.disp.stage.stageHeight < __s47local0 * 600) {
        __s47local0 = this.disp.stage.stageHeight / 600;
      }
      __s47local0 = Math.min(__s47local0, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s47local0;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      this.dialogDisp.mc_speechBubble.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 160);
      this.dialogDisp.mc_char_1.x = this.dialogDisp.mc_char_2.x = this.dialogDisp.mc_char_3.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 157);
      if (this.dialogDisp.mc_char_4) {
        this.dialogDisp.mc_char_4.x = this.dialogDisp.mc_char_1.x;
      }
      var __s47local1 = this.disp.stage.stageWidth >= 1350;
      this.dialogDisp.mc_char_1.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_NOMAD && __s47local1;
      this.dialogDisp.mc_char_2.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI && __s47local1;
      this.dialogDisp.mc_char_3.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND && __s47local1;
      this.dialogDisp.mc_char_1.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char_1.visible;
      this.dialogDisp.mc_char_2.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char_2.visible;
      this.dialogDisp.mc_char_3.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char_3.visible;
      if (this.dialogDisp.mc_char_4) {
        this.dialogDisp.mc_char_4.visible = this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON && __s47local1;
        this.dialogDisp.mc_char_4.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char_4.visible;
      }
    }
  };
  Object.defineProperty(AdvisorAttackOverviewDialog.prototype, "advisorType", {
    get: function () {
      return this.dialogProperties.advisorType;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewDialog.prototype.updateIconWmoVariant = function () {
    var __s55local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getEventVOByAdvisorType(this.advisorType);
    var __s55local1 = this.dialogDisp.mc_idle.icon_wmo.mc_variant;
    if (__s55local0 && __s55local1 && typeof __s55local0.advisorIconSubFrame == "number" && typeof __s55local1.gotoAndStop == "function") {
      __s55local1.gotoAndStop(__s55local0.advisorIconSubFrame);
    }
    var __s55local2 = this.dialogDisp.mc_idle.icon_wmo.mc_dungeon;
    if (__s55local2 && this.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON) {
      __s55local2.gotoAndStop(__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getKingdomIDFromAdvisorType(this.advisorType) + 1);
    }
  };
  Object.defineProperty(AdvisorAttackOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewDialog.NAME = "AdvisorOverviewExt_3";
  return AdvisorAttackOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AdvisorAttackOverviewDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

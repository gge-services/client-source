Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UnitInventoryList = require("gge-module:export_UnitInventoryList");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogSpyInfo() {
    this.AMOUNT_ITEMS = 9;
  }
  AttackDialogSpyInfo.prototype.init = function (__s5param0) {
    this.panelDisp = __s5param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.panelDisp.btn_left, this.panelDisp.btn_right, this.panelDisp.btn_tab_reserve, this.panelDisp.btn_tab0, this.panelDisp.btn_tab1, this.panelDisp.btn_tab2, this.panelDisp.btn_tab3, this.panelDisp.item0, this.panelDisp.item1, this.panelDisp.item2, this.panelDisp.item3, this.panelDisp.item4, this.panelDisp.item5, this.panelDisp.item6, this.panelDisp.item7, this.panelDisp.item8, this.panelDisp.item9], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.panelDisp.btn_tab_reserve.toolTipText = "dialog_spyLog_reserveSpy";
    this.panelDisp.btn_tab0.toolTipText = "dialog_spyLog_flankSpy_left";
    this.panelDisp.btn_tab1.toolTipText = "dialog_spyLog_frontSpy";
    this.panelDisp.btn_tab2.toolTipText = "dialog_spyLog_flankSpy_right";
    this.panelDisp.btn_tab3.toolTipText = "dialog_spyLog_keepSpy";
    this.controller.spyInfoMC = this.panelDisp;
    this.controller.onShowSpyInfo.add(this.bindFunction(this.showSpyInfo));
    this.controller.onHideSpyInfo.add(this.bindFunction(this.hideSpyInfo));
    this.controller.onLordChanged.add(this.bindFunction(this.updateSpyInfo));
    this.controller.onOpenUnitPicker.add(this.bindFunction(this.openUnitPickerList));
    this.panelDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.controller.onShowSpyInfo.dispatch(__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
  };
  AttackDialogSpyInfo.prototype.openUnitPickerList = function () {
    if (!this.panelDisp.visible) {
      this.controller.onShowSpyInfo.dispatch(this.controller.attackVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
    }
  };
  AttackDialogSpyInfo.prototype.updateTabButtons = function () {
    var __s10local0 = this.controller.detailViewCachedData.flank == "left";
    var __s10local1 = this.controller.detailViewCachedData.flank == "right";
    var __s10local2 = this.controller.detailViewCachedData.flank == "middle";
    var __s10local3 = this.controller.detailViewCachedData.flank == "keep";
    var __s10local4 = this.controller.detailViewCachedData.flank == "reserve";
    this.panelDisp.btn_tab_reserve.visible = this.controller.attackVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL;
    if (__s10local4) {
      this.panelDisp.btn_tab_reserve.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab_reserve.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab_reserve.gotoAndStop(__s10local4 ? 4 : 1);
    if (__s10local0) {
      this.panelDisp.btn_tab0.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab0.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab0.gotoAndStop(__s10local0 ? 4 : 1);
    if (__s10local1) {
      this.panelDisp.btn_tab2.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab2.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab2.gotoAndStop(__s10local1 ? 4 : 1);
    if (__s10local2) {
      this.panelDisp.btn_tab1.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab1.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab1.gotoAndStop(__s10local2 ? 4 : 1);
    if (__s10local3) {
      this.panelDisp.btn_tab3.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab3.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab3.gotoAndStop(__s10local3 ? 4 : 1);
  };
  AttackDialogSpyInfo.prototype.updateSpyInfo = function () {
    if (this.panelDisp.visible) {
      this.showSpyInfo(this.controller.detailViewCachedData.unitInv, this.controller.detailViewCachedData.title, this.controller.detailViewCachedData.swamb, this.controller.detailViewCachedData.sgb, false, true, this.controller.detailViewCachedData.flank);
    }
  };
  AttackDialogSpyInfo.prototype.hideSpyInfo = function () {};
  AttackDialogSpyInfo.prototype.showSpyInfo = function (__s27param0, __s27param1, __s27param2 = true, __s27param3 = false, __s27param4 = false, __s27param5 = true, __s27param6 = "", __s27param7 = false) {
    this.pageIndex = 0;
    if (__s27param5 && this.controller.attackVO.spyInfo.itemsSupport) {
      var __s27local0 = new __dep_export_UnitInventoryList.UnitInventoryList();
      __s27local0.addAll(__s27param0.getUnits(null));
      __s27local0.addAll(this.controller.attackVO.spyInfo.itemsSupport.getUnits(null));
      __s27param0 = __s27local0;
    }
    this.controller.detailViewCachedData = {
      unitInv: __s27param0,
      title: __s27param1,
      swamb: __s27param2,
      sgb: __s27param3,
      flank: __s27param6
    };
    if (this.controller.attackVO.spyInfo.remainingSpyInfoTime <= 0) {
      this.displayedUnits = [];
      this.pageIndex = 0;
      this.fillItems();
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_noSpyinfos"));
      this.panelDisp.visible = true;
      this.panelDisp.btn_left.visible = false;
      this.panelDisp.btn_right.visible = false;
    } else {
      var __s27local1 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this.controller.attackVO.spyInfo.spyInfoAgeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
      var __s27local2 = __dep_exact_81dacdf05bd32292.instanceOfClass(this.controller.attackVO.detailViewObject, "TMapNodeVO") || this.controller.attackVO.spyInfo.spyInfoAgeInSeconds < 1 ? "" : " (" + __dep_exact_92d05af59ee2ff30.Localize.text("ago", [__s27local1]) + ")";
      if (__s27param0) {
        this.showInventoryInfo(__s27param0.getUnits(null), this.controller.attackVO.targetArea, this.controller.attackVO.targetOwner, __s27param1 + __s27local2, __s27param2, __s27param3, __s27param4, __s27param6 == "keep");
      }
    }
    this.updateTabButtons();
  };
  AttackDialogSpyInfo.prototype.showInventoryInfo = function (__s33param0, __s33param1, __s33param2, __s33param3, __s33param4 = true, __s33param5 = false, __s33param6 = false, __s33param7 = false) {
    if (this.panelDisp.property && __dep_exact_81dacdf05bd32292.instanceOfClass(this.panelDisp.property, "CastleInventoryComponent")) {
      this.panelDisp.property.destroy();
    }
    if (__s33param0) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__s33param3));
      var __s33local0 = [];
      var __s33local1 = [];
      for (var __s33local2 = 0; __s33local2 < __s33param0.length; ++__s33local2) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s33param0[__s33local2], "ToolUnitVO") && __s33param0[__s33local2].numberofDolls <= 0) {
          __s33local0.push(__s33param0[__s33local2]);
          if (__s33param0[__s33local2].isSupportTool && __s33param7) {
            __s33local1.push(__s33param0[__s33local2]);
          }
        } else {
          __s33local1.push(__s33param0[__s33local2]);
        }
      }
      var __s33local3 = __dep_export_AttackDialogHelper.AttackDialogHelper.calculateToolsInfo(__s33local0, __s33param1.baseGateBonus, __s33param1.baseMoatBonus, __s33param1.baseWallBonus, __s33param4, __s33param5, __s33param6, __s33param7);
      this.displayedUnits = __s33local1;
      if (this.controller.detailViewCachedData.flank != "reserve") {
        this.displayedUnits = __s33local3.concat(__s33local1);
      }
      this.fillItems();
      this.panelDisp.visible = true;
    }
  };
  AttackDialogSpyInfo.prototype.fillItems = function () {
    this.panelDisp.btn_left.visible = this.pageIndex > 0;
    this.panelDisp.btn_right.visible = (this.pageIndex + 1) * this.AMOUNT_ITEMS < this.displayedUnits.length;
    for (var __s43local0 = 0; __s43local0 < this.AMOUNT_ITEMS; __s43local0++) {
      var __s43local1 = this.panelDisp["item" + __s43local0];
      var __s43local2 = this.pageIndex * this.AMOUNT_ITEMS + __s43local0;
      if (__s43local2 < this.displayedUnits.length) {
        var __s43local3 = this.displayedUnits[__s43local2];
        __s43local1.visible = true;
        this.addInventoryPic(__s43local3, __s43local1);
        this.setToolType(__s43local3, __s43local1);
        this.setItemText(__s43local1.txt_text, __s43local3);
        __s43local1.toolTipText = __s43local3.getNameString();
        __s43local1.icon_zzz.visible = __dep_exact_81dacdf05bd32292.instanceOfClass(__s43local3, "SoldierUnitVO") && __s43local3.isDormant;
      } else {
        __s43local1.visible = false;
      }
    }
    this.updateEmptyText();
  };
  AttackDialogSpyInfo.prototype.updateEmptyText = function () {
    var __s49local0 = this.displayedUnits.length <= 0;
    var __s49local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s49local1.visible = __s49local0;
    if (__dep_export_CastleModel.CastleModel.spyData.getNumAllSpies(__dep_export_CastleModel.CastleModel.userData.isLegend) <= 0) {
      __s49local1.textContentVO.textId = "dialog_attackScreen_espionage_hintNoTavern";
    } else {
      __s49local1.textContentVO.textId = "dialog_attackScreen_espionage_hintNoEspionage";
    }
  };
  AttackDialogSpyInfo.prototype.setItemText = function (__s53param0, __s53param1) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s53param1, "EffectIconUnitVO")) {
      var __s53local0 = __s53param1.inventoryAmount >= 0 ? __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD : __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
      var __s53local1 = __s53param1.inventoryAmount >= 0 ? __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD : __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      if (__s53param1.valueIsPercentage) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s53param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s53local0, [String(Math.abs(__s53param1.inventoryAmount))]), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      } else {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s53param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s53local1, [Math.abs(__s53param1.inventoryAmount)], true), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      }
    } else if (__s53param1.name != __dep_export_CastleInventoryComponent.CastleInventoryComponent.UNKNOWN_TOOL_NAME || __s53param1.type != __dep_export_CastleInventoryComponent.CastleInventoryComponent.UNKNOWN_TOOL_TYPE) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s53param0, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s53param1.inventoryAmount, {
        compactThreshold: 1000000
      }, 1), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    } else {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s53param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("???", [Math.abs(__s53param1.inventoryAmount)], true), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    }
  };
  AttackDialogSpyInfo.prototype.addInventoryPic = function (__s60param0, __s60param1) {
    var __s60local0 = this.displayedUnitsCrest;
    var __s60local1 = 0;
    var __s60local2 = 0;
    if (__s60local0) {
      __s60local1 = __s60local0.backgroundColor1;
      __s60local2 = __s60local0.backgroundColor2;
    }
    __dep_export_WodPicHelper.WodPicHelper.addUnitPicToContainer(__s60param0, __s60param1.mc_icon, 60, 60, 60, 60, __s60local1, __s60local2, 20, null, true, null, __s60param1.mc_unitLevel);
  };
  AttackDialogSpyInfo.prototype.setToolType = function (__s63param0, __s63param1) {
    if (__s63param0 instanceof __dep_export_ToolUnitVO.ToolUnitVO) {
      __s63param1.icon_type.visible = true;
      __s63param1.icon_type.gotoAndStop(__dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.getToolIconFrame(__s63param0.toolCategory));
    } else {
      __s63param1.icon_type.visible = false;
    }
  };
  AttackDialogSpyInfo.prototype.onClickUnitItem = function (__s67param0) {
    if (__s67param0.wodId > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s67param0, this.displayedUnitsCrest));
    }
  };
  AttackDialogSpyInfo.prototype.onClick = function (__s70param0) {
    switch (__s70param0.target) {
      case this.panelDisp.item0:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex]);
        break;
      case this.panelDisp.item1:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 1]);
        break;
      case this.panelDisp.item2:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 2]);
        break;
      case this.panelDisp.item3:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 3]);
        break;
      case this.panelDisp.item4:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 4]);
        break;
      case this.panelDisp.item5:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 5]);
        break;
      case this.panelDisp.item6:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 6]);
        break;
      case this.panelDisp.item7:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 7]);
        break;
      case this.panelDisp.item8:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 8]);
        break;
      case this.panelDisp.btn_left:
        this.pageIndex--;
        this.fillItems();
        break;
      case this.panelDisp.btn_right:
        this.pageIndex++;
        this.fillItems();
        break;
      case this.panelDisp.btn_tab0:
        this.controller.openSpyInfoFlank("left");
        break;
      case this.panelDisp.btn_tab1:
        this.controller.openSpyInfoFlank("middle");
        break;
      case this.panelDisp.btn_tab2:
        this.controller.openSpyInfoFlank("right");
        break;
      case this.panelDisp.btn_tab3:
        this.controller.openSpyInfoFlank("keep");
        break;
      case this.panelDisp.btn_tab_reserve:
        this.controller.openSpyInfoFlank("reserve");
    }
  };
  Object.defineProperty(AttackDialogSpyInfo.prototype, "displayedUnitsCrest", {
    get: function () {
      if (this.controller.attackVO.targetOwner.crest) {
        return this.controller.attackVO.targetOwner.crest;
      } else {
        return __dep_export_CastleModel.CastleModel.userData.playerCrest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogSpyInfo.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogSpyInfo.prototype.destroy = function () {
    this.controller.onShowSpyInfo.remove(this.bindFunction(this.showSpyInfo));
    this.controller.onHideSpyInfo.remove(this.bindFunction(this.hideSpyInfo));
    this.controller.onLordChanged.remove(this.bindFunction(this.updateSpyInfo));
    this.controller.onOpenUnitPicker.remove(this.bindFunction(this.openUnitPickerList));
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
  };
  AttackDialogSpyInfo.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(AttackDialogSpyInfo.prototype, "spyInfo", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.spyInfo;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogSpyInfo.__initialize_static_members = function () {};
  return AttackDialogSpyInfo;
}();
exports.AttackDialogSpyInfo = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ColoredHTMLTextReplacementVO = require("gge-module:export_ColoredHTMLTextReplacementVO");
var __dep_export_HTMLTextLineBreakVO = require("gge-module:export_HTMLTextLineBreakVO");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __s0local0 = createjs.ColorFilter;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventBossStageComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._selectedStageIndex = 0;
    __s3local0._selectionChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventBossStageComponent, __s1param0);
  AllianceRaidEventBossStageComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    for (var __s5local0 = 0; __s5local0 <= 9; __s5local0++) {
      var __s5local1 = this.disp.mc_bar["stage_" + __s5local0];
      __s5local1.visible = __s5local0 < this.stages.length;
      if (__s5local1.visible) {
        __s5local1.x = this.disp.mc_bar.healthbar_total.x + this.disp.mc_bar.healthbar_total.width * (this.stages[__s5local0].health / 100);
      }
    }
    var __s5local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s5local2.color = this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().lifebarColor;
    this.disp.mc_bar.healthbar_total.useFilters([new __s0local0(__s5local2.redMultiplier, __s5local2.greenMultiplier, __s5local2.blueMultiplier, __s5local2.alphaMultiplier, __s5local2.redOffset, __s5local2.greenOffset, __s5local2.blueOffset, __s5local2.alphaOffset)]);
  };
  AllianceRaidEventBossStageComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    if (this._selectionChangeSignal) {
      this.selectionChangeSignal.removeAll();
    }
  };
  AllianceRaidEventBossStageComponent.prototype.updateComponent = function () {
    var __s14local0 = this;
    if (this.eventVO) {
      var __s14local1 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossStageDataVO();
      var __s14local2 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO();
      if (__s14local1 && __s14local2) {
        var __s14local3 = __dep_export_CastleModel.CastleModel.generalsData.npcGenerals.get(__s14local1.generalID);
        this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s14local3, this.disp.mc_general, false, false, false, true, null, false, false, false);
        this._generalIcon.onShow();
        __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s14local2.level));
        this.stages.forEach(function (__s18param0, __s18param1) {
          var __s18local0 = __s14local0.disp.mc_bar["stage_" + __s18param1];
          if (__s18local0) {
            __s14local0.initButtonState(__s18local0, __s18param1);
            __dep_export_ButtonHelper.ButtonHelper.initButtons([__s18local0.mc_achieved, __s18local0.mc_next, __s18local0.mc_notAchieved], __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton);
          }
        });
        this.updateSelectionState();
        this.disp.mc_bar.healthbar_total.mask.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.eventVO.raidBossServerDataVO.raidBossHealth / 100, 0, 1);
        this.disp.mc_bar.healthbar_base.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.eventVO.raidBossServerDataVO.raidBossHealthWithoutReviveUnits / 100, 0, 1);
        var __s14local4;
        var __s14local5 = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.eventVO.raidBossServerDataVO.raidBossHealth]);
        if (this.eventVO.raidBossServerDataVO.raidBossReviveUnitPercentage > 0) {
          var __s14local6 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
          var __s14local7 = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.eventVO.raidBossServerDataVO.raidBossReviveUnitPercentage]).compose();
          var __s14local8 = new __dep_export_ColoredHTMLTextReplacementVO.ColoredHTMLTextReplacementVO(new __dep_exact_92d05af59ee2ff30_3.TextVO("(" + __s14local7 + ")"), this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().lifebarColor);
          __s14local6.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__s14local5, __s14local8]));
          __s14local4 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_bar.txt_health, __s14local6);
        } else {
          __s14local4 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_bar.txt_health, __s14local5);
        }
        if (this.disp.mc_bar.mc_healthBackground) {
          this.disp.mc_bar.mc_healthBackground.width = __s14local4.textWidth + 100;
        }
        var __s14local9 = new __dep_export_HTMLTextLineBreakVO.HTMLTextLineBreakVO();
        __s14local9.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_infoBoss_healthBar_tooltip_ep_" + this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().name));
        var __s14local10 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_tooltip.txt_text, __s14local9);
        __s14local10.height = __s14local10.textHeight;
        this.disp.mc_tooltip.bg.height = __s14local10.textHeight + 12;
      }
    }
  };
  AllianceRaidEventBossStageComponent.prototype.updateSelectionState = function () {
    var __s24local0 = this;
    this.stages.forEach(function (__s26param0, __s26param1) {
      var __s26local0 = __s24local0.disp.mc_bar["stage_" + __s26param1];
      if (__s26local0) {
        __s24local0.updateButtonState(__s26local0, __s26param1);
      }
    });
  };
  AllianceRaidEventBossStageComponent.prototype.initButtonState = function (__s29param0, __s29param1) {
    if (__s29param0) {
      var __s29local0 = this.currentStageIndex;
      __s29param0.mc_achieved.visible = __s29param1 < __s29local0;
      __s29param0.mc_next.visible = __s29param1 == __s29local0;
      __s29param0.mc_notAchieved.visible = __s29param1 > __s29local0;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s29param0.mc_achieved.txt_stage, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s29param1));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s29param0.mc_next.txt_stage, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s29param1));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s29param0.mc_notAchieved.txt_stage, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s29param1));
    }
  };
  AllianceRaidEventBossStageComponent.prototype.updateButtonState = function (__s32param0, __s32param1) {
    if (__s32param0) {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(__s32param0.mc_achieved, __s32param1 == this._selectedStageIndex);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(__s32param0.mc_next, __s32param1 == this._selectedStageIndex);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(__s32param0.mc_notAchieved, __s32param1 == this._selectedStageIndex);
    }
  };
  AllianceRaidEventBossStageComponent.prototype.onClick = function (__s35param0) {
    __s1param0.prototype.onClick.call(this, __s35param0);
    var __s35local0 = __s35param0.target.parent.name;
    if (__s35local0.startsWith("stage_")) {
      var __s35local1 = __s35local0.split("_")[1];
      this.selectedStageIndex = parseInt(__s35local1);
    } else {
      ;
    }
  };
  AllianceRaidEventBossStageComponent.prototype.selectCurrentStage = function () {
    this.selectedStageIndex = this.currentStageIndex;
  };
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "currentStageIndex", {
    get: function () {
      var __s41local0 = this;
      return this.stages.findIndex(function (__s43param0) {
        return __s43param0.raidBossStageID == __s41local0.eventVO.raidBossServerDataVO.raidBossStageID;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "selectedStageIndex", {
    get: function () {
      return this._selectedStageIndex;
    },
    set: function (__s47param0) {
      if (!isNaN(__s47param0) && !(__s47param0 < 0) && !(__s47param0 >= this.stages.length)) {
        this._selectedStageIndex = __s47param0;
        this.updateSelectionState();
        this._selectionChangeSignal.dispatch(this._selectedStageIndex);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "selectedStageVO", {
    get: function () {
      return this.stages[this._selectedStageIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "selectionChangeSignal", {
    get: function () {
      return this._selectionChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "stages", {
    get: function () {
      var __s54local0 = this.eventVO ? this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO() : null;
      if (__s54local0) {
        return __s54local0.stages;
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventBossStageComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventBossStageComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AllianceRaidEventBossStageComponent = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

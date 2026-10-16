Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function QuestMapTooltip() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestMapTooltip, __s1param0);
  QuestMapTooltip.prototype.show = function (__s5param0) {
    if (!this._toolTipDisp) {
      this._toolTipDisp = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestMapToolTipMC"))();
      this._toolTipDisp.mouseEnabled = true;
      this._toolTipDisp.mouseChildren = true;
      this.rewardComponent = new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(this._toolTipDisp, new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this._toolTipDisp).addMouseWheelElements([this._toolTipDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(), 3, 3);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._toolTipDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__s5param0.getQuestName()))).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.rewardComponent.show(__s5param0.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local1(65, 63)), this.bindFunction(this.preRenderFunc));
    this._toolTipDisp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._toolTipDisp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  QuestMapTooltip.prototype.preRenderFunc = function (__s8param0) {
    if (__s8param0.itemVO) {
      var __s8local0 = __s8param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(__s8param0.itemVO.itemType) == -1) {
        __s8local0.transform.offset.y = -7;
        __s8local0.transform.scale = 0.78;
      } else {
        __s8local0.transform.offset.y = 0;
      }
    }
  };
  QuestMapTooltip.prototype.onMouseOver = function (__s13param0) {
    if (__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager.TOOLTIP_LABEL in __s13param0.target && __s13param0.target.toolTipText) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.tooltipManager.show(__s13param0.target.toolTipText, __s13param0.target);
    }
    if ((__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s13param0.target, "BasicButton") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s13param0.target, "MovieClip") && __s13param0.target.basicButton != null) && __s13param0.target.enabled) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this._toolTipDisp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._toolTipDisp, __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.FADE_DURATION, {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
  };
  QuestMapTooltip.prototype.onMouseOut = function (__s17param0) {
    __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  QuestMapTooltip.prototype.hide = function () {
    this._toolTipDisp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._toolTipDisp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.rewardComponent.hide();
  };
  Object.defineProperty(QuestMapTooltip.prototype, "disp", {
    get: function () {
      return this._toolTipDisp;
    },
    enumerable: true,
    configurable: true
  });
  return QuestMapTooltip;
}(__dep_export_CastleComponent.CastleComponent);
exports.QuestMapTooltip = __s0local2;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_QuestMapTooltipHelper = require("gge-module:export_QuestMapTooltipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");

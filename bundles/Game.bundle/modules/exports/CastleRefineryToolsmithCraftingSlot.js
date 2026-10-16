Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CraftingSlotVO = require("gge-module:export_CraftingSlotVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleBuyTempProductionSlotDialog = require("gge-module:export_CastleBuyTempProductionSlotDialog");
var __dep_export_CastleBuyTempProductionSlotDialogProperties = require("gge-module:export_CastleBuyTempProductionSlotDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleRefineryToolsmithCraftingSlot(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._slotType = __s3param1;
    __s3local0._index = __s3param2;
    __s3local0._selectSlotCallback = __s3param3;
    __s3local0._slotClickFeedback = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3local0.disp.mc_filled, __s3local0.disp.mc_filled.mc_mouseOver, __s3local0.disp.mc_filled.mc_mouseDown);
    __s3local0._originalX = __s3local0.disp.x;
    __s3local0._itxt_unlockTime = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_empty_temporary.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_unlockTime.autoFitToBounds = true;
    var __s3local1 = __s3local0._slotType == __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION;
    __s3local0.disp.mc_empty_temporary.gotoAndStop(__s3local1 ? 1 : 2);
    __s3local0.disp.mc_empty.gotoAndStop(__s3local1 ? 1 : 2);
    __s3local0.disp.mc_empty.toolTipText = __s3local1 ? "dialog_crafting_productionSlot_available_tooltip" : "dialog_crafting_queueSlot_available_tooltip";
    __s3local0.disp.mc_locked.btn_buy.toolTipText = __s3local1 ? "dialog_crafting_tempProductionSlot_locked_tooltip" : "dialog_crafting_tempQueueSlot_locked_tooltip";
    __s3local0.disp.mc_empty.mouseChildren = false;
    __s3local0.disp.mc_empty_temporary.mouseChildren = false;
    __s3local0.disp.mc_filled.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_locked.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRefineryToolsmithCraftingSlot, __s1param0);
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "queueID", {
    set: function (__s5param0) {
      this._queueID = __s5param0;
      var __s5local0 = __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this._queueID);
      if (__s5local0) {
        this._slotVO = __s5local0.getSlotsByType(this._slotType)[this._index];
        this.update();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithCraftingSlot.prototype.update = function () {
    this.disp.x = this.originalX;
    __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.disp);
    this.updateStates();
    this.updateRecipeIcon();
    this.onTimerUpdate();
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateStates = function () {
    this.disp.mc_locked.visible = this._slotVO.isLocked();
    this.disp.mc_filled.visible = this._slotVO.isFilled();
    this.disp.mc_empty_temporary.visible = this._slotVO.isTemporarySlot && !this._slotVO.isLocked();
    this.disp.mc_empty.visible = !this._slotVO.isTemporarySlot && !this._slotVO.isLocked();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_locked.btn_buy, this._slotVO.previousSlot() && !this._slotVO.previousSlot().isLocked());
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateRecipeIcon = function () {
    if (this.slotVO.isFilled()) {
      var __s12local0 = this._slotVO.recipeVO.output.list[0];
      var __s12local1 = __s12local0.clone();
      __s12local1.amount = Math.round(__s12local0.amount * (1 + this.slotVO.boosterValue / 100));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_filled), __s12local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD, new __s0local0(56, 46)));
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.updateToolTipText = function () {
    if (this.slotVO.isFilled()) {
      var __s15local0 = this.slotVO.isProductionSlot ? "dialog_crafting_productionSlot_occupied_tooltip" : "dialog_crafting_queueSlot_occupied_tooltip";
      this.disp.mc_filled.toolTipText = {
        t: __s15local0,
        p: [this.slotVO.recipeVO.getNameString()]
      };
    } else if (this.slotVO.getRemainingUnlockTime() > 0) {
      __s15local0 = this.slotVO.isProductionSlot ? "dialog_crafting_tempProductionSlot_available_tooltip" : "dialog_crafting_tempQueueSlot_available_tooltip";
      this.disp.mc_empty_temporary.toolTipText = {
        t: __s15local0,
        p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.slotVO.getRemainingUnlockTime())]
      };
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onTimerUpdate = function () {
    this.updateStates();
    this.updateToolTipText();
    if (this.slotVO.isFilled()) {
      this.disp.mc_filled.progressBar.scaleX = this.slotVO.getRemainingProductionTimeRatio();
    } else if (this.slotVO.getRemainingUnlockTime() > 0) {
      this._itxt_unlockTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.slotVO.getRemainingUnlockTime());
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._slotClickFeedback) {
      this._slotClickFeedback.addEventListener();
    }
    this.disp.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._slotClickFeedback) {
      this._slotClickFeedback.removeEventListener();
    }
    this.disp.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onClick = function (__s29param0) {
    var __s29local0 = this;
    __s1param0.prototype.onClick.call(this, __s29param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      switch (__s29param0.target) {
        case this.disp.mc_locked.btn_buy:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleBuyTempProductionSlotDialog.CastleBuyTempProductionSlotDialog, new __dep_export_CastleBuyTempProductionSlotDialogProperties.CastleBuyTempProductionSlotDialogProperties(this._slotVO, function () {
            return __s29local0._slotVO.buy();
          }));
      }
    }
  };
  CastleRefineryToolsmithCraftingSlot.prototype.onMouseDown = function (__s35param0) {
    switch (__s35param0.target) {
      case this.disp.mc_filled:
        if (this._selectSlotCallback) {
          this._selectSlotCallback(this);
        }
    }
  };
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithCraftingSlot.prototype.setSelected = function (__s41param0) {
    this.disp.mc_filled.mc_bg.gotoAndStop(__s41param0 ? 2 : 1);
  };
  Object.defineProperty(CastleRefineryToolsmithCraftingSlot.prototype, "originalX", {
    get: function () {
      return this._originalX;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithCraftingSlot;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleRefineryToolsmithCraftingSlot = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");

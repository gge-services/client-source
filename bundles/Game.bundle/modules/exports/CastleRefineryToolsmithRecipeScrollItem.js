Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleBuyTempProductionSlotDialog = require("gge-module:export_CastleBuyTempProductionSlotDialog");
var __dep_export_CastleBuyTempProductionSlotDialogProperties = require("gge-module:export_CastleBuyTempProductionSlotDialogProperties");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
var __dep_export_CastleResearchDialogProperties = require("gge-module:export_CastleResearchDialogProperties");
var __dep_export_CastleRefineryToolsmithDialog = require("gge-module:export_CastleRefineryToolsmithDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRefineryToolsmithRecipeScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.renderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_locked.btn_learn.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_learnRecipe")));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_noRecipe.btn_learn.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_learnRecipe")));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_noRecipe.txt_locked, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_recipeRequired"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.btn_start.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_craft")));
    __s3local0.itxt_amount = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_item.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_amount_reward", [0, ""]));
    __s3local0.itxt_name = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_item.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_time = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_recipe = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_recipe, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_recipe.autoFitToBounds = true;
    __s3local0.itxt_name.autoFitToBounds = true;
    __s3local0.disp.mc_locked.toolTipText = "dialog_crafting_recipeRequired";
    __s3local0.disp.icon_duration.toolTipText = "dialog_ci_craft_ciTime_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_right, __s3local0.disp.btn_left, __s3local0.disp.btn_start, __s3local0.disp.mc_locked.btn_learn, __s3local0.disp.mc_noRecipe.btn_learn], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRefineryToolsmithRecipeScrollItem, __s1param0);
  CastleRefineryToolsmithRecipeScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.renderList.destroyCollectableRenderList();
    if (this.recipeScrollItemVO.allRecipesLocked || this.recipeScrollItemVO.groupLocked) {
      this.disp.mc_noRecipe.visible = true;
      this.disp.mc_noRecipe.btn_learn.toolTipText = null;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_noRecipe.btn_learn, true);
      if (this.recipeScrollItemVO.groupLocked) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_noRecipe.btn_learn, false);
        var __s5local0 = this.recipeScrollItemVO.recipes[0];
        var __s5local1 = __s5local0.requiredCraftingBuildings.find(function (__s9param0) {
          return __s9param0.onlyInKingdomIds.some(function (__s11param0) {
            return __s11param0 == __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__s5local0.queueID).kingdomID;
          });
        });
        if (__s5local1) {
          var __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("upgrade_buildingLevel", [__s5local1.getNameString(), __s5local1.level]);
          var __s5local3 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_crafting_recipe_buildingRequired", [__s5local2]);
          this.disp.mc_noRecipe.btn_learn.toolTipText = __s5local3;
        }
      }
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this.renderList, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_noRecipe.mc_icon).addIconMc(this.disp.mc_noRecipe.mc_icon).addInfoBtn(this.disp.mc_noRecipe.btn_info), this.recipeScrollItemVO.recipes[0].output.getItemByIndex(0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(100, 100)));
    } else {
      this.disp.mc_noRecipe.visible = false;
      this.disp.mc_locked.visible = !this.recipeScrollItemVO.currentRecipeVO.learned;
      this.disp.icon_recipe.visible = this.recipeScrollItemVO.currentRecipeVO.learned;
      if (this.disp.icon_recipe.visible) {
        this.disp.icon_recipe.gotoAndStop(this.recipeScrollItemVO.currentRecipeVO.getRecipeIconFrame());
      }
      __dep_export_CostHelper.CostHelper.initAsCosts(this.recipeScrollItemVO.currentRecipeVO.input, this.disp.mc_costs, false, true, this.renderList);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_noRecipe.txt_locked, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_recipeRequired"));
      var __s5local4 = this.recipeScrollItemVO.currentRecipeVO.output.list[0].clone();
      var __s5local5 = 0;
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
        __s5local5 = this.queueVO.queueID == __dep_export_CastleRefineryToolsmithDialog.CastleRefineryToolsmithDialog.TOOLSMITH ? this.queueVO.craftingEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COMPONENT_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength : this.queueVO.craftingEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_REFINED_RESOURCE_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
      }
      var __s5local6 = this.recipeScrollItemVO.currentRecipeVO.queueID;
      __s5local5 += this.queueVO.craftingEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(-1, -1, __s5local6)).getValueforId(__s5local6);
      __s5local4.amount = Math.round(__s5local4.amount * (1 + __s5local5 / 100));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this.renderList, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), __s5local4, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(100, 100)));
      this.itxt_amount.textContentVO.textReplacements = [__s5local4.amount, ""];
      this.itxt_amount.color = __s5local5 > 0 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.itxt_name.textContentVO.textId = __s5local4.getNameTextId();
      this.itxt_name.textContentVO.textReplacements = __s5local4.getNameTextParams();
      this.itxt_recipe.textContentVO.stringValue = this.recipeScrollItemVO.currentRecipeVO.getManualName();
      this.disp.btn_left.visible = this.recipeScrollItemVO.recipes.length > 1;
      this.disp.btn_right.visible = this.recipeScrollItemVO.recipes.length > 1;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_left, this.recipeScrollItemVO.currentRecipeIndex > 0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_right, this.recipeScrollItemVO.currentRecipeIndex < this.recipeCount - 1);
      this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.recipeScrollItemVO.currentRecipeVO.craftingDuration);
      var __s5local7 = __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this.recipeScrollItemVO.currentRecipeVO.queueID);
      var __s5local8 = __s5local7.hasFreeUnlockedSlots || __s5local7.hasFreeLockedSlots;
      if (!__s5local8 || __s5local8 && !__dep_export_ButtonHelper.ButtonHelper.isEnablingDelayed(this.disp.btn_start)) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_start, __s5local8);
      }
      this.disp.btn_start.toolTipText = __s5local8 ? null : "dialog_crafting_allSlotsOccupied";
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.changeCurrentRecipe = function (__s18param0) {
    this.recipeScrollItemVO.changeCurrentRecipe(__s18param0);
    this.customFillItem();
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.addListeners = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CraftingEvent.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON, this.bindFunction(this.onSLotBuyClosed));
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.removeListeners = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CraftingEvent.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON, this.bindFunction(this.onSLotBuyClosed));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_start, true);
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onSLotBuyClosed = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.disp.btn_start)) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_start, true);
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onMouseClick = function (__s29param0) {
    var __s29local0 = this;
    __s1param0.prototype.onMouseClick.call(this, __s29param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      switch (__s29param0.target) {
        case this.disp.btn_left:
          this.changeCurrentRecipe(-1);
          break;
        case this.disp.btn_right:
          this.changeCurrentRecipe(1);
          break;
        case this.disp.btn_start:
          if (this.queueVO.hasFreeUnlockedSlots) {
            __dep_export_CastleModel.CastleModel.craftingData.startCrafting(this.recipeScrollItemVO.currentRecipeVO);
          } else if (this.queueVO.hasFreeLockedSlots) {
            var __s29local1 = this.queueVO.nextFreeLockedSlot;
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleBuyTempProductionSlotDialog.CastleBuyTempProductionSlotDialog, new __dep_export_CastleBuyTempProductionSlotDialogProperties.CastleBuyTempProductionSlotDialogProperties(__s29local1, function () {
              var __s35local0 = new __dep_export_CollectableList.CollectableList().addItem(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s29local1.getUnlockCostC1()));
              if (__dep_export_CostHelper.CostHelper.validateCostBuyCommand(__s35local0)) {
                __s29local1.buy();
                __dep_export_CastleModel.CastleModel.craftingData.startCrafting(__s29local0.recipeScrollItemVO.currentRecipeVO);
              }
            }), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_HIGH, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.disp.mc_locked.btn_learn:
        case this.disp.mc_noRecipe.btn_learn:
          this.requiredResearch = this.recipeScrollItemVO.currentRecipeVO.getResearchRequired();
          this.onLearnClicked();
      }
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onLearnClicked = function () {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyMainCastle && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().objectId, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID));
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onJoinMainCastle = function (__s42param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    var __s42local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE");
    if (__s42local0) {
      __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s42local0.vo.pos);
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s42local0);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog, new __dep_export_CastleResearchDialogProperties.CastleResearchDialogProperties(this.requiredResearch, null));
    } else {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s42local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
      var __s42local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.RESEARCH_BUILDING_WOD_LEVEL1);
      if (!__s42local1.centerAndHighlightBuildingInShop(__s42local2)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warningTitle"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "recipeCount", {
    get: function () {
      return this.recipeScrollItemVO.recipes.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "queueVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this.recipeScrollItemVO.currentRecipeVO.queueID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "recipeScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithRecipeScrollItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.CastleRefineryToolsmithRecipeScrollItem = __s0local1;

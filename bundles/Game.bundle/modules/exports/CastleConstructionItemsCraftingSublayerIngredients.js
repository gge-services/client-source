Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleResearchDialogProperties = require("gge-module:export_CastleResearchDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleConstructionItemsCraftingSublayerIngredients(__s3param0, __s3param1) {
    this.constructionItemRequired = false;
    this.materialsRequired = false;
    this.researchRequired = false;
    this.ingredientInfo = __s3param0;
    this.sublayer = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.researchRequired.button, __s3param0.btn_plus, __s3param0.btn_minus, __s3param0.btn_slider]);
    CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(__s3param0.title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_neededMaterials"));
    CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(__s3param0.blueprintUnlocked.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_blueprintUnlocked")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(__s3param0.researchRequired.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_researchRequired"));
    this._researchText.autoFitToBounds = true;
    __s3param0.researchRequired.button.toolTipText = "showMe_simple";
    __s3param0.blueprintUnlocked.visible = !(__s3param0.researchRequired.visible = true);
    __s3param0.timeHover.toolTipText = "dialog_ci_craft_ciTime_tooltip";
  }
  CastleConstructionItemsCraftingSublayerIngredients.prototype.addEventListeners = function () {
    __dep_export_CastleModel.CastleModel.researchData.addEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.removeEventListeners = function () {
    __dep_export_CastleModel.CastleModel.researchData.removeEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onResearchUpdate = function (__s9param0) {
    this.update();
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.updateResearch = function () {
    var __s11local0 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.isRecipeUnlocked(this.sublayer.recipeShown);
    this.ingredientInfo.researchRequired.button.visible = true;
    this.ingredientInfo.researchRequired.visible = !(this.ingredientInfo.blueprintUnlocked.visible = __s11local0);
    if (__s11local0) {
      if (this.constructionItemRequired || this.materialsRequired) {
        this.ingredientInfo.researchRequired.visible = !(this.ingredientInfo.blueprintUnlocked.visible = false);
        if (this.constructionItemRequired) {
          this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_itemRequired"));
          this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN;
        } else {
          this.ingredientInfo.researchRequired.button.visible = false;
          this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_materialsRequired"));
          this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_NO_BTN;
        }
      }
    } else {
      this.researchRequired = true;
      this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noResearch_tooltip");
      var __s11local1 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.findResearchForRecipe(this.sublayer.recipeShown);
      this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_researchRequired"));
      this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN;
      if (__s11local1) {
        this._researchText.textContentVO.textReplacements = [__s11local1.fullNameText];
      } else {
        console.warn("Research missing for recipeID " + this.sublayer.recipeShown.id);
        this._researchText.textContentVO.textReplacements = [""];
      }
    }
    this._researchText.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerIngredients.prototype.update = function () {
    if (this.renderedConstructionItem) {
      this.renderedConstructionItem.destroy();
    }
    this.ingredientInfo.checkmark.mouseEnabled = false;
    this.ingredientInfo.checkmark.visible = false;
    this.sublayer.progressComponent.disableButton(null);
    this.constructionItemRequired = false;
    this.materialsRequired = false;
    this.researchRequired = false;
    if (this.sublayer.recipeShown) {
      CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getShortTimeStringBySeconds(this.sublayer.recipeShown.durationInSeconds)));
      var __s22local0 = false;
      var __s22local1 = true;
      if (this.costScrollList) {
        this.costScrollList.onUpdated.remove(this.bindFunction(this.updateCheckMarks));
        this.costScrollList.destroy();
      }
      this.costScrollList = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.fillMaterialCosts(this.ingredientInfo.mc_costs, this.sublayer.recipeShown);
      this.costScrollList.onUpdated.add(this.bindFunction(this.updateCheckMarks));
      if (this.sublayer.recipeShown.constructionItemNeeded) {
        this.renderedConstructionItem = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.ingredientInfo.mc_constructionItem), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, CastleConstructionItemsCraftingSublayerIngredients.CONSTRUCTION_ITEM_SIZE));
        var __s22local2 = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        if (__dep_export_CastleModel.CastleModel.constructionItemData.hasConstructionItem(this.sublayer.recipeShown.constructionItemNeeded.id)) {
          this.ingredientInfo.checkmark.visible = true;
          __s22local0 = true;
          __s22local2 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
        } else {
          this.constructionItemRequired = true;
        }
        CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.mc_constructionItem.amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(1)).color = __s22local2;
        this.renderedConstructionItem.changeItemVO(new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO(this.sublayer.recipeShown.constructionItemNeeded.id));
        this.renderedConstructionItem.update();
        this.sublayer.collectableRenderList.push(this.renderedConstructionItem);
      } else {
        CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.mc_constructionItem.amount, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
        __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.ingredientInfo.mc_constructionItem.mc_icon);
        this.ingredientInfo.mc_constructionItem.toolTipText = "dialog_ci_craft_ciSlot_tooltip";
      }
      if (__dep_export_CastleModel.CastleModel.constructionItemData.isInventoryFull) {
        this.sublayer.progressComponent.disableButton("alert_ci_inventoryFull_copy");
        __s22local1 = false;
      } else if (!__s22local0 && this.sublayer.recipeShown.constructionItemNeeded) {
        this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noItem_tooltip");
        __s22local1 = false;
      } else {
        for (var __s22local3 = 0, __s22local4 = this.sublayer.recipeShown.materialsNeeded.list; __s22local3 < __s22local4.length; __s22local3++) {
          var __s22local5 = __s22local4[__s22local3];
          if (__s22local5 !== undefined && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s22local5.id) < __s22local5.amount) {
            this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noMaterials_tooltip");
            this.materialsRequired = true;
            __s22local1 = false;
            break;
          }
        }
      }
      if (__s22local1) {
        this.sublayer.progressComponent.enableButton();
      }
      this.updateResearch();
      this.updateCheckMarks();
    } else {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.ingredientInfo.mc_costs);
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.updateCheckMarks = function () {
    var __s39local0;
    var __s39local1 = this.ingredientInfo.mc_costs;
    for (var __s39local2 = 0; __s39local2 < this.sublayer.recipeShown.materialsNeeded.list.length; ++__s39local2) {
      var __s39local3 = __dep_exact_81dacdf05bd32292.castAs(__s39local1.getChildByName("i" + __s39local2), "MovieClip");
      if (__s39local3) {
        __s39local0 = this.sublayer.recipeShown.materialsNeeded.list[__s39local2];
        var __s39local4 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s39local0.id) >= __s39local0.amount;
        __s39local3.checkmark.visible = __s39local4;
        __dep_export_CostHelper.CostHelper.setCostColor(__s39local3.txt_loot, !__s39local4);
      }
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onClick = function (__s44param0) {
    switch (__s44param0) {
      case this.ingredientInfo.researchRequired.button:
        if (this.researchRequired) {
          CastleConstructionItemsCraftingSublayerIngredients.layoutManager.hideAllDialogsExcept([]);
          if (__dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt) {
            var __s44local0 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.findResearchForRecipe(this.sublayer.recipeShown);
            if (__s44local0) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog, new __dep_export_CastleResearchDialogProperties.CastleResearchDialogProperties(__s44local0, null));
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog);
            }
          } else if (CastleConstructionItemsCraftingSublayerIngredients.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle) {
            this.showResearchTowerInBuildMode();
          } else {
            CastleConstructionItemsCraftingSublayerIngredients.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
          }
        } else if (this.constructionItemRequired && this.sublayer.recipeShown.constructionItemNeeded) {
          var __s44local1 = __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.findRecipeFor(this.sublayer.recipeShown.constructionItemNeeded);
          if (__s44local1) {
            this.sublayer.selectRecipe(__s44local1, true);
          }
        }
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onJAAArrived = function (__s55param0) {
    CastleConstructionItemsCraftingSublayerIngredients.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
    this.showResearchTowerInBuildMode();
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.showResearchTowerInBuildMode = function () {
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    var __s57local0 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.WID_RESEARCH_TOWER);
    CastleConstructionItemsCraftingSublayerIngredients.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel).centerAndHighlightBuildingInShop(__s57local0);
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerIngredients.__initialize_static_members = function () {
    CastleConstructionItemsCraftingSublayerIngredients.CONSTRUCTION_ITEM_SIZE = new __s0local0(54, 54);
  };
  CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN = 254;
  CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_NO_BTN = 290;
  return CastleConstructionItemsCraftingSublayerIngredients;
}();
exports.CastleConstructionItemsCraftingSublayerIngredients = __s0local1;
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
__s0local1.__initialize_static_members();

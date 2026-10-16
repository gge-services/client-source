Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SCollectLostAndFoundItemVO = require("gge-module:export_C2SCollectLostAndFoundItemVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ConstructionItemsActionProperties = require("gge-module:export_ConstructionItemsActionProperties");
var __dep_export_CastleConstructionSellDialogProperties = require("gge-module:export_CastleConstructionSellDialogProperties");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __dep_export_CastleEquipmentSellDialogProperties = require("gge-module:export_CastleEquipmentSellDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function LostAndFoundListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LostAndFoundListItem, __s1param0);
  LostAndFoundListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.btn_option1, this.itemMc.btn_option2, this.itemMc.btn_collect], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.itemMc.btn_option1.mouseChildren = this.itemMc.btn_option2.mouseChildren = this.itemMc.btn_collect.mouseChildren = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.btn_collect.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("collect")).autoFitToBounds = true;
  };
  LostAndFoundListItem.prototype.fill = function () {
    this.itemMc.mc_number.gotoAndStop(this.vo.rank == 1 ? 2 : 1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_number.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.vo.rank));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_received, this.vo.receivedTimeTextVO);
    var __s7local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60));
    __s7local0.tooltip.useAmount = false;
    var __s7local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s7local1.addIconMc(this.itemMc.mc_icon);
    __s7local1.addInfoBtn(this.itemMc.btn_info);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s7local1, this.vo.collectableVO, __s7local0);
    var __s7local2 = this.voIsConstructionItemVO && __dep_export_CastleModel.CastleModel.constructionItemData.isInventoryFull || this.voIsGemVO && __dep_export_CastleModel.CastleModel.gemData.isInventoryFull || this.voIsEquipmentVO && __dep_export_CastleModel.CastleModel.equipData.isInventoryFull || this.voIsBuildingVO && __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage().isCapacityFull();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_collect, !__s7local2);
    this.itemMc.btn_collect.toolTipText = __s7local2 ? "fullInventory_tt" : null;
    this.updateTimer();
    this.updateOptionButtons();
  };
  LostAndFoundListItem.prototype.updateOptionButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_option2, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_option1, true);
    if (this.voIsConstructionItemVO) {
      this.itemMc.btn_option1.mc_constuction.visible = true;
      this.itemMc.btn_option1.mc_sell.visible = false;
      this.itemMc.btn_option1.toolTipText = "disassemble_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = true;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_option2, __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorBuilding);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_option1, __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorBuilding);
      this.itemMc.btn_option2.toolTipText = "dialog_ci_assign_list_items_tooltip";
    } else if (this.voIsGemVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = true;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "dialog_gems_tooltip";
    } else if (this.voIsEquipmentVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = true;
      this.itemMc.btn_option2.toolTipText = "dialog_equipment_title";
    } else if (this.voIsBuildingVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = true;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "dialog_buildingsStorehouse_title";
    } else {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = false;
      this.itemMc.btn_option1.toolTipText = "unknown";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "unknown";
    }
  };
  LostAndFoundListItem.prototype.updateTimer = function () {
    if (this.vo) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.itemMc.txt_timeLeft, this.vo.remainingTimeInSeconds);
    }
  };
  Object.defineProperty(LostAndFoundListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  LostAndFoundListItem.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.itemMc.btn_option1:
          this.onOption1();
          break;
        case this.itemMc.btn_option2:
          this.onOption2();
          break;
        case this.itemMc.btn_collect:
          this.onCollect();
      }
    }
  };
  LostAndFoundListItem.prototype.onCollect = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCollectLostAndFoundItemVO.C2SCollectLostAndFoundItemVO(this.vo.id));
  };
  LostAndFoundListItem.prototype.onOption1 = function () {
    if (this.voIsConstructionItemVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsDisassembleDialog.CastleConstructionItemsDisassembleDialog, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(this.vo.collectableVO.constructionItemVO, null, null, null, this.vo.id));
    } else if (this.voIsGemVO) {
      var __s27local0 = this.vo.collectableVO;
      var __s27local1 = this.vo.id;
      if (this.voIsRelicGem) {
        var __s27local2 = __s27local0.vo;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(__s27local2, function () {
          return __dep_export_CastleModel.CastleModel.gemData.sell(__s27local2, __s27local1);
        }, null, __s27local1));
      } else {
        var __s27local3 = __s27local0.gemVO || __s27local0.gemVO;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(__s27local3, function () {
          return __dep_export_CastleModel.CastleModel.gemData.sell(__s27local3, __s27local1);
        }, null, __s27local1));
      }
    } else if (this.voIsEquipmentVO) {
      __s27local0 = this.vo.collectableVO;
      var __s27local4 = this.vo.id;
      if (this.voIsRelicEquipment) {
        var __s27local5 = __s27local0.vo;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(__s27local5, function () {
          return __dep_export_CastleModel.CastleModel.equipData.sell(__s27local5, -1, __s27local4);
        }, null, __s27local4));
      } else {
        var __s27local6 = __s27local0.equipmentVO;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(__s27local6, function () {
          return __dep_export_CastleModel.CastleModel.equipData.sell(__s27local6, -1, __s27local4);
        }, null, __s27local4));
      }
    } else if (this.voIsBuildingVO) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleConstructionSellDialog.CastleConstructionSellDialog, new __dep_export_CastleConstructionSellDialogProperties.CastleConstructionSellDialogProperties(this.vo.collectableVO.buildingVO));
    }
  };
  LostAndFoundListItem.prototype.onOption2 = function () {
    if (this.voIsConstructionItemVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties());
    } else if (this.voIsGemVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, -1, false, __dep_export_CastleEquipmentSublayer.CastleEquipmentSublayer.FILTER_GEM));
    } else if (this.voIsEquipmentVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog);
    } else if (this.voIsBuildingVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DecorationStorageDialog.DecorationStorageDialog);
    }
  };
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsGemVO", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemGemVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemGemRandomVO") || this.voIsRelicGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsEquipmentVO", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "ACollectableItemEquipmentVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemEquipmentRarenessVO") || this.voIsRelicEquipment;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsRelicEquipment", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemRelicVO") && this.vo.collectableVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsRelicGem", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemRelicVO") && this.vo.collectableVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_GEM;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsConstructionItemVO", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemConstructionItemVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsBuildingVO", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo.collectableVO, "CollectableItemBuildingVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return LostAndFoundListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.LostAndFoundListItem = __s0local1;
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleConstructionItemsDisassembleDialog = require("gge-module:export_CastleConstructionItemsDisassembleDialog");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_CastleConstructionSellDialog = require("gge-module:export_CastleConstructionSellDialog");
var __dep_export_DecorationStorageDialog = require("gge-module:export_DecorationStorageDialog");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleEquipmentSellDialog = require("gge-module:export_CastleEquipmentSellDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleEquipmentSublayer = require("gge-module:export_CastleEquipmentSublayer");

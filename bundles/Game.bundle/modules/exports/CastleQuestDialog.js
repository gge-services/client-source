Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2STreasureMapsVO = require("gge-module:export_C2STreasureMapsVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_TimeLimitedCampaignUpdateEvent = require("gge-module:export_TimeLimitedCampaignUpdateEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function CastleQuestDialog() {
    var __s3local0 = this;
    __s3local0.currentCategory = -1;
    __s3local0.clearSelected = false;
    __s3local0.dclArrived = true;
    __s3local0.tmpArrived = true;
    __s3local0.resourceIndex = 0;
    __s3local0.resourceStorageComponents = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleQuestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestDialog, __s1param0);
  CastleQuestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_header"))));
    this.initTabs();
    this.initQuestLists();
    this.questInfoComponent = new __dep_export_QuestInfoComponent.QuestInfoComponent(this.dialogDisp.mc_questInfo);
    this.questMapComponent = new __dep_export_QuestMapComponent.QuestMapComponent(this.dialogDisp.mc_questMap);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_help, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
  };
  CastleQuestDialog.prototype.initQuestLists = function () {
    var __s7local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s7local0.scrollStepPixels = 48;
    __s7local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s7local0.disableButtons = true;
    __s7local0.onlyOneActiveItem = false;
    this.kingdomList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.quests_kingdom, __s7local0);
    this.eventList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.quests_events, __s7local0);
    this.campaignList = new __dep_export_CampaignQuestListComponent.CampaignQuestListComponent(this.dialogDisp.quests_campaign, __s7local0);
    var __s7local1 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s7local1.scrollStepPixels = 48;
    __s7local1.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s7local1.disableButtons = true;
    this.epicList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.quests_epic, __s7local1);
    this.kingdomList.disp.visible = false;
    this.eventList.disp.visible = false;
    this.epicList.disp.visible = false;
    this.campaignList.disp.visible = false;
  };
  CastleQuestDialog.prototype.initTabs = function () {
    var __s9local0 = [];
    this.tabLayoutables = [];
    this.tabLayoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    for (var __s9local1 = 0; __s9local1 < CastleQuestDialog.AMOUNT_TABS; __s9local1++) {
      var __s9local2 = this.dialogDisp["tab_" + __s9local1];
      __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(__s9local2);
      __s9local0.push(__dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s9local2));
      __s9local2.mouseChildren = false;
      __s9local2.toolTipText = this.getCategoryTooltip(__s9local1);
      this.tabLayoutables[__s9local1] = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s9local2);
    }
    this.tabGroup = new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup(__s9local0);
  };
  CastleQuestDialog.prototype.initKingdomTabButtons = function () {
    for (var __s13local0 = 0; __s13local0 < 4; __s13local0++) {
      var __s13local1 = this.dialogDisp["tab_" + __s13local0];
      if (__s13local1.mc_icon0) {
        __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addSymbolToMC(__s13local1.mc_icon0, __s13local1.mc_bg0, this.mapCategoryToKingdomID(__s13local0), new __s0local0(40, 40));
      }
      if (__s13local1.mc_icon1) {
        __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addSymbolToMC(__s13local1.mc_icon1, __s13local1.mc_bg1, this.mapCategoryToKingdomID(__s13local0), new __s0local0(40, 40));
      }
    }
  };
  CastleQuestDialog.prototype.getCategoryTooltip = function (__s19param0) {
    switch (__s19param0) {
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN:
        return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID).kingdomNameString;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_ICE:
        return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID).kingdomNameString;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_DESSERT:
        return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_6.WorldDessert.KINGDOM_ID).kingdomNameString;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_VOLCANO:
        return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID).kingdomNameString;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_categoryEvents");
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_categoryTimeLimitedCampaign");
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_categoryChain");
    }
    return "";
  };
  CastleQuestDialog.prototype.showLoaded = function (__s22param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s22param0);
    this.dclArrived = false;
    this.selectStartCategory();
    this.updateTabs();
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.addEventListener(__dep_export_TimeLimitedCampaignUpdateEvent.TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED, this.bindFunction(this.onCampaignUpdated));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdated));
    this.getNewDetailedCastleList();
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onGclArrived));
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
      this.tmpArrived = false;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureMapsVO.C2STreasureMapsVO());
      __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapsUpdated));
    }
  };
  CastleQuestDialog.prototype.onGclArrived = function (__s25param0) {
    this.getNewDetailedCastleList();
  };
  CastleQuestDialog.prototype.getNewDetailedCastleList = function () {
    this.dclArrived = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
  };
  CastleQuestDialog.prototype.hideLoaded = function (__s29param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s29param0);
    if (this.activeList) {
      this.activeList.hide();
    }
    this.currentCategory = -1;
    this.questInfoComponent.hide();
    this.questMapComponent.hide();
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.removeEventListener(__dep_export_TimeLimitedCampaignUpdateEvent.TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED, this.bindFunction(this.onCampaignUpdated));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onGclArrived));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapsUpdated));
    this.dclArrived = true;
    this.tmpArrived = true;
  };
  CastleQuestDialog.prototype.selectStartCategory = function () {
    var __s32local0 = 0;
    var __s32local1 = 0;
    if (this.dialogProperties.preselectQuest && __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(this.dialogProperties.preselectQuest.questID)) {
      __s32local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.preselectQuest.questCategory);
    } else {
      __s32local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      switch (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
        case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
          __s32local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_ICE);
          break;
        case __dep_exact_26a421b704832cff_6.WorldDessert.KINGDOM_ID:
          __s32local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_DESSERT);
          break;
        default:
          __s32local1 = __s32local0;
      }
      if (this.layoutManager.isInTreasureEvent || __s32local0 == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID || __s32local0 == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
        __s32local1 = __dep_export_CastleModel.CastleModel.questData.getQuestListByCategory(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS).length > 0 ? __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS) : __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN);
      }
    }
    this.tabGroup.selectButton(this.dialogDisp["tab_" + __s32local1].basicButton);
    this.setQuestCategory(__s32local1);
  };
  CastleQuestDialog.prototype.updateTabs = function () {
    for (var __s38local0 = 0; __s38local0 < CastleQuestDialog.AMOUNT_TABS; __s38local0++) {
      var __s38local1 = this.dialogDisp["tab_" + __s38local0];
      var __s38local2 = false;
      if (__s38local0 == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN) {
        var __s38local3 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
        __s38local2 = !!__s38local3 && __s38local3.isActive;
      } else {
        __s38local2 = __dep_export_CastleModel.CastleModel.questData.getQuestListByCategory(__s38local0).length > 0;
      }
      if (this.currentCategory == __s38local0 && !__s38local2) {
        this.selectStartCategory();
      }
      __s38local1.visible = __s38local2;
    }
    this.tabLayoutStrategy.apply(this.tabLayoutables, new __s0local1(0, this.tabLayoutables[0].disp.y));
    this.initKingdomTabButtons();
  };
  CastleQuestDialog.prototype.updateResources = function () {
    if (this.dclArrived && this.tmpArrived) {
      var __s45local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
      var __s45local1 = -1;
      if (this.currentCategory <= __dep_export_CastleQuestData.CastleQuestData.CATEGORY_VOLCANO) {
        __s45local0 = this.mapCategoryToKingdomID(this.currentCategory);
        if (!__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s45local0)) {
          __s45local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
        }
      } else if (this.currentCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS && (this.updateEventList(), this.eventList.items.length > 0 && this.eventList.items[0].questItems.length > 0)) {
        var __s45local2 = this.eventList.items[0].questItems[0].questVO;
        if (__s45local2.mapID > 0) {
          if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID == __s45local2.mapID && !__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.isLocked) {
            __s45local1 = __s45local2.mapID;
          }
        } else if (__s45local2.triggerKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID || __s45local2.triggerKingdomID == __dep_exact_26a421b704832cff_3.FactionConst.KINGDOM_ID) {
          __s45local0 = __s45local2.triggerKingdomID;
        }
      }
      if (this.resourceIndex < 0) {
        this.resourceIndex = 0;
      }
      if (this.resourceIndex > this.resourcesToShow().length - 8) {
        this.resourceIndex = this.resourcesToShow().length - 8 - 1;
      }
      for (var __s45local3 = 0; __s45local3 < 8; __s45local3++) {
        var __s45local4 = 0;
        var __s45local5 = 0;
        var __s45local6 = this.resourcesToShow()[__s45local3 + this.resourceIndex];
        if (__s45local6 == __dep_export_CollectableEnum.CollectableEnum.C1) {
          __s45local4 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount;
        } else if (__s45local6 == __dep_export_CollectableEnum.CollectableEnum.C2) {
          __s45local4 = __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
        } else if (__s45local1 > 0) {
          __s45local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(__s45local1, true).resources.getAmountOrDefaultByType(__s45local6));
          __s45local5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(__s45local1, true).resourceStorageCapacity.getAmountOrDefaultByType(__s45local6));
        } else {
          var __s45local7 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__s45local0);
          if (__s45local7) {
            __s45local4 = __dep_exact_f855840627e6e145.int(__s45local7.getResource(__s45local6));
            __s45local5 = __dep_exact_f855840627e6e145.int(__s45local7.getMaxStorageSpace(__s45local6));
          }
        }
        this.setResource(__s45local3, __s45local6, __s45local4, __s45local5);
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_left, this.resourceIndex > 0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_right, this.resourceIndex < this.resourcesToShow().length - 8);
    }
  };
  CastleQuestDialog.prototype.resourcesToShow = function () {
    var __s63local0 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY.concat(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES);
    __s63local0.splice(__s63local0.indexOf(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE), 1);
    return __s63local0;
  };
  CastleQuestDialog.prototype.mapCategoryToKingdomID = function (__s65param0) {
    switch (__s65param0) {
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_ICE:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID);
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_DESSERT:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_6.WorldDessert.KINGDOM_ID);
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_VOLCANO:
        return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID);
    }
    return 0;
  };
  CastleQuestDialog.prototype.setResource = function (__s68param0, __s68param1, __s68param2, __s68param3) {
    var __s68local0;
    if (__s68param3 === undefined) {
      __s68param3 = -1;
    }
    if (this.resourceStorageComponents.length <= __s68param0) {
      __s68local0 = new __dep_export_ResourceComponentWithStorageBar.ResourceComponentWithStorageBar(this.dialogDisp["mc_res_" + __s68param0.toString()], __s68param1);
      this.resourceStorageComponents[__s68param0] = __s68local0;
    } else {
      __s68local0 = this.resourceStorageComponents[__s68param0];
    }
    __s68local0.resource = __s68param1;
    __s68local0.setValue(__s68param2, __s68param3);
    __s68local0.disp.doCache();
  };
  CastleQuestDialog.prototype.onTreasureMapsUpdated = function (__s73param0) {
    this.tmpArrived = true;
    this.updateResources();
  };
  CastleQuestDialog.prototype.onDetailedCastleListUpdated = function (__s75param0) {
    this.dclArrived = true;
    this.updateResources();
  };
  CastleQuestDialog.prototype.onIslandReset = function (__s77param0) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onSpecialEventRemoved = function (__s79param0) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onGetQuestList = function (__s81param0) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onCampaignUpdated = function (__s83param0) {
    if (this.currentCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN) {
      this.updateQuests();
    }
  };
  CastleQuestDialog.prototype.updateQuests = function () {
    this.updateTabs();
    this.updateByCategory();
  };
  CastleQuestDialog.prototype.onClick = function (__s88param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s88param0)) {
      __s1param0.prototype.onClick.call(this, __s88param0);
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s88param0.target)) {
      if (__s88param0.target.name && __s88param0.target.name.indexOf("tab_") > -1) {
        this.setQuestCategory(this.tabGroup.getSelectedButtonIndex());
      }
      switch (__s88param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
          break;
        case this.dialogDisp.btn_left:
          this.resourceIndex--;
          this.updateResources();
          break;
        case this.dialogDisp.btn_right:
          this.resourceIndex++;
          this.updateResources();
      }
    }
  };
  CastleQuestDialog.prototype.showHelp = function () {
    var __s94local0;
    switch (this.currentCategory) {
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN:
        __s94local0 = __dep_export_ABGHelper.ABGHelper.isOnABGServer ? __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_questbook_help") : "dialog_questbook_help_classic";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_ICE:
        __s94local0 = "dialog_questbook_help_ice";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_DESSERT:
        __s94local0 = "dialog_questbook_help_desert";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_VOLCANO:
        __s94local0 = "dialog_questbook_help_volcano";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS:
        __s94local0 = "dialog_questbook_help_events";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN:
        __s94local0 = "dialog_questbook_help_campaign";
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC:
        __s94local0 = "dialog_questbook_help_epic";
    }
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(__s94local0));
  };
  CastleQuestDialog.prototype.setQuestCategory = function (__s97param0) {
    if (__s97param0 != this.currentCategory) {
      if (this.activeList) {
        this.activeList.hide();
      }
      this.questMapComponent.scrollToTop();
      this.questMapComponent.hide();
      this.currentCategory = __s97param0;
      this.selectedQuestItem = null;
      this.updateByCategory();
      this.activeList.scrollToTop();
      this.updateResources();
      this.initKingdomTabButtons();
    }
  };
  CastleQuestDialog.prototype.updateByCategory = function () {
    switch (this.currentCategory) {
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN:
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_ICE:
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_DESSERT:
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_VOLCANO:
        this.updateKingdomList();
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS:
        this.updateEventList();
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN:
        this.updateCampaignList();
        break;
      case __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC:
        this.updateEpicList();
    }
    this.showQuestInfo();
  };
  CastleQuestDialog.prototype.createQuestItem = function (__s104param0, __s104param1 = false) {
    var __s104local0 = new __dep_export_QuestListItem.QuestListItem(__s104param0, this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties, __s104param1);
    if (this.selectedQuestItem && this.selectedQuestItem.questVO.questID == __s104param0.questID || this.dialogProperties.preselectQuest && this.dialogProperties.preselectQuest.questID == __s104param0.questID) {
      this.selectedQuestItem = null;
      __s104local0.select(true, true);
      this.clearSelected = false;
      this.dialogProperties.preselectQuest = null;
    }
    return __s104local0;
  };
  CastleQuestDialog.prototype.updateKingdomList = function () {
    this.activeList = this.kingdomList;
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      if (!__dep_export_ABGHelper.ABGHelper.abgEvent) {
        this.hide();
        return;
      }
      this.kingdomList.disp.mc_kingdom.gotoAndStop(5);
      var __s107local0 = "QuestBook_ABG_Kingdomteaser_" + __dep_export_ABGHelper.ABGHelper.skinName + "_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.kingdomList.disp.mc_kingdom.mc_icon);
      this.kingdomList.disp.mc_kingdom.mc_icon.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s107local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s107local0), null, 0, false));
    } else {
      this.kingdomList.disp.mc_kingdom.gotoAndStop(this.currentCategory + 1);
    }
    this.kingdomList.hide();
    this.clearSelected = true;
    for (var __s107local1 = __dep_export_CastleModel.CastleModel.questData.getQuestListByCategory(this.currentCategory), __s107local2 = 0; __s107local2 < __s107local1.length; __s107local2++) {
      var __s107local3 = __s107local1[__s107local2];
      this.kingdomList.addItem(this.createQuestItem(__s107local3, __s107local2 == 0));
    }
    this.kingdomList.show();
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.updateEventList = function () {
    this.activeList = this.eventList;
    this.eventList.hide();
    this.clearSelected = true;
    var __s115local0 = new Map();
    var __s115local1 = [];
    var __s115local2 = __dep_export_CastleModel.CastleModel.questData.getQuestListByCategory(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS);
    if (__s115local2 != null) {
      for (var __s115local3 = 0, __s115local4 = __s115local2; __s115local3 < __s115local4.length; __s115local3++) {
        var __s115local5 = __s115local4[__s115local3];
        if (__s115local5 !== undefined) {
          if (!__s115local0.get(__s115local5.eventID)) {
            __s115local0.set(__s115local5.eventID, new __dep_export_QuestListEventItem.QuestListEventItem(this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties));
            __s115local1.push(__s115local0.get(__s115local5.eventID));
          }
          __s115local0.get(__s115local5.eventID).addQuestItem(this.createQuestItem(__s115local5));
        }
      }
    }
    __s115local1.sort(this.bindFunction(this.sortEventsByTime));
    this.eventList.show();
    if (__s115local1 != null) {
      for (var __s115local6 = 0, __s115local7 = __s115local1; __s115local6 < __s115local7.length; __s115local6++) {
        var __s115local8 = __s115local7[__s115local6];
        if (__s115local8 !== undefined) {
          __s115local8.applyLayout();
          this.eventList.addItem(__s115local8);
        }
      }
    }
    this.eventList.show();
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.sortEventsByTime = function (__s127param0, __s127param1) {
    return __s127param0.getRemainingTime() - __s127param1.getRemainingTime();
  };
  CastleQuestDialog.prototype.updateEpicList = function () {
    this.activeList = this.epicList;
    this.epicList.hide();
    this.clearSelected = true;
    __dep_export_CastleModel.CastleModel.questData.validateEpicQuests();
    var __s129local0 = __dep_export_CastleModel.CastleModel.questData.getQuestListByCategory(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC);
    if ((__s129local0 = __s129local0.reverse()) != null) {
      for (var __s129local1 = 0, __s129local2 = __s129local0; __s129local1 < __s129local2.length; __s129local1++) {
        var __s129local3 = __s129local2[__s129local1];
        if (__s129local3 !== undefined && !__s129local3.isCompleted) {
          var __s129local4 = __dep_export_CastleModel.CastleModel.questData.createEpicQuestSeriesByQuest(__s129local3);
          var __s129local5 = new __dep_export_QuestListEpicItem.QuestListEpicItem(this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties);
          if (__s129local4 != null) {
            for (var __s129local6 = 0, __s129local7 = __s129local4; __s129local6 < __s129local7.length; __s129local6++) {
              var __s129local8 = __s129local7[__s129local6];
              if (__s129local8 !== undefined) {
                __s129local5.addQuestItem(this.createQuestItem(__s129local8), __s129local8 == __s129local3);
              }
            }
          }
          __s129local5.applyLayout();
          this.epicList.addItem(__s129local5);
        }
      }
    }
    this.epicList.show();
    this.epicList.onCollapseSignal.add(this.bindFunction(this.onEpicSeriesSelect));
    if (this.epicList.numItems == 1) {
      this.epicList.expandItemAt(0, true, true);
    }
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.onEpicSeriesSelect = function (__s141param0) {
    if (this.selectedQuestItem) {
      this.selectedQuestItem.select(false, true);
    } else {
      this.showQuestInfo();
    }
  };
  CastleQuestDialog.prototype.updateCampaignList = function () {
    this.activeList = this.campaignList;
    this.campaignList.hide();
    this.clearSelected = true;
    var __s145local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    if (__s145local0) {
      var __s145local1 = __s145local0.campaignQuests;
      if (__s145local1 != null) {
        for (var __s145local2 = 0, __s145local3 = __s145local1; __s145local2 < __s145local3.length; __s145local2++) {
          var __s145local4 = __s145local3[__s145local2];
          if (__s145local4 !== undefined) {
            this.campaignList.addItem(this.createQuestItem(__s145local4, false));
          }
        }
      }
      this.campaignList.show();
      if (this.clearSelected) {
        this.selectedQuestItem = null;
      }
    }
  };
  CastleQuestDialog.prototype.onSelectQuest = function (__s153param0, __s153param1) {
    if (__s153param1) {
      if (this.selectedQuestItem) {
        this.selectedQuestItem.select(false, false);
      }
      this.selectedQuestItem = __s153param0;
      this.showQuestInfo();
    } else {
      this.selectedQuestItem = null;
      this.showQuestInfo();
    }
  };
  CastleQuestDialog.prototype.showQuestInfo = function () {
    if (this.selectedQuestItem) {
      this.dialogDisp.mc_questInfo.visible = true;
      this.dialogDisp.mc_noQuestSelected.visible = false;
      this.questInfoComponent.showQuest(this.selectedQuestItem.questVO);
      this.questMapComponent.hide();
    } else {
      this.dialogDisp.mc_questInfo.visible = false;
      this.dialogDisp.mc_noQuestSelected.visible = true;
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        this.dialogDisp.mc_noQuestSelected.gotoAndStop(8);
        var __s158local0 = "QuestBook_ABG_EmptyQuestbook_Teaser_" + __dep_export_ABGHelper.ABGHelper.skinName;
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_noQuestSelected.mc_teaser);
        this.dialogDisp.mc_noQuestSelected.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s158local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s158local0), null, 0, false));
      } else {
        this.dialogDisp.mc_noQuestSelected.gotoAndStop(this.currentCategory + 1);
      }
      if (this.currentCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC) {
        var __s158local1 = __dep_exact_81dacdf05bd32292_1.castAs(this.epicList.getLastActivatedItem(), "QuestListEpicItem");
        if (__s158local1 && __s158local1.isExpanded) {
          this.questMapComponent.show(__s158local1.questItems);
          this.dialogDisp.mc_noQuestSelected.visible = false;
        } else {
          this.questMapComponent.hide();
          this.dialogDisp.mc_noQuestSelected.visible = true;
        }
      } else if (this.currentCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN) {
        this.questMapComponent.show(this.campaignList.items);
      }
    }
  };
  Object.defineProperty(CastleQuestDialog.prototype, "tutorialRecommendedQuest", {
    get: function () {
      if (this.activeList == this.kingdomList) {
        return this.kingdomList.items[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestDialog.__initialize_static_members = function () {
    CastleQuestDialog.questItemProperties = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2);
  };
  CastleQuestDialog.NAME = "CastleQuestDialogEx_R";
  CastleQuestDialog.AMOUNT_TABS = 7;
  return CastleQuestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleQuestDialog = __s0local2;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleQuestData = require("gge-module:export_CastleQuestData");
var __dep_export_CampaignQuestListComponent = require("gge-module:export_CampaignQuestListComponent");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_QuestInfoComponent = require("gge-module:export_QuestInfoComponent");
var __dep_export_QuestListEpicItem = require("gge-module:export_QuestListEpicItem");
var __dep_export_QuestListEventItem = require("gge-module:export_QuestListEventItem");
var __dep_export_QuestListItem = require("gge-module:export_QuestListItem");
var __dep_export_QuestMapComponent = require("gge-module:export_QuestMapComponent");
var __dep_export_ResourceComponentWithStorageBar = require("gge-module:export_ResourceComponentWithStorageBar");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__s0local2.__initialize_static_members();

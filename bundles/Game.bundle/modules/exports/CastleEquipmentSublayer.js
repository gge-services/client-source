Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_LordScrollList = require("gge-module:export_LordScrollList");
var __dep_export_LordEffectDialogComponent = require("gge-module:export_LordEffectDialogComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_GeneralSelection = require("gge-module:export_GeneralSelection");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralSelectionProperties = require("gge-module:export_GeneralSelectionProperties");
var __dep_export_GeneralsOverviewDialog = require("gge-module:export_GeneralsOverviewDialog");
var __dep_export_EquipmentFilterPanel = require("gge-module:export_EquipmentFilterPanel");
var __dep_export_GemFilterPanel = require("gge-module:export_GemFilterPanel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleEquipableListComponent = require("gge-module:export_CastleEquipableListComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_EquipmentEquipmentClickHandler = require("gge-module:export_EquipmentEquipmentClickHandler");
var __dep_export_EquipmentGemClickHandler = require("gge-module:export_EquipmentGemClickHandler");
var __dep_export_EquipmentFilterView = require("gge-module:export_EquipmentFilterView");
var __dep_export_GemFilterView = require("gge-module:export_GemFilterView");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SGetGemInventory = require("gge-module:export_C2SGetGemInventory");
var __dep_export_C2SGetEquipmentInventory = require("gge-module:export_C2SGetEquipmentInventory");
var __dep_export_C2SGetLordsInfoVO = require("gge-module:export_C2SGetLordsInfoVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_LordScrollItemVO = require("gge-module:export_LordScrollItemVO");
var __dep_export_CommanderScrollItem = require("gge-module:export_CommanderScrollItem");
var __dep_export_BaronScrollItem = require("gge-module:export_BaronScrollItem");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_AutoSellDialog = require("gge-module:export_AutoSellDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __dep_export_CastleEquipmentSlotItem = require("gge-module:export_CastleEquipmentSlotItem");
var __s0local3 = function (__s1param0) {
  function CastleEquipmentSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._waitingForServerResponseSoldItem = false;
    __s3local0._isLocked = false;
    __s3local0._currentLordFilter = "";
    __s3local0._lastFilter = -1;
    __s3local0._lastLordType = "";
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentSublayer, __s1param0);
  CastleEquipmentSublayer.getFilterMap = function () {
    var __s5local0 = new Map();
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET, CastleEquipmentSublayer.FILTER_HELMET);
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR, CastleEquipmentSublayer.FILTER_ARMOR);
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON, CastleEquipmentSublayer.FILTER_WEAPON);
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT, CastleEquipmentSublayer.FILTER_ARTIFACT);
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN, CastleEquipmentSublayer.FILTER_SKIN);
    __s5local0.set(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO, CastleEquipmentSublayer.FILTER_HERO);
    return __s5local0;
  };
  CastleEquipmentSublayer.prototype.init = function () {
    this.inventoryUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.gemTabSwitchedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._isFavoriteMode = false;
    var __s7local0 = [this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_autoSell, this.dialogDisp.btn_favoriteDisabled, this.dialogDisp.btn_favoriteEnabled, this.dialogDisp.mc_lordName.btn_rename, this.dialogDisp.lordList.btn_up, this.dialogDisp.lordList.btn_down, this.dialogDisp.lordList.item0, this.dialogDisp.lordList.item1, this.dialogDisp.lordList.item2, this.dialogDisp.lordList.item3, this.dialogDisp.lordList.item4, this.dialogDisp.lordList.item5, this.dialogDisp.lordList.item6, this.dialogDisp.lordList.item7, this.dialogDisp.lordList.item8, this.dialogDisp.lordList.item9, this.dialogDisp.mc_equipmentList.tab0, this.dialogDisp.mc_equipmentList.tab1, this.dialogDisp.mc_equipmentList.tab2, this.dialogDisp.mc_equipmentList.tab3, this.dialogDisp.mc_equipmentList.tab4, this.dialogDisp.mc_equipmentList.tab5, this.dialogDisp.mc_equipmentList.tab6];
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_filter, this.dialogDisp.mc_equipmentList.btn_addStorage], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_generalSelection.btn_generalOverview, this.dialogDisp.btn_switch], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.initBasicButtons(__s7local0);
    this.dialogDisp.btn_autoSell.toolTipText = "";
    this.dialogDisp.btn_favoriteEnabled.toolTipText = "dialog_equipment_favoriteEquipment_deactivate_tooltip";
    this.dialogDisp.btn_favoriteDisabled.toolTipText = "dialog_equipment_favoriteEquipment_activate_tooltip";
    this.dialogDisp.mc_storageWarning.toolTipText = "dialog_equipment_storageWarning";
    this.dialogDisp.mc_lordName.btn_rename.toolTipText = "dialog_renameLord_title";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipment_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipment_lordNotAvailable"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_generalSelection.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_generals_quickSelection_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_generalSelection.btn_generalOverview.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_rework2022_generals_overview_button")));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.mc_lordName.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this._itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.mc_storageSpace.txt_storage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._itxt_storage.autoFitToBounds = true;
    this._itxt_storage.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this._lordEffectsComponent = new __dep_export_LordEffectDialogComponent.LordEffectDialogComponent(this.dialogDisp.mc_lordStatsEffects);
    this.activateSlotToolTips();
    this.eqFilterPanel = new __dep_export_EquipmentFilterPanel.EquipmentFilterPanel(this.dialogDisp.filter_eq, this.dialogDisp.mc_empty);
    this.eqFilterPanel.hide();
    this.gemFilterPanel = new __dep_export_GemFilterPanel.GemFilterPanel(this.dialogDisp.filter_gem, this.dialogDisp.mc_empty);
    this.gemFilterPanel.hide();
    this.dialogDisp.btn_filter.mc_arrow.gotoAndStop(2);
    this.dialogDisp.btn_filter.toolTipText = "filterPanel_expand";
    this.dialogDisp.mc_empty.visible = false;
    for (var __s7local1 = 0; __s7local1 < this.dialogDisp.children.length; __s7local1++) {
      var __s7local2 = this.dialogDisp.children[__s7local1];
      if (__s7local2 instanceof __s0local0 && __s7local2.name != "mc_equipmentList" && !__s7local2.name.includes("slot")) {
        __s7local2.tickEnabled = false;
      }
    }
    this.initInventory();
    this.updateAutoSellButton();
    var __s7local3 = new __dep_export_GeneralSelectionProperties.GeneralSelectionProperties();
    __s7local3.disableMovingGenerals = true;
    this._generalSelection = new __dep_export_GeneralSelection.GeneralSelection(this.dialogDisp.mc_generalSelection, __s7local3);
  };
  CastleEquipmentSublayer.prototype.applyProperties = function (__s12param0) {
    this.properties = __s12param0;
    this.equipableList.show();
    this.equipableList.currentFilterIndex = this._lastFilter != -1 ? this._lastFilter : CastleEquipmentSublayer.FILTER_HELMET;
    this.equipableList.currentFilterIndex = __dep_exact_f855840627e6e145.int(this.properties && this.properties.selectedFilter != -1 ? this.properties.selectedFilter : this.equipableList.currentFilterIndex);
    this.eqFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
  };
  CastleEquipmentSublayer.prototype.show = function (__s14param0) {
    __s1param0.prototype.show.call(this, __s14param0);
    this._isLocked = true;
    this.dialogDisp.mc_generalSelection.btn_generalOverview.visible = this.dialogDisp.btn_switch.visible = __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAccessGenerals();
    this.updateGeneralSelection();
    this._lastLordType = __s14param0 || this._lastLordType;
    this.setLordCategory(this._lastLordType);
    this.updateEquipmentData();
    this._lordEffectsComponent.show();
    this.updateAutoSellButton();
    this.toggleFavoriteOptions(!this._isFavoriteMode);
    __dep_export_CastleModel.CastleModel.equipData.resetOverallNewEquipmentMark();
    this.equipableList.listUpdatedSignal.add(this.bindFunction(this.updateFavoriteItems));
    for (var __s14local0 = 0; __s14local0 < 6; __s14local0++) {
      this.dialogDisp["slot" + __s14local0].addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp["slot" + __s14local0].addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab2, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab3, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab4, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab5, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.tab6, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_lordName.btn_rename, this.isOutOfTutorial());
    this.toggleGeneralSelection(false);
    this.addEventListener();
  };
  CastleEquipmentSublayer.prototype.addEventListener = function () {
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    __dep_export_CastleModel.CastleModel.lordData.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    __dep_export_CastleModel.CastleModel.lordData.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.addEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.NEW_RELICS_UPDATED, this.bindFunction(this.onInventoryUpdate));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.add(this.bindFunction(this.onFavoriteEquipmentUpdate));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.gemMarkedAsFavorite.add(this.bindFunction(this.onGemMarkedAsFavorite));
    if (this._generalSelection) {
      this._generalSelection.onShow();
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
    }
  };
  CastleEquipmentSublayer.prototype.removeEventListener = function () {
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    __dep_export_CastleModel.CastleModel.lordData.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    __dep_export_CastleModel.CastleModel.lordData.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.removeEventListener(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.NEW_RELICS_UPDATED, this.bindFunction(this.onInventoryUpdate));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.remove(this.bindFunction(this.onFavoriteEquipmentUpdate));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.gemMarkedAsFavorite.remove(this.bindFunction(this.onGemMarkedAsFavorite));
    if (this._generalSelection) {
      this._generalSelection.onHide();
      this._generalSelection.onSelectSignal.remove(this.bindFunction(this.onSelectGeneral));
    }
  };
  CastleEquipmentSublayer.prototype.toggleFavoriteOptions = function (__s24param0) {
    this.eqClickHandler.clearDrag();
    this.eqClickHandler.cancelDragMovement();
    this.gemClickHandler.clearDrag();
    this.gemClickHandler.cancelDragMovement();
    this.dialogDisp.btn_favoriteEnabled.visible = !__s24param0;
    this.dialogDisp.btn_favoriteDisabled.visible = __s24param0;
    this.eqClickHandler.canDrag = __s24param0;
    this.gemClickHandler.canDrag = __s24param0;
    this._isFavoriteMode = !__s24param0;
    this.equipableList.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
    this.enableSlotsFavoriteIcons();
  };
  CastleEquipmentSublayer.prototype.onGemMarkedAsFavorite = function () {
    this.equipableList.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
  };
  CastleEquipmentSublayer.prototype.onFavoriteEquipmentUpdate = function () {
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
    this.updateSlotsFavoriteItems();
    this.eqFilterPanel.changed.dispatch();
  };
  CastleEquipmentSublayer.prototype.updateSlotsFavoriteItems = function () {
    this.updateLordEquipmentVOs(this._currentLord);
    __dep_export_CastleModel.CastleModel.lordData.commanders.forEach(this.updateLordEquipmentVOs);
    __dep_export_CastleModel.CastleModel.lordData.barons.forEach(this.updateLordEquipmentVOs);
    this.fillSlotsByLord(this._currentLord);
  };
  CastleEquipmentSublayer.prototype.updateLordEquipmentVOs = function (__s32param0) {
    var __s32local0;
    for (var __s32local1 in __s32param0.equipmentSlots) {
      if ((__s32local0 = __s32param0.equipmentSlots[__s32local1].equipmentVO) && __dep_export_CastleModel.CastleModel.equipData.isEQFav(__s32local0.id)) {
        __s32local0.isFavorite = true;
      }
    }
  };
  CastleEquipmentSublayer.prototype.showInventorySmallFavoriteIcons = function (__s37param0) {
    var __s37local0 = [];
    for (var __s37local1 = 1; __s37local1 < arguments.length; __s37local1++) {
      __s37local0[__s37local1 - 1] = arguments[__s37local1];
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s37param0, "GemScrollItem")) {
      __s37param0.showSmallFavoriteIcon();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s37param0, "EquipmentScrollItem")) {
      __s37param0.showSmallFavoriteIcon();
    }
  };
  CastleEquipmentSublayer.prototype.enableInventoryFavoriteIcons = function (__s43param0) {
    var __s43local0 = [];
    for (var __s43local1 = 1; __s43local1 < arguments.length; __s43local1++) {
      __s43local0[__s43local1 - 1] = arguments[__s43local1];
    }
    __s43param0.toggleOpenMarkAsFavorite(this._isFavoriteMode);
  };
  CastleEquipmentSublayer.prototype.enableSlotsFavoriteIcons = function () {
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET);
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN);
    this.enableSlotFavoriteOptions(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO);
  };
  CastleEquipmentSublayer.prototype.enableSlotFavoriteOptions = function (__s49param0) {
    if (this._slotContainers[__s49param0] && this._slotEquipmentVOs[__s49param0]) {
      this._slotEquipmentVOs[__s49param0] = this._allSlotsOnScreen[__s49param0].slotVO;
      var __s49local0 = this._slotContainers[__s49param0].favoriteDisp;
      if (__s49local0 && this._slotEquipmentVOs[__s49param0].equipmentVO) {
        var __s49local1 = __s49local0;
        if (this._isFavoriteMode) {
          __s49local1.favModeOn(this._slotEquipmentVOs[__s49param0].equipmentVO.isFavorite);
        } else {
          __s49local1.favModeOff(this._slotEquipmentVOs[__s49param0].equipmentVO.isFavorite);
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.updateAutoSellButton = function () {
    var __s55local0 = this.dialogDisp.btn_autoSell;
    var __s55local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUTO_SELL);
    __s55local0.visible = __s55local1;
    if (__s55local1) {
      var __s55local2 = __dep_export_CastleModel.CastleModel.subscriptionData.autoSell.isAnyEnabled();
      __s55local0.toolTipText = __s55local2 ? "btn_autoSellEquip_on_tt" : "btn_autoSellEquip_off_tt";
      __s55local0.mc_icon.gotoAndStop(__s55local2 ? 1 : 2);
    }
  };
  CastleEquipmentSublayer.prototype.initInventory = function () {
    this.eqClickHandler = new __dep_export_EquipmentEquipmentClickHandler.EquipmentEquipmentClickHandler(this);
    this.gemClickHandler = new __dep_export_EquipmentGemClickHandler.EquipmentGemClickHandler(this);
    var __s58local0 = [new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_helmet", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_armor", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_weapon", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_artifact", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_skin", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord)), new __dep_export_GemFilterView.GemFilterView(this.bindFunction(this.getGemFilterByWearerType()), this.gemClickHandler, this.gemFilterPanel), new __dep_export_EquipmentFilterView.EquipmentFilterView("equipment_slotType_hero_heroine", this.bindFunction(this.getEquipmentFilterBySlotTypeAndWearerType(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO)), this.eqClickHandler, this.eqFilterPanel, this.bindFunction(this.getCurrentLord))];
    this.equipableList = new __dep_export_CastleEquipableListComponent.CastleEquipableListComponent(this.dialogDisp.mc_equipmentList, __s58local0);
  };
  CastleEquipmentSublayer.prototype.getEquipmentFilterBySlotTypeAndWearerType = function (__s60param0) {
    return function (__s62param0) {
      var __s62local0 = [];
      for (var __s62local1 = 1; __s62local1 < arguments.length; __s62local1++) {
        __s62local0[__s62local1 - 1] = arguments[__s62local1];
      }
      return __s62param0.slotType == __s60param0 && __s62param0.lordType == this._currentLordFilter;
    };
  };
  CastleEquipmentSublayer.prototype.getGemFilterByWearerType = function () {
    var __s66local0 = [];
    for (var __s66local1 = 0; __s66local1 < arguments.length; __s66local1++) {
      __s66local0[__s66local1] = arguments[__s66local1];
    }
    return function (__s70param0) {
      var __s70local0 = [];
      for (var __s70local1 = 1; __s70local1 < arguments.length; __s70local1++) {
        __s70local0[__s70local1 - 1] = arguments[__s70local1];
      }
      return __s70param0 && __s70param0.lordType == this._currentLordFilter;
    };
  };
  CastleEquipmentSublayer.prototype.activateSlotToolTips = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot0) ? "equipment_slotType_helmet" : "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot1) ? "equipment_slotType_armor" : "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot2) ? "equipment_slotType_weapon" : "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot3) ? "equipment_slotType_artifact" : "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot4) ? "equipment_slotType_skin" : "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot5) ? "equipment_slotType_hero_heroine" : "";
  };
  CastleEquipmentSublayer.prototype.isEmptySlot = function (__s76param0) {
    return !__s76param0.slotVO || __s76param0.slotVO.equipmentVO == null;
  };
  CastleEquipmentSublayer.prototype.deActivateSlotToolTips = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = "";
  };
  CastleEquipmentSublayer.prototype.onSlotTouchedDown = function (__s80param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s80param0) && !this._isFavoriteMode && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleDialogClick(__s80param0);
    }
  };
  CastleEquipmentSublayer.prototype.onSlotTouchedUP = function (__s83param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s83param0) && !this._isFavoriteMode && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleInventoryEntryTouchDragEnd(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_END, null, __s83param0.target, __s83param0));
    }
  };
  CastleEquipmentSublayer.prototype.onSubscriptionChanged = function (__s86param0) {
    this.updateAutoSellButton();
  };
  CastleEquipmentSublayer.prototype.updateEquipmentData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGemInventory.C2SGetGemInventory());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLordsInfoVO.C2SGetLordsInfoVO());
  };
  CastleEquipmentSublayer.prototype.onRemoveSpecialEvent = function (__s90param0) {
    this.updateEquipmentData();
  };
  CastleEquipmentSublayer.prototype.onCastleListUpdated = function (__s92param0) {
    this.setCastleIcon();
  };
  CastleEquipmentSublayer.prototype.onLordsUpdated = function (__s94param0) {
    this.setLordCategory(this._lastLordType);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
    this.updateSlotsFavoriteItems();
  };
  CastleEquipmentSublayer.prototype.onInventoryUpdate = function (__s96param0 = null) {
    this._isLocked = false;
    if (this._currentLord) {
      this.setActiveLord(this._currentLord);
    }
    this.inventoryUpdatedSignal.dispatch();
    this.equipableList.update();
    this.equipableList.redraw();
    this.equipableList.currentClickHandler.setStorageWarning();
    this.updateTabButtons();
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
  };
  CastleEquipmentSublayer.prototype.updateFavoriteItems = function () {
    this.equipableList.forEachItemVO(this.bindFunction(this.updateItemAsFavorite));
    if (this._isFavoriteMode) {
      this.toggleFavoriteOptions(false);
    }
  };
  CastleEquipmentSublayer.prototype.updateItemAsFavorite = function (__s102param0) {
    var __s102local0 = [];
    for (var __s102local1 = 1; __s102local1 < arguments.length; __s102local1++) {
      __s102local0[__s102local1 - 1] = arguments[__s102local1];
    }
    if (__s102param0) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s102param0, "GemScrollItemVO") && __dep_export_CastleModel.CastleModel.equipData.isGemFav(__s102param0.gemVO.id, __dep_exact_81dacdf05bd32292.instanceOfClass(__s102param0.gemVO, "RelicGemVO"))) {
        __s102param0.gemVO.isFavorite = true;
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s102param0, "EquipmentScrollItemVO") && __dep_export_CastleModel.CastleModel.equipData.favoriteEquipmentIdsList.indexOf(__s102param0.equipmentVO.id) != -1) {
        __s102param0.equipmentVO.isFavorite = true;
      }
    }
  };
  CastleEquipmentSublayer.prototype.onMovementRemoved = function (__s109param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLordsInfoVO.C2SGetLordsInfoVO());
    this.setLordCategory(this._lastLordType);
  };
  CastleEquipmentSublayer.prototype.setLordCategory = function (__s111param0, __s111param1 = false) {
    this._currentLordFilter = __s111param0;
    var __s111local0;
    var __s111local1 = this._currentLord != null && !__s111param1;
    if (this.properties && this.properties.selectedLordID >= 0) {
      __s111local0 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this.properties.selectedLordID);
    }
    if (!this._currentLord || this._currentLord == null) {
      this._currentLord = this.getFirstLord(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER);
    }
    if (this._waitingForServerResponseSoldItem) {
      this._waitingForServerResponseSoldItem = false;
      this.initLordList();
      this.setActiveLord(__dep_export_CastleModel.CastleModel.lordData.getLordByID(this._currentLord.id));
    } else if (__s111local1) {
      var __s111local2;
      this.initLordList();
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._currentLord, "CommanderVO")) {
        if (!(__s111local2 = __dep_export_CastleModel.CastleModel.lordData.getCommanderByID(this._currentLord.id))) {
          __s111local2 = this.getFirstLord(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER);
        }
      } else if (!(__s111local2 = __dep_export_CastleModel.CastleModel.lordData.getBaronByID(this._currentLord.id))) {
        __s111local2 = this.getFirstLord(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON);
      }
      this.setActiveLord(__s111local2);
    } else if (__s111local0 && this.properties.lordUsed == 0) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s111local0, "BaronVO")) {
        this._currentLordFilter = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON;
        this._lastLordType = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON;
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s111local0, "CommanderVO")) {
        this._currentLordFilter = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER;
        this._lastLordType = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER;
      }
      this.initLordList();
      this.setActiveLord(__s111local0);
      this.properties.lordUsed++;
    } else {
      this.initLordList();
      this.setActiveLord(this.getFirstLord(__s111param0));
    }
    this.dialogDisp.mc_lordName.visible = this._currentLordFilter == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER;
    this.updateTabButtons();
  };
  CastleEquipmentSublayer.prototype.updateTabButtons = function () {
    this.dialogDisp.mc_equipmentList.tab0.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HELMET);
    this.dialogDisp.mc_equipmentList.tab1.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARMOR);
    this.dialogDisp.mc_equipmentList.tab2.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_WEAPON);
    this.dialogDisp.mc_equipmentList.tab3.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARTIFACT);
    this.dialogDisp.mc_equipmentList.tab4.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_SKIN);
    this.dialogDisp.mc_equipmentList.tab5.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, -1, true);
    this.dialogDisp.mc_equipmentList.tab6.mc_new.visible = __dep_export_CastleModel.CastleModel.equipData.hasLordAndSlotNewRelics(this._lastLordType, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO);
  };
  CastleEquipmentSublayer.prototype.destroyLordList = function () {
    if (this._lordScrollList) {
      this._lordScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onLordScrollItemClick));
      this._lordScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onLordScroll));
      this._lordScrollList.remove();
      for (var __s126local0 = 0, __s126local1 = this._lordScrollList.voList; __s126local0 < __s126local1.length; __s126local0++) {
        var __s126local2 = __s126local1[__s126local0];
        if (__s126local2 !== undefined) {
          this._lordScrollList.removeContent(__s126local2);
        }
      }
      this._lordScrollList = null;
    }
  };
  CastleEquipmentSublayer.prototype.initLordList = function () {
    var __s132local0 = __dep_exact_f855840627e6e145.int(this._lordScrollList ? this._lordScrollList.currentStartIndex : 0);
    this.destroyLordList();
    this._lordScrollList = new __dep_export_LordScrollList.LordScrollList(this.dialogDisp.lordList);
    this._lordScrollList.scrollStep = 10;
    this._lordScrollList.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.CLICK, this.bindFunction(this.onLordScrollItemClick));
    this._lordScrollList.addEventListener(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onLordScroll));
    this._lordScrollList.clear();
    var __s132local1;
    var __s132local2 = 0;
    var __s132local3 = 0;
    if (this._currentLordFilter == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      this._lordScrollList.scrollItemClass = __dep_export_CommanderScrollItem.CommanderScrollItem;
      __s132local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.lordData.numAllCommanders);
      __s132local2 = 0;
      for (; __s132local2 < __s132local3; __s132local2++) {
        (__s132local1 = new __dep_export_LordScrollItemVO.LordScrollItemVO()).lordVO = __dep_export_CastleModel.CastleModel.lordData.commanders[__s132local2];
        this._lordScrollList.pushContent(__s132local1);
      }
    } else if (this._currentLordFilter == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON) {
      this._lordScrollList.scrollItemClass = __dep_export_BaronScrollItem.BaronScrollItem;
      __s132local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.lordData.numAllBarons);
      __s132local2 = 0;
      for (; __s132local2 < __s132local3; __s132local2++) {
        (__s132local1 = new __dep_export_LordScrollItemVO.LordScrollItemVO()).lordVO = __dep_export_CastleModel.CastleModel.lordData.barons[__s132local2];
        this._lordScrollList.pushContent(__s132local1);
      }
    }
    this._lordScrollList.hideButtons = __s132local3 <= this._lordScrollList.itemsVisibleAtOnce;
    this._lordScrollList.initList(__s132local0);
  };
  CastleEquipmentSublayer.prototype.onLordScroll = function (__s140param0) {
    this.highLightCurrentLord(this._currentLord);
  };
  CastleEquipmentSublayer.prototype.onLordScrollItemClick = function (__s142param0) {
    this.setActiveLord(__s142param0.scrollItem.scrollItemVO.lordVO);
  };
  CastleEquipmentSublayer.prototype.setActiveLord = function (__s144param0) {
    this._currentLord = __s144param0;
    this._lordEffectsComponent.setActiveLord(__s144param0);
    this.highLightCurrentLord(__s144param0);
    this.initSlots();
    this.initSaleSlot();
    this.fillSlotsByLord(__s144param0);
    this.setCastleIcon();
    this.dialogDisp.mc_locked.visible = !this._currentLord.isAvailableForEquip;
    this.updateLordName();
    this.updateCurrentLordPic();
    this.updateLordFeather();
    this.eqFilterPanel.selectedLord = this.currentLord;
    this.gemFilterPanel.selectedLord = this.currentLord;
    this.updateGeneral();
  };
  CastleEquipmentSublayer.prototype.updateLordFeather = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordName.featherHolder);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordFeather(this._currentLord, this.dialogDisp.mc_lordName.featherHolder);
  };
  CastleEquipmentSublayer.prototype.updateCurrentLordPic = function () {
    if (this._lordScrollList) {
      var __s148local0;
      for (var __s148local1 = 0; __s148local1 < this._lordScrollList.veList.length; __s148local1++) {
        if ((__s148local0 = this._lordScrollList.veList[__s148local1]).disp.visible && __s148local0.lordScrollItemVO.lordVO.id == this._currentLord.id) {
          __s148local0.updateLordPic();
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.updateLordName = function () {
    this.itxt_name.textContentVO = this._currentLord.name;
  };
  CastleEquipmentSublayer.prototype.setCastleIcon = function () {
    var __s156local0 = this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats;
    __s156local0.gotoAndStop(1);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._currentLord, "BaronVO") && this._currentLord.lockedInCastleID >= 0) {
      var __s156local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID);
      if (__s156local1) {
        __s156local0.gotoAndStop(2);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s156local0.mc_CastleHolder);
        __s156local0.mc_CastleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s156local1, new __s0local2(55, 55), true, false, true, "dialog_jumpto_castleSelected"));
        __s156local0.mc_CastleHolder.mouseChildren = this.equipableList.currentClickHandler.tabChangeAllowed;
        this.textFieldManager.registerTextField(__s156local0.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID).areaNameString), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        var __s156local2 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this._currentLord.lockedInCastleID);
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s156local2, "CapitalMapobjectVO")) {
          __s156local0.mc_CastleHolder.x = 40;
          __s156local0.mc_CastleHolder.y = 8;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s156local2, "MetropolMapobjectVO")) {
          __s156local0.mc_CastleHolder.x = 42;
          __s156local0.mc_CastleHolder.y = 5;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s156local2, "OutpostMapobjectVO")) {
          __s156local0.mc_CastleHolder.x = 37;
          __s156local0.mc_CastleHolder.y = 10;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s156local2, "CastleMapobjectVO")) {
          __s156local0.mc_CastleHolder.x = 40;
          __s156local0.mc_CastleHolder.y = 8;
        } else {
          __s156local0.mc_CastleHolder.x = 40;
          __s156local0.mc_CastleHolder.y = 12;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.highLightCurrentLord = function (__s165param0) {
    if (this._lordScrollList) {
      var __s165local0;
      for (var __s165local1 = 0; __s165local1 < this._lordScrollList.veList.length; __s165local1++) {
        if ((__s165local0 = this._lordScrollList.veList[__s165local1]).disp.visible && __s165local0.lordScrollItemVO.lordVO.id == __s165param0.id) {
          __s165local0.showHighlight();
        } else {
          __s165local0.hideHighlight();
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.initSlots = function () {
    this._allSlotsOnScreen = {};
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET] = this.dialogDisp.slot0;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = this.dialogDisp.slot3;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON] = this.dialogDisp.slot2;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR] = this.dialogDisp.slot1;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN] = this.dialogDisp.slot4;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO] = this.dialogDisp.slot5;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO].mc_bg.gotoAndStop(7);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET].mc_slotType.gotoAndStop(1);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT].mc_slotType.gotoAndStop(4);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON].mc_slotType.gotoAndStop(3);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR].mc_slotType.gotoAndStop(2);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN].mc_slotType.gotoAndStop(5);
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO].mc_slotType.gotoAndStop(6);
    if (this._allSlotsOnScreen != null) {
      for (var __s172local0 in this._allSlotsOnScreen) {
        var __s172local1 = this._allSlotsOnScreen[__s172local0];
        if (__s172local1 !== undefined) {
          for (var __s172local2 = 0; __s172local2 < __s172local1.numChildren; __s172local2++) {
            var __s172local3 = __s172local1.getChildAt(__s172local2);
            __s172local3.mouseEnabled = false;
            __s172local3.mouseChildren = false;
          }
          __s172local1.mc_bgEmpty.actLikeButton = true;
          __s172local1.mc_bgEmpty.mouseEnabled = true;
          __s172local1.mc_itemHolder.mouseChildren = true;
          __s172local1.mc_itemHolder.mouseEnabled = true;
          __s172local1.mouseChildren = true;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.fillSlotsByLord = function (__s180param0) {
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET].slotVO = __s180param0.helmetSlotVO;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT].slotVO = __s180param0.artifactSlotVO;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON].slotVO = __s180param0.weaponSlotVO;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR].slotVO = __s180param0.armorSlotVO;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN].slotVO = __s180param0.skinSlotVO;
    this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO].slotVO = __s180param0.heroSlotVO;
    this.resetSlotContainers();
    this.updateSlotsFavoriteData();
    this.fillSlotContainer(__s180param0.helmetSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET);
    this.fillSlotContainer(__s180param0.artifactSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this.fillSlotContainer(__s180param0.weaponSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this.fillSlotContainer(__s180param0.armorSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this.fillSlotContainer(__s180param0.skinSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN);
    this.fillSlotContainer(__s180param0.heroSlotVO.equipmentVO, this._allSlotsOnScreen[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO], __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO);
    if (__s180param0.isAvailableForEquip) {
      this.activateSlots();
    } else {
      this.deActivateSlots();
    }
  };
  CastleEquipmentSublayer.prototype.deActivateSlots = function () {
    var __s184local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s184local0.desaturate();
    if (this._allSlotsOnScreen != null) {
      for (var __s184local1 in this._allSlotsOnScreen) {
        var __s184local2 = this._allSlotsOnScreen[__s184local1];
        if (__s184local2 !== undefined) {
          __s184local2.useFilters([__s184local0.filter]);
          __s184local2.actLikeButton = false;
          __s184local2.mc_lock.visible = false;
        }
      }
    }
    this.deActivateSlotToolTips();
  };
  CastleEquipmentSublayer.prototype.activateSlots = function () {
    if (this._allSlotsOnScreen != null) {
      for (var __s190local0 in this._allSlotsOnScreen) {
        var __s190local1 = this._allSlotsOnScreen[__s190local0];
        if (__s190local1 !== undefined) {
          __s190local1.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
          __s190local1.actLikeButton = true;
          __s190local1.mc_lock.visible = false;
        }
      }
    }
    this.activateSlotToolTips();
  };
  CastleEquipmentSublayer.prototype.getFirstLord = function (__s196param0) {
    var __s196local0;
    switch (__s196param0) {
      case __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER:
        __s196local0 = __dep_export_CastleModel.CastleModel.lordData.commanders[0];
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON:
        __s196local0 = __dep_export_CastleModel.CastleModel.lordData.barons[0];
    }
    return __s196local0;
  };
  CastleEquipmentSublayer.prototype.initSaleSlot = function () {
    this.dialogDisp.saleSlot.mc_highlight.visible = false;
    this.dialogDisp.saleSlot.mouseChildren = false;
    this.dialogDisp.saleSlot.actLikeButton = true;
    this.equipableList.currentClickHandler.changeSaleSlotAppearance();
  };
  CastleEquipmentSublayer.prototype.onClick = function (__s201param0) {
    __s1param0.prototype.onClick.call(this, __s201param0);
    if (!this._isLocked) {
      this._lordEffectsComponent.onClick(__s201param0);
      this.eqFilterPanel.onClick(__s201param0);
      this.gemFilterPanel.onClick(__s201param0);
      if (this.equipableList.currentClickHandler) {
        var __s201local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s201param0);
        if (__s201local0 && __s201local0.isLongPressed) {
          this.equipableList.currentClickHandler.handleDialogMouseOver(__s201param0);
          return;
        }
        this.equipableList.currentClickHandler.handleDialogClick(__s201param0);
      }
      var __s201local1 = this.dialogDisp.mc_generalSelection.visible;
      if (__s201local1 && !__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s201param0.target, this.dialogDisp.mc_generalSelection) && __s201param0.target != this.dialogDisp.btn_switch) {
        this.dialogDisp.mc_generalSelection.visible = false;
        this.dialogDisp.btn_switch.mc_open.visible = false;
      }
      if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s201param0.target)) {
        switch (__s201param0.target) {
          case this.dialogDisp.btn_favoriteEnabled:
            this.toggleFavoriteOptions(true);
            __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
            break;
          case this.dialogDisp.btn_favoriteDisabled:
            this.toggleFavoriteOptions(false);
            break;
          case this.dialogDisp.btn_autoSell:
            CastleEquipmentSublayer.dialogHandler.registerDialogs(__dep_export_AutoSellDialog.AutoSellDialog);
            break;
          case this.dialogDisp.btn_filter:
            if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.equipableList.currentFilter, "GemFilterView")) {
              this.gemFilterPanel.show();
              this.gemTabSwitchedSignal.dispatch();
            } else {
              this.eqFilterPanel.show();
            }
            break;
          case this.dialogDisp.mc_generalSelection.btn_generalOverview:
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsOverviewDialog.GeneralsOverviewDialog);
            break;
          case this.dialogDisp.btn_switch:
            this.toggleGeneralSelection(!__s201local1);
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.fillSlotContainer = function (__s211param0, __s211param1, __s211param2) {
    if (__s211param0) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s211param0, __s211param1.mc_itemHolder, CastleEquipmentSublayer.MAX_WIDTH, CastleEquipmentSublayer.MAX_HEIGHT, function () {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s211param1);
      }, true, true, __dep_export_CastleModel.CastleModel.equipData.isEquipableNew(__s211param0));
      var __s211local0 = __dep_exact_f855840627e6e145.int(__s211param0.visualRareID);
      if (__s211local0 == 0) {
        __s211local0 = 5;
      }
      __s211param1.mc_bg.gotoAndStop(__s211local0);
      this.createFavoriteIcon(__s211param2, __s211param0);
    } else {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s211param1.mc_itemHolder);
      __s211param1.mc_bg.gotoAndStop(7);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s211param1);
    }
    __s211param1.mc_bg.visible = false;
  };
  CastleEquipmentSublayer.prototype.updateSlotsFavoriteData = function () {
    if (this._slotContainers && this._slotEquipmentVOs) {
      for (var __s218local0 in this._allSlotsOnScreen) {
        if (this._slotContainers[__s218local0] && this._slotContainers[__s218local0] && !this._allSlotsOnScreen[__s218local0].slotVO.equipmentVO) {
          if (this._slotContainers[__s218local0] && this._slotContainers[__s218local0].favoriteDisp) {
            this._slotContainers[__s218local0].removeChild(this._slotContainers[__s218local0].favoriteDisp.disp);
          }
          this._slotContainers[__s218local0] = null;
          this._slotEquipmentVOs[__s218local0] = null;
        } else {
          this._slotContainers[__s218local0] = this._allSlotsOnScreen[__s218local0];
          this._slotEquipmentVOs[__s218local0] = this._allSlotsOnScreen[__s218local0].slotVO;
        }
      }
    }
  };
  CastleEquipmentSublayer.prototype.resetSlotContainers = function () {
    this._slotContainers ||= new Map();
    this._slotEquipmentVOs ||= new Map();
  };
  CastleEquipmentSublayer.prototype.createFavoriteIcon = function (__s228param0, __s228param1) {
    if (!this._slotContainers[__s228param0] && !this._slotEquipmentVOs[__s228param0]) {
      this._slotContainers[__s228param0] = this._allSlotsOnScreen[__s228param0];
      this._slotEquipmentVOs[__s228param0] = this._allSlotsOnScreen[__s228param0].slotVO;
    }
    var __s228local0 = new __dep_export_CastleEquipmentSlotItem.CastleEquipmentSlotItem(new Library.CastleEquipment_ARE3.CastleEquipment_ItemFavoriteOptions(), __s228param1);
    __s228local0.onTouchDownCallback = this.bindFunction(this.onClick);
    if (this._isFavoriteMode) {
      __s228local0.favModeOn(this._slotEquipmentVOs[__s228param0].equipmentVO.isFavorite);
    } else {
      __s228local0.favModeOff(this._slotEquipmentVOs[__s228param0].equipmentVO.isFavorite);
    }
    if (this._slotContainers[__s228param0].favoriteDisp) {
      this._slotContainers[__s228param0].removeChild(this._slotContainers[__s228param0].favoriteDisp.disp);
      this._slotContainers[__s228param0].favoriteDisp = null;
    }
    this._slotContainers[__s228param0].favoriteDisp = __s228local0;
    this._slotContainers[__s228param0].addChild(__s228local0.disp);
  };
  CastleEquipmentSublayer.prototype.updateGeneralSelection = function () {
    var __s234local0 = Array.from(__dep_export_CastleModel.CastleModel.generalsData.playerGenerals.values()).filter(function (__s236param0) {
      return __s236param0.isUnlocked;
    });
    __s234local0.unshift(null);
    this._generalSelection.init(__s234local0);
  };
  CastleEquipmentSublayer.prototype.updateGeneral = function () {
    if (this._currentLord.isAvailableForEquip) {
      this.dialogDisp.btn_switch.toolTipText = "dialog_attack_rework2022_generals_assignGeneral_tooltip";
    } else if (this.currentLord && this.currentLord.isBaron) {
      this.dialogDisp.btn_switch.toolTipText = "dialog_equipment_generals_baron_travelling";
    } else {
      this.dialogDisp.btn_switch.toolTipText = "dialog_equipment_generals_general_travelling";
    }
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_general.useFilters([]);
    var __s238local0 = this._currentLord.assignedGeneralVO;
    if (__s238local0) {
      new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s238local0, this.dialogDisp.mc_general, false, true, false, false, this.bindFunction(this.onGeneralItemFilled));
    }
    this.dialogDisp.mc_general.mouseChildren = false;
    this.dialogDisp.mc_generalFrameEmpty.visible = !__s238local0;
    this.dialogDisp.mc_generalFrameFilled.visible = !!__s238local0;
    if (this.currentLord.isBaron) {
      if (__s238local0) {
        this.dialogDisp.mc_general.toolTipText = {
          t: "dialog_equipment_generals_assignedGeneral_baron_tooltip",
          p: [__s238local0.nameTextShort]
        };
      } else {
        this.dialogDisp.mc_general.toolTipText = "dialog_equipment_generals_noGeneral_baron_tooltip";
        this.dialogDisp.mc_generalFrameEmpty.toolTipText = "dialog_equipment_generals_noGeneral_baron_tooltip";
      }
    } else if (__s238local0) {
      this.dialogDisp.mc_general.toolTipText = {
        t: "dialog_equipment_generals_assignedGeneral_commander_tooltip",
        p: [__s238local0.nameTextShort]
      };
    } else {
      this.dialogDisp.mc_general.toolTipText = "dialog_equipment_generals_noGeneral_commander_tooltip";
      this.dialogDisp.mc_generalFrameEmpty.toolTipText = "dialog_equipment_generals_noGeneral_commander_tooltip";
    }
    this._generalSelection.selectGeneralVO(__s238local0, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_switch, this._currentLord.isAvailableForEquip);
    this.dialogDisp.mc_generalFrameEmpty.useFilters(this._currentLord.isAvailableForEquip ? [] : __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
    this.dialogDisp.mc_generalFrameFilled.useFilters(this._currentLord.isAvailableForEquip ? [] : __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
  };
  CastleEquipmentSublayer.prototype.onGeneralItemFilled = function () {
    this.dialogDisp.mc_general.useFilters([]);
    this.dialogDisp.mc_general.useFilters(this._currentLord && this._currentLord.isAvailableForEquip ? [] : __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
  };
  CastleEquipmentSublayer.prototype.toggleGeneralSelection = function (__s251param0) {
    this.dialogDisp.mc_generalSelection.visible = __s251param0;
    this.dialogDisp.btn_switch.mc_open.visible = __s251param0;
    this.dialogDisp.btn_switch.toolTipText = __s251param0 ? "dialog_equipment_generals_closeGeneralQuickSelection_tooltip" : "dialog_equipment_generals_assignGeneral_tooltip";
  };
  CastleEquipmentSublayer.prototype.onGeneralAssigned = function (__s253param0) {
    this.updateGeneral();
  };
  CastleEquipmentSublayer.prototype.onSelectGeneral = function (__s255param0) {
    __dep_export_CastleModel.CastleModel.lordData.assignGeneral(this._currentLord, __s255param0);
    this.toggleGeneralSelection(false);
  };
  CastleEquipmentSublayer.prototype.onMouseOver = function (__s257param0) {
    __s1param0.prototype.onMouseOver.call(this, __s257param0);
    if (!this._isLocked) {
      this.equipableList.currentClickHandler.handleDialogMouseOver(__s257param0);
    }
  };
  CastleEquipmentSublayer.prototype.onMouseOut = function (__s260param0) {
    __s1param0.prototype.onMouseOut.call(this, __s260param0);
    if (!this._isLocked && this.disp.visible) {
      this.equipableList.currentClickHandler.handleDialogMouseOut(__s260param0);
    }
  };
  CastleEquipmentSublayer.prototype.clearFavoriteOptions = function () {
    this._isFavoriteMode = false;
    this.eqClickHandler.clearDrag();
    this.eqClickHandler.cancelDragMovement();
    this.gemClickHandler.clearDrag();
    this.gemClickHandler.cancelDragMovement();
  };
  CastleEquipmentSublayer.prototype.hide = function () {
    this.equipableList.hide();
    __s1param0.prototype.hide.call(this);
    this._currentLord = null;
    this.destroyLordList();
    this.removeEventListener();
    this.eqFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.equipableList.listUpdatedSignal.remove(this.bindFunction(this.updateFavoriteItems));
    this._lordEffectsComponent.hide();
    if (this.properties && this.properties.onCloseFunction) {
      this.properties.onCloseFunction();
    }
    for (var __s265local0 = 0; __s265local0 < 6; __s265local0++) {
      this.dialogDisp["slot" + __s265local0].removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp["slot" + __s265local0].removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    __dep_export_CastleModel.CastleModel.lordData.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED));
    __dep_export_CastleModel.CastleModel.equipData.clearNewEquipmentLists();
  };
  CastleEquipmentSublayer.prototype.getCurrentLord = function () {
    return this.currentLord;
  };
  Object.defineProperty(CastleEquipmentSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "currentLord", {
    get: function () {
      return this._currentLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lastFilter", {
    set: function (__s278param0) {
      this._lastFilter = __s278param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lastLordType", {
    get: function () {
      return this._lastLordType;
    },
    set: function (__s282param0) {
      this._lastLordType = __s282param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSublayer.prototype.onMovementChanged = function (__s284param0) {
    this._lordEffectsComponent.updateStats();
  };
  Object.defineProperty(CastleEquipmentSublayer.prototype, "itxt_storage", {
    get: function () {
      return this._itxt_storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "lordEffectsComponent", {
    get: function () {
      return this._lordEffectsComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSublayer.prototype, "isFavoriteMode", {
    get: function () {
      return this._isFavoriteMode;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSublayer.__initialize_static_members = function () {
    CastleEquipmentSublayer.FILTER_MAP = CastleEquipmentSublayer.getFilterMap();
  };
  CastleEquipmentSublayer.MAX_WIDTH = 53;
  CastleEquipmentSublayer.MAX_HEIGHT = 53;
  CastleEquipmentSublayer.FILTER_HELMET = 0;
  CastleEquipmentSublayer.FILTER_ARMOR = 1;
  CastleEquipmentSublayer.FILTER_WEAPON = 2;
  CastleEquipmentSublayer.FILTER_ARTIFACT = 3;
  CastleEquipmentSublayer.FILTER_SKIN = 4;
  CastleEquipmentSublayer.FILTER_GEM = 5;
  CastleEquipmentSublayer.FILTER_HERO = 6;
  return CastleEquipmentSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleEquipmentSublayer = __s0local3;
__s0local3.__initialize_static_members();

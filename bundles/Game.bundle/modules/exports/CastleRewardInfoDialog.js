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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_ACollectableItemEquipmentVO = require("gge-module:export_ACollectableItemEquipmentVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRewardInfoDialog() {
    return __s1param0.call(this, CastleRewardInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRewardInfoDialog, __s1param0);
  CastleRewardInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_unit.scaleX = this.dialogDisp.mc_unit.scaleY = 1;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.renderVO = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_unit).addIconMc(this.dialogDisp.mc_unit.mc_tool);
  };
  CastleRewardInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.mc_unit.toolTipText = null;
    this.dialogDisp.mc_unit.mc_tool.toolTipText = null;
    this.titleText = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.collectableItem.getNameTextId(), this.dialogProperties.collectableItem.getNameTextParams()).replace(/ *[\r\n]+/, " ");
    this.descriptionText = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.collectableItem.getDescriptionTextId(), this.dialogProperties.collectableItem.getDescriptionTextParams());
    if (__dep_export_CastleModel.CastleModel.userData.isLegend && this.dialogProperties.collectableItem.itemType == __dep_export_CollectableEnum.CollectableEnum.XP) {
      this.titleText = __dep_export_ClientConstTextIds.ClientConstTextIds.LEGEND_XP;
      this.descriptionText = __dep_exact_92d05af59ee2ff30.Localize.text("xp_legend_short_info");
    }
    this.renderAdditionalValues();
    this.renderIconTitleDescription();
    this.updateResetInfo();
  };
  CastleRewardInfoDialog.prototype.renderIconTitleDescription = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.collectableItem, "ACollectableItemEquipmentVO") && this.dialogProperties.collectableItem.equipmentVO && !this.renderVO.equipmentBackgroundMc && this.dialogProperties.collectableItem.itemType != __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS) {
      var __s10local0 = new Library.CastleInterfaceElements.CastleEquipment_Item_Z();
      __s10local0.width = __s10local0.height = CastleRewardInfoDialog.MAX_EQ_FRAME_WIDTH;
      __s10local0.x = this.dialogDisp.mc_unit.mc_tool.x;
      __s10local0.y = this.dialogDisp.mc_unit.mc_tool.y;
      this.dialogDisp.mc_unit.addChild(__s10local0);
      this.dialogDisp.mc_unit.addChild(this.dialogDisp.mc_unit.mc_tool);
      this.renderVO.addEquipmentBgMc(__s10local0);
    }
    var __s10local1 = __dep_exact_f855840627e6e145.int(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.EQUIPMENT_BACKGROUND);
    if (__dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(this.dialogProperties.collectableItem, [__dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO, __dep_export_ACollectableItemGemVO.ACollectableItemGemVO, __dep_export_CollectableItemRelicVO.CollectableItemRelicVO])) {
      __s10local1 |= __dep_exact_f855840627e6e145.int(__dep_export_CollectableRenderOptions.CollectableRenderOptions.TOOLTIP);
    }
    var __s10local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__s10local1, CastleRewardInfoDialog.MAX_ICON_DIMENSION);
    __s10local2.tooltip.showEquipmentCountdown = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, this.renderVO, this.dialogProperties.collectableItem, __s10local2);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.titleText)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.descriptionText)).autoFitToBounds = true;
  };
  CastleRewardInfoDialog.prototype.renderAdditionalValues = function () {
    this.dialogDisp.txt_copy.height = CastleRewardInfoDialog.TEXTFIELD_HEIGHT_SMALL;
    var __s14local0 = this.dialogProperties.collectableItem;
    var __s14local1 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s14local0, "ACollectableItemPercentageBoosterVO") ? __s14local0.percentageBoosterVO : null;
    if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.GLORY_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Fame_Big, "dialog_fameBoost_bonus_tooltip", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.KHAN_TABLET_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_KhanTabletBoost, "dialog_nomadBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.SAMURAI_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_SamuraiBoost, "dialog_samuraiBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.ALLIANCE_COIN_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_AllianceCoinBoost, "dialog_royalCoinsBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_LongTermPEBoost, "pointsEvent_booster_tooltip", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.REPUTATION_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_ReputaionBooster, "dialog_reputationBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.XP_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_XP_Big, "dialog_xpBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.GALLANTRY_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Gallantry, "dialog_gallantryBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.RAGE_POINT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_RageBoost, "dialog_rageBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.KHAN_MEDAL_POINT_BOOSTER) {
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_KhanMedalBoost, "dialog_khanMedalBooster_boost_tt", __s14local1.percentage, __s14local1.duration);
    } else if (__s14local0.itemType == __dep_export_CollectableEnum.CollectableEnum.BOOSTER) {
      var __s14local2 = this.getMarketshopVO();
      this.setTitleAndCopyForBooster(__s14local2.heroName, __s14local2.copy);
      this.addBoosterIcon(Library.CastleInterfaceElements_Icons.Icon_Boni, __s14local2.bonusToolTip, __s14local2.bonusValue, __s14local0.boosterVO.duration, __s14local2.bonusIconFrame);
    } else {
      this.dialogDisp.txt_copy.height = CastleRewardInfoDialog.TEXTFIELD_HEIGHT_LARGE;
      this.fadeOutDialogAdditionalValues();
    }
  };
  CastleRewardInfoDialog.prototype.getMarketshopVO = function () {
    var __s28local0 = this.dialogProperties.collectableItem.boosterVO;
    if (__s28local0.isInstructor()) {
      return __dep_export_CastleModel.CastleModel.boostData.instructorVO;
    }
    if (__s28local0.isMarauder()) {
      return __dep_export_CastleModel.CastleModel.boostData.marauderVO;
    }
    if (__s28local0.isTaxcollector()) {
      return __dep_export_CastleModel.CastleModel.boostData.taxBribeVO;
    }
    if (__s28local0.isFoodBooster) {
      return __dep_export_CastleModel.CastleModel.boostData.overseerFoodVO;
    }
    if (__s28local0.isStoneBooster) {
      return __dep_export_CastleModel.CastleModel.boostData.overseerStoneVO;
    }
    if (__s28local0.isWoodBooster) {
      return __dep_export_CastleModel.CastleModel.boostData.overseerWoodVO;
    }
    throw new Error("Booster not supported.");
  };
  CastleRewardInfoDialog.prototype.addBoosterIcon = function (__s36param0, __s36param1, __s36param2, __s36param3, __s36param4 = 1) {
    this.fadeInAdditionalDialogValues();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_infoEffectBonus.mc_icon);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_infoPointBonus.mc_icon);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(__s36param0, this.dialogDisp.mc_infoEffectBonus.mc_icon, 40, 40);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_Time_Big, this.dialogDisp.mc_infoPointBonus.mc_icon, 40, 40);
    this.dialogDisp.mc_infoEffectBonus.mc_icon.getChildAt(0).gotoAndStop(__s36param4);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoEffectBonus.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s36param2])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoPointBonus.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__s36param3, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text, false, true)));
    this.dialogDisp.mc_infoEffectBonus.toolTipText = {
      t: __s36param1,
      p: [__s36param2]
    };
    this.dialogDisp.mc_infoPointBonus.toolTipText = "runTime";
  };
  CastleRewardInfoDialog.prototype.fadeInAdditionalDialogValues = function () {
    this.dialogDisp.mc_infoEffectBonus.visible = true;
    this.dialogDisp.mc_infoPointBonus.visible = true;
  };
  CastleRewardInfoDialog.prototype.setTitleAndCopyForBooster = function (__s40param0, __s40param1) {
    this.titleText = __s40param0;
    this.descriptionText = __s40param1;
  };
  CastleRewardInfoDialog.prototype.fadeOutDialogAdditionalValues = function () {
    this.dialogDisp.mc_infoEffectBonus.visible = false;
    this.dialogDisp.mc_infoPointBonus.visible = false;
  };
  CastleRewardInfoDialog.prototype.updateResetInfo = function () {
    this.dialogDisp.mc_reset.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.collectableItem, "CollectableItemGenericCurrencyVO") && this.dialogProperties.collectableItem.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_DONATION_CURRENCY));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reset.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_currencyInfoPopUp_ResetInfo"));
  };
  CastleRewardInfoDialog.prototype.onClick = function (__s46param0) {
    __s1param0.prototype.onClick.call(this, __s46param0);
    switch (__s46param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleRewardInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardInfoDialog.__initialize_static_members = function () {
    CastleRewardInfoDialog.MAX_ICON_DIMENSION = new __s0local0(80, 80);
  };
  CastleRewardInfoDialog.NAME = "CastleRewardInfoEx_Feb2024";
  CastleRewardInfoDialog.MAX_EQ_FRAME_WIDTH = 88;
  CastleRewardInfoDialog.TEXTFIELD_HEIGHT_LARGE = 107.5;
  CastleRewardInfoDialog.TEXTFIELD_HEIGHT_SMALL = 74.5;
  return CastleRewardInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRewardInfoDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_ACollectableItemGemVO = require("gge-module:export_ACollectableItemGemVO");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

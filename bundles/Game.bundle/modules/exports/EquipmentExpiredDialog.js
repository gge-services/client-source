Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function EquipmentExpiredDialog() {
    var __s3local0 = this;
    __s3local0._currentLordPageIndex = 0;
    __s3local0._maxLordPageIndex = 0;
    __s3local0._currentSelectedLordIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, EquipmentExpiredDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentExpiredDialog, __s1param0);
  Object.defineProperty(EquipmentExpiredDialog, "EQUIPMENT_SLOT_TYPE_ORDER", {
    get: function () {
      if (this._EQUIPMENT_SLOT_TYPE_ORDER == undefined) {
        this._EQUIPMENT_SLOT_TYPE_ORDER = [__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN];
      }
      return this._EQUIPMENT_SLOT_TYPE_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpiredDialog.prototype.initLoaded = function (__s8param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s8param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_jumpEquipment, 1.05, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    for (var __s8local0 = 0; __s8local0 < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++__s8local0) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.getChildByName("mc_lord" + __s8local0));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_equipExpired_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_jumpEquipment.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_equipExpired_ehangeEquip_button"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_exquipmentInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempEquipment_equipExpired_equipList_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effectsTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempEquipment_equipExpired_equipList_lostEffect")).autoFitToBounds = true;
    __s8local0 = 0;
    for (; __s8local0 < EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS; ++__s8local0) {
      this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + __s8local0).mc_placeholderIcon.gotoAndStop(__s8local0 + 1);
    }
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_scroll).addMouseWheelElements([this.dialogDisp.mc_equipments, this.dialogDisp.mc_scroll]).addVisualElements([this.dialogDisp.mc_scroll.mc_background]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  EquipmentExpiredDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    this._currentLordPageIndex = 0;
    this._currentSelectedLordIndex = 0;
    this._maxLordPageIndex = __dep_exact_f855840627e6e145.int(Math.max(0, this.dialogProperties.numberOfLords - EquipmentExpiredDialog.MAX_VISIBLE_LORDS));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.updateInfoText();
    this.updateLords();
    this.updateEquipments();
  };
  EquipmentExpiredDialog.prototype.hideLoaded = function (__s16param0 = null) {
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
      this._scrollComponent.hide();
    }
    __s1param0.prototype.hideLoaded.call(this);
  };
  EquipmentExpiredDialog.prototype.updateInfoText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.numberOfEquipments > 1 ? "dialog_tempEquipment_equipExpired_desc_plural" : "dialog_tempEquipment_equipExpired_desc_singular", [this.dialogProperties.numberOfLords])).autoFitToBounds = true;
  };
  EquipmentExpiredDialog.prototype.scrollLordPage = function (__s21param0) {
    this._currentLordPageIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s21param0, 0, this._maxLordPageIndex));
    this.updateLords();
  };
  EquipmentExpiredDialog.prototype.updateLords = function () {
    for (var __s23local0 = 0; __s23local0 < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++__s23local0) {
      var __s23local1 = this.dialogDisp.getChildByName("mc_lord" + __s23local0);
      var __s23local2 = this._currentLordPageIndex + __s23local0;
      var __s23local3 = __s23local2 >= this.dialogProperties.lordList.length ? null : this.dialogProperties.lordList[__s23local2];
      __s23local1.mouseChildren = false;
      __s23local1.visible = __s23local3 != null;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s23local1.mc_icon);
      if (__s23local3 && __s23local1.visible) {
        if (__s23local3.isHero) {
          __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s23local3, __s23local1.mc_icon, 60, 60);
        } else {
          __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s23local3, __s23local1.mc_icon, 50, 50);
        }
      }
    }
    this.dialogDisp.btn_left.visible = this._currentLordPageIndex > 0;
    this.dialogDisp.btn_right.visible = this._currentLordPageIndex < this._maxLordPageIndex;
    this.updateLordHighlight();
  };
  EquipmentExpiredDialog.prototype.selectLord = function (__s30param0) {
    this._currentSelectedLordIndex = __s30param0;
    this.updateLordHighlight();
    this.updateEquipments();
  };
  EquipmentExpiredDialog.prototype.updateLordHighlight = function () {
    for (var __s32local0 = 0; __s32local0 < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++__s32local0) {
      this.dialogDisp.getChildByName("mc_lord" + __s32local0).filters = [];
    }
    if (this._currentSelectedLordIndex >= this._currentLordPageIndex * EquipmentExpiredDialog.MAX_VISIBLE_LORDS && this._currentSelectedLordIndex < (this._currentLordPageIndex + 1) * EquipmentExpiredDialog.MAX_VISIBLE_LORDS) {
      this.dialogDisp.getChildByName("mc_lord" + this._currentSelectedLordIndex % EquipmentExpiredDialog.MAX_VISIBLE_LORDS).filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM;
    }
  };
  EquipmentExpiredDialog.prototype.updateEquipments = function () {
    var __s37local0 = this.dialogProperties.lordList[this._currentSelectedLordIndex];
    if (__s37local0) {
      var __s37local1 = this.dialogProperties.getExpiredEquipmentVOByLord(__s37local0.id);
      this.destroyCollectableRenderList();
      var __s37local2 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_tempEquipment_equipExpired_equipList_header", [this.dialogProperties.lordList[this._currentSelectedLordIndex].label]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_equipmentTitle, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s37local2)).autoFitToBounds = true;
      var __s37local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60));
      __s37local3.tooltip.showEquipmentCountdown = false;
      __s37local3.tooltip.forceHideTimer = true;
      for (var __s37local4 = 0; __s37local4 < EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS; ++__s37local4) {
        var __s37local5 = __s37local1.getEquipmentBySlotType(EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[__s37local4]);
        var __s37local6 = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + __s37local4);
        if (__s37local5) {
          var __s37local7 = new __dep_export_CollectableItemEquipmentUniqueEnchantedVO.CollectableItemEquipmentUniqueEnchantedVO(__s37local5.enchantmentLevel);
          __s37local7.equipmentVO = __s37local5;
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s37local6), __s37local7, __s37local3);
        } else {
          __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s37local6.mc_icon);
        }
      }
      var __s37local8 = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effects, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_LordEffectHelper.LordEffectHelper.createEffectListStringFromEquipments(__s37local1.equipments)));
      __s37local8.height = __s37local8.textHeight;
      this.dialogDisp.mc_equipments.mc_effectBackground.height = Math.max(EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND, EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND + (__s37local8.height - EquipmentExpiredDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT));
      var __s37local9 = this.dialogDisp.mc_equipments.getBounds(null);
      this._scrollComponent.init(0, Math.max(__s37local9.height - EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT, 0), 25, 25);
      this._scrollComponent.show();
      this._scrollComponent.scrollToPercent(0);
      this._scrollComponent.setVisibility(__s37local9.height > EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT);
    }
  };
  EquipmentExpiredDialog.prototype.onClick = function (__s44param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s44param0.target)) {
      __s1param0.prototype.onClick.call(this, __s44param0);
      for (var __s44local0 = 0; __s44local0 < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++__s44local0) {
        if (__s44param0.target == this.dialogDisp.getChildByName("mc_lord" + __s44local0)) {
          this.selectLord(this._currentLordPageIndex * EquipmentExpiredDialog.MAX_VISIBLE_LORDS + __s44local0);
        }
      }
      switch (__s44param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tempEquipment_equipExpired"));
          break;
        case this.dialogDisp.btn_left:
          this.scrollLordPage(this._currentLordPageIndex - 1);
          break;
        case this.dialogDisp.btn_right:
          this.scrollLordPage(this._currentLordPageIndex + 1);
          break;
        case this.dialogDisp.btn_jumpEquipment:
          this.onJumpToEquipmentButtonClicked();
      }
    }
  };
  EquipmentExpiredDialog.prototype.onJumpToEquipmentButtonClicked = function () {
    var __s51local0 = this.dialogProperties.lordList[this._currentSelectedLordIndex];
    if (__s51local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, __s51local0.id, __s51local0.isBaron));
    }
  };
  EquipmentExpiredDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_equipments.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(EquipmentExpiredDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpiredDialog.NAME = "EquipmentExpired";
  EquipmentExpiredDialog.MAX_VISIBLE_LORDS = 8;
  EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS = 6;
  EquipmentExpiredDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT = 94.5;
  EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND = 132.2;
  EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT = 255.35;
  return EquipmentExpiredDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.EquipmentExpiredDialog = __s0local1;
var __dep_export_CollectableItemEquipmentUniqueEnchantedVO = require("gge-module:export_CollectableItemEquipmentUniqueEnchantedVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

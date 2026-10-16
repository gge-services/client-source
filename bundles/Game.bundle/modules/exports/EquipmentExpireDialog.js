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
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function EquipmentExpireDialog() {
    var __s3local0 = this;
    __s3local0._expiringEquipments = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, EquipmentExpireDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentExpireDialog, __s1param0);
  EquipmentExpireDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_jumpEquipment, 1.05, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_attackAnyway, 1.05, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_postAttack_arrival"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_equipmentTitle, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_equipList_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effectTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempEquipment_expireWarning_lostEffects_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_jumpEquipment.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_changeEquip_button"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_attackAnyway.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_attackAnyway_button"))).autoFitToBounds = true;
    this.dialogDisp.mc_travelTime.mouseChildren = false;
    this.dialogDisp.mc_travelTime.toolTipText = "travelTime";
    for (var __s5local0 = 0; __s5local0 < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++__s5local0) {
      var __s5local1 = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + __s5local0);
      this.textFieldManager.registerTextField(__s5local1.txt_expired, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_equipList_expired"))).autoFitToBounds = true;
      __s5local1.mc_equipment.mc_slotType.gotoAndStop(__s5local0 + 1);
    }
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_scroll).addMouseWheelElements([this.dialogDisp.mc_equipments, this.dialogDisp.mc_scroll]).addVisualElements([this.dialogDisp.mc_scroll.mc_background]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  EquipmentExpireDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this._expiringEquipments = [];
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this.updateInfoText();
    this.updateLord();
    this.updateTravelTimes();
    this.checkEquipment();
    this.updateEquipments();
  };
  EquipmentExpireDialog.prototype.hide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this._scrollComponent.hide();
    this._expiringEquipments = [];
    __s1param0.prototype.hide.call(this);
  };
  EquipmentExpireDialog.prototype.updateInfoText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.lordVO.isBaron ? "dialog_tempEquipment_expireWarning_desc_castellan" : "dialog_tempEquipment_expireWarning_desc_commander", [this.dialogProperties.lordVO.label])).autoFitToBounds = true;
  };
  EquipmentExpireDialog.prototype.updateLord = function () {
    var __s15local0 = this.dialogDisp.mc_lord;
    __s15local0.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s15local0.mc_icon);
    if (this.dialogProperties.lordVO.isHero) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.dialogProperties.lordVO, __s15local0.mc_icon, 75, 75);
    } else {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.dialogProperties.lordVO, __s15local0.mc_icon, 64, 64);
    }
    __s15local0.toolTipText = this.dialogProperties.lordVO.name;
  };
  EquipmentExpireDialog.prototype.updateTravelTimes = function () {
    var __s19local0 = new Date();
    __s19local0.setTime(__s19local0.getTime() + this.dialogProperties.travelTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_travelTime.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.dialogProperties.travelTime)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivalDate, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s19local0)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivalTime, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getDateToString(__s19local0.getTime(), __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text)));
  };
  EquipmentExpireDialog.prototype.updateEquipments = function () {
    this.destroyCollectableRenderList();
    for (var __s21local0 = 0; __s21local0 < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++__s21local0) {
      var __s21local1 = this.getEquipmentBySlotType(__dep_export_EquipmentExpiredDialog.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[__s21local0]);
      var __s21local2 = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + __s21local0);
      if (__s21local1) {
        var __s21local3 = new __dep_export_CollectableItemEquipmentUniqueEnchantedVO.CollectableItemEquipmentUniqueEnchantedVO(__s21local1.enchantmentLevel);
        __s21local3.equipmentVO = __s21local1;
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s21local2).addIconMc(__s21local2.mc_equipment.mc_icon), __s21local3, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60)));
      } else {
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s21local2.mc_equipment.mc_icon);
      }
    }
    this.updateEquipmentTimes();
    var __s21local4 = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effects, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_LordEffectHelper.LordEffectHelper.createEffectListStringFromEquipments(this._expiringEquipments)));
    __s21local4.height = __s21local4.textHeight;
    this.dialogDisp.mc_equipments.mc_effectsBackground.height = Math.max(EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND, EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND + (__s21local4.height - EquipmentExpireDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT));
    var __s21local5 = this.dialogDisp.mc_equipments.getBounds(null);
    this._scrollComponent.init(0, Math.max(__s21local5.height - EquipmentExpireDialog.EFFECTS_MASK_HEIGHT, 0), 25, 25);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(__s21local5.height > EquipmentExpireDialog.EFFECTS_MASK_HEIGHT);
  };
  EquipmentExpireDialog.prototype.updateEquipmentTimes = function () {
    for (var __s27local0 = 0; __s27local0 < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++__s27local0) {
      var __s27local1 = this.getEquipmentBySlotType(__dep_export_EquipmentExpiredDialog.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[__s27local0]);
      var __s27local2 = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + __s27local0);
      if (__s27local1) {
        var __s27local3 = __s27local1.remainingDuration <= 0;
        __s27local2.txt_expired.visible = __s27local3;
        __s27local2.mc_time.visible = !__s27local3;
        if (!__s27local3) {
          this.textFieldManager.registerTextField(__s27local2.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(__s27local1.remainingDuration)));
        }
      } else {
        __s27local2.txt_expired.visible = false;
        __s27local2.mc_time.visible = true;
        this.textFieldManager.registerTextField(__s27local2.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
      }
    }
  };
  EquipmentExpireDialog.prototype.checkEquipment = function () {
    var __s34local0 = false;
    for (var __s34local1 = 0; __s34local1 < __dep_export_EquipmentExpiredDialog.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER.length; ++__s34local1) {
      var __s34local2 = __dep_export_EquipmentExpiredDialog.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[__s34local1];
      var __s34local3 = this.dialogProperties.lordVO.equipmentSlots[__s34local2].equipmentVO;
      if (__s34local3 && __s34local3.uniqueID > 0 && __s34local3.remainingDuration > 0 && !this.doesEquipmentExistInList(this._expiringEquipments, __s34local3) && __s34local3.remainingDuration - this.dialogProperties.travelTime <= 0) {
        var __s34local4 = __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(__s34local3.uniqueID, true);
        __s34local4.durationEndTimestamp = __s34local3.durationEndTimestamp;
        this._expiringEquipments.push(__s34local4);
        __s34local0 = true;
      }
    }
    if (__s34local0) {
      this.updateEquipments();
    }
  };
  EquipmentExpireDialog.prototype.doesEquipmentExistInList = function (__s40param0, __s40param1) {
    if (__s40param0 != null) {
      for (var __s40local0 = 0, __s40local1 = __s40param0; __s40local0 < __s40local1.length; __s40local0++) {
        var __s40local2 = __s40local1[__s40local0];
        if (__s40local2 !== undefined && __s40local2.uniqueID == __s40param1.uniqueID) {
          return true;
        }
      }
    }
    return false;
  };
  EquipmentExpireDialog.prototype.getEquipmentBySlotType = function (__s46param0) {
    if (this._expiringEquipments != null) {
      for (var __s46local0 = 0, __s46local1 = this._expiringEquipments; __s46local0 < __s46local1.length; __s46local0++) {
        var __s46local2 = __s46local1[__s46local0];
        if (__s46local2 !== undefined && __s46local2.slotType == __s46param0) {
          return __s46local2;
        }
      }
    }
    return null;
  };
  EquipmentExpireDialog.prototype.onClick = function (__s52param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s52param0.target)) {
      __s1param0.prototype.onClick.call(this, __s52param0);
      switch (__s52param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tempEquipment_expireWarning"));
          break;
        case this.dialogDisp.btn_jumpEquipment:
          this.dialogProperties.onDeniedFunc();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, this.dialogProperties.lordVO.id, this.dialogProperties.lordVO.isBaron));
          this.hide();
          break;
        case this.dialogDisp.btn_attackAnyway:
          this.dialogProperties.onConfirmFunc(this.dialogProperties.boostTraveling, this.dialogProperties.premiumCommander);
          this.hide();
      }
    }
  };
  EquipmentExpireDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_equipments.y = -this._scrollComponent.currentValue;
  };
  EquipmentExpireDialog.prototype.onTickEvent = function (__s58param0) {
    this.updateTravelTimes();
    this.checkEquipment();
    this.updateEquipmentTimes();
  };
  Object.defineProperty(EquipmentExpireDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpireDialog.NAME = "EquipmentExpire";
  EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS = 6;
  EquipmentExpireDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT = 94.5;
  EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND = 132.2;
  EquipmentExpireDialog.EFFECTS_MASK_HEIGHT = 310;
  return EquipmentExpireDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.EquipmentExpireDialog = __s0local1;
var __dep_export_CollectableItemEquipmentUniqueEnchantedVO = require("gge-module:export_CollectableItemEquipmentUniqueEnchantedVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_EquipmentExpiredDialog = require("gge-module:export_EquipmentExpiredDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

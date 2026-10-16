Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_C2SSkipDungeonCooldownVO = require("gge-module:export_C2SSkipDungeonCooldownVO");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_SkipCooldownEvent = require("gge-module:export_SkipCooldownEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_instanceOf_IDungeonMapobjectVO = require("gge-module:export_instanceOf_IDungeonMapobjectVO");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleCooldownComponent = require("gge-module:export_CastleCooldownComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SkippableCooldownDialog() {
    return __s1param0.call(this, SkippableCooldownDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkippableCooldownDialog, __s1param0);
  SkippableCooldownDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_fullSkip, this.dialogDisp.btn_minuteSkip], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.initAutoskip();
  };
  SkippableCooldownDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.text_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.text_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this.dialogDisp.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.cooldown_component = new __dep_export_CastleCooldownComponent.CastleCooldownComponent(this.dialogDisp.cooldown_component, this.bindFunction(this.onTimeUp), this.dialogProperties.mapObjectVO.remainingCooldownTimeInSeconds, this.dialogProperties.mapObjectVO.totalCooldownTime, this.getHeaderCooldownTextID());
    this.dialogDisp.btn_fullSkip.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.controller.addEventListener(__dep_export_SkipCooldownEvent.SkipCooldownEvent.UPDATE, this.bindFunction(this.onMapobjectVOUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.cooldown_component.addEventListenerOnShow();
    this.updateMapobject();
    this.updateTime();
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_fullSkip, true);
    this.showAutoskipPreview();
  };
  SkippableCooldownDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.dialogDisp.btn_fullSkip.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.controller.removeEventListener(__dep_export_SkipCooldownEvent.SkipCooldownEvent.UPDATE, this.bindFunction(this.onMapobjectVOUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.cooldown_component.removeEventListenerOnHide();
  };
  SkippableCooldownDialog.prototype.onEventRemoved = function (__s11param0) {
    if (!this.dialogProperties.mapObjectVO.isVisibleOnMap) {
      this.hide();
    }
  };
  SkippableCooldownDialog.prototype.onMapobjectVOUpdated = function (__s14param0) {
    var __s14local0 = this.dialogProperties.mapObjectVO.ownerInfo;
    if (__s14param0.mapObjectVO != null) {
      this.dialogProperties.mapObjectVO = __s14param0.mapObjectVO;
    }
    this.dialogProperties.mapObjectVO.ownerInfo = __s14local0;
    this.updateMapobject();
    this.updateTime();
  };
  SkippableCooldownDialog.prototype.onMouseOverSkipButton = function (__s17param0) {
    this.dialogDisp.btn_fullSkip.toolTipText = {
      t: "dungeonCooldown_skip_tooltip",
      p: [this.dialogProperties.mapObjectVO.skipCooldownCostC2 >> 0]
    };
  };
  SkippableCooldownDialog.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      __s1param0.prototype.onClick.call(this, __s19param0);
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_fullSkip:
          this.skipWithRubies();
          break;
        case this.dialogDisp.btn_minuteSkip:
          this.minuteSkip();
      }
    }
  };
  SkippableCooldownDialog.prototype.minuteSkip = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_SkippableCooldownMinuteSkipProperties.SkippableCooldownMinuteSkipProperties(this.dialogProperties.mapObjectVO, this.useSubscription));
  };
  SkippableCooldownDialog.prototype.updateTime = function () {
    if (this.cooldown_component) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO")) {
        this.cooldown_component.updateTime(this.dialogProperties.mapObjectVO.tMapNode.coolDownInRemainingSeconds);
      } else {
        this.cooldown_component.updateTime(this.dialogProperties.mapObjectVO.remainingCooldownTimeInSeconds);
      }
    }
  };
  SkippableCooldownDialog.prototype.onTimeUp = function () {
    this.hide();
    this.dialogProperties.callCooldownFinishedFunction();
  };
  SkippableCooldownDialog.prototype.updateMapobject = function () {
    this.updateMapobjectText();
    this.updateMapobjectCrest();
    this.updateMapobjectIcon();
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.cooldown_component.itxt_cooldown_time, this.useSubscription, 20, new __s0local1(-8, 0));
  };
  Object.defineProperty(SkippableCooldownDialog.prototype, "useSubscription", {
    get: function () {
      var __s34local0 = false;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "SamuraiCampMapObjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadKhanCampMapObjectVO")) {
        __s34local0 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION);
      }
      return __s34local0;
    },
    enumerable: true,
    configurable: true
  });
  SkippableCooldownDialog.prototype.updateMapobjectText = function () {
    this.itxt_name.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.mapObjectVO.areaNameString);
    this.itxt_description.textContentVO.textId = this.getMapobjectTextID();
  };
  SkippableCooldownDialog.prototype.getHeaderCooldownTextID = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoTownshipMapObjectVO")) {
      return "dialog_cooldownSkip_township_header";
    } else {
      return "Coldown_timer_header";
    }
  };
  SkippableCooldownDialog.prototype.getMapobjectTextID = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO")) {
      if (this.dialogProperties.mapObjectVO.tMapNode.isEndNode) {
        return "dungeonSeaQueen_FinalCastle_Cooldown_skip_copy";
      } else if (this.dialogProperties.mapObjectVO.tMapNode.isBridgeDungeon) {
        return "dungeonSeaQueen_fortressCastle_Cooldown_skip_copy";
      } else {
        return "dungeonSeaQueen_towerCastle_Cooldown_skip_copy";
      }
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "ChargeCampMapobjectVO")) {
      return "dungeonNormal_Cooldown_skip_tempServer";
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "DungeonMapobjectVO")) {
      switch (this.dialogProperties.mapObjectVO.kingdomID) {
        case __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID:
          return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dungeonNormal_Cooldown_skip_copy");
        case __dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID:
          return "dungeonIcecream_Cooldown_skip_copy";
        case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
          return "dungeonDessert_Cooldown_skip_copy";
        case __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID:
          return "dungeonVolcano_Cooldown_skip_copy";
      }
    } else {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadCampMapObjectVO")) {
        return "dialog_nomadCamp_cooldown";
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "NomadKhanCampMapObjectVO")) {
        return "dialog_khanCamp_cooldown";
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "SamuraiCampMapObjectVO")) {
        return "dialog_samuraiCamp_cooldown";
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoCastleMapObjectVO")) {
        return "dialog_cooldownSkip_daimyo_desc";
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "DaimyoTownshipMapObjectVO")) {
        return "dialog_cooldownSkip_township_desc";
      }
    }
    return "";
  };
  SkippableCooldownDialog.prototype.updateMapobjectCrest = function () {
    var __s58local0 = this.dialogProperties.mapObjectVO.ownerInfo.crest;
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_placeholder, __s58local0, null, true);
  };
  SkippableCooldownDialog.prototype.updateMapobjectIcon = function () {
    var __s60local0;
    __s60local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO") ? __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, new __s0local1(70, 60), true, false, false, "", this.dialogProperties.mapObjectVO.tMapNode) : __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.mapObjectVO, new __s0local1(70, 60), true, false, false);
    this.dialogDisp.mc_dungeon_placeholder.removeChildren();
    this.dialogDisp.mc_dungeon_placeholder.addChild(__s60local0);
    this.dialogDisp.mc_dungeon_placeholder.mouseChildren = false;
    this.dialogDisp.mc_dungeon_placeholder.toolTipText = this.getMapobjectTooltipString();
  };
  SkippableCooldownDialog.prototype.getMapobjectTooltipString = function () {
    var __s62local0 = this.dialogProperties.mapObjectVO.areaNameString;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "DungeonMapobjectVO")) {
      var __s62local1 = this.dialogProperties.mapObjectVO;
      __s62local0 += "\n" + __dep_export_DungeonMapobject.DungeonMapobject.textLine2(__s62local1).compose() + "\n" + __dep_export_DungeonMapobject.DungeonMapobject.textLine3(__s62local1).compose();
    } else if (__dep_export_instanceOf_IDungeonMapobjectVO.instanceOf_IDungeonMapobjectVO(this.dialogProperties.mapObjectVO)) {
      var __s62local2 = this.dialogProperties.mapObjectVO;
      __s62local0 += " " + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), __s62local2.dungeonLevel]);
    }
    return __s62local0;
  };
  SkippableCooldownDialog.prototype.skipWithRubies = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_fullSkip, false);
    var __s66local0;
    var __s66local1 = this.dialogProperties.mapObjectVO.absAreaPos;
    var __s66local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.mapObjectVO.kingdomID);
    __s66local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.mapObjectVO, "TreasureDungeonMapObjectVO") ? new __dep_export_C2SSkipDungeonCooldownVO.C2SSkipDungeonCooldownVO(__s66local1, __s66local2, this.dialogProperties.mapObjectVO.tMapNode) : new __dep_export_C2SSkipDungeonCooldownVO.C2SSkipDungeonCooldownVO(__s66local1, __s66local2, null);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s66local0);
  };
  Object.defineProperty(SkippableCooldownDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SkippableCooldownDialog.prototype.initAutoskip = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.txt_preview, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_cooldownSkip_unlockPreview_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_travelPlanning_autoCooldownSkip_preview_help_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_help_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.btn_buy.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("toTheShop")));
    this.dialogDisp.mc_autoskip_preview.icon_info.mouseChildren = false;
    this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_preview.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(this.dialogDisp.mc_autoskip_preview.btn_buy, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/3",
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_TRAVEL_PLANNING_DIALOG_AUTOSKIP_PREVIEW
    });
  };
  SkippableCooldownDialog.prototype.showAutoskipPreview = function () {
    var __s72local0 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipTarget(this.dialogProperties.mapObjectVO);
    var __s72local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.dialogProperties.mapObjectVO);
    this.dialogDisp.mc_autoskip_preview.visible = __s72local0 && !__s72local1;
  };
  SkippableCooldownDialog.prototype.onMouseOver = function (__s74param0) {
    __s1param0.prototype.onMouseOver.call(this, __s74param0);
    switch (__s74param0.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = true;
    }
  };
  SkippableCooldownDialog.prototype.onMouseOut = function (__s77param0) {
    __s1param0.prototype.onMouseOut.call(this, __s77param0);
    switch (__s77param0.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    }
  };
  SkippableCooldownDialog.NAME = "DungeonCooldownEx_JUN23";
  return SkippableCooldownDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SkippableCooldownDialog = __s0local2;
var __dep_export_DungeonMapobject = require("gge-module:export_DungeonMapobject");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_SkippableCooldownMinuteSkipProperties = require("gge-module:export_SkippableCooldownMinuteSkipProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");

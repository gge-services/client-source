Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GlobalEffectEventDialogListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("GlobalEffectEventListItem"))(), __s3param1) || this;
    __s3local0._data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectEventDialogListItem, __s1param0);
  GlobalEffectEventDialogListItem.prototype.updateTimer = function () {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.disp.headerMC.txt_time, this.remainingTimeInSeconds);
  };
  GlobalEffectEventDialogListItem.prototype.fill = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.mc_boost.btn_buy, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.headerMC.mc_icon);
    var __s7local0 = "Global_Effect_Icon_" + this.globalEffectVO.globalEffectID;
    if (__dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local0)) {
      var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s7local0));
      __s7local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(52, 52);
      this.disp.headerMC.mc_icon.addChild(__s7local1);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("globaleffect_name_" + this.globalEffectVO.name)));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("globaleffect_desc_" + this.globalEffectVO.name, [this.globalEffectVO.bonus.strength]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_globalEffects_desc"));
    this.disp.headerMC.mc_new.visible = this.isNew;
    this.disp.headerMC.mc_boosted.visible = this.isBoosted;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_kingdoms, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_kingdoms")));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_events, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_events")));
    for (var __s7local2 = 0; __s7local2 < 5; __s7local2++) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.contentMC["mc_kindom" + __s7local2]);
      if (__s7local2 < this.globalEffectVO.displayKingdomIDs.length) {
        this.disp.contentMC["mc_kindom" + __s7local2].addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GlobEff_KingdomIcon_" + this.globalEffectVO.displayKingdomIDs[__s7local2], __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_GlobalEffectEventDialog.GlobalEffectEventDialog.NAME), null, 0, false));
        this.disp.contentMC["mc_kindom" + __s7local2].toolTipText = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.globalEffectVO.displayKingdomIDs[__s7local2]).kingdomNameString;
        this.disp.contentMC["mc_kindom" + __s7local2].mouseChildren = false;
      }
    }
    this.disp.contentMC.mc_small.visible = this.useSmallEventMC;
    this.disp.contentMC.mc_big.visible = !this.useSmallEventMC;
    var __s7local3 = 0;
    for (var __s7local4 = __dep_exact_f855840627e6e145.int(this.useSmallEventMC ? 6 : 12), __s7local5 = 0; __s7local5 < __s7local4; __s7local5++) {
      var __s7local6 = __s7local5 < this.eventsToShow.length;
      var __s7local7 = this.useEventMC["mc_event" + __s7local5];
      __s7local7.visble = __s7local6;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s7local7);
      if (__s7local6) {
        __s7local7.addChild(__dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.eventsToShow[__s7local3].eventId, new __s0local0(50, 50)));
        __s7local7.mouseChildren = false;
        __s7local7.toolTipText = "event_title_" + this.eventsToShow[__s7local3].eventId;
        __s7local3++;
      }
    }
    this.disp.mc_boost.visible = !this.isBoosted && this.isBoostAble;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_boost.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("globaleffect_desc_" + this.globalEffectVO.name, [this.boostStrength]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_boost.btn_buy.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.boostC2));
    this.updateTimer();
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this.applyStateChange();
  };
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boosterY", {
    get: function () {
      if (this.isExpanded) {
        if (this.useSmallEventMC) {
          return 270;
        } else {
          return 340;
        }
      } else {
        return 70;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "eventsToShow", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventsByIds(this.globalEffectVO.displayEventIDs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "useSmallEventMC", {
    get: function () {
      return this.eventsToShow.length <= 6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "useEventMC", {
    get: function () {
      if (this.useSmallEventMC) {
        return this.disp.contentMC.mc_small;
      } else {
        return this.disp.contentMC.mc_big;
      }
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventDialogListItem.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    this.disp.mc_boost.y = this.boosterY;
    if (this.isExpanded) {
      this.disp.headerMC.mc_selected.visible = true;
      this.disp.headerMC.mc_arrow.visible = false;
    } else {
      this.disp.headerMC.mc_selected.visible = false;
      this.disp.headerMC.mc_arrow.visible = true;
    }
  };
  GlobalEffectEventDialogListItem.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      __s1param0.prototype.onClick.call(this, __s34param0);
      switch (__s34param0.target) {
        case this.disp.headerMC:
          this.expand(!this.isExpanded, true);
          break;
        case this.disp.mc_boost.btn_buy:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("dialog_globalEffect_boostBuy_title", "dialog_globalEffect_boostBuy", this.bindFunction(this.onBuy)));
      }
    }
  };
  GlobalEffectEventDialogListItem.prototype.onBuy = function (__s38param0 = null) {
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.boostC2) {
      __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SActivateGlobalEffectBuffVO.C2SActivateGlobalEffectBuffVO(this.globalEffectVO.globalEffectID));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    }
  };
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "height", {
    get: function () {
      var __s42local0 = this.disp.mc_boost.visible ? this.disp.mc_boost.height : 0;
      if (this.isExpanded) {
        return this.contentMC.y + this.useEventMC.y + this.useEventMC.height + __s42local0;
      } else {
        return this._headerMC.height + __s42local0;
      }
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "globalEffectVO", {
    get: function () {
      return this._data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this._data[1] - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostStrength", {
    get: function () {
      if (this.boostEvent) {
        return this.boostEvent.getBoostValueForGlobalEffect(this.globalEffectVO.globalEffectID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostC2", {
    get: function () {
      if (this.boostEvent) {
        return this.boostEvent.getBoostC2CostForGlobalEffect(this.globalEffectVO.globalEffectID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isBoostAble", {
    get: function () {
      return !!this.boostEvent && this.boostEvent.isEffectBoostable(this.globalEffectVO.globalEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isBoosted", {
    get: function () {
      return !!this.boostEvent && this.boostEvent.isEffectBoostable(this.globalEffectVO.globalEffectID) && __dep_export_CastleModel.CastleModel.globalEffectData.isEffectBoosted(this.globalEffectVO.globalEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isNew", {
    get: function () {
      return !this._data[2];
    },
    enumerable: true,
    configurable: true
  });
  return GlobalEffectEventDialogListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.GlobalEffectEventDialogListItem = __s0local1;
var __dep_export_GlobalEffectEventDialog = require("gge-module:export_GlobalEffectEventDialog");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_C2SActivateGlobalEffectBuffVO = require("gge-module:export_C2SActivateGlobalEffectBuffVO");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_ButtonAREComponent = require("gge-module:export_ButtonAREComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function WorldMapCastleInfoMenu() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, function createCastleInfoMenuDisp() {
      try {
        return new Library.CastleInterfaceElements.RingMenu_CastleInfo_Sep2025();
      } catch (__s8local0) {
        console.warn("Failed to create RingMenu_CastleInfo_Sep2025 asset: " + __s8local0);
        return new createjs.MovieClip();
      }
    }()) || this).buttons = new Map();
    try {
      __s3local0.register(new __dep_export_ButtonVisitCastleComponent.ButtonVisitCastleComponent(__s3local0.ringMenu.btn_visitcastle));
      __s3local0.register(new __dep_export_ButtonAttackComponent.ButtonAttackComponent(__s3local0.ringMenu.btn_attack));
      __s3local0.register(new __dep_export_ButtonAttackVillageComponent.ButtonAttackVillageComponent(__s3local0.ringMenu.btn_attackVillage));
      __s3local0.register(new __dep_export_ButtonAttackResourceIsleComponent.ButtonAttackResourceIsleComponent(__s3local0.ringMenu.btn_attackResourceIsle));
      __s3local0.register(new __dep_export_ButtonAttackKingstowerComponent.ButtonAttackKingstowerComponent(__s3local0.ringMenu.btn_attackKingstower));
      __s3local0.register(new __dep_export_ButtonSpyComponent.ButtonSpyComponent(__s3local0.ringMenu.btn_spymenu));
      __s3local0.register(new __dep_export_ButtonAutoSpyComponent.ButtonAutoSpyComponent(__s3local0.ringMenu.btn_autoSpy));
      __s3local0.register(new __dep_export_ButtonPlagueMonkComponent.ButtonPlagueMonkComponent(__s3local0.ringMenu.btn_plagueMonk));
      __s3local0.register(new __dep_export_ButtonConquerComponent.ButtonConquerComponent(__s3local0.ringMenu.btn_conquer));
      __s3local0.register(new __dep_export_ButtonBookmarkComponent.ButtonBookmarkComponent(__s3local0.ringMenu.btn_bookmark));
      __s3local0.register(new __dep_export_ButtonGiftComponent.ButtonGiftComponent(__s3local0.ringMenu.btn_gift));
      __s3local0.register(new __dep_export_ButtonTradeComponent.ButtonTradeComponent(__s3local0.ringMenu.btn_trademenu));
      __s3local0.register(new __dep_export_ButtonSendTroopsComponent.ButtonSendTroopsComponent(__s3local0.ringMenu.btn_sendTroups));
      __s3local0.register(new __dep_export_ButtonPlayerInfoComponent.ButtonPlayerInfoComponent(__s3local0.ringMenu.btn_showPlayerInfo));
      __s3local0.register(new __dep_export_ButtonSupportDefenceComponent.ButtonSupportDefenceComponent(__s3local0.ringMenu.btn_supportDefence));
      __s3local0.register(new __dep_export_ButtonDefenceComponent.ButtonDefenceComponent(__s3local0.ringMenu.btn_defence));
      __s3local0.register(new __dep_export_ButtonConquerAttackComponent.ButtonConquerAttackComponent(__s3local0.ringMenu.btn_attackAndConquer));
      __s3local0.register(new __dep_export_ButtonAttackLandmarkComponent.ButtonAttackLandmarkComponent(__s3local0.ringMenu.btn_attackMonument));
      __s3local0.register(new __dep_export_ButtonUpgradeLandmarkComponent.ButtonUpgradeLandmarkComponent(__s3local0.ringMenu.btn_upgradeMonument));
      __s3local0.register(new __dep_export_ButtonAlienRerollComponent.ButtonAlienRerollComponent(__s3local0.ringMenu.btn_reroll));
      __s3local0.register(new __dep_export_ButtonTauntComponent.ButtonTauntComponent(__s3local0.ringMenu.btn_taunt));
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.ringMenu.btn_attackCollector);
      __s3local0.register(new __dep_export_ButtonAttackCollectorComponent.ButtonAttackCollectorComponent(__s3local0.ringMenu.btn_attackCollector));
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.ringMenu.btn_are);
      __s3local0.register(new __dep_export_ButtonAREComponent.ButtonAREComponent(__s3local0.ringMenu.btn_are));
      if (__s3local0.ringMenu.btn_attack_charge_effect) {
        __s3local0.ringMenu.btn_attack_charge_effect.visible = false;
      }
      if (__s3local0.ringMenu.btn_attack_charge_pvp) {
        __s3local0.ringMenu.btn_attack_charge_pvp.visible = false;
      }
    } catch (__s13local0) {
      console.warn("Failed to initialize WorldMapCastleInfoMenu buttons: " + __s13local0);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapCastleInfoMenu, __s1param0);
  WorldMapCastleInfoMenu.prototype.register = function (__s15param0) {
    if (this.buttons) {
      this.buttons.set(__s15param0.targetMC, __s15param0);
    }
  };
  WorldMapCastleInfoMenu.prototype.onRollOver = function (__s18param0) {
    __s1param0.prototype.onRollOver.call(this, __s18param0);
    if (this.worldMapTarget) {
      this.initButtons();
    }
  };
  WorldMapCastleInfoMenu.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      var __s21local0 = this.buttons.get(__s21param0.target);
      if (__s21local0) {
        __s21local0.onClick();
      }
      this.hide();
    }
  };
  WorldMapCastleInfoMenu.prototype.onMouseOver = function (__s25param0) {
    var __s25local0;
    __s1param0.prototype.onMouseOver.call(this, __s25param0);
    this.hideInfoTexts();
    var __s25local1 = this.buttons.get(__s25param0.target);
    if (__s25local1) {
      __s25local0 = __s25local1.infoTextId;
      this.showInfoText(__dep_exact_92d05af59ee2ff30.Localize.text(__s25local0));
    }
  };
  WorldMapCastleInfoMenu.prototype.initComponent = function () {
    if (this.target) {
      __s1param0.prototype.initComponent.call(this);
      this.initButtons();
    }
  };
  WorldMapCastleInfoMenu.prototype.initButtons = function () {
    this.hideInfoTexts();
    if (this.buttons != null) {
      for (var __s31local0 = 0, __s31local1 = Array.from(this.buttons.values()); __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined) {
          __s31local2.targetWMO = this.worldMapTarget.worldmapObjectVO;
          __s31local2.initAsRingmenuButton();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.showInfoText = function (__s37param0) {
    this.textFieldManager.registerTextField(this.ringMenu.mc_infoText.txt_info, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s37param0));
    this.ringMenu.mc_infoText.visible = true;
  };
  WorldMapCastleInfoMenu.prototype.hideInfoTexts = function () {
    this.ringMenu.mc_infoText.visible = false;
  };
  Object.defineProperty(WorldMapCastleInfoMenu.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapCastleInfoMenu.prototype.updateMenuPosition = function () {
    if (this._target && this.worldMapTarget.worldmapObjectVO.isVisibleOnMap) {
      __s1param0.prototype.updateMenuPosition.call(this);
    } else {
      this.hide();
    }
  };
  WorldMapCastleInfoMenu.prototype.onMouseOut = function (__s47param0) {
    __s1param0.prototype.onMouseOut.call(this, __s47param0);
    this.hideInfoTexts();
  };
  WorldMapCastleInfoMenu.prototype.hide = function () {
    this.disposeButtons();
    __s1param0.prototype.hide.call(this);
    this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, []));
  };
  WorldMapCastleInfoMenu.prototype.disposeButtons = function () {
    if (this.buttons != null) {
      for (var __s51local0 = 0, __s51local1 = Array.from(this.buttons.values()); __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined && __s51local2) {
          __s51local2.destroy();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this.buttons != null) {
      for (var __s57local0 = 0, __s57local1 = Array.from(this.buttons.values()); __s57local0 < __s57local1.length; __s57local0++) {
        var __s57local2 = __s57local1[__s57local0];
        if (__s57local2 !== undefined) {
          __s57local2.destroy();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.hideWithSpecificMapObject = function (__s63param0) {
    return __s63param0 == this.worldMapTarget && (this.hide(), true);
  };
  WorldMapCastleInfoMenu.NAME = "WorldMapCastleinfoMenu";
  return WorldMapCastleInfoMenu;
}(require("gge-module:export_WorldMapRingMenu").WorldMapRingMenu);
exports.WorldMapCastleInfoMenu = __s0local0;
var __dep_export_ButtonAlienRerollComponent = require("gge-module:export_ButtonAlienRerollComponent");
var __dep_export_ButtonAttackCollectorComponent = require("gge-module:export_ButtonAttackCollectorComponent");
var __dep_export_ButtonAttackComponent = require("gge-module:export_ButtonAttackComponent");
var __dep_export_ButtonAttackKingstowerComponent = require("gge-module:export_ButtonAttackKingstowerComponent");
var __dep_export_ButtonAttackLandmarkComponent = require("gge-module:export_ButtonAttackLandmarkComponent");
var __dep_export_ButtonAttackResourceIsleComponent = require("gge-module:export_ButtonAttackResourceIsleComponent");
var __dep_export_ButtonAttackVillageComponent = require("gge-module:export_ButtonAttackVillageComponent");
var __dep_export_ButtonAutoSpyComponent = require("gge-module:export_ButtonAutoSpyComponent");
var __dep_export_ButtonBookmarkComponent = require("gge-module:export_ButtonBookmarkComponent");
var __dep_export_ButtonConquerAttackComponent = require("gge-module:export_ButtonConquerAttackComponent");
var __dep_export_ButtonConquerComponent = require("gge-module:export_ButtonConquerComponent");
var __dep_export_ButtonDefenceComponent = require("gge-module:export_ButtonDefenceComponent");
var __dep_export_ButtonGiftComponent = require("gge-module:export_ButtonGiftComponent");
var __dep_export_ButtonPlagueMonkComponent = require("gge-module:export_ButtonPlagueMonkComponent");
var __dep_export_ButtonPlayerInfoComponent = require("gge-module:export_ButtonPlayerInfoComponent");
var __dep_export_ButtonSendTroopsComponent = require("gge-module:export_ButtonSendTroopsComponent");
var __dep_export_ButtonSpyComponent = require("gge-module:export_ButtonSpyComponent");
var __dep_export_ButtonSupportDefenceComponent = require("gge-module:export_ButtonSupportDefenceComponent");
var __dep_export_ButtonTauntComponent = require("gge-module:export_ButtonTauntComponent");
var __dep_export_ButtonTradeComponent = require("gge-module:export_ButtonTradeComponent");
var __dep_export_ButtonUpgradeLandmarkComponent = require("gge-module:export_ButtonUpgradeLandmarkComponent");
var __dep_export_ButtonVisitCastleComponent = require("gge-module:export_ButtonVisitCastleComponent");

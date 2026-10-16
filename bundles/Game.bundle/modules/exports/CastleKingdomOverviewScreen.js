Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SLeaveAreaVO = require("gge-module:export_C2SLeaveAreaVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleKingdomTeaserProperties = require("gge-module:export_CastleKingdomTeaserProperties");
var __dep_export_CastleScreen = require("gge-module:export_CastleScreen");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Event;
var __s0local3 = createjs.MouseEvent;
var __s0local4 = createjs.Rectangle;
var __s0local5 = function (__s1param0) {
  function CastleKingdomOverviewScreen() {
    var __s3local0 = this;
    __s3local0._screenIsLoaded = false;
    __s3local0.kingdomToolTip = new Library.CastleInterfaceElements.InfoTooltip_Kingdom();
    CONSTRUCTOR_HACK;
    var __s3local1 = (__s3local0 = __s1param0.call(this, CastleKingdomOverviewScreen.initScreenClip()) || this).disp;
    if (__s3local1.isLoaded) {
      __s3local0.initAfterLoaded(__s3local1);
    } else {
      __s3local1.clipLoaded.addOnce(__s3local0.bindFunction(__s3local0.initAfterLoaded));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomOverviewScreen, __s1param0);
  CastleKingdomOverviewScreen.initScreenClip = function () {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleKingdomOverviewScreen.SCREEN_ASSET_NAME, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleKingdomOverviewScreen.SCREEN_ASSET_NAME), null, 0, false, __dep_exact_81dacdf05bd32292_2.getDefinitionByName("LoadingAnimation"));
  };
  CastleKingdomOverviewScreen.prototype.initAfterLoaded = function (__s9param0 = null) {
    this._screenIsLoaded = true;
    this.screenDisp.addChild(this.kingdomToolTip);
    this.kingdomToolTip.visible = false;
    this.kingdomToolTip.mouseEnabled = false;
    this.kingdomToolTip.txt_line1.defaultCacheScale = 2;
    this.kingdomToolTip.txt_line2.defaultCacheScale = 2;
    this.screenDisp.mc_clouds.mouseEnabled = false;
    this.show();
  };
  CastleKingdomOverviewScreen.prototype.show = function () {
    if (this._screenIsLoaded) {
      this.drawBG();
      this.updateKingdomMap();
      __s1param0.prototype.show.call(this);
      this.screenDisp.addEventListener(__s0local3.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.screenDisp.addEventListener(__s0local3.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(__s0local3.CLICK, this.bindFunction(this.onClick));
      __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventFinished));
      this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLeaveAreaVO.C2SLeaveAreaVO());
    }
  };
  CastleKingdomOverviewScreen.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.screenDisp.removeEventListener(__s0local3.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.screenDisp.removeEventListener(__s0local3.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(__s0local3.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventFinished));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleKingdomOverviewScreen.prototype.onEventFinished = function (__s16param0) {
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s16param0.specialEventVO, "FactionEventVO")) {
      this.updateKingdomMap();
    }
  };
  CastleKingdomOverviewScreen.prototype.onKingdomDataUpdated = function (__s19param0) {
    this.updateKingdomMap();
  };
  CastleKingdomOverviewScreen.prototype.updateKingdomMap = function () {
    for (var __s21local0 = 0; __s21local0 < this.screenDisp.numChildren; __s21local0++) {
      var __s21local1 = this.screenDisp.getChildAt(__s21local0);
      if (this.isMcKingdomMC(__s21local1)) {
        var __s21local2 = this.getKingdomVOByKingdomMCName(__s21local1.name);
        this.updateLock(__s21local2);
        __s21local1.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
        __s21local1.actLikeButton = true;
        if (__s21local1.mc_glow) {
          __s21local1.mc_glow.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, true);
        }
        __s21local1.mouseEnabled = true;
        __s21local1.mouseChildren = false;
        __s21local1.mc_crest.scaleX = __s21local1.mc_crest.scaleY = 0.5;
        var __s21local3 = __s21local1[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + __s21local2.kID];
        if (__s21local3) {
          __s21local3.scaleX = __s21local3.scaleY = 0.5;
          __s21local3.visible = __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s21local2.kID);
          if (__s21local3.visible) {
            this.setFlagColor(__s21local3);
          }
          __s21local3.doCache();
        }
      }
    }
    this.screenDisp.mc_royal_capital_crest.visible = false;
  };
  CastleKingdomOverviewScreen.prototype.setFlagColor = function (__s29param0) {
    for (var __s29local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo, __s29local1 = 0; __s29local1 < __s29local0.length; __s29local1++) {
      var __s29local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s29local2.color = __s29local0[__s29local1];
      __s29param0["cc" + __s29local1].useFilters([new createjs.ColorFilter(__s29local2.redMultiplier, __s29local2.greenMultiplier, __s29local2.blueMultiplier, __s29local2.alphaMultiplier, __s29local2.redOffset, __s29local2.greenOffset, __s29local2.blueOffset, __s29local2.alphaOffset)]);
    }
  };
  CastleKingdomOverviewScreen.prototype.updateLock = function (__s33param0) {
    if (__s33param0) {
      var __s33local0 = __dep_exact_81dacdf05bd32292_1.castAs(this.screenDisp["mc_lock_" + __s33param0.kID], "MovieClip");
      if (__s33local0) {
        this.setKingdomLockTxtLevel(__s33param0, __s33local0);
        var __s33local1 = __dep_exact_81dacdf05bd32292_1.castAs(__s33local0.lvl_Bg, "MovieClip");
        if (__s33local1) {
          __s33local1.visible = !__s33param0.isBlockedByServer;
        }
        __s33local0.mouseChildren = false;
        __s33local0.mouseEnabled = false;
        __s33local0.visible = !this.hasMinLevel(__s33param0) && this.isKingdomActive(__s33param0) || __s33param0.isBlockedByServer;
        if (__s33param0.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
          this.screenDisp.mc_clouds.visible = !this.isKingdomActive(__s33param0);
        }
      }
      var __s33local2 = __dep_exact_81dacdf05bd32292_1.castAs(this.screenDisp[CastleKingdomOverviewScreen.MC_RUBY_LOCK_PREFIX + __s33param0.kID], "MovieClip");
      if (__s33local2) {
        __s33local2.mouseChildren = false;
        __s33local2.mouseEnabled = false;
        __s33local2.visible = __s33param0.canBeUnlockedEarlyWithC2 && !__s33param0.isPaid && __dep_export_CastleModel.CastleModel.userData.userLevel >= __s33param0.minPremiumUnlockLevel && __dep_export_CastleModel.CastleModel.userData.userLevel < __s33param0.minNonPremiumUnlockLevel;
      }
    }
  };
  CastleKingdomOverviewScreen.prototype.setKingdomLockTxtLevel = function (__s40param0, __s40param1) {
    if (__s40param0.isBlockedByServer) {
      this.textFieldManager.registerTextField(__s40param1.txt_level, new __dep_exact_92d05af59ee2ff30_3.TextVO(" "));
    } else {
      this.textFieldManager.registerTextField(__s40param1.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s40param0.minLevel));
    }
  };
  CastleKingdomOverviewScreen.prototype.onTimerUpdate = function (__s44param0) {
    this.setResetTimerTooltip();
  };
  CastleKingdomOverviewScreen.prototype.onClick = function (__s46param0) {
    if (this.isMcKingdomMC(__s46param0.target)) {
      var __s46local0 = this.getKingdomVOByKingdomMCName(__s46param0.target.name);
      if (!this.isKingdomActive(__s46local0) || __s46local0.isBlockedByServer) {
        return;
      }
      if (!this.isKingdomVOClickable(__s46local0) && __s46local0.kID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        var __s46local1 = new __dep_export_CastleKingdomTeaserProperties.CastleKingdomTeaserProperties(__s46local0);
        __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_KINGDOM_TEASER, __s46local1);
        return;
      }
      if (__s46local0.hasTimer && __s46local0.resetTime <= 0) {
        __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f_3.ServerErrorVO(1, []));
        return;
      }
      if (__s46local0.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
        return;
      }
      if (__s46local0.kID == __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog, new __dep_export_CastleStormIslandsMainDialogProperties.CastleStormIslandsMainDialogProperties(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_MAIN));
        return;
      }
      __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = __s46local0.kID;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHandleKingdomDialog.CastleHandleKingdomDialog, new __dep_export_CastleHandleKingdomDialogProperties.CastleHandleKingdomDialogProperties(__s46local0));
    }
    if (__s46param0.target == this.screenDisp.btn_close) {
      this.hide();
    }
  };
  CastleKingdomOverviewScreen.prototype.onMouseOver = function (__s55param0) {
    __s1param0.prototype.onMouseOver.call(this, __s55param0);
    if (this.isMcKingdomMC(__s55param0.target)) {
      var __s55local0 = this.getKingdomVOByKingdomMCName(__s55param0.target.name);
      if (this.isKingdomActive(__s55local0)) {
        var __s55local1 = __s55param0.target.mc_glow ? __s55param0.target.mc_glow.filters : __s55param0.target.filters;
        __s55local1 = __s55local1.concat(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_KINGDOM_OVERVIEW);
        if (__s55param0.target.mc_glow) {
          __s55param0.target.mc_glow.useFilters(__s55local1, true, 1);
        } else {
          __s55param0.target.useFilters(__s55local1, true, 1);
        }
        if (__s55param0.target.mc_crest) {
          __s55param0.target.mc_crest.scaleX = __s55param0.target.mc_crest.scaleY = 0.6;
        }
        if (__s55param0.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + __s55local0.kID]) {
          __s55param0.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + __s55local0.kID].scaleY = __s55param0.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + __s55local0.kID].scaleX = 0.6;
        }
        this.showKingdomToolTip(__s55param0.target, __s55local0);
      }
    }
  };
  CastleKingdomOverviewScreen.prototype.onMouseOut = function (__s63param0) {
    __s1param0.prototype.onMouseOut.call(this, __s63param0);
    this.kingdomToolTip.visible = false;
    this.updateKingdomMap();
    if (__s63param0.target == this.screenDisp.mc_kingdom_4) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  CastleKingdomOverviewScreen.prototype.getKingdomVOByKingdomMCName = function (__s66param0) {
    var __s66local0 = parseInt(__s66param0.slice(CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX.length));
    return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s66local0);
  };
  CastleKingdomOverviewScreen.prototype.isKingdomVOClickable = function (__s68param0) {
    return this.hasMinLevel(__s68param0) && this.isKingdomActive(__s68param0) && __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlockable(__s68param0);
  };
  CastleKingdomOverviewScreen.prototype.hasMinLevel = function (__s70param0) {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __s70param0.minLevel;
  };
  CastleKingdomOverviewScreen.prototype.isKingdomActive = function (__s72param0) {
    return __s72param0.kID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID || __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
  };
  CastleKingdomOverviewScreen.prototype.showKingdomToolTip = function (__s74param0, __s74param1) {
    this._itxtKingdomName = this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line1, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s74param1.kingdomNameString));
    this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    if (this.isKingdomActive(__s74param1)) {
      if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlockable(__s74param1)) {
        if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __s74param1.minLevel) {
          if (__s74param1.isPaid) {
            if (__s74param1.kID == __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID) {
              this.setResetTimerTooltip();
              __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
            }
          } else {
            this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_isLocked"));
          }
        } else {
          this.setRequiredLevelToolTip(__s74param1);
        }
      } else {
        this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_needOtherKingdoms"));
      }
    }
    if (__s74param1.isBlockedByServer) {
      this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("alert_not_available"));
    }
    this.kingdomToolTip.x = __s74param0.x + __s74param0.mc_crest.x;
    if (__s74param1.kID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && this.screenDisp.stage.stageHeight <= 600 && this.screenDisp.stage.stageWidth <= 800) {
      this.kingdomToolTip.x += this._itxtKingdomName.textWidth / 2;
    }
    this.kingdomToolTip.y = Math.max(__s74param0.y + __s74param0.mc_crest.y, this.kingdomToolTip.height + 20);
    this.kingdomToolTip.mouseEnabled = false;
    this.kingdomToolTip.mouseChildren = false;
    this.kingdomToolTip.visible = true;
  };
  CastleKingdomOverviewScreen.prototype.setRequiredLevelToolTip = function (__s86param0) {
    if (__s86param0.canBeUnlockedEarlyWithC2 && this.hasMinLevelToBuy(__s86param0)) {
      if (!__s86param0.isPaid) {
        this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_unlockable"));
      }
    } else {
      this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__s86param0.minLevel]));
    }
  };
  CastleKingdomOverviewScreen.prototype.hasMinLevelToBuy = function (__s91param0) {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __s91param0.minPremiumUnlockLevel;
  };
  CastleKingdomOverviewScreen.prototype.setResetTimerTooltip = function () {
    var __s93local0 = __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_islandResetTimer_2") + "\n" + __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID).resetTime, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
    this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s93local0));
  };
  CastleKingdomOverviewScreen.prototype.updatePosition = function () {
    var __s95local0 = new __s0local4(0, 0, 800, 600);
    var __s95local1 = this.screenDisp.stage;
    if (__s95local1) {
      var __s95local2 = __s95local1.stageHeight / __s95local0.height;
      this.screenDisp.x = -__s95local0.left * __s95local2 - __s95local0.width * __s95local2 / 2 + __s95local1.stageWidth / 2;
      this.screenDisp.y = 0;
      this.screenDisp.scaleX = this.screenDisp.scaleY = __s95local2;
    }
    this.resizeBG();
  };
  CastleKingdomOverviewScreen.prototype.drawBG = function () {
    if (!this._bg) {
      this._bg = new __s0local1();
      this._bg.graphics.beginFill(5148064, 1);
      this._bg.graphics.drawRect(0, 0, 1, 1);
      this._bg.graphics.endFill();
      this._bg.addEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
      this.screenDisp.addChildAt(this._bg, 0);
    }
  };
  CastleKingdomOverviewScreen.prototype.onBGAddedToStage = function (__s101param0) {
    this._bg.removeEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.resizeBG();
  };
  CastleKingdomOverviewScreen.prototype.resizeBG = function () {
    if (this._bg && this._bg.stage) {
      this._bg.width = this._bg.stage.stageWidth / this.screenDisp.scaleX;
      this._bg.height = this._bg.stage.stageHeight / this.screenDisp.scaleY;
      this._bg.x = -this.screenDisp.x / this.screenDisp.scaleX;
    }
    if (this.screenDisp && this.screenDisp.getChildByName("bitmap_1")) {
      this.screenDisp.getChildByName("bitmap_1").doCache();
    }
  };
  Object.defineProperty(CastleKingdomOverviewScreen.prototype, "screenDisp", {
    get: function () {
      return this.disp.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomOverviewScreen.prototype.isMcKingdomMC = function (__s109param0) {
    return __s109param0 instanceof __s0local0 && __s109param0.name && __s109param0.name.indexOf(CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX) > -1;
  };
  CastleKingdomOverviewScreen.prototype.onUserLevelUp = function (__s111param0) {
    this.updateKingdomMap();
  };
  CastleKingdomOverviewScreen.NAME = "CastleKingdomOverviewScreen";
  CastleKingdomOverviewScreen.SCREEN_ASSET_NAME = "CastleKingdomOverview";
  CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX = "mc_kingdom_";
  CastleKingdomOverviewScreen.MC_FLAG_PREFIX = "mc_kingdomFlag_";
  CastleKingdomOverviewScreen.MC_RUBY_LOCK_PREFIX = "mc_rubyLock_";
  return CastleKingdomOverviewScreen;
}(__dep_export_CastleScreen.CastleScreen);
exports.CastleKingdomOverviewScreen = __s0local5;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHandleKingdomDialog = require("gge-module:export_CastleHandleKingdomDialog");
var __dep_export_CastleHandleKingdomDialogProperties = require("gge-module:export_CastleHandleKingdomDialogProperties");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_CastleStormIslandsMainDialogProperties = require("gge-module:export_CastleStormIslandsMainDialogProperties");

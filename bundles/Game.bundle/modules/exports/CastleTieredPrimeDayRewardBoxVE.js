Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleHardCurrencyHelper = require("gge-module:export_CastleHardCurrencyHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleTieredPrimeDayRewardBoxVE(__s3param0, __s3param1, __s3param2) {
    this._tier = 0;
    this._isCollected = false;
    this._collectableRenderList = [];
    this._rewardVO = __s3param2;
    this._disp = __s3param0;
    this._tier = __s3param1;
    this._isCollected = false;
    this.setupSubBoxes();
    this.setupShadow();
    this.setupRewardBox();
    this.displayRewards();
    this.setupTexts();
  }
  CastleTieredPrimeDayRewardBoxVE.prototype.setupTexts = function () {
    this.textFieldManager.registerTextField(this.activeBoxMC.container_txt.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_paymentTier_worth"));
    this.textFieldManager.registerTextField(this.activeBoxMC.container_txt.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._rewardVO.displayTypeTextID, [this._rewardVO.shownValue, __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.currencyTextID]));
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupSubBoxes = function () {
    var __s7local0 = [];
    __s7local0.push(this._disp.box_t1_small);
    __s7local0.push(this._disp.box_t1_big);
    __s7local0.push(this._disp.box_t2_small);
    __s7local0.push(this._disp.box_t2_big);
    __s7local0.push(this._disp.box_t3_small);
    __s7local0.push(this._disp.box_t3_big);
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          __s7local3.visible = false;
        }
      }
    }
    var __s7local4 = (this._tier - 1) * 2;
    if (this.isBigBox) {
      __s7local4++;
    }
    this._activeBoxMC = __s7local0[__s7local4];
    this._activeBoxMC.visible = true;
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupShadow = function () {
    if (this._isCollected) {
      switch (this._rewardVO.rewardList.length) {
        case 2:
          this._disp.mc_shadows.gotoAndStop("small");
          break;
        case 4:
          this._disp.mc_shadows.gotoAndStop("medium");
          break;
        case 6:
          this._disp.mc_shadows.gotoAndStop("big");
          break;
        default:
          throw new Error("CastleTieredPrimeDayRewardBoxVE.setupShadow() recieved an amount of rewards that are not supported");
      }
    } else {
      this._disp.mc_shadows.gotoAndStop("empty");
    }
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupRewardBox = function () {
    switch (this._rewardVO.rewardList.length) {
      case 2:
        this._disp.mc_rewards.gotoAndStop("small");
        this._activeRewardsMC = this._disp.mc_rewards.reward_2;
        break;
      case 4:
        this._disp.mc_rewards.gotoAndStop("medium");
        this._activeRewardsMC = this._disp.mc_rewards.reward_4;
        break;
      case 6:
        this._disp.mc_rewards.gotoAndStop("big");
        this._activeRewardsMC = this._disp.mc_rewards.reward_6;
        break;
      default:
        throw new Error("CastleTieredPrimeDayRewardBoxVE.setupRewardBox() recieved an amount of rewards that are not supported");
    }
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.displayRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this._activeRewardsMC, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this._rewardVO.rewardList, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_WIDTH, CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_HEIGHT)), function preRenderFunc(__s24param0) {
      if (__s24param0.itemVO && __s24param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.GALLANTRY_BOOSTER) {
        __s24param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 3;
        __s24param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.scale = 0.8;
      }
    });
  };
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "smallBoxWidth", {
    get: function () {
      return this._disp.box_t1_small.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "bigBoxWidth", {
    get: function () {
      return this._disp.box_t1_big.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "width", {
    get: function () {
      if (this.isBigBox) {
        return this.bigBoxWidth;
      } else {
        return this.smallBoxWidth;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "isBigBox", {
    get: function () {
      return this._rewardVO.rewardList.length > 4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "activeBoxMC", {
    get: function () {
      return this._activeBoxMC;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardBoxVE.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.destroyRenderList = function (__s43param0) {
    if (__s43param0) {
      for (var __s43local0 = 0; __s43local0 < __s43param0.length; ++__s43local0) {
        __s43param0[__s43local0].destroy();
      }
      __s43param0.length = 0;
    }
  };
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "isCollected", {
    get: function () {
      return this._isCollected;
    },
    set: function (__s54param0) {
      this._isCollected = __s54param0;
      this.setupShadow();
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardBoxVE.__initialize_static_members = function () {
    CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_WIDTH = 55;
    CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_HEIGHT = 50;
  };
  return CastleTieredPrimeDayRewardBoxVE;
}();
exports.CastleTieredPrimeDayRewardBoxVE = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

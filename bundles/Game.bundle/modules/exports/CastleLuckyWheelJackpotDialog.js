Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelJackpotDialog() {
    var __s3local0 = this;
    __s3local0._isRewarded = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleLuckyWheelJackpotDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelJackpotDialog, __s1param0);
  CastleLuckyWheelJackpotDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_reward]);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reward.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dailyQuests_activityGift"));
    this._cardList = [];
    this._itxtTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastleLuckyWheelJackpotDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setTitle("dialog_luckyWheel_jackpotCurrent");
    this._isRewarded = false;
    this.setRewardBtn();
    this.createCards();
    this.setCards();
    this.initAnimation();
  };
  CastleLuckyWheelJackpotDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this.destroyCards();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  CastleLuckyWheelJackpotDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_reward:
        this.dialogProperties.fillRewardCallback();
        this.hide();
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.createCards = function () {
    var __s14local0 = this.dialogProperties.eventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD ? "JackpotCard_SalesDays" : "JackpotCard";
    var __s14local1 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s14local0);
    this._cardList.push(new __dep_export_CastleLuckyWheelJackpotCard.CastleLuckyWheelJackpotCard(new __s14local1(), 0, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO, this.bindFunction(this.onAnimationCompleted)), new __dep_export_CastleLuckyWheelJackpotCard.CastleLuckyWheelJackpotCard(new __s14local1(), 1, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO), new __dep_export_CastleLuckyWheelJackpotCard.CastleLuckyWheelJackpotCard(new __s14local1(), 2, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO));
    for (var __s14local2 = 0; __s14local2 < this._cardList.length; __s14local2++) {
      var __s14local3 = this._cardList[__s14local2];
      this.dialogDisp.cardlayer.addChild(__s14local3.disp);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.onAnimationCompleted = function () {
    this.setTitle("dialog_luckyWheel_choosePrice");
  };
  CastleLuckyWheelJackpotDialog.prototype.destroyCards = function () {
    for (var __s20local0 = __dep_exact_f855840627e6e145.int(this._cardList.length - 1); __s20local0 >= 0; __s20local0--) {
      var __s20local1 = this._cardList.splice(__s20local0, 1)[0];
      this.dialogDisp.cardlayer.removeChild(__s20local1.disp);
      __s20local1.destroy();
      __s20local1.disp = null;
      __s20local1 = null;
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.onClickJackpotCard = function (__s24param0) {
    if (!this._isRewarded) {
      this.setWinnerCard(this._cardList[__s24param0]);
      this.removeMatchingReward();
      for (var __s24local0 = this._cardList.length, __s24local1 = 0; __s24local1 < __s24local0; __s24local1++) {
        var __s24local2 = this._cardList[__s24local1];
        if (__s24local2.isClosed()) {
          this.setLoosingCard(__s24local2);
        }
      }
      this._isRewarded = true;
      this.setRewardBtn();
      this.setTitle("dialog_luckyWheel_congratulations");
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.setWinnerCard = function (__s30param0) {
    __s30param0.setOpened(this.dialogProperties.winningItem);
    __s30param0.setWinningAppearance();
  };
  CastleLuckyWheelJackpotDialog.prototype.setLoosingCard = function (__s32param0) {
    var __s32local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathUtils.randomInt(0, this.dialogProperties.rewards.length - 1));
    var __s32local1 = this.dialogProperties.rewards.getItemByIndex(__s32local0);
    this.dialogProperties.rewards.removeByIndex(__s32local0);
    __s32param0.setOpened(__s32local1);
  };
  CastleLuckyWheelJackpotDialog.prototype.setCards = function () {
    var __s34local0;
    var __s34local1 = this.dialogProperties.rewards.clone();
    for (var __s34local2 = 0; __s34local2 < this._cardList.length; __s34local2++) {
      __s34local0 = __s34local1.getItemByIndex(__s34local2);
      var __s34local3 = this._cardList[__s34local2];
      __s34local3.x = -CastleLuckyWheelJackpotDialog.X_DIST + __s34local2 * CastleLuckyWheelJackpotDialog.X_DIST;
      __s34local3.show();
      __s34local3.setOpened(__s34local0);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.initAnimation = function () {
    for (var __s38local0 = 0; __s38local0 < this._cardList.length; __s38local0++) {
      this._cardList[__s38local0].setAnimation(0, 1.5, true, false);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.setRewardBtn = function () {
    this.dialogDisp.btn_reward.visible = this._isRewarded;
  };
  CastleLuckyWheelJackpotDialog.prototype.setTitle = function (__s44param0) {
    this._itxtTitle.textContentVO.textId = __s44param0;
  };
  Object.defineProperty(CastleLuckyWheelJackpotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelJackpotDialog.prototype.removeMatchingReward = function () {
    var __s48local0;
    var __s48local1 = 0;
    var __s48local2 = this.dialogProperties.rewards.length;
    var __s48local3 = this.dialogProperties.winningItem;
    for (__s48local1 = 0; __s48local1 < __s48local2; __s48local1++) {
      __s48local0 = this.dialogProperties.rewards.getItemByIndex(__s48local1);
      if (__s48local3.itemType == __dep_export_CollectableEnum.CollectableEnum.GEM && __s48local0.itemType == __dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM) {
        this.dialogProperties.rewards.removeByIndex(__s48local1);
        return;
      }
      if (__s48local3.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS && __s48local0.itemType == __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM) {
        this.dialogProperties.rewards.removeByIndex(__s48local1);
        return;
      }
      if (__s48local3.itemType.serverKey == __s48local0.itemType.serverKey) {
        if (__s48local3.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE) {
          if (__s48local3.equipmentVO.uniqueID == __s48local0.equipmentVO.uniqueID) {
            this.dialogProperties.rewards.removeByIndex(__s48local1);
            return;
          }
          continue;
        }
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s48local3, "ACollectableItemEquipmentVO")) {
          if (__s48local3.equipmentVO.rareID == __s48local0.equipmentVO.rareID) {
            this.dialogProperties.rewards.removeByIndex(__s48local1);
            return;
          }
          continue;
        }
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s48local3, "CollectableItemRelicVO")) {
          if (__s48local0.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_ALL) {
            this.dialogProperties.rewards.removeByIndex(__s48local1);
            return;
          }
          var __s48local4 = __s48local3.vo.relicInfoVO;
          var __s48local5 = __s48local0.vo.relicInfoVO;
          if (__s48local4.relicTypeId == __s48local5.relicTypeId) {
            this.dialogProperties.rewards.removeByIndex(__s48local1);
            return;
          }
        }
        if (__s48local3.isSameAs(__s48local0)) {
          this.dialogProperties.rewards.removeByIndex(__s48local1);
          return;
        }
      }
    }
  };
  CastleLuckyWheelJackpotDialog.NAME = "CastleLuckyWheelJackpotDialog";
  CastleLuckyWheelJackpotDialog.X_DIST = 187;
  return CastleLuckyWheelJackpotDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleLuckyWheelJackpotDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleLuckyWheelJackpotCard = require("gge-module:export_CastleLuckyWheelJackpotCard");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

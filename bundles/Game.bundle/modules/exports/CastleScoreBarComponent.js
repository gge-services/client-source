Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleScoreBarComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.disp = __s3param0;
    __s3local0._scorebarProperties = __s3param1;
    __s3local0.displayRewardList();
    __s3local0.setLabels();
    __s3local0.setDescriptions();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleScoreBarComponent, __s1param0);
  CastleScoreBarComponent.prototype.displayRewardList = function () {
    var __s5local0;
    var __s5local1;
    this.destroyCollectableRenderList();
    for (var __s5local2 = 0; __s5local2 < this.numTotalRewards; __s5local2++) {
      var __s5local3 = this._scorebarProperties.getReward(__s5local2);
      var __s5local4 = this.disp["reward" + __s5local2];
      if (__s5local3) {
        var __s5local5 = __s5local3.length;
        this.setTagsVisibility(__s5local2, __s5local5);
        var __s5local6 = __s5local4["tags" + __s5local5];
        if (__s5local6) {
          for (var __s5local7 = 0; __s5local7 < __s5local5; ++__s5local7) {
            var __s5local8;
            var __s5local9 = __s5local6["tag" + __s5local7];
            var __s5local10 = __s5local3.getItemByIndex(__s5local7);
            if (__s5local9.mc_unit.getChildByName(CastleScoreBarComponent.EQUIPMENT_NAME)) {
              __s5local9.mc_unit.removeChild(__s5local9.mc_unit.getChildByName(CastleScoreBarComponent.EQUIPMENT_NAME));
            }
            (__s5local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local9.mc_unit)).addIconMc(__s5local9.mc_unit.mc_empty);
            __s5local0.addInfoBtn(__s5local9.btn_info);
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local10, "ACollectableItemEquipmentVO") && __s5local10.equipmentVO && !__s5local0.equipmentBackgroundMc && __s5local10.itemType.serverKey != __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS.serverKey) {
              (__s5local8 = new Library.CastleInterfaceElements.CastleEquipment_Item()).name = CastleScoreBarComponent.EQUIPMENT_NAME;
              __s5local8.x = __s5local9.mc_unit.mc_empty.x;
              __s5local8.y = __s5local9.mc_unit.mc_empty.y;
              __s5local9.mc_unit.addChild(__s5local8);
              __s5local9.mc_unit.addChild(__s5local9.mc_unit.mc_empty);
              __s5local0.addEquipmentBgMc(__s5local8);
            }
            var __s5local11 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(this.scorebarProperties.collectableRenderOption, this.scorebarProperties.rewardIconDimension);
            __s5local11.tooltip.showEquipmentCountdown = false;
            __s5local1 = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s5local0, __s5local10, __s5local11, this.scorebarProperties.preRenderFunc);
            if (__s5local8) {
              __s5local8.width = __s5local8.height = __s5local1.options.icon.dimension.x + CastleScoreBarComponent.EQ_FRAME_OFFSET;
            }
          }
          __s5local4.mouseChildren = true;
        }
      }
    }
  };
  CastleScoreBarComponent.prototype.setTagsVisibility = function (__s16param0, __s16param1) {
    for (var __s16local0 = 1; __s16local0 <= this._scorebarProperties.maxItemsPerReward; ++__s16local0) {
      if (this.disp["reward" + __s16param0]["tags" + __s16local0]) {
        this.disp["reward" + __s16param0]["tags" + __s16local0].visible = __s16local0 == __s16param1;
      }
    }
  };
  CastleScoreBarComponent.prototype.setLabels = function () {
    if (this._scorebarProperties.hasLabels()) {
      var __s21local0 = undefined;
      for (var __s21local1 = 0; __s21local1 < this.numThresholdRewards + this.numRankRewards; __s21local1++) {
        if (this.disp["reward" + __s21local1].mc_text && __s21local1 < this._scorebarProperties.numLabels) {
          (__s21local0 = this.disp["reward" + __s21local1].mc_text.tf_text).text = "";
          __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s21local0, this._scorebarProperties.getLabel(__s21local1)).autoFitToBounds = true;
        }
      }
    }
  };
  CastleScoreBarComponent.prototype.setDescriptions = function () {
    if (this._scorebarProperties.hasDecriptions()) {
      for (var __s27local0 = 0; __s27local0 < this.numThresholdRewards + this.numRankRewards; __s27local0++) {
        var __s27local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp["reward" + __s27local0].txt_copy, this._scorebarProperties.getDescription(__s27local0));
        __s27local1.autoFitToBounds = true;
        __s27local1.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      }
    }
  };
  CastleScoreBarComponent.prototype.update = function (__s32param0) {
    if (__s32param0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this._scorebarProperties.getOwnPointsText(__s32param0.ownPoints));
      this.scoreBarProgress = __s32param0;
      this.updateThresholdRewards();
      this.updateRankRewards();
    }
  };
  CastleScoreBarComponent.prototype.updateThresholdRewards = function () {
    for (var __s35local0 = 0; __s35local0 < this.numThresholdRewards; __s35local0++) {
      this.updateReward(__s35local0, this._scorebarProperties.thresholdProgress(__s35local0, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints));
    }
  };
  CastleScoreBarComponent.prototype.updateRankRewards = function () {
    for (var __s39local0 = this.numThresholdRewards; __s39local0 < this.numTotalRewards; __s39local0++) {
      var __s39local1 = __s39local0 - this.numThresholdRewards;
      if (this.scoreBarProgress.topX.length == 0) {
        this.hideReward(__s39local0);
      } else if (__s39local1 >= this.scoreBarProgress.topX.length) {
        this.updateReward(__s39local0, this.scoreBarProgress.ownRank == 1 ? 1 : 0);
      } else {
        this.updateReward(__s39local0, this.rankProgress(__s39local1));
      }
    }
  };
  CastleScoreBarComponent.prototype.hideReward = function (__s46param0) {
    var __s46local0 = this.disp["bar" + __s46param0];
    if (__s46local0) {
      __s46local0.scaleX = 0;
    }
    var __s46local1 = this.disp["reward" + __s46param0];
    if (__s46local1) {
      __s46local1.visible = false;
    }
    var __s46local2 = this.disp.progressBG;
    if (__s46local2) {
      __s46local2.visible = false;
    }
  };
  CastleScoreBarComponent.prototype.updateReward = function (__s51param0, __s51param1) {
    var __s51local0 = this.disp["bar" + __s51param0];
    this.setProgressBar(__s51local0, __s51param1);
    var __s51local1 = __s51param1 == 1;
    this.setRewardReached(__s51param0, __s51local1);
    this.setTooltip(__s51param0, __s51local1);
  };
  CastleScoreBarComponent.prototype.setProgressBar = function (__s53param0, __s53param1) {
    if (__s53param0) {
      switch (this._scorebarProperties.orientation) {
        case CastleScoreBarComponent.ORIENTATION_HORIZONTAL:
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s53param0);
          if (__s53param1 == 1 || __s53param1 == 0) {
            __s53param0.scaleX = __s53param1;
          } else {
            __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s53param0, 0.2, {
              scaleX: __s53param0.scaleX
            }, {
              scaleX: __s53param1
            });
          }
          break;
        case CastleScoreBarComponent.ORIENTATION_VERTICAL:
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(__s53param0);
          if (__s53param1 == 1 || __s53param1 == 0) {
            __s53param0.scaleY = __s53param1;
          } else {
            __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s53param0, 0.2, {
              scaleY: __s53param0.scaleY
            }, {
              scaleY: __s53param1
            });
          }
      }
    }
  };
  CastleScoreBarComponent.prototype.setRewardReached = function (__s61param0, __s61param1) {
    var __s61local0 = this.disp["reward" + __s61param0];
    var __s61local1 = this._scorebarProperties.getReward(__s61param0);
    if (__s61local0 && __s61local1 && __s61local1.length != 0) {
      var __s61local2 = __s61local0["tags" + __s61local1.length];
      if (__s61local2) {
        if (__s61local0.mc_tooltip && __s61local0.mc_tooltip.totalFrames > 1) {
          __s61local0.mc_tooltip.gotoAndStop(__s61param1 ? 2 : 1);
        }
        for (var __s61local3 = 0; __s61local3 < __s61local1.length; ++__s61local3) {
          var __s61local4 = __s61local2["tag" + __s61local3];
          if (__s61local4 && __s61local4.frame) {
            __s61local4.frame.visible = __s61param1;
          }
        }
        if (__s61local0.frame) {
          __s61local0.frame.visible = __s61param1;
        }
      }
    }
  };
  CastleScoreBarComponent.prototype.setTooltip = function (__s70param0, __s70param1) {
    var __s70local0 = this.disp["reward" + __s70param0];
    if (__s70local0.mc_toolTipHitBox) {
      __s70local0.mc_toolTipHitBox.toolTipText = this._scorebarProperties.getToolTip(__s70param0, __s70param1);
    } else {
      __s70local0.toolTipText = this._scorebarProperties.getToolTip(__s70param0, __s70param1);
    }
  };
  Object.defineProperty(CastleScoreBarComponent.prototype, "numTotalRewards", {
    get: function () {
      return this.numThresholdRewards + this.numRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreBarComponent.prototype, "numThresholdRewards", {
    get: function () {
      return this._scorebarProperties.numThresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreBarComponent.prototype, "numRankRewards", {
    get: function () {
      return this._scorebarProperties.numRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreBarComponent.prototype.rankProgress = function (__s80param0) {
    if (this.scoreBarProgress.ownRank <= this.scoreBarProgress.topX[__s80param0] && this.scoreBarProgress.ownRank > 0) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleScoreBarComponent.prototype.executeFullUpdate = function () {
    this.displayRewardList();
    this.setLabels();
    this.setDescriptions();
    this.update(this.scoreBarProgress);
  };
  Object.defineProperty(CastleScoreBarComponent.prototype, "scorebarProperties", {
    get: function () {
      return this._scorebarProperties;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreBarComponent.ORIENTATION_HORIZONTAL = 0;
  CastleScoreBarComponent.ORIENTATION_VERTICAL = 1;
  CastleScoreBarComponent.EQ_FRAME_OFFSET = 4;
  CastleScoreBarComponent.EQUIPMENT_NAME = "eqbg";
  return CastleScoreBarComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleScoreBarComponent = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

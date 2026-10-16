Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventRewardScrollItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventRewardScrollItem, __s1param0);
  LongTermPointEventRewardScrollItem.prototype.customFillItem = function () {
    this.destroyCollectableRenderList();
    if (this.longTermPointEventRewardScrollItemVO.collectableList.length > 0) {
      __dep_export_RewardRenderHelper.RewardRenderHelper.renderCollectableList(this, this.disp, this.longTermPointEventRewardScrollItemVO.collectableList);
    } else {
      __dep_exact_9e901e8e2483a22f_2.error("Empty reward list");
    }
    this.changeDecoration();
    this.disp.reward_received_check.visible = this.longTermPointEventRewardScrollItemVO.received;
    this.textFieldManager.registerTextField(this.disp.txt_threshold, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("points", [this.longTermPointEventRewardScrollItemVO.thresholdPoints])).autoFitToBounds = true;
  };
  LongTermPointEventRewardScrollItem.prototype.changeDecoration = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(this.longTermPointEventRewardScrollItemVO.collectableList.length > 1 ? 2 : 1);
    this.longTermPointEventRewardScrollItemVO.skin.textId;
    var __s9local1 = __dep_exact_f855840627e6e145.int(this.longTermPointEventRewardScrollItemVO.skin.id * 2 + __s9local0);
    try {
      this.disp.decoration.gotoAndStop(__s9local1);
    } catch (__s12local0) {
      __dep_exact_9e901e8e2483a22f_2.error("LongTermPointEventRewardScrollItem: decoration movieclip have no '" + __s9local1 + "' label");
    }
  };
  LongTermPointEventRewardScrollItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var __s14local0 = 0; __s14local0 < this._collectableRenderList.length; ++__s14local0) {
        this._collectableRenderList[__s14local0].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "longTermPointEventRewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventRewardScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.LongTermPointEventRewardScrollItem = __s0local0;
var __dep_export_RewardRenderHelper = require("gge-module:export_RewardRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip", "ICollectableRendererList");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DailyQuestConditionVO = require("gge-module:export_DailyQuestConditionVO");
var __s0local0 = function () {
  function DailyQuestVO() {
    this._questID = 0;
    this._isFinished = false;
    this._triggerKingdomID = 0;
    this.isTempServerQuest = false;
    this.addDailyTaskPoints = 0;
  }
  DailyQuestVO.prototype.reset = function () {
    this._isFinished = false;
  };
  DailyQuestVO.prototype.fillFromParamXML = function (__s7param0) {
    this._questID = parseInt(__s7param0.dailyQuestID || "");
    this._triggerKingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("triggerKingdomID", __s7param0, "0", true));
    this.isTempServerQuest = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isTempServerQuest", __s7param0, "0")) == 1;
    this.addDailyTaskPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("addDailyDutyPoints", __s7param0, "0"));
    var __s7local0 = Boolean(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("levelCalculated", __s7param0, "0", false)));
    var __s7local1 = (__s7param0.conditions || "").split("#");
    this._conditions = [];
    for (var __s7local2 = 0; __s7local2 < __s7local1.length; ++__s7local2) {
      var __s7local3 = String(__s7local1[__s7local2]).split("+");
      var __s7local4 = new __dep_export_DailyQuestConditionVO.DailyQuestConditionVO();
      __s7local4.loadFromParamArray(__s7local3);
      __s7local4.levelCalculated = __s7local0;
      __s7local4.questID = this._questID;
      this._conditions[__s7local2] = __s7local4;
    }
    this._isFinished = false;
    this._rewards = __dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s7param0);
  };
  DailyQuestVO.prototype.setProgress = function (__s11param0) {
    for (var __s11local0 = 0; __s11local0 < __s11param0.length; ++__s11local0) {
      this._conditions[__s11local0].conditionCounter = __s11param0[__s11local0];
    }
  };
  DailyQuestVO.prototype.setFinished = function () {
    if (this._conditions != null) {
      for (var __s15local0 = 0, __s15local1 = this._conditions; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.conditionCounter = __s15local2.conditionMaxCounter;
        }
      }
    }
    this._isFinished = true;
  };
  Object.defineProperty(DailyQuestVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "isFinished", {
    get: function () {
      return this._isFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "questID", {
    get: function () {
      return this._questID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "triggerKingdomID", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._triggerKingdomID > -1 ? this._triggerKingdomID : __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID : __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "mapID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestVO.prototype.getQuestName = function () {
    return "dialog_dailyQuests_name_" + this.questID;
  };
  DailyQuestVO.prototype.getQuestDescription = function () {
    var __s37local0;
    for (var __s37local1 = 0; __s37local1 < this._conditions.length; __s37local1++) {
      __s37local0 = this._conditions[__s37local1];
      if (__s37local1 > 0) {
        "\n";
      }
      __s37local0.getConditionText();
    }
    return this.conditions[0].getConditionText();
  };
  DailyQuestVO.prototype.getQuestIcon = function (__s42param0 = false) {
    if (__s42param0) {
      return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.questIconClassName, this.getFilePath(), null, 0, false);
    } else if (this._questClip) {
      return this._questClip.asDisplayObject();
    } else {
      this._questClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.questIconClassName, this.getFilePath(), null, 0, false);
      this._questClip.recycleAsset = false;
      return this._questClip.asDisplayObject();
    }
  };
  Object.defineProperty(DailyQuestVO.prototype, "questIconClassName", {
    get: function () {
      return "DailyQuestIcon_" + this.questID;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.questIconClassName);
  };
  return DailyQuestVO;
}();
exports.DailyQuestVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShowMeQuestVO");

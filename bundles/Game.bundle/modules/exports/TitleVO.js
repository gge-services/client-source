Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function (__s1param0) {
  function TitleVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._titleID = -1;
    __s3local0._titleSystem = "";
    __s3local0._threshold = 0;
    __s3local0._isAForcedTitle = false;
    __s3local0._decay = 0;
    __s3local0._isPositive = false;
    __s3local0._topX = 0;
    __s3local0._previousTitleID = -1;
    __s3local0._rewardID = -1;
    __s3local0._mightValue = -1;
    __s3local0._currentAssigneePID = -1;
    __s3local0._assignmentCooldown = 0;
    __s3local0._nextTitleID = -1;
    __s3local0._orderInSystem = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TitleVO, __s1param0);
  TitleVO.prototype.parseXml = function (__s5param0) {
    this._titleID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("titleID", __s5param0, "-1", true));
    this._titleSystem = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("type", __s5param0, "-1", true);
    this._threshold = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("threshold", __s5param0, "-1", false));
    this._displayType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("displayType", __s5param0, "-1", false);
    this._isAForcedTitle = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("forced", __s5param0, "-1", false)) == 1;
    this._decay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("decay", __s5param0, "-1", false));
    this._isPositive = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isPositive", __s5param0, "-1", false)) == 1;
    this._topX = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("topX", __s5param0, "-1", false));
    this._previousTitleID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("previousTitleID", __s5param0, "-1", false));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "-1", false));
    this._rewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(this._rewardID);
    this._mightValue = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mightValue", __s5param0, "-1"));
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effects", __s5param0, "");
    if (__s5local0 != "") {
      for (var __s5local1 = 0, __s5local2 = __s5local0.split(","); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3.length > 0) {
          var __s5local4 = __s5local3.split("&");
          var __s5local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local4[0]));
          var __s5local6 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local5, __s5local4[1]);
          this._boni.push(__s5local6);
        }
      }
    }
  };
  TitleVO.prototype.parseTI = function (__s11param0) {
    this._assignmentCooldown = __dep_exact_f855840627e6e145.int(__s11param0.TCD);
    this._currentAssigneePID = __dep_exact_f855840627e6e145.int(__s11param0.PID);
    this._currentAssignee = __s11param0.PN;
  };
  TitleVO.prototype.resetAssignment = function () {
    this._assignmentCooldown = 0;
    this._currentAssigneePID = -1;
    this._currentAssignee = "";
  };
  Object.defineProperty(TitleVO.prototype, "titleID", {
    get: function () {
      return this._titleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "titleSystem", {
    get: function () {
      return this._titleSystem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    set: function (__s21param0) {
      this._threshold = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "displayType", {
    get: function () {
      return this._displayType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isAForcedTitle", {
    get: function () {
      return this._isAForcedTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "decay", {
    get: function () {
      return this._decay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isKing", {
    get: function () {
      return this.titleID == 50;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isPositive", {
    get: function () {
      return this._isPositive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isTopXTitle", {
    get: function () {
      return this.topX > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "previousTitleID", {
    get: function () {
      return this._previousTitleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "nextTitleID", {
    get: function () {
      return this._nextTitleID;
    },
    set: function (__s41param0) {
      this._nextTitleID = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "orderInSystem", {
    get: function () {
      return this._orderInSystem;
    },
    set: function (__s45param0) {
      this._orderInSystem = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "currentAssignee", {
    get: function () {
      return this._currentAssignee;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "currentAssigneePID", {
    get: function () {
      return this._currentAssigneePID;
    },
    set: function (__s57param0) {
      this._currentAssigneePID = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "textID", {
    get: function () {
      if (this.titleID == -1) {
        return "";
      } else {
        return String("playerTitle_" + this.titleID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "descriptionTextVO", {
    get: function () {
      if (this.isIslandTitle) {
        var __s63local0 = "";
        for (var __s63local1 = 0, __s63local2 = this.boni; __s63local1 < __s63local2.length; __s63local1++) {
          var __s63local3 = __s63local2[__s63local1];
          if (__s63local3 !== undefined) {
            if (__s63local0 != "") {
              __s63local0 += "\n";
            }
            __s63local0 += __dep_exact_92d05af59ee2ff30_1.Localize.text(__s63local3.effect.defaultTextID, __s63local3.effectValue.textReplacements);
          }
        }
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s63local0);
      }
      return __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleRewardText(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isSuffix", {
    get: function () {
      return this._displayType == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isIslandTitle", {
    get: function () {
      return this._titleSystem == __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "isAssigned", {
    get: function () {
      return this.currentAssigneePID != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TitleVO.prototype, "assignmentCooldown", {
    get: function () {
      return this._assignmentCooldown;
    },
    enumerable: true,
    configurable: true
  });
  return TitleVO;
}(require("gge-module:export_EffectsHandlerVO").EffectsHandlerVO);
exports.TitleVO = __s0local0;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AGlobalLeaderBoardItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AGlobalLeaderBoardItem, __s1param0);
  AGlobalLeaderBoardItem.prototype.updateWithData = function (__s5param0, __s5param1, __s5param2) {
    this._data = __s5param0;
    this._searchScoreID = __s5param1;
    this.getAdditionalData(__s5param2);
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithRank = function (__s7param0, __s7param1) {
    this._data = this.createRankOnlyData(__s7param0);
    this._searchScoreID = "";
    this.getAdditionalData(__s7param1);
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithUnknown = function () {
    this._data = {};
    this._searchScoreID = "";
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithNull = function () {
    this._data = null;
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.getAdditionalData = function (__s13param0) {};
  AGlobalLeaderBoardItem.prototype.update = function () {};
  AGlobalLeaderBoardItem.prototype.createRankOnlyData = function (__s17param0) {
    return {
      R: __s17param0
    };
  };
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "rank", {
    get: function () {
      if (this._data) {
        return this._data.R;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "rankText", {
    get: function () {
      if (this.rank > -1) {
        return __dep_exact_92d05af59ee2ff30.Localize.number(this.rank);
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "playerName", {
    get: function () {
      if (this._data && this._data.P) {
        return this._data.P;
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "allianceName", {
    get: function () {
      if (this._data) {
        return this._data.A || "-";
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "instanceId", {
    get: function () {
      if (this._data) {
        return this._data.I;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "points", {
    get: function () {
      if (this._data && (this._data.S || this._data.S == 0)) {
        return __dep_exact_92d05af59ee2ff30.Localize.number(this._data.S);
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "scoreID", {
    get: function () {
      if (this._data && this._data.SI) {
        return this._data.SI;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "serverName", {
    get: function () {
      var __s47local0 = this;
      var __s47local1 = __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.instanceMap;
      if (!AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP) {
        AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP = new Map();
        __s47local1.forEach(function (__s50param0) {
          return AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.set(__s50param0.instanceLocaId, (AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.get(__s50param0.instanceLocaId) || 0) + 1);
        });
      }
      var __s47local2;
      var __s47local3 = __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.instanceMap.find(function (__s52param0) {
        return __s52param0.instanceId == __s47local0.instanceId;
      });
      if (__s47local3) {
        __s47local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s47local3.instanceLocaId);
        if (AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.get(__s47local3.instanceLocaId) > 1) {
          __s47local2 = __s47local2 + ": " + __s47local3.instanceCountID;
        }
      } else {
        __s47local2 = "???";
      }
      return __s47local2;
    },
    enumerable: true,
    configurable: true
  });
  AGlobalLeaderBoardItem.prototype.isOwnPlayer = function () {
    return this.playerName == __dep_export_CastleModel.CastleModel.userData.userName && this.instanceId == __dep_export_CastleModel.CastleModel.instanceProxy.selectedInstanceVO.instanceId;
  };
  return AGlobalLeaderBoardItem;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.AGlobalLeaderBoardItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

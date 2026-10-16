Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleBuddyListData(__s3param0 = null) {
    this.flashVarBuddyData = "";
    this.flashVarBuddyData = __s3param0;
    this._completeSocialBuddies = [];
    this.getSocialBuddyData();
  }
  CastleBuddyListData.prototype.getSocialBuddyData = function () {
    this._completeSocialBuddies = [];
    var __s5local0 = [];
    if (this.flashVarBuddyData) {
      __s5local0 = this.flashVarBuddyData.split(CastleBuddyListData.DELIMITER1);
    }
    if (this.flashVarBuddyData && this.flashVarBuddyData != "" && __s5local0[0] != "") {
      var __s5local1 = __s5local0[0].split(CastleBuddyListData.DELIMITER2);
      if (__s5local1[0] != "") {
        var __s5local2 = __s5local0[1].split(CastleBuddyListData.DELIMITER2);
        var __s5local3 = __s5local0[2].split(CastleBuddyListData.DELIMITER2);
        for (var __s5local4 = 0; __s5local4 < __s5local1.length; __s5local4++) {
          var __s5local5 = new __dep_export_BuddyVO.BuddyVO();
          __s5local5.pln = String(__s5local1[__s5local4]);
          __s5local5.thumbUrl = __s5local2[__s5local4];
          __s5local5.playerName = __s5local3[__s5local4];
          this._completeSocialBuddies.push(__s5local5);
        }
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent(__dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent.CHANGE_BUDDYDATA));
      }
    } else {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent(__dep_export_CastleBuddyListDataEvent.CastleBuddyListDataEvent.CHANGE_BUDDYDATA));
    }
  };
  CastleBuddyListData.prototype.reset = function () {
    this._completeSocialBuddies = [];
  };
  Object.defineProperty(CastleBuddyListData.prototype, "socialBuddyList", {
    get: function () {
      return this._completeSocialBuddies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddyListData.prototype, "amountSocialFriends", {
    get: function () {
      return this._completeSocialBuddies.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddyListData.prototype, "amountAllFriends", {
    get: function () {
      return this._completeSocialBuddies.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuddyListData.__initialize_static_members = function () {
    CastleBuddyListData.DELIMITER1 = "|||";
    CastleBuddyListData.DELIMITER2 = "|";
    CastleBuddyListData.INGAMEBUDDIES = 0;
  };
  return CastleBuddyListData;
}();
exports.CastleBuddyListData = __s0local0;
var __dep_export_CastleBuddyListDataEvent = require("gge-module:export_CastleBuddyListDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_BuddyVO = require("gge-module:export_BuddyVO");
__s0local0.__initialize_static_members();

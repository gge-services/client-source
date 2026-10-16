Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_C2SDeleteAllianceBookmark = require("gge-module:export_C2SDeleteAllianceBookmark");
var __dep_export_C2SDeleteBookmark = require("gge-module:export_C2SDeleteBookmark");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBookmarkHelper = require("gge-module:export_CastleBookmarkHelper");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __s0local0 = function (__s1param0) {
  function CastleBookmarkData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._worldmapBookmarks = [];
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onSpecialEventRemoved));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBookmarkData, __s1param0);
  Object.defineProperty(CastleBookmarkData.prototype, "worldmapBookmarks", {
    get: function () {
      return this._worldmapBookmarks;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.indexOfBookmarkByCoordinates = function (__s7param0, __s7param1, __s7param2) {
    for (var __s7local0 = 0; __s7local0 < this._worldmapBookmarks.length; ++__s7local0) {
      var __s7local1 = this._worldmapBookmarks[__s7local0];
      if (this.isBookmarkForPosition(__s7local1, __s7param0, __s7param1, __s7param2)) {
        return __s7local0;
      }
    }
    return -1;
  };
  CastleBookmarkData.prototype.isBookmarkForPosition = function (__s12param0, __s12param1, __s12param2, __s12param3) {
    return __s12param0 != null && __s12param0.kingdomId == __s12param1 && __s12param2 == __s12param0.posX && __s12param3 == __s12param0.posY;
  };
  CastleBookmarkData.prototype.parseBookmarkObject = function (__s14param0) {
    if (__s14param0) {
      __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfoArray([__s14param0.OI]);
      var __s14local0 = new __dep_export_CastleWorldmapBookmarkVO.CastleWorldmapBookmarkVO();
      __s14local0.parseParamObject(__s14param0);
      return __s14local0;
    }
    return null;
  };
  CastleBookmarkData.prototype.onSpecialEventRemoved = function (__s17param0) {
    var __s17local0 = __s17param0.specialEventVO;
    if (CastleBookmarkData.EVENT_BOOKMARKS_TO_AUTO_DELETE.indexOf(__s17local0.eventId) != -1 && __dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(__dep_export_ClientConstEvent.ClientConstEvent.EVENT_TO_AREA_TYPE, __s17local0.eventId)) {
      var __s17local1 = this._worldmapBookmarks.filter(this.createFilterByClientRemovableBookmarks(__s17local0));
      this.deleteBookmarks(__s17local1, false);
    }
  };
  CastleBookmarkData.prototype.createFilterByClientRemovableBookmarks = function (__s20param0) {
    return function (__s22param0) {
      var __s22local0 = [];
      for (var __s22local1 = 1; __s22local1 < arguments.length; __s22local1++) {
        __s22local0[__s22local1 - 1] = arguments[__s22local1];
      }
      return __s22param0.worldmapObjectVO != null && __dep_export_ClientConstEvent.ClientConstEvent.EVENT_TO_AREA_TYPE.get(__s20param0.eventId) == __s22param0.worldmapObjectVO.areaType;
    };
  };
  CastleBookmarkData.createBookmarkFromWorldmapObjectVO = function (__s26param0) {
    var __s26local0 = new __dep_export_CastleWorldmapBookmarkVO.CastleWorldmapBookmarkVO();
    __s26local0.kingdomId = __s26param0.kingdomID;
    __s26local0.posX = __s26param0.absAreaPosX;
    __s26local0.posY = __s26param0.absAreaPosY;
    __s26local0.worldmapObjectVO = __s26param0;
    if (__s26param0.ownerInfo && __s26param0.ownerInfo.playerID >= 0) {
      __s26local0.name = __s26param0.ownerInfo.playerName;
    } else {
      __s26local0.name = CastleBookmarkData.getCoordinateString(__s26local0);
    }
    __s26local0.type = __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND;
    return __s26local0;
  };
  CastleBookmarkData.prototype.parse_BAD = function (__s30param0) {
    this._worldmapBookmarks.push(this.parseBookmarkObject(__s30param0));
    this.dispatchEvent(new __dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.parse_BCH = function (__s32param0) {
    var __s32local0 = this.parseBookmarkObject(__s32param0);
    var __s32local1 = this.indexOfBookmarkByCoordinates(__s32local0.kingdomId, __s32local0.posX, __s32local0.posY);
    this._worldmapBookmarks[__s32local1] = __s32local0;
    this.dispatchEvent(new __dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.parse_BDE = function (__s34param0) {
    if (__s34param0.BM) {
      for (var __s34local0 = 0, __s34local1 = __s34param0.BM; __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        if (__s34local2 !== undefined) {
          this.removeBookmark(__s34local2.K, __s34local2.X, __s34local2.Y);
        }
      }
    } else {
      this.removeBookmark(__s34param0.K, __s34param0.X, __s34param0.Y);
    }
    this.dispatchEvent(new __dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.prototype.removeBookmark = function (__s41param0, __s41param1, __s41param2) {
    var __s41local0 = this.indexOfBookmarkByCoordinates(__s41param0, __s41param1, __s41param2);
    this._worldmapBookmarks.splice(__s41local0, 1);
  };
  CastleBookmarkData.prototype.parse_GBL = function (__s43param0) {
    this._worldmapBookmarks = [];
    var __s43local0;
    var __s43local1 = 0;
    if (__s43param0.BL) {
      var __s43local2 = __s43param0.BL;
      for (__s43local1 = 0; __s43local1 < __s43local2.length; ++__s43local1) {
        __s43local0 = this.parseBookmarkObject(__s43local2[__s43local1]);
        this._worldmapBookmarks.push(__s43local0);
      }
    }
    if (__s43param0.ABL) {
      var __s43local3 = __s43param0.ABL;
      for (__s43local1 = 0; __s43local1 < __s43local3.length; ++__s43local1) {
        __s43local0 = this.parseBookmarkObject(__s43local3[__s43local1]);
        this._worldmapBookmarks.push(__s43local0);
      }
    }
    this.dispatchEvent(new __dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED));
  };
  CastleBookmarkData.isBookmarkableForPlayer = function (__s51param0) {
    return __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForPlayer(__s51param0);
  };
  CastleBookmarkData.isBookmarkableForAlliance = function (__s53param0) {
    return !!__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleBookmarkHelper.CastleBookmarkHelper.isBookmarkableForAlliance(__s53param0);
  };
  CastleBookmarkData.getCoordinateString = function (__s55param0) {
    return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COORDS, [__s55param0.posX, __s55param0.posY], true);
  };
  CastleBookmarkData.prototype.getFilteredBookmarks = function (__s57param0) {
    var __s57local0 = this._worldmapBookmarks.filter(this.byMultipleTypes(__s57param0));
    __s57local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByBookmarks);
    return __s57local0;
  };
  CastleBookmarkData.prototype.byMultipleTypes = function (__s59param0) {
    return function (__s61param0) {
      var __s61local0 = [];
      for (var __s61local1 = 1; __s61local1 < arguments.length; __s61local1++) {
        __s61local0[__s61local1 - 1] = arguments[__s61local1];
      }
      return __s59param0.indexOf(__s61param0.type) != -1;
    };
  };
  CastleBookmarkData.prototype.deleteBookmark = function (__s65param0, __s65param1 = false) {
    if (__s65param0.isPlayerBookmark) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__dep_export_C2SDeleteBookmark.C2SDeleteBookmark.createFromVo(__s65param0));
    } else if (__s65param0.isAllianceBookmark) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__dep_export_C2SDeleteAllianceBookmark.C2SDeleteAllianceBookmark.createFromVo(__s65param0, __s65param1));
    }
  };
  CastleBookmarkData.prototype.deleteBookmarks = function (__s69param0, __s69param1 = false) {
    var __s69local0 = [];
    var __s69local1 = [];
    if (__s69param0 != null) {
      for (var __s69local2 = 0, __s69local3 = __s69param0; __s69local2 < __s69local3.length; __s69local2++) {
        var __s69local4 = __s69local3[__s69local2];
        if (__s69local4 !== undefined) {
          if (__s69local4.isPlayerBookmark) {
            __s69local0.push(__dep_export_C2SDeleteBookmark.C2SDeleteBookmark.voToCommandContent(__s69local4));
          } else if (__s69local4.isAllianceBookmark) {
            __s69local1.push(__dep_export_C2SDeleteAllianceBookmark.C2SDeleteAllianceBookmark.voToCommandContent(__s69local4, __s69param1));
          }
        }
      }
    }
    if (__s69local0.length > 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDeleteBookmark.C2SDeleteBookmark(__s69local0));
    }
    if (__s69local1.length > 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDeleteAllianceBookmark.C2SDeleteAllianceBookmark(__s69local1));
    }
  };
  CastleBookmarkData.prototype.getBookmarkForWMO = function (__s79param0, __s79param1 = null) {
    var __s79local0 = this.getBookmarksForWMO(__s79param0, __s79param1);
    if (__s79local0.length > 0) {
      return __s79local0[0];
    } else {
      return null;
    }
  };
  CastleBookmarkData.prototype.getBookmarksForWMO = function (__s83param0, __s83param1 = null) {
    var __s83local0 = [];
    if (__s83param0) {
      if (this._worldmapBookmarks != null) {
        for (var __s83local1 = 0, __s83local2 = this._worldmapBookmarks; __s83local1 < __s83local2.length; __s83local1++) {
          var __s83local3 = __s83local2[__s83local1];
          if (__s83local3 !== undefined && this.isBookmarkForPosition(__s83local3, __s83param0.kingdomID, __s83param0.absAreaPosX, __s83param0.absAreaPosY)) {
            __s83local0.push(__s83local3);
          }
        }
      }
      if (__s83param1 != null) {
        __s83local0 = __s83local0.filter(this.byMultipleTypes(__s83param1));
      }
      __s83local0.sort(function (__s91param0, __s91param1) {
        return -__s91param0.priority + __s91param1.priority;
      });
    }
    return __s83local0;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "playerBookmarks", {
    get: function () {
      return this._worldmapBookmarks.filter(this.bindFunction(this.byPlayerBookmarks));
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.byPlayerBookmarks = function (__s95param0) {
    var __s95local0 = [];
    for (var __s95local1 = 1; __s95local1 < arguments.length; __s95local1++) {
      __s95local0[__s95local1 - 1] = arguments[__s95local1];
    }
    return __s95param0.isPlayerBookmark;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "numPlayerBookmarks", {
    get: function () {
      return this.playerBookmarks.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "isPlayerListFull", {
    get: function () {
      return this.playerBookmarks.length >= __dep_exact_26a421b704832cff_2.PlayerConst.BOOKMARKS_MAX_ENTRYS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "allianceBookmarks", {
    get: function () {
      return this._worldmapBookmarks.filter(this.bindFunction(this.byAllianceBookmarks));
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.byAllianceBookmarks = function (__s105param0) {
    var __s105local0 = [];
    for (var __s105local1 = 1; __s105local1 < arguments.length; __s105local1++) {
      __s105local0[__s105local1 - 1] = arguments[__s105local1];
    }
    return __s105param0.isAllianceBookmark;
  };
  Object.defineProperty(CastleBookmarkData.prototype, "maxAllianceBookmarks", {
    get: function () {
      return __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MAX_ENTRIES;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBookmarkData.prototype, "isAllianceListFull", {
    get: function () {
      return this.allianceBookmarks.length >= __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MAX_ENTRIES;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkData.prototype.getWorldmapBookmarksByKingdomID = function (__s113param0) {
    var __s113local0 = [];
    if (this._worldmapBookmarks != null) {
      for (var __s113local1 = 0, __s113local2 = this._worldmapBookmarks; __s113local1 < __s113local2.length; __s113local1++) {
        var __s113local3 = __s113local2[__s113local1];
        if (__s113local3 !== undefined && __s113local3.kingdomId == __s113param0) {
          __s113local0.push(__s113local3);
        }
      }
    }
    return __s113local0;
  };
  CastleBookmarkData.prototype.getAllianceBookmarkSortIndexByType = function (__s119param0) {
    var __s119local0 = 0;
    switch (__s119param0) {
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        __s119local0 = 0;
        break;
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        __s119local0 = 1;
        break;
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        __s119local0 = 2;
    }
    return __s119local0;
  };
  CastleBookmarkData.__initialize_static_members = function () {
    CastleBookmarkData.EVENT_BOOKMARKS_TO_AUTO_DELETE = [__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_DUNGEON];
  };
  return CastleBookmarkData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleBookmarkData = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleWorldmapBookmarkVO = require("gge-module:export_CastleWorldmapBookmarkVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
__s0local0.__initialize_static_members();

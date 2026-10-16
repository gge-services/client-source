Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_C2SGetCastleProductionDataVO = require("gge-module:export_C2SGetCastleProductionDataVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CastleTitleData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.amountOfPossibleTitles = 0;
    __s3local0._allPossibleTitles = new Map();
    __s3local0._allTitlesBerimondByOrder = [];
    __s3local0._allTitlesFameByOrder = [];
    __s3local0._allTitlesIslandByOrder = [];
    __s3local0._allTitlesAllianceCityByOrder = [];
    __s3local0._thisUsersTitlesBerimondByOrder = [];
    __s3local0._thisUsersTitlesFameByOrder = [];
    __s3local0._mixedIslandTitles = [];
    __s3local0._thisUsersCurrentIslandTitle = CastleTitleData.NULL_TITLE;
    __s3local0._thisUsersCurrentAllianceCityTitle = CastleTitleData.NULL_TITLE;
    __s3local0._thisUsersGloryPoints = 0;
    __s3local0._thisUsersBraveryPoints = 0;
    __s3local0._thisUsersIslandPoints = 0;
    __s3local0._thisUsersHighestEverGloryPoints = 0;
    __s3local0._thisUsersHighestEverBraveryPoints = 0;
    __s3local0._topXGloryResetTimestamp = 0;
    __s3local0._topXBraveryResetTimestamp = 0;
    __s3local0._currentTopXRankBerimond = 0;
    __s3local0._currentTopXRankGlory = 0;
    __s3local0._currentIslandTitleID = 0;
    __s3local0._currentAllianceCityTitleID = 0;
    __s3local0.parseFromXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleData, __s1param0);
  CastleTitleData.prototype.parseFromXML = function (__s5param0) {
    this.amountOfPossibleTitles = 0;
    this._mixedIslandTitles = [];
    for (var __s5local0 = 0, __s5local1 = __s5param0.titles; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_TitleVO.TitleVO();
        __s5local3.parseXml(__s5local2);
        this._allPossibleTitles.set(__s5local3.titleID, __s5local3);
        this.amountOfPossibleTitles++;
      }
    }
    this.setupNextTitles();
    this.orderTitlesInSystem(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE, this._allTitlesBerimondByOrder);
    this.orderTitlesInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE, this._allTitlesFameByOrder);
    this.orderTitlesInSystem(__dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE, this._allTitlesIslandByOrder);
  };
  CastleTitleData.prototype.setupNextTitles = function () {
    if (this._allPossibleTitles != null) {
      for (var __s10local0 = 0, __s10local1 = Array.from(this._allPossibleTitles.values()); __s10local0 < __s10local1.length; __s10local0++) {
        var __s10local2 = __s10local1[__s10local0];
        if (__s10local2 !== undefined) {
          if (__s10local2.previousTitleID != -1) {
            this._allPossibleTitles.get(__s10local2.previousTitleID).nextTitleID = __s10local2.titleID;
          }
          if (__s10local2.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ISLAND_KING])) {
            this._islandKingTitle = __s10local2;
          }
        }
      }
    }
  };
  CastleTitleData.prototype.parseO = function (__s18param0) {
    if (__s18param0.OID == __dep_export_CastleModel.CastleModel.userData.playerID) {
      this._currentIslandTitleID = __dep_exact_f855840627e6e145.int(__s18param0.TI);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEilandEvent.CastleEilandEvent(__dep_export_CastleEilandEvent.CastleEilandEvent.NEW_EILAND_TITLE));
    }
  };
  CastleTitleData.prototype.parseAPT = function (__s21param0) {
    if (__s21param0.TI) {
      this._currentIslandTitleID = __dep_exact_f855840627e6e145.int(__s21param0.TI);
      this._thisUsersCurrentIslandTitle = this._allPossibleTitles.get(this._currentIslandTitleID);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleProductionDataVO.C2SGetCastleProductionDataVO());
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEilandEvent.CastleEilandEvent(__dep_export_CastleEilandEvent.CastleEilandEvent.NEW_EILAND_TITLE));
    }
  };
  CastleTitleData.prototype.parseUAR = function (__s24param0) {
    this._suffixTitleSystem = __s24param0.SFX;
    this._prefixTitleSystem = __s24param0.PFX;
    var __s24local0 = __s24param0.BTM;
    var __s24local1 = __s24param0.FTM;
    var __s24local2 = __s24param0.ITM;
    this._currentTopXRankBerimond = __dep_exact_f855840627e6e145.int(__s24local0.CTXT);
    this._currentTopXRankGlory = __dep_exact_f855840627e6e145.int(__s24local1.CTXT);
    this.parseIslandDataFromServer(__s24local2);
    if (__s24param0.ATM !== undefined) {
      this.parseAllianceCityDataFromServer(__s24param0.ATM);
    }
    this._topXGloryResetTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s24local1.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this._topXBraveryResetTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s24local0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.assignTopXThresholds(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE, __s24local1.NTFP);
    this.assignTopXThresholds(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE, __s24local0.NTFP);
    this.assignTop1PlayerID(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE, __s24local1.TOID);
    this.assignTop1PlayerID(__dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE, __s24local0.TOID);
    this._thisUsersTitlesFameByOrder = [];
    this._thisUsersTitlesBerimondByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesFameByOrder, this._thisUsersTitlesFameByOrder, this._thisUsersGloryPoints, this._currentTopXRankGlory);
    this.setupThisUsersTitlesinSystem(this._allTitlesBerimondByOrder, this._thisUsersTitlesBerimondByOrder, this._thisUsersBraveryPoints, this._currentTopXRankBerimond);
    this.dispatchEvent(new __dep_export_CastleTitleDataEvent.CastleTitleDataEvent(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseIslandDataFromServer = function (__s27param0) {
    this.resetIslandTitle();
    var __s27local0 = __s27param0.TID;
    if (__s27local0 > -1) {
      this._currentIslandTitleID = __s27local0;
      this._thisUsersCurrentIslandTitle = this._allPossibleTitles.get(this._currentIslandTitleID) || CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.parseAllianceCityDataFromServer = function (__s30param0) {
    if (this._allTitlesAllianceCityByOrder != null) {
      for (var __s30local0 = 0, __s30local1 = this._allTitlesAllianceCityByOrder; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2 !== undefined) {
          __s30local2.resetAssignment();
        }
      }
    }
    var __s30local3 = -1;
    if (__s30param0.TID !== undefined && __s30param0.PID !== undefined) {
      this._allPossibleTitles.get(__s30param0.TID).currentAssigneePID = __s30param0.PID;
      __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.playerID);
      if (__s30param0.PID == __dep_export_CastleModel.CastleModel.userData.playerID) {
        __s30local3 = __dep_exact_f855840627e6e145.int(__s30param0.TID);
      }
    }
    if (__s30local3 > 0) {
      this._currentAllianceCityTitleID = __s30local3;
      this._thisUsersCurrentAllianceCityTitle = this._allPossibleTitles.get(this._currentAllianceCityTitleID);
    } else {
      this._currentAllianceCityTitleID = -1;
      this._thisUsersCurrentAllianceCityTitle = CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.parseIOT = function (__s40param0) {};
  CastleTitleData.prototype.parseUFA = function (__s42param0) {
    this._thisUsersGloryPoints = __s0local1(__s42param0.CF) ? parseInt(__s42param0.CF) : __s42param0.CF;
    this._thisUsersHighestEverGloryPoints = __s0local1(__s42param0.HF) ? parseInt(__s42param0.HF) : __s42param0.HF;
    this._thisUsersTitlesFameByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesFameByOrder, this._thisUsersTitlesFameByOrder, this._thisUsersGloryPoints, this._currentTopXRankGlory);
    this._thisUsersHighestEverGloryTitle = this.setupThisUsersHighestTitleinSystem(this._allTitlesFameByOrder, this._thisUsersHighestEverGloryPoints);
    this.dispatchEvent(new __dep_export_CastleTitleDataEvent.CastleTitleDataEvent(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseUFP = function (__s44param0) {
    this._thisUsersBraveryPoints = parseInt(__s44param0.CFP);
    this._thisUsersHighestEverBraveryPoints = parseInt(__s44param0.HFP);
    this._thisUsersTitlesBerimondByOrder = [];
    this.setupThisUsersTitlesinSystem(this._allTitlesBerimondByOrder, this._thisUsersTitlesBerimondByOrder, this._thisUsersBraveryPoints, this._currentTopXRankBerimond);
    this._thisUsersHighestEverBraveryTitle = this.setupThisUsersHighestTitleinSystem(this._allTitlesBerimondByOrder, this._thisUsersHighestEverBraveryPoints);
    this.dispatchEvent(new __dep_export_CastleTitleDataEvent.CastleTitleDataEvent(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED));
  };
  CastleTitleData.prototype.parseUHT = function (__s46param0) {
    if (__s46param0) {
      this._topXGloryResetTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s46param0.RS) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this.dispatchEvent(new __dep_export_CastleTitleDataEvent.CastleTitleDataEvent(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED));
    }
  };
  CastleTitleData.prototype.parseSTE = function (__s49param0) {
    if (__s49param0.SFX) {
      this._suffixTitleSystem = __s49param0.SFX;
    }
    if (__s49param0.PFX) {
      this._prefixTitleSystem = __s49param0.PFX;
    }
  };
  CastleTitleData.prototype.assignTop1PlayerID = function (__s53param0, __s53param1) {
    this.getHighestPossibleTitleInSystem(__s53param0).currentAssigneePID = __s53param1;
  };
  CastleTitleData.prototype.assignTopXThresholds = function (__s55param0, __s55param1) {
    var __s55local0 = this.getTitlesFromSystem(__s55param0);
    for (var __s55local1 = 0; __s55local1 < __s55param1.length; __s55local1++) {
      var __s55local2 = __dep_exact_f855840627e6e145.int(__s55param1[__s55local1]);
      __s55local0[__s55local0.length - 1 - __s55local1].threshold = __s55local2;
    }
  };
  CastleTitleData.prototype.setupThisUsersTitlesinSystem = function (__s59param0, __s59param1, __s59param2, __s59param3) {
    if (__s59param0 != null) {
      for (var __s59local0 = 0, __s59local1 = __s59param0; __s59local0 < __s59local1.length; __s59local0++) {
        var __s59local2 = __s59local1[__s59local0];
        if (__s59local2 !== undefined) {
          if ((!!__s59local2.isTopXTitle || !(__s59local2.threshold <= __s59param2)) && (!__s59local2.isTopXTitle || !(__s59param3 > 0) || !(__s59local2.topX >= __s59param3))) {
            break;
          }
          __s59param1.push(__s59local2);
        }
      }
    }
  };
  CastleTitleData.prototype.setupThisUsersHighestTitleinSystem = function (__s66param0, __s66param1) {
    var __s66local0;
    for (var __s66local1 = 0; __s66param0.length > __s66local1 && __s66param0[__s66local1].threshold <= __s66param1;) {
      __s66local0 = __s66param0[__s66local1];
      __s66local1++;
    }
    return __s66local0;
  };
  CastleTitleData.prototype.orderTitlesInSystem = function (__s70param0, __s70param1) {
    var __s70local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    var __s70local1 = 0;
    var __s70local2 = 0;
    if (this._allPossibleTitles != null) {
      for (var __s70local3 = 0, __s70local4 = Array.from(this._allPossibleTitles.values()); __s70local3 < __s70local4.length; __s70local3++) {
        var __s70local5 = __s70local4[__s70local3];
        if (__s70local5 !== undefined && __s70local5.titleSystem == __s70param0) {
          __s70local1++;
          if (__s70local5.previousTitleID < 0) {
            __s70local0 = __s70local5.titleID;
          }
        }
      }
    }
    for (var __s70local6 = this._allPossibleTitles.get(__s70local0); __s70local6 && __s70local2 <= __s70local1;) {
      __s70param1[__s70local2] = __s70local6;
      __s70local6.orderInSystem = __s70local2;
      __s70local2++;
      __s70local6 = this._allPossibleTitles.get(__s70local6.nextTitleID);
    }
  };
  CastleTitleData.prototype.verifyTitleData = function () {
    var __s79local0 = 0;
    if (this._allPossibleTitles != null) {
      for (var __s79local1 = 0, __s79local2 = Array.from(this._allPossibleTitles.values()); __s79local1 < __s79local2.length; __s79local1++) {
        var __s79local3 = __s79local2[__s79local1];
        if (__s79local3 !== undefined && (__s79local3.previousTitleID == -1 && __s79local3.titleSystem != __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE && __s79local0++, !__dep_export_ClientConstTitle.ClientConstTitle.isValidTitleSystem(__s79local3.titleSystem))) {
          throw new Error("CastleTitleData.verifyTitleData ... title has no known system ID:" + __s79local3.titleID);
        }
      }
    }
    if (__s79local0 != 3) {
      __dep_exact_9e901e8e2483a22f.warn("CastleTitleData.verifyTitleData ... we have an incorrect amount Titles Without a PreviosTitle ID!!!");
    }
    if (this._allTitlesBerimondByOrder.length + this._allTitlesFameByOrder.length + this._allTitlesIslandByOrder.length + this._allTitlesAllianceCityByOrder.length != this.amountOfPossibleTitles) {
      throw new Error("CastleTitleData.verifyTitleData ... titleSystem VectorLengths do NOT match totalVectorLength!!! " + this.amountOfPossibleTitles);
    }
  };
  Object.defineProperty(CastleTitleData.prototype, "thisUsersTitles", {
    get: function () {
      return [].concat(this._thisUsersTitlesFameByOrder, this._thisUsersTitlesBerimondByOrder, this.getUsersTitleVectorFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE));
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getTitlesFromSystem = function (__s89param0) {
    switch (__s89param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return this._allTitlesBerimondByOrder;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return this._allTitlesFameByOrder;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
        return this._allTitlesIslandByOrder;
      default:
        return this.getAllPossibleTitlesVector();
    }
  };
  CastleTitleData.prototype.getHighestPossibleTitleInSystem = function (__s92param0) {
    var __s92local0 = this.getTitlesFromSystem(__s92param0);
    return __s92local0[__s92local0.length - 1];
  };
  CastleTitleData.prototype.getDisplayableTitles = function (__s94param0 = __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX) {
    var __s94local0 = new Map();
    var __s94local1 = [];
    if (this.thisUsersTitles != null) {
      for (var __s94local2 = 0, __s94local3 = this.thisUsersTitles; __s94local2 < __s94local3.length; __s94local2++) {
        var __s94local4 = __s94local3[__s94local2];
        if (__s94local4 !== undefined && __s94param0 == __s94local4.displayType) {
          var __s94local5 = __s94local0.get(__s94local4.titleSystem);
          if (!__s94local5 || __s94local4.orderInSystem > __s94local5.orderInSystem) {
            __s94local0.set(__s94local4.titleSystem, __s94local4);
          }
        }
      }
    }
    if (__s94local0 != null) {
      for (var __s94local6 = 0, __s94local7 = Array.from(__s94local0.values()); __s94local6 < __s94local7.length; __s94local6++) {
        var __s94local8 = __s94local7[__s94local6];
        if (__s94local8 !== undefined) {
          __s94local1.push(__s94local8);
        }
      }
    }
    return __s94local1;
  };
  CastleTitleData.prototype.getProgressForNextTitleInSystem = function (__s105param0) {
    var __s105local0 = this.getHighestTitleCurrentlyHeldByThisUser(__s105param0);
    if (__s105local0.nextTitleID == -1) {
      return 1;
    }
    var __s105local1 = this.getNextTitle(__s105local0.titleID);
    return this.getProgressTo(__s105local1);
  };
  CastleTitleData.prototype.getProgressPointsForNextTitleInSystem = function (__s108param0) {
    return __dep_exact_f855840627e6e145.int(this.calculateNextTitleInt(__s108param0, 0, this.bindFunction(this.getProgressPointsTo)));
  };
  CastleTitleData.prototype.calculateNextTitleInt = function (__s110param0, __s110param1, __s110param2) {
    var __s110local0 = this.getHighestTitleCurrentlyHeldByThisUser(__s110param0);
    if (__s110local0.nextTitleID == -1) {
      return __s110param1;
    }
    var __s110local1 = this.getNextTitle(__s110local0.titleID);
    return __dep_exact_f855840627e6e145.int(__s110param2(__s110local1));
  };
  CastleTitleData.prototype.getCurrentThreshold = function (__s113param0) {
    var __s113local0 = this.getHighestTitleCurrentlyHeldByThisUser(__s113param0);
    return __dep_exact_f855840627e6e145.int(__s113local0 ? __s113local0.threshold : 0);
  };
  CastleTitleData.prototype.getProgressPointsTo = function (__s115param0) {
    if (!__s115param0) {
      return 0;
    }
    var __s115local0 = this.getCurrentThreshold(__s115param0.titleSystem);
    return __dep_exact_f855840627e6e145.int(__s115param0.threshold - __s115local0) - __dep_exact_f855840627e6e145.int(this.getPointsInSystem(__s115param0.titleSystem) - __s115local0);
  };
  CastleTitleData.prototype.getProgressTo = function (__s118param0) {
    if (!__s118param0) {
      return 0;
    }
    var __s118local0 = this.getHighestTitleCurrentlyHeldByThisUser(__s118param0.titleSystem);
    var __s118local1 = Math.max(__s118local0.threshold, 0);
    var __s118local2 = __dep_exact_f855840627e6e145.int(__s118param0.threshold - __s118local1);
    var __s118local3 = __dep_exact_f855840627e6e145.int(this.getPointsInSystem(__s118param0.titleSystem) - __s118local1);
    if (__s118local2 == 0) {
      return 1;
    } else {
      return __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s118local3 / __s118local2, 0, 1);
    }
  };
  CastleTitleData.prototype.getTitleByTitleID = function (__s123param0) {
    return this._allPossibleTitles.get(__s123param0) || CastleTitleData.NULL_TITLE;
  };
  CastleTitleData.prototype.getAllPossibleTitlesVector = function () {
    var __s125local0 = [];
    if (this._allPossibleTitles != null) {
      for (var __s125local1 = 0, __s125local2 = Array.from(this._allPossibleTitles.values()); __s125local1 < __s125local2.length; __s125local1++) {
        var __s125local3 = __s125local2[__s125local1];
        if (__s125local3 !== undefined) {
          __s125local0.push(__s125local3);
        }
      }
    }
    return __s125local0;
  };
  CastleTitleData.prototype.getUsersTitleVectorFromSystem = function (__s131param0) {
    var __s131local0;
    switch (__s131param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersTitlesBerimondByOrder;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersTitlesFameByOrder;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
        __s131local0 = [];
        if (this._thisUsersCurrentIslandTitle && this._thisUsersCurrentIslandTitle != CastleTitleData.NULL_TITLE) {
          __s131local0.push(this._thisUsersCurrentIslandTitle);
          for (var __s131local1 = this.getTitleByTitleID(this._thisUsersCurrentIslandTitle.previousTitleID); __s131local1 && __s131local1 != CastleTitleData.NULL_TITLE;) {
            __s131local0.unshift(__s131local1);
            __s131local1 = this.getTitleByTitleID(__s131local1.previousTitleID);
          }
        }
        return __s131local0;
      default:
        return null;
    }
  };
  CastleTitleData.prototype.getUsersTitleVectorFromSystemByDisplayType = function (__s137param0, __s137param1) {
    var __s137local0 = [];
    for (var __s137local1 = 0, __s137local2 = this.getUsersTitleVectorFromSystem(__s137param0); __s137local1 < __s137local2.length; __s137local1++) {
      var __s137local3 = __s137local2[__s137local1];
      if (__s137local3.displayType == __s137param1) {
        __s137local0.push(__s137local3);
      }
    }
    return __s137local0;
  };
  CastleTitleData.prototype.getHighestTitleEverHeldByThisUser = function (__s142param0) {
    switch (__s142param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersHighestEverBraveryTitle;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersHighestEverGloryTitle;
      default:
        return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getHighestTitleCurrentlyHeldByThisUser = function (__s145param0) {
    if (this.getUsersTitleVectorFromSystem(__s145param0).length > 0) {
      return this.getUsersTitleVectorFromSystem(__s145param0)[this.getUsersTitleVectorFromSystem(__s145param0).length - 1];
    } else {
      return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getNextTitle = function (__s149param0) {
    return this._allPossibleTitles.get(this._allPossibleTitles.get(__s149param0).nextTitleID);
  };
  Object.defineProperty(CastleTitleData.prototype, "isSuffixAvailable", {
    get: function () {
      return this.getDisplayableTitles(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getSelectedTitleByDisplayType = function (__s153param0) {
    var __s153local0;
    if (__s153param0 == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX) {
      __s153local0 = this.getUsersTitleVectorFromSystemByDisplayType(this._suffixTitleSystem, __s153param0);
    } else if (__s153param0 == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      __s153local0 = this.getUsersTitleVectorFromSystemByDisplayType(this._prefixTitleSystem, __s153param0);
    }
    if (__s153local0 && __s153local0.length != 0) {
      return __s153local0[__s153local0.length - 1];
    } else {
      return CastleTitleData.NULL_TITLE;
    }
  };
  CastleTitleData.prototype.getSelectedTitleSystem = function (__s159param0) {
    if (__s159param0 == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX) {
      return this._prefixTitleSystem;
    } else if (__s159param0 == __dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX) {
      return this._suffixTitleSystem;
    } else {
      return "";
    }
  };
  CastleTitleData.prototype.getPointsInSystem = function (__s164param0) {
    switch (__s164param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return this._thisUsersBraveryPoints;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return this._thisUsersGloryPoints;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
        return this._thisUsersIslandPoints;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getTopXRankInSystem = function (__s167param0) {
    switch (__s167param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return this._currentTopXRankBerimond;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return this._currentTopXRankGlory;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
        return this._currentIslandTitleID;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getRankTimerRemainingSecondsOfSystem = function (__s170param0) {
    switch (__s170param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return (this._topXBraveryResetTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return (this._topXGloryResetTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      default:
        return -1;
    }
  };
  CastleTitleData.prototype.getMaxDefaultThresholdInSystem = function (__s173param0) {
    var __s173local0 = 0;
    for (var __s173local1 = 0, __s173local2 = this.getTitlesFromSystem(__s173param0); __s173local1 < __s173local2.length; __s173local1++) {
      var __s173local3 = __s173local2[__s173local1];
      if (!__s173local3.isTopXTitle && __s173local3.threshold >= __s173local0) {
        __s173local0 = __s173local3.threshold;
      }
    }
    return __s173local0;
  };
  CastleTitleData.prototype.isSystemAvailable = function (__s178param0) {
    switch (__s178param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return !__dep_export_ABGHelper.ABGHelper.isOnABGServer && (this._thisUsersHighestEverBraveryPoints > 0 || !!__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION));
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return true;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
      default:
        return false;
    }
  };
  CastleTitleData.prototype.isDecaying = function (__s181param0) {
    switch (__s181param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return true;
      default:
        return false;
    }
  };
  CastleTitleData.prototype.hasIslandTitleSelected = function () {
    return this.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX).titleSystem == __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE || this.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX).titleSystem == __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE;
  };
  CastleTitleData.prototype.resetIslandTitle = function () {
    this._currentIslandTitleID = -1;
    this._thisUsersCurrentIslandTitle = CastleTitleData.NULL_TITLE;
  };
  Object.defineProperty(CastleTitleData.prototype, "islandKingTitle", {
    get: function () {
      return this._islandKingTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleData.prototype, "mixedIslandTitles", {
    get: function () {
      return this._mixedIslandTitles;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleData.prototype.getAllAssignedUserTitles = function () {
    var __s192local0 = this.thisUsersTitles;
    var __s192local1 = [];
    if (__s192local0 != null) {
      for (var __s192local2 = 0, __s192local3 = __s192local0; __s192local2 < __s192local3.length; __s192local2++) {
        var __s192local4 = __s192local3[__s192local2];
        if (__s192local4 !== undefined && __s192local4.isAssigned) {
          __s192local1.push(__s192local4);
        }
      }
    }
    return __s192local1;
  };
  CastleTitleData.__initialize_static_members = function () {
    CastleTitleData.NULL_TITLE = new __dep_export_TitleVO.TitleVO();
  };
  return CastleTitleData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleTitleData = __s0local0;
var __dep_export_TitleVO = require("gge-module:export_TitleVO");
var __s0local1 = require("gge-module:exact_34005b3bcd918bbc").util.isString;
__s0local0.__initialize_static_members();

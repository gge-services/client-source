Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleQuestBookMainQuestListVO() {
    this._announcedIDs = [];
    this._finishedIDs = [];
    this._runningIDs = [];
    this._shownArrayIDs = [];
  }
  CastleQuestBookMainQuestListVO.prototype.parseListsFromParamObject = function (__s5param0) {
    if (__s5param0.ANN && __s5param0.R && __s5param0.D) {
      this._announcedIDs = __s5param0.ANN;
      this._runningIDs = __s5param0.R;
      this._finishedIDs = __s5param0.D;
      this.buildShownArrayIDs();
    }
  };
  CastleQuestBookMainQuestListVO.prototype.buildShownArrayIDs = function () {
    this._shownArrayIDs = [];
    var __s8local0 = 0;
    for (__s8local0 = 0; __s8local0 < this._finishedIDs.length; __s8local0++) {
      this._shownArrayIDs.push([this._finishedIDs[__s8local0], CastleQuestBookMainQuestListVO.STATUS_FINISH]);
    }
    for (__s8local0 = 0; __s8local0 < this._runningIDs.length; __s8local0++) {
      this._shownArrayIDs.push([this._runningIDs[__s8local0], CastleQuestBookMainQuestListVO.STATUS_RUNNING]);
    }
    for (__s8local0 = 0; __s8local0 < this._announcedIDs.length; __s8local0++) {
      this._shownArrayIDs.push([this._announcedIDs[__s8local0], CastleQuestBookMainQuestListVO.STATUS_ANNOUNCED]);
    }
    this._shownArrayIDs.sort(this.bindFunction(this.onSortList));
  };
  CastleQuestBookMainQuestListVO.prototype.onSortList = function (__s16param0, __s16param1) {
    if (__s16param0[0] > __s16param1[0]) {
      return 1;
    } else if (__s16param0[0] < __s16param1[0]) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "indexForFirstShownQuest", {
    get: function () {
      return this.shownArray.length - 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBookMainQuestListVO.prototype.getDisplayObjectFromIndex = function (__s23param0) {
    var __s23local0 = "Quest_" + this.shownArray[__s23param0][0] + this.shownArray[__s23param0][1];
    __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s23local0);
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s23local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s23local0), null, 24, false).asDisplayObject();
  };
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "shownArray", {
    get: function () {
      return this._shownArrayIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBookMainQuestListVO.__initialize_static_members = function () {
    CastleQuestBookMainQuestListVO.STATUS_ANNOUNCED = "_announced";
    CastleQuestBookMainQuestListVO.STATUS_RUNNING = "_running";
    CastleQuestBookMainQuestListVO.STATUS_FINISH = "_finished";
  };
  return CastleQuestBookMainQuestListVO;
}();
exports.CastleQuestBookMainQuestListVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableRenderClipsList(__s3param0 = null, __s3param1 = null) {
    this._items = [];
    this.createByParentMc(__s3param0, __s3param1);
  }
  CollectableRenderClipsList.prototype.createByParentMc = function (__s5param0, __s5param1) {
    if (__s5param0 && __s5param1) {
      var __s5local0;
      this._items = [];
      for (var __s5local1 = 0; __s5local0 = __s5param0.getChildByName(__s5param1 + __s5local1); ++__s5local1) {
        this._items.push(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local0));
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.createByItemMcList = function (__s10param0) {
    if (__s10param0) {
      this._items = [];
      for (var __s10local0 = 0; __s10local0 < __s10param0.length; ++__s10local0) {
        this._items.push(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s10param0[__s10local0]));
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.addItemMcs = function (__s15param0, __s15param1 = null, __s15param2 = false, __s15param3 = true) {
    this.addMc("addItemMc", __s15param0, __s15param1, __s15param2);
    if (__s15param3) {
      for (var __s15local0 = 0; __s15local0 < this._items.length; ++__s15local0) {
        this._items[__s15local0].getDefaultsFromItemMc();
      }
    }
    return this;
  };
  CollectableRenderClipsList.prototype.addItemMCsToList = function (__s20param0, __s20param1) {
    if (__s20param0 && __s20param1) {
      var __s20local0;
      this._items ||= [];
      for (var __s20local1 = 0; __s20local0 = __s20param0.getChildByName(__s20param1 + __s20local1); ++__s20local1) {
        this._items.push(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s20local0));
      }
    }
  };
  CollectableRenderClipsList.prototype.addIconMcs = function (__s25param0, __s25param1 = null, __s25param2 = false) {
    return this.addMc("addIconMc", __s25param0, __s25param1, __s25param2);
  };
  CollectableRenderClipsList.prototype.addTextfields = function (__s27param0, __s27param1 = null, __s27param2 = false) {
    return this.addMc("addTextfield", __s27param0, __s27param1, __s27param2);
  };
  CollectableRenderClipsList.prototype.addInfoBtns = function (__s29param0, __s29param1 = null, __s29param2 = false) {
    return this.addMc("addInfoBtn", __s29param0, __s29param1, __s29param2);
  };
  CollectableRenderClipsList.prototype.addBuildingLevelMc = function (__s31param0, __s31param1 = null, __s31param2 = false) {
    return this.addMc("addBuildingLevelMc", __s31param0, __s31param1, __s31param2);
  };
  CollectableRenderClipsList.prototype.addTextfieldBgMcs = function (__s33param0, __s33param1 = null, __s33param2 = false) {
    return this.addMc("addTextfieldBgMc", __s33param0, __s33param1, __s33param2);
  };
  CollectableRenderClipsList.prototype.addColorBgMcs = function (__s35param0, __s35param1 = null, __s35param2 = false) {
    return this.addMc("addColorBgMc", __s35param0, __s35param1, __s35param2);
  };
  CollectableRenderClipsList.prototype.addEquipmentBgMcs = function (__s37param0, __s37param1 = null, __s37param2 = false) {
    return this.addMc("addEquipmentBgMc", __s37param0, __s37param1, __s37param2);
  };
  CollectableRenderClipsList.prototype.addMc = function (__s39param0, __s39param1, __s39param2, __s39param3) {
    var __s39local0;
    var __s39local1;
    var __s39local2;
    var __s39local3;
    if (__s39param2 === undefined) {
      __s39param2 = null;
    }
    if (__s39param3 === undefined) {
      __s39param3 = false;
    }
    for (var __s39local4 = 0; __s39local4 < this.items.length; ++__s39local4) {
      __s39local1 = this.items[__s39local4];
      __s39local0 = __s39param2 || __s39local1.itemMc;
      __s39local2 = __s39param3 ? __s39param1 + __s39local4 : __s39param1;
      if (__s39local3 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(__s39local0, __s39local2)) {
        __s39local1[__s39param0](__s39local3);
      }
    }
    return this;
  };
  Object.defineProperty(CollectableRenderClipsList.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderClipsList;
}();
exports.CollectableRenderClipsList = __s0local0;
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");

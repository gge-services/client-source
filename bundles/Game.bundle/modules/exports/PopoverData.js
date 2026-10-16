Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_PopoverEvent = require("gge-module:export_PopoverEvent");
var __dep_export_PopoverVO = require("gge-module:export_PopoverVO");
var __s0local0 = function (__s1param0) {
  function PopoverData() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._queueIdIterator = 0;
    __s3local0._itemQueue = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PopoverData, __s1param0);
  PopoverData.prototype.parseSPO = function (__s5param0) {
    if (__s5param0) {
      if (__s5param0 != null) {
        for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
          var __s5local2 = __s5local1[__s5local0];
          if (__s5local2 !== undefined) {
            var __s5local3 = new __dep_export_PopoverVO.PopoverVO();
            __s5local3.parseServerObject(__s5local2);
            __s5local3.queueId = this.createNextQueueId();
            this._itemQueue.push(__s5local3);
          }
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_PopoverEvent.PopoverEvent(__dep_export_PopoverEvent.PopoverEvent.ON_NEW_POPOVER_ARRIVED));
    }
  };
  PopoverData.prototype.removeQueueItem = function (__s12param0) {
    for (var __s12local0 = 0; __s12local0 < this._itemQueue.length; ++__s12local0) {
      if (this._itemQueue[__s12local0].queueId == __s12param0) {
        this._itemQueue.splice(__s12local0, 1);
        break;
      }
    }
  };
  PopoverData.prototype.createNextQueueId = function () {
    return this._queueIdIterator++;
  };
  PopoverData.prototype.getPopoverById = function (__s19param0) {
    if (this._itemQueue != null) {
      for (var __s19local0 = 0, __s19local1 = this._itemQueue; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined && __s19local2.queueId == __s19param0) {
          return __s19local2;
        }
      }
    }
    return null;
  };
  PopoverData.prototype.getNextPopover = function () {
    if (this._itemQueue.length > 0) {
      return this._itemQueue[0];
    } else {
      return null;
    }
  };
  Object.defineProperty(PopoverData.prototype, "itemQueue", {
    get: function () {
      return this._itemQueue;
    },
    enumerable: true,
    configurable: true
  });
  return PopoverData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.PopoverData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");

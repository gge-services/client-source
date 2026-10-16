Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AIsoViewObjectGroup() {}
  AIsoViewObjectGroup.prototype.init = function (__s5param0) {
    this._isoRenderer = __s5param0;
  };
  AIsoViewObjectGroup.prototype.destroy = function () {};
  AIsoViewObjectGroup.prototype.initObjects = function () {};
  AIsoViewObjectGroup.prototype.render = function (__s11param0 = false) {};
  AIsoViewObjectGroup.prototype.addObject = function (__s13param0) {};
  AIsoViewObjectGroup.prototype.removeObjectByVE = function (__s15param0) {};
  AIsoViewObjectGroup.prototype.isObjectForThisList = function (__s17param0) {
    return __s17param0.objectType.groupType == this.groupType;
  };
  AIsoViewObjectGroup.prototype.containsObject = function (__s19param0) {
    return false;
  };
  AIsoViewObjectGroup.prototype.fillInCompleteList = function (__s21param0) {};
  AIsoViewObjectGroup.prototype.destroyObject = function (__s23param0) {
    if (__s23param0) {
      if (__s23param0.getVELayerType() == __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS) {
        var __s23local0 = this.isoRenderer.objects.isoLayerObjects;
        if (__s23local0.length > 0) {
          var __s23local1 = __dep_exact_f855840627e6e145.int(__s23local0.indexOf(__s23param0));
          if (__s23local1 >= 0) {
            __s23local0.splice(__s23local1, 1);
          }
        }
      }
      __s23param0.destroy();
    }
    return null;
  };
  AIsoViewObjectGroup.prototype.destroyAndCreateNewObjectList = function (__s29param0) {
    if (__s29param0 != null) {
      for (var __s29local0 = 0, __s29local1 = __s29param0; __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined) {
          this.destroyObject(__s29local2);
        }
      }
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s29param0, "Array")) {
      return [];
    } else {
      return new (__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(__s29param0))();
    }
  };
  AIsoViewObjectGroup.prototype.createObjectsAndAddToLayerAndList = function (__s37param0, __s37param1) {
    if (__s37param0 != null) {
      for (var __s37local0 = 0, __s37local1 = __s37param0; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          this.createObjectAndAddToLayerAndList(__s37local2, __s37param1);
        }
      }
    }
  };
  AIsoViewObjectGroup.prototype.createObjectAndAddToLayerAndList = function (__s43param0, __s43param1) {
    var __s43local0 = this.createObjectAndAddToLayer(__s43param0);
    if (__s43local0) {
      __s43param1.push(__s43local0);
      this.isoRenderer.objects.invalidateCompleteObjectsList();
      return __s43local0;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.createObjectAndAddToLayer = function (__s47param0) {
    if (!__s47param0) {
      return null;
    }
    var __s47local0 = __dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s47param0);
    if (__s47local0) {
      if (!__s47param0.isoData) {
        __s47param0.init(__dep_export_Iso.Iso.data);
      }
      this.addObjectToLayer(__s47local0);
      return __s47local0;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.addObjectToLayerAndList = function (__s53param0, __s53param1) {
    if (__s53param0) {
      this.addObjectToLayer(__s53param0);
      __s53param1.push(__s53param0);
      return __s53param0;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.addObjectToLayer = function (__s57param0) {
    if (!__s57param0) {
      return null;
    }
    if (__s57param0.vo && __s57param0.vo.isInBuildingDistrict) {
      return null;
    }
    var __s57local0 = __s57param0.getVELayerType();
    var __s57local1 = this.isoRenderer.layers.getIsoLayer(__s57local0);
    if (__s57local1) {
      __s57local1.addChild(__s57param0.elementContainer);
    } else {
      console.warn("Couldn't add disp to layer. -> Layer not found.");
    }
    this.isoRenderer.objects.invalidateCompleteObjectsList();
    if (__s57local0 == __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS) {
      this.isoRenderer.objects.isoLayerObjects.push(__s57param0);
      __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(__s57param0));
    }
    return __s57param0;
  };
  AIsoViewObjectGroup.prototype.removeObjectFromList = function (__s64param0, __s64param1) {
    if (__s64param1) {
      var __s64local0 = __dep_exact_f855840627e6e145.int(__s64param1.indexOf(__s64param0));
      if (__s64local0 >= 0) {
        this.destroyObject(__s64param0);
        __s64param1.splice(__s64local0, 1);
      }
    }
  };
  Object.defineProperty(AIsoViewObjectGroup.prototype, "isoData", {
    get: function () {
      return this.isoRenderer.isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoViewObjectGroup.prototype, "isoRenderer", {
    get: function () {
      return this._isoRenderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoViewObjectGroup.prototype, "groupType", {
    get: function () {
      return this._groupType;
    },
    set: function (__s74param0) {
      this._groupType = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewObjectGroup;
}();
exports.AIsoViewObjectGroup = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");

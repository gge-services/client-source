Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoHelperZSort() {}
  IsoHelperZSort.prototype.sortObjects = function (__s5param0, __s5param1) {
    if (__s5param0 && __s5param1) {
      var __s5local0;
      for (var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param1.children.length), __s5local2 = 0; __s5local2 < __s5local1; ++__s5local2) {
        if (__s5param1.children[__s5local2] instanceof __dep_export_AIsoObjectVE.VEContainer) {
          __s5local0 = __s5param1.children[__s5local2];
          this.sortObject(__s5local0.veRef, __s5param0, __s5param1);
        }
      }
      this.showChildIndices();
    }
  };
  IsoHelperZSort.prototype.sortObject = function (__s11param0, __s11param1, __s11param2) {
    var __s11local0 = __s11param0.elementContainer;
    if (__s11local0 && __s11param2.contains(__s11local0)) {
      __s11param1.fixed = true;
      var __s11local1 = __s11param0.vo;
      var __s11local2 = __s11param2.getChildIndex(__s11local0);
      var __s11local3 = 0;
      var __s11local4 = false;
      var __s11local5 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s11param0, "AIsoMovementVE");
      var __s11local6 = -1;
      for (var __s11local7 = __s11param2.children.length - 1; __s11local7 > -1; __s11local7--) {
        var __s11local8 = __s11param2.children[__s11local7];
        if (__s11local8 instanceof __dep_export_AIsoObjectVE.VEContainer) {
          var __s11local9 = __s11local8.veRef;
          var __s11local10 = __s11local9.vo;
          if (__s11param0 != __s11local9) {
            if (!__s11local4 && (__s11local1.x >= __s11local10.x && __s11local1.y >= __s11local10.y && __s11local1.x2 <= __s11local10.x2 && __s11local1.y2 <= __s11local10.y2 || __s11local10.x <= __s11local1.x2 && __s11local10.y <= __s11local1.y2 && (__s11local1.x > __s11local10.x2 || __s11local1.y > __s11local10.y2)) && (__s11local3 = __s11local7 > __s11local2 ? __s11local7 : __s11local7 + 1, __s11local4 = true, !__s11local5)) {
              break;
            }
            if (__s11local5 && (__s11local10.x >= __s11local1.x && __s11local10.y >= __s11local1.y && __s11local10.x2 <= __s11local1.x2 && __s11local10.y2 <= __s11local1.y2 || __s11local1.x <= __s11local10.x2 && __s11local1.y <= __s11local10.y2 && (__s11local10.x > __s11local1.x2 || __s11local10.y > __s11local1.y2))) {
              __s11local6 = __s11local7;
            }
          }
        }
      }
      if (__s11local6 != -1) {
        var __s11local11 = __s11local6 > __s11local2 ? __s11local6 - 1 : __s11local6;
        if (__s11local3 > __s11local11) {
          __s11local3 = __s11local11;
        }
      }
      __s11local3 = Math.max(0, Math.min(__s11param2.numChildren - 1, __s11local3));
      __s11param2.setChildIndex(__s11local0, __s11local3);
      __s11param1.fixed = false;
    }
    this.showChildIndices();
  };
  IsoHelperZSort.prototype.randomizeObjects = function (__s22param0, __s22param1) {
    var __s22local0;
    for (var __s22local1 = __dep_exact_f855840627e6e145.int(__s22param0.length), __s22local2 = 0; __s22local2 < __s22local1; ++__s22local2) {
      __s22local0 = __s22param0[__s22local2];
      var __s22local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, __s22local1 - 1));
      __s22param1.setChildIndex(__s22local0.elementContainer, __s22local3);
    }
    this.showChildIndices();
  };
  IsoHelperZSort.prototype.showChildIndices = function () {
    if (__dep_export_Iso.Iso.renderer.settings.isZSortChildIndexVisible) {
      var __s26local0 = __dep_export_Iso.Iso.renderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.DEBUG_Z_SORT);
      var __s26local1 = __dep_export_Iso.Iso.renderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS);
      var __s26local2 = new __s0local0();
      __s26local0.removeChildren();
      for (var __s26local3 = 0, __s26local4 = __dep_export_Iso.Iso.renderer.objects.isoLayerObjects; __s26local3 < __s26local4.length; __s26local3++) {
        var __s26local5 = __s26local4[__s26local3];
        if (__s26local5 !== undefined) {
          var __s26local6 = __dep_exact_f855840627e6e145.int(__s26local1.getChildIndex(__s26local5.elementContainer));
          var __s26local7 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(__s26local2, __s26local5.elementContainer, __s26local0);
          var __s26local8 = new __dep_exact_81dacdf05bd32292.TextField();
          __s26local8.textColor = 16711935;
          __s26local8.scaleX = __s26local8.scaleY = 4;
          __s26local8.autoSize = __dep_exact_81dacdf05bd32292_1.TextFieldAutoSize.CENTER;
          __s26local8.text = "" + __s26local6;
          __s26local8.x = __s26local7.x;
          __s26local8.y = __s26local7.y;
          __s26local8.mouseEnabled = false;
          __s26local0.addChild(__s26local8);
        }
      }
    }
  };
  return IsoHelperZSort;
}();
exports.IsoHelperZSort = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");

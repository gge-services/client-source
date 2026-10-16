Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function FillerSurroundingEditor() {
    this.shift = false;
    var __s3local0 = __dep_export_IsoHelper.IsoHelper.view.stage;
    if (__s3local0) {
      __s3local0.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s3local0.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      __s3local0.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
    }
    this._spawnedFillers = [];
    this.selectedObjects = [];
  }
  FillerSurroundingEditor.prototype.onMouseDown = function (__s6param0) {
    if (!this.shift && !!this.selectMousePos && !this.selectMousePos.equals(__dep_export_Iso.Iso.renderer.mouse.getMouseGridPos())) {
      this.deselectObjects();
    }
  };
  FillerSurroundingEditor.getInstance = function () {
    FillerSurroundingEditor.instance ||= new FillerSurroundingEditor();
    return FillerSurroundingEditor.instance;
  };
  FillerSurroundingEditor.prototype.onSelect = function (__s11param0) {
    if (this.spawnedFillers.indexOf(__s11param0.fillerSurroundingVO) != -1) {
      if (!this.shift) {
        this.deselectObjects();
      }
      if (this.shift && this.selectedObjects.indexOf(__s11param0) > -1) {
        var __s11local0 = __dep_exact_81dacdf05bd32292_2.castAs(this.selectedObjects.splice(this.selectedObjects.indexOf(__s11param0), 1), "FillerSurroundingsVE");
        if (__s11local0) {
          __s11local0.removeGlow();
        }
      } else {
        this.selectedObjects.push(__s11param0);
        __s11param0.disp.filters = __dep_export_IsoConst.IsoConst.VE_GLOW_FILTER_BLUE;
      }
      this.selectMousePos = __dep_export_Iso.Iso.renderer.mouse.getMouseGridPos();
    }
  };
  FillerSurroundingEditor.prototype.deselectObjects = function () {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var __s18local0 = 0, __s18local1 = this.selectedObjects; __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        if (__s18local2 !== undefined) {
          __s18local2.removeGlow();
        }
      }
    }
    this.selectedObjects.length = 0;
    this.selectMousePos = null;
  };
  FillerSurroundingEditor.prototype.onKeyDown = function (__s24param0) {
    if (this.selectedObjects.length > 0) {
      switch (__s24param0.keyCode) {
        case __dep_exact_81dacdf05bd32292.Keyboard.ESCAPE:
          this.deselectObjects();
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_8:
          this.changePos(-1, -1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_2:
          this.changePos(1, 1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_4:
          this.changePos(-1, 1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_6:
          this.changePos(1, -1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_7:
          this.changePos(-1, 0, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_9:
          this.changePos(0, -1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_1:
          this.changePos(0, 1, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMPAD_3:
          this.changePos(1, 0, __s24param0.ctrlKey);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.UP:
          this.changeOrigin(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.DOWN:
          this.changeOrigin(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.LEFT:
          this.changeOrigin(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.RIGHT:
          this.changeOrigin(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.PAGE_UP:
          this.switchFiller(-1);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.PAGE_DOWN:
          this.switchFiller(1);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.DELETE:
          this.deleteFiller();
      }
    } else {
      switch (__s24param0.keyCode) {
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMBER_1:
          this.spawnFiller(FillerSurroundingEditor.FILLER_DEFAULT);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMBER_2:
          this.spawnFiller(FillerSurroundingEditor.FILLER_SNOWPILE);
          break;
        case __dep_exact_81dacdf05bd32292.Keyboard.NUMBER_3:
          this.spawnFiller(FillerSurroundingEditor.FILLER_PATH);
      }
    }
    this.shift = !!__s24param0.shiftKey;
  };
  FillerSurroundingEditor.prototype.onKeyUp = function (__s30param0) {
    this.shift = !!__s30param0.shiftKey;
  };
  FillerSurroundingEditor.prototype.changePos = function (__s32param0, __s32param1, __s32param2) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var __s32local0 = 0, __s32local1 = this.selectedObjects; __s32local0 < __s32local1.length; __s32local0++) {
        var __s32local2 = __s32local1[__s32local0];
        if (__s32local2 !== undefined) {
          var __s32local3 = __s32local2.fillerSurroundingVO.posOffset;
          __s32local3.x += __s32param2 ? __s32param0 * 5 : __s32param0;
          __s32local3.y += __s32param2 ? __s32param1 * 5 : __s32param1;
          __dep_export_Iso.Iso.data.updater.changePosition(__s32local2.vo, __s32local2.vo.pos);
        }
      }
    }
  };
  FillerSurroundingEditor.prototype.switchFiller = function (__s38param0) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var __s38local0 = 0, __s38local1 = this.selectedObjects; __s38local0 < __s38local1.length; __s38local0++) {
        var __s38local2 = __s38local1[__s38local0];
        if (__s38local2 !== undefined) {
          for (var __s38local3, __s38local4 = __s38local2.fillerSurroundingVO.getVisualClassName(), __s38local5 = 0, __s38local6 = 0, __s38local7 = FillerSurroundingEditor.FILLER_LISTS; __s38local6 < __s38local7.length && (__s38local3 = __s38local7[__s38local6], !((__s38local5 = __dep_exact_f855840627e6e145.int(__s38local3.indexOf(__s38local4))) > -1)); __s38local6++);
          var __s38local8 = __s38local3[__dep_exact_9e901e8e2483a22f_1.MathBase.limit(__s38local5 + __s38param0, 0, __s38local3.length - 1, true)];
          __s38local2.fillerSurroundingVO.setAssetName(__s38local8);
          __s38local2.updateDisp();
        }
      }
    }
  };
  FillerSurroundingEditor.prototype.spawnFiller = function (__s45param0) {
    var __s45local0 = __dep_export_Iso.Iso.renderer.mouse.getMouseGridPos();
    var __s45local1 = __dep_export_Iso.Iso.data.grid.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
    var __s45local2 = __s45local0.subtract(__s45local1);
    var __s45local3 = __s45param0 == FillerSurroundingEditor.FILLER_SNOWPILE || __s45param0 == FillerSurroundingEditor.FILLER_PATH;
    var __s45local4 = new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO(__s45param0[0], __s45local2, __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, __s45local3);
    this._spawnedFillers.push(__s45local4);
    __dep_export_Iso.Iso.data.updater.updateSurroundings();
  };
  FillerSurroundingEditor.prototype.deleteFiller = function () {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var __s47local0 = 0, __s47local1 = this.selectedObjects; __s47local0 < __s47local1.length; __s47local0++) {
        var __s47local2 = __s47local1[__s47local0];
        if (__s47local2 !== undefined) {
          var __s47local3 = __dep_exact_f855840627e6e145.int(this.spawnedFillers.indexOf(__s47local2.fillerSurroundingVO));
          this.spawnedFillers.splice(__s47local3, 1);
        }
      }
    }
    __dep_export_Iso.Iso.data.updater.updateSurroundings();
  };
  FillerSurroundingEditor.prototype.changeOrigin = function (__s53param0) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var __s53local0 = 0, __s53local1 = this.selectedObjects; __s53local0 < __s53local1.length; __s53local0++) {
        var __s53local2 = __s53local1[__s53local0];
        if (__s53local2 !== undefined) {
          var __s53local3 = __s53local2.fillerSurroundingVO.pos;
          var __s53local4 = __dep_export_Iso.Iso.data.grid.origins.getOriginPos(__s53param0);
          var __s53local5 = __s53local3.subtract(__s53local4);
          __s53local2.fillerSurroundingVO.setPosOrigin(__s53param0);
          __s53local2.fillerSurroundingVO.setPosOffset(__s53local5);
          __s53local2.updateDisp();
        }
      }
    }
  };
  Object.defineProperty(FillerSurroundingEditor.prototype, "spawnedFillers", {
    get: function () {
      return this._spawnedFillers;
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingEditor.prototype.printSpawnCode = function () {
    var __s61local0 = "";
    if (this.spawnedFillers != null) {
      for (var __s61local1 = 0, __s61local2 = this.spawnedFillers; __s61local1 < __s61local2.length; __s61local1++) {
        var __s61local3 = __s61local2[__s61local1];
        if (__s61local3 !== undefined) {
          var __s61local4 = this.getPosOriginText(__s61local3.posOrigin);
          var __s61local5 = __s61local3.isPath ? "true" : "false";
          __s61local0 += "addToEditableResultList( new FillerSurroundingsVO(\"" + __s61local3.getVisualClassName() + "\", new Point(" + __s61local3.posOffset.x + ", " + __s61local3.posOffset.y + "), " + __s61local4 + ", " + __s61local5 + "));\n";
        }
      }
    }
    console.log(__s61local0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleServerMessageBigDialog.CastleServerMessageBigDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("Code", __s61local0));
  };
  FillerSurroundingEditor.prototype.getPosOriginText = function (__s67param0) {
    switch (__s67param0) {
      case __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER:
        return "IsoGridOriginEnum.TOP_CORNER";
      case __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER:
        return "IsoGridOriginEnum.BOTTOM_CORNER";
      case __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER:
        return "IsoGridOriginEnum.LEFT_CORNER";
      case __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER:
        return "IsoGridOriginEnum.RIGHT_CORNER";
    }
    return "IsoGridOriginEnum.BOTTOM_CORNER";
  };
  FillerSurroundingEditor.prototype.addAsEditable = function (__s70param0) {
    this._spawnedFillers.push(__s70param0);
  };
  FillerSurroundingEditor.FILLER_DEFAULT = ["Trees_Surroundings_Short_Quarter", "Trees_Surroundings_Tall_Full", "Trees_Surroundings_Tall_Half", "Trees_Surroundings_Tall_ThreeQuarters", "Stones_Surroundings_Short_Half"];
  FillerSurroundingEditor.FILLER_SNOWPILE = ["Snowpile_Surroundings_A", "Snowpile_Surroundings_B", "Snowpile_Surroundings_C", "Snowpile_Surroundings_D", "Snowpile_Surroundings_E", "Snowpile_Surroundings_F", "Snowpile_Surroundings_G", "Snowpile_Surroundings_H", "Snowpile_Surroundings_I", "Snowpile_Surroundings_J", "Snowpile_Surroundings_K", "Snowpile_Surroundings_L", "Snowpile_Surroundings_M"];
  FillerSurroundingEditor.FILLER_PATH = ["Road_Surroundings"];
  FillerSurroundingEditor.FILLER_LISTS = [FillerSurroundingEditor.FILLER_DEFAULT, FillerSurroundingEditor.FILLER_SNOWPILE];
  FillerSurroundingEditor.IS_ACTIVE = false;
  return FillerSurroundingEditor;
}();
exports.FillerSurroundingEditor = __s0local1;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_FillerSurroundingsVO = require("gge-module:export_FillerSurroundingsVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleServerMessageBigDialog = require("gge-module:export_CastleServerMessageBigDialog");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");

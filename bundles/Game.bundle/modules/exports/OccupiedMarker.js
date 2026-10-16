Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __s0local3 = function () {
  function OccupiedMarker() {}
  OccupiedMarker.prototype.init = function (__s5param0, __s5param1) {
    this._targetMapobjectVO = __s5param0;
    this._siegeOwnerVO = __s5param1;
    this._disp = new __s0local0();
    this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("MapObjectSiege_Common", this.assetFileURL, this.getClipColor(), 0, false);
    this._disp.addChild(this.clip);
    this._disp.mouseChildren = false;
    this.disp.addEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.disp.addEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(OccupiedMarker.prototype, "assetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("MapObjectSiege_Common");
    },
    enumerable: true,
    configurable: true
  });
  OccupiedMarker.prototype.getClipColor = function () {
    var __s9local0 = [];
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __s9local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", this._siegeOwnerVO.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO.colorsFour : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO.colorsFour));
    } else {
      __s9local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", this._siegeOwnerVO.crest.colorsFour));
    }
    return __s9local0;
  };
  OccupiedMarker.prototype.remove = function () {
    this._disp.removeEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  OccupiedMarker.prototype.onRollOver = function (__s15param0) {
    if (!this.hasRingMenu) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    this._disp.useFilters(this.getGlowFilter());
  };
  OccupiedMarker.prototype.onRollOut = function (__s18param0) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  OccupiedMarker.prototype.getGlowFilter = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID) {
      return __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_BLUE;
    } else {
      return __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    }
  };
  Object.defineProperty(OccupiedMarker.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (__s26param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiBounds", {
    get: function () {
      return this.uiDisp.getBounds(null);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiDisp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiPos", {
    get: function () {
      if (this._disp) {
        return new __s0local2(this._disp.x, this._disp.y);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "mapObjectVO", {
    get: function () {
      return this._targetMapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "ownerVO", {
    get: function () {
      return this._siegeOwnerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line1Content", {
    get: function () {
      var __s44local0;
      this.ownerVO.playerID;
      __dep_export_CastleModel.CastleModel.userData.playerID;
      __s44local0 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.ownerVO);
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("worldmap_tooltipp_besieged", [__s44local0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line2Content", {
    get: function () {
      var __s46local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), this.ownerVO.playerLevel]);
      var __s46local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("legendLevel"), this.ownerVO.playerLegendLevel]);
      var __s46local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("honor"), this.ownerVO.honor]);
      var __s46local3 = this.ownerVO.isLegend ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_SIMPLE_COMP, [__s46local0, __s46local1]) : __s46local0;
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_SIMPLE_COMP, [__s46local3, __s46local2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line3Content", {
    get: function () {
      if (this.ownerVO.isInAlliance && this.mapObjectVO.kingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        return new __dep_exact_92d05af59ee2ff30_2.TextVO(this.ownerVO.allianceName);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "toolTipPosition", {
    get: function () {
      var __s54local0 = this.uiDisp.parent;
      var __s54local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var __s54local2 = __s54local0.getBounds(null);
      return new __s0local2(__s54local0.x + (__s54local2.x + __s54local2.width / 2) * __s54local1, __s54local0.y + (__s54local2.y + __s54local2.height / 2 - 20) * __s54local1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return OccupiedMarker;
}();
exports.OccupiedMarker = __s0local3;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IIngameUICapable", "IWorldmapTooltipData");

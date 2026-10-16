Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function QuestMapTile() {
    var __s3local0 = this;
    __s3local0._startIndex = 0;
    __s3local0._height = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestMapTileMC"))();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0._disp.quest0, __s3local0._disp.quest1, __s3local0._disp.quest2, __s3local0._disp.quest3]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestMapTile, __s1param0);
  QuestMapTile.prototype.show = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1;
    var __s5local2;
    this._quests = __s5param0;
    this._startIndex = __s5param1;
    this._disp.path0.visible = __s5param1 >= 0;
    var __s5local3 = 0;
    for (var __s5local4 = 0; __s5local4 <= QuestMapTile.QUESTS_PER_TILE; __s5local4++) {
      __s5local0 = this._disp["quest" + __s5local4];
      __s5local1 = this._disp["path" + __s5local4];
      if (__s5local2 = this._quests.length > __s5param1 + __s5local4 ? this._quests[__s5param1 + __s5local4].questVO : null) {
        if (__s5local4 < QuestMapTile.QUESTS_PER_TILE) {
          __s5local0.gotoAndStop(__s5local2.isCompleted ? 2 : __s5local2.isFailed ? 3 : 1);
          __s5local0.icon.gotoAndStop(__s5local2.isEpicQuest ? 2 : 1);
          __s5local0.visible = true;
          __s5local0.mouseChildren = false;
          __s5local3 = __s5local4;
        }
        __s5local1.gotoAndStop(__s5local2.isCompleted ? 1 : __s5local2.isFailed ? 2 : __s5local2.isLocked ? 3 : 4);
        __s5local1.visible = __s5param1 + __s5local4 > 0;
      } else {
        if (__s5local4 < QuestMapTile.QUESTS_PER_TILE) {
          __s5local0.visible = false;
        }
        __s5local1.visible = false;
      }
    }
    this._height = __s5local3 == QuestMapTile.QUESTS_PER_TILE - 1 ? this.disp.height : this.disp["quest" + __s5local3].y + 55;
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
  };
  QuestMapTile.prototype.hide = function () {
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this._quests = null;
  };
  QuestMapTile.prototype.onMouseOver = function (__s15param0) {
    switch (__s15param0.target) {
      case this._disp.quest0:
        __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.showToolTip(__s15param0.target, this._quests[this._startIndex].questVO);
        break;
      case this._disp.quest1:
        __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.showToolTip(__s15param0.target, this._quests[this._startIndex + 1].questVO);
        break;
      case this._disp.quest2:
        __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.showToolTip(__s15param0.target, this._quests[this._startIndex + 2].questVO);
        break;
      case this._disp.quest3:
        __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.showToolTip(__s15param0.target, this._quests[this._startIndex + 3].questVO);
    }
  };
  QuestMapTile.prototype.onMouseClick = function (__s18param0) {
    switch (__s18param0.target) {
      case this._disp.quest0:
        this._quests[this._startIndex].select(true, true);
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest1:
        this._quests[this._startIndex + 1].select(true, true);
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest2:
        this._quests[this._startIndex + 2].select(true, true);
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
        break;
      case this._disp.quest3:
        this._quests[this._startIndex + 3].select(true, true);
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    }
  };
  Object.defineProperty(QuestMapTile.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "isLayoutEnabled", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "width", {
    get: function () {
      return this.disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestMapTile.prototype, "margin", {
    get: function () {
      return QuestMapTile.MARGIN;
    },
    enumerable: true,
    configurable: true
  });
  QuestMapTile.__initialize_static_members = function () {
    QuestMapTile.QUESTS_PER_TILE = 4;
    QuestMapTile.MARGIN = new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0);
  };
  return QuestMapTile;
}(__dep_export_CastleComponent.CastleComponent);
exports.QuestMapTile = __s0local1;
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_QuestMapTooltipHelper = require("gge-module:export_QuestMapTooltipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ILayoutable");
__s0local1.__initialize_static_members();

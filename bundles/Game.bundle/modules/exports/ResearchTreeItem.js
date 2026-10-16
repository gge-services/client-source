Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.ColorMatrixFilter;
var __s0local2 = function () {
  function ResearchTreeItem(__s3param0, __s3param1) {
    this.selected = false;
    this.connectionElements = [];
    this.onClick = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.FILTER_DISABLED = new __s0local1([0.4, 0.6, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0]);
    this.selected = false;
    this._disp = __s3param1;
    this.groupVO = __s3param0;
    __s3param1.visible = true;
    __s3param1.addEventListener(__s0local0.CLICK, this.bindFunction(this.handleResearchClick));
    __s3param1.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.bindFunction(this.onMouseOver)));
    __s3param1.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.bindFunction(this.onMouseOut)));
    __s3param1.mouseChildren = false;
    this.itxt_level = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param1.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._clickBehaviour = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this._disp);
    this._clickBehaviour.updateCacheOnChange = true;
  }
  ResearchTreeItem.prototype.show = function () {
    this._clickBehaviour.addEventListener();
  };
  ResearchTreeItem.prototype.hide = function () {
    this._clickBehaviour.removeEventListener();
  };
  ResearchTreeItem.prototype.handleResearchClick = function (__s9param0) {
    this.onClick.dispatch(this.groupVO);
  };
  ResearchTreeItem.prototype.addConnectionElement = function (__s11param0) {
    this.connectionElements[this.connectionElements.length] = __s11param0;
  };
  Object.defineProperty(ResearchTreeItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTreeItem.prototype, "groupId", {
    get: function () {
      return this._groupVO.id;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.prototype.update = function () {
    this.updateIcon();
    this.updateColor();
    this.updateLevelText();
    this.updateIconState();
    this.updateResearchToolTip();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ResearchTreeItem.prototype.updateIcon = function () {
    this.disp.mc_iconContainer.scaleX = this.disp.mc_iconContainer.scaleY = ResearchTreeItem.ICON_SCALE;
    if (this._groupVO) {
      __dep_export_ResearchIconHelper.ResearchIconHelper.addResearchIcon(this._groupVO, this.disp.mc_iconContainer, NaN, this.bindFunction(this.onIconLoaded));
    } else {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.disp.mc_iconContainer);
    }
  };
  ResearchTreeItem.prototype.updateLinks = function () {
    if (this.connectionElements != null) {
      for (var __s24local0 = 0, __s24local1 = this.connectionElements; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined) {
          this.updateColorOfDisp(__s24local2);
          if (this.selected && this.isLocked) {
            __s24local2.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_SELECTED_RESEARCH_FILTER.concat([this.FILTER_DISABLED]));
          }
          if (this.isLocked) {
            __s24local2.useFilters([this.FILTER_DISABLED]);
          } else {
            __s24local2.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
          }
          if (__s24local2.cacheCanvas) {
            __s24local2.updateCache();
          }
        }
      }
    }
  };
  ResearchTreeItem.prototype.updateColor = function () {
    this.updateColorOfDisp(this.disp);
  };
  ResearchTreeItem.prototype.updateColorOfDisp = function (__s36param0) {
    var __s36local0;
    var __s36local1;
    if (!this.groupVO || this.isLocked) {
      __s36local0 = ResearchTreeItem.LOCKED;
      __s36local1 = 0;
    } else if (this._groupVO.isFullyResearched) {
      __s36local0 = ResearchTreeItem.GREEN;
      __s36local1 = 3;
    } else if (this._groupVO.currentLevel == 0) {
      __s36local0 = ResearchTreeItem.NORMAL;
      __s36local1 = 2;
    } else {
      __s36local1 = 1;
      __s36local0 = ResearchTreeItem.YELLOW;
    }
    if (!__s36param0.colorState || __s36param0.colorState && __s36param0.colorState < __s36local1) {
      __s36param0.state = __s36local1;
      var __s36local2 = __s36param0.mcColor;
      __s36local2.visible = true;
      __s36local2.useFilters([new createjs.ColorFilter(__s36local0.redMultiplier, __s36local0.greenMultiplier, __s36local0.blueMultiplier, __s36local0.alphaMultiplier, __s36local0.redOffset, __s36local0.greenOffset, __s36local0.blueOffset, __s36local0.alphaOffset)]);
    }
  };
  ResearchTreeItem.prototype.select = function () {
    this.selected = true;
    this.updateIconState();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ResearchTreeItem.prototype.deselect = function () {
    this.selected = false;
    this.updateIconState();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  Object.defineProperty(ResearchTreeItem.prototype, "isLocked", {
    get: function () {
      return !!this._groupVO && this._groupVO.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.prototype.onIconLoaded = function () {
    this.updateIconState();
  };
  ResearchTreeItem.prototype.updateIconState = function () {
    this._disp.mc_selected.visible = this.selected;
    var __s53local0 = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
    var __s53local1 = __s53local0 && this.groupId == __s53local0.groupID;
    this._disp.mc_inProgress.visible = __s53local1;
    var __s53local2 = [];
    if (this.isLocked) {
      __s53local2 = __s53local2.concat(this.FILTER_DISABLED);
    }
    for (var __s53local3 = 0; __s53local3 < this._disp.numChildren; __s53local3++) {
      if (this._disp.getChildAt(__s53local3).name != "mc_selected") {
        this._disp.getChildAt(__s53local3).useFilters(__s53local2, true, 1);
      }
    }
    if (!this.isLocked) {
      this.updateColor();
    }
  };
  ResearchTreeItem.prototype.updateLevelText = function () {
    var __s60local0 = 0;
    var __s60local1 = 0;
    if (this._groupVO) {
      __s60local0 = this._groupVO.currentLevel;
      __s60local1 = this._groupVO.maxLevel;
    } else {
      __s60local0 = __s60local1 = 0;
    }
    this.itxt_level.textContentVO.textReplacements = [__s60local0, __s60local1];
  };
  ResearchTreeItem.prototype.updateResearchToolTip = function () {
    if (this._groupVO && !this._groupVO.getResearchByLevel(this._groupVO.currentLevel).hasAllEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID])) {
      this._disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(this._groupVO.toolTip) + (__dep_export_CastleModel.CastleModel.researchData.showResearchIDs ? " ( ResearchID: " + (this._groupVO.activeResearch ? this._groupVO.activeResearch.researchID : this._groupVO.getResearchByLevel(1).researchID) + ", GroupID: " + this._groupVO.id + " )" : "");
    } else {
      this._disp.toolTipText = null;
    }
  };
  ResearchTreeItem.prototype.onMouseOver = function (__s68param0) {
    if (this._groupVO.getResearchByLevel(this._groupVO.currentLevel).hasAllEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID])) {
      __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.showBlueprintToolTip(__s68param0.target, this._groupVO.getResearchByLevel(this._groupVO.currentLevel).blueprintVO, __dep_export_CastleModel.CastleModel.researchData.showResearchIDs ? " ( ResearchID: " + (this._groupVO.activeResearch ? this._groupVO.activeResearch.researchID : this._groupVO.getResearchByLevel(1).researchID) + ", GroupID: " + this._groupVO.id + " )" : null);
    }
  };
  ResearchTreeItem.prototype.onMouseOut = function (__s71param0) {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
  };
  Object.defineProperty(ResearchTreeItem.prototype, "groupVO", {
    get: function () {
      return this._groupVO;
    },
    set: function (__s75param0) {
      this._groupVO = __s75param0;
      this.disp.groupVO = this.groupVO;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.tintTo = function (__s77param0, __s77param1, __s77param2) {
    return new __dep_exact_81dacdf05bd32292.ColorTransform(0, 0, 0, 1, __s77param0, __s77param1, __s77param2, 0);
  };
  ResearchTreeItem.alphaTo = function (__s79param0) {
    return new __dep_exact_81dacdf05bd32292.ColorTransform(1, 1, 1, __s79param0, 0, 0, 0, 0);
  };
  ResearchTreeItem.prototype.clearLinks = function () {
    this.connectionElements = [];
  };
  ResearchTreeItem.__initialize_static_members = function () {
    ResearchTreeItem.GREEN = ResearchTreeItem.tintTo(89, 181, 29);
    ResearchTreeItem.NORMAL = ResearchTreeItem.tintTo(112, 98, 79);
    ResearchTreeItem.YELLOW = ResearchTreeItem.tintTo(247, 174, 7);
    ResearchTreeItem.LOCKED = ResearchTreeItem.tintTo(65, 64, 66);
  };
  ResearchTreeItem.ICON_SCALE = 0.523;
  return ResearchTreeItem;
}();
exports.ResearchTreeItem = __s0local2;
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_ResearchIconHelper = require("gge-module:export_ResearchIconHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
__s0local2.__initialize_static_members();

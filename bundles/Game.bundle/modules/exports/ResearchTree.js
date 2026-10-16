Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ResearchTreeConnectionDot = require("gge-module:export_ResearchTreeConnectionDot");
var __dep_export_ResearchTreeConnectionLine = require("gge-module:export_ResearchTreeConnectionLine");
var __dep_export_ResearchTreeItem = require("gge-module:export_ResearchTreeItem");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function ResearchTree(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    this._lastXPos = 0;
    this._researchXPoses = [];
    this._contentHolder = __s3param0;
    this._tabVO = __s3param1;
    this._groupList = __s3param1.groups;
    this._selectionChangedCallback = __s3param2;
    this._scrollComponent = __s3param3;
    this._scrollComponentSmall = __s3param4;
    this.initTree();
  }
  ResearchTree.prototype.initTree = function () {
    var __s5local0 = this;
    this._disp = new __s0local0();
    this._layerResearch = new __s0local0();
    this._layerConnectionDot = new __s0local0();
    this._layerConnectionLine = new __s0local0();
    this._layerBackground = new __s0local0();
    this._disp.addChild(this._layerBackground);
    this._disp.addChild(this._layerConnectionLine);
    this._disp.addChild(this._layerConnectionDot);
    this._disp.addChild(this._layerResearch);
    this._items = new Map();
    this._connectionDots = new Map();
    this._connectionLines = new Map();
    this._groupList.forEach(function (__s7param0) {
      __s5local0.createResearchTreeItem(__s7param0);
    });
    this.createBackground();
    if (this._tabVO.enableCategories) {
      this.createCategoryBackgrounds();
    }
  };
  ResearchTree.prototype.createResearchTreeItem = function (__s10param0) {
    var __s10local0 = this;
    if (!__s10param0.isEmptyGroup()) {
      var __s10local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ResearchTree_ResearchContainer"))();
      this._layerResearch.addChild(__s10local1);
      var __s10local2 = new __dep_export_ResearchTreeItem.ResearchTreeItem(__s10param0, __s10local1);
      __s10local2.onClick.add(this.bindFunction(this.handleResearchClick));
      this._items.set(__s10param0.id, __s10local2);
      this.positionTreeComponent(__s10local2.disp, __s10param0.x, __s10param0.y);
      if (this._researchXPoses.length == 0 || this._researchXPoses[this._researchXPoses.length - 1] < __s10param0.x) {
        this._researchXPoses.push(__s10param0.x);
      }
      if (__s10local2.disp.x > this._lastXPos) {
        this._lastXPos = __s10local2.disp.x;
      }
      __s10param0.prerequisitePaths.forEach(function (__s15param0) {
        return __s10local0.createConnectionForPath(__s10local2, __s15param0);
      });
    }
  };
  ResearchTree.prototype.createConnectionForPath = function (__s17param0, __s17param1) {
    for (var __s17local0 = 1; __s17local0 < __s17param1.length - 1; __s17local0++) {
      var __s17local1 = __s17param1[__s17local0];
      var __s17local2 = undefined;
      if (!this._connectionDots.has(__s17local1)) {
        __s17local2 = new __dep_export_ResearchTreeConnectionDot.ResearchTreeConnectionDot();
        this.positionTreeComponent(__s17local2.disp, __s17local1.x, __s17local1.y);
        this._layerConnectionDot.addChild(__s17local2.disp);
        this._connectionDots.set(__s17local1, __s17local2);
      }
      __s17param0.addConnectionElement(__s17local2.disp);
    }
    for (__s17local0 = 0; __s17local0 < __s17param1.length - 1; __s17local0++) {
      var __s17local3 = __s17param1[__s17local0];
      var __s17local4 = __s17param1[__s17local0 + 1];
      var __s17local5 = new __s0local1((__s17local3.x + __s17local4.x) / 2, (__s17local3.y + __s17local4.y) / 2);
      var __s17local6 = undefined;
      if (!this._connectionLines.has(__s17local5)) {
        __s17local6 = new __dep_export_ResearchTreeConnectionLine.ResearchTreeConnectionLine(__s17local5);
        this.positionTreeComponent(__s17local6.disp, __s17local5.x, __s17local5.y);
        this._layerConnectionLine.addChild(__s17local6.disp);
        this._connectionLines.set(__s17local5, __s17local6);
      }
      if (this._connectionDots.has(__s17local3)) {
        this._connectionDots.get(__s17local3).addConnectingLine(__s17local6);
      }
      if (this._connectionDots.has(__s17local4)) {
        this._connectionDots.get(__s17local4).addConnectingLine(__s17local6);
      }
      __s17param0.addConnectionElement(__s17local6.disp);
    }
  };
  ResearchTree.prototype.createBackground = function () {
    var __s27local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Start"))();
    this._layerBackground.addChild(__s27local0);
    var __s27local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + (this._groupList[0].tabId + 1));
    for (var __s27local2 = 0; __s27local2 < this._lastXPos + 50;) {
      var __s27local3 = new __s27local1();
      this._layerBackground.addChild(__s27local3);
      __s27local3.x = __s27local0.width + __s27local2;
      __s27local2 += Math.floor(__s27local3.width);
    }
    var __s27local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "End"))();
    this._layerBackground.addChild(__s27local4);
    var __s27local5 = this._lastXPos + 50;
    if (this._tabVO.enableCategories && this._researchXPoses[this._researchXPoses.length - 1] > this._researchXPoses[this._researchXPoses.length - 2] + 1) {
      __s27local5 = this.researchXtoScreenX(this._researchXPoses[this._researchXPoses.length - 1] + 1) + 50;
    }
    __s27local4.x = Math.max(__s27local5, this._contentHolder.mask.width - __s27local4.width);
  };
  ResearchTree.prototype.createCategoryBackgrounds = function () {
    var __s32local0 = 0;
    var __s32local1 = [undefined];
    var __s32local2 = [undefined];
    this._groupList.forEach(function (__s34param0) {
      if (!__s34param0.isEmptyGroup()) {
        if (__s32local1[__s34param0.x]) {
          if (!__s32local1[__s34param0.x].includes(__s34param0.categoryID)) {
            __s32local1[__s34param0.x].push(__s34param0.categoryID);
          }
        } else {
          __s32local1[__s34param0.x] = [__s34param0.categoryID];
        }
        if (__s32local2[__s34param0.x]) {
          __s32local2[__s34param0.x]++;
        } else {
          __s32local2[__s34param0.x] = 1;
        }
      }
    });
    var __s32local3 = new Map();
    var __s32local4 = function (__s42param0) {
      var __s42local0 = __s32local1[__s42param0];
      var __s42local1 = __s42param0 == __s32local5._researchXPoses[__s32local5._researchXPoses.length - 1];
      if (__s42local0 === undefined) {
        var __s42local2 = 0;
        if (__s32local0 > 0 && __s42param0 - __s32local0 < 2) {
          __s42local2 += 3 - (__s42param0 - __s32local0);
        }
        var __s42local3 = __s42param0 + __s42local2;
        if (__s32local0 + 2 < __s42local3 && __s42local3 >= 0 && !__s42local1 && __s42local3 < __s32local5._researchXPoses[__s32local5._researchXPoses.length - 1]) {
          var __s42local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "CategoryDivider"))();
          __s32local5._layerBackground.addChild(__s42local4);
          __s32local5.positionTreeComponent(__s42local4, __s42local3, 1);
          __s32local0 = __s42local3;
          console.log("divider at x: " + __s42local3);
        }
      } else if (__s42local0.some(function (__s47param0) {
        return __s32local3.has(__s47param0);
      })) {
        if (__s42local0.length == 1 && __s32local3.has(__s42local0[0]) && __s32local3.get(__s42local0[0]).startPosX < __s42param0 - 1) {
          var __s42local5 = __s32local3.get(__s42local0[0]);
          if (__s42local5.mc_header && __s42local5.mc_line_right) {
            __s42local5.mc_header.width += ResearchTree.ITEMOFFSETX;
            __s42local5.mc_line_right.x += ResearchTree.ITEMOFFSETX;
          }
        }
      } else {
        var __s42local6 = new (__s42local0.length == 1 ? __s32local2[__s42param0] >= 2 ? __dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category") : __dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category3") : __dep_exact_81dacdf05bd32292.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category2"))();
        __s32local5._layerBackground.addChild(__s42local6);
        __s32local5.positionTreeComponent(__s42local6, __s42param0, 1);
        __s42local0.forEach(function (__s53param0) {
          return __s32local3.set(__s53param0, __s42local6);
        });
        __s42local6.startPosX = __s42param0;
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s42local6.txt_category, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_researchTower_" + __s32local5._tabVO.categoryName + __s42local0[0] + "_title")).autoFitToBounds = true;
        if (__s42local0.length > 1 && __s42local6.txt_category2) {
          __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s42local6.txt_category2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_researchTower_" + __s32local5._tabVO.categoryName + __s42local0[1] + "_title")).autoFitToBounds = true;
        }
      }
    };
    var __s32local5 = this;
    for (var __s32local6 = 1; __s32local6 < __s32local1.length; __s32local6++) {
      __s32local4(__s32local6);
    }
  };
  ResearchTree.prototype.addCoordinatesToAllPositions = function () {
    var __s58local0 = this;
    this.gridTextfields ||= [];
    this.gridTextfields.forEach(function (__s60param0) {
      return __s58local0._layerResearch.removeChild(__s60param0);
    });
    if (__dep_export_CastleModel.CastleModel.researchData.showResearchGrid) {
      var __s58local1 = 0;
      var __s58local2 = 0;
      this._items.forEach(function (__s63param0) {
        if (__s63param0.groupVO.x > __s58local1) {
          __s58local1 = __s63param0.groupVO.x;
        }
        if (__s63param0.groupVO.y > __s58local2) {
          __s58local2 = __s63param0.groupVO.y;
        }
      });
      for (var __s58local3 = 1; __s58local3 <= __s58local1; __s58local3++) {
        for (var __s58local4 = 1; __s58local4 <= __s58local2; __s58local4++) {
          var __s58local5 = new __dep_exact_81dacdf05bd32292.TextField();
          __s58local5.textColor = 16711935;
          __s58local5.scaleX = __s58local5.scaleY = 1.4;
          __s58local5.autoSize = __dep_exact_81dacdf05bd32292.TextFieldAutoSize.CENTER;
          __s58local5.text = __s58local3 + "/" + __s58local4;
          __s58local5.border = true;
          __s58local5.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD;
          __s58local5.x = this.researchXtoScreenX(__s58local3 - 1);
          __s58local5.y = this.researchXtoScreenY(__s58local4);
          __s58local5.mouseEnabled = false;
          this._layerResearch.addChild(__s58local5);
          this.gridTextfields.push(__s58local5);
        }
      }
    }
  };
  ResearchTree.prototype.update = function (__s71param0 = null) {
    Array.from(this._items.values()).forEach(function (__s73param0) {
      return __s73param0.update();
    });
    this.addCoordinatesToAllPositions();
  };
  ResearchTree.prototype.handleResearchClick = function (__s75param0) {
    this._selectionChangedCallback(__s75param0);
  };
  ResearchTree.prototype.selectGroup = function (__s77param0, __s77param1 = true, __s77param2 = 0) {
    if (this._selectedItem) {
      this._selectedItem.deselect();
    }
    this._selectedItem = this._items.get(__s77param0.id);
    this._selectedItem.select();
    if (__s77param1) {
      this._scrollComponent.scrollToValue(this._selectedItem.disp.x - __s77param2);
      this._scrollComponentSmall.scrollToValue(this._selectedItem.disp.x - __s77param2);
    }
  };
  ResearchTree.prototype.show = function () {
    this._disp.visible = true;
    this._contentHolder.addChild(this._disp);
    this.update();
    Array.from(this._items.values()).forEach(function (__s83param0) {
      return __s83param0.show();
    });
    __dep_export_CastleModel.CastleModel.researchData.addEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.update));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.update));
  };
  ResearchTree.prototype.hide = function () {
    this._disp.visible = false;
    if (this._contentHolder.children.indexOf(this._disp) > -1) {
      this._contentHolder.removeChild(this._disp);
    }
    Array.from(this._items.values()).forEach(function (__s88param0) {
      return __s88param0.hide();
    });
    if (this._selectedItem) {
      this._selectedItem.deselect();
      this._selectedItem = null;
    }
    __dep_export_CastleModel.CastleModel.researchData.removeEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.update));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.update));
  };
  ResearchTree.prototype.isVisible = function () {
    return this._disp.visible;
  };
  Object.defineProperty(ResearchTree.prototype, "lastXPos", {
    get: function () {
      return this._lastXPos;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTree.prototype.centerOnCurrentResearch = function (__s95param0 = 0) {
    var __s95local0;
    var __s95local1 = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
    if (__s95local1) {
      var __s95local2 = Array.from(this._items.values()).find(function (__s98param0) {
        return __s98param0.groupVO.id == __s95local1.groupID;
      });
      if (__s95local2) {
        this._scrollComponent.scrollToValue(__s95local2.disp.x - __s95param0);
        this._scrollComponentSmall.scrollToValue(__s95local2.disp.x - __s95param0);
        return;
      }
    }
    var __s95local3 = Array.from(this._items.values()).filter(function (__s101param0) {
      return __s101param0.groupVO.isResearchable;
    });
    if (__s95local0 = __s95local3.length > 0 ? __s95local3.reduce(this.getLowestAvailableResearch) : this._items.values()[0]) {
      this._scrollComponent.scrollToValue(__s95local0.disp.x - __s95param0);
      this._scrollComponentSmall.scrollToValue(__s95local0.disp.x - __s95param0);
    }
  };
  ResearchTree.prototype.getLowestAvailableResearch = function (__s104param0, __s104param1) {
    if (__s104param1.groupVO.isResearchable && __s104param1.groupVO.x < __s104param0.groupVO.x || __s104param1.groupVO.x <= __s104param0.groupVO.x && __s104param1.groupVO.y <= __s104param0.groupVO.y) {
      return __s104param1;
    } else {
      return __s104param0;
    }
  };
  ResearchTree.prototype.positionTreeComponent = function (__s108param0, __s108param1, __s108param2) {
    var __s108local0 = this._tabVO.enableCategories ? ResearchTree.TREEOFFSETY_CATEGORIES : ResearchTree.TREEOFFSETY;
    __s108param0.x = this.researchXtoScreenX(__s108param1);
    __s108param0.y = __s108local0 + (__s108param2 - 1) * ResearchTree.ITEMOFFSETY;
  };
  ResearchTree.prototype.researchXtoScreenX = function (__s110param0) {
    return ResearchTree.TREEOFFSETX + (__s110param0 - 1) * ResearchTree.ITEMOFFSETX;
  };
  ResearchTree.prototype.researchXtoScreenY = function (__s112param0) {
    return ResearchTree.TREEOFFSETY + (__s112param0 - 1) * ResearchTree.ITEMOFFSETY;
  };
  ResearchTree.TREEOFFSETX = 210;
  ResearchTree.TREEOFFSETY = 50;
  ResearchTree.TREEOFFSETY_CATEGORIES = 62;
  ResearchTree.ITEMOFFSETX = 80;
  ResearchTree.ITEMOFFSETY = 85;
  ResearchTree.TREE_BG_ASSET_BASENAME = "ResearchTree_BG_";
  return ResearchTree;
}();
exports.ResearchTree = __s0local2;

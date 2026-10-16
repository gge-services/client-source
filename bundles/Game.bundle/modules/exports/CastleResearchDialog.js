Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SResearchInfoVO = require("gge-module:export_C2SResearchInfoVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyHorizontal = require("gge-module:export_DynamicSizeScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleResearchDialog() {
    var __s3local0 = this;
    __s3local0._pages = [];
    __s3local0._tabs = [];
    __s3local0._currentTabIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleResearchDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResearchDialog, __s1param0);
  CastleResearchDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this._model = __dep_export_CastleModel.CastleModel.researchData;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_lastResearch], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.mc_sideMenu.btn_dropdown, 1.01, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._researchProgressInfo = new __dep_export_ResearchProgressInfo.ResearchProgressInfo(this.dialogDisp.mc_sideMenu.mc_progress);
    this._researchInfo = new __dep_export_ResearchInfo.ResearchInfo(this.dialogDisp.mc_sideMenu.mc_info);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_lastResearch.toolTipText = "dialog_researchTower_home";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("research")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_sideMenu.txt_noSelection, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_researchTower_noTechnologySelected_desc"));
    var __s5local0 = new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true, this.dialogDisp.mc_mask.width);
    var __s5local1 = new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true, this.dialogDisp.mc_mask.width);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]), __s5local0);
    this._scrollComponentSmall = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_small).addMouseWheelElements([this.dialogDisp]), __s5local1);
    this._isInfoExpanded = true;
    this._expandX = this.dialogDisp.mc_sideMenu.x;
    this._collapseX = this._expandX + (this.dialogDisp.mc_sideMenu.width - this.dialogDisp.mc_sideMenu.btn_dropdown.width);
    this._contentStartX = this.dialogDisp.mc_contentHolder.x;
  };
  CastleResearchDialog.prototype.initTabs = function () {
    if (this._tabs != null) {
      for (var __s7local0 = 0, __s7local1 = this._tabs; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.removeEventListener(__s0local0.CLICK, this.bindFunction(this.handleTabPressed));
        }
      }
    }
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.tabsHolder);
    var __s7local3 = this._model.tabsCount;
    for (var __s7local4 = __dep_exact_f855840627e6e145.int(this._model.editingEnabled ? __s7local3 * 2 : __s7local3), __s7local5 = 0; __s7local5 < __s7local4; __s7local5++) {
      var __s7local6;
      var __s7local7 = __s7local5 % __s7local3;
      var __s7local8 = this._model.tabs[__s7local7];
      var __s7local9 = this.getAsset(CastleResearchDialog.TAB_CLIP_CLASS);
      if (this._pages.length <= __s7local5) {
        this._pages.push(null);
      }
      if (__s7local5 >= __s7local3) {
        var __s7local10 = new __dep_exact_81dacdf05bd32292.ColorTransform(1, 1, 0.5, 1, 64);
        __s7local9.mc_icon.useFilters([new createjs.ColorFilter(__s7local10.redMultiplier, __s7local10.greenMultiplier, __s7local10.blueMultiplier, __s7local10.alphaMultiplier, __s7local10.redOffset, __s7local10.greenOffset, __s7local10.blueOffset, __s7local10.alphaOffset)]);
      }
      if (__s7local5 == this._currentTabIndex) {
        if (!(__s7local6 = this._pages[__s7local5])) {
          __s7local6 = this.initPageForTab(__s7local8, __s7local5);
        }
        if (!__s7local6.isVisible()) {
          __s7local6.show();
        }
        __s7local9.mc_selected.visible = true;
      } else {
        if ((__s7local6 = this._pages[__s7local5]) && __s7local6.isVisible()) {
          __s7local6.hide();
        }
        __s7local9.mc_selected.visible = false;
      }
      __s7local9.mc_icon.addChild(this.getAsset(__s7local8.iconClassName));
      __s7local9.index = __s7local5;
      __s7local9.mouseChildren = false;
      __dep_export_ButtonHelper.ButtonHelper.initButton(__s7local9, -1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7local9, __s7local8.isAvailable());
      __s7local9.addEventListener(__s0local0.CLICK, this.bindFunction(this.handleTabPressed));
      __s7local9.toolTipText = __s7local8.toolTipText;
      this.disp.tabsHolder.addChild(__s7local9);
      __s7local9.x = __s7local5 * CastleResearchDialog.TAB_SPACING;
      this._tabs[__s7local5] = __s7local9;
    }
  };
  CastleResearchDialog.prototype.updateTabs = function () {
    for (var __s22local0 = 0; __s22local0 < this._tabs.length; __s22local0++) {
      var __s22local1 = this._model.tabs[__s22local0];
      var __s22local2 = this._tabs[__s22local0];
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s22local2, __s22local1.isAvailable());
      __s22local2.toolTipText = __s22local1.toolTipText;
    }
  };
  CastleResearchDialog.prototype.initPageForTab = function (__s26param0, __s26param1) {
    var __s26local0 = new __dep_export_ResearchTree.ResearchTree(this.dialogDisp.mc_contentHolder, __s26param0, this.bindFunction(this.onSelectionChanged), this._scrollComponent, this._scrollComponentSmall);
    this._pages[__s26param1] = __s26local0;
    __s26local0.show();
    return __s26local0;
  };
  CastleResearchDialog.prototype.handleTabPressed = function (__s28param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      var __s28local0 = __dep_exact_f855840627e6e145.int(__s28param0.target.index);
      this.switchToPage(__s28local0);
    }
  };
  CastleResearchDialog.prototype.switchToPage = function (__s31param0) {
    if (__s31param0 != this._currentTabIndex) {
      this.currentPage.hide();
      this.currentTabClip.mc_selected.visible = false;
      if (this.currentTabClip.cacheCanvas) {
        this.currentTabClip.updateCache();
      }
      this._researchInfo.setResearchGroup(null);
      this._currentTabIndex = __s31param0;
      if (!this._pages[this._currentTabIndex]) {
        this.initPageForTab(this._model.tabs[__s31param0], __s31param0);
      }
      if (!this.currentPage.isVisible()) {
        this.currentPage.show();
      }
      this.collapse();
      this.updateScrollComponent(this._scrollComponent);
      this.updateScrollComponent(this._scrollComponentSmall);
      this.currentPage.centerOnCurrentResearch(this.centerOffset);
      this.currentTabClip.mc_selected.visible = true;
      if (this.currentTabClip.cacheCanvas) {
        this.currentTabClip.updateCache();
      }
    }
  };
  CastleResearchDialog.prototype.updateScrollComponent = function (__s38param0, __s38param1 = true) {
    var __s38local0 = __s38param0.currentValue;
    var __s38local1 = Math.max(0, __dep_export_ResearchTree.ResearchTree.TREEOFFSETX + this.currentPage.lastXPos - this.centerOffset * 2);
    __s38param0.init(0, __s38local1, __dep_export_ResearchTree.ResearchTree.ITEMOFFSETX, __dep_export_ResearchTree.ResearchTree.ITEMOFFSETX);
    __s38param0.show();
    if (this.currentScrollComponent == __s38param0) {
      __s38param0.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
      __s38param0.setVisibility(true);
    } else {
      __s38param0.setVisibility(false);
    }
    __s38param0.scrollToValue(__s38param1 ? 0 : __s38local0);
    __s38param0.enableComponent(__s38local1 > 0);
  };
  CastleResearchDialog.prototype.onScrollValueChange = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.dialogDisp.mc_contentHolder);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.dialogDisp.mc_contentHolder, 0.15, {
      x: this._contentStartX - this.currentScrollComponent.currentValue,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    this._scrollComponent.scrollToValue(this.currentScrollComponent.currentValue, false);
    this._scrollComponentSmall.scrollToValue(this.currentScrollComponent.currentValue, false);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "currentScrollComponent", {
    get: function () {
      if (this._isInfoExpanded) {
        return this._scrollComponentSmall;
      } else {
        return this._scrollComponent;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchDialog.prototype, "currentTabClip", {
    get: function () {
      return this._tabs[this._currentTabIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchDialog.prototype, "currentPage", {
    get: function () {
      if (this._currentTabIndex < this._pages.length) {
        return this._pages[this._currentTabIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.prototype.showLoaded = function (__s54param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    if (this._tabs && this._tabs.length != 0) {
      this.updateTabs();
    } else {
      this.initTabs();
    }
    if (!this.currentPage.isVisible()) {
      this.currentPage.show();
    }
    this._researchProgressInfo.show();
    this._researchInfo.show();
    this.collapse(true);
    this.updateScrollComponent(this._scrollComponent);
    this.updateScrollComponent(this._scrollComponentSmall);
    this.currentPage.centerOnCurrentResearch(this.centerOffset);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SResearchInfoVO.C2SResearchInfoVO());
    if (this.dialogProperties) {
      this.openNextResearch(this.dialogProperties.researchVOToDisplay, this.dialogProperties.recentlyFinishedResearchVO);
    } else {
      var __s54local0 = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO;
      if (__s54local0 && __s54local0.groupVO.tabId != this._currentTabIndex) {
        this.switchToPage(__s54local0.groupVO.tabId);
      }
      this.currentPage.centerOnCurrentResearch(this.centerOffset);
    }
  };
  CastleResearchDialog.prototype.hideLoaded = function (__s62param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.currentPage.hide();
    this._researchProgressInfo.hide();
    this._researchInfo.hide();
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._scrollComponentSmall.hide();
      this._scrollComponentSmall.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    }
  };
  CastleResearchDialog.prototype.jumpToGroup = function (__s65param0, __s65param1 = true) {
    if (__s65param0.tabId != this._currentTabIndex) {
      this.switchToPage(__s65param0.tabId);
    }
    if (!this._isInfoExpanded) {
      this.expand();
    }
    this.currentPage.selectGroup(__s65param0, __s65param1, this.centerOffset);
    this._researchInfo.setResearchGroup(__s65param0);
  };
  CastleResearchDialog.prototype.onClick = function (__s69param0) {
    switch (__s69param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_export_CastleModel.CastleModel.languageData.getTextById("help_research"));
        break;
      case this.dialogDisp.btn_lastResearch:
        this.jumpToBestResearch();
        break;
      case this.dialogDisp.mc_sideMenu.btn_dropdown:
        this.toggleExpansion();
    }
  };
  CastleResearchDialog.prototype.jumpToBestResearch = function () {
    var __s72local0 = [__dep_export_CollectableEnum.CollectableEnum.C2, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.WOOD];
    var __s72local1 = null;
    var __s72local2 = null;
    for (var __s72local3 = 0, __s72local4 = Array.from(__dep_export_CastleModel.CastleModel.researchData.groupVOs.values()); __s72local3 < __s72local4.length; __s72local3++) {
      if ((__s72local12 = __s72local4[__s72local3]) !== undefined && __s72local12.tabId == this._currentTabIndex && __s72local12.isResearchable) {
        var __s72local5 = __s72local12.topResearch.getFinalCosts();
        if (__s72local1) {
          for (var __s72local6 = 0; __s72local6 < __s72local0.length; __s72local6++) {
            var __s72local7 = __s72local0[__s72local6];
            var __s72local8 = __s72local2.getFirstItemOfType(__s72local7);
            var __s72local9 = __s72local5.getFirstItemOfType(__s72local7);
            if (__s72local9 != null && __s72local8 != null) {
              if (__s72local9.amount > __s72local8.amount) {
                __s72local1 = __s72local12;
                __s72local2 = __s72local5;
                break;
              }
              if (__s72local9.amount < __s72local8.amount) {
                break;
              }
            }
          }
        } else {
          __s72local1 = __s72local12;
          __s72local2 = __s72local5;
        }
      }
    }
    if (__s72local1) {
      this.jumpToGroup(__s72local1);
    } else {
      for (var __s72local10 = 0, __s72local11 = Array.from(__dep_export_CastleModel.CastleModel.researchData.groupVOs.values()); __s72local10 < __s72local11.length; __s72local10++) {
        var __s72local12;
        if ((__s72local12 = __s72local11[__s72local10]) !== undefined && __s72local12.tabId == this._currentTabIndex && !__s72local12.isEmptyGroup()) {
          this.jumpToGroup(__s72local12);
          break;
        }
      }
    }
  };
  CastleResearchDialog.prototype.onSelectionChanged = function (__s89param0) {
    this.jumpToGroup(__s89param0);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.prototype.getAsset = function (__s93param0) {
    return new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName(__s93param0))();
  };
  CastleResearchDialog.prototype.openNextResearch = function (__s95param0, __s95param1) {
    if (__s95param0 != null) {
      this.jumpToGroup(__s95param0.groupVO);
    } else if (__s95param1 != null) {
      this.jumpToGroup(__s95param1.groupVO);
    }
  };
  CastleResearchDialog.prototype.toggleExpansion = function () {
    if (this._isInfoExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  };
  CastleResearchDialog.prototype.expand = function (__s103param0 = false) {
    if (!this._isInfoExpanded) {
      this.currentScrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._isInfoExpanded = true;
      __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.dialogDisp.mc_sideMenu);
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.dialogDisp.mc_sideMenu, __s103param0 ? 0.2 : 0, {
        x: this._expandX,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleResearchDialog.prototype.collapse = function (__s106param0 = false) {
    if (this._isInfoExpanded) {
      this.currentScrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._isInfoExpanded = false;
      __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.dialogDisp.mc_sideMenu);
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.dialogDisp.mc_sideMenu, __s106param0 ? 0.2 : 0, {
        x: this._collapseX,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleResearchDialog.prototype.onExpandComplete = function () {
    this.dialogDisp.mc_sideMenu.btn_dropdown.arrow_down.visible = this._isInfoExpanded;
    this.dialogDisp.mc_sideMenu.btn_dropdown.arrow_up.visible = !this._isInfoExpanded;
    this.updateScrollComponent(this._scrollComponent, false);
    this.updateScrollComponent(this._scrollComponentSmall, false);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "centerOffset", {
    get: function () {
      if (this._isInfoExpanded) {
        return (this.dialogDisp.mc_mask.width - this.dialogDisp.mc_sideMenu.width) / 2;
      } else {
        return (this.dialogDisp.mc_mask.width - this.dialogDisp.mc_sideMenu.btn_dropdown.width) / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.__initialize_static_members = function () {
    CastleResearchDialog.MAX_ZOOM = 1;
    CastleResearchDialog.OPTIMAL_ZOOM_STEP = 1.5;
  };
  CastleResearchDialog.NAME = "CastleResearch_23Jan";
  CastleResearchDialog.TAB_CLIP_CLASS = "Btn_Research_Tab";
  CastleResearchDialog.TAB_SPACING = 64;
  return CastleResearchDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleResearchDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ResearchInfo = require("gge-module:export_ResearchInfo");
var __dep_export_ResearchProgressInfo = require("gge-module:export_ResearchProgressInfo");
var __dep_export_ResearchTree = require("gge-module:export_ResearchTree");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

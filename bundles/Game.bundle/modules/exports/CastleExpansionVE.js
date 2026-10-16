Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleExpansionDialogProperties = require("gge-module:export_CastleExpansionDialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_IsoExpansionEnum = require("gge-module:export_IsoExpansionEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_AInteractiveIsoObjectVE = require("gge-module:export_AInteractiveIsoObjectVE");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.MovieClip;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function CastleExpansionVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExpansionVE, __s1param0);
  CastleExpansionVE.prototype.initElementContainer = function () {
    __s1param0.prototype.initElementContainer.call(this);
    this.elementContainer.mouseChildren = true;
  };
  CastleExpansionVE.prototype.addEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
    __s1param0.prototype.addEventListener.call(this);
  };
  CastleExpansionVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleExpansionVE.prototype.destroyDisp = function () {
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_REMOVED, [this]));
    if (this.externalClip && this.externalClip.clipLoaded) {
      this.externalClip.clipLoaded.removeAll();
    }
    __s1param0.prototype.destroyDisp.call(this);
  };
  CastleExpansionVE.prototype.updateDisp = function () {
    __s1param0.prototype.updateDisp.call(this);
    if (this.disp) {
      this.disp.mouseChildren = true;
    }
  };
  CastleExpansionVE.prototype.createDisp = function () {
    if (this.canShow) {
      var __s17local0 = new __s0local0();
      var __s17local1 = new __s0local0();
      this.objectLayer = new __s0local0();
      __s17local0.addChild(__s17local1);
      __s17local0.addChild(this.objectLayer);
      switch (this.vo.rotation) {
        case 0:
          this._expandArea = this.loadExpansion("ExpandArea_RightEx");
          this.loadExpansion("ExpandArrows_RightEx");
          break;
        case 1:
          this._expandArea = this.loadExpansion("ExpandArea_DownEx");
          this.loadExpansion("ExpandArrows_DownEx");
          break;
        case 2:
          this._expandArea = this.loadExpansion("ExpandArea_LeftEx");
          this.loadExpansion("ExpandArrows_LeftEx");
          break;
        case 3:
          this._expandArea = this.loadExpansion("ExpandArea_UpEx");
          this.loadExpansion("ExpandArrows_UpEx");
      }
      this._expandArea.visible = false;
      __s17local1.addChild(this._expandArea);
      this.dispComponent.addDisp(__s17local0);
    }
  };
  CastleExpansionVE.prototype.loadExpansion = function (__s21param0) {
    var __s21local0 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ExpandionsEx");
    this.externalClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s21param0, __s21local0, null, 0, false);
    if (this.externalClip.isLoaded) {
      this.arrowComplete(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.arrowComplete));
    }
    return this.externalClip;
  };
  CastleExpansionVE.prototype.addFunctionOnWaitForLoadComplete = function (__s25param0) {
    if (this.externalClip) {
      if (this.externalClip.isLoaded) {
        this.arrowComplete(__s25param0);
      } else {
        this.externalClip.clipLoaded.addOnce(__s25param0);
      }
    }
  };
  CastleExpansionVE.prototype.arrowComplete = function (__s30param0) {
    if (__s30param0.currentshownDisplayObject instanceof __s0local1 && __s30param0.currentshownDisplayObject.arrow_premium) {
      this._expandArrow = __s30param0.currentshownDisplayObject;
      var __s30local0 = this.isoRenderer.camera.getScreenPosByGridPosDelta(new __s0local2(this.vo.rotatedWidth / 2, this.vo.rotatedHeight / 2));
      this._expandArrow.x = this._expandArea.x = __s30local0.x;
      this._expandArrow.y = this._expandArea.y = __s30local0.y;
      this.objectLayer.addChild(this._expandArrow);
      this._expandArrow.gotoAndStop(2);
      this.enableArrow(this._expandArrow.arrow_normal, this.expansionVO.userHasLevelForBuyNormal && !this.expansionVO.isSceatLocked);
      this.enableArrow(this._expandArrow.arrow_premium, this.expansionVO.userHasLevelForBuyPremium && !this.expansionVO.isSceatLocked);
      this._expandArrow.arrow_premium.visible = this._expandArrow.arrow_normal.visible = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EXPANSION_ARROWS && __dep_export_CastleModel.CastleModel.expansionCostsData.expansionAvailable();
      this._expandArrow.arrow_premium.visible = this._expandArrow.arrow_normal.visible && __dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff.TutorialConst.LAST_TUTORIAL_STEP_XP && __dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostC2() > 0;
      this._expandArrow.arrow_normal.mouseChildren = false;
      this._expandArrow.arrow_premium.mouseChildren = false;
      this._expandArrow.arrow_normal.scaleX = this._expandArrow.arrow_normal.scaleY = 1;
      this._expandArrow.arrow_premium.scaleX = this._expandArrow.arrow_premium.scaleY = 1;
    }
  };
  CastleExpansionVE.prototype.enableArrow = function (__s33param0, __s33param1) {
    if (this._colorMatrix == null) {
      this._colorMatrix = new __dep_exact_9e901e8e2483a22f_2.ColorMatrix();
      this._colorMatrix.desaturate();
    }
    if (__s33param1) {
      __s33param0.useFilters(null, true);
    } else {
      __s33param0.useFilters([this._colorMatrix.filter], true);
    }
    __s33param0.enabled = __s33param1;
  };
  Object.defineProperty(CastleExpansionVE.prototype, "canShow", {
    get: function () {
      return this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW) && !!__dep_export_CastleModel.CastleModel.expansionCostsData.getCurrentExpansionCostsVO();
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.EXPAND_ARROWS;
  };
  Object.defineProperty(CastleExpansionVE.prototype, "isHoveringOverClickElement", {
    get: function () {
      return this._lastHoveredTarget != null;
    },
    set: function (__s44param0) {
      this._lastHoveredTarget.enabled = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "uiDisp", {
    get: function () {
      return this._lastHoveredTarget;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE.prototype, "uiDisp").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "uiPos", {
    get: function () {
      return new __s0local2(this._lastHoveredTarget.x, this._lastHoveredTarget.y);
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE.prototype, "uiPos").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionVE.prototype.onMouseOut = function (__s54param0) {
    if (this._expandArea) {
      this._expandArea.visible = false;
      if (__dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s54param0.target).indexOf("ExpandArrow_") >= 0) {
        __s54param0.target.scaleX = __s54param0.target.scaleY = 1;
        __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
        __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_InfoTooltipExpansion.InfoTooltipExpansion);
        this._currentToolTipArrow = null;
        if (this.disp.cacheCanvas) {
          this.disp.updateCache();
        }
      }
    }
  };
  CastleExpansionVE.prototype.onMouseOver = function (__s59param0) {
    if (this._expandArea && __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s59param0.target).indexOf("ExpandArrow_") >= 0) {
      this._expandArea.visible = true;
      this._lastHoveredTarget = __s59param0.target;
      var __s59local0 = __s59param0.target;
      __s59local0.scaleX = __s59local0.scaleY = 1.04;
      this._currentToolTipArrow = __s59local0;
      if (this.disp.cacheCanvas) {
        this.disp.updateCache();
      }
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      __dep_export_CastleComponent.CastleComponent.layoutManager.showIngameUIComponent(__dep_export_InfoTooltipExpansion.InfoTooltipExpansion, this);
    }
  };
  CastleExpansionVE.prototype.onMouseClick = function () {
    var __s63local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(this._lastHoveredTarget);
    if (this.expansionVO.isSceatLocked) {
      this.expansionVO.expansionType = __dep_export_IsoExpansionEnum.IsoExpansionEnum.NORMAL;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMissingSceatSkillExpansionDialog.CastleMissingSceatSkillExpansionDialog);
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_InfoTooltipExpansion.InfoTooltipExpansion);
    } else if (__s63local0.indexOf("ExpandArrow_Premium") >= 0 && this.expansionVO.userHasLevelForBuyPremium) {
      this.expansionVO.expansionType = __dep_export_IsoExpansionEnum.IsoExpansionEnum.PREMIUM;
      if (this.expansionVO.userHasC2ForBuy) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleExpansionDialog.CastleExpansionDialog, new __dep_export_CastleExpansionDialogProperties.CastleExpansionDialogProperties(true, this.bindFunction(this.sendBuyRequestToServer)));
      } else {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
      }
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_InfoTooltipExpansion.InfoTooltipExpansion);
    } else if (__s63local0.indexOf("ExpandArrow_Normal") >= 0 && this.expansionVO.userHasLevelForBuyNormal) {
      this.expansionVO.expansionType = __dep_export_IsoExpansionEnum.IsoExpansionEnum.NORMAL;
      if (this.expansionVO.userHasResourcesForBuy) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleExpansionDialog.CastleExpansionDialog, new __dep_export_CastleExpansionDialogProperties.CastleExpansionDialogProperties(false, this.bindFunction(this.sendBuyRequestToServer)));
      } else {
        this.sendBuyRequestToServer();
      }
      __dep_export_CastleComponent.CastleComponent.layoutManager.hideIngameUIComponent(__dep_export_InfoTooltipExpansion.InfoTooltipExpansion);
    }
  };
  CastleExpansionVE.prototype.onLevelUp = function (__s72param0) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onLegendSkillsUpdated = function (__s74param0) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onRenderStrategyChanged = function (__s76param0) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_EXPANSION_ARROW_ADDED, [this]));
  };
  CastleExpansionVE.prototype.sendBuyRequestToServer = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.hideAllIngameUIComponents();
    __dep_export_Iso.Iso.controller.server.buyExpansion(this.vo.pos, this.vo.rotation, this.expansionVO.expansionType);
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_BUY_EXPANSION, [this.vo]));
  };
  Object.defineProperty(CastleExpansionVE.prototype, "expansionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "expandArrow", {
    get: function () {
      return this._expandArrow;
    },
    enumerable: true,
    configurable: true
  });
  return CastleExpansionVE;
}(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE);
exports.CastleExpansionVE = __s0local3;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleExpansionDialog = require("gge-module:export_CastleExpansionDialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_InfoTooltipExpansion = require("gge-module:export_InfoTooltipExpansion");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleMissingSceatSkillExpansionDialog = require("gge-module:export_CastleMissingSceatSkillExpansionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList", "IIngameUICapable");

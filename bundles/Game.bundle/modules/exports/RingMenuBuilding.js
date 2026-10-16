Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_IsoWorldRingMenu = require("gge-module:export_IsoWorldRingMenu");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function (__s1param0) {
  function RingMenuBuilding() {
    var __s3local0 = this;
    __s3local0._buttons = [];
    __s3local0._dragRef = undefined;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.RingMenu_Building_Aug24()) || this).infoArea = new __dep_export_RingmenuBuildingInfoArea.RingmenuBuildingInfoArea(__s3local0.ringMenu);
    __s3local0.ringMenu.btn_addSwordBrother.visible = false;
    __s3local0.ringMenu.mouseEnabled = true;
    __s3local0.ringMenu.bg.mouseChildren = false;
    __s3local0.ringMenu.bg.mouseEnabled = false;
    __s3local0._updateTimer = new __dep_exact_81dacdf05bd32292.Timer(500);
    __s3local0._updateTimer.addEventListener(__s0local1.TIMER, __s3local0.bindFunction(__s3local0.timerUpdate));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuBuilding, __s1param0);
  RingMenuBuilding.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this._updateTimer.start();
    this.timerUpdate(null);
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onHelpRequestDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this._onLevelUp));
    this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, [this.targetBuilding]));
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this._dragRef = undefined;
      this.disp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPressMove));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onPressMoveRelease));
    }
  };
  RingMenuBuilding.prototype.onPressMove = function (__s8param0) {
    if (this._dragRef) {
      var __s8local0 = this.disp.globalToLocal(__s8param0.stageX, __s8param0.stageY);
      var __s8local1 = __s8local0.x - this._dragRef.x;
      var __s8local2 = __s8local0.y - this._dragRef.y;
      if (Math.abs(__s8local1) + Math.abs(__s8local2) > 10) {
        this.disp.x += __s8local1;
        this.disp.y += __s8local2;
      }
    } else {
      this._dragRef = this.disp.globalToLocal(__s8param0.stageX, __s8param0.stageY);
    }
  };
  RingMenuBuilding.prototype.updateMenuPosition = function () {
    var __s13local0 = this.target;
    if (__s13local0 && this._dragRef === undefined) {
      var __s13local1;
      var __s13local2 = __s13local0.uiPos;
      if (__s13local0.vo && __s13local0.vo.isInBuildingDistrict) {
        __s13local2.y = Math.max(-80, __s13local2.y);
      }
      if (__s13local0.uiDisp) {
        if (__s13local0.uiDisp) {
          __s13local1 = __s13local0.uiDisp.localToGlobal(__s13local2);
          this.disp.x = __s13local1.x;
          this.disp.y = __s13local1.y;
        }
      }
    }
  };
  RingMenuBuilding.prototype.onPressMoveRelease = function () {
    this._dragRef = null;
  };
  RingMenuBuilding.prototype.hide = function () {
    if (this.isVisible()) {
      this._updateTimer.stop();
      if (this._buttons != null) {
        for (var __s21local0 = 0, __s21local1 = this._buttons; __s21local0 < __s21local1.length; __s21local0++) {
          var __s21local2 = __s21local1[__s21local0];
          if (__s21local2 !== undefined) {
            __s21local2.removeEventListeners();
          }
        }
      }
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        this._dragRef = undefined;
        this.disp.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPressMove));
        this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onPressMoveRelease));
      }
      __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onHelpRequestDataUpdated));
      this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this._onLevelUp));
      __s1param0.prototype.hide.call(this);
      __dep_export_IsoHelper.IsoHelper.view.showRingMenu(false);
      this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_HIDE_RING_MENU, []));
    }
  };
  RingMenuBuilding.prototype.onHelpRequestDataUpdated = function (__s29param0) {
    this.updateComponent();
  };
  RingMenuBuilding.prototype._onLevelUp = function (__s31param0) {
    if (this.targetBuilding) {
      this.updateComponent();
    }
  };
  RingMenuBuilding.prototype.timerUpdate = function (__s34param0 = null) {
    if (this.targetBuilding && this.targetBuilding.disp) {
      if (this._buttons != null) {
        for (var __s34local0 = 0, __s34local1 = this._buttons; __s34local0 < __s34local1.length; __s34local0++) {
          var __s34local2 = __s34local1[__s34local0];
          if (__s34local2 !== undefined) {
            __s34local2.timerUpdate(__s34param0);
          }
        }
      }
      this.infoArea.update();
    }
  };
  RingMenuBuilding.prototype.onClick = function (__s41param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      __s1param0.prototype.onClick.call(this, __s41param0);
      var __s41local0 = {
        OID: this.targetBuilding.vo.objectId
      };
      if (this._buttons != null) {
        for (var __s41local1 = 0, __s41local2 = this._buttons; __s41local1 < __s41local2.length; __s41local1++) {
          var __s41local3 = __s41local2[__s41local1];
          if (__s41local3 !== undefined && __s41param0.target == __s41local3.disp) {
            var __s41local4 = true;
            if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s41param0)) {
              __s41local4 = __s41local3.touchClickCount === 1;
            }
            if (__s41local4) {
              __s41local3.onClick(__s41local0, __s41param0);
              __s41local3.touchClickCount = 0;
            } else {
              this.infoArea.onMouseOver(__s41local3);
              __s41local3.touchClickCount = 1;
            }
            return;
          }
        }
      }
    }
  };
  RingMenuBuilding.prototype.onMouseOver = function (__s51param0) {
    __s1param0.prototype.onMouseOver.call(this, __s51param0);
    if (this._buttons != null) {
      for (var __s51local0 = 0, __s51local1 = this._buttons; __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined && __s51param0.target == __s51local2.disp) {
          this.infoArea.onMouseOver(__s51local2);
          return;
        }
      }
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s51param0.target)) {
      __s51param0.target.useFilters([]);
      __s51param0.target.useFilters(this.hoverFilter);
    }
  };
  RingMenuBuilding.prototype.onMouseOut = function (__s58param0) {
    __s1param0.prototype.onMouseOut.call(this, __s58param0);
    this.infoArea.onMouseOut();
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s58param0.target)) {
      __s58param0.target.useFilters([]);
    }
  };
  RingMenuBuilding.prototype.onMouseUp = function (__s61param0) {
    __s1param0.prototype.onMouseUp.call(this, __s61param0);
    __dep_export_Iso.Iso.renderer.mouse.stopWorldDragging();
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s61param0.target)) {
      __s61param0.target.useFilters([]);
    }
  };
  RingMenuBuilding.prototype.initComponent = function () {
    __s1param0.prototype.initComponent.call(this);
    if (this.targetBuilding) {
      this.reinitializeButtons();
      this.infoArea.init(this.targetBuilding);
      if (this.visibleAndEnabledButtonsCount == 0) {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  RingMenuBuilding.prototype.reinitializeButtons = function () {
    var __s69local0;
    for (var __s69local1 = 0, __s69local2 = this._buttons; __s69local1 < __s69local2.length; __s69local1++) {
      (__s69local0 = __s69local2[__s69local1]).destroy();
    }
    this.hideAllButtons();
    this.infoArea.init(this.targetBuilding);
    this._buttons = this.targetBuilding.getRingMenuButtons();
    for (var __s69local3 = 0, __s69local4 = this._buttons; __s69local3 < __s69local4.length; __s69local3++) {
      (__s69local0 = __s69local4[__s69local3]).init(this, this.ringMenu, this.targetBuilding);
      __s69local0.addEventListeners();
    }
  };
  RingMenuBuilding.prototype.updateComponent = function () {
    if (this._buttons != null) {
      for (var __s75local0 = 0, __s75local1 = this._buttons; __s75local0 < __s75local1.length; __s75local0++) {
        var __s75local2 = __s75local1[__s75local0];
        if (__s75local2 !== undefined) {
          __s75local2.init(this, this.ringMenu, this.targetBuilding);
        }
      }
    }
    this.infoArea.update();
    if (this.visibleAndEnabledButtonsCount == 0) {
      this.hide();
    }
  };
  RingMenuBuilding.prototype.hideAllButtons = function () {
    for (var __s82local0 = 0; __s82local0 < this.ringMenu.numChildren; __s82local0++) {
      var __s82local1 = this.ringMenu.getChildAt(__s82local0);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s82local1, "BasicButton")) {
        __s82local1.visible = false;
      }
    }
  };
  Object.defineProperty(RingMenuBuilding.prototype, "visibleAndEnabledButtonsCount", {
    get: function () {
      var __s87local0 = 0;
      for (var __s87local1 = 0; __s87local1 < this.ringMenu.numChildren; __s87local1++) {
        var __s87local2 = this.ringMenu.getChildAt(__s87local1);
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s87local2, "BasicButton") && __s87local2.visible && __s87local2.enabled) {
          __s87local0++;
        }
      }
      return __s87local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuBuilding.prototype, "hoverFilter", {
    get: function () {
      var __s92local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s92local0.fill(15921906);
      var __s92local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s92local1.blend(__s92local0, 0.35);
      return [__s92local1.filter];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuBuilding.prototype, "downFilter", {
    get: function () {
      var __s94local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s94local0.fill(0);
      var __s94local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s94local1.blend(__s94local0, 0.35);
      return [__s94local1.filter];
    },
    enumerable: true,
    configurable: true
  });
  RingMenuBuilding.prototype.onMouseDown = function (__s96param0) {
    __s1param0.prototype.onMouseDown.call(this, __s96param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s96param0.target)) {
      __s96param0.target.useFilters(this.downFilter);
    }
  };
  Object.defineProperty(RingMenuBuilding.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  RingMenuBuilding.NAME = "RingMenuBuilding";
  RingMenuBuilding.ACTION_UPGRADE = 0;
  RingMenuBuilding.ACTION_REPAIR = 1;
  RingMenuBuilding.ACTION_DISASSEMBLE = 2;
  RingMenuBuilding.ACTION_INSTANT_BUILD = 3;
  return RingMenuBuilding;
}(__dep_export_IsoWorldRingMenu.IsoWorldRingMenu);
exports.RingMenuBuilding = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_RingmenuBuildingInfoArea = require("gge-module:export_RingmenuBuildingInfoArea");

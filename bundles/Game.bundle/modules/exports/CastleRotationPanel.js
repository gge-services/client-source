Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRotationPanel() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.RotationPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRotationPanel, __s1param0);
  CastleRotationPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.rotationPanel.btn_rotate, this.rotationPanel.btn_exit]);
    this.rotationPanel.btn_rotate.toolTipText = "rotate";
    this.rotationPanel.btn_exit.toolTipText = "dialog_recruit_abort";
  };
  CastleRotationPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleRotationPanel.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this._rotationTarget = null;
    __s1param0.prototype.hide.call(this);
  };
  CastleRotationPanel.prototype.initAfterShow = function (__s11param0) {
    this._rotationTarget = __s11param0;
    this.updatePosition();
  };
  CastleRotationPanel.prototype.updatePosition = function () {
    if (this.rotationPanel && this.rotationPanel.stage) {
      this.rotationPanel.y = this.rotationPanel.stage.stageHeight;
      this.rotationPanel.x = this.rotationPanel.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.rotationPanel.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleRotationPanel.prototype.onClick = function (__s17param0) {
    switch (__s17param0.target) {
      case this.rotationPanel.btn_rotate:
        this.onRotateButtonClick();
        break;
      case this.rotationPanel.btn_exit:
        this.onAbortButtonClick();
    }
  };
  CastleRotationPanel.prototype.onRotateButtonClick = function () {
    if (this.rotationTarget && this.rotationTarget.disp) {
      this.rotationTarget.vo.rotate();
      this.rotationTarget.updateRotation();
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.rotationTarget, "ABasicBuildingVE")) {
        this.rotationTarget.renewCollisionFloor();
      }
      __dep_export_Iso.Iso.renderer.mouse.onDragTileMove();
    }
  };
  CastleRotationPanel.prototype.onAbortButtonClick = function () {
    __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
    this._rotationTarget = null;
    this.hide();
  };
  CastleRotationPanel.prototype.onChangeLayoutState = function (__s26param0) {
    if (this.rotationTarget && __dep_export_Iso.Iso.renderer.mouse.isDragging) {
      this.show();
    } else {
      this.hide();
    }
  };
  CastleRotationPanel.prototype.onMouseOut = function (__s30param0) {
    __s1param0.prototype.onMouseOut.call(this, __s30param0);
    if (this.rotationTarget) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
    } else {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleRotationPanel.prototype.onEndSpecialEvent = function (__s34param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s34param0.specialEventVO, "PrimeSaleEventVO") && this.rotationTarget) {
      var __s34local0 = __s34param0.specialEventVO;
      if (this.rotationTarget.vo.wodId == __s34local0.primeSaleComponent.wodID) {
        __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
      }
    }
  };
  CastleRotationPanel.prototype.onOfferRemoved = function (__s38param0) {};
  Object.defineProperty(CastleRotationPanel.prototype, "rotationPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRotationPanel.prototype, "rotationTarget", {
    get: function () {
      return this._rotationTarget;
    },
    enumerable: true,
    configurable: true
  });
  CastleRotationPanel.__initialize_static_members = function () {
    CastleRotationPanel.NAME = "CastleRotationPanel";
  };
  return CastleRotationPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleRotationPanel = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__s0local0.__initialize_static_members();

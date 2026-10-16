Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleBasicAdvancedFightScreenDialogHelper() {
    this._displayType = 0;
  }
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleTarget = function (__s5param0) {};
  CastleBasicAdvancedFightScreenDialogHelper.prototype.update = function () {
    if (this.isVisible()) {
      this.display();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.hide = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.hideAll(this._fightDialog);
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handle = function (__s13param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "DisplayObject")) {
      if (this.isValidTarget(__s13param0, this._fightDialog)) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "AttackWavePicker")) {
          this.update();
        } else if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0.parent, "AttackWavePicker")) {
          this.resetCurrent();
          this.handleTarget(__s13param0);
        }
      }
    } else {
      this.update();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.resetCurrent = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.reset();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.isValidTarget = function (__s23param0, __s23param1) {
    return !__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s23param0, __s23param1.castleadvancedTroopSelection.disp) || __s23param0 == __s23param1.castleadvancedTroopSelection.disp.btn_ok;
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.display = function () {
    this.showContainerConnector();
    this.displayListComponent();
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleDefault = function (__s27param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s27param0, "AttackSlotContainer")) {
      this.handleDialogSlotContainer(__s27param0);
      this.display();
    } else {
      this.hide();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleDialogSlotContainer = function (__s31param0) {};
  CastleBasicAdvancedFightScreenDialogHelper.prototype.showContainerConnector = function () {
    if (!__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      if (this._advancedFightScreenConnector) {
        this._advancedFightScreenConnector.show();
      }
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.displayListComponent = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.displayComponent(this._fightDialog);
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.isVisible = function () {
    return !!this._advancedFightScreenConnector && this._advancedFightScreenConnector.isVisible;
  };
  return CastleBasicAdvancedFightScreenDialogHelper;
}();
exports.CastleBasicAdvancedFightScreenDialogHelper = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedFightscreenHandler");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_DebugError = require("gge-module:export_DebugError");
var __s0local0 = function (__s1param0) {
  function CastleToolTipManager(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.MAX_WIDTH_NORMAL = 265;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3param0.mouseChildren = __s3param0.mouseEnabled = false;
    __s3local0._tooltipLayer.cacheAsBitmap = false;
    __s3local0._tooltipLayer.mouseChildren = __s3local0._tooltipLayer.mouseEnabled = false;
    __s3local0.textFieldHeightAdditive = 1;
    __s3local0.textFieldWidthAdditive = 1;
    __s3local0._max_width = __s3local0.MAX_WIDTH_NORMAL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleToolTipManager, __s1param0);
  CastleToolTipManager.prototype.showWithScale = function (__s5param0, __s5param1, __s5param2, __s5param3 = null) {
    var __s5local0 = __s5param3.width;
    var __s5local1 = __s5param3.height;
    __s5param3.width = __s5param1;
    __s5param3.height = __s5param2;
    __s1param0.prototype.show.call(this, __s5param0, __s5param3);
    __s5param3.width = __s5local0;
    __s5param3.height = __s5local1;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._disp, 0.2, {
      alpha: 1
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  CastleToolTipManager.prototype.show = function (__s7param0, __s7param1 = null) {
    if (__s7param1 && __dep_exact_81dacdf05bd32292.instanceOfClass(__s7param1, "MovieClip") && __s7param1.hasOwnProperty("tooltip") && __s7param1.tooltip) {
      __s7param1 = __s7param1.tooltip;
    }
    if (__s7param0 && __s7param0.hasOwnProperty("width")) {
      this._max_width = __s7param0.width;
    } else {
      this._max_width = this.MAX_WIDTH_NORMAL;
    }
    __s1param0.prototype.show.call(this, __s7param0, __s7param1);
    if (__s7param0 && __s7param0.hasOwnProperty("ox")) {
      this._disp.x += __s7param0.ox;
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._disp, 0.2, {
      alpha: 1
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  Object.defineProperty(CastleToolTipManager.prototype, "languageFontmanager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicLanguageFontManager.getInstance();
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager.prototype, "languageFontmanager").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleToolTipManager.prototype.assignToolTipText = function (__s17param0) {
    var __s17local0 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    if (typeof __s17param0 == "string") {
      var __s17local1 = __s17param0.split(CastleToolTipManager.ID_PARAM_SEPERATOR);
      var __s17local2 = __s17local1.shift();
      if (__s17local1.length > 0) {
        var __s17local3 = __s17local1[0].split(",");
        __s17local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s17local2, __s17local3));
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, __s17local0);
          this._ggsTextField.textAlign = __dep_exact_9e901e8e2483a22f_2.GGSTextAlign.CENTER;
        } else {
          this._ggsTextField.textContentVO = __s17local0;
        }
      } else {
        __s17local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s17local2));
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, __s17local0);
          this._ggsTextField.textAlign = __dep_exact_9e901e8e2483a22f_2.GGSTextAlign.CENTER;
        } else {
          this._ggsTextField.textContentVO = __s17local0;
        }
      }
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s17param0, "AbstractTextContentVO")) {
      __s17local0.addLocalizedTextVO(__s17param0);
      if (this.registrationIsNeeded()) {
        this._ggsTextField = this.textFieldManager.registerTextField(this._textField, __s17local0);
        this._ggsTextField.textAlign = __dep_exact_9e901e8e2483a22f_2.GGSTextAlign.CENTER;
      } else {
        this._ggsTextField.textContentVO = __s17local0;
      }
    } else {
      __s17local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s17param0.t, __s17param0.p));
      if (__s17param0.hasOwnProperty("t")) {
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, __s17local0);
        } else {
          this._ggsTextField.textContentVO = __s17local0;
        }
      } else {
        __dep_export_DebugError.DebugError.handle(new Error("Invalid paramobject for textfield: " + __s17param0.toString()));
      }
    }
  };
  Object.defineProperty(CastleToolTipManager.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  CastleToolTipManager.prototype.updateText = function (__s36param0, __s36param1) {
    if (this._target == __s36param1) {
      this.assignToolTipText(__s36param0);
    }
  };
  CastleToolTipManager.prototype.registrationIsNeeded = function () {
    return !this._ggsTextField;
  };
  CastleToolTipManager.__initialize_static_members = function () {
    CastleToolTipManager.ID_PARAM_SEPERATOR = "$$";
  };
  return CastleToolTipManager;
}(__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager);
exports.CastleToolTipManager = __s0local0;
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleJSONTextFieldRestrictorEvent = require("gge-module:export_CastleJSONTextFieldRestrictorEvent");
var __s0local0 = function (__s1param0) {
  function CastleJSONTextFieldRestrictor() {
    var __s3local0 = this;
    __s3local0._maxChars = 0;
    __s3local0.oldTextLength = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJSONTextFieldRestrictor, __s1param0);
  CastleJSONTextFieldRestrictor.prototype.init = function (__s5param0, __s5param1) {
    if (__s5param0) {
      this.removeEventListeners();
      this._maxChars = __s5param1;
      this.textField = __s5param0;
      this.oldText = this.textField.text;
      this.oldTextLength = this.getJSONLength();
      this.addEventListeners();
    }
  };
  CastleJSONTextFieldRestrictor.prototype.addEventListeners = function () {
    this.textField.change.add(this.bindFunction(this.onTextChanged));
  };
  CastleJSONTextFieldRestrictor.prototype.removeEventListeners = function () {
    if (this.textField) {
      this.textField.change.remove(this.bindFunction(this.onTextChanged));
    }
  };
  CastleJSONTextFieldRestrictor.prototype.onTextChanged = function (__s13param0) {
    var __s13local0 = this.getJSONLength();
    if (__s13local0 > this._maxChars) {
      this.textField.text = this.oldText;
      this.dispatchEvent(new __dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.oldTextLength));
    } else {
      this.oldText = this.textField.text;
      this.oldTextLength = __s13local0;
      if (__s13local0 == this._maxChars) {
        this.dispatchEvent(new __dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, __s13local0));
      } else {
        this.dispatchEvent(new __dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent(__dep_export_CastleJSONTextFieldRestrictorEvent.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, __s13local0));
      }
    }
  };
  CastleJSONTextFieldRestrictor.prototype.getJSONLength = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxJSONTextMessage(this.textField.text).length);
  };
  Object.defineProperty(CastleJSONTextFieldRestrictor.prototype, "maxChars", {
    get: function () {
      return this._maxChars;
    },
    set: function (__s23param0) {
      this._maxChars = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleJSONTextFieldRestrictor;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.CastleJSONTextFieldRestrictor = __s0local0;

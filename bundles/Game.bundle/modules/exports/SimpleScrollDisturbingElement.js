Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function SimpleScrollDisturbingElement(__s3param0) {
    this._isHovered = false;
    this._element = __s3param0;
  }
  SimpleScrollDisturbingElement.prototype.destroy = function () {
    this.removeEventListener();
    this._element = null;
  };
  SimpleScrollDisturbingElement.prototype.addEventListener = function () {
    if (this.element) {
      this.element.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.element.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    }
  };
  SimpleScrollDisturbingElement.prototype.removeEventListener = function () {
    if (this.element) {
      this.element.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.element.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    }
  };
  SimpleScrollDisturbingElement.prototype.onRollOver = function (__s13param0) {
    this._isHovered = true;
  };
  SimpleScrollDisturbingElement.prototype.onRollOut = function (__s15param0) {
    this._isHovered = false;
  };
  Object.defineProperty(SimpleScrollDisturbingElement.prototype, "element", {
    get: function () {
      return this._element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollDisturbingElement.prototype, "isHovered", {
    get: function () {
      return this._isHovered;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollDisturbingElement;
}();
exports.SimpleScrollDisturbingElement = __s0local1;

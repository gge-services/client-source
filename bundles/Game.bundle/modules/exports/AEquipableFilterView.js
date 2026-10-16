Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AEquipableFilterView(__s3param0, __s3param1, __s3param2) {
    this.tabToolTipText = __s3param0;
    this.filter = __s3param1;
    this._clickHandler = __s3param2;
  }
  AEquipableFilterView.prototype.fillScrollListData = function (__s5param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableFilterView.prototype.addListeners = function () {
    this._clickHandler.init();
  };
  AEquipableFilterView.prototype.removeListeners = function () {
    this._clickHandler.dispose();
  };
  AEquipableFilterView.prototype.triggerLightUpdate = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableFilterView.prototype.informAboutChange = function () {
    if (this.listChangedCallback) {
      this.listChangedCallback(this);
    }
  };
  Object.defineProperty(AEquipableFilterView.prototype, "tabToolTip", {
    get: function () {
      return this.tabToolTipText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "isTabActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "listChanged", {
    set: function (__s20param0) {
      this.listChangedCallback = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "clickHandler", {
    get: function () {
      return this._clickHandler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "slotClass", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AEquipableFilterView.prototype.matches = function (__s26param0, __s26param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  return AEquipableFilterView;
}();
exports.AEquipableFilterView = __s0local0;
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");

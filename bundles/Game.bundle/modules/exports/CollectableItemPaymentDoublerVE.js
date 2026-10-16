Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollectableItemSimpleIconVE = require("gge-module:export_ACollectableItemSimpleIconVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemPaymentDoublerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPaymentDoublerVE, __s1param0);
  CollectableItemPaymentDoublerVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemPaymentDoublerVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemPaymentDoublerVE.prototype.tooltipCreate = function () {
    return {
      t: "dialog_paymentdoubler_tootlipp",
      p: [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.amount)]
    };
  };
  Object.defineProperty(CollectableItemPaymentDoublerVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_PaymentDoubler;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemPaymentDoublerVE;
}(__dep_export_ACollectableItemSimpleIconVE.ACollectableItemSimpleIconVE);
exports.CollectableItemPaymentDoublerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleCraftingMaterialEvent = require("gge-module:export_CastleCraftingMaterialEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDispatchingCommand = require("gge-module:export_CastleDispatchingCommand");
var __s0local0 = function (__s1param0) {
  function GCCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GCCCommand, __s1param0);
  Object.defineProperty(GCCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_CONSTRUCTION_CRAFTING_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GCCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.craftingMaterialData.dispatchEvent(new __dep_export_CastleCraftingMaterialEvent.CastleCraftingMaterialEvent(__dep_export_CastleCraftingMaterialEvent.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED));
    }
    return __s1param0.prototype.executeCommand.call(this, __s9param0, __s9param1);
  };
  Object.defineProperty(GCCCommand.prototype, "eventType", {
    get: function () {
      return __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GCC_ARRIVED;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "eventType").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  return GCCCommand;
}(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand);
exports.GCCCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");

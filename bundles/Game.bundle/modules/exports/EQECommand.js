Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function EQECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EQECommand, __s1param0);
  Object.defineProperty(EQECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.C2S_ENCHANT_EQUIPMENT_EVENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  EQECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.parse_equipment(__s9local0.E)));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ENCHANTING_FAILED:
        this.controller.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, null));
        break;
      default:
        this.controller.dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  EQECommand.prototype.parse_equipment = function (__s12param0) {
    if (!__s12param0) {
      return null;
    }
    var __s12local0 = [];
    var __s12local1 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s12param0);
    __s12local0.push(__s12local1);
    return __s12local0;
  };
  return EQECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.EQECommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");

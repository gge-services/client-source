Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2f3215726cfc30d4 = require("gge-module:exact_2f3215726cfc30d4");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local0 = function (__s1param0) {
  function CastleInitEquipmentFavoritesServiceCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInitEquipmentFavoritesServiceCommand, __s1param0);
  CastleInitEquipmentFavoritesServiceCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.initialize();
  };
  return CastleInitEquipmentFavoritesServiceCommand;
}(__dep_exact_2f3215726cfc30d4.SimpleCommand);
exports.CastleInitEquipmentFavoritesServiceCommand = __s0local0;

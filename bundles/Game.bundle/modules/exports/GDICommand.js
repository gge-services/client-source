Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastlePlayerInfoEvent = require("gge-module:export_CastlePlayerInfoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function GDICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GDICommand, __s1param0);
  Object.defineProperty(GDICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_DETAILPLAYERINFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GDICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.O.OID);
        var __s9local2 = new __dep_export_CastleListVO.CastleListVO();
        if (__s9local0.gkl && __s9local0.gkl.AI.length > 0) {
          this.addGKLToGC(__s9local0);
        }
        if (__s9local0.gml && __s9local0.gml.AI.length > 0) {
          this.addGMLToGC(__s9local0);
        }
        if (__s9local0.gll && __s9local0.gll.AI.length > 0) {
          this.addGLLToGC(__s9local0);
        }
        var __s9local3 = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s9local0.O);
        if (__s9local3 && __s9local0.atl) {
          __s9local3.splitRunData.parse_ATL(__s9local0.atl);
        }
        if (__s9local0.gcl) {
          __s9local2.parseCastleList(__s9local0.gcl, __s9local3);
        }
        if (__s9local0.kgv) {
          __s9local2.parseVillageList(__s9local0.kgv, __s9local3);
        }
        if (__s9local0.gac) {
          __s9local2.parseAllianceCity(__s9local0.gac, __s9local3);
        }
        if (__s9local0.tie && __s9local0.tie.T) {
          __s9local2.parseABGTower(__s9local0.tie && __s9local0.tie.T);
        }
        __s9local2.ownerID = __s9local1;
        this.controller.dispatchEvent(new __dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, [__s9local2]));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  GDICommand.prototype.addGKLToGC = function (__s20param0) {
    var __s20local0;
    for (var __s20local1 = 0, __s20local2 = __s20param0.gkl.AI; __s20local1 < __s20local2.length; __s20local1++) {
      var __s20local3 = __s20local2[__s20local1];
      if (__s20local3 !== undefined) {
        (__s20local0 = {}).AI = __s20local3[0];
        __s20param0.gcl.C[0].AI.push(__s20local0);
      }
    }
  };
  GDICommand.prototype.addGMLToGC = function (__s25param0) {
    var __s25local0;
    for (var __s25local1 = 0, __s25local2 = __s25param0.gml.AI; __s25local1 < __s25local2.length; __s25local1++) {
      var __s25local3 = __s25local2[__s25local1];
      if (__s25local3 !== undefined) {
        (__s25local0 = {}).AI = __s25local3[0];
        __s25param0.gcl.C[0].AI.push(__s25local0);
      }
    }
  };
  GDICommand.prototype.addGLLToGC = function (__s30param0) {
    var __s30local0;
    for (var __s30local1 = 0, __s30local2 = __s30param0.gll.AI; __s30local1 < __s30local2.length; __s30local1++) {
      var __s30local3 = __s30local2[__s30local1];
      if (__s30local3 !== undefined) {
        (__s30local0 = {}).AI = __s30local3[0];
        __s30param0.gcl.C[0].AI.push(__s30local0);
      }
    }
  };
  return GDICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GDICommand = __s0local0;
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");

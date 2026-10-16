Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleWorldMapBackgroundTilesDirectory() {
    this.sectorCountX = 0;
    this.sectorCountY = 0;
    this.sectorCountX = 0;
    this.sectorCountY = 0;
    this.setupData();
  }
  CastleWorldMapBackgroundTilesDirectory.prototype.setupData = function () {
    this.sectorCountX = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X));
    this.sectorCountY = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y));
    this.tileVOs = [];
    this.visClassToBitmap = new Map();
    for (var __s5local0 = 0; __s5local0 < this.sectorCountY; __s5local0++) {
      var __s5local1 = [];
      this.tileVOs.push(__s5local1);
      for (var __s5local2 = 0; __s5local2 < this.sectorCountX; __s5local2++) {
        var __s5local3 = new __dep_export_CastleWorldMapBackgroundTileVO.CastleWorldMapBackgroundTileVO(__s5local2, __s5local0, this.visClassToBitmap);
        __s5local1.push(__s5local3);
      }
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.reInitialize = function () {
    this.sectorCountX = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X));
    this.sectorCountY = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y));
    this.tileVOs = [];
    for (var __s11local0 = 0; __s11local0 < this.sectorCountY; __s11local0++) {
      var __s11local1 = [];
      this.tileVOs.push(__s11local1);
      for (var __s11local2 = 0; __s11local2 < this.sectorCountX; __s11local2++) {
        var __s11local3 = new __dep_export_CastleWorldMapBackgroundTileVO.CastleWorldMapBackgroundTileVO(__s11local2, __s11local0, this.visClassToBitmap);
        __s11local1.push(__s11local3);
      }
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.getBitmapForSectorByXY = function (__s17param0, __s17param1) {
    if (__s17param0 > this.sectorCountX - 1 || __s17param1 > this.sectorCountY - 1) {
      this.reInitialize();
    }
    return this.tileVOs[__s17param1][__s17param0].getBitmapData();
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.drawDecoAreaForAreaByXY = function (__s20param0, __s20param1) {
    var __s20local0 = __dep_exact_f855840627e6e145.int(__s20param0 / __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH);
    var __s20local1 = Math.floor(__s20param1 / __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT);
    if (__s20local1 >= 0 && __s20local0 < this.sectorCountX && __s20local1 < this.sectorCountY && __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.isSectorReadyForRendering(__s20local0, __s20local1)) {
      return this.tileVOs[__s20local1][__s20local0].drawDecoArea(__s20param0, __s20param1);
    } else {
      return null;
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.freeBitmapDataMemory = function (__s24param0, __s24param1) {
    if (__s24param1 >= 0 && __s24param0 < this.sectorCountX && __s24param1 < this.sectorCountY) {
      return this.tileVOs[__s24param1][__s24param0].freeBitmapData();
    }
  };
  return CastleWorldMapBackgroundTilesDirectory;
}();
exports.CastleWorldMapBackgroundTilesDirectory = __s0local0;
var __dep_export_CastleWorldMapBackgroundTileVO = require("gge-module:export_CastleWorldMapBackgroundTileVO");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");

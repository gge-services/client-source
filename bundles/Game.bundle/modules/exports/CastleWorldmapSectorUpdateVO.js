Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleWorldmapSectorUpdateVO(__s3param0 = -1, __s3param1 = 0) {
    this.kingdomId = 0;
    this.lastUpdate = 0;
    this.status = CastleWorldmapSectorUpdateVO.STATUS_INITIAL;
    this.kingdomId = __s3param0;
    this.lastUpdate = __s3param1;
  }
  CastleWorldmapSectorUpdateVO.__initialize_static_members = function () {
    CastleWorldmapSectorUpdateVO.STATUS_INITIAL = 0;
    CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING = 1;
    CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING = 2;
  };
  return CastleWorldmapSectorUpdateVO;
}();
exports.CastleWorldmapSectorUpdateVO = __s0local0;
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DungeonVO(__s3param0, __s3param1, __s3param2) {
    this._skipCosts = 0;
    this._victoryCount = 0;
    this._kingdomID = 0;
    this._kingdomID = __s3param0;
    this._skipCosts = __s3param2;
    this._victoryCount = __s3param1;
  }
  Object.defineProperty(DungeonVO.prototype, "skipCosts", {
    get: function () {
      return this._skipCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return DungeonVO;
}();
exports.DungeonVO = __s0local0;

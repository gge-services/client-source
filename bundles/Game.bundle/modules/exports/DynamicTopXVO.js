Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DynamicTopXVO(__s3param0, __s3param1, __s3param2 = []) {
    this._topX = [];
    this._eventId = __s3param0;
    this._leagueTypeID = __s3param1;
    this._topX = __s3param2;
  }
  Object.defineProperty(DynamicTopXVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicTopXVO.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicTopXVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  return DynamicTopXVO;
}();
exports.DynamicTopXVO = __s0local0;

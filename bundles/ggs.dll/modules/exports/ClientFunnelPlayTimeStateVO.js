Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientFunnelPlayTimeStateVO(__s3param0, __s3param1) {
    this.timeDelayMinutes = __s3param0;
    this.eventState = __s3param1;
  }
  Object.defineProperty(ClientFunnelPlayTimeStateVO.prototype, "timeDelayMilliseconds", {
    get: function () {
      return this.timeDelayMinutes * 60 * 1000;
    },
    enumerable: true,
    configurable: true
  });
  return ClientFunnelPlayTimeStateVO;
}();
exports.ClientFunnelPlayTimeStateVO = __s0local0;

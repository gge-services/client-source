Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTimeSpendTrackingEnum(__s3param0) {
    this._type = __s3param0;
  }
  Object.defineProperty(CastleTimeSpendTrackingEnum.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimeSpendTrackingEnum.__initialize_static_members = function () {
    CastleTimeSpendTrackingEnum.CHANGE_A_DIALOG = new CastleTimeSpendTrackingEnum("CHANGE_A_DIALOG");
    CastleTimeSpendTrackingEnum.REMOVE_A_DIALOG = new CastleTimeSpendTrackingEnum("REMOVE_A_DIALOG");
    CastleTimeSpendTrackingEnum.CHANGE_KINGDOM = new CastleTimeSpendTrackingEnum("CHANGE_KINGDOM");
    CastleTimeSpendTrackingEnum.CHANGE_LAYOUT = new CastleTimeSpendTrackingEnum("CHANGE_LAYOUT");
  };
  return CastleTimeSpendTrackingEnum;
}();
exports.CastleTimeSpendTrackingEnum = __s0local0;
__s0local0.__initialize_static_members();

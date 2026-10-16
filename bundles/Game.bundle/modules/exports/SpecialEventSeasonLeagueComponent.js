Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SpecialEventSeasonLeagueComponent() {
    this._isModeEnabled = false;
    this._participatedOnEvent = false;
  }
  SpecialEventSeasonLeagueComponent.prototype.parseServerData = function (__s5param0) {
    this._isModeEnabled = !!__s5param0 && !!__s5param0.KL;
  };
  Object.defineProperty(SpecialEventSeasonLeagueComponent.prototype, "isModeEnabled", {
    get: function () {
      return this._isModeEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialEventSeasonLeagueComponent.prototype, "participatedOnEvent", {
    get: function () {
      return this._participatedOnEvent;
    },
    set: function (__s11param0) {
      this._participatedOnEvent = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return SpecialEventSeasonLeagueComponent;
}();
exports.SpecialEventSeasonLeagueComponent = __s0local0;

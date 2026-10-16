Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.NetworkInstance");
var __s0local1 = function () {
  function NetworkInstance() {
    this.instanceCountID = 0;
    this.instanceLocaId = "";
    this.remainingRegistrationCapacity = 100;
    this.serverNameWithCountry = "";
    this.countries = [];
  }
  NetworkInstance.isTestInstance = function (__s5param0) {
    if (isNaN(__s5param0)) {
      __s0local0.warn("instanceId not set!");
      return false;
    } else {
      return __s5param0 >= 250 && __s5param0 <= 300;
    }
  };
  NetworkInstance.prototype.toString = function () {
    return "ip: " + this.ip + ", port: " + this.port + ", zone: " + this.zone + ", zoneId: " + this.zoneId + ", instanceId: " + this.instanceId + ", instanceCountID: " + this.instanceCountID + ", type: " + this._type + ", isInternational: " + this.isInternational + ", defaultcountry: " + this.defaultcountry + ", isFavorite: " + this.isFavorite + ", instanceLocaId: " + this.instanceLocaId + ", countries: " + this.countries;
  };
  Object.defineProperty(NetworkInstance.prototype, "serverName", {
    get: function () {
      throw new Error("Please use Localize.text(<networkInstance>.instanceLocaId) instead of <networkInstance>.serverName");
    },
    enumerable: true,
    configurable: true
  });
  return NetworkInstance;
}();
exports.NetworkInstance = __s0local1;

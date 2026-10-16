Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PerformanceMonitoringVO() {}
  PerformanceMonitoringVO.prototype.toString = function () {
    return "PerformanceMonitoringVO { " + ["averageFPS=" + this.averageFPS, "maxFps=" + this.maxFps, "averageTotalMemoryUsageInMB=" + this.averageTotalMemoryUsageInMB, "averagePrivateMemoryUsageInMB=" + this.averagePrivateMemoryUsageInMB, "freeSpaceOnDeviceInMB=" + this.freeSpaceOnDeviceInMB, "loginTime=" + this.loginTime, "loginTimeMs=" + this.loginTimeMs, "downloadRateInKBs=" + this.downloadRateInKBs, "downloadContentSizeExternalInKB=" + this.downloadContentSizeExternalInKB, "downloadContentSizeLocalInKB=" + this.downloadContentSizeLocalInKB, "downloadContentAmountExternal=" + this.downloadContentAmountExternal, "downloadContentAmountLocal=" + this.downloadContentAmountLocal, "geoIpRequestTimeInMS=" + this.geoIpRequestTimeInMS].join(", ") + " }";
  };
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averageFPS", {
    get: function () {
      return this._averageFPS || 0;
    },
    set: function (__s9param0) {
      this._averageFPS = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "maxFps", {
    get: function () {
      return this._maxFps || 0;
    },
    set: function (__s13param0) {
      this._maxFps = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averageTotalMemoryUsageInMB", {
    get: function () {
      return this._averageTotalMemoryUsageInMB || 0;
    },
    set: function (__s17param0) {
      this._averageTotalMemoryUsageInMB = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "averagePrivateMemoryUsageInMB", {
    get: function () {
      return this._averagePrivateMemoryUsageInMB || 0;
    },
    set: function (__s21param0) {
      this._averagePrivateMemoryUsageInMB = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "freeSpaceOnDeviceInMB", {
    get: function () {
      return this._freeSpaceOnDeviceInMB || 0;
    },
    set: function (__s25param0) {
      this._freeSpaceOnDeviceInMB = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "loginTime", {
    get: function () {
      return this._loginTime || 0;
    },
    set: function (__s29param0) {
      this._loginTime = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "loginTimeMs", {
    get: function () {
      return this._loginTimeMs || 0;
    },
    set: function (__s33param0) {
      this._loginTimeMs = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadRateInKBs", {
    get: function () {
      return this._downloadRateInKBs || 0;
    },
    set: function (__s37param0) {
      this._downloadRateInKBs = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentSizeExternalInKB", {
    get: function () {
      return this._downloadContentSizeExternalInKB || 0;
    },
    set: function (__s41param0) {
      this._downloadContentSizeExternalInKB = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentSizeLocalInKB", {
    get: function () {
      return this._downloadContentSizeLocalInKB || 0;
    },
    set: function (__s45param0) {
      this._downloadContentSizeLocalInKB = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentAmountExternal", {
    get: function () {
      return this._downloadContentAmountExternal || 0;
    },
    set: function (__s49param0) {
      this._downloadContentAmountExternal = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "downloadContentAmountLocal", {
    get: function () {
      return this._downloadContentAmountLocal || 0;
    },
    set: function (__s53param0) {
      this._downloadContentAmountLocal = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PerformanceMonitoringVO.prototype, "geoIpRequestTimeInMS", {
    get: function () {
      return this._geoIpRequestTimeInMS || 0;
    },
    set: function (__s57param0) {
      this._geoIpRequestTimeInMS = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  return PerformanceMonitoringVO;
}();
exports.PerformanceMonitoringVO = __s0local0;

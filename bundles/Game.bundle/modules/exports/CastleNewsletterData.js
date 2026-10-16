Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleNewsletterVO = require("gge-module:export_CastleNewsletterVO");
var __s0local0 = function () {
  function CastleNewsletterData(__s3param0) {
    this.parseXML(__s3param0);
  }
  CastleNewsletterData.prototype.parseXML = function (__s5param0) {
    this._newsletterVOs ||= new Array();
    var __s5local0 = __s5param0.newsletterRewards;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        var __s5local4 = new __dep_export_CastleNewsletterVO.CastleNewsletterVO();
        __s5local4.parseXML(__s5local3);
        this._newsletterVOs.push(__s5local4);
      }
    }
  };
  Object.defineProperty(CastleNewsletterData.prototype, "newsletterVOs", {
    get: function () {
      return this._newsletterVOs;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewsletterData;
}();
exports.CastleNewsletterData = __s0local0;

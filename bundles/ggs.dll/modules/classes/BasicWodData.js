Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgamePartners = require("gge-module:class_GoodgamePartners");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function () {
  function BasicWodData(__s3param0) {
    this.versionXmlInfo = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.versionInformation;
    this.wodXML = __s3param0;
    this.parseWodXML();
    this.versionXmlInfo.parseItemXML(__s3param0);
  }
  BasicWodData.prototype.parseWodXML = function () {
    var __s5local0;
    var __s5local1 = this.wodXML.elements("wods").children();
    this._wodXMLList = new Map();
    for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
      __s5local0 = __s5local3[__s5local2];
      var __s5local4 = parseInt(__s5local0.attribute("wodID"));
      this._wodXMLList.set(__s5local4, __s5local0);
    }
  };
  BasicWodData.prototype.voIsForWorld = function (__s9param0) {
    var __s9local0 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    switch (__s9param0) {
      case 0:
        return true;
      case 1:
        return __s9local0.isLocal || __dep_class_GoodgamePartners.GoodgamePartners.NETWORK_GENERAL == __s9local0.networkId || !__s9local0.hasNetworkBuddies;
      case 2:
        return __s9local0.hasNetworkBuddies;
      default:
        return true;
    }
  };
  return BasicWodData;
}();
exports.BasicWodData = __s0local0;

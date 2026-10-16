Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_HTMLTextCustomVO = require("gge-module:class_HTMLTextCustomVO");
var __s0local0 = function () {
  function HTMLTextComposer() {}
  HTMLTextComposer.prototype.by = function (__s5param0) {
    if (__s5param0 instanceof __dep_class_HTMLTextCustomVO.HTMLTextCustomVO) {
      return this.composeHTML(__s5param0);
    } else {
      return this.composeHTMLWithGGSLinks(__s5param0);
    }
  };
  HTMLTextComposer.prototype.composeHTMLWithGGSLinks = function (__s9param0) {
    __s9param0.htmlText.clearAllNodes();
    for (var __s9local0 = 0, __s9local1 = __s9param0.localizedTextVOList; __s9local0 < __s9local1.length; __s9local0++) {
      var __s9local2 = __s9local1[__s9local0];
      __s9param0.htmlText.appendChild(this.parseGGSLinksToFlashHTMLTextLinks(__s9local2.compose()));
    }
    return __s9param0.htmlText.toString();
  };
  HTMLTextComposer.prototype.composeHTML = function (__s13param0) {
    var __s13local0 = (__s13param0.localizedTextVOList || []).map(function (__s15param0) {
      return __s15param0.compose();
    }).join(__s13param0.appendTextGlue);
    return __s13param0.htmlText = "<content>" + __s13local0 + "</content>";
  };
  HTMLTextComposer.prototype.parseGGSLinksToFlashHTMLTextLinks = function (__s17param0) {
    for (var __s17local0 = __s17param0.split("<"), __s17local1 = false, __s17local2 = "<p>", __s17local3 = 0; __s17local3 < __s17local0.length; __s17local3++) {
      if (__s17local1) {
        __s17local2 += this.createLinkElement(__s17local0[__s17local3]);
        __s17local1 = false;
      } else {
        __s17local2 += String(__s17local0[__s17local3]);
        __s17local1 = true;
      }
    }
    return (__s17local2 += "</p>").replace(/\n/g, "<br>");
  };
  HTMLTextComposer.prototype.createLinkElement = function (__s23param0) {
    var __s23local0 = "";
    for (var __s23local1 = 0; __s23local1 < __s23param0.length && !isNaN(Number(__s23param0.substr(__s23local1, 1))); __s23local1++) {
      __s23local0 += __s23param0.substr(__s23local1, 1);
    }
    var __s23local2 = __s23param0.substr(__s23local0.length);
    return __s23local2 = "<a href=\"event:" + __s23local0 + "\">" + __s23local2 + "</a>";
  };
  return HTMLTextComposer;
}();
exports.HTMLTextComposer = __s0local0;

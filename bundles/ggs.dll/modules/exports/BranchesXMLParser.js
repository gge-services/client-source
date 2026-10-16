Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Branch = require("gge-module:class_Branch");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.BranchesXMLParser");
var __s0local1 = function () {
  function BranchesXMLParser() {}
  BranchesXMLParser.parse = function (__s5param0) {
    var __s5local0;
    var __s5local1 = [];
    var __s5local2 = new DOMParser().parseFromString(__s5param0, "text/xml").querySelector("branches");
    if (!__s5local2) {
      __s0local0.debug("node 'branches' not found");
      return [];
    }
    if (__s5local2.children && __s5local2.children.length) {
      for (var __s5local3 = 0; __s5local3 < __s5local2.children.length; __s5local3++) {
        __s5local0 = this.parseBranch(__s5local2.children.item(__s5local3));
        __s5local1.push(__s5local0);
      }
    } else {
      __s0local0.debug("node 'branches' is null or empty");
    }
    return __s5local1;
  };
  BranchesXMLParser.parseBranch = function (__s12param0) {
    var __s12local0 = __s12param0.attributes.getNamedItem("id").textContent;
    var __s12local1 = __s12param0.attributes.getNamedItem("version").textContent;
    var __s12local2 = this.parseZones(__s12param0.querySelector("zones"));
    return new __dep_class_Branch.Branch(__s12local0, __s12local1, __s12local2);
  };
  BranchesXMLParser.parseZones = function (__s14param0) {
    var __s14local0 = [];
    if (__s14param0) {
      for (var __s14local1 = 0; __s14local1 < __s14param0.children.length; __s14local1++) {
        __s14local0.push(__s14param0.children.item(__s14local1).textContent);
      }
    }
    return __s14local0;
  };
  return BranchesXMLParser;
}();
exports.BranchesXMLParser = __s0local1;

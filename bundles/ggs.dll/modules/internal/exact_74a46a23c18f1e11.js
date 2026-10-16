Object.defineProperty(exports, "__esModule", {
  value: true
});
function __s0local0(__s1param0) {
  return function (__s3param0) {
    function __s3local0(__s5param0) {
      if (__s1param0) {
        return "(" + __s5param0 + ")";
      } else {
        return __s5param0;
      }
    }
    switch (__s3param0.tag) {
      case "always":
      case "never":
      case "void":
      case "boolean":
      case "number":
      case "string":
      case "function":
        return __s3param0.tag;
      case "literal":
        var __s3local1 = __s3param0.value;
        if (typeof __s3local1 == "string") {
          return "\"" + __s3local1 + "\"";
        } else {
          return String(__s3local1);
        }
      case "array":
        return __s0local0(true)(__s3param0.element) + "[]";
      case "dictionary":
        return "{ [_: " + __s3param0.key + "]: " + __s0local0(false)(__s3param0.value) + " }";
      case "record":
        if ((__s3local2 = Object.keys(__s3param0.fields)).length) {
          return "{ " + __s3local2.map(function (__s13param0) {
            return __s13param0 + ": " + __s0local0(false)(__s3param0.fields[__s13param0]) + ";";
          }).join(" ") + " }";
        } else {
          return "{}";
        }
      case "partial":
        var __s3local2;
        if ((__s3local2 = Object.keys(__s3param0.fields)).length) {
          return "{ " + __s3local2.map(function (__s17param0) {
            return __s17param0 + "?: " + __s0local0(false)(__s3param0.fields[__s17param0]) + ";";
          }).join(" ") + " }";
        } else {
          return "{}";
        }
      case "tuple":
        return "[" + __s3param0.components.map(__s0local0(false)).join(", ") + "]";
      case "union":
        return __s3local0("" + __s3param0.alternatives.map(__s0local0(true)).join(" | "));
      case "intersect":
        return __s3local0("" + __s3param0.intersectees.map(__s0local0(true)).join(" & "));
      case "constraint":
        return __s0local0(__s1param0)(__s3param0.underlying);
      case "instanceof":
        return "InstanceOf<" + __s3param0.ctor.name + ">";
    }
  };
}
exports.default = __s0local0(false);

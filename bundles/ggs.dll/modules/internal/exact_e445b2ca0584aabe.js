var __s0local0 = exports;
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
var __s0local1 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
function bake(__s1param0, __s1param1) {
  var __s1local0 = 0;
  var __s1local1 = {};
  for (__s1param1 |= 0; __s1local0 < __s1param0.length;) {
    __s1local1[__s0local1[__s1local0 + __s1param1]] = __s1param0[__s1local0++];
  }
  return __s1local1;
}
__s0local0.basic = bake([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
__s0local0.defaults = bake([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", __dep_exact_2865b4ce4f048b89.emptyArray, null]);
__s0local0.long = bake([0, 0, 0, 1, 1], 7);
__s0local0.mapKey = bake([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
__s0local0.packed = bake([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);

module.exports = function encoder(__s1param0) {
  var __s1local0;
  var __s1local1 = __dep_exact_2865b4ce4f048b89.codegen(["m", "w"], __s1param0.name + "$encode")("if(!w)")("w=Writer.create()");
  for (var __s1local2 = __s1param0.fieldsArray.slice().sort(__dep_exact_2865b4ce4f048b89.compareFieldsById), __s1local3 = 0; __s1local3 < __s1local2.length; ++__s1local3) {
    var __s1local4 = __s1local2[__s1local3].resolve();
    var __s1local5 = __s1param0._fieldsArray.indexOf(__s1local4);
    var __s1local6 = __s1local4.resolvedType instanceof __dep_class_Enum ? "int32" : __s1local4.type;
    var __s1local7 = __dep_exact_e445b2ca0584aabe.basic[__s1local6];
    __s1local0 = "m" + __dep_exact_2865b4ce4f048b89.safeProp(__s1local4.name);
    if (__s1local4.map) {
      __s1local1("if(%s!=null&&m.hasOwnProperty(%j)){", __s1local0, __s1local4.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", __s1local0)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (__s1local4.id << 3 | 2) >>> 0, __dep_exact_e445b2ca0584aabe.mapKey[__s1local4.keyType] | 8, __s1local4.keyType);
      if (__s1local7 === undefined) {
        __s1local1("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", __s1local5, __s1local0);
      } else {
        __s1local1(".uint32(%i).%s(%s[ks[i]]).ldelim()", __s1local7 | 16, __s1local6, __s1local0);
      }
      __s1local1("}")("}");
    } else if (__s1local4.repeated) {
      __s1local1("if(%s!=null&&%s.length){", __s1local0, __s1local0);
      if (__s1local4.packed && __dep_exact_e445b2ca0584aabe.packed[__s1local6] !== undefined) {
        __s1local1("w.uint32(%i).fork()", (__s1local4.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", __s1local0)("w.%s(%s[i])", __s1local6, __s1local0)("w.ldelim()");
      } else {
        __s1local1("for(var i=0;i<%s.length;++i)", __s1local0);
        if (__s1local7 === undefined) {
          genTypePartial(__s1local1, __s1local4, __s1local5, __s1local0 + "[i]");
        } else {
          __s1local1("w.uint32(%i).%s(%s[i])", (__s1local4.id << 3 | __s1local7) >>> 0, __s1local6, __s1local0);
        }
      }
      __s1local1("}");
    } else {
      if (__s1local4.optional) {
        __s1local1("if(%s!=null&&m.hasOwnProperty(%j))", __s1local0, __s1local4.name);
      }
      if (__s1local7 === undefined) {
        genTypePartial(__s1local1, __s1local4, __s1local5, __s1local0);
      } else {
        __s1local1("w.uint32(%i).%s(%s)", (__s1local4.id << 3 | __s1local7) >>> 0, __s1local6, __s1local0);
      }
    }
  }
  return __s1local1("return w");
};
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_e445b2ca0584aabe = require("gge-module:exact_e445b2ca0584aabe");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function genTypePartial(__s17param0, __s17param1, __s17param2, __s17param3) {
  if (__s17param1.resolvedType.group) {
    return __s17param0("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", __s17param2, __s17param3, (__s17param1.id << 3 | 3) >>> 0, (__s17param1.id << 3 | 4) >>> 0);
  } else {
    return __s17param0("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", __s17param2, __s17param3, (__s17param1.id << 3 | 2) >>> 0);
  }
}

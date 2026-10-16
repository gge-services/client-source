module.exports = function verifier(__s1param0) {
  var __s1local0 = __dep_exact_2865b4ce4f048b89.codegen(["m"], __s1param0.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
  var __s1local1 = {};
  if (__s1param0.oneofsArray.length) {
    __s1local0("var p={}");
  }
  for (var __s1local2 = 0; __s1local2 < __s1param0.fieldsArray.length; ++__s1local2) {
    var __s1local3 = __s1param0._fieldsArray[__s1local2].resolve();
    var __s1local4 = "m" + __dep_exact_2865b4ce4f048b89.safeProp(__s1local3.name);
    if (__s1local3.optional) {
      __s1local0("if(%s!=null&&m.hasOwnProperty(%j)){", __s1local4, __s1local3.name);
    }
    if (__s1local3.map) {
      __s1local0("if(!util.isObject(%s))", __s1local4)("return%j", invalid(__s1local3, "object"))("var k=Object.keys(%s)", __s1local4)("for(var i=0;i<k.length;++i){");
      genVerifyKey(__s1local0, __s1local3, "k[i]");
      genVerifyValue(__s1local0, __s1local3, __s1local2, __s1local4 + "[k[i]]")("}");
    } else if (__s1local3.repeated) {
      __s1local0("if(!Array.isArray(%s))", __s1local4)("return%j", invalid(__s1local3, "array"))("for(var i=0;i<%s.length;++i){", __s1local4);
      genVerifyValue(__s1local0, __s1local3, __s1local2, __s1local4 + "[i]")("}");
    } else {
      if (__s1local3.partOf) {
        var __s1local5 = __dep_exact_2865b4ce4f048b89.safeProp(__s1local3.partOf.name);
        if (__s1local1[__s1local3.partOf.name] === 1) {
          __s1local0("if(p%s===1)", __s1local5)("return%j", __s1local3.partOf.name + ": multiple values");
        }
        __s1local1[__s1local3.partOf.name] = 1;
        __s1local0("p%s=1", __s1local5);
      }
      genVerifyValue(__s1local0, __s1local3, __s1local2, __s1local4);
    }
    if (__s1local3.optional) {
      __s1local0("}");
    }
  }
  return __s1local0("return null");
};
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function invalid(__s13param0, __s13param1) {
  return __s13param0.name + ": " + __s13param1 + (__s13param0.repeated && __s13param1 !== "array" ? "[]" : __s13param0.map && __s13param1 !== "object" ? "{k:" + __s13param0.keyType + "}" : "") + " expected";
}
function genVerifyValue(__s15param0, __s15param1, __s15param2, __s15param3) {
  if (__s15param1.resolvedType) {
    if (__s15param1.resolvedType instanceof __dep_class_Enum) {
      __s15param0("switch(%s){", __s15param3)("default:")("return%j", invalid(__s15param1, "enum value"));
      for (var __s15local0 = Object.keys(__s15param1.resolvedType.values), __s15local1 = 0; __s15local1 < __s15local0.length; ++__s15local1) {
        __s15param0("case %i:", __s15param1.resolvedType.values[__s15local0[__s15local1]]);
      }
      __s15param0("break")("}");
    } else {
      __s15param0("{")("var e=types[%i].verify(%s);", __s15param2, __s15param3)("if(e)")("return%j+e", __s15param1.name + ".")("}");
    }
  } else {
    switch (__s15param1.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        __s15param0("if(!util.isInteger(%s))", __s15param3)("return%j", invalid(__s15param1, "integer"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        __s15param0("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", __s15param3, __s15param3, __s15param3, __s15param3)("return%j", invalid(__s15param1, "integer|Long"));
        break;
      case "float":
      case "double":
        __s15param0("if(typeof %s!==\"number\")", __s15param3)("return%j", invalid(__s15param1, "number"));
        break;
      case "bool":
        __s15param0("if(typeof %s!==\"boolean\")", __s15param3)("return%j", invalid(__s15param1, "boolean"));
        break;
      case "string":
        __s15param0("if(!util.isString(%s))", __s15param3)("return%j", invalid(__s15param1, "string"));
        break;
      case "bytes":
        __s15param0("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", __s15param3, __s15param3, __s15param3)("return%j", invalid(__s15param1, "buffer"));
    }
  }
  return __s15param0;
}
function genVerifyKey(__s24param0, __s24param1, __s24param2) {
  switch (__s24param1.keyType) {
    case "int32":
    case "uint32":
    case "sint32":
    case "fixed32":
    case "sfixed32":
      __s24param0("if(!util.key32Re.test(%s))", __s24param2)("return%j", invalid(__s24param1, "integer key"));
      break;
    case "int64":
    case "uint64":
    case "sint64":
    case "fixed64":
    case "sfixed64":
      __s24param0("if(!util.key64Re.test(%s))", __s24param2)("return%j", invalid(__s24param1, "integer|Long key"));
      break;
    case "bool":
      __s24param0("if(!util.key2Re.test(%s))", __s24param2)("return%j", invalid(__s24param1, "boolean key"));
  }
  return __s24param0;
}

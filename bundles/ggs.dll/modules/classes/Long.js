var __s0local0 = exports;
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function genValuePartial_fromObject(__s1param0, __s1param1, __s1param2, __s1param3) {
  if (__s1param1.resolvedType) {
    if (__s1param1.resolvedType instanceof __dep_class_Enum) {
      __s1param0("switch(d%s){", __s1param3);
      var __s1local0 = __s1param1.resolvedType.values;
      for (var __s1local1 = Object.keys(__s1local0), __s1local2 = 0; __s1local2 < __s1local1.length; ++__s1local2) {
        if (__s1param1.repeated && __s1local0[__s1local1[__s1local2]] === __s1param1.typeDefault) {
          __s1param0("default:");
        }
        __s1param0("case%j:", __s1local1[__s1local2])("case %i:", __s1local0[__s1local1[__s1local2]])("m%s=%j", __s1param3, __s1local0[__s1local1[__s1local2]])("break");
      }
      __s1param0("}");
    } else {
      __s1param0("if(typeof d%s!==\"object\")", __s1param3)("throw TypeError(%j)", __s1param1.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", __s1param3, __s1param2, __s1param3);
    }
  } else {
    var __s1local3 = false;
    switch (__s1param1.type) {
      case "double":
      case "float":
        __s1param0("m%s=Number(d%s)", __s1param3, __s1param3);
        break;
      case "uint32":
      case "fixed32":
        __s1param0("m%s=d%s>>>0", __s1param3, __s1param3);
        break;
      case "int32":
      case "sint32":
      case "sfixed32":
        __s1param0("m%s=d%s|0", __s1param3, __s1param3);
        break;
      case "uint64":
        __s1local3 = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        __s1param0("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", __s1param3, __s1param3, __s1local3)("else if(typeof d%s===\"string\")", __s1param3)("m%s=parseInt(d%s,10)", __s1param3, __s1param3)("else if(typeof d%s===\"number\")", __s1param3)("m%s=d%s", __s1param3, __s1param3)("else if(typeof d%s===\"object\")", __s1param3)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", __s1param3, __s1param3, __s1param3, __s1local3 ? "true" : "");
        break;
      case "bytes":
        __s1param0("if(typeof d%s===\"string\")", __s1param3)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", __s1param3, __s1param3, __s1param3)("else if(d%s.length)", __s1param3)("m%s=d%s", __s1param3, __s1param3);
        break;
      case "string":
        __s1param0("m%s=String(d%s)", __s1param3, __s1param3);
        break;
      case "bool":
        __s1param0("m%s=Boolean(d%s)", __s1param3, __s1param3);
    }
  }
  return __s1param0;
}
function genValuePartial_toObject(__s11param0, __s11param1, __s11param2, __s11param3) {
  if (__s11param1.resolvedType) {
    if (__s11param1.resolvedType instanceof __dep_class_Enum) {
      __s11param0("d%s=o.enums===String?types[%i].values[m%s]:m%s", __s11param3, __s11param2, __s11param3, __s11param3);
    } else {
      __s11param0("d%s=types[%i].toObject(m%s,o)", __s11param3, __s11param2, __s11param3);
    }
  } else {
    var __s11local0 = false;
    switch (__s11param1.type) {
      case "double":
      case "float":
        __s11param0("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", __s11param3, __s11param3, __s11param3, __s11param3);
        break;
      case "uint64":
        __s11local0 = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        __s11param0("if(typeof m%s===\"number\")", __s11param3)("d%s=o.longs===String?String(m%s):m%s", __s11param3, __s11param3, __s11param3)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", __s11param3, __s11param3, __s11param3, __s11param3, __s11local0 ? "true" : "", __s11param3);
        break;
      case "bytes":
        __s11param0("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", __s11param3, __s11param3, __s11param3, __s11param3, __s11param3);
        break;
      default:
        __s11param0("d%s=m%s", __s11param3, __s11param3);
    }
  }
  return __s11param0;
}
__s0local0.fromObject = function fromObject(__s18param0) {
  var __s18local0 = __s18param0.fieldsArray;
  var __s18local1 = __dep_exact_2865b4ce4f048b89.codegen(["d"], __s18param0.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
  if (!__s18local0.length) {
    return __s18local1("return new this.ctor");
  }
  __s18local1("var m=new this.ctor");
  for (var __s18local2 = 0; __s18local2 < __s18local0.length; ++__s18local2) {
    var __s18local3 = __s18local0[__s18local2].resolve();
    var __s18local4 = __dep_exact_2865b4ce4f048b89.safeProp(__s18local3.name);
    if (__s18local3.map) {
      __s18local1("if(d%s){", __s18local4)("if(typeof d%s!==\"object\")", __s18local4)("throw TypeError(%j)", __s18local3.fullName + ": object expected")("m%s={}", __s18local4)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", __s18local4);
      genValuePartial_fromObject(__s18local1, __s18local3, __s18local2, __s18local4 + "[ks[i]]")("}")("}");
    } else if (__s18local3.repeated) {
      __s18local1("if(d%s){", __s18local4)("if(!Array.isArray(d%s))", __s18local4)("throw TypeError(%j)", __s18local3.fullName + ": array expected")("m%s=[]", __s18local4)("for(var i=0;i<d%s.length;++i){", __s18local4);
      genValuePartial_fromObject(__s18local1, __s18local3, __s18local2, __s18local4 + "[i]")("}")("}");
    } else {
      if (!(__s18local3.resolvedType instanceof __dep_class_Enum)) {
        __s18local1("if(d%s!=null){", __s18local4);
      }
      genValuePartial_fromObject(__s18local1, __s18local3, __s18local2, __s18local4);
      if (!(__s18local3.resolvedType instanceof __dep_class_Enum)) {
        __s18local1("}");
      }
    }
  }
  return __s18local1("return m");
};
__s0local0.toObject = function toObject(__s28param0) {
  var __s28local0 = __s28param0.fieldsArray.slice().sort(__dep_exact_2865b4ce4f048b89.compareFieldsById);
  if (!__s28local0.length) {
    return __dep_exact_2865b4ce4f048b89.codegen()("return {}");
  }
  var __s28local1 = __dep_exact_2865b4ce4f048b89.codegen(["m", "o"], __s28param0.name + "$toObject")("if(!o)")("o={}")("var d={}");
  var __s28local2 = [];
  var __s28local3 = [];
  var __s28local4 = [];
  for (var __s28local5 = 0; __s28local5 < __s28local0.length; ++__s28local5) {
    if (!__s28local0[__s28local5].partOf) {
      (__s28local0[__s28local5].resolve().repeated ? __s28local2 : __s28local0[__s28local5].map ? __s28local3 : __s28local4).push(__s28local0[__s28local5]);
    }
  }
  if (__s28local2.length) {
    __s28local1("if(o.arrays||o.defaults){");
    __s28local5 = 0;
    for (; __s28local5 < __s28local2.length; ++__s28local5) {
      __s28local1("d%s=[]", __dep_exact_2865b4ce4f048b89.safeProp(__s28local2[__s28local5].name));
    }
    __s28local1("}");
  }
  if (__s28local3.length) {
    __s28local1("if(o.objects||o.defaults){");
    __s28local5 = 0;
    for (; __s28local5 < __s28local3.length; ++__s28local5) {
      __s28local1("d%s={}", __dep_exact_2865b4ce4f048b89.safeProp(__s28local3[__s28local5].name));
    }
    __s28local1("}");
  }
  if (__s28local4.length) {
    __s28local1("if(o.defaults){");
    __s28local5 = 0;
    for (; __s28local5 < __s28local4.length; ++__s28local5) {
      var __s28local6 = __s28local4[__s28local5];
      var __s28local7 = __dep_exact_2865b4ce4f048b89.safeProp(__s28local6.name);
      if (__s28local6.resolvedType instanceof __dep_class_Enum) {
        __s28local1("d%s=o.enums===String?%j:%j", __s28local7, __s28local6.resolvedType.valuesById[__s28local6.typeDefault], __s28local6.typeDefault);
      } else if (__s28local6.long) {
        __s28local1("if(util.Long){")("var n=new util.Long(%i,%i,%j)", __s28local6.typeDefault.low, __s28local6.typeDefault.high, __s28local6.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", __s28local7)("}else")("d%s=o.longs===String?%j:%i", __s28local7, __s28local6.typeDefault.toString(), __s28local6.typeDefault.toNumber());
      } else if (__s28local6.bytes) {
        var __s28local8 = "[" + Array.prototype.slice.call(__s28local6.typeDefault).join(",") + "]";
        __s28local1("if(o.bytes===String)d%s=%j", __s28local7, String.fromCharCode.apply(String, __s28local6.typeDefault))("else{")("d%s=%s", __s28local7, __s28local8)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", __s28local7, __s28local7)("}");
      } else {
        __s28local1("d%s=%j", __s28local7, __s28local6.typeDefault);
      }
    }
    __s28local1("}");
  }
  var __s28local9 = false;
  for (__s28local5 = 0; __s28local5 < __s28local0.length; ++__s28local5) {
    __s28local6 = __s28local0[__s28local5];
    var __s28local10 = __s28param0._fieldsArray.indexOf(__s28local6);
    __s28local7 = __dep_exact_2865b4ce4f048b89.safeProp(__s28local6.name);
    if (__s28local6.map) {
      if (!__s28local9) {
        __s28local9 = true;
        __s28local1("var ks2");
      }
      __s28local1("if(m%s&&(ks2=Object.keys(m%s)).length){", __s28local7, __s28local7)("d%s={}", __s28local7)("for(var j=0;j<ks2.length;++j){");
      genValuePartial_toObject(__s28local1, __s28local6, __s28local10, __s28local7 + "[ks2[j]]")("}");
    } else if (__s28local6.repeated) {
      __s28local1("if(m%s&&m%s.length){", __s28local7, __s28local7)("d%s=[]", __s28local7)("for(var j=0;j<m%s.length;++j){", __s28local7);
      genValuePartial_toObject(__s28local1, __s28local6, __s28local10, __s28local7 + "[j]")("}");
    } else {
      __s28local1("if(m%s!=null&&m.hasOwnProperty(%j)){", __s28local7, __s28local6.name);
      genValuePartial_toObject(__s28local1, __s28local6, __s28local10, __s28local7);
      if (__s28local6.partOf) {
        __s28local1("if(o.oneofs)")("d%s=%j", __dep_exact_2865b4ce4f048b89.safeProp(__s28local6.partOf.name), __s28local6.name);
      }
    }
    __s28local1("}");
  }
  return __s28local1("return d");
};

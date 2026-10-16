module.exports = function decoder(__s1param0) {
  var __s1local0 = __dep_exact_2865b4ce4f048b89.codegen(["r", "l"], __s1param0.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (__s1param0.fieldsArray.filter(function (__s3param0) {
    return __s3param0.map;
  }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
  if (__s1param0.group) {
    __s1local0("if((t&7)===4)")("break");
  }
  __s1local0("switch(t>>>3){");
  for (var __s1local1 = 0; __s1local1 < __s1param0.fieldsArray.length; ++__s1local1) {
    var __s1local2 = __s1param0._fieldsArray[__s1local1].resolve();
    var __s1local3 = __s1local2.resolvedType instanceof __dep_class_Enum ? "int32" : __s1local2.type;
    var __s1local4 = "m" + __dep_exact_2865b4ce4f048b89.safeProp(__s1local2.name);
    __s1local0("case %i:", __s1local2.id);
    if (__s1local2.map) {
      __s1local0("r.skip().pos++")("if(%s===util.emptyObject)", __s1local4)("%s={}", __s1local4)("k=r.%s()", __s1local2.keyType)("r.pos++");
      if (__dep_exact_e445b2ca0584aabe.long[__s1local2.keyType] !== undefined) {
        if (__dep_exact_e445b2ca0584aabe.basic[__s1local3] === undefined) {
          __s1local0("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", __s1local4, __s1local1);
        } else {
          __s1local0("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", __s1local4, __s1local3);
        }
      } else if (__dep_exact_e445b2ca0584aabe.basic[__s1local3] === undefined) {
        __s1local0("%s[k]=types[%i].decode(r,r.uint32())", __s1local4, __s1local1);
      } else {
        __s1local0("%s[k]=r.%s()", __s1local4, __s1local3);
      }
    } else if (__s1local2.repeated) {
      __s1local0("if(!(%s&&%s.length))", __s1local4, __s1local4)("%s=[]", __s1local4);
      if (__dep_exact_e445b2ca0584aabe.packed[__s1local3] !== undefined) {
        __s1local0("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", __s1local4, __s1local3)("}else");
      }
      if (__dep_exact_e445b2ca0584aabe.basic[__s1local3] === undefined) {
        __s1local0(__s1local2.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", __s1local4, __s1local1);
      } else {
        __s1local0("%s.push(r.%s())", __s1local4, __s1local3);
      }
    } else if (__dep_exact_e445b2ca0584aabe.basic[__s1local3] === undefined) {
      __s1local0(__s1local2.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", __s1local4, __s1local1);
    } else {
      __s1local0("%s=r.%s()", __s1local4, __s1local3);
    }
    __s1local0("break");
  }
  __s1local0("default:")("r.skipType(t&7)")("break")("}")("}");
  __s1local1 = 0;
  for (; __s1local1 < __s1param0._fieldsArray.length; ++__s1local1) {
    var __s1local5 = __s1param0._fieldsArray[__s1local1];
    if (__s1local5.required) {
      __s1local0("if(!m.hasOwnProperty(%j))", __s1local5.name)("throw util.ProtocolError(%j,{instance:m})", missing(__s1local5));
    }
  }
  return __s1local0("return m");
};
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_e445b2ca0584aabe = require("gge-module:exact_e445b2ca0584aabe");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function missing(__s23param0) {
  return "missing required '" + __s23param0.name + "'";
}

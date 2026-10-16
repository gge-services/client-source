var __s0local0 = exports;
var __dep_class_Message = require("gge-module:class_Message");
__s0local0[".google.protobuf.Any"] = {
  fromObject: function (__s1param0) {
    if (__s1param0 && __s1param0["@type"]) {
      var __s1local0 = this.lookup(__s1param0["@type"]);
      if (__s1local0) {
        var __s1local1 = __s1param0["@type"].charAt(0) === "." ? __s1param0["@type"].substr(1) : __s1param0["@type"];
        return this.create({
          type_url: "/" + __s1local1,
          value: __s1local0.encode(__s1local0.fromObject(__s1param0)).finish()
        });
      }
    }
    return this.fromObject(__s1param0);
  },
  toObject: function (__s5param0, __s5param1) {
    if (__s5param1 && __s5param1.json && __s5param0.type_url && __s5param0.value) {
      var __s5local0 = __s5param0.type_url.substring(__s5param0.type_url.lastIndexOf("/") + 1);
      var __s5local1 = this.lookup(__s5local0);
      if (__s5local1) {
        __s5param0 = __s5local1.decode(__s5param0.value);
      }
    }
    if (!(__s5param0 instanceof this.ctor) && __s5param0 instanceof __dep_class_Message) {
      var __s5local2 = __s5param0.$type.toObject(__s5param0, __s5param1);
      __s5local2["@type"] = __s5param0.$type.fullName;
      return __s5local2;
    }
    return this.toObject(__s5param0, __s5param1);
  }
};

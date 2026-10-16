var __s0local0 = module.exports = require("gge-module:exact_0fff7e7ba903a3e5");
__s0local0.build = "light";
__s0local0.load = function load(__s1param0, __s1param1, __s1param2) {
  if (typeof __s1param1 == "function") {
    __s1param2 = __s1param1;
    __s1param1 = new __s0local0.Root();
  } else {
    __s1param1 ||= new __s0local0.Root();
  }
  return __s1param1.load(__s1param0, __s1param2);
};
__s0local0.loadSync = function loadSync(__s5param0, __s5param1) {
  __s5param1 ||= new __s0local0.Root();
  return __s5param1.loadSync(__s5param0);
};
__s0local0.encoder = require("gge-module:exact_3f705ba351daacce");
__s0local0.decoder = require("gge-module:exact_990738874e22c2f3");
__s0local0.verifier = require("gge-module:exact_6cd95b2bb4e1b013");
__s0local0.converter = require("gge-module:class_Long");
__s0local0.ReflectionObject = require("gge-module:class_ReflectionObject");
__s0local0.Namespace = require("gge-module:class_Namespace");
__s0local0.Root = require("gge-module:class_Root");
__s0local0.Enum = require("gge-module:class_Enum");
__s0local0.Type = require("gge-module:exact_60ddcf91058706cf");
__s0local0.Field = require("gge-module:class_Field");
__s0local0.OneOf = require("gge-module:class_OneOf");
__s0local0.MapField = require("gge-module:class_MapField");
__s0local0.Service = require("gge-module:exact_aaea423cf3e0c2a5");
__s0local0.Method = require("gge-module:class_Method");
__s0local0.Message = require("gge-module:class_Message");
__s0local0.wrappers = require("gge-module:exact_36b1427459f24dc7");
__s0local0.types = require("gge-module:exact_e445b2ca0584aabe");
__s0local0.util = require("gge-module:exact_2865b4ce4f048b89");
__s0local0.ReflectionObject._configure(__s0local0.Root);
__s0local0.Namespace._configure(__s0local0.Type, __s0local0.Service, __s0local0.Enum);
__s0local0.Root._configure(__s0local0.Type);
__s0local0.Field._configure(__s0local0.Type);

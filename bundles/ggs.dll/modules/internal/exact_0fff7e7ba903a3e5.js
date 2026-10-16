var __s0local0 = exports;
function configure() {
  __s0local0.Reader._configure(__s0local0.BufferReader);
  __s0local0.util._configure();
}
__s0local0.build = "minimal";
__s0local0.Writer = require("gge-module:class_State");
__s0local0.BufferWriter = require("gge-module:class_BufferWriter");
__s0local0.Reader = require("gge-module:class_Reader");
__s0local0.BufferReader = require("gge-module:class_BufferReader");
__s0local0.util = require("gge-module:class_Buffer_allocUnsafe");
__s0local0.rpc = require("gge-module:exact_d0b1810c227b741d");
__s0local0.roots = require("gge-module:exact_1cf3e1eeed2d717d");
__s0local0.configure = configure;
__s0local0.Writer._configure(__s0local0.BufferWriter);
configure();

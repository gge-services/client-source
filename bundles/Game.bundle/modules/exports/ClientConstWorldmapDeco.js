Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstWorldmapDeco() {}
  ClientConstWorldmapDeco.createWorldmapVOFromRawDeco = function (__s5param0) {
    var __s5local0 = new __dep_export_EmptyMapobjectVO.EmptyMapobjectVO();
    var __s5local1 = ClientConstWorldmapDeco.DECO_OBJECT_LIST.get(__s5param0);
    __s5local0.fillByListInit(__s5param0, __s5local1.type, __s5local1.width, __s5local1.height);
    return __s5local0;
  };
  ClientConstWorldmapDeco._createWorldmapDecoList = function () {
    var __s7local0 = new Map();
    var __s7local1 = 0;
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Bush1x1_1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Bush1x1_2", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Bush1x2", 1, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Bush2x1", 2, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Bush2x2", 2, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Forest2x2", 2, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Gras1x1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Gras2x2", 2, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Gras3x1", 3, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Hill1x1_1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Hill1x1_2", 1, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Hill2x1", 2, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Mountain1x1_1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Mountain1x1_2", 1, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Mountain2x2", 2, 2));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Wood1x1_1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Wood1x1_2", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Wood1x1_3", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Wood1x1_4", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Wood1x1_5", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Stonehead1x1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Ruin1x1", 1, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Ruin2x1_1", 2, 1));
    __s7local0.set(__s7local1, ClientConstWorldmapDeco._createRawWorldmapDeco(__s7local1++, "Ruin2x1_2", 2, 1));
    return __s7local0;
  };
  ClientConstWorldmapDeco._createRawWorldmapDeco = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    return new __dep_export_RawWorldmapDecoVO.RawWorldmapDecoVO(__s9param0, __s9param1, __s9param2, __s9param3);
  };
  ClientConstWorldmapDeco.__initialize_static_members = function () {
    ClientConstWorldmapDeco.DECO_OBJECT_LIST = ClientConstWorldmapDeco._createWorldmapDecoList();
  };
  return ClientConstWorldmapDeco;
}();
exports.ClientConstWorldmapDeco = __s0local0;
var __dep_export_EmptyMapobjectVO = require("gge-module:export_EmptyMapobjectVO");
var __dep_export_RawWorldmapDecoVO = require("gge-module:export_RawWorldmapDecoVO");
__s0local0.__initialize_static_members();

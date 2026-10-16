Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EventInstanceMapper() {}
  EventInstanceMapper.getEvent = function (__s5param0, __s5param1) {
    if (EventInstanceMapper._eventInstanceMap.get(__s5param0) == null) {
      EventInstanceMapper._eventInstanceMap.set(__s5param0, {});
    }
    if (EventInstanceMapper._eventInstanceMap.get(__s5param0)[__s5param1] == null) {
      EventInstanceMapper._eventInstanceMap.get(__s5param0)[__s5param1] = new __s5param0(__s5param1);
    }
    return EventInstanceMapper._eventInstanceMap.get(__s5param0)[__s5param1];
  };
  EventInstanceMapper.__initialize_static_members = function () {
    EventInstanceMapper._eventInstanceMap = new Map();
  };
  return EventInstanceMapper;
}();
exports.EventInstanceMapper = __s0local0;
__s0local0.__initialize_static_members();

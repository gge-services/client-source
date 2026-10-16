module.exports = common;
var __s0local0;
var __s0local1 = /\/|\./;
function common(__s1param0, __s1param1) {
  if (!__s0local1.test(__s1param0)) {
    __s1param0 = "google/protobuf/" + __s1param0 + ".proto";
    __s1param1 = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: __s1param1
            }
          }
        }
      }
    };
  }
  common[__s1param0] = __s1param1;
}
common("any", {
  Any: {
    fields: {
      type_url: {
        type: "string",
        id: 1
      },
      value: {
        type: "bytes",
        id: 2
      }
    }
  }
});
common("duration", {
  Duration: __s0local0 = {
    fields: {
      seconds: {
        type: "int64",
        id: 1
      },
      nanos: {
        type: "int32",
        id: 2
      }
    }
  }
});
common("timestamp", {
  Timestamp: __s0local0
});
common("empty", {
  Empty: {
    fields: {}
  }
});
common("struct", {
  Struct: {
    fields: {
      fields: {
        keyType: "string",
        type: "Value",
        id: 1
      }
    }
  },
  Value: {
    oneofs: {
      kind: {
        oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
      }
    },
    fields: {
      nullValue: {
        type: "NullValue",
        id: 1
      },
      numberValue: {
        type: "double",
        id: 2
      },
      stringValue: {
        type: "string",
        id: 3
      },
      boolValue: {
        type: "bool",
        id: 4
      },
      structValue: {
        type: "Struct",
        id: 5
      },
      listValue: {
        type: "ListValue",
        id: 6
      }
    }
  },
  NullValue: {
    values: {
      NULL_VALUE: 0
    }
  },
  ListValue: {
    fields: {
      values: {
        rule: "repeated",
        type: "Value",
        id: 1
      }
    }
  }
});
common("wrappers", {
  DoubleValue: {
    fields: {
      value: {
        type: "double",
        id: 1
      }
    }
  },
  FloatValue: {
    fields: {
      value: {
        type: "float",
        id: 1
      }
    }
  },
  Int64Value: {
    fields: {
      value: {
        type: "int64",
        id: 1
      }
    }
  },
  UInt64Value: {
    fields: {
      value: {
        type: "uint64",
        id: 1
      }
    }
  },
  Int32Value: {
    fields: {
      value: {
        type: "int32",
        id: 1
      }
    }
  },
  UInt32Value: {
    fields: {
      value: {
        type: "uint32",
        id: 1
      }
    }
  },
  BoolValue: {
    fields: {
      value: {
        type: "bool",
        id: 1
      }
    }
  },
  StringValue: {
    fields: {
      value: {
        type: "string",
        id: 1
      }
    }
  },
  BytesValue: {
    fields: {
      value: {
        type: "bytes",
        id: 1
      }
    }
  }
});
common("field_mask", {
  FieldMask: {
    fields: {
      paths: {
        rule: "repeated",
        type: "string",
        id: 1
      }
    }
  }
});
common.get = function get(__s4param0) {
  return common[__s4param0] || null;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoBuildingStateEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._id = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoBuildingStateEnum, __s1param0);
  IsoBuildingStateEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(IsoBuildingStateEnum, "id", __s5param0, IsoBuildingStateEnum.INITIAL);
  };
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isWaitingForServerRequest", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
        case IsoBuildingStateEnum.REPAIR_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isInProgress", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        case IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isStopped", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case IsoBuildingStateEnum.REPAIR_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isFunctionally", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.INITIAL:
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          return false;
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isUnderConstruction", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isUnderInitialConstruction", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoBuildingStateEnum.__initialize_static_members = function () {
    IsoBuildingStateEnum.WAIT_FOR_SERVER = new IsoBuildingStateEnum("waitForServer", 100);
    IsoBuildingStateEnum.INITIAL = new IsoBuildingStateEnum("initial", 0);
    IsoBuildingStateEnum.BUILD_STOPPED = new IsoBuildingStateEnum("buildStopped", 1);
    IsoBuildingStateEnum.BUILD_IN_PROGRESS = new IsoBuildingStateEnum("buildInProgress", 2);
    IsoBuildingStateEnum.BUILD_COMPLETED = new IsoBuildingStateEnum("buildCompleted", 4);
    IsoBuildingStateEnum.DISASSEMBLE_STOPPED = new IsoBuildingStateEnum("disassembleStopped", 5);
    IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS = new IsoBuildingStateEnum("disassembleInProgress", 6);
    IsoBuildingStateEnum.DISASSEMBLED_COMPLETED = new IsoBuildingStateEnum("disassembleCompleted", 8);
    IsoBuildingStateEnum.REPAIR_STOPPED = new IsoBuildingStateEnum("repairStopped", 9);
    IsoBuildingStateEnum.REPAIR_IN_PROGRESS = new IsoBuildingStateEnum("repairInProgress", 10);
    IsoBuildingStateEnum.UPGRADE_STOPPED = new IsoBuildingStateEnum("upgradeStopped", 12);
    IsoBuildingStateEnum.UPGRADE_IN_PROGRESS = new IsoBuildingStateEnum("upgradeInProgress", 13);
    IsoBuildingStateEnum.UPGRADE_COMPLETED = new IsoBuildingStateEnum("upgradeCompleted", 15);
  };
  return IsoBuildingStateEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoBuildingStateEnum = __s0local0;
__s0local0.__initialize_static_members();

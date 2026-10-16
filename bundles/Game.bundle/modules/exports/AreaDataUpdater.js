Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataUpdater(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._areaData = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataUpdater, __s1param0);
  AreaDataUpdater.prototype.parseJAA = function (__s5param0) {
    if (__s5param0) {
      this.parseGCA(__s5param0.gca);
      this.parseCSL(__s5param0.csl);
      this.parseGRC(__s5param0.grc);
      this.parseGPA(__s5param0.gpa);
      this.parseGAB(__s5param0.gab);
    }
  };
  AreaDataUpdater.prototype.parseGCA = function (__s8param0) {
    if (__s8param0) {
      if (this.areaData.storage) {
        this.areaData.storage.parseGCA(__s8param0);
      }
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.parseGCA(__s8param0);
      }
      this.parseSCL(__s8param0.scl);
      this.parseConstructionItems(__s8param0.CI);
      __dep_export_CastleModel.CastleModel.worldmapCameraData.lastVisitedCastlePosition = this.areaData.areaInfo.absAreaPos;
      if (this.areaData.isoData) {
        __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(this.areaData.isoData, false));
      }
    }
  };
  AreaDataUpdater.prototype.parseCSL = function (__s14param0) {
    if (__s14param0 && this.areaData.slum) {
      this.areaData.slum.parseCSL(__s14param0);
    }
  };
  AreaDataUpdater.prototype.parseSCL = function (__s17param0) {
    if (__s17param0 && this.areaData.constructionList) {
      this.areaData.constructionList.parseSCL(__s17param0);
    }
  };
  AreaDataUpdater.prototype.parseGAB = function (__s20param0) {
    if (__s20param0 && this.areaData.commonInfo) {
      this.areaData.commonInfo.parseGAB(__s20param0);
    }
  };
  AreaDataUpdater.prototype.parseGRC = function (__s23param0) {
    if (__s23param0) {
      if (this.areaData.storage && __s23param0.AID == this.areaData.areaId) {
        this.areaData.storage.parseGRC(__s23param0);
      }
      if (__s23param0.AID == __dep_exact_26a421b704832cff.EventConst.EVENTCAMP_AREA_ID && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
        var __s23local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
        if (__s23local0) {
          __s23local0.resStorageWood = __dep_exact_f855840627e6e145.int(__s23param0.W);
          __s23local0.resStorageStone = __dep_exact_f855840627e6e145.int(__s23param0.S);
        }
      }
      var __s23local1 = new __dep_export_CastleResourcesVO.CastleResourcesVO();
      __s23local1.parseGRC(__s23param0);
      __dep_export_CastleModel.CastleModel.userCastleListDetailed.updateDetailVO(__s23local1);
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, [__s23local1]));
    }
  };
  AreaDataUpdater.prototype.parseGPA = function (__s29param0) {
    if (__s29param0) {
      if (this.areaData.commonInfo) {
        this.areaData.commonInfo.parseGPA(__s29param0);
      }
      if (this.areaData.storage) {
        this.areaData.storage.parseGPA(__s29param0);
      }
      if (this.areaData.morality) {
        this.areaData.morality.parseGPA(__s29param0);
      }
      __dep_export_CastleModel.CastleModel.militaryData.resetProductionSpeed();
      __dep_export_CastleModel.CastleModel.militaryData.setBuildingProductionSpeed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS, __s29param0.RS1);
      __dep_export_CastleModel.CastleModel.militaryData.setBuildingProductionSpeed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP, __s29param0.RS2);
      __dep_export_CastleModel.CastleModel.militaryData.setBuildingProductionSpeed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP, __s29param0.RS3);
      __dep_export_CastleModel.CastleModel.militaryData.setBuildingProductionSpeed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_HOSPITAL, __s29param0.RSH);
    }
  };
  AreaDataUpdater.prototype.parseRBU = function (__s35param0) {
    if (__s35param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(__s35param0.O);
      }
      this.parseSCL(__s35param0.scl);
      this.parseGRC(__s35param0.grc);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseIRA = function (__s39param0) {
    if (__s39param0) {
      this.parseGPA(__s39param0.gpa);
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(__s39param0.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseGCB = function (__s43param0) {
    if (__s43param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(__s43param0.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseGDB = function (__s47param0) {
    if (__s47param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(__s47param0.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEBE = function (__s51param0) {
    if (__s51param0) {
      if (this.areaData.isoData) {
        this.parseGCA(__s51param0.gca);
      }
      this.parseGRC(__s51param0.grc);
      this.parseSCL(__s51param0.scl);
    }
  };
  AreaDataUpdater.prototype.parseEBU = function (__s55param0) {
    if (__s55param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(__s55param0.NO);
      }
      this.updateCastleInfos();
      this.parseGRC(__s55param0.grc);
      this.parseSCL(__s55param0.scl);
    }
  };
  AreaDataUpdater.prototype.parseEDO = function (__s59param0) {
    if (__s59param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(__s59param0);
      }
      this.parseSCL(__s59param0.scl);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEGO = function (__s63param0) {
    if (__s63param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(__s63param0);
      }
      this.updateCastleInfos();
      this.parseSCL(__s63param0.scl);
      this.parseGAB(__s63param0.gab);
    }
  };
  AreaDataUpdater.prototype.parseEUD = function (__s67param0) {
    if (__s67param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.initObjects(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE);
        this.areaData.isoData.updater.updateObjectInfo(__s67param0.N);
      }
      this.parseGRC(__s67param0.grc);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEUP = function (__s71param0) {
    if (__s71param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(__s71param0.O);
      }
      this.updateCastleInfos();
      this.parseGRC(__s71param0.grc);
      this.parseSCL(__s71param0.scl);
    }
  };
  AreaDataUpdater.prototype.parseETC = function (__s75param0) {
    if (__s75param0) {
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ETC_ARRIVED, [__s75param0.RID, __s75param0.OID]));
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.removeObjectByObjectId(__s75param0.OID);
      }
    }
  };
  AreaDataUpdater.prototype.parseEMO = function (__s79param0) {
    if (__s79param0 && this.areaData.isoData) {
      this.areaData.isoData.updater.updateObjectInfo(__s79param0.MO);
      this.areaData.isoData.objects.movements.initWaypoints();
    }
  };
  AreaDataUpdater.prototype.parseFCO = function (__s82param0) {
    if (__s82param0 && this.areaData.isoData) {
      this.areaData.isoData.updater.updateObjectInfo(__s82param0.O);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseSOB = function (__s85param0) {
    if (__s85param0 && this.areaData.isoData) {
      this.areaData.isoData.updater.removeObjectByObjectId(__s85param0.OID);
    }
  };
  AreaDataUpdater.prototype.parseCBX = function (__s88param0, __s88param1 = true) {
    if (__s88param0 && this.areaData.isoData) {
      this.areaData.isoData.updater.onGainedBuildingPoints(__s88param0.OID, __s88param0.XP, __s88param1);
    }
  };
  AreaDataUpdater.prototype.parseSBD = function (__s91param0) {
    if (__s91param0) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.removeObjectByObjectId(__s91param0.OID);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseNewIsoObject = function (__s95param0) {
    if (__s95param0 && __s95param0.NO) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(__s95param0.NO);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseConstructionItems = function (__s99param0) {
    if (__s99param0 && this.areaData.constructionItems) {
      this.areaData.constructionItems.updateConstructionItems(__s99param0);
    }
  };
  AreaDataUpdater.prototype.updateCastleInfos = function () {
    if (this.areaData.commonInfo) {
      this.areaData.commonInfo.updateInfos();
    }
  };
  Object.defineProperty(AreaDataUpdater.prototype, "areaData", {
    get: function () {
      return this._areaData;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataUpdater;
}(__dep_export_CastleComponent.CastleComponent);
exports.AreaDataUpdater = __s0local0;
var __dep_export_CastleResourcesVO = require("gge-module:export_CastleResourcesVO");
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

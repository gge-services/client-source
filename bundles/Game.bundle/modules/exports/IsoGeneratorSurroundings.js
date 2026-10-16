Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_7 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AllianceCrestSurroundingsVO = require("gge-module:export_AllianceCrestSurroundingsVO");
var __dep_export_NewsHubSurroundingsVO = require("gge-module:export_NewsHubSurroundingsVO");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoGeneratorSurroundings() {
    this._resultList = [];
  }
  IsoGeneratorSurroundings.prototype.build = function () {
    this._resultList.length = 0;
    this.addResourceFields();
    if (this.areaType == __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
      if (__s5local0) {
        switch (__s5local0.eventType) {
          case __dep_export_KingdomEnum.KingdomEnum.SEAQUEEN.xmlName:
            this.addBySeaQueenSeasonCamp();
        }
      }
    } else {
      switch (this.isoData.areaData.areaInfo.kingdomID) {
        case __dep_exact_26a421b704832cff_5.WorldClassic.KINGDOM_ID:
          this.addByClassicKingdom();
          break;
        case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
          this.addByIceKingdom();
          break;
        case __dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID:
          this.addByDessertKingdom();
          break;
        case __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID:
          this.addByVolcanoKingdom();
          break;
        case __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID:
          this.addByIslandKingdom();
      }
    }
    return this.resultList;
  };
  IsoGeneratorSurroundings.prototype.addResourceFields = function () {
    this.addToResultList(new __dep_export_WoodResourceFieldVO.WoodResourceFieldVO());
    this.addToResultList(new __dep_export_StoneResourceFieldVO.StoneResourceFieldVO());
    this.addToResultList(new __dep_export_FoodResourceFieldVO.FoodResourceFieldVO());
  };
  IsoGeneratorSurroundings.prototype.addBySeaQueenSeasonCamp = function () {
    this.addToResultList(new __dep_export_CliffsSurroundingsVO.CliffsSurroundingsVO());
    this.addToResultList(new __dep_export_HarborSurroundingsVO.HarborSurroundingsVO());
    this.addToResultList(new __dep_export_ShipSurroundingsVO.ShipSurroundingsVO());
    this.addToResultList(new __dep_export_SeaShieldSurroundingsVO.SeaShieldSurroundingsVO());
  };
  IsoGeneratorSurroundings.prototype.addByClassicKingdom = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay()) {
        for (var __s16local0 = 0; __s16local0 < __dep_export_CastleResourceCartsData.CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++__s16local0) {
          var __s16local1 = new __dep_export_ResourceCartSurroundingsVO.ResourceCartSurroundingsVO();
          __s16local1.resourceType = __dep_export_CastleResourceCartsData.CastleResourceCartsData.getEnumItemFromIndex(__s16local0);
          this.addToResultList(__s16local1);
        }
      }
      if (__dep_export_CastleModel.CastleModel.userData.allianceID > 0) {
        this.addToResultList(new __dep_export_AllianceCrestSurroundingsVO.AllianceCrestSurroundingsVO());
      }
      if (__dep_export_CastleModel.CastleModel.userData.enableNewsHub) {
        this.addToResultList(new __dep_export_NewsHubSurroundingsVO.NewsHubSurroundingsVO());
      }
      if (!__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        var __s16local2 = __dep_exact_f855840627e6e145.int(this.isoData.grid.origins.groundDimension.y);
        if (__dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_exact_26a421b704832cff_6.TutorialConst.LAST_TUTORIAL_STEP_LEVEL)) {
          this.addToResultList(new __dep_export_PathSurroundingsVO.PathSurroundingsVO());
          this.addToResultList(new __dep_export_OutpostSurroundingsVO.OutpostSurroundingsVO());
          this.addToResultList(new __dep_export_MercenarySurroundingsVO.MercenarySurroundingsVO());
        }
        if (__s16local2 >= 30) {
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Paving_Surroundings_Short_Full", new __s0local0(11, -29), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
        }
        if (__s16local2 >= 40) {
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(11, -39)));
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new __s0local0(21, -39)));
        }
        if (__s16local2 >= 50) {
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(11, -49)));
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new __s0local0(21, -49)));
        }
        if (__s16local2 >= 60) {
          this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(11, -59)));
        }
        if (__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE) {
          for (var __s16local3 = 0, __s16local4 = __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance().spawnedFillers; __s16local3 < __s16local4.length; __s16local3++) {
            var __s16local5 = __s16local4[__s16local3];
            if (__s16local5 !== undefined) {
              this.addToResultList(__s16local5);
            }
          }
        }
        var __s16local6 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_7.EventConst.EVENTTYPE_EVENT_SKIN), "EventSkinEventVO");
        if (__s16local6 && __s16local6.canUseIsoSkin() && __s16local6.skinString == __dep_export_EventSkinEventVO.EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE) {
          this.addWinterOffensiveSurroundings();
        }
      }
    }
  };
  IsoGeneratorSurroundings.prototype.addByDessertKingdom = function () {
    if (this.canAddSlum) {
      var __s35local0 = [];
      __s35local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-10, 0), 0));
      __s35local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-44, 19), 1));
      __s35local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-47, -2), 2));
      __s35local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-26, 0), 3));
      __s35local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-50, 10), 4));
      __s35local0.push(new __dep_export_SlumBuildingPartCharacterVO.SlumBuildingPartCharacterVO(new __s0local0(-38, 15), new __s0local0(-16, 17)));
      this.addToResultList(new __dep_export_SlumSurroundingsVO.SlumSurroundingsVO(new __s0local0(0, 0), __s35local0));
    }
  };
  IsoGeneratorSurroundings.prototype.addByIceKingdom = function () {
    if (this.canAddSlum) {
      var __s38local0 = [];
      __s38local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-48, 22), 0));
      __s38local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-25, 5), 1));
      __s38local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-48, 10), 2));
      __s38local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-45, -10), 3));
      __s38local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-29, -10), 4));
      __s38local0.push(new __dep_export_SlumBuildingPartCharacterVO.SlumBuildingPartCharacterVO(new __s0local0(-28, 10), new __s0local0(-13, 14)));
      this.addToResultList(new __dep_export_SlumSurroundingsVO.SlumSurroundingsVO(new __s0local0(0, 0), __s38local0));
    }
  };
  IsoGeneratorSurroundings.prototype.addByVolcanoKingdom = function () {
    if (this.canAddSlum) {
      var __s41local0 = [];
      __s41local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-32, 3), 0));
      __s41local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-30, 11), 1));
      __s41local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-39, 14), 2));
      __s41local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-41, 0), 3));
      __s41local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(-24, -1), 4));
      __s41local0.push(new __dep_export_SlumBuildingPartCharacterVO.SlumBuildingPartCharacterVO(new __s0local0(-28, 18), new __s0local0(-13, 19)));
      this.addToResultList(new __dep_export_SlumSurroundingsVO.SlumSurroundingsVO(new __s0local0(0, 0), __s41local0));
    }
  };
  IsoGeneratorSurroundings.prototype.addByIslandKingdom = function () {
    if (this.canAddSlum) {
      var __s44local0 = [];
      __s44local0.push(new __dep_export_SlumBuildingPartBuildingVO.SlumBuildingPartBuildingVO(new __s0local0(), 1));
      this.addToResultList(new __dep_export_EilandSlumSurroundingVO.EilandSlumSurroundingVO(new __s0local0(20, 25), __s44local0));
    }
    this.addToResultList(new __dep_export_BeachTopSurroundingsVO.BeachTopSurroundingsVO());
    this.addToResultList(new __dep_export_BeachBottomSurroundingsVO.BeachBottomSurroundingsVO());
  };
  IsoGeneratorSurroundings.prototype.addToResultList = function (__s47param0) {
    if (__s47param0 && __s47param0.isUserInLevelRange()) {
      this.resultList.push(__s47param0);
    }
  };
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "canAddSlum", {
    get: function () {
      return this.areaType != __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_CAPITAL && this.areaType != __dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "userLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "areaType", {
    get: function () {
      return this.isoData.areaData.areaInfo.areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "isoData", {
    get: function () {
      return __dep_export_Iso.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "resultList", {
    get: function () {
      return this._resultList;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorSurroundings.prototype.addToEditableResultList = function (__s60param0) {
    if (__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE) {
      __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance().addAsEditable(__s60param0);
    }
    this.addToResultList(__s60param0);
  };
  IsoGeneratorSurroundings.prototype.addWinterOffensiveSurroundings = function () {
    var __s63local0 = __dep_export_Iso.Iso.data.grid.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
    var __s63local1 = __dep_export_Iso.Iso.data.objects.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE).gate.pos;
    this.addToResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Road_Surroundings", __s63local1.subtract(__s63local0), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
    this.addToResultList(new __dep_export_FogSurroundingsVO.FogSurroundingsVO());
    if (!__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE || !(__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance().spawnedFillers.length > 0)) {
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_B", new __s0local0(-18, -12), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_L", new __s0local0(-2, -2), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_B", new __s0local0(-2, -9), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(-15, 8), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new __s0local0(-23, 2), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new __s0local0(-1, 24), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_L", new __s0local0(-10, 12), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_M", new __s0local0(7, 20), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_I", new __s0local0(-11, 5), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(-2, 10), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(25, -2), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_C", new __s0local0(17, 2), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new __s0local0(13, -4), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(-2, -21), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(8, -19), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(27, 6), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new __s0local0(12, -16), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_F", new __s0local0(-4, -1), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_M", new __s0local0(4, -11), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(1, 41), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_A", new __s0local0(-2, 9), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_K", new __s0local0(-8, -14), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_I", new __s0local0(14, 0), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new __s0local0(7, 1), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new __s0local0(-1, 30), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(28, 0), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(19, 13), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_B", new __s0local0(23, 3), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_I", new __s0local0(5, 34), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_E", new __s0local0(15, 20), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(11, 22), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(16, 32), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(-18, 38), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new __s0local0(-10, 40), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(-28, 36), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(-13, 48), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(33, 12), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(46, 0), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_L", new __s0local0(40, -4), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new __s0local0(23, 17), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Snowpile_Surroundings_J", new __s0local0(-6, 49), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new __s0local0(19, 46), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new __s0local0(3, 48), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new __dep_export_FillerSurroundingsVO.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new __s0local0(-4, 64), __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER, false));
    }
  };
  return IsoGeneratorSurroundings;
}();
exports.IsoGeneratorSurroundings = __s0local1;
var __dep_export_FillerSurroundingEditor = require("gge-module:export_FillerSurroundingEditor");
var __dep_export_CastleResourceCartsData = require("gge-module:export_CastleResourceCartsData");
var __dep_export_EventSkinEventVO = require("gge-module:export_EventSkinEventVO");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_FoodResourceFieldVO = require("gge-module:export_FoodResourceFieldVO");
var __dep_export_StoneResourceFieldVO = require("gge-module:export_StoneResourceFieldVO");
var __dep_export_WoodResourceFieldVO = require("gge-module:export_WoodResourceFieldVO");
var __dep_export_BeachBottomSurroundingsVO = require("gge-module:export_BeachBottomSurroundingsVO");
var __dep_export_BeachTopSurroundingsVO = require("gge-module:export_BeachTopSurroundingsVO");
var __dep_export_CliffsSurroundingsVO = require("gge-module:export_CliffsSurroundingsVO");
var __dep_export_EilandSlumSurroundingVO = require("gge-module:export_EilandSlumSurroundingVO");
var __dep_export_FillerSurroundingsVO = require("gge-module:export_FillerSurroundingsVO");
var __dep_export_FogSurroundingsVO = require("gge-module:export_FogSurroundingsVO");
var __dep_export_HarborSurroundingsVO = require("gge-module:export_HarborSurroundingsVO");
var __dep_export_MercenarySurroundingsVO = require("gge-module:export_MercenarySurroundingsVO");
var __dep_export_OutpostSurroundingsVO = require("gge-module:export_OutpostSurroundingsVO");
var __dep_export_PathSurroundingsVO = require("gge-module:export_PathSurroundingsVO");
var __dep_export_ResourceCartSurroundingsVO = require("gge-module:export_ResourceCartSurroundingsVO");
var __dep_export_SeaShieldSurroundingsVO = require("gge-module:export_SeaShieldSurroundingsVO");
var __dep_export_ShipSurroundingsVO = require("gge-module:export_ShipSurroundingsVO");
var __dep_export_SlumBuildingPartBuildingVO = require("gge-module:export_SlumBuildingPartBuildingVO");
var __dep_export_SlumBuildingPartCharacterVO = require("gge-module:export_SlumBuildingPartCharacterVO");
var __dep_export_SlumSurroundingsVO = require("gge-module:export_SlumSurroundingsVO");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");

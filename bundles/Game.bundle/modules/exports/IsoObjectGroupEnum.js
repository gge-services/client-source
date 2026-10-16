Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoObjectGroupEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._dataClass = __s3param1;
    __s3local0._viewClass = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoObjectGroupEnum, __s1param0);
  Object.defineProperty(IsoObjectGroupEnum.prototype, "needsAdvancedUpdates", {
    get: function () {
      switch (this) {
        case IsoObjectGroupEnum.BACKGROUND:
        case IsoObjectGroupEnum.EFFECTS:
        case IsoObjectGroupEnum.FLOOR_MARKS:
        case IsoObjectGroupEnum.EXPANSIONS:
        case IsoObjectGroupEnum.MOVEMENTS:
        case IsoObjectGroupEnum.JUDGEMENTS:
        case IsoObjectGroupEnum.TREASURE_CHESTS:
        case IsoObjectGroupEnum.EVENT_BUILDINGS:
        case IsoObjectGroupEnum.UNKNOWN:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectGroupEnum.prototype, "dataClass", {
    get: function () {
      return this._dataClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectGroupEnum.prototype, "viewClass", {
    get: function () {
      return this._viewClass;
    },
    enumerable: true,
    configurable: true
  });
  IsoObjectGroupEnum.__initialize_static_members = function () {
    IsoObjectGroupEnum.UNKNOWN = new IsoObjectGroupEnum("unknown", null, null);
    IsoObjectGroupEnum.BACKGROUND = new IsoObjectGroupEnum("background", __dep_export_IsoDataObjectGroupBackground.IsoDataObjectGroupBackground, __dep_export_IsoViewObjectGroupBackground.IsoViewObjectGroupBackground);
    IsoObjectGroupEnum.GROUNDS = new IsoObjectGroupEnum("ground", __dep_export_IsoDataObjectGroupGround.IsoDataObjectGroupGround, __dep_export_IsoViewObjectGroupGround.IsoViewObjectGroupGround);
    IsoObjectGroupEnum.DEFENCE = new IsoObjectGroupEnum("defence", __dep_export_IsoDataObjectGroupDefence.IsoDataObjectGroupDefence, __dep_export_IsoViewObjectGroupDefence.IsoViewObjectGroupDefence);
    IsoObjectGroupEnum.INNER_BUILDINGS = new IsoObjectGroupEnum("innerBuilding", __dep_export_IsoDataObjectGroupInnerBuilding.IsoDataObjectGroupInnerBuilding, __dep_export_IsoViewObjectGroupInnerBuilding.IsoViewObjectGroupInnerBuilding);
    IsoObjectGroupEnum.EVENT_BUILDINGS = new IsoObjectGroupEnum("eventBuilding", __dep_export_IsoDataObjectGroupEvent.IsoDataObjectGroupEvent, __dep_export_IsoViewObjectGroupEvent.IsoViewObjectGroupEvent);
    IsoObjectGroupEnum.TREASURE_CHESTS = new IsoObjectGroupEnum("treasureChest", __dep_export_IsoDataObjectGroupTreasureChest.IsoDataObjectGroupTreasureChest, __dep_export_IsoViewObjectGroupTreasureChest.IsoViewObjectGroupTreasureChest);
    IsoObjectGroupEnum.SURROUNDINGS = new IsoObjectGroupEnum("surrounding", __dep_export_IsoDataObjectGroupSurrounding.IsoDataObjectGroupSurrounding, __dep_export_IsoViewObjectGroupSurrounding.IsoViewObjectGroupSurrounding);
    IsoObjectGroupEnum.FIXED_POSITIONS = new IsoObjectGroupEnum("fixedPosition", __dep_export_IsoDataObjectGroupFixedPosition.IsoDataObjectGroupFixedPosition, __dep_export_IsoViewObjectGroupFixedPosition.IsoViewObjectGroupFixedPosition);
    IsoObjectGroupEnum.JUDGEMENTS = new IsoObjectGroupEnum("judgements", __dep_export_IsoDataObjectGroupJudgement.IsoDataObjectGroupJudgement, __dep_export_IsoViewObjectGroupJudgements.IsoViewObjectGroupJudgements);
    IsoObjectGroupEnum.EFFECTS = new IsoObjectGroupEnum("effects", null, __dep_export_IsoViewObjectGroupEffect.IsoViewObjectGroupEffect);
    IsoObjectGroupEnum.FLOOR_MARKS = new IsoObjectGroupEnum("floorMark", null, __dep_export_IsoViewObjectGroupFloorMark.IsoViewObjectGroupFloorMark);
    IsoObjectGroupEnum.EXPANSIONS = new IsoObjectGroupEnum("expansion", __dep_export_IsoDataObjectGroupExpansion.IsoDataObjectGroupExpansion, __dep_export_IsoViewObjectGroupExpansion.IsoViewObjectGroupExpansion);
    IsoObjectGroupEnum.MOVEMENTS = new IsoObjectGroupEnum("movements", __dep_export_IsoDataObjectGroupMovement.IsoDataObjectGroupMovement, __dep_export_IsoViewObjectGroupMovement.IsoViewObjectGroupMovement);
  };
  return IsoObjectGroupEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoObjectGroupEnum = __s0local0;
var __dep_export_IsoDataObjectGroupBackground = require("gge-module:export_IsoDataObjectGroupBackground");
var __dep_export_IsoDataObjectGroupDefence = require("gge-module:export_IsoDataObjectGroupDefence");
var __dep_export_IsoDataObjectGroupEvent = require("gge-module:export_IsoDataObjectGroupEvent");
var __dep_export_IsoDataObjectGroupExpansion = require("gge-module:export_IsoDataObjectGroupExpansion");
var __dep_export_IsoDataObjectGroupFixedPosition = require("gge-module:export_IsoDataObjectGroupFixedPosition");
var __dep_export_IsoDataObjectGroupGround = require("gge-module:export_IsoDataObjectGroupGround");
var __dep_export_IsoDataObjectGroupInnerBuilding = require("gge-module:export_IsoDataObjectGroupInnerBuilding");
var __dep_export_IsoDataObjectGroupJudgement = require("gge-module:export_IsoDataObjectGroupJudgement");
var __dep_export_IsoDataObjectGroupMovement = require("gge-module:export_IsoDataObjectGroupMovement");
var __dep_export_IsoDataObjectGroupSurrounding = require("gge-module:export_IsoDataObjectGroupSurrounding");
var __dep_export_IsoDataObjectGroupTreasureChest = require("gge-module:export_IsoDataObjectGroupTreasureChest");
var __dep_export_IsoViewObjectGroupBackground = require("gge-module:export_IsoViewObjectGroupBackground");
var __dep_export_IsoViewObjectGroupDefence = require("gge-module:export_IsoViewObjectGroupDefence");
var __dep_export_IsoViewObjectGroupEffect = require("gge-module:export_IsoViewObjectGroupEffect");
var __dep_export_IsoViewObjectGroupEvent = require("gge-module:export_IsoViewObjectGroupEvent");
var __dep_export_IsoViewObjectGroupExpansion = require("gge-module:export_IsoViewObjectGroupExpansion");
var __dep_export_IsoViewObjectGroupFixedPosition = require("gge-module:export_IsoViewObjectGroupFixedPosition");
var __dep_export_IsoViewObjectGroupFloorMark = require("gge-module:export_IsoViewObjectGroupFloorMark");
var __dep_export_IsoViewObjectGroupGround = require("gge-module:export_IsoViewObjectGroupGround");
var __dep_export_IsoViewObjectGroupInnerBuilding = require("gge-module:export_IsoViewObjectGroupInnerBuilding");
var __dep_export_IsoViewObjectGroupJudgements = require("gge-module:export_IsoViewObjectGroupJudgements");
var __dep_export_IsoViewObjectGroupMovement = require("gge-module:export_IsoViewObjectGroupMovement");
var __dep_export_IsoViewObjectGroupSurrounding = require("gge-module:export_IsoViewObjectGroupSurrounding");
var __dep_export_IsoViewObjectGroupTreasureChest = require("gge-module:export_IsoViewObjectGroupTreasureChest");
__s0local0.__initialize_static_members();

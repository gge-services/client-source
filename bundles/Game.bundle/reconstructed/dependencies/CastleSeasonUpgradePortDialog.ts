import { CastleModel } from "./CastleModel";
import { CastleSeasonBaseRepairDialog } from "./CastleSeasonBaseRepairDialog";
import { ClipColor } from "../../../ggs.dll/reconstructed/exports/ClipColor";
export class CastleSeasonUpgradePortDialog extends CastleSeasonBaseRepairDialog {
  static NAME: any;
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  getClipColor() {
    var __s5local0 = [];
    __s5local0.push(new ClipColor("flag", CastleModel.userData.playerCrest.colorsTwo));
    return __s5local0;
  }
  getPictureClassName() {
    return "UpgradePortPicture_Level" + (CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel + 1);
  }
  static __initialize_static_members() {
    CastleSeasonUpgradePortDialog.NAME = "CastleUpgradePort";
  }
}
CastleSeasonUpgradePortDialog.__initialize_static_members();

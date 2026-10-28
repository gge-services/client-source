import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
export class ClientConstInstanceIDs {
  static ZONE_ID_US1: any;
  static ZONE_ID_DE1: any;
  static INSTANCE_ID_BETA: any;
  static isBetaInstance() {
    return BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstInstanceIDs.INSTANCE_ID_BETA || ClientConstInstanceIDs.fakeBetaInstance;
  }
  static __initialize_static_members() {
    ClientConstInstanceIDs.ZONE_ID_US1 = 203;
    ClientConstInstanceIDs.ZONE_ID_DE1 = 2;
    ClientConstInstanceIDs.INSTANCE_ID_BETA = 39;
  }
  static INSTANCE_ID_TEMP = 42;
  static INSTANCE_ID_ABG = 45;
  static INSTANCE_ID_TESTSERVER_START = 250;
  static INSTANCE_ID_GR1 = 28;
  static fakeBetaInstance = false;
}
ClientConstInstanceIDs.__initialize_static_members();

import { progressValuesArrayType } from "./snackType";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Progress: undefined;
            CreateSnack: undefined;
            CreateSnackSuccessful: {
                color: string
            };
        }
    }
}
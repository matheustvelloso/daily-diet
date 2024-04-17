import { SnackType, progressValuesArrayType } from "./snackType";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Progress: undefined;
            CreateSnack: undefined;
            CreateSnackSuccessful: {
                color: string
            };
            Snack: {
                snack: SnackType
            }
            EditSnack: {
                snack: SnackType
            }
        }
    }
}
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_LIST } from "@storage/storageConfig";
import { SnackType } from "src/types/snackType";

export const getAllSnacks = async () => {
    try {
        const storage = await AsyncStorage.getItem(SNACK_LIST);

        const snacks: SnackType[] = storage ? JSON.parse(storage) : [];

        return snacks;

    } catch (error) {
        throw error;
    }
}
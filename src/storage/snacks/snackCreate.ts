import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_LIST } from "@storage/storageConfig";
import { SnackType } from "src/types/snackType";
import { getAllSnacks } from "./getAllSnacks";

export const snackCreate = async (newSnack: SnackType) => {
    try {
        const storedSnacks = await getAllSnacks();

        const storage = JSON.stringify([...storedSnacks, newSnack])

        await AsyncStorage.setItem(SNACK_LIST, storage);

    } catch (error) {
        throw error;
    }
}
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_LIST } from "@storage/storageConfig";
import { SnackType } from "src/types/snackType";
import { getAllSnacks } from "./getAllSnacks";

export const snackRemove = async (snackToRemove: SnackType) => {
    try {
        const storedSnacks = await getAllSnacks();

        const removedSnack = storedSnacks.filter(snack =>
            !(snack.name === snackToRemove.name
                && snack.date === snackToRemove.date
                && snack.time === snackToRemove.time
            ))

        const storage = JSON.stringify(removedSnack)

        await AsyncStorage.setItem(SNACK_LIST, storage);

    } catch (error) {
        throw error;
    }
}
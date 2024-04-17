import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_LIST } from "@storage/storageConfig";
import { SnackType } from "src/types/snackType";
import { getAllSnacks } from "./getAllSnacks";

export const snackEdit = async (EditedSnack: SnackType) => {
    try {
        let storedSnacks = await getAllSnacks();

        const index = storedSnacks.findIndex(snack => snack.date === EditedSnack.date && snack.time === EditedSnack.time && snack.name === EditedSnack.name)

        if (index !== -1) {
            storedSnacks[index] = EditedSnack

            storedSnacks.splice(index, 0, storedSnacks.splice(index, 1)[0])
        }

        const storage = JSON.stringify([...storedSnacks])

        await AsyncStorage.setItem(SNACK_LIST, storage);

    } catch (error) {
        throw error;
    }
}
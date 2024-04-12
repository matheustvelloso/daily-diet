import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_LIST } from "@storage/storageConfig";
import { SnackType } from "src/types/snackType";
import { getAllSnacks } from "./getAllSnacks";

export const snackCreate = async (newSnack: SnackType) => {
    try {
        const storedSnacks = await getAllSnacks();

        // const snackDateAlreadyExists = storedSnacks.some(snack => snack.date === newSnack.date)

        // if (snackDateAlreadyExists) {
        //     const storedSnacksFiltered = storedSnacks.map(snack => snack.date === newSnack.date ? { date: snack.date, snacks: [...snack.snacks, ...newSnack.snacks] } : snack);
        //     const storage = JSON.stringify(storedSnacksFiltered);
        //     return await AsyncStorage.setItem(SNACK_LIST, storage);
        // }

        const storage = JSON.stringify([...storedSnacks, newSnack])

        await AsyncStorage.setItem(SNACK_LIST, storage);

    } catch (error) {
        throw error;
    }
}
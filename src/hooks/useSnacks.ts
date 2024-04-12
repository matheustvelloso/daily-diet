import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useMemo, useState } from "react";
import { getAllSnacks } from "src/storage/snacks/getAllSnacks";
import { SnackByDateType, SnackType } from "src/types/snackType";


type SnackHookType = () => {
    snacks: SnackType[],
    snacksPerDate: SnackByDateType[],
    fetchSnacks: () => Promise<void>
}

const useSnacks: SnackHookType = () => {
    const [snacks, setSnacks] = useState<SnackType[]>([]);
    const [snacksPerDate, setSnacksPerDate] = useState<SnackByDateType[]>([]);

    const fetchSnacks = async () => {
        try {
            const data = await getAllSnacks();
            const groupedSnacks: { [date: string]: SnackType[] } = {}
            for (const snack of data) {
                const date = snack.date;
                if (!groupedSnacks[date]) {
                    groupedSnacks[date] = [];
                }
                groupedSnacks[date].push(snack);
            }

            setSnacksPerDate(Object.entries(groupedSnacks))
            setSnacks(data);

        } catch (e) {
            console.log(e)
        }
    }


    return useMemo(
        () => ({
            snacks,
            snacksPerDate,
            fetchSnacks
        }),
        [snacks, snacksPerDate, fetchSnacks],
    );
};

export default useSnacks;
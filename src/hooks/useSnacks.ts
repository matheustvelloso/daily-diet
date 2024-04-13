import { useMemo, useState } from "react";
import { getAllSnacks } from "src/storage/snacks/getAllSnacks";
import { SnackType } from "src/types/snackType";


type SnackHookType = () => {
    snacks: SnackType[],
    fetchSnacks: () => Promise<void>
}

const useSnacks: SnackHookType = () => {
    const [snacks, setSnacks] = useState<SnackType[]>([]);

    const fetchSnacks = async () => {
        try {
            const data = await getAllSnacks();
            setSnacks(data);

        } catch (e) {
            console.log(e)
        }
    }


    return useMemo(
        () => ({
            snacks,
            fetchSnacks
        }),
        [snacks, fetchSnacks],
    );
};

export default useSnacks;
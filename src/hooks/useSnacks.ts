import { useMemo, useState } from "react";
import { getAllSnacks } from "src/storage/snacks/getAllSnacks";
import { SnackType } from "src/types/snackType";


type SnackHookType = () => {
    snacks: SnackType[],
    fetchSnacks: () => Promise<void>
    loading: boolean
}

const useSnacks: SnackHookType = () => {
    const [snacks, setSnacks] = useState<SnackType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchSnacks = async () => {
        setLoading(true);
        try {
            const data = await getAllSnacks();
            setSnacks(data);

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }


    return useMemo(
        () => ({
            snacks,
            fetchSnacks,
            loading
        }),
        [snacks, fetchSnacks, loading],
    );
};

export default useSnacks;
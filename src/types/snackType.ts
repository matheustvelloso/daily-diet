export type SnackType = {
    name: string,
    description: string,
    date: string | number,
    time: string | number,
    isDiet: boolean,
}

export type progressValuesArrayType = {
    percentage: number,
    isDiet: number,
    notDiet: number,
    totalSnacks: number
}
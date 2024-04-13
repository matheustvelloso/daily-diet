export type SnackType = {
    name: string,
    description: string,
    date: string,
    time: string,
    isDiet: boolean,
}

export type SnackByDateType = [
    string,
    SnackType[]
]

export type progressValuesArrayType = {
    percentage: number,
    isDiet: number,
    notDiet: number,
    totalSnacks: number
}
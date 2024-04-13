
import { Container, Title, ContentContainer } from "./styles"
import { Header } from "src/components/Header"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { StatusCard } from "src/components/StatusCard"
import { View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import useSnacks from "@hooks/useSnacks"
import { useCallback, useEffect, useState } from "react"
import { SnackType } from "src/types/snackType"


export const Progress: React.FC = () => {
    const [percentage, setPercentage] = useState(0);
    const [isDiet, setIsDiet] = useState(0);
    const [notDiet, setNotDiet] = useState(0);
    const [totalSnacks, setTotalSnacks] = useState(0);
    const [snacksBetterSequency, setSnacksBetterSequency] = useState(0);

    const { snacks, fetchSnacks } = useSnacks();

    const insets = useSafeAreaInsets();

    const extractIsDietValues = useCallback(() => {
        const isDietMap = snacks?.map(snack => snack.isDiet)
        const isDietValues = (isDietMap?.filter(isDiet => isDiet === true).length / isDietMap.length) * 100
        setPercentage(isDietValues)
    }, [snacks]);

    const snacksFilteredByBetterSequency = (snacks: SnackType[]): number => {
        const snacksPerDate: { [key: string]: SnackType[] } = {};
        snacks.forEach(snack => {
            snacksPerDate[snack.date] = snacksPerDate[snack.date] || [];
            snacksPerDate[snack.date].push(snack);
        });

        let betterSequency: SnackType[] = [];
        let currentSequency: SnackType[] = [];


        for (const data in snacksPerDate) {
            const snacksPerDay = snacksPerDate[data];

            snacksPerDay.sort((a, b) => a.time.localeCompare(b.time));

            for (const snack of snacksPerDay) {
                if (snack.isDiet) {
                    currentSequency.push(snack);
                } else {
                    if (currentSequency.length > betterSequency.length) {
                        currentSequency = [...currentSequency];
                    }
                    currentSequency = [];
                }
            }

            if (currentSequency.length > betterSequency.length) {
                betterSequency = [...currentSequency];
            }
            currentSequency = [];
        }

        return betterSequency.length;

    }


    useFocusEffect(useCallback(() => {
        fetchSnacks();
    }, []));

    useEffect(() => {
        extractIsDietValues();
        setTotalSnacks(snacks.length);
        setIsDiet(prevState => snacks?.map(snack => snack.isDiet).filter(isDiet => isDiet === true).length || prevState);
        setNotDiet(prevState => snacks?.map(snack => snack.isDiet).filter(isDiet => isDiet === false).length || prevState);
        setSnacksBetterSequency(snacksFilteredByBetterSequency(snacks));
    }, [snacks])

    return (
        <Container insets={insets} isDiet={percentage >= 50}>
            <Header percentage={percentage} />
            <ContentContainer>
                <Title>Estatísticas gerais</Title>
                <View style={{ gap: 12 }}>
                    <StatusCard quantity={snacksBetterSequency} statusText="melhor sequência de pratos dentro da dieta" />
                    <StatusCard quantity={totalSnacks} statusText="refeições registradas" />
                    <View style={{ flexDirection: 'row', gap: 12 }}>
                        <StatusCard flex1 quantity={isDiet} statusText="refeições dentro da dieta" bgColor="green_light" />
                        <StatusCard flex1 quantity={notDiet} statusText="refeições fora da dieta" bgColor="red_light" />
                    </View>
                </View>
            </ContentContainer>
        </Container >
    )
}
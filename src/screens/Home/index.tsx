import { FlatList, View } from "react-native"
import { Container, DateText, Title } from "./styles"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useState, useEffect } from "react"
import { SnackCard } from "@components/SnackCard"
import useSnacks from "@hooks/useSnacks"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SnackType } from "src/types/snackType"

export const Home: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { snacks, fetchSnacks } = useSnacks();
    const { navigate } = useNavigation();
    // AsyncStorage.clear()

    const [percentage, setPercentage] = useState(0);

    const formatDate = (date: string) => date.replace('20', '').replaceAll('/', '.');

    useFocusEffect(useCallback(() => {
        fetchSnacks();
    }, []));

    useEffect(() => {
        const isDietMap = snacks?.map(snack => snack.isDiet)
        const isDietValues = (isDietMap?.filter(isDiet => isDiet === true).length / isDietMap.length) * 100
        setPercentage(isDietValues)
    }, [snacks]);

    const snacksSorted = snacks?.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));

        return dateB.getTime() - dateA.getTime();
    });
    const groupedSnacks: { [date: string]: SnackType[] } = {}
    for (const snack of snacksSorted) {
        const date = snack.date;
        if (!groupedSnacks[date]) {
            groupedSnacks[date] = [];
        }
        groupedSnacks[date].push(snack);
    }

    // console.log(snacksSorted);

    return (
        <Container insets={insets}>
            <Header percentage={percentage} isHome />
            <View style={{ paddingHorizontal: 24 }}>
                <Title>Refeições</Title>
                <Button icon="plus" buttonText="Nova refeição" onPress={() => navigate('CreateSnack')} />
            </View>

            <FlatList
                style={{ paddingHorizontal: 24 }}
                data={Object.entries(groupedSnacks)}
                renderItem={({ item }) => (
                    <>
                        <DateText>{formatDate(item[0])}</DateText>
                        {item[1].map(snack => (<SnackCard key={snack.time} snack={snack} onPress={() => navigate('Snack', { snack })} />))}
                    </>
                )}
            />
        </Container >
    )
}
import { FlatList, View } from "react-native"
import { Container, DateText, Title } from "./styles"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useState, useEffect } from "react"
import { SnackCard } from "@components/SnackCard"
import useSnacks from "@hooks/useSnacks"

export const Home: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { snacks, snacksPerDate, fetchSnacks } = useSnacks();
    const { navigate } = useNavigation();

    const [percentage, setPercentage] = useState(0);

    const formatDate = (date: string | number) => String(date).replace('20', '').replaceAll('/', '.');

    useFocusEffect(useCallback(() => {
        fetchSnacks();
    }, []));

    useEffect(() => {
        const isDietMap = snacks?.map(snack => snack.isDiet)
        const isDietValues = (isDietMap?.filter(isDiet => isDiet === true).length / isDietMap.length) * 100
        setPercentage(isDietValues)
    }, [snacks]);

    return (
        <Container insets={insets}>
            <Header percentage={percentage} isHome />
            <View style={{ paddingHorizontal: 24 }}>
                <Title>Refeições</Title>
                <Button icon="plus" buttonText="Nova refeição" onPress={() => navigate('CreateSnack')} />
            </View>

            <FlatList
                style={{ paddingHorizontal: 24 }}
                data={snacksPerDate}
                renderItem={({ item }) => (
                    <>
                        <DateText>{formatDate(item[0])}</DateText>
                        {item[1].map(snack => (<SnackCard key={snack.description} snack={snack} />))}
                    </>
                )}
            />
        </Container >
    )
}
import { FlatList, View } from "react-native"
import { Container, DateText, Title } from "./styles"
import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useState, useEffect } from "react"
import { SnackCard } from "@components/SnackCard"
import AsyncStorage from "@react-native-async-storage/async-storage"
import useSnacks from "@hooks/useBaseHook"

export const Home: React.FC = () => {
    const [percentage, setPercentage] = useState(0);

    const { snacks, fetchSnacks } = useSnacks();

    const formatDate = (date: string | number) => String(date).replace('20', '').replaceAll('/', '.')

    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();

    useFocusEffect(useCallback(() => {
        fetchSnacks();
    }, []));

    useEffect(() => {
        const isDietMap = snacks?.map(snack => snack.isDiet)
        const isDietValues = (isDietMap?.filter(isDiet => isDiet === true).length / isDietMap.length) * 100
        setPercentage(isDietValues)
    }, [snacks])


    return (
        <Container insets={insets}>
            <Header percentage={percentage} isHome />
            <View style={{ paddingHorizontal: 24 }}>
                <Title>Refeições</Title>
                <Button icon="plus" buttonText="Nova refeição" onPress={() => navigate('CreateSnack')} />
            </View>
            <FlatList
                style={{ paddingHorizontal: 24 }}
                data={snacks}
                renderItem={({ item }) => (
                    <>
                        <DateText>{formatDate(item.date)}</DateText>
                        <SnackCard snackPerDate={item} />
                    </>
                )}
            />
        </Container >
    )
}
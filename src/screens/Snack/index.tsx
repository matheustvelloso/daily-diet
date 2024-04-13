
import { Alert, ScrollView, Text, View } from "react-native";
import { Container, ContentContainer, Dot, InputButton, Title } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { useCallback, useEffect, useState } from "react";
import { themes } from "src/themes/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { snackCreate } from "@storage/snacks/snackCreate";
import { SnackType } from "src/types/snackType";
import { snackRemove } from "@storage/snacks/snackRemove";

type RouteParams = {
    snack: SnackType
}


export const Snack: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();

    const { params: { snack } } = useRoute() as { params: RouteParams };

    const removedSnack = useCallback(async () => {
        try {
            await snackRemove(snack);
            navigate('Home')
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleRemoveSnack = useCallback(async () => {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => removedSnack() }
            ]
        )
    }, [])

    return (
        <Container insets={insets} color={snack.isDiet}>
            <ContentContainer>
                <View style={{ flex: 1, gap: 16 }}>
                    <View>
                        <Title>{snack.name}</Title>
                        <Text>{snack.description}</Text>
                    </View>
                    <View>
                        <Title>Data e hora</Title>
                        <Text>{`${snack.date} às ${snack.time}`}</Text>
                    </View>
                    <View>
                        <Text>{snack.isDiet ? 'dentro da dieta' : 'fora da dieta'}</Text>
                    </View>
                </View>
                <Button buttonText="Editar refeição" onPress={handleRemoveSnack} icon="edit" />
                <Button buttonText="Excluir refeição" onPress={handleRemoveSnack} buttonColor="white" icon="trash" />
            </ContentContainer>
        </Container >
    )
}
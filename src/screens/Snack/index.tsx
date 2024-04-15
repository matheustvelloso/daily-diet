
import { Alert, ScrollView, Text, View } from "react-native";
import { Container, ContentContainer, Dot, IsDietContainer, SnackDateAndTime, SnackDateAndTimeTitle, SnackDescription, SnackIsDiet, SnackName } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { useCallback, useEffect, useState } from "react";
import { themes } from "src/themes/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { snackCreate } from "@storage/snacks/snackCreate";
import { SnackType } from "src/types/snackType";
import { snackRemove } from "@storage/snacks/snackRemove";
import { Modal } from "@components/Modal";

type RouteParams = {
    snack: SnackType
}


export const Snack: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

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
        <>
            <Container insets={insets} color={snack.isDiet} modalVisible={modalVisible}>
                <ContentContainer>
                    <View style={{ flex: 1, gap: 16 }}>
                        <View style={{ gap: 12 }}>
                            <SnackName>{snack.name}</SnackName>
                            <SnackDescription>{snack.description}</SnackDescription>
                        </View>
                        <View style={{ gap: 12 }}>
                            <SnackDateAndTimeTitle>Data e hora</SnackDateAndTimeTitle>
                            <SnackDateAndTime>{`${snack.date} às ${snack.time}`}</SnackDateAndTime>
                        </View>
                        <IsDietContainer>
                            <Dot iconColor={snack.isDiet ? 'green' : 'red'} />
                            <SnackIsDiet>{snack.isDiet ? 'dentro da dieta' : 'fora da dieta'}</SnackIsDiet>
                        </IsDietContainer>
                    </View>
                    <Button buttonText="Editar refeição" onPress={handleRemoveSnack} icon="edit" />
                    <Button buttonText="Excluir refeição" onPress={() => setModalVisible(true)} buttonColor="white" icon="trash" />
                </ContentContainer>
                <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} removedSnack={removedSnack} />
            </Container >
        </>
    )
}
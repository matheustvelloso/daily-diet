import { Modal as ReactNativeModal, StyleSheet, View } from "react-native"

import { Container, ModalText, ModalView } from "./styles"
import { Button } from "../Button";

interface IModalProps {
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    removedSnack: () => Promise<void>
}

export const Modal: React.FC<IModalProps> = ({ modalVisible, setModalVisible, removedSnack }) => {

    return (
        <ReactNativeModal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Container>
                <ModalView>
                    <ModalText >Deseja realmente excluir o registro da refeição?</ModalText>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
                        <Button
                            buttonText="Cancelar"
                            buttonColor="white"
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{ flex: 1 }}
                        />
                        <Button
                            buttonText="Sim, excluir"
                            buttonColor="gray_200"
                            onPress={() => { setModalVisible(!modalVisible), removedSnack() }}
                            style={{ flex: 1 }}
                        />
                    </View>
                </ModalView>
            </Container>
        </ReactNativeModal>
    )
}
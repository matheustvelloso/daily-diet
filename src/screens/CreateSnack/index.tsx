
import { Alert, ScrollView, Text, View } from "react-native";
import { Container, ContentContainer, Dot, InputButton, Title } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { InputText } from "src/components/InputText";
import { Button } from "src/components/Button";
import { useCallback, useEffect, useState } from "react";
import { themes } from "src/themes/index";
import { useNavigation } from "@react-navigation/native";
import { snackCreate } from "@storage/snacks/snackCreate";
import { SnackType } from "src/types/snackType";


export const CreateSnack: React.FC = () => {
    const [color, setColor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [required, setRequired] = useState(false);
    const [isDiet, setIsDiet] = useState(false);

    const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    const timeMask = [/\d/, /\d/, ':', /\d/, /\d/];

    const insets = useSafeAreaInsets();

    const verifyFormEmptyFields = (formValues: string[]) => formValues.some(value => value.trim().length === 0)

    const newSnack = { date, description, name, time, isDiet } as SnackType

    const { navigate } = useNavigation();

    const handleCreateNewSnack = useCallback(async () => {
        try {
            if (verifyFormEmptyFields([color, date, time, name, description])) return setRequired(true);

            await snackCreate(newSnack);
            navigate('CreateSnackSuccessful', { color })
        } catch (error) {
            console.log(error);
        }
    }, [verifyFormEmptyFields])


    useEffect(() => {
        !verifyFormEmptyFields([color, date, time, name, description]) && setRequired(false);
        setIsDiet(color === 'green' ? true : false);
    }, [color, date, time, name, description])

    return (
        <Container insets={insets}>
            <ContentContainer>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, gap: 16 }}>
                        <View>
                            <InputText
                                title="Nome"
                                value={name}
                                onChangeText={setName}
                                required={required}
                            />
                        </View>
                        <View>
                            <InputText
                                style={{ height: 120, textAlignVertical: 'top' }}
                                title="Descrição"
                                value={description}
                                onChangeText={setDescription}
                                required={required}

                            />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 24 }}>
                            <View style={{ flex: 1 }}>
                                <InputText
                                    title="Data"
                                    value={date}
                                    onChangeText={setDate}
                                    mask={dateMask}
                                    required={required}
                                    placeholder=""
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <InputText
                                    title="Hora"
                                    value={time}
                                    onChangeText={setTime}
                                    mask={timeMask}
                                    required={required}
                                    placeholder=""
                                />
                            </View>
                        </View>
                        <View>
                            <Title>Está dentro da dieta?</Title>
                            <View style={{ flexDirection: 'row', gap: 24, }}>
                                <InputButton bgColor={color === 'green' ? 'green' : ''} onPress={() => setColor(prev => prev === 'green' ? '' : 'green')}>
                                    <Dot iconColor="green" />
                                    <Text style={{ fontFamily: themes.font_family.bold }}>Sim</Text>
                                </InputButton>
                                <InputButton bgColor={color === 'red' ? 'red' : ''} onPress={() => setColor(prev => prev === 'red' ? '' : 'red')}>
                                    <Dot iconColor="red" />
                                    <Text style={{ fontFamily: themes.font_family.bold }}>Não</Text>
                                </InputButton>
                            </View>
                        </View>
                    </View>
                    <Button buttonText="Cadastrar refeição" onPress={handleCreateNewSnack} />
                </ScrollView>
            </ContentContainer>
        </Container >
    )
}
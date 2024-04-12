import { Image, Text, View, useWindowDimensions } from "react-native"
import { Container, ContentContainer, Message, Span, Title } from "./styles"
import { Button } from "src/components/Button"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useNavigation, useRoute } from "@react-navigation/native"

import IsDiet from '@assets/isDiet.png'
import NotDiet from '@assets/notDiet.png'

type RouteParams = {
    color: string;
}

export const CreateSnackSuccessful: React.FC = () => {

    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();

    const { width } = useWindowDimensions();

    const { params: { color } } = useRoute() as { params: RouteParams };

    return (
        <Container insets={insets}>
            <ContentContainer>
                <View>
                    <Title color={color}>{color === 'green' ? "Continue assim!" : "Que pena!"}</Title>
                    {color === 'green'
                        ?
                        <Message>Você continua <Span>dentro da dieta.</Span> Muito bem!</Message>
                        :
                        <Message>Você <Span>saiu da dieta</Span> dessa vez, mas continue se esforçando e não desista!</Message>
                    }
                </View>
                <Image source={color === 'green' ? IsDiet : NotDiet} />
                <Button style={{ width: width * 0.5 }} buttonText="Ir para a página inicial" onPress={() => navigate('Home')} />
            </ContentContainer>
        </Container >
    )
}
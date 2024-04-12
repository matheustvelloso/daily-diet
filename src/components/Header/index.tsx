import { Image, TouchableOpacity, View } from "react-native"
import {
    ForkAndKnife,
    AppName,
    TextContainer,
    Percent, Text,
    RightUpArrow,
    StatusContainer,
    Container,
    LeftArrow,
    StatusHeaderContainer
} from "./styles"

import profileImage from "@assets/profileImage.png"
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

interface IHeaderProps {
    isHome?: boolean
    percentage: number
}

export const Header: React.FC<IHeaderProps> = ({ percentage, isHome = false }) => {

    const { navigate } = useNavigation();

    const formatedNumber = useCallback((number: number) => {
        return number >= 0 ? number.toFixed(2).toString().replace('.', ',') + '%' : '0,00%'
    }, [])

    return (
        <>
            {isHome
                ?

                <Container>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <ForkAndKnife />
                            <View>
                                <AppName>Daily</AppName>
                                <AppName>Diet</AppName>
                            </View>
                        </View>
                        <Image source={profileImage} />
                    </View>


                    <StatusContainer isDiet={percentage >= 50} onPress={() => navigate('Progress')}>
                        <TextContainer>
                            <Percent>{formatedNumber(percentage)}</Percent>
                            <Text>das refeições dentro da dieta</Text>
                        </TextContainer>
                        <RightUpArrow isDiet={percentage >= 50} />
                    </StatusContainer>
                </Container>

                :

                <StatusHeaderContainer isDiet={percentage >= 50} >
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <LeftArrow isDiet={percentage >= 50} />
                    </TouchableOpacity>
                    <TextContainer>
                        <Percent>{formatedNumber(percentage)}</Percent>
                        <Text>das refeições dentro da dieta</Text>
                    </TextContainer>
                </StatusHeaderContainer>
            }
        </>
    )
}
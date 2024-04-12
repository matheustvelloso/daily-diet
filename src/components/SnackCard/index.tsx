import { FlatList, Text, View } from "react-native"
import { Dot, NameText, SnackListContainer, TimeText } from "./styles"
import { SnackType } from "src/types/snackType"

interface ISnackCardProps {
    snack: SnackType
}

export const SnackCard: React.FC<ISnackCardProps> = ({ snack }) => {
    return (
        <SnackListContainer>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TimeText >{snack.time}</TimeText>
                <NameText>{snack.name}</NameText>
            </View>
            <Dot iconColor={snack.isDiet === true ? 'green' : 'red'} />
        </SnackListContainer >
    )
}
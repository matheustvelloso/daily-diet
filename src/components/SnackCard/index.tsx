import { FlatList, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { Dot, NameText, SnackListContainer, TimeText } from "./styles"
import { SnackType } from "src/types/snackType"

interface ISnackCardProps extends TouchableOpacityProps {
    snack: SnackType
}

export const SnackCard: React.FC<ISnackCardProps> = ({ snack, ...rest }) => {
    return (
        <SnackListContainer {...rest}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TimeText >{snack.time}</TimeText>
                <NameText>{snack.name}</NameText>
            </View>
            <Dot iconColor={snack.isDiet === true ? 'green' : 'red'} />
        </SnackListContainer >
    )
}
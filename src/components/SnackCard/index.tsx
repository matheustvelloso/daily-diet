import { FlatList, Text, View } from "react-native"
import { Dot, NameText, SnackListContainer, TimeText } from "./styles"
import { SnackType } from "src/types/snackType"

interface ISnackCardProps {
    snackPerDate: SnackType
}

export const SnackCard: React.FC<ISnackCardProps> = ({ snackPerDate }) => {
    return (
        <View
            style={{ gap: 12 }}
        >
            <SnackListContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <TimeText >{snackPerDate.time}</TimeText>
                    <NameText>{snackPerDate.name}</NameText>
                </View>
                <Dot iconColor={snackPerDate.isDiet === true ? 'green' : 'red'} />
            </SnackListContainer >
        </View>
    )
}
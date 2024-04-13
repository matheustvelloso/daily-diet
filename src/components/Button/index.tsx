import { TouchableOpacityProps } from "react-native"
import { ButtonText, Container, EditIcon, PlusIcon, TrashIcon } from "./styles"
import { useCallback } from "react";

type IButtonProps = TouchableOpacityProps & {
    buttonText: string;
    icon?: 'trash' | 'edit' | 'plus';
    buttonColor?: 'gray_200' | 'white';
}

export const Button: React.FC<IButtonProps> = ({ buttonText, icon, buttonColor = 'gray_200', ...rest }) => {
    const Icon = useCallback(() => {
        switch (icon) {
            case 'trash':
                return <TrashIcon />;
            case 'edit':
                return <EditIcon />;
            case 'plus':
                return <PlusIcon />;
            default:
                return;

        }
    }, [icon])

    return (
        <Container {...rest} buttonColor={buttonColor} >
            <Icon />
            <ButtonText buttonColor={buttonColor}>{buttonText}</ButtonText>
        </Container >
    )
}
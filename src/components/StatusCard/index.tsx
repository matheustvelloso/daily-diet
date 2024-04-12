import { ViewProps } from "react-native";
import { Container, Title, StatusText } from "./styles"

type IStatusCardProps = ViewProps & {
    statusText: string;
    quantity: number;
    bgColor?: string;
    flex1?: boolean;
}

export const StatusCard: React.FC<IStatusCardProps> = ({ statusText, quantity, bgColor = "gray_600", flex1 = false }) => {
    return (
        <Container flex1={flex1} bgColor={bgColor}>
            <Title>{`${quantity}`}</Title>
            <StatusText>{statusText}</StatusText>
        </Container>
    )
}
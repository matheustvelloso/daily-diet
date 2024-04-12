import { MaskInputProps } from "react-native-mask-input";
import { InputTitle, Input } from "./styles"
import { RequiredMessage } from "src/components/RequiredMessage";

type IInputTextProps = MaskInputProps & {
    title: string;
    required: boolean;
}

export const InputText: React.FC<IInputTextProps> = ({ title, required, ...rest }) => {
    return (
        <>
            <InputTitle>{title}</InputTitle>
            <Input {...rest} />
            <RequiredMessage required={required} />
        </>
    )
}
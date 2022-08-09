import { CustomInput, InputWrapper, Label } from "./styled";

export const Input = ({ label, onChange, name }) => (
    <InputWrapper>
        <Label htmlFor={label}>{label}</Label>
        <CustomInput onChange={onChange} name={name} />
    </InputWrapper>
)
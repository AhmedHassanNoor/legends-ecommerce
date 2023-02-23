import { FormInputLabel, Input, Group } from "./styles";

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
  </Group>
);

export default FormInput;

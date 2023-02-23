import { BaseButton, GoogleButton, InvertedButton } from "./styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ buttonType, children, ...otherProps }) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.base:
      return <BaseButton {...otherProps}>{children}</BaseButton>;

    case BUTTON_TYPE_CLASSES.google:
      return <GoogleButton {...otherProps}>{children}</GoogleButton>;

    case BUTTON_TYPE_CLASSES.inverted:
      return <InvertedButton {...otherProps}>{children}</InvertedButton>;

    default:
      return <BaseButton {...otherProps}>{children}</BaseButton>;
  }
};

export default Button;

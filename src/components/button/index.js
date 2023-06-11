import { BaseButton, LoadingSpinner, GoogleButton, InvertedButton } from "./styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ buttonType, children, isLoading = false, ...otherProps }) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.base:
      return <BaseButton {...otherProps}>{isLoading ? <LoadingSpinner /> : children}</BaseButton>;

    case BUTTON_TYPE_CLASSES.google:
      return <GoogleButton {...otherProps}>{isLoading ? <LoadingSpinner /> : children}</GoogleButton>;

    case BUTTON_TYPE_CLASSES.inverted:
      return <InvertedButton {...otherProps}> {isLoading ? <LoadingSpinner /> : children}</InvertedButton>;

    default:
      return (
        <BaseButton disabled={isLoading} {...otherProps} type="submit">
          {isLoading ? <LoadingSpinner /> : children}
        </BaseButton>
      );
  }
};

export default Button;

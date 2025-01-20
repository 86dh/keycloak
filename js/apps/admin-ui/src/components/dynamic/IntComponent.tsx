import { useTranslation } from "react-i18next";
import { TextControl } from "@keycloak/keycloak-ui-shared";

import { convertToName } from "./DynamicComponents";
import { NumberComponentProps } from "./components";

export const IntComponent = ({
  name,
  label,
  helpText,
  ...props
}: NumberComponentProps) => {
  const { t } = useTranslation();

  return (
    <TextControl
      name={convertToName(name!)}
      type="number"
      pattern="\d*"
      label={t(label!)}
      labelIcon={t(helpText!)}
      data-testid={name}
      {...props}
    />
  );
};

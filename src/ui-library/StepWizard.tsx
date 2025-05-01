import { FC } from "react";

export interface StepWizardProps {
  children: React.ReactNode;
}

export const StepWizard: FC<StepWizardProps> = ({ children }) => {
  return (
    <div className="step-wizard">
      <div className="step-wizard__header"></div>
      <div className="step-wizard__body">{children}</div>
    </div>
  );
};

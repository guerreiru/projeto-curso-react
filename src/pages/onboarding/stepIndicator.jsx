import PropTypes from "prop-types";
import { Indicator, StepIndicatorWrapper } from "./style";

export function StepIndicator({ steps, currentStep }) {
  return (
    <StepIndicatorWrapper>
      {steps.map((step) => {
        const isActive = step.title === currentStep.title ? "active" : "";
        return <Indicator key={step.title} $active={isActive}></Indicator>;
      })}
    </StepIndicatorWrapper>
  );
}

StepIndicator.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.object,
  active: PropTypes.bool,
};

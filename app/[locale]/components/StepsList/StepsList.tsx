// StepsList.tsx
import React from "react";
import ProcessStep from "../ProcessStep/ProcessStep";
import styles from "./StepsList.module.css";

interface Step {
  Title: string;
  Content: string;
}

interface StepsListProps {
  steps: Step[];
}

const StepsList: React.FC<StepsListProps> = ({ steps }) => {
  return (
    <div className={styles.stepsList}>
      {steps.map((step, index) => (
        <ProcessStep key={index} step={step} />
      ))}
    </div>
  );
};

export default StepsList;

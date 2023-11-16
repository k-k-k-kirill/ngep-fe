"use client";

import React, { useState, useRef, useEffect } from "react";
import Plus from "../../../../assets/plus.svg";
import Minus from "../../../../assets/minus.svg";
import Image from "next/image";
import styles from "./ProcessStep.module.css";
import { Step } from "../../types";

const ProcessStep: React.FC<{
  step: Step;
}> = ({ step }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.step} py-2`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3>{step.Title}</h3>
        <span>
          {isOpen ? (
            <Image priority src={Minus} alt="Collapse" />
          ) : (
            <Image priority src={Plus} alt="Expand" />
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${contentHeight}px`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <p className="mt-1">{step.Content}</p>
      </div>
    </div>
  );
};

export default ProcessStep;

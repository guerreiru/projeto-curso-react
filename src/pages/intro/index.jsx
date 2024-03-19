import { useEffect, useState } from "react";
import { Onboading } from "../onboading";
import { SplashScreen } from "../splashScreen";
import { Start } from "../start";

export function Intro() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!step) {
      const redirectTimeout = setTimeout(() => {
        setStep(1);
      }, 2000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [step]);

  // Definindo as telas com setStep
  const screens = [
    <SplashScreen key="splashScreen" />,
    <Onboading key="onboading" showStart={setStep} />,
    <Start key="start" setStep={setStep} step={step} />,
  ];

  function RenderScreen({ step }) {
    return screens[step];
  }

  return (
    <div className="container">
      <RenderScreen step={step} />
    </div>
  );
}

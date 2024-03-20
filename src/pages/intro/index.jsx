import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SplashScreen } from "../splashScreen";

export function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("onboarding");
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  // Definindo as telas com setStep

  return <SplashScreen key="splashScreen" />;
}

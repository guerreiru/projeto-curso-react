import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageTasksImg from "../../assets/step1.svg";
import CreateRoutineImg from "../../assets/step2.svg";
import OrganizeTasksImg from "../../assets/step3.svg";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Text } from "../../components/text";
import { StepIndicator } from "./stepIndicator";
import {
  Container,
  Footer,
  ImgWrapper,
  SkipButtonWrapper,
  StepDescription,
  StepWrapper,
} from "./style";

const steps = [
  {
    url: ManageTasksImg,
    title: "Gerencie suas tarefas",
    subTitle:
      "Você pode gerenciar facilmente todas as suas tarefas diárias no Minha Lista gratuitamente",
  },
  {
    url: CreateRoutineImg,
    title: "Criar rotina diária",
    subTitle:
      "No Minha Lista você pode criar sua rotina personalizada para se manter produtivo",
  },
  {
    url: OrganizeTasksImg,
    title: "Organize suas tarefas",
    subTitle:
      "Você pode organizar suas tarefas diárias adicionando-as em categorias separadas",
  },
];

function handleRenderStep(idx) {
  const currentStep = steps[idx];
  if (!currentStep) return null;

  const { url, title, subTitle } = steps[idx];

  return (
    <StepWrapper key={title}>
      <ImgWrapper>
        <img src={url} />
      </ImgWrapper>

      <StepDescription>
        <Heading>{title}</Heading>
        <StepIndicator steps={steps} currentStep={currentStep} />
        <Text>{subTitle}</Text>
      </StepDescription>
    </StepWrapper>
  );
}

export function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = (step) => {
    if (step < steps.length) {
      setStep(step);
    }
  };

  const handlePrevStep = (step) => {
    if (step >= 0) {
      setStep(step);
    }
  };

  const handleGetStart = () => {
    navigate("/start");
  };

  return (
    <Container className="container">
      <SkipButtonWrapper>
        <Button variant="secondary" onClick={handleGetStart}>
          PULAR
        </Button>
      </SkipButtonWrapper>

      {handleRenderStep(step)}

      <Footer>
        <Button variant="secondary" onClick={() => handlePrevStep(step - 1)}>
          VOLTAR
        </Button>

        {step === 2 && <Button onClick={handleGetStart}>COMEÇAR</Button>}
        {step < 2 && (
          <Button onClick={() => handleNextStep(step + 1)}>AVANÇAR</Button>
        )}
      </Footer>
    </Container>
  );
}

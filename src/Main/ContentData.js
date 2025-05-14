import ExConcepts from "./Exponents/ExConcepts";
import Example from "./Exponents/ExExamples";
import Quiz from "./Exponents/ExQuizzez";
import LinearConcepts from "./Linear/LinearConcepts";
import LinearExamples from "./Linear/LinearExamples";
import LinearQuiz from "./Linear/linearQuiz";
import QuadraticConcepts from "./Quadratic/QuadraticConcepts";
import QuadraticExamples from "./Quadratic/QuadraticExamples";
import QuadraticQuiz from "./Quadratic/QuadraticQuiz";
export const ContentData = {
    exponents: {
      concepts: <ExConcepts/>,
      quiz: <Quiz/>,
      example: <Example/>,
    },
    linear: {
      concepts: <LinearConcepts/>,
      quiz: <LinearQuiz/>,
      example:<LinearExamples/>,
    },
    quadratic: {
      concepts: <QuadraticConcepts/>,
      quiz: <QuadraticQuiz/>,
      example: <QuadraticExamples/>,
    },
  };

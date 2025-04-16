import BoxInfo from "./components/BoxInfo";
import BoxTestimonial from "./components/BoxTestimonial";
import { Main } from "./styles/MainStyles";

const App = () => {
  return (
    <Main>
      <BoxInfo
        title="Reviewers"
        content="Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent."
      />
      <BoxTestimonial />
    </Main>
  );
};

export default App;

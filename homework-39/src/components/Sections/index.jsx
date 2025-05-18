import QuestionsListContainer from "./containers/QuestionsListContainer.jsx";
import Header from "./ui/Header.jsx";
import Footer from "./ui/Footer.jsx";

const Sections = () => {
  return (
    <div className="main">
      <Header />
      <QuestionsListContainer />
      <Footer />
    </div>
  );
};
export default Sections;

import StarField from './StarField.jsx';
import Title from './Title.jsx';
import Topic from './Topic.jsx';
import './App.css';

const App = () => {
  return (
    <div className="appWrapper">
      <Title />
      <Topic topicName="Education" topicDetails={["B.S. Electrical Engineering & Computer Sciences, UC Berkeley 2020", "A.A.-T Sociology", "13 Early Childhood Education Units"]} />
      <Topic topicName="Experience" topicDetails={["Tesla Senior Software Engineer for Diagnostics software"]} />
      <Topic topicName="Interests" topicDetails={["Human-AI Interaction", "Sustainability", "Pedagogy"]} />
      <Topic topicName="Travel" topicDetails={[]} />
      <StarField />
    </div>
  );
}

export default App;

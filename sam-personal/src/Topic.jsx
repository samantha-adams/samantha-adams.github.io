import './App.css';

const Topic = ({ topicName="", topicDetails=[] }) => {
  return (
    <div className="topicWrapper">
      <h2>{topicName}</h2>
      <ol className="topicDetails">
        {topicDetails.map(detail => <li>{detail}</li>)}
      </ol>
    </div>
  )
};

export default Topic;
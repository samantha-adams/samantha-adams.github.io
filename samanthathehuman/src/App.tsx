import './App.css';
import StarField from './components/StarField';
import MouseAngleProvider from './context/MouseAngleProvider';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MouseAngleProvider>
        <StarField />
      </MouseAngleProvider>
    </div>
  );
};

export default App;

import './App.css';
import Starfield from './components/StarfieldMain';
import MouseAngleProvider from './context/MouseAngleProvider';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MouseAngleProvider>
        <Starfield />
      </MouseAngleProvider>
    </div>
  );
};

export default App;

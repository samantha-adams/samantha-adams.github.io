import './App.css';
import StarField from './components/StarField';
import MouseDirectionProvider from './context/MouseDirectionProvider';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MouseDirectionProvider>
        <StarField />
      </MouseDirectionProvider>
    </div>
  );
};

export default App;

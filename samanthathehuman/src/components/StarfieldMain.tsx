import './StarfieldMain.css';
import Constellations from './Constellations';
import CategoryStars from './CategoryStars';
import AnimatedHeading from './AnimatedHeading';
import JsonLdScript from '../utils/JsonLdScript';

const PAGE_TITLE = "Hello World";

const Starfield: React.FC = () => {

  return (
    <div className="starfield">
      <Constellations count={100} />
      <div className="text-content">
        <AnimatedHeading text={PAGE_TITLE} />
        <JsonLdScript />
        <CategoryStars />
      </div>
    </div>
  );
};

export default Starfield;

import './StarField.css';
import Constellations from './Constellations';
import CategoryStars from './CategoryStars';
import AnimatedHeading from './AnimatedHeading';

const PAGE_TITLE = "Hello World";

const StarField: React.FC = () => {
  return (
    <div className="star-field">
      <Constellations count={25} />
      <div className="text-content">
        <AnimatedHeading text={PAGE_TITLE} />
        <CategoryStars />
      </div>
    </div>
  );
};

export default StarField;

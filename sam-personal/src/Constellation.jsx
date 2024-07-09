import './App.css';
import Star from './Star.jsx';

const Constellation = ({ name, stars }) => {  
  return (
    <div className='constellation-wrapper'>
      <div className='constellation-stars'>
        {stars.map((star) => <Star {...star} />)}
      </div>
    </div>
  );
}

export default Constellation;

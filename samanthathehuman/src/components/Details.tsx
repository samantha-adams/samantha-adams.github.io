import './Details.css';

interface DetailsProps {
  detailLines: string[][],
}

const Details: React.FC<DetailsProps> = ({ detailLines }) => {
  return detailLines.map((detailGroup) => (
    <div className="detail-group" key={String(detailGroup)}>
      {detailGroup.map((detail) => <p key={detail}>{detail}</p>)}
    </div>
  ));
}

export default Details;
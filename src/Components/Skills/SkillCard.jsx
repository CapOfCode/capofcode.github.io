import "./SkillCard.css";

const SkillCard = (props) => {
  const { image } = props;
  return (
    <div className='card'>
       <img src={image} alt='' />
    </div>
  );
};

export default SkillCard;

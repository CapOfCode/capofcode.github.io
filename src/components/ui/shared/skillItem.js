const SkillItem = ({children}) => {
  return (
    <div>
      <div className="skill bg-darkLighter w-fit px-4 py-2 rounded">
        {children}
      </div>
    </div>
  );
};

export default SkillItem;

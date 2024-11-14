import React from 'react';

interface SkillProps {
    skill: string;
    selected?: boolean,
    onClick?: (value: string) => void
}

const Skill = ({ skill, onClick, selected = false }: SkillProps) => {
  return (
    <div 
        className={`px-4 py-1 text-center font-medium rounded-2xl text-xs md:text-sm border-[0.5px] border-lightpurple whitespace-nowrap truncate cursor-pointer ${selected ? 'text-white' : 'text-black'} ${selected ? 'bg-lightpurple' : 'bg-transparent'}`}
        onClick={() => onClick && onClick(skill)}
    >
      {skill}
    </div>
  );
};

export default Skill;

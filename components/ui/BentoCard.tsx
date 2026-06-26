'use client';

interface Props {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function BentoCard({ index, title, description, isActive, onMouseEnter, onMouseLeave, onClick }: Props) {
  return (
    <div 
      className={`bento-node ${isActive ? 'accordion-active' : ''}`} 
      data-index={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bento-header" onClick={onClick}>{title}</div>
      <div className="bento-content">{description}</div>
    </div>
  );
}

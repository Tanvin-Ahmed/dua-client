import { FC } from "react";

interface SectionCardProps {
  sectionName: string;
}

const SectionCard: FC<SectionCardProps> = ({ sectionName }) => {
  return (
    <div id={sectionName} className="p-5 bg-white rounded-lg">
      <p className="font-semibold">
        <span className="text-green-600">Section: </span>
        {sectionName}
      </p>
    </div>
  );
};

export default SectionCard;

import { appContext } from "@/components/context/AppContext";
import { FC, useContext } from "react";

interface SectionCardProps {
  sectionName: string;
  sectionId: number;
}

const SectionCard: FC<SectionCardProps> = ({ sectionName, sectionId }) => {
  const { sectionRefs } = useContext(appContext);
  return (
    <div
      ref={(el) => {
        sectionRefs.current[sectionId] = el;
      }}
      className="p-5 bg-white rounded-lg"
    >
      <p className="font-semibold text-gray-600">
        <span className="text-green-600">Section: </span>
        {sectionName}
      </p>
    </div>
  );
};

export default SectionCard;

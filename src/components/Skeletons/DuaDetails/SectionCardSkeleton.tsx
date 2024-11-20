import Skeleton from "react-loading-skeleton";

const SectionCardSkeleton = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <p className="font-semibold">
        <Skeleton count={0.5} />
      </p>
    </div>
  );
};

export default SectionCardSkeleton;

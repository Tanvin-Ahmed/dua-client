import Skeleton from "react-loading-skeleton";

const DuaCardSkeleton = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div>
          <Skeleton width={40} height={40} circle />
        </div>
        <div>
          <Skeleton count={0.65} />
        </div>
      </div>
      {/* body */}
      <div className="my-4 mb-6">
        <div className="mb-4">
          <p className="my-2">
            <Skeleton count={2.4} />
          </p>

          <p className="my-2">
            <Skeleton count={2.7} />
          </p>

          <p className="my-2">
            <Skeleton count={1.7} />
          </p>

          <p className="text-gray-500 my-2">
            <Skeleton count={1.8} />
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Skeleton count={0.2} />
          <Skeleton count={0.4} />
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-end items-center gap-x-3">
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
      </div>
    </div>
  );
};

export default DuaCardSkeleton;

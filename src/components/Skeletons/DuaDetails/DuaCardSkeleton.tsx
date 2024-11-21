import Skeleton from "react-loading-skeleton";

const DuaCardSkeleton = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Skeleton width={40} height={40} circle />
        <Skeleton width={100} height={10} />
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
      <div className="flex items-center justify-between gap-x-3">
        <Skeleton height={45} width={45} className="rounded-full" />
        <div className="flex items-center space-x-2">
          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
          <Skeleton width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default DuaCardSkeleton;

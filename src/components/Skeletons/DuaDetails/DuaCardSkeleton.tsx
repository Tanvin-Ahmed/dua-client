import Skeleton from "react-loading-skeleton";

const DuaCardSkeleton = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Skeleton circle className="size-6" />
        <h3 className="text-green-600 text-lg font-semibold">
          <Skeleton count={0.75} />
        </h3>
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
        <Skeleton circle className="size-5" />
        <Skeleton circle className="size-5" />
        <Skeleton circle className="size-5" />
        <Skeleton circle className="size-5" />
        <Skeleton circle className="size-5" />
      </div>
    </div>
  );
};

export default DuaCardSkeleton;

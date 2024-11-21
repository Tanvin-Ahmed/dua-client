import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useCatId = () => {
  const searchParams = useSearchParams();
  const [cat, setCatState] = useState<string | null>(null);

  // Synchronize the state with the query parameter
  useEffect(() => {
    setCatState(searchParams.get("cat"));
  }, [searchParams]);

  return cat ? Number(cat) : null;
};

export default useCatId;

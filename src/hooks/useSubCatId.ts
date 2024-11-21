import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSubCatId = () => {
  const searchParams = useSearchParams();
  const [subCat, setSubCatState] = useState<string | null>(null);

  // Synchronize the state with the query parameter
  useEffect(() => {
    setSubCatState(searchParams.get("subcat"));
  }, [searchParams]);

  return subCat ? Number(subCat) : null;
};

export default useSubCatId;

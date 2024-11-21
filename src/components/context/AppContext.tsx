"use client";

import useCatId from "@/hooks/useCatId";
import useSubCatId from "@/hooks/useSubCatId";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

const queryClient = new QueryClient();

interface AppContextValues {
  isSettingsOpen: boolean;
  setIsSettingsOpen: Dispatch<SetStateAction<boolean>>;
  isCategoryOpen: boolean;
  setCategoryOpen: Dispatch<SetStateAction<boolean>>;
  sectionRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

// Set default values for from and to
const defaultValues: AppContextValues = {
  isSettingsOpen: false,
  setIsSettingsOpen: () => {},
  isCategoryOpen: false,
  setCategoryOpen: () => {},
  sectionRefs: { current: [] },
};

export const appContext = createContext<AppContextValues>(defaultValues);

const AppContext = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const catId = useCatId();
  const subCatId = useSubCatId();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    router.push(`/?cat=${catId ?? 1}&subcat=${subCatId ?? 1}`);
  }, [router, catId, subCatId, isMounted]);

  return (
    <appContext.Provider
      value={{
        isSettingsOpen,
        setIsSettingsOpen,
        isCategoryOpen,
        setCategoryOpen,
        sectionRefs,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </appContext.Provider>
  );
};

export default AppContext;

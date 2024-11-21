"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
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
import { Toaster } from "react-hot-toast";

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
  const params = useSearchParams();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [firstRender, setFirstRender] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !firstRender) return;

    const cat = params.get("cat");
    const subCat = params.get("subcat");

    router.push(`/?cat=${cat ?? 1}&subcat=${subCat ?? 1}`);
    setFirstRender(false);
  }, [router, params, isMounted, firstRender]);

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
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </QueryClientProvider>
    </appContext.Provider>
  );
};

export default AppContext;

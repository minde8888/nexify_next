'use client'
import { Provider } from "react-redux";
import { store } from "@/lib/store";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({children}: ProvidersProps) {
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;
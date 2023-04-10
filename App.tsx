import { ContextProvider } from "./src/utils/hooks";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
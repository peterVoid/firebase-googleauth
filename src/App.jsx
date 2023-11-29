import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
const App = ({ Component, pageProps }) => {
  const [user] = useAuthState(auth);
  return (
    <PrimeReactProvider>
      <div className="max-w-[768px] mx-auto relative mt-[20px] ">
        <div className="h-[96vh] shadow-lg flex flex-col shadow-black/40 bg-white rounded-xl ">
          <Navbar />
          <Chat {...pageProps} />
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default App;

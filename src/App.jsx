import { SearchContextProvider } from "./context/Context";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  return (
    <SearchContextProvider>
      <Form />
      <Display />
    </SearchContextProvider>
  );
};

export default App;

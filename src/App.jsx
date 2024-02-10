import { SearchContextProvider } from "./context/Context";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  return (
    <SearchContextProvider>
      <div className="m-5">
        <Form />
        <Display />
      </div>
    </SearchContextProvider>
  );
};

export default App;

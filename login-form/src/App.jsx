import "./App.scss";
import { FormProvider } from "./components/FormContext";
import Layout from "./components/Layout";

function App() {
  return (
    <FormProvider>
      <Layout />
    </FormProvider>
  );
}

export default App;

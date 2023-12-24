import Books from "./components/Books";
import { books } from "./constants/mockData";
import Layout from "./layout/layout";

function App() {
  return (
    <>
      <Layout>
        <h1>Book App Starting files</h1>
        <Books/>
      </Layout>
    </>
  );
}

export default App;

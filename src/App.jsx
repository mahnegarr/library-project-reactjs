import Books from "./components/Books";
import { books } from "./constants/mockData";
import Layout from "./layout/layout";

function App() {
  return (
    <>
      <Layout>
        <Books />
      </Layout>
    </>
  );
}

export default App;

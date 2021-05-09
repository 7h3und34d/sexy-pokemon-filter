import Page from "./components/Page";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Body from "./components/Body";
import { PageProvider } from "./pageContext";
import Results from "./components/Results";

function App() {
  return (
    <PageProvider>
      <Page>
        <Header>
          <SearchInput />
        </Header>
        <Body>
          <Results />
        </Body>
      </Page>
    </PageProvider>
  );
}

export default App;

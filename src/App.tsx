import Page from "./components/Page";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { PageProvider } from "./pageContext";
import Results from "./components/Results";
import NextButton from "./components/NextButton";
import { Box } from "@fower/react";

function App() {
  return (
    <PageProvider>
      <Page>
        <Box fixed zIndex="1">
          <Header>
            <SearchInput />
          </Header>
        </Box>
        <Box mt-100px>
          <Results />
        </Box>
        <NextButton />
      </Page>
    </PageProvider>
  );
}

export default App;

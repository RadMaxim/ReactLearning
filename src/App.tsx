import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import { SearchProvider } from "./Context/SearchContext";
import { styleBox, styleList } from "./style";

function App() {
  return (
    <SearchProvider>
      <Box style={styleBox}>
        <Box style={{ padding: 10 }}>
          <SearchInput />
          <UniversityList  />
        </Box>
      </Box>
    </SearchProvider>
  );
}

export default App;

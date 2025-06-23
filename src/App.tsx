import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import { SearchProvider } from "./Context/SearchContext";
import { styleBox, styleList } from "./style";

function App() {
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
  return (
    <SearchProvider>
      <Box style={styleBox}>
        <Box style={{ padding: 10 }}>
          <SearchInput />
          <UniversityList style={styleList} />
        </Box>
      </Box>
    </SearchProvider>
  );
}

export default App;

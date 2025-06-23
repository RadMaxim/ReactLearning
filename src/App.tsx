import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import { SearchProvider } from "./Context/SearchContext";
import { styleBox, styleList } from "./style";

function App() {
  console.log("10")
  console.log("11")
  console.log("12")
  console.log("13")
  console.log("15")
  console.log("16")
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

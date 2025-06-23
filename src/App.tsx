import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import {SearchProvider} from "./Context/SearchContext";

function App() {
  const styleBox = {
    backgroundColor: "var(--blue-back)",
    color: "var(--blue-text)",
    width: "100%",

  }
  const styleList = {
    overflow: "auto",
    height: "73vh",
    width: "100%",

  }
  return (
      <SearchProvider>
    <Box style={styleBox}>
      <Box style={{ padding:10}}>
          <SearchInput/>
        <UniversityList style = {styleList}/>
      </Box>
    </Box>
      </SearchProvider>
  );
}

export default App;

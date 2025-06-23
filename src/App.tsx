import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import {SearchProvider} from "./Context/SearchContext";

function App() {
  console.log("10")
  console.log("11")
  console.log("12")
  console.log("13")
  return (
      <SearchProvider>
    <Box style={{
      backgroundColor: "white",
      padding: "1rem",
    }}>
      <Box>
          <SearchInput/>
        <UniversityList/>
      </Box>
    </Box>
      </SearchProvider>
  );
}

export default App;

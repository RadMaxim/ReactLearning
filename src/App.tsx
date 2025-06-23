import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import UniversityList from "./Page/UniversityList/UniversityList";
import SearchInput from "./component/SearchInput/SearchInput";
import {SearchProvider} from "./Context/SearchContext";

function App() {
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

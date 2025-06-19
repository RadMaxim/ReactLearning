import React, {useCallback} from 'react';
import { TextField } from '@mui/material';
import {useSearch} from "../../Context/SearchContext";



const SearchInput = () => {
    const {search, setSearch} =  useSearch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, [setSearch]);

    return (
        <TextField
            label="Поиск университетов"
            variant="outlined"
            fullWidth
            value={search}
            onChange={handleChange}
            sx={{ mb: 2 }}
        />
    );
};

export default React.memo(SearchInput);

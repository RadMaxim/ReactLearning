import React from 'react';
import { TextField } from '@mui/material';
import {useSearch} from "../../Context/SearchContext";

const CountryInput = () => {
    const {country, setCountry} = useSearch()
    return (
        <TextField
            label="Страна"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            sx={{ mb: 2 }}
        />
    );
};

export default React.memo(CountryInput);

import React, {createContext, useContext, useState, ReactNode, useMemo, useDeferredValue} from 'react';

type SearchContextType = {
    search: string;
    deferredSearch: string;
    setSearch: (value: string) => void;
    country: string;
    setCountry: (value: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('Kazakhstan'); // значение по умолчанию
    const deferredSearch = useDeferredValue(search);
    const value = useMemo(
        () => ({ search, deferredSearch, setSearch, country, setCountry }),
        [search, deferredSearch, country]
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

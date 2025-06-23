import React, { useEffect, useState, useTransition, useMemo } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { fetchUniversities, University } from "../../service/universityService";
import { useSearch } from "../../Context/SearchContext";
import CountryInput from "../../component/SearchInput/CountryInput";
import { debounce } from "lodash";
import { useDebouncedValue } from "../../hook/useDebouncedValue";

const UniversityList = ({ style }: { style: React.CSSProperties }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { search, country } = useSearch();
  const debouncedCountry = useDebouncedValue(country, 500);
  useEffect(() => {
    setLoading(true);
    fetchUniversities(debouncedCountry)
      .then((res) => {
        startTransition(() => {
          const bigArray = Array.from({ length: 100 }).flatMap(() => res);
          setUniversities(bigArray);
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [debouncedCountry]);

  // debounce-фильтрация
  const debouncedFilter = useMemo(
    () =>
      debounce((searchTerm: string, data: University[]) => {
        startTransition(() => {
          const filtered = data.filter((u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setFilteredUniversities(filtered);
        });
      }, 500),
    [],
  );

  // Фильтрация при изменении search или universities
  useEffect(() => {
    debouncedFilter(search, universities);
    return () => debouncedFilter.cancel();
  }, [search, universities, debouncedFilter]);
  // if (loading) return <CircularProgress />;
  // if (error) return <Typography color="error">Ошибка: {error}</Typography>;

  return (
    <>
      <CountryInput />
      <Box style={{ width: "100%", padding: 0 }}>
        <Typography variant="h5" gutterBottom>
          Университеты {country}
        </Typography>
        {/*{isPending && <Typography variant="body2">Обновление списка...</Typography>}*/}
        <Typography variant="body2" sx={{ mb: 2 }}>
          Найдено: {filteredUniversities.length}
        </Typography>
        <List style={style}>
          {filteredUniversities.slice(0, 100).map((university, index) => (
            <ListItem key={index} divider style={{cursor: "pointer",backgroundColor: "var(--blue-back-item)", marginTop:10}}>
              <ListItemText
                primary={university.name}
                secondary={university.web_pages[0]}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default React.memo(UniversityList);

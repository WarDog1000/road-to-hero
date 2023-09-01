import React, { useState, useEffect } from 'react';
import SongForm from './components/SongForm';
import SongDetails from './components/SongDetails';
import Loader from './components/Loader';
import { helpHttp } from './helpers/helpHttp';

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [liric, setLiric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(search === null) return;

    const fetchData = async() => {
      const {artist, song} = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      setLoading(true);
      // Se ejecutan las peticiones asynchronously
      const [artistRes, songRes] = await Promise.all([helpHttp().get(artistUrl), helpHttp().get(songUrl)]);
      console.log(artistRes, songRes)
      setBio(artistRes);
      setLiric(songRes);
      setLoading(false);
    }

    fetchData();

  }, [search]); // la funcion par anejar las busquedas actualiza el estado de search
  
  const handleSearch = (data) => { // se ejecuta en el componente formulario
    // console.log(data);
    setSearch(data);
  }
  return ( 
    <>
    <h2>Song Search</h2>
    {loading && <Loader />}
    <SongForm handleSearch={handleSearch} />
    {search && !loading && (
    <SongDetails search={search} liric={liric} bio={bio} />
    )}
    </>
   );
}
 
export default SongSearch;
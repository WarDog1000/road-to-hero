import React from 'react'
import SongArtist from '../api/SongArtist';
import SongLirics from '../api/SongLirics';
const SongDetails = ({search, liric, bio}) => {
  return ( 
    <>
    <h2>Detalles</h2>
    <SongArtist />
    <SongLirics />
    </>

   );
}
 
export default SongDetails;
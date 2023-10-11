import React from 'react'
import SongArtist from '../api/SongArtist';
import SongLyrics from '../api/SongLyrics';
import Message from './Message';
const SongDetails = ({search, lyric, bio}) => {
  if(lyric || bio) return null;
  return ( 
    <>
    {lyric.error || lyric.err || lyric.name === "AbortError" ? (<Message msg={`Error no existe la cancion ${search.song}`} bgColor="#dc3545" />) : (<SongLyrics />)}
    {bio.artists ? (<SongArtist />) : (<Message msg={`Error no existe el artista ${search.artist}`} bgColor="#dc3545" />) }
    </>

   );
}
 
export default SongDetails;
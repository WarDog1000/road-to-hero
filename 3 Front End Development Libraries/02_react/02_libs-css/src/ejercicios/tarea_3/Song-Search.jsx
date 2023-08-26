import React, { useState, useEffect } from 'react';

const SongSearch = () => {
  const [Search, setSearch] = useState(null);
  const [liric, setLiric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  return ( 
    <h2>Song Search</h2>
   );
}
 
export default SongSearch;
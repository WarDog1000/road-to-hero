import React from 'react'
import { useCity } from '../hooks/useCity'

const Selects = ({title, url, handleChange}) => {
  const {data, error,loading} = useCity(url);
  if(!data) return null;
  return (
    <>
      <select name="" id="">
        <option value="">---</option>
      </select>
    </>
  )
}

export default Selects

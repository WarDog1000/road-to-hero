import React from 'react'
import { useCity } from '../hooks/useCity'
import Message from './Message';
import Loader from './Loader';

const Selects = ({title, url, handleChange}) => {
  let free = "?apikey=m5MAmhyXuscWmBrwzh5QCaGprKiVq93kOJDhN8uz"
  const {data, error, loading} = useCity(`${url}${free}`);
  if(!data) return null;
  if(error) {
    return <Message msg={`error ${error.status}: ${error.statusText}`} bgColor ="#dc3545" />
  }
  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  // let options= data.response[title];
  const arr = Object.entries(data);
  return (
    <>
    <label htmlFor={id}>{label}</label>
    {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Select a {title}</option>
        {data && arr.map((el) => (
          <option value={el[1].name}>{el[1].name}</option>
        ))}
      </select>
    </>
  )
}

export default Selects

import React, {useState} from 'react'
const initialForm = {
  artist: "",
  song: ""
}
const SongForm = ({handleSearch}) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.artist || !form.song) {
      alert("Please enter a artist name and a song name");
      return;
    }
    handleSearch(form);
    setForm(initialForm); // reinicia el estado del formulario
  }
  return ( 
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="artist" placeholder="Nombre del Interprete" onChange={handleChange} value={form.artist} />
      <input type="text" name="song" placeholder="Nombre de la Cancion" onChange={handleChange} value={form.song} />
      <input type="submit" value="Enviar" />
    </form>
    </>
   );
}
 
export default SongForm;
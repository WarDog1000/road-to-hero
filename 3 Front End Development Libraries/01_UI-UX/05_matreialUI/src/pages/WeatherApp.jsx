import { LoadingButton } from "@mui/lab"
import { Container, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

const WeatherApp = () => {
  const apikey = import.meta.env.VITE_WEATHER_API_KEY
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error: false,
    message: "",
  })
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  })
  const apiurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Submit", city)
    setLoading(true)
    setError({
      error: false,
      message: "",
    })
    try {
      // si la consulta esta vacia o solo tiene espacios
      if(!city.trim()) throw {message: "Please digit an city"}
      const res = await fetch(apiurl)
      const data = await res.json()
      console.log(data)
      // cuando se consulta una ciudad inexistente
      if(data.error) throw {message: data.error.message}
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      })
    } catch (err) {
      console.log(err)
      setError({
        error: true,
        message: err.message,
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Container
      maxWidth="xs"
      sx={{mt: 2}}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>Weather App</Typography>
      <Box
        sx={{display: "grid", gap: 2}}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message} />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Loading..."
          >Get</LoadingButton>
      </Box>

      {weather.city && (
        <Box sx={{mt: 2, display: "grid", gap: 2, textAlign: "center"}}>
          <Typography variant="h4" component="h2">{weather.city}, {weather.country}</Typography>
          <Box component="img" alt={weather.conditionText} src={weather.icon} sx={{margin: "0 auto"}}></Box>
          <Typography variant="h5" component="h3">{weather.temp} °C</Typography>
          <Typography variant="h6" component="h4">{weather.conditionText}</Typography>
        </Box>
      )}
      
      <Typography textAlign="center" sx={{mt: 2, fontSize: "10px"}}>Powered by:{" "}<a href="https://www.weatherapi.com/" title="Weather API"> WatherAPI.com</a></Typography>
    </Container>
  )
}

export default WeatherApp

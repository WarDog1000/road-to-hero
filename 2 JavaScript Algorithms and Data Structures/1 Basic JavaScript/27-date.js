// Curso JavaScript: 27. Objeto Date
console.log(Date());
let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());// dia de la fecha
console.log(fecha.getDay());// dia de las semana -> 0,1,2...
console.log(fecha.getMonth());// mes del anho -> 0,1,2...
console.log(fecha.getFullYear());// anho actual
console.log(fecha.getHours());// hora
console.log(fecha.getMinutes());// minuto
console.log(fecha.getSeconds());// segundo
console.log(fecha.getMilliseconds());// milisegundos

console.log(fecha.toString());
console.log(fecha.toDateString());// obtener la fecha escrita
console.log(fecha.toLocaleString());// obtener fecha y hora en numeros 
console.log(fecha.toLocaleDateString());// obtener solo la fecha en numeros
console.log(fecha.toLocaleTimeString());// obtener solo la hora en numeros

// obtener la zona horaria
console.log(fecha.getTimezoneOffset());

// obtener la instancia del meridiano de green witch "hora 0"
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

// obtener el instante que esta ocurriendo ahora
console.log(Date.now());// cuantos segundos han pasado desde 01/01/1970 "time-stamp"
let cumple = new Date(1995,2,25);
console.log(cumple);


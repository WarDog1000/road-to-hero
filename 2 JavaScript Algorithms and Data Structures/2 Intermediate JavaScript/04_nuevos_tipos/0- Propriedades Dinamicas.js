/* **********     Curso JavaScript: 56. Propiedades Dinámicas - #jonmircha     ********** */
const objUsuario = {
  [`id_${Math.round(Math.random() * 100)}`]: "valor aleatorio",
};
console.log(objUsuario);
const usuario = ["jon", "irma", "miguel", "carla", "kenay"];
console.log(usuario);

usuario.forEach((user, index) => (objUsuario[`id_${index}`] = user));
console.log(objUsuario);

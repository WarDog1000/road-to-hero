/* **********     Curso JavaScript: 47. Promesas - #jonmircha     ********** */

function cuadradoPromise(value) {
  // if(typeof value !== 'number') {
  //   return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
  // }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value !== "number") {
        return reject(
          `Error, el valor: "${value}" ingresado no es un numero...`
        );
      }
      resolve({
        value, // value: value,
        result: value * value,
      });
    }, 0 | (Math.random() * 100));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log(`Inicia Promise:\n ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Finaliza Promise:\n ${obj.value}, ${obj.result}`);
  })
  .catch((err) => {
    console.log(err);
  });

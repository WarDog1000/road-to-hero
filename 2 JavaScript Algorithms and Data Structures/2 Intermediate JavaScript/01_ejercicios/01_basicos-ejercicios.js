// USAR QUOKKA
      /* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */
      // (function miFuncion(...arg){
      //   return arg.length;
      // })('Hola Mundo');
			cuentaLetras = (...arg) => arg.join('').split('').length; // return inplicito en las arrow function
      console.log(cuentaLetras('Hola Mundo'));

      /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
      cortaPalabras = (arg, num) => arg.split(' ').join('').split('').slice(0,num).join('');
      console.log(cortaPalabras('Hola Mundo', 4));

      /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
     separaPalabras = (arg, sep) => arg.split(sep);
     console.log(separaPalabras('Hola que tal', ' '));
     
      /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
      repetirPalabras = (arg, loop) => {
        arg +=' ';
        if(Math.sign(loop) === -1) {
          return `error! no se puede hacer un loop negativo ${loop}`
        } else if (loop === 0) {
          return `error! ${loop} no puede hacer loop`
        }
        return arg.repeat(loop);
      };
      console.log(repetirPalabras('Hola Mundo', 2));
      /* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
      invertirPAralabra = arg => arg.split('').reverse().join('');
      console.log(invertirPAralabra('Hola Mundo'));

      /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
      contarPalabras = (arg, val) => arg.split(',').join('').split(' ').filter( e => e === val).length
      console.log(contarPalabras('Hola mundo, adios mundo', 'mundo'));

      /* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
      palindromoPalabras = arg => arg.toUpperCase() === arg.split('').reverse().join('').toUpperCase() ? true : false;
      console.log(palindromoPalabras('salas'));

      /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
      eliminarPatron = (arg, patron) => { 
        patron = new RegExp(patron, 'g');
        return arg.replace(patron, '');
      }
      console.log(eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'));

      /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
      numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      console.log(numeroAleatorio(501, 550)); 

      /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
      numeroCapicua = num => num.toString().split('').reverse().join('') === num.toString() ? true : false;
      console.log(numeroCapicua(2002));

      /* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */
      factorial = num => (Math.sign(num) === -1)? `Invalido` : (num === 0 )? `0 no es valido `: num === 1? 1 : num * factorial(num - 1); // ej: 4 x 5 x 3 x 2 

      // ej: 1 x 1 x 2 x 3 x 4 x 5
      // function factorial(numero) {
      //   var resultado = 1;
      //   for (var i = 1; i <= numero; i++) {
      //     resultado *= i;
      //   }
      //   return resultado;
      // }
      console.log(factorial(5));

      /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
      numeroPrimo = num => {
        let divisible = false;
        if(num <= 1) {
          return `Los números menores o iguales a 1 no son primos`
        } else {
          for(let i = 2; i < num; i++){ // Comprobar si el número es divisible por algún otro número
            if(num % i === 0) { // Si es divisible, no es primo
              divisible = true;
              break;
            }
          }
        }
        return divisible ? `El numero ${num}  NO es primo` : `El numero ${num} es primo`;
      }
      console.log(numeroPrimo());

      /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
      numeroPar = num => num % 2 === 0 ? true : false;
      console.log(numeroPar(2));

      /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
      convertidorTemperatura = (num, mt) => mt.toUpperCase() === 'C' ? num = num * 1.8 + 32 + '°F': mt.toUpperCase() === 'F' ? num = (num -32)/ 1.8 + '°C': `Unidad de medida No valida`;
      console.log(convertidorTemperatura(32, 'f'));

      /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
      convertidorBinario = (num, base) => base === 2 ? parseInt(num, 2) : base === 10 ? num.toString(2) :`Igresa una base valida`;
      console.log(convertidorBinario(4, 10));

      /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
      descuento = (num, descuento) => `$${num * (100 - descuento) / 100}`;
      console.log(descuento(1000, 20));

      /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
      desdeHasta = (...fecha) => {
        let now = new Date();
        let date = new Date(Date.parse(fecha.reverse().join('-')));
        let years = Math.floor((now - date) / (1000 * 60 * 60 * 24 * 365.25)); 
        if(fecha.length === 3 && fecha[0] > 40 && fecha[1] <= 12 && fecha[2] <= 31) {
          if (date > now) {
          return `Faltan ${years *= -1} anhos para ${fecha[0]}`;
        } else {
          return `Pasaron ${years} anhos`;
        }
        }
        return `Ingresa una fecha valida`;
        
      };
      console.log(desdeHasta(31,1,2022));

      /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
      cuentaVocales = (arg) => arg.toUpperCase().split('').filter( e => e === 'A' || e === 'O' || e === 'I' || e === 'E' || e === 'U').length
      console.log(cuentaVocales('Hola Mundo'));

      /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
      nombreValido = (arg) => {
        let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        return regex.test(arg);
      }
      console.log(nombreValido('Jhonatan Souza'));

      /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
      emailValido = (arg) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(arg);
      }
      console.log(emailValido('jonmircha@gmail.com'));
      /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
      alcuadrado = (...arg) => arg.reduce((a, b) => a.concat(b)).map(e => e * e);
      console.log(alcuadrado([1,4,5]));

      /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
      altosYBajos = (...arg) => {
        let arr = (arg.reduce((a, b) => a.concat(b)))
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return [min, max]
      }
      console.log(altosYBajos([2,4,5], 2, [23,55]))

      /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */
      parOImpar = (...arg) => {
        let arr = (arg.reduce((a, b) => a.concat(b)));
        let par = arr.filter( e => e % 2 === 0);
        let impar = arr.filter( e => e % 2 === 1);
        return {par, impar}
      }
      console.log(parOImpar([1,2,3,4,5],7,8));

      /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
      ordenarAscDesc = (...arg) => {
        let arr = (arg.reduce((a, b) => a.concat(b)));
        let asc = arr.sort((a, b) => a - b);
        let desc = arr.sort((a, b) => b - a);
        return {asc,desc};
      }
      console.log(ordenarAscDesc([7, 5,7,8,6]));

      /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
      eliminarDuplicados = (arg) => [...new Set(arg)];
      // sacarduplicados = (arg) => {
      //   let newArr = new Set(arg); // quita duplicados
      //   return newArr;
      // }
      // console.log(sacarduplicados([10, 10, 10, 11, 11, 12, 12, 13, 10, 11, 'x']))
      console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

      /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
      sacarPromedio = (arg) => arg.reduce((a, b) => a += b) / arg.length;
      // sacarPromedio = (arg) => {
      //   total = 0;
      //   for(let i =0; i<arg.length; i++) {
      //     total += arg[i]
      //   }
      //   return total / arg.length;
      // }
      console.log(sacarPromedio([10,10,10]))
      
      /* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
          */
          class Pelicula {
            constructor({
              titulo,
              id,
              calificacion,
              director,
              estreno,
              paises,
              generos,
            }) {
              this.titulo = titulo;
              this.id = id;
              this.calificacion = calificacion;
              this.director = director;
              this.estreno = estreno;
              this.paises = paises;
              this.generos = generos;
              this.validarIMDB(id);
              this.validarTitulo(titulo);
              this.validarDirector(director);
              this.validarEstreno(estreno);
              this.validarPaises(paises);
              this.validarGeneros(generos);
              this.validarCalificacion(calificacion);
            }
            validarCadenas(propriedad, valor) {
              if (!valor) {
                return console.log(`${propriedad} "${valor}" esta vacio.`);
              }
              if (typeof valor !== "string") {
                return console.log(
                  `${propriedad} "${valor}" ingresado, NO es una cadena de texto.`
                );
              }
              return true;
            }
            validarLonguitudCadena(propriedad, valor, longt) {
              if (valor.length > longt) {
                return console.log(
                  `${propriedad} ingresado, supera los ${longt} caracteres.`
                );
              } else {
                return true;
              }
            }
            validarArreglos(propriedad, valor) {
              if (!valor) {
                return console.log(`${propriedad} esta vacio.`);
              }
              if (!(valor instanceof Array)) {
                return console.log(
                  `${propriedad} debe ser ingresado como un arreglo de valores.`
                );
              }
              if (valor.length === 0) {
                return console.log(`${propriedad} no tiene valores.`);
              }
          
              for (let e of valor) {
                if (typeof e !== "string") {
                  return console.log(`El valor "${e}" debe ser una cadena de texto.`);
                }
              }
              return true;
            }
            validarNumeros(propriedad, valor) {
              if (!valor) {
                return console.log(`${propriedad} esta vacio.`);
              }
              if (typeof valor !== "number") {
                return console.log(`${propriedad} "${valor}" No es un numero.`);
              } else {
                return true;
              }
            }
          
            validarIMDB(id) {
              if (this.validarCadenas("IMDB", id)) {
                if (!/^([a-z]){2}([1-9]){7}/.test(id)) {
                  return console.log(
                    `IMDB id "${id}" no es valido, debe tener 9 caracteres, los dos primeros, letras y los siete restatntes, numeros.`
                  );
                }
              }
            }
            validarTitulo(titulo) {
              if (this.validarCadenas("Titulo", titulo)) {
                this.validarLonguitudCadena("Titulo", titulo, 100);
              } else {
                return true;
              }
            }
            validarDirector(director) {
              if (this.validarCadenas("Director", director)) {
                this.validarLonguitudCadena("Director", director, 50);
              }
            }
            validarEstreno(estreno) {
              if (this.validarNumeros("Estreno", estreno)) {
                if (!/^([0-9]){4}$/.test(estreno)) {
                  return console.log(`${estreno} No es una fecha valida`);
                }
              }
            }
            validarPaises(paises) {
              this.validarArreglos("Paises", paises);
            }
            validarGeneros(generos) {
              if(this.validarArreglos("Generos", generos)) {
                for(let e of generos) {
                  if(!Pelicula.listaGeneros.includes(e)) {
                    return console.log(`El género ${e} no es valido`);
                  }
                }
              }
            }
          
            static get listaGeneros() {
              return [
                "Action",
                "Adult",
                "Adventure",
                "Animation",
                "Biography",
                "Comedy",
                "Crime",
                "Documentary",
                'Drama',
                'Family',
                'Fantasy',
                "Film Noir",
                'Game - Show',
                'History',
                'Horror',
                'Musical',
                'Music',
                'Mystery',
                'News',
                'Reality - TV',
                'Romance',
                'Sci - Fi',
                'Short',
                'Sport',
                'Talk - Show',
                'Thriller',
                'War',
                'Western'
              ];
            }
          
            static generosAceptados() {
              return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
            }
          
            validarCalificacion(calificacion) {
              if(this.validarNumeros('Calificacion', calificacion)) {
                if(calificacion < 0 || calificacion > 10) {
                  return console.log(`${calificacion} No es una calificacion valida, debe ser mayor a 0 y menor a 10`)
                } else {
                  this.calificacion = calificacion.toFixed(1);
                }
              }
            }
          
            getPelicula() {
              return console.log(this);
            }
          }
          
          const peli = new Pelicula({
            id: "tt1234567",
            calificacion: 4.27778,
            titulo: "Pokemon Mewtwo Contra",
            director: "Juan Perez",
            estreno: 1999,
            paises: ["Argentina", "Brasil", "Colombia"],
            generos: ["Action", "Adult", "Adventure"],
          });
          Pelicula.generosAceptados();
          peli.getPelicula();
          
          const misPelis = [
            {
              titulo: "Casi 300",
              id: "tt1234567",
              calificacion: 6.27778,
              director: "Juan Perez",
              estreno: 2000,
              paises: ["Argentina", "Brasil", "Paraguay"],
              generos: ["Action", "Comedy", "War"]
            },
            {
              titulo: "Que Paso Ayer",
              id: "hh1472583",
              calificacion: 7.56234,
              director: "Hangover",
              estreno: 2013,
              paises: ["Argentina", "Brasil", "Paraguay"],
              generos: ["Action", "Adventure", "Comedy"]
            },
            {
              id: "dd789456123",
              titulo: "Marte Ataca",
              calificacion: 9.99,
              director: 'Jona Hex',
              estreno: 1999,
              paises: ["EUK", "Japon", "China"],
              generos: ["Thriller", "Adventure", "Fantasy"]
          
            }
          ]
          misPelis.forEach(e => new Pelicula(e).getPelicula());
          
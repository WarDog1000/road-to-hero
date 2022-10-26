// Curso JavaScript: 46. Callbacks
function cuadradoCallBack(value, cb) {
    setTimeout(() => {
        cb(value, value * value);
    }, 0 | Math.random() * 1000);
}


// callback hell
cuadradoCallBack(0, (value, result) => {
    console.log('inicia callback hell');
    console.log(`callback ${value}, ${result}`);

    cuadradoCallBack(1, (value, result) => {
        console.log(`callback ${value}, ${result}`);

        cuadradoCallBack(2, (value, result) => {
            console.log(`callback ${value}, ${result}`);

            cuadradoCallBack(3, (value, result) => {
                console.log(`callback ${value}, ${result}`);

                cuadradoCallBack(4, (value, result) => {
                    console.log(`callback ${value}, ${result}`);

                    cuadradoCallBack(5, (value, result) => {
                        console.log(`callback ${value}, ${result}`);
                    } );
                } );
            } );
        } );
    } );
} );
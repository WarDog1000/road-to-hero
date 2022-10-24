// Curso JavaScript: 45. Asincronía y el Event Loop

// Prosecamiento single thread y multi threat
// Operaciones de cpu y operaciones de input / output
// Operaciones concurrntes y paraletas
// Operaciones bloqueantes y No bloqueantes
// Operaciones sincronas y asincronas

// Codigo Sincrono Bloqueante
(() => {
    console.log('codigo sincrono')
    console.log('inicio')
    function dos() {
        console.log('dos')
    }
    function uno() {
        console.log('uno')
        dos()
        console.log('tres')
    }
    uno()
    console.log('fin')
})();

// Codigo Asincrono Bloqueatnte
(() => {

})();
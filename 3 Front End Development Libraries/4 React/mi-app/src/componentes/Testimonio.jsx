import React from 'react';

function Testimonio() {
    return (
        <div className="contenedor-testimonio">
            <img src={require("../imagenes/testimonio-emma.png")} alt="Soto de Emma" className="imagen-testimonio" />
            <div className="contenedor-texto-testimonio">
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className="cargo-testimonio">Ingeniera de Sftware en Spotify</p>
                <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas accusantium in atque. Molestiae voluptate inventore ad tenetur vitae repudiandae odio, a nostrum doloribus magnam consequuntur ipsam harum fuga officiis.</p>
            </div>
        </div>
    )
}

export default Testimonio;
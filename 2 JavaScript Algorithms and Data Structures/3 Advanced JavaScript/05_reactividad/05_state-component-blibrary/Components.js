export const Components = (
  function() {
    // Creamos el constructor del componente
    const Constructor = function(options) {
      this.el = options.el,
      this.data = options.data,
      this.template = options.template
    }

    // Agregamos los metodos al prototipo del constructor del componente

    // Render UI
    Constructor.prototype.render = function() {
      const element = document.querySelector(this.el)
      if(!element) return
      element.innerHTML = this.template(this.data)

      console.log(this.data)
    }

    // Actualizar el state de forma reactiva
    Constructor.prototype.setState = function(obj) {
      for(let key in obj) {
        if(this.data.hasOwnProperty(key)) {
          this.data[key] = obj[key]
      }
    }
  
      this.render()
    }

    // Obtener una copia inmutable del estado
    Constructor.prototype.getState = function() {
      const newState = JSON.parse(JSON.stringify(this.data))
      return newState
    }

    return Constructor;
  }
)()
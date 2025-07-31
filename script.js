// script.js
    const formulario = document.getElementById("formularioReserva");
    const contenedorAlertas = document.getElementById("contenedorAlertas");

    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const cantidad = parseInt(document.getElementById("cantidad").value);
      const tipoEntrada = document.getElementById("tipoEntrada").value;
      const codigoDescuento = document.getElementById("codigoDescuento").value.trim();

      if (nombre === "") {
        mostrarAlerta("Por favor ingresa tu nombre completo.", "error");
        return;
      }

      if (isNaN(cantidad) || cantidad < 1) {
        mostrarAlerta("La cantidad de entradas debe ser mayor a cero.", "error");
        return;
      }

      if (tipoEntrada === "") {
        mostrarAlerta("Selecciona un tipo de entrada.", "error");
        return;
      }

      const precios = {
        general: 500,
        vip: 1000,
        platino: 1500
      };

      let precioBase = precios[tipoEntrada];
      let total = precioBase * cantidad;

      if (codigoDescuento.toUpperCase() === "ROCK10") {
        total *= 0.9;
      }

      mostrarAlerta(
        `✅ Reserva confirmada\nHola ${nombre}, pagarás $${total.toFixed(2)}. Precio por entrada: $${(total / cantidad).toFixed(2)}.`,
        "exito"
      );
    });

    function mostrarAlerta(mensaje, tipo) {
      contenedorAlertas.classList.remove("alerta-error", "alerta-exito");
      contenedorAlertas.classList.add("contenedor-alertas");

      if (tipo === "error") {
        contenedorAlertas.classList.add("alerta-error");
      } else {
        contenedorAlertas.classList.add("alerta-exito");
      }

      contenedorAlertas.innerText = mensaje;
      contenedorAlertas.style.display = "block";
    }
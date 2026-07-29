//C. Actividades de apropiación del conocimiento.

//1. Gestión de pedidos con rest y destructuración



function procesarPedido(pedido, ...extras) {
  // Usa destructuración para obtener sus propiedades
  const { cliente, producto, cantidad } = pedido;

  // Usa parámetros rest para almacenar los extras del pedido
  return {
    cliente,
    producto,
    cantidad,
    extras
  };
}

const pedidoActual = { 
  cliente: "Andres", 
  producto: "Monitor", 
  cantidad: 2, 
  producto2: "Teclado", 
  cantidad2: 1 
};

const pedidoFinal = procesarPedido(pedidoActual, "Cable HDMI", "Soporte de escritorio");

console.log(pedidoFinal);


//2. Control de inventario con inmutabilidad y spread
const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {
  const nuevoInventario = [...lista, nuevoItem];
  console.log(`El inventario tiene ahora ${nuevoInventario.length} ítems.`);
  return nuevoInventario;
}

const inventarioActualizado = agregarInventario(inventario, "lente");


//3. Registro de actividades con manejo de errores
function registrarActividad(actividad) {
  try {
    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida");
    }

    console.log("Actividad registrada con éxito.");
  } catch (error) {
    console.log(error.message);
  }
}

const actividadCorrecta = { nombre: "Estudiar programación", fecha: "2026-07-30" };
const actividadIncorrecta = { nombre: "Hacer ejercicio" };

registrarActividad(actividadCorrecta);
registrarActividad(actividadIncorrecta);

//4. Mezcla de configuraciones con spread y destructuración
const defaults = { tema: "claro", idioma: "es" };

function configurarUsuario(defaults, personalizadas) {
  const configuracionFinal = { ...defaults, ...personalizadas };
  const { idioma } = configuracionFinal;
  
  return idioma;
}

const misOpciones = { tema: "oscuro", notificaciones: true };
const opcionesOtroUsuario = { idioma: "en" };

console.log(configurarUsuario(defaults, misOpciones));
console.log(configurarUsuario(defaults, opcionesOtroUsuario));

//5. Actualización de perfiles con inmutabilidad + rest
function actualizarPerfil(perfil, ...nuevosDatos) {
  let perfilActualizado = { ...perfil };

  for (let i = 0; i < nuevosDatos.length; i++) {
    perfilActualizado = { ...perfilActualizado, ...nuevosDatos[i] };
  }

  return perfilActualizado;
}

const perfilOriginal = { nombre: "Andres", edad: 20, ciudad: "Bogotá" };
const perfilFinal = actualizarPerfil(perfilOriginal, { edad: 22 }, { ciudad: "Medellín" }, { rol: "Estudiante" });

console.log(perfilFinal);
console.log(perfilOriginal);
const id_producto = document.getElementById("id_producto");
const cantidad = document.getElementById("cantidad");
const btn_generar = document.getElementById("btn_generar");
const btn_limpiar = document.getElementById("btn_limpiar");
const tbody_resultado = document.getElementById("tbody_resultado");
const total = document.getElementById("total");

const productos = [
    {
        id: 1,
        nombre: "Libro",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Cuaderno",
        precio: 15.5,
    },
    {
        id: 3,
        nombre: "Pluma",
        precio: 2.35,
    },
];

const venta = [];

function agregarProducto() {
    if (id_producto.value === "" || cantidad.value === "") {
        alert("Debe ingresar datos");
        return;
    }

    if (isNaN(cantidad.value)) {
        alert("La cantidad debe ser un número");
        return;
    }

    if (!Number.isInteger(parseFloat(cantidad.value))) {
        alert("La cantidad debe ser un número entero");
        return;
    }

    if (parseInt(cantidad.value) < 0) {
        alert("La cantidad debe ser un número positivo");
        return;
    }

    const id = parseInt(id_producto.value);
    const cant = parseInt(cantidad.value);
    const producto = productos.find((p) => p.id === id);
    if (producto) {
        venta.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cant,
        });
    } else {
        alert("Producto no encontrado");
    }
}

function mostrarVenta() {
    let html = "";
    let totalVenta = 0;
    venta.forEach((v) => {
        html += `<tr>
            <td>${v.nombre}</td>
            <td>$${v.precio}</td>
            <td>${v.cantidad}</td>
            <td>$${v.precio * v.cantidad}</td>
        </tr>`;
    });

    venta.forEach((v) => {
        totalVenta += v.precio * v.cantidad;
    });

    tbody_resultado.innerHTML = html;
    total.innerHTML = `$${totalVenta.toFixed(2)}`;
    id_producto.value = "";
    id_producto.focus();
    cantidad.value = "";
}

function limpiar() {
    id_producto.value = "";
    id_producto.focus();
    cantidad.value = "";
    tbody_resultado.innerHTML = "";
    total.innerHTML = "";
    venta.length = 0;
}

btn_generar.addEventListener("click", () => {
    agregarProducto();
    mostrarVenta();
});

btn_limpiar.addEventListener("click", limpiar);

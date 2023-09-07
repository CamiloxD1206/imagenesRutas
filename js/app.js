let listaMotos = [];

const motoObjeto = {
    id: "",
    nombre: "",
    marca: "",
    cilindraje: "",
    placa: "",
    consumo: "",
    soat: "",
    descripcion: "",
    imagenUrl: "",
};

let editando = false;

const formulario = document.querySelector('#nueva-moto');
const nombre = document.querySelector('#nombre');
const marca = document.querySelector('#marca');
const cilindraje = document.querySelector('#cilindraje');
const placa = document.querySelector('#placa');
const consumo = document.querySelector('#consumo');
const soat = document.querySelector('#soat');
const descripcion = document.querySelector('#descripcion');
const foto = document.querySelector('#foto');
const motos = document.querySelector('#motos');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (nombre.value === "" || marca.value === "" || cilindraje.value === "" || placa.value === "" || consumo.value === "" || soat.value === "" || descripcion.value === "") {
        alert('todos los campos son obligatorios');
        return;
    }

    if (editando) {
        editarMoto();
        editando = false;
    } else {
        motoObjeto.id = Date.now();
        motoObjeto.nombre = nombre.value;
        motoObjeto.marca = marca.value;
        motoObjeto.cilindraje = cilindraje.value;
        motoObjeto.placa = placa.value;
        motoObjeto.consumo = consumo.value;
        motoObjeto.soat = soat.value;
        motoObjeto.descripcion = descripcion.value;

        cargarImagenSeleccionada();

        agregarMoto();
    }
}

function agregarMoto() {
    listaMotos.push({...motoObjeto });
    mostrarMotos();
    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    motoObjeto.id = '';
    motoObjeto.nombre = '';
    motoObjeto.marca = '';
    motoObjeto.cilindraje = '';
    motoObjeto.placa = '';
    motoObjeto.consumo = '';
    motoObjeto.soat = '';
    motoObjeto.descripcion = '';
    motoObjeto.imagenUrl = '';
}



function mostrarMotos() {
    limpiarHtml();
    const divMotos = document.querySelector('#motos');
    listaMotos.forEach(z => {
        const { id, nombre, marca, cilindraje, placa, consumo, soat, descripcion, imagenUrl } = z;
        const div = document.createElement('div');
        div.classList.add('moto-contenedor')

        if (imagenUrl) {
            const img = document.createElement('img');
            img.src = imagenUrl;
            img.width = 100;
            div.appendChild(img);
        }

        div.innerHTML += `
            <h6>Nombre: ${nombre}</h6>
            <h6>Marca: ${marca}</h6>
            <h6>Cilindraje: ${cilindraje}</h6>
            <h6>Placa: ${placa}</h6>
            <h6>Consumo: ${consumo}</h6>
            <h6>Soat: ${soat}</h6>
            <h6>Descripcion: ${descripcion}</h6>
        `;

        div.dataset.id = id;
        const editarBoton = document.createElement('button');
        editarBoton.classList.add('botonEdit')
        editarBoton.onclick = () => cargarMoto(z);
        editarBoton.textContent = 'editar'
        div.appendChild(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.classList.add('botonBorr')
        eliminarBoton.onclick = () => eliminarMoto(z.id);
        eliminarBoton.textContent = 'eliminar';
        div.appendChild(eliminarBoton);

        const hr = document.createElement('hr');
        divMotos.appendChild(div);
        divMotos.appendChild(hr);
    })
}





function cargarMoto(s) {
    const { id, nombre, marca, cilindraje, placa, consumo, soat, descripcion, imagenUrl } = s;
    document.querySelector('#nombre').value = nombre;
    document.querySelector('#marca').value = marca;
    document.querySelector('#cilindraje').value = cilindraje;
    document.querySelector('#placa').value = placa;
    document.querySelector('#consumo').value = consumo;
    document.querySelector('#soat').value = soat;
    document.querySelector('#descripcion').value = descripcion;

    motoObjeto.id = id;
    motoObjeto.imagenUrl = imagenUrl;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true;
}

function editarMoto() {
    motoObjeto.nombre = nombre.value;
    motoObjeto.marca = marca.value;
    motoObjeto.cilindraje = cilindraje.value;
    motoObjeto.placa = placa.value;
    motoObjeto.consumo = consumo.value;
    motoObjeto.soat = soat.value;
    motoObjeto.descripcion = descripcion.value;

    listaMotos.map(e => {
        if (e.id === motoObjeto.id) {
            e.id = motoObjeto.id;
            e.nombre = motoObjeto.nombre;
            e.marca = motoObjeto.marca;
            e.cilindraje = motoObjeto.cilindraje;
            e.placa = motoObjeto.placa;
            e.consumo = motoObjeto.consumo;
            e.soat = motoObjeto.soat;
            e.descripcion = motoObjeto.descripcion;
            e.imagenUrl = motoObjeto.imagenUrl;
        }
    });

    limpiarHtml();
    mostrarMotos();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando = false;
}

function eliminarMoto(id) {
    listaMotos = listaMotos.filter(moto => moto.id !== id);
    limpiarHtml();
    mostrarMotos();
}

function limpiarHtml() {
    const divMotos = document.querySelector('#motos');
    while (divMotos.firstChild) {
        divMotos.removeChild(divMotos.firstChild);
    }
}

function cargarImagenSeleccionada() {
    const imagen = foto.files[0];
    if (imagen) {
        const imagenUrl = URL.createObjectURL(imagen);
        motoObjeto.imagenUrl = imagenUrl;

    }
}
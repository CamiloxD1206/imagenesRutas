const enviar = document.querySelector('#enviar');
const foto = document.querySelector('#foto');
const contenedorMotos = document.querySelector('#motos');
const motosArreglo = [];

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    //img-----------------------------------------------
    const imagen = foto.files[0];
    const imagenUrl = URL.createObjectURL(imagen);
    const divImg = document.createElement('div');
    divImg.className = 'divImg';
    divImg.id = 'divImg';
    const img = document.createElement('img');
    img.className = 'img';
    img.id = 'img';
    img.src = imagenUrl;
    img.width = 200;
    divImg.appendChild(img);

    //nombre-----------------------------------------------------------
    const nombre = document.querySelector('#nombre').value;
    const divNombre = document.createElement('div');
    divNombre.classList.add('nombreMoto');
    divNombre.innerHTML = `<h5>Nombre: ${nombre}</h5>`;
    //marca----------------------------------------------------------------------
    const marca = document.querySelector('#marca').value;
    const divMarca = document.createElement('div');
    divMarca.classList.add('nombreMoto');
    divMarca.innerHTML = `<h5>Marca: ${marca}</h5>`;
    //cilindraje-----------------------------------------------------------------------

    const cilindraje = document.querySelector('#cilindraje').value;
    const divCilindraje = document.createElement('div');
    divCilindraje.classList.add('nombreMoto');
    divCilindraje.innerHTML = `<h5>Cilindraje: ${cilindraje}</h5>`;
    //placa-----------------------------------------------------------------
    const placa = document.querySelector('#placa').value;
    const divPlaca = document.createElement('div');
    divPlaca.classList.add('nombreMoto');
    divPlaca.innerHTML = `<h5>Placa: ${placa}</h5>`;
    //consumo------------------------------------------------------
    const consumo = document.querySelector('#consumo').value;
    const divConsumo = document.createElement('div');
    divConsumo.classList.add('nombreMoto');
    divConsumo.innerHTML = `<h5>Consumo: ${consumo}</h5>`;
    //soat-----------------------------------------------------------
    const soat = document.querySelector('#soat').value;
    const divSoat = document.createElement('div');
    divSoat.classList.add('nombreMoto');
    divSoat.innerHTML = `<h5>SOAT: ${soat}</h5>`;
    //descripcion-----------------------------------------------------------------
    const descripcion = document.querySelector('#descripcion').value;
    const divDescripcion = document.createElement('div');
    divDescripcion.classList.add('nombreMoto');
    divDescripcion.innerHTML = `<h5>Descripción: ${descripcion}</h5>`;

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Borrar';
    botonBorrar.classList.add('botonBorrado');
    botonBorrar.addEventListener('click', () => {

        const index = motosArreglo.findIndex(moto => moto.nombre === nombre);
        if (index !== -1) {

            motosArreglo.splice(index, 1);

            contenedorMotos.removeChild(divImg);
            contenedorMotos.removeChild(divNombre);
            contenedorMotos.removeChild(divMarca);
            contenedorMotos.removeChild(divCilindraje);
            contenedorMotos.removeChild(divPlaca);
            contenedorMotos.removeChild(divConsumo);
            contenedorMotos.removeChild(divSoat);
            contenedorMotos.removeChild(divDescripcion);
            contenedorMotos.removeChild(botonBorrar);
        }
    });

    const motoArreglo = {
        nombre,
        marca,
        cilindraje,
        placa,
        consumo,
        soat,
        descripcion
    };
    motosArreglo.push(motoArreglo);
    contenedorMotos.appendChild(divImg);
    contenedorMotos.appendChild(divNombre);
    contenedorMotos.appendChild(divMarca);
    contenedorMotos.appendChild(divCilindraje);
    contenedorMotos.appendChild(divPlaca);
    contenedorMotos.appendChild(divConsumo);
    contenedorMotos.appendChild(divSoat);
    contenedorMotos.appendChild(divDescripcion);
    contenedorMotos.appendChild(botonBorrar);
});
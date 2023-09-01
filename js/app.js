const descripcion=document.querySelector('#descripcion');
const enviar=document.querySelector('#enviar');
const foto=document.querySelector('#foto');

//contenedor para las motos
const contenedorMotos=document.querySelector('#motos');
//---subirimagendeordenador--------------------------------------------------
enviar.addEventListener('click',(e)=>{
    e.preventDefault();
   const imagen = foto.files[0];
   const imagenUrl = URL.createObjectURL(imagen);
   const divImg=document.createElement('div');
    divImg.className='divImg'
    divImg.id='divImg'
    const img=document.createElement('img');
    img.className='img'
    img.id='img'
    img.src=imagenUrl;
    img.width=200;
divImg.appendChild(img);
contenedorMotos.appendChild(divImg);

console.log(divImg);
})




import '../css/componentes.css'
//import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre')=>{
    console.log('creando h1')
    const h1= document.createElement('h1')
    h1.innerText=`Hola, ${nombre}, bienvenido a la configuración inicial de webpack para proyectos en JS`;
    document.body.append(h1)

    //img

    /*const img = document.createElement('img');
    img.src = webpacklogo
    document.body.append(img);*/
}
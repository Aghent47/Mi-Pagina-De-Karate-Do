var imagenes = ['img/1.jpg','img/2.jpg','img/4.jpg','img/5.jpg'],
    cont = 0;

function carrusel(contenedor2){
    contenedor2.addEventListener('click', e => {
        let atras = contenedor2.querySelector('.atras'),
            delante = contenedor2.querySelector('.delante'),
                img = contenedor2.querySelector('img'),
                    tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont-1];
                cont--;
               
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length -1;
                
            }

        }else if(tgt == delante){
            if(cont < imagenes.length - 1 ){
                img.src = imagenes[cont + 1];
                cont++;
                
            }else{
                img.src = imagenes[0];
                cont = 0;
                
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor2 = document.querySelector('.contenedor2');
    carrusel(contenedor2);
    });
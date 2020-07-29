document.addEventListener('DOMContentLoaded', function(){

    const requestURL = 'public/menu/data/data.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        const Datos = request.response;

        datosInstitucion(Datos);
    }

    //Funcion para leer los datos de la Institucion "uData" del json
    function datosInstitucion(jsonObj){
        const instDatos = jsonObj['uData'];
        
        const header = document.querySelector('#contentHeader');
        const imgBackground = document.querySelector('.masthead');

        imgBackground.style.backgroundImage = "url("+ instDatos.background +")";
        var titulo = document.createElement('h2');
        titulo.className = "title mb-1";
        titulo.textContent = instDatos.name;
        header.appendChild(titulo);

        var subtitulo = document.createElement('p');
        subtitulo.className = "description mb-5";
        subtitulo.textContent = instDatos.description;
        header.appendChild(subtitulo);

        //var logoInstitucion = document.createElement('img');
        //logoInstitucion.className = "img-fluid logoInstitucion";
        //logoInstitucion.src = "../public/menu/images/logo.png";
        //header.appendChild(logoInstitucion);

        var enlaceIcon = document.createElement('a');
        enlaceIcon.href = "#catalogo";
        enlaceIcon.id = "iconDown";
        var Icon = document.createElement('i');
        Icon.className = "fa fa-angle-down enlaceIcon";
        Icon.style.color = instDatos.colorIcon;

        enlaceIcon.appendChild(Icon);
        header.appendChild(enlaceIcon);
            
    }
})
  

/*
const obtener = async() => {
        try{
            const res = await fetch('../public/menuDos/data/data.json')
            const data = await res.json()

            const instDatos = data.uData;

        const header = document.querySelector('#contentHeader');
        const imgBackground = document.querySelector('.masthead');

            imgBackground.style.backgroundImage = "url("+ instDatos.background +")";
            var titulo = document.createElement('h2');
            titulo.className = "title mb-1";
            titulo.textContent = instDatos.name;
            header.appendChild(titulo);

            var subtitulo = document.createElement('p');
            subtitulo.className = "description mb-5";
            subtitulo.textContent = instDatos.description;
            header.appendChild(subtitulo);

            //var logoInstitucion = document.createElement('img');
            //logoInstitucion.className = "img-fluid logoInstitucion";
            //logoInstitucion.src = "../public/menu/images/logo.png";
            //header.appendChild(logoInstitucion);

            var enlaceIcon = document.createElement('a');
            enlaceIcon.href = "#catalogo";
            enlaceIcon.id = "iconDown";
            var Icon = document.createElement('i');
            Icon.className = "fa fa-angle-down enlaceIcon";
            Icon.style.color = instDatos.colorIcon;

            enlaceIcon.appendChild(Icon);
            header.appendChild(enlaceIcon);

        } catch (error) {
            console.log(error)
        }
    }

   obtener()
*/
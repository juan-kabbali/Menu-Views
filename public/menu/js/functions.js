    const obtener = async() => {
    	try{
    		const res = await fetch('public/menu/data/data.json')
    		const data = await res.json()

    		const instDatos = data.uData;
    		//console.log(instDatos)

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

function fetchDataBase(title, ezp_url){
    
    // Retrieve title and normalize it
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    title = title.toLowerCase();

    if (db_metadata.hasOwnProperty(title)){
    	//console.log(db_metadata[title]);
        for (category in db_metadata[title]["categories"]) {
            // Create db div and attach it to dbsTable
            var div_col = document.createElement("div");
            div_col.className = "col-xl-3 col-lg-4 col-md-6 col-12 cart";
            div_col.id = db_metadata[title].id;
            document.getElementById(db_metadata[title]["categories"][category]).appendChild(div_col);
        

            const aItem = document.createElement('a');
            aItem.className = "portfolio-item";
            aItem.id = "recurso";
            aItem.target = "_blank";
            //aItem.href = ezp_url;
            //SI EN EL JSON EL ENLACE ESTA VACIO ME PINTA LA URL DEL CONFIG, 
            //SI NO ME PINTA LA URL DEL JSON (EN EL CONFIG EL CAMPO URL DEBE EXISTIR ASI SEA CON CUALQUIER TEXTO 
            //EJ: VACIO O EL TIUTLO DEL RECURSO)
             if (db_metadata[title].enlace == "vacio") {
                aItem.href = ezp_url;
            }else {
                aItem.href = db_metadata[title].enlace;
            }

            const Caption = document.createElement('span');
            Caption.className = "caption";

            const CaptionContent = document.createElement('span');
            CaptionContent.className = "caption-content";

            const tituloItem = document.createElement('h2');
            tituloItem.id = "tituloItem";
        
            tituloItem.textContent = title;

            const descripcionItem = document.createElement('p');
            descripcionItem.id = "descripcionItem";
            descripcionItem.textContent = db_metadata[title].description;

            CaptionContent.appendChild(tituloItem);
            CaptionContent.appendChild(descripcionItem);

            Caption.appendChild(CaptionContent);

            const imageItem = document.createElement('img');
            imageItem.className = "img-fluid imageItem";
            imageItem.alt = title;
            imageItem.src = db_metadata[title].url_image;

            aItem.appendChild(Caption);
            aItem.appendChild(imageItem);

            div_col.appendChild(aItem);

        }
    }  else {
        console.log('Missing ' + title);
    }

}
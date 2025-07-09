// Modal de descarga
const modal = document.getElementById('downloadModal');
document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const downloadIconLink = document.querySelector('.download-icon'); //  ícono de descarga
    const closeButton = document.querySelector('.close-button');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn'); // Botón dentro del modal


    function openModal(event) { 
        event.preventDefault(); 
        modal.style.display = 'flex'; // mostrar el modal
    }

    function closeModal() {
        modal.style.display = 'none'; // ocultar el modal
    }

    // --- Event Listeners ---

    // Cuando el usuario hace clic en el ícono de descarga, abre el modal
    if (downloadIconLink) {
        downloadIconLink.addEventListener('click', openModal);
    }

    // Cuando el usuario hace clic en la 'x', cierra el modal
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Cuando el usuario hace clic fuera del contenido del modal, cierra el modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    if (modalDownloadBtn) {
        modalDownloadBtn.addEventListener('click', () => {
            alert('¡Descarga iniciada!'); // Reemplazar con la descarga real de libros
            selectedBooks = []; // Limpiar la lista de libros seleccionados después de la descarga
            selectedBooksList.innerHTML = ''; // Limpiar la lista de libros seleccionados en el modal
            downloadCount.textContent = selectedBooks.length; // Actualizar el contador de descargas
            downloadIconContainer.style.display = 'none'; // Ocultar el ícono de descarga
            document.querySelectorAll('.select-button').forEach(button => {
                button.disabled = false; // Habilitar todos los botones de selección de descarga
                button.textContent = 'Solicitar descarga'; // Cambiar el texto del botón de nuevo
                button.classList.remove('disabled'); // Quitar la clase de botón deshabilitado
                button.style.cursor = 'pointer'; // Cambiar el cursor a pointer
            });
            closeModal(); 
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') { // Si se presiona Esc cierra el modal
            closeModal();
        }
    });
});

let selectedBooks = []; // Array para almacenar los libros seleccionados

// Array de objetos a modo de DB de libros
const Libro = [
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance",
    lugar: "Reino Unido",
    anio: 1813,
    portada: "https://www.gutenberg.org/files/1342/1342-h/images/cover.jpg",
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela de caballerías",
    lugar: "España",
    anio: 1605,
    portada: "https://www.gutenberg.org/files/2000/2000-h/images/cover.jpg",
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    genero: "Gótico",
    lugar: "Reino Unido",
    anio: 1818,
    portada: "https://www.gutenberg.org/files/84/84-h/images/cover.jpg",
  },
  {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Brontë",
    genero: "Romance gótico",
    lugar: "Reino Unido",
    anio: 1847,
    portada: "https://www.gutenberg.org/files/768/768-h/images/cover.jpg",
  },
  {
    titulo: "Grandes esperanzas",
    autor: "Charles Dickens",
    genero: "Novela",
    lugar: "Reino Unido",
    anio: 1861,
    portada: "https://www.gutenberg.org/files/1400/1400-h/images/cover.jpg",
  },
  {
    titulo: "Un cuento de Navidad",
    autor: "Charles Dickens",
    genero: "Cuento",
    lugar: "Reino Unido",
    anio: 1843,
    portada: "https://www.gutenberg.org/files/46/46-h/images/cover.jpg",
  },
  {
    titulo: "Alicia en el país de las maravillas",
    autor: "Lewis Carroll",
    genero: "Fantasía",
    lugar: "Reino Unido",
    anio: 1865,
    portada: "https://www.gutenberg.org/files/11/11-h/images/cover.jpg",
  },
  {
    titulo: "Las aventuras de Tom Sawyer",
    autor: "Mark Twain",
    genero: "Aventuras",
    lugar: "Estados Unidos",
    anio: 1876,
    portada: "https://www.gutenberg.org/files/74/74-h/images/cover.jpg",
  },
  {
    titulo: "Las aventuras de Huckleberry Finn",
    autor: "Mark Twain",
    genero: "Aventuras",
    lugar: "Estados Unidos",
    anio: 1884,
    portada: "https://www.gutenberg.org/files/76/76-h/images/cover.jpg",
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    genero: "Aventura",
    lugar: "Estados Unidos",
    anio: 1851,
    portada: "https://www.gutenberg.org/files/2701/2701-h/images/cover.jpg",
  },
  {
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    genero: "Gótico",
    lugar: "Reino Unido",
    anio: 1890,
    portada: "https://www.gutenberg.org/files/174/174-h/images/cover.jpg",
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    genero: "Terror",
    lugar: "Reino Unido",
    anio: 1897,
    portada: "https://www.gutenberg.org/files/345/345-h/images/cover.jpg",
  },
  {
    titulo: "La isla del tesoro",
    autor: "Robert Louis Stevenson",
    genero: "Aventuras",
    lugar: "Reino Unido",
    anio: 1883,
    portada: "https://www.gutenberg.org/files/120/120-h/images/cover.jpg",
  },
  {
    titulo: "El extranio caso del Dr. Jekyll y Mr. Hyde",
    autor: "Robert Louis Stevenson",
    genero: "Gótico",
    lugar: "Reino Unido",
    anio: 1886,
    portada: "https://www.gutenberg.org/files/43/43-h/images/cover.jpg",
  },
  {
    titulo: "Veinte mil leguas de viaje submarino",
    autor: "Julio Verne",
    genero: "Ciencia ficción",
    lugar: "Francia",
    anio: 1870,
    portada: "https://www.gutenberg.org/files/164/164-h/images/cover.jpg",
  },
  {
    titulo: "La vuelta al mundo en ochenta días",
    autor: "Julio Verne",
    genero: "Aventura",
    lugar: "Francia",
    anio: 1873,
    portada: "https://www.gutenberg.org/files/103/103-h/images/cover.jpg",
  },
  {
    titulo: "Viaje al centro de la Tierra",
    autor: "Julio Verne",
    genero: "Ciencia ficción",
    lugar: "Francia",
    anio: 1864,
    portada: "https://www.gutenberg.org/files/1885/1885-h/images/cover.jpg",
  },
  {
    titulo: "Ana de las Tejas Verdes",
    autor: "L.M. Montgomery",
    genero: "Infantil",
    lugar: "Canadá",
    anio: 1908,
    portada: "https://www.gutenberg.org/files/45/45-h/images/cover.jpg",
  },
  {
    titulo: "El viento en los sauces",
    autor: "Kenneth Grahame",
    genero: "Fantasía",
    lugar: "Reino Unido",
    anio: 1908,
    portada: "https://www.gutenberg.org/files/289/289-h/images/cover.jpg",
  },
  {
    titulo: "Peter Pan",
    autor: "J.M. Barrie",
    genero: "Fantasía",
    lugar: "Reino Unido",
    anio: 1911,
    portada: "https://www.gutenberg.org/files/16/16-h/images/cover.jpg",
  },
  {
    titulo: "La guerra de los mundos",
    autor: "H.G. Wells",
    genero: "Ciencia ficción",
    lugar: "Reino Unido",
    anio: 1898,
    portada: "https://www.gutenberg.org/files/36/36-h/images/cover.jpg",
  },
  {
    titulo: "La máquina del tiempo",
    autor: "H.G. Wells",
    genero: "Ciencia ficción",
    lugar: "Reino Unido",
    anio: 1895,
    portada: "https://www.gutenberg.org/files/35/35-h/images/cover.jpg",
  },
  {
    titulo: "El lobo de mar",
    autor: "Jack London",
    genero: "Aventura",
    lugar: "Estados Unidos",
    anio: 1904,
    portada: "https://www.gutenberg.org/files/1230/1230-h/images/cover.jpg",
  },
  {
    titulo: "Colmillo Blanco",
    autor: "Jack London",
    genero: "Aventura",
    lugar: "Estados Unidos",
    anio: 1906,
    portada: "https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg",
  },
  {
    titulo: "Cuentos de los hermanos Grimm",
    autor: "Hermanos Grimm",
    genero: "Cuentos de hadas",
    lugar: "Alemania",
    anio: 1812,
    portada: "https://www.gutenberg.org/files/2591/2591-h/images/cover.jpg",
  },
  {
    titulo: "Fábulas de Esopo",
    autor: "Esopo",
    genero: "Fábulas",
    lugar: "Grecia Antigua",
    anio: 600, // Aproximado A.C.
    portada: "https://www.gutenberg.org/files/18738/18738-h/images/cover.jpg",
  },
  {
    titulo: "Romeo y Julieta",
    autor: "William Shakespeare",
    genero: "Tragedia",
    lugar: "Reino Unido",
    anio: 1597,
    portada: "https://www.gutenberg.org/files/1112/1112-h/images/cover.jpg",
  },
  {
    titulo: "Hamlet",
    autor: "William Shakespeare",
    genero: "Tragedia",
    lugar: "Reino Unido",
    anio: 1603,
    portada: "https://www.gutenberg.org/files/2265/2265-h/images/cover.jpg",
  },
  {
    titulo: "Macbeth",
    autor: "William Shakespeare",
    genero: "Tragedia",
    lugar: "Reino Unido",
    anio: 1606,
    portada: "https://www.gutenberg.org/files/1533/1533-h/images/cover.jpg",
  },
  {
    titulo: "Un estudio en escarlata",
    autor: "Arthur Conan Doyle",
    genero: "Misterio",
    lugar: "Reino Unido",
    anio: 1887,
    portada: "https://www.gutenberg.org/files/244/244-h/images/cover.jpg",
  },
  {
    titulo: "El signo de los cuatro",
    autor: "Arthur Conan Doyle",
    genero: "Misterio",
    lugar: "Reino Unido",
    anio: 1890,
    portada: "https://www.gutenberg.org/files/1351/1351-h/images/cover.jpg",
  },
  {
    titulo: "El fantasma de Canterville",
    autor: "Oscar Wilde",
    genero: "Cuento gótico",
    lugar: "Reino Unido",
    anio: 1887,
    portada: "https://www.gutenberg.org/files/1455/1455-h/images/cover.jpg",
  },
  {
    titulo: "Los miserables",
    autor: "Victor Hugo",
    genero: "Novela histórica",
    lugar: "Francia",
    anio: 1862,
    portada: "https://www.gutenberg.org/files/135/135-h/images/cover.jpg",
  },
  {
    titulo: "Notre-Dame de París",
    autor: "Victor Hugo",
    genero: "Novela histórica",
    lugar: "Francia",
    anio: 1831,
    portada: "https://www.gutenberg.org/files/2610/2610-h/images/cover.jpg",
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoievski",
    genero: "Filosofía",
    lugar: "Rusia",
    anio: 1866,
    portada: "https://www.gutenberg.org/files/2559/2559-h/images/cover.jpg",
  },
  {
    titulo: "Guerra y paz",
    autor: "León Tolstói",
    genero: "Novela histórica",
    lugar: "Rusia",
    anio: 1869,
    portada: "https://www.gutenberg.org/files/2600/2600-h/images/cover.jpg",
  },
  {
    titulo: "Anna Karénina",
    autor: "León Tolstói",
    genero: "Romance",
    lugar: "Rusia",
    anio: 1877,
    portada: "https://www.gutenberg.org/files/1399/1399-h/images/cover.jpg",
  },
  {
    titulo: "Jane Eyre",
    autor: "Charlotte Brontë",
    genero: "Romance gótico",
    lugar: "Reino Unido",
    anio: 1847,
    portada: "https://www.gutenberg.org/files/1260/1260-h/images/cover.jpg",
  },
  {
    titulo: "El paraíso perdido",
    autor: "John Milton",
    genero: "Épica",
    lugar: "Reino Unido",
    anio: 1667,
    portada: "https://www.gutenberg.org/files/26/26-h/images/cover.jpg",
  },
  {
    titulo: "La Ilíada",
    autor: "Homero",
    genero: "Épica",
    lugar: "Grecia Antigua",
    anio: 800, // Aproximado A.C.
    portada: "https://www.gutenberg.org/files/6130/6130-h/images/cover.jpg",
  },
  {
    titulo: "La Odisea",
    autor: "Homero",
    genero: "Épica",
    lugar: "Grecia Antigua",
    anio: 800, // Aproximado A.C.
    portada: "https://www.gutenberg.org/files/1727/1727-h/images/cover.jpg",
  },
  {
    titulo: "Don Juan",
    autor: "Lord Byron",
    genero: "Poesía",
    lugar: "Reino Unido",
    anio: 1821,
    portada: "https://www.gutenberg.org/files/21700/21700-h/images/cover.jpg",
  },
  {
    titulo: "Emma",
    autor: "Jane Austen",
    genero: "Romance",
    lugar: "Reino Unido",
    anio: 1815,
    portada: "https://www.gutenberg.org/files/158/158-h/images/cover.jpg",
  },
  {
    titulo: "Persuasión",
    autor: "Jane Austen",
    genero: "Romance",
    lugar: "Reino Unido",
    anio: 1817,
    portada: "https://www.gutenberg.org/files/105/105-h/images/cover.jpg",
  },
  {
    titulo: "Sentido y sensibilidad",
    autor: "Jane Austen",
    genero: "Romance",
    lugar: "Reino Unido",
    anio: 1811,
    portada: "https://www.gutenberg.org/files/161/161-h/images/cover.jpg",
  },
  {
    titulo: "David Copperfield",
    autor: "Charles Dickens",
    genero: "Novela",
    lugar: "Reino Unido",
    anio: 1850,
    portada: "https://www.gutenberg.org/files/766/766-h/images/cover.jpg",
  },
  {
    titulo: "Oliver Twist",
    autor: "Charles Dickens",
    genero: "Novela",
    lugar: "Reino Unido",
    anio: 1838,
    portada: "https://www.gutenberg.org/files/730/730-h/images/cover.jpg",
  },
  {
    titulo: "La cabaña del tío Tom",
    autor: "Harriet Beecher Stowe",
    genero: "Novela",
    lugar: "Estados Unidos",
    anio: 1852,
    portada: "https://www.gutenberg.org/files/203/203-h/images/cover.jpg",
  },
  {
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    genero: "Novela",
    lugar: "Estados Unidos",
    anio: 1868,
    portada: "https://www.gutenberg.org/files/514/514-h/images/cover.jpg",
  },
  {
    titulo: "El jardín secreto",
    autor: "Frances Hodgson Burnett",
    genero: "Infantil",
    lugar: "Reino Unido",
    anio: 1911,
    portada: "https://www.gutenberg.org/files/113/113-h/images/cover.jpg",
  },
  {
    titulo: "El maravilloso mago de Oz",
    autor: "L. Frank Baum",
    genero: "Fantasía",
    lugar: "Estados Unidos",
    anio: 1900,
    portada: "https://www.gutenberg.org/files/55/55-h/images/cover.jpg",
  },
];

// Función para crear y añadir las tarjetas de libros
function crearTarjetasLibros() {
    const catalogo = document.getElementById('catalogo-libros');
    const downloadIconWrapper = document.getElementById('downloadIconContainer'); // Ícono de descarga
    const downloadCount = document.getElementById('downloadCount'); // Contador de descargas

    // Limpia cualquier contenido existente antes de añadir nuevos (útil si la función se llama varias veces)
    catalogo.innerHTML = '';

    Libro.forEach(libro => {
        // 1. Crear el div principal del libro (book-item)
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        // 2. Crear el div para la portada (book-cover)
        const bookCover = document.createElement('div');
        bookCover.classList.add('book-cover');
        // Usa `style.backgroundImage` para establecer la URL de la portada
        bookCover.style.backgroundImage = `url('${libro.portada}'), linear-gradient(to bottom right,rgb(212, 229, 239), #1a1818)`;


        // 3. Crear el título (h4)
        const titleElement = document.createElement('h4');
        titleElement.textContent = libro.titulo;

        // 4. Crear el párrafo para el autor (p)
        const authorElement = document.createElement('p');
        authorElement.textContent = libro.autor;

        // 5. Crear el botón de selección de descarga
        const selectButton = document.createElement('button');
        selectButton.classList.add('select-button');
        selectButton.textContent = 'Solicitar descarga';
        selectButton.addEventListener('click', () => {
            agregarLibroSeleccionado(libro.titulo, libro.autor); // Agregar el libro seleccionado al array
            selectButton.disabled = true; // Deshabilitar el botón para evitar múltiples selecciones
            selectButton.textContent = 'Descarga solicitada'; // Cambiar el texto del botón 
            selectButton.classList.add('disabled'); // Añadir una clase para estilizar el botón deshabilitado
            selectButton.style.cursor = 'not-allowed'; // Cambiar el cursor para indicar que el botón está deshabilitado
            downloadIconWrapper.style.display = 'block'; // Muestra el ícono de descarga  
            
            downloadCount.textContent = selectedBooks.length; // Actualizar el contador de descargas
        });

        // 6. Añadir los elementos creados al bookItem
        bookItem.appendChild(bookCover);
        bookItem.appendChild(titleElement);
        bookItem.appendChild(authorElement);
        bookItem.appendChild(selectButton);

        // 7. Añadir el bookItem completo al contenedor principal
        catalogo.appendChild(bookItem);
    });
}
// Llamar a la función para crear las tarjetas de libros al cargar el documento
document.addEventListener('DOMContentLoaded', crearTarjetasLibros);

// Agregar libro seleccionado al array y mostrarlo en el modal de descarga
// Esta función se llama cuando el usuario hace clic en "Solicitar descarga" en una tarjeta
function agregarLibroSeleccionado(tittle, autor) {
  const libroYAutor = tittle + " de " + autor;
  const selectedBooksList = document.getElementById('selectedBooksList');
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
    removeButton.classList.add('remove-book-button'); 
    removeButton.textContent = 'X'; 
    removeButton.title = `Remover "${tittle}" de la lista`;    removeButton.classList.add('remove-book-button'); // Clase para estilizar
    removeButton.addEventListener('click', () => {
        removerLibroDeSeleccion(libroYAutor, selectedBooksList);
    });
  selectedBooks.push(libroYAutor); // Añadir el libro seleccionado al array
  listItem.textContent = libroYAutor; // Establecer el texto del elemento de lista
  listItem.appendChild(removeButton); // Añadir el botón de eliminar al elemento de lista
  selectedBooksList.appendChild(listItem); // Añadir el elemento de lista a la lista
}

function removerLibroDeSeleccion(book, fullList) {

  // Remover el libro de la lista de libros seleccionados
  const listItems = fullList.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent.includes(book)) {
      fullList.removeChild(listItems[i]); // Eliminar el elemento de la lista
      break; // Salir del bucle una vez encontrado y eliminado
    }   
  }

  // Actualizar el array de libros seleccionados
  selectedBooks = selectedBooks.filter(item => item !== book);

  // Actualizar el contador de descargas
  const downloadCount = document.getElementById('downloadCount');
  downloadCount.textContent = selectedBooks.length;

  // Habilitar el botón de selección de descarga del libro removido
  const selectButtons = document.querySelectorAll('.select-button');
  selectButtons.forEach(button => {
    if (button.textContent === 'Descarga solicitada') {
      button.disabled = false; 
      button.textContent = 'Solicitar descarga'; 
      button.classList.remove('disabled'); 
      button.style.cursor = 'pointer'; // 
    }
  });

  // Si no hay más libros seleccionados, ocultar el ícono de descarga y el modal
  const downloadIconContainer = document.getElementById('downloadIconContainer');
  if (selectedBooks.length === 0) {
    downloadIconContainer.style.display = 'none';
    modal.style.display = 'none'; 
  }
}

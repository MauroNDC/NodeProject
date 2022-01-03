let titulosDeLibros;

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName() {
        alert(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`)
    }
    
    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }

    countMascotas() {
        alert(`La cantidad de mascotas es: ${this.mascotas.length} y estas son: ${this.mascotas}`)
    }

    addBook(titulo, autor) {
        this.libros.push({'titulo': titulo, 'autor': autor})
    }

    getBookNames() {
        let titulos = [];
        this.libros.map(obj => titulos.push(obj.titulo))
        alert(`Los titulos de los libros son: ${titulos.join(', ')}`)
    }
}

const primerUsuario = new Usuario('Mauro', 'Di Cesare', 
[{titulo: 'El relato de un naufrago', autor: 'Garcia Marquez'},
{titulo: 'El tunel', autor: 'Sábato'},
{titulo: 'Crónicas de una Muerte Anunciada', autor: 'Garcia Marquez'},
{titulo: 'La noche boca Arriba', autor: 'Cortazar'}
],
['Chino', 'Micha']
)

primerUsuario.getFullName();

primerUsuario.addMascota('Haru')

primerUsuario.countMascotas()

primerUsuario.addBook('Las venas abiertas de Latinoamérica', 'Borges')

primerUsuario.getBookNames()

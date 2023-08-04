const {src, dest} = require("gulp"); //'require'para traer las dependencias instaladas(contenido,funciones), es como un import
                                //SRC - donde se encuentra el archivo que voy a compilar en sass
                                //dest - para definir donde se va a almacenar un archivo
                                
const sass = require("gulp-sass")(require("sass")); //no lleva corchetes debido que solo tiene una funcion

sass.compiler = require("dart-sass");

function compilarSass() { //tarea para aplicarle sass al archivo que puse en la direccion src
    // .pipe()-los pasos que debe realizar antes del return
    return src("./src/scss/app.scss") // './' desde la ubicacion actual del gulpfile navega hasta el src, ESTAN EN EL MISMO NIVEL
    .pipe(sass()) //le aplica sass al archivo especificado en src
    .pipe(dest("./build/css")); //indico donde quiero guardar las hojas de estilo
}   

function prueba(){
    
}

//para hacer la tarea disponible, para que gulp sepa que existe
exports.compilarSass = compilarSass; //exports.NombreTarea = NombreFuncion
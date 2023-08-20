const {src, dest, watch, series} = require("gulp"); //'require'para traer las dependencias instaladas(contenido,funciones), es como un import
                                //SRC - donde se encuentra el archivo que voy a compilar en sass
                                //dest - para definir donde se va a almacenar un archivo
                                
const sass = require("gulp-sass")(require("sass")); //no lleva corchetes debido que solo tiene una funcion
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

sass.compiler = require('dart-sass');

const paths = {
    imagenes:'src/img/**/*',
    scss: './src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    json:'src/json/**/*'
}

function compilarSass() { //tarea para aplicarle sass al archivo que puse en la direccion src
    // .pipe()-los pasos que debe realizar antes del return
    return src("./src/scss/app.scss") // './' desde la ubicacion actual del gulpfile navega hasta el src, ESTAN EN EL MISMO NIVEL
    .pipe(sass()) //le aplica sass al archivo especificado en src
    .pipe(dest("./build/css")); //indico donde quiero guardar las hojas de estilo
}   

//para poder crear archivos de css separados para cada pagina html
function indivCss(){
    return src(paths.scss)
    .pipe(sass())
    .pipe(dest("./build/css"))
}

function indivJson(){
    return src(paths.json)
    .pipe(dest('./build/json'))
}

function watchArchivos(){
    watch(paths.scss, compilarSass);
    watch(paths.js, indivJavascript);
    watch(paths.scss, indivCss);
    watch(paths.json, indivJson);
}

//funcion que crea archivos js en la carpeta build por separado cada uno
function indivJavascript(){
    return src(paths.js)
    .pipe(dest('./build/js'));
}

//esta funcion une todos los cambios de varios archivos js en uno solo
// function javascript(){
//     return src(paths.js)
//     .pipe(concat('bundle.js'))
//     .pipe(dest('./build/js'));
// }

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message:'Imagen minificada'}));
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message:'Version webP lista'}));
}

//para hacer la tarea disponible, para que gulp sepa que existe
exports.compilarSass = compilarSass; //exports.NombreTarea = NombreFuncion
exports.watchArchivos = watchArchivos;
// exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.indivJavascript = indivJavascript;
exports.indivCss = indivCss;
exports.indivJson = indivJson;

exports.default = series(compilarSass,watchArchivos, imagenes,indivJavascript,indivCss,indivJson);
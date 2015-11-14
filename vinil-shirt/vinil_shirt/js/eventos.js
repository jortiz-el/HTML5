function limpiar(element) {
    var limpia = document.getElementById(element);
    if (limpia.value !== '') {
        limpia.value = '';
    }
}
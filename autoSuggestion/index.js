const input = document.getElementById('input');
const suggestion = document.getElementById('suggestions');

suggestion.style.display = 'none';
input.addEventListener('focus', onFocus)
input.addEventListener('blur', onBlur)

function onBlur(){
    console.log('onBlur');
}

function onFocus() {
    console.log('onFocus');
}
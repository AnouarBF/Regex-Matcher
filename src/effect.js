import matching from "./regex";

const show = document.getElementById('show');

function effect(){
    
    const text = document.getElementById('text').value;
    const regexCode = document.getElementById('regex').value;
    const result = matching(text, regexCode);
    
    show.innerText = result;
}

export default effect;
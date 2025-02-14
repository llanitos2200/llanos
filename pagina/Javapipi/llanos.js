const myText = `Enseguida te dirigiremos donde tu quieres ir espero 
te guste querida <3`;
const divWrapper = document.getElementById('wrapper');
window.alert.href = "pagina web2.html"
let index = 0;

writeText = () => {
    divWrapper.innerText = myText.slice(0,index);
    index++;
    if(index > myText.length)
    {
        index = 0;
    }
}

setInterval(writeText, 100);
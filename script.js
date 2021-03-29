let lista = document.getElementById("lista");

//let valores = ['gato','perro','buonejo'];
let valores =[];

const getValue = () => valores.map(valor =>{
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
})

const addValue =()=>{
    let valor =document.getElementById("value");
    lista.innerHTML="";
    valores.push(valor.value);
    console.log(valores);
    getValue();
    valor.value="";
}

const cleanValue =()=>{
    lista.innerHTML="";
    valores =[];
}
getValue();



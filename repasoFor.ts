let arcoiris = ['rojo','naranja','amarillo','verde','azul','indigo','violeta'];

function printImpar(num:number){
    for(let i = 0; i<=num; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}

function invertir(arr:string[]):string[]{
    let arraResult = [];
    for(let i=0; i<arr.length;i++){
        arraResult.unshift(arr[i]);
    }
    return arraResult;
}

function coloresArco(array:string[]){
    for(let arr of array){
        if(arcoiris.includes(arr)){
            console.log(`El color ${arr} esta en el arcoiris.`)
        }
    }
}

function sumaCar(array:string[]){
    let resultado = 0;
    for(let arr of array){
        resultado += arr.length;
    }
    console.log(resultado);
    return resultado;
}


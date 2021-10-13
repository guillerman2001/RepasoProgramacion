
function esPar(array:number[]){
    let i = 0
    while(i<array.length){
        if(array[i]%2===0){
            return 'Hay numeros pares en tu array';
        }
        i++
    }
    return 'No hay numeros pares en tu array';
}

function nombresM(array:string[]){
    let i = 0;
    while(i<array.length){
        if(array[i][0]!=='M'){
            return false;
        }
        i++
    }
    return true;
}
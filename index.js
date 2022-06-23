function validar()
{
    let notaL=parseInt(document.getElementById("Lengua").value);
    let notaM=parseInt(document.getElementById("Matematica").value);
    let notaE=parseInt(document.getElementById("EFSI").value);
    if(!isNaN(notaL) && notaL < 11 && notaL > 0) document.getElementById("Lengua").style.color="green";
    else if(!isNaN(notaL) )
    {
        alert('Error numero no valido');
        document.getElementById("Lengua").style.color="red";
    }
    if(!isNaN(notaM) && notaM < 11 && notaM > 0) document.getElementById("Matematica").style.color="green";
    else if(!isNaN(notaM) )
    {
        alert('Error numero no valido');
        document.getElementById("Matematica").style.color="red";
    }
    if(!isNaN(notaE) && notaE < 11 && notaE > 0) document.getElementById("EFSI").style.color="green";
    else if(!isNaN(notaE) )
    {
        alert('Error numero no valido');
        document.getElementById("EFSI").style.color="red";
    } 
}

function Promedio (){
    let notaL=parseInt(document.getElementById("Lengua").value);
    let notaM=parseInt(document.getElementById("Matematica").value);
    let notaE=parseInt(document.getElementById("EFSI").value);
    let num = (notaL + notaM + notaE) / 3;
    if(isNaN(notaL) || isNaN(notaM) || isNaN(notaE) || notaL <1 || notaL>10 || notaM <1 || notaM>10 || notaE <1 || notaE>10) return;
    document.getElementById("Promedio").innerHTML=num;

    if(num >= 6){
        document.getElementById("Promedio").style.color="green";
    }else{
        document.getElementById("Promedio").style.color="red";
    }
}

function MayorNota(){
    var notaL = parseInt(document.getElementById("Lengua").value);
    var notaM = parseInt(document.getElementById("Matematica").value);
    var notaE = parseInt(document.getElementById("EFSI").value);

    const notas = [notaL, notaM, notaE];
    let notaMasAlta = 0;

    if(isNaN(notaL) || isNaN(notaM) || isNaN(notaE) || notaL <1 || notaL>10 || notaM <1 || notaM>10 || notaE <1 || notaE>10) return;

    for(let i=0; i<3;i++)
    {
        if(notas[i] > notaM && notas[i] > notaE)
        {
            notaMasAlta = 1;
            break;
        } 
        else if (notas[i] > notaL && notas[i] > notaE)
        {
            notaMasAlta = 2;
            break;
        } 
        else if (notas[i] > notaL && notas[i] > notaM)
        {
            notaMasAlta = 3;
            break;
        } 
        else notaMasAlta = 4; 
        console.log(notas[i]);
    }
    if(notaMasAlta === 1)
    {
        document.getElementById("MayorNota").innerHTML="Lengua"
        document.getElementById("Lengua").style.color="blue";
    }else if (notaMasAlta === 2)
    {
        document.getElementById("MayorNota").innerHTML="Matematica"
        document.getElementById("Matematica").style.color="blue";
    }else if (notaMasAlta === 3)
    {
        document.getElementById("MayorNota").innerHTML="EFSI"
        document.getElementById("EFSI").style.color="blue";
    }else 
    {
        document.getElementById("MayorNota").innerHTML="TODAS"
        document.getElementById("Lengua").style.color="blue";
        document.getElementById("Matematica").style.color="blue";
        document.getElementById("EFSI").style.color="blue";
    }   
}


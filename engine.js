window.onload = function(){

    setInterval(function(){
        document.querySelector(".contPreloader").style.display = 'none'; }, 6000);  
     
      
      
}


function capData(){
    
    let nam = document.getElementById("name").value;
    let corre = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensag").value;
    alert(nam + ' ' + ' ' + corre +  ' ' + mensaje);
}

function hideForm(){

    let sectionHF = document.getElementById('idSection')
    sectionHF.style.cssText = `height : 22vh`;

    let forMH = document.getElementById('idForm')
    forMH.style.cssText = 'display : none';

         
    }

function showForm(){
    
    let sectionSF = document.getElementById('idSection')
    sectionSF.style.cssText = 'height : 55vh';
    
    let form = document.getElementById('idForm')
    form.style.cssText= 'display : block, display: flex';

    
    }                              
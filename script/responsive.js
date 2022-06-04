const checkbox = document.getElementById('checkbox-menu');

function clicando(){
    const nav = document.querySelector('nav.nav-menu');
    if(checkbox.checked){
       nav.classList.toggle('active') 
       document.body.style.overflow = hidden
    }else{
        nav.classList.toggle('active') 
    }
}



checkbox.addEventListener('click', clicando)
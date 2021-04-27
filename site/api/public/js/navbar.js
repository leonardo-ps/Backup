function menu() {
    if (!document.getElementById('check').checked) {
        document.getElementById('check').click();
        document.getElementById('check').checked = false;
        document.getElementById('navbar').style.transition = "all .8s";
        document.getElementById('navbar').style.width = '20%';
        document.getElementById('ulIcon').style.display = 'none';
        document.getElementById('ulTexto').style.display = 'flex';
        document.getElementById('icone').style.display = 'none';
        document.getElementById('logoGrande').style.display = 'flex';
        document.getElementById('main').style.width = '80%';

    } else {
        document.getElementById('check').checked = true;
        document.getElementById('navbar').style.transition = "all .6s";
        document.getElementById('navbar').style.width = '5%';
        document.getElementById('ulIcon').style.display = 'flex';
        document.getElementById('ulTexto').style.display = 'none';
        document.getElementById('icone').style.display = 'flex';
        document.getElementById('logoGrande').style.display = 'none';
        document.getElementById('main').style.width = '95%';
    }

}

function sair(){
    sessionStorage.hostName = "";
    sessionStorage.cnpj = "";
    window.location.href = "Login.html";
}
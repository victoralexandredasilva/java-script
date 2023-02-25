function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`


    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#efdab7'
    } else if ( hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f8b67d'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#294046'
    }

    msg.style.textAlign = 'center'
    img.style.textAlign = 'center'

}

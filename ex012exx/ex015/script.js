function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if ( fano.value == 0 ||fano.value > ano || fano.value < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var img = document.getElementById('foto')
        
        if(fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 10) {
                img.src = 'hcrianca.png'

            } else if(idade >= 10 && idade < 20) {
                img.src = 'hadol.png'

            } else if ( idade >= 20 && idade < 30) {
                img.src = 'hjovem.png'

            } else if ( idade >= 30 && idade < 60) {
                img.src= 'hadulto.png'
                
            } else if(idade >=60 && idade < 118) {
                img.src = 'hidoso.png'
        
            } else {
                img.src = 'caveira.png'
            }

        } else { 
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                img.src = 'mcrianca.png'
            } else if(idade >=10 && idade < 20) {
                img.src = 'madol.png'

            }else if ( idade >= 20 && idade < 30) {
                img.src = 'mjovem.png'

            } else if ( idade >= 30 && idade < 60) {

                img.src= 'madulta.png'
            } else if(idade >=60 && idade < 118) {
                img.src = 'midosa.png'
            } else {
                img.src = 'caveira.png'
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        res.appendChild(img)
    }
}
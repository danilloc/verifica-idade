
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novemente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px';
        img.style.heigth = '250px';
        img.style.borderRadius = '50%';
        img.style.display ='flex'
        img.style.margin ='auto'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-m.jpg')
            }
            else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem-h.jpg')
            }
            else if (idade < 50) {
                //adulto    
                img.setAttribute('src', 'adulto-h.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'velho-h.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.jpg')
            }
            else if (idade < 23) {
                img.setAttribute('src', 'jovem-m.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            }
            else {
                img.setAttribute('src', 'velho-m.jpg')
            }


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
   
}


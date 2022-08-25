const tombol = document.querySelector('#nav-button')
const ballonNav = document.querySelector('.ballon-nav')


tombol.addEventListener('click', function(){
    const simbol = document.querySelector('#simbol')
    if(simbol.innerText == 'menu'){
        simbol.innerText = 'close'
    }else{
        simbol.innerText = 'menu'
    }

    ballonNav.classList.toggle('dp-block')
})

// profile - aside
const openProfile = document.querySelector('#buka-profile')
const dataProfile = document.querySelector('#data-profile')
const tutupProfile = document.querySelector('#tutup-profile')

openProfile.addEventListener('click', function(){
    dataProfile.classList.add('data-profile-active')
})

tutupProfile.addEventListener('click', function(){
    dataProfile.classList.remove('data-profile-active')
})

// slide button
const slideButton = document.querySelectorAll('#slide-button span')
const boxInfo = document.querySelectorAll('.tentang-main .card')
for(let cekSlideButton of slideButton){
    cekSlideButton.addEventListener('click', function(){
        for(let cekSlideButton2 of slideButton){
            cekSlideButton2.classList.remove('slide-button-active')
        }

        cekSlideButton.classList.add('slide-button-active')
        let verifikasi = 'token-' + cekSlideButton.getAttribute('id')
        console.log(verifikasi)
        for(let cekBox of boxInfo){
            if(cekBox.getAttribute('id') !== verifikasi){
                cekBox.classList.remove('box-active')
            }else {
                cekBox.classList.add('box-active')
            }
        }
    })
}
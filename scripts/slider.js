const next = document.getElementById('next');
const back = document.getElementById('back');
const sliderBackground = document.getElementById('distro-slider');
const styleBack = $(sliderBackground).css( "background-color");
const sliderDownload = document.getElementById('distro-button')
const styleDownl = $(sliderDownload).css( "background-color");
let wichIs = 0;

window.addEventListener("load", ()=>{changePhoto(false)}, false);
next.addEventListener("click", ()=>{changePhoto(false)}, false);
back.addEventListener("click", changePhoto, false);

function changePhoto(shouldGoBack){
    
    let updated = wichIs;
    if(shouldGoBack){
        if(wichIs == 1){
            updated = 5;
        }else{
            updated--;
        }
        
    }
    else{
        if(wichIs == 5){
            updated = 1;
        }else{
            updated++;
        }
    }

    switch (updated) {
        case 1:
            slider.innerHTML = '<img src="assets/ubuntu-desktop.jpg" class = "img" alt = "pulpit dystrybucji ubuntu"/><h3>Ubuntu - Niezawodny Start z Linuxem</h3><p>ubuntu - najpopularniejsze distro z przyjaznym środowiskiem GNOME<br/>Polecane na rozpoczęcie przygody z linuxem</p><br/><a href = "#" class = "distro-button" id = "distro-button">Pobierz Ubuntu</a>'
            $(sliderBackground).css( "background-color", "rgb(138, 48, 6)");
            $(sliderDownload).css( "background-color", "brown");
            break;
    
        case 2:
            slider.innerHTML = '<img src="assets/mint-desktop.png" class = "img" alt = "pulpit dystrybucji Linux Mint"/><h3>Linux Mint - Lekki cynamonowy OS</h3><p>Mint - to oparte na Ubuntu distro <br/> z własnym środowiskiem graficznym cinamon<br/>Również polecane na rozpoczęcie przygody z linuxem</p><br/><a href = "#" class = "distro-button" id = "distro-button">Pobierz Minta</a>'
            $(sliderBackground).css( "background-color", "rgb(85, 245, 37)");
            $(sliderDownload).css( "background-color", "lime");
        break;

        case 3:
            slider.innerHTML = '<img src="assets/manjaro-desktop.png" class = "img" alt = "pulpit dystrybucji Linux Manjaro"/><h3>Linux Manjaro - Dla wprawnych</h3><p>Manjarno - To oparte na Archu distro dla bardziej wprawnych użytkowników <br/>Polecane po zapoznaniu się z podstawami linuxa</p><br/><a href = "#" class = "distro-button" id = "distro-button">Pobierz Manjarno</a>'
            $(sliderBackground).css( "background-color", "rgb(15, 165, 90)");
            $(sliderDownload).css( "background-color", "rgb(13, 141, 77)");
        break;

        case 4:
            slider.innerHTML = '<img src="assets/redhat-desktop.png" class = "img" alt = "pulpit dystrybucji Linux RedHat"/><h3>Linux RedHat - Płatny, dla wprawnych</h3><p>Redhat - Jedna z płatnych, choć z otwartym kodem źródłowym i najstarszych dystrybucji linuxa.<br/> Polecana dla zaawansowanych użytkoników i administratorów </p><br/><a href = "#" class = "distro-button" id = "distro-button">Kup RedHat Enterprise</a>'
            $(sliderBackground).css( "background-color", "rgb(212, 20, 20)");
            $(sliderDownload).css( "background-color", "red");  
        break;

        case 5:
            slider.innerHTML = '<img src="assets/kali-desktop.jpg" class = "img" alt = "pulpit dystrybucji Linux Kali"/><h3>Linux kali - do rzeczy mniej lub barziej legalnych</h3><p>Kali Linux - dystrybucja stworzona do Hackingu i Pentestingu<br/> Zawiera preinstalowane narzędzia do hakowania i pentestingu <br/> Zdecydowanie odradzany dla nowych użytkowników</p><br/><a href = "#" class = "distro-button" id = "distro-button">Pobierz Kaliego</a>'
            $(sliderBackground).css( "background-color",  "rgb(6, 125, 204)");
            $(sliderDownload).css( "background-color", "blue");   ;
        break;

        

        default:
            break;
    }

    wichIs = updated;
}


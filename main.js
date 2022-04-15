let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Nassar = document.querySelector('.Nassar');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 5 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5+ 'px';
    river5.style.top = value + 'px';
   // boat6.style.top = value + 'px';
    //boat6.style.left = value * 3 + 'px';
    Nassar.style.fontSize = value  + 'px';
    if (scrollY>= 67){
        Nassar.style.fontSize = 67 + 'px';
        Nassar.style.position = 'fiexd';
        if(scrollY >= 478){
            Nassar.style.display = 'none';

        }else{
            Nassar.style.display = 'block';

        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient( #F4B400 , #F4B400)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient( #4285F4 , #4285F4)';

        }


    }
    


}


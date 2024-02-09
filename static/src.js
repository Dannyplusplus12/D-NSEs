

let s_btn = document.querySelectorAll('.s-btn')
var soundPlayer = null

for(let index = 0; index < 8; ++index) {
    console.log(s_btn[index].children[0])
    s_btn[index].addEventListener('click', () => {
        for(let i = 0; i < 8; ++i) {
            s_btn[i].children[0].classList.remove('hide')
            s_btn[i].children[1].classList.add('hide')
        }
        s_btn[index].children[0].classList.add('hide')
        s_btn[index].children[1].classList.remove('hide')
        
        
        try {
            soundPlayer.pause();
            soundPlayer.currentTime = 0;
        }
        catch(err) {
            
        }

        soundPlayer = new Audio('../static/sound/' + index + '.mp3');
        console.log(soundPlayer)
        soundPlayer.play();
    })
}

let to_btn = document.querySelectorAll('.to')
let to_selected = 0
for(let index = 0; index < to_btn.length; ++index) {
    to_btn[index].addEventListener('click', ()=>{
        to_selected = index
        for(let i = 0; i < to_btn.length; ++i) {
            to_btn[i].classList.remove('selected')
            if(i == to_selected) {
                to_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#ty"
    })

}

let ty_btn = document.querySelectorAll('.ty')
let ty_selected = 0
for(let index = 0; index < ty_btn.length; ++index) {
    ty_btn[index].addEventListener('click', ()=>{
        ty_selected = index
        for(let i = 0; i < ty_btn.length; ++i) {
            ty_btn[i].classList.remove('selected')
            if(i == ty_selected) {
                ty_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#bg"
    })
}


let st_btn = document.querySelectorAll('.st')
let st_selected = 0
for(let index = 0; index < st_btn.length; ++index) {
    st_btn[index].addEventListener('click', ()=>{
        st_selected = index
        for(let i = 0; i < st_btn.length; ++i) {
            st_btn[i].classList.remove('selected')
            if(i == st_selected) {
                st_btn[i].classList.add('selected')
            }
        }
    })
}


function rd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function create_() {
    let video_name = ''
    if(ty_selected == 5) {
        if(to_selected == 1)
            video_name += '00'
        else
            video_name += '01'
    }
    else if(ty_selected == 1)
        video_name += '02'
    else if(ty_selected == 4)
        if(to_selected == 1)
            video_name += '03'
        else
            video_name += '04'
    else if(ty_selected == 0)
        video_name += '05'
    else if(ty_selected == 2)
        if(to_selected == 1)
            video_name += '06'
        else
            video_name += '07'
    else if(ty_selected == 3)
        if(to_selected == 1)
            video_name += '08'
        else
            video_name += '09'
    video_name += bg_selected
    video_name += st_selected

    window.location.href = "/pv/" + video_name

}
document.getElementById('create_btn').addEventListener('click', create_)





let list_i = document.querySelectorAll('.list-wrapper div')
let bg_selected = 0
vid = document.querySelectorAll('.slider video')
for(let i = 0; i < vid.length-1; ++i) {
    if(i == bg_selected) {
        vid[i].play()
        list_i[i].classList.add('selected')
        vid[i].classList.remove('v-hide');
    }
}

resetHide = ()=> {
    for(let i = 0; i < vid.length-1; ++i) {
        vid[i].classList.remove('animate__animated')
        vid[i].classList.remove('animate__backInLeft')
        vid[i].classList.remove('animate__backOutLeft')
        vid[i].classList.remove('animate__backInRight')
        vid[i].classList.remove('animate__backOutRight')
        vid[i].classList.add('v-hide')
    }
}

document.querySelector('.nex').addEventListener('click', ()=>{
    ++bg_selected;
    bg_selected %= vid.length-1
    resetHide()

    for(let j = 0; j < list_i.length; ++j) {
        list_i[j].classList.remove('selected')
    }
    
    
    
    for(let i = 0; i < vid.length-1; ++i) {
        if(i == bg_selected) {
            list_i[i].classList.add('selected')
            vid[i].play()
            vid[i].classList.remove('v-hide')
            vid[i].classList.add('animate__animated')
            vid[i].classList.add('animate__backInRight')
            if(i == 0) {
                vid[i].classList.remove('v-hide')
                vid[vid.length-1-1].classList.add('animate__animated')
                vid[vid.length-1-1].classList.add('animate__backOutLeft')
            }
            else {
                vid[i].classList.remove('v-hide')
                vid[i-1].classList.add('animate__animated')
                vid[i-1].classList.add('animate__backOutLeft')
            }
        }
    }
})

document.querySelector('.pre').addEventListener('click', ()=>{
    --bg_selected;
    if(bg_selected == -1)
    bg_selected += vid.length-1
    resetHide()

    for(let j = 0; j < list_i.length; ++j) {
        list_i[j].classList.remove('selected')
    }

    for(let i = 0; i < vid.length-1; ++i) {
        if(i == bg_selected) {
            list_i[i].classList.add('selected')
            vid[i].play()
            vid[i].classList.add('animate__animated')
            vid[i].classList.add('animate__backInLeft')
            if(i == vid.length-1-1) {
                list_i[i].classList.add('selected')
                vid[0].classList.add('animate__animated')
                vid[0].classList.add('animate__backOutRight')
            }
            else {
                list_i[i].classList.add('selected')
                vid[i+1].classList.add('animate__animated')
                vid[i+1].classList.add('animate__backOutRight')
            }
        }
    }
})


function isElementOnScreen(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.bottom >= 0 && rect.top <= windowHeight;
}


const animate = () => {
    ani = document.querySelectorAll('.animate__animated')
    for(let i = 0; i < ani.length; ++i) {
        if(isElementOnScreen(ani[i])) {
            ani[i].classList.add('animate__bounceIn')
            // ani[i].classList.add('animate__delay-2s')
        }
    }
}

window.onload = animate;
document.addEventListener('scroll', animate)


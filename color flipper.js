const btn = document.getElementById('btn')
const colortext = document.getElementById('color')
const wrap = document.getElementById('wrap')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click', changebg)


function changebg(){
    let hexcolor = '#'

    for(i=1;i<=6; i++){
        hexcolor = hexcolor + randhexvalue()
       }
    wrap.style.backgroundColor = hexcolor
    colortext.innerHTML=hexcolor
}


function randhexvalue(){
    let randomindex = Math.floor(Math.random()*16)

    return hex[randomindex]
}

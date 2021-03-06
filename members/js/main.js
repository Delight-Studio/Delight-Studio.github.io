two = []
three = []
four = []
document.querySelectorAll('.locked-two').forEach((e)=>{
    two.push(e)
})
document.querySelectorAll('.locked-three').forEach((e)=>{
    three.push(e)
})
document.querySelectorAll('.locked-four').forEach((e)=>{
    four.push(e)
})

document.addEventListener('scroll', (e)=>{
    // 1
    if (window.pageYOffset > 300){
        document.getElementById('window-introduce').style.display = "none"
        document.getElementsByClassName('align-center')[0].className = "align-center"
        document.getElementById('section-characters').className = "minified"
    } else {
        document.getElementById('window-introduce').style.display = "none"
        document.getElementsByClassName('align-center')[0].className = "align-center fixed"
        document.getElementById('section-characters').className = ""
    }
    // 2
    if (window.pageYOffset > window.screen.availHeight / 2 && window.pageYOffset < window.screen.availHeight * 1.5) {
        value = 255 - (window.pageYOffset - window.screen.availHeight / 2)*2.5
        document.getElementsByTagName('BODY')[0].style.background = `rgba(${value}, ${value}, ${value})`
    } else if (window.pageYOffset >= window.screen.availHeight * 1.5) {
        value = (window.pageYOffset - (window.screen.availHeight*1.8))/2
        document.getElementsByTagName('BODY')[0].style.background = `linear-gradient(to right top, #000000 90%, rgb(${value}, ${value/1.5}, 0))`
    } else {
        document.getElementsByTagName('BODY')[0].style.background = ''
    }
    // 2.5
    if (document.getElementsByTagName('BODY')[0].style.background == 'rgb(0, 0, 0)'){
        two.forEach((e)=>{
            e.className = ""
        })
    } else {
        two.forEach((e)=>{
            e.className = "locked-two title2"
        })
    }
    if (window.pageYOffset > (window.screen.availHeight)/1.2){
        document.getElementById('title2').style.background = "linear-gradient(to right top, #F6DFBF, #ffa69e)"
        document.getElementById('title2').style.color = "transparent"
        document.getElementById('title2').style.webkitBackgroundClip = "text"
        document.getElementById('title2').style.transition = "1s"
    }
    if (window.pageYOffset > (window.screen.availHeight)){
        three.forEach((e)=>{
            e.style.marginTop = "30px"
            e.style.opacity = "1"
        })
    } else {
        three.forEach((e)=>{
            e.style.marginTop = "-50px"
            e.style.opacity = "0"
        })
    }
    if (window.pageYOffset > (window.screen.availHeight)*1.8){
        three.forEach((e)=>{
            e.style.marginTop = "-50px"
            e.style.opacity = "0"
        })
        four.forEach((e)=>{
            e.style.opacity = "1"
        })
    } else {
        four.forEach((e)=>{
            e.style.opacity = "0"
        })
    }
})

show_profile = (name, description, information)=>{
    document.getElementsByClassName('introduce-right')[0].innerHTML = ""
    if (information){
        information.forEach((elem)=>{
            document.getElementsByClassName('introduce-right')[0].innerHTML = document.getElementsByClassName('introduce-right')[0].innerHTML+`<div class="introduce-info"><span class="introduce-spname">${elem['name']}</span> <span class="introduce-spvalue">${elem['value']}</span></div>`
        })
    }
    document.getElementById('introduce-name').textContent = name
    document.getElementById('introduce-description').innerHTML = description
}

document.addEventListener('mousemove', (e)=>{
    if (e.target.className == "char-items" && window.pageYOffset <= 300){
        document.getElementById('section-characters').style.animationPlayState = "paused"
        document.getElementById('window-introduce').style.display = "block"
        switch (e.target.getAttribute('data-name')){
            case "en":
                show_profile("??????", "?????? ??????")
                break
            case "jv":
                show_profile("?????????", "???????????? ???????????????. ????????????!", [{'name': 'Github', 'value': "https://github.com/jinpyojoo"}])
                break
            case "mc":
                show_profile("??????", "???????????? ??????????????? ????????? ??????????????? ?????? ??? ?????? ?????????")
                break
            case "ne":
                show_profile("??????", "?????? ??????")
                break
            case "pg":
                show_profile("?????????", "\"??????\"")
                break
            case "rc":
                show_profile("??????", "?????? ??????")
                break
            case "sy":
                show_profile("??????", "?????? ??????")
                break
            case "tz":
                show_profile("??????", "\"?????????\"")
                break
            case "hs":
                show_profile("??????", "?????? ?????? ?????? ???????????? ????????? ??????")
                break
            case "yn":
                show_profile("??????", "???????????? ???????????? ????????? ???????????? K-??????")
                break
            case "sc":
                show_profile("Sweet_Cloud", "<span style='font-size: 80%'>???????????? ???????????? (SNS??? ???????????? ??? ????????? ??????(?))<br>???????????? ?????? ?????????_????????????</span>")
                break
            case "dj":
                show_profile("?????????", "?????? ??????")
                break
            case "jr":
                show_profile("??????", "?????? ??????")
                break
            case "mg":
                show_profile("??????", "?????? ??????")
                break
            case "jsp":
                show_profile("?????????", "?????? ??????")
                break

        }
    } else {
        document.getElementById('section-characters').style.animationPlayState = ""
        document.getElementById('window-introduce').style.display = "none"
    }
})

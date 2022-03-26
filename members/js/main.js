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
                show_profile("앤냥", "작성 필요")
                break
            case "jv":
                show_profile("지루비", "고양이는 귀엽습니다. 야옹야옹!", [{'name': 'Github', 'value': "https://github.com/jinpyojoo"}])
                break
            case "mc":
                show_profile("마쵸", "딜라이트 스튜디오를 설립한 장본인이자 크루 내 서열 최하위")
                break
            case "ne":
                show_profile("나은", "작성 필요")
                break
            case "pg":
                show_profile("플러그", "\"플럭\"")
                break
            case "rc":
                show_profile("레코", "작성 필요")
                break
            case "sy":
                show_profile("수육", "작성 필요")
                break
            case "tz":
                show_profile("팁즈", "\"도미새\"")
                break
            case "hs":
                show_profile("후스", "일을 하고 싶은 마음만은 가득찬 후스")
                break
            case "yn":
                show_profile("여노", "딜라이트 스튜디오 초창기 멤버이자 K-고딩")
                break
            case "sc":
                show_profile("Sweet_Cloud", "<span style='font-size: 80%'>딜라이트 스튜디오 (SNS와 커뮤니티 그 사이에 있는(?))<br>커뮤닷팀 멤버 스위트_클라우드</span>")
                break
            case "dj":
                show_profile("한동준", "작성 필요")
                break
            case "jr":
                show_profile("자룽", "작성 필요")
                break
            case "mg":
                show_profile("맑고", "작성 필요")
                break
            case "jsp":
                show_profile("제스퍼", "작성 필요")
                break

        }
    } else {
        document.getElementById('section-characters').style.animationPlayState = ""
        document.getElementById('window-introduce').style.display = "none"
    }
})

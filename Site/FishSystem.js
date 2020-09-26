function Ask(){
    var perg = document.getElementsByName("option")
    var pts = [1.0,1.0]
    resultado = document.querySelector("div#result")

    var x = 0;
    while (x < 2){
        var perglow = perg[x].value.toLowerCase()
        if (perglow.indexOf("peix"))
            if (perglow.indexOf("come"))
                pts[x] -= 8 * perg[x].value.length
            else if (perglow.indexOf("mata"))
                pts[x] -= 10 * perg[x].value.length
            else if (perglow.indexOf("mort"))
                pts[x] -= 10 * perg[x].value.length
            else
                pts[x] += 8 * ((perg[x].value.length + 0.001) / 2)

        if (perglow.indexOf("sim"))
            pts[x] += 4

        if (perglow.indexOf("gan")  || perglow.indexOf("ban")  || perglow.indexOf("pod")  || perglow.indexOf("sen") 
            || perglow.indexOf("h")  || perglow.indexOf("ind")  || perglow.indexOf("pe")  || perglow.indexOf("ss") 
            || perglow.indexOf("ea")  || perglow.indexOf("tan") )
            pts[x] += 2
        if (perglow.indexOf("fazer")  || perglow.indexOf("ter")  || perglow.indexOf("gu")  || perglow.indexOf("qu") 
            || perglow.indexOf("ce")  || perglow.indexOf("se")  || perglow.indexOf("vt")  || perglow.indexOf("lh") 
            || perglow.indexOf("as")  || perglow.indexOf("w")  || perglow.indexOf("mar") )
            pts[x] += 2.85
        if (perglow.indexOf("bi")  || perglow.indexOf("y")  || perglow.indexOf("jo")  || perglow.indexOf("k") 
            || perglow.indexOf("cen")  || perglow.indexOf("x")  || perglow.indexOf("z")  || perglow.indexOf("xi") 
            || perglow.indexOf("  ")  || perglow.indexOf("ru") )
            pts[x] -= 2.2
        if (perglow.indexOf("eh")  || perglow.indexOf("alt")  || perglow.indexOf("tab")  || perglow.indexOf("net") 
            || perglow.indexOf("pens")  || perglow.indexOf("etr")  || perglow.indexOf("ant") 
            || perglow.indexOf("list")  || perglow.indexOf("bal")  || perglow.indexOf("ll") )
            pts[x] -= 5.8
        if (perglow.indexOf("fu")  || perglow.indexOf("mu")  || perglow.indexOf("xo")  || perglow.indexOf("ho") 
            || perglow.indexOf("ja")  || perglow.indexOf("ol")  || perglow.indexOf("os") 
            || perglow.indexOf("oto")  || perglow.indexOf("iro")  || perglow.indexOf("car") )
            pts[x] -= 1.7
        if (perglow.indexOf("88")  || perglow.indexOf("50")  || perglow.indexOf("9")  || perglow.indexOf("13") 
            || perglow.indexOf("º")  || perglow.indexOf("ª")  || perglow.indexOf("*")  || perglow.indexOf(".") 
            || perglow.indexOf("@")  || perglow.indexOf("+") )
            pts[x] += 1.2
        if (perglow.indexOf("lun")  || perglow.indexOf("lum")  || perglow.indexOf("min")  || perglow.indexOf("comp") 
            || perglow.indexOf("comb")  || perglow.indexOf("tro")  || perglow.indexOf("bla") 
            || perglow.indexOf("and")  || perglow.indexOf("pol")  || perglow.indexOf("pe") )
            pts[x] += 1.4
        if (perglow.indexOf("ador")  || perglow.indexOf("nn")  || perglow.indexOf("ker")  || perglow.indexOf("kelv") 
            || perglow.indexOf("mui")  || perglow.indexOf("far")  || perglow.indexOf("sal") 
            || perglow.indexOf("aei")  || perglow.indexOf("ui")  || perglow.indexOf("lei") )
            pts[x] += 2.1
        if (perglow.indexOf("lega")  || perglow.indexOf("ocea")  || perglow.indexOf("brasil") 
            || perglow.indexOf("joga")  || perglow.indexOf("stud")  || perglow.indexOf("vida") 
            || perglow.indexOf("bom")  || perglow.indexOf("inhei")  || perglow.indexOf("anima") 
            || perglow.indexOf("progr")  || perglow.indexOf("nada")  || perglow.indexOf("tubar") 
            || perglow.indexOf("perg")  || perglow.indexOf("tubar") )
            pts[x] += 7
        if (perglow.indexOf("ea"))
            pts[x] += -1
        if (perglow.indexOf("ss"))
            pts[x] += 1
        if (perglow.indexOf("t"))
            pts[x] += 1.2
        if (perglow.indexOf("gu"))
            pts[x] += -0.8
        if (perglow.indexOf("x"))
            pts[x] += 2.2
            if (perglow.indexOf("aa"))
            pts[x] += -8
        if (perglow.indexOf("ae"))
            pts[x] += -2.4
        if (perglow.indexOf("h"))
            pts[x] += 0.5
        if (perglow.indexOf("v"))
            pts[x] += -2.2
        if (perglow.indexOf("?"))
            pts[x] += -2.5
        if (perglow.indexOf("n"))
            pts[x] += 2.4
        if (perglow.indexOf("l"))
            pts[x] += 1.7
        if (perglow.indexOf("b"))
            pts[x] += -1
        if (perglow.indexOf("c"))
            pts[x] += 0.2
        if (perglow.indexOf("z"))
            pts[x] += 1
        if (perglow.indexOf("p"))
            pts[x] += 0.3
        if (perglow.indexOf("j"))
            pts[x] += -2.5
        if (perglow.indexOf("q"))
            pts[x] += 2.4
        if (perglow.indexOf("w"))
            pts[x] += 1.7
        if (perglow.indexOf("sh"))
            pts[x] += -8
        if (perglow.indexOf("o"))
            pts[x] += 1.1
        if (perglow.indexOf("ã"))
            pts[x] += -0.5
        if (perglow.indexOf("."))
            pts[x] += 0.6
        if (perglow.indexOf(","))
            pts[x] += -0.2
        if (perglow.indexOf("f"))
            pts[x] += 2.4
        if (perglow.indexOf("u"))
            pts[x] += 0.2
        if (perglow.indexOf("e"))
            pts[x] += -0.3
        if (perglow.indexOf("s"))
            pts[x] += 0.8

        if (perglow.indexOf(" ") )
            pts[x] -= .448
        
            perglow.indexOf()
        
        pts[x] = pts[x] / perg[x].value.length
        x++
    }
    var resp = ""
    
    if(pts[0].toPrecision(3) > pts[1].toPrecision(3))
        resp = perg[0].value 
    else if(pts[1].toPrecision(3) > pts[0].toPrecision(3))
        resp = perg[1].value
    else
        resp = "O peixe não sabe!"
    resultado.innerHTML = `<p>Entre ${perg[0].value} e ${perg[1].value} o peixe decidiu:</p>` 
    resultado.innerHTML += `<p style="margin: 5px; font: bold 30px Arial;">${resp}</p>` 
}


var cor_atual = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() *255})`
window.document.body.style.background = cor_atual
window.document.getElementById("result").style.background = cor_atual
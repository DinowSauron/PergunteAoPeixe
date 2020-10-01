function ColorVariation(){
    var cor_atual = [Math.random() * 255, Math.random() * 255, Math.random() *255];
    var channel = Math.random() * 3 + " ";
    var color_target = 0;


    setInterval(() => {
        color_target = Math.random() * 255;
        channel = Math.random() * 3 + " ";
    }, 2000);
    setInterval(AlternateColors, 80);

    
    function AlternateColors(){
        window.document.body.style.background; 
        channel =  channel[0];
        cor_atual[channel] = ChangeColor(cor_atual[channel]);


        var cor_remap = `rgb(${cor_atual[0]}, ${cor_atual[1]}, ${cor_atual[2]})`;

        window.document.getElementById("result").style.background = cor_remap;
        window.document.getElementById("border").style.background = cor_remap;
        window.document.body.style.background = cor_remap;

    }
    function ChangeColor(color){
        color = Lerp(color, color_target, 0.03);
        //console.log(cor_atual, channel);
        return color;
    }
    function Lerp(actual,target,time){
        return actual + (target -actual) * time;
    }
}
ColorVariation();
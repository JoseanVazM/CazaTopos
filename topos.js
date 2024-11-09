let movimiento;
let timer;
let cont_tiempo = 30;
let pos_ulit = 0;
let puntos = 0;

$(document).ready(function(){
    function reiniciar() {
        cont_tiempo = 30;
        pos_ulit=0;
        puntos = 0;
        $("span").each(function(){$(this).text($(this).attr("id") == "result" ? puntos : cont_tiempo)});
    }

    $("#play").mousedown(function(){
        reiniciar();
        $("#play").attr("disabled",true);
        timer = setInterval(tiempo,1000);
        movimiento = setInterval(mueve,500);
    });

    function tiempo() {
        if (cont_tiempo>0) {
            cont_tiempo--;
        }else{
            clearInterval(timer);
            clearInterval(movimiento);
            $(".scene").each(function(){$(this).css("background-image","url('./img/white2.png')")});
            $("#play").attr("disabled",false);
        }
        $("#time").text(cont_tiempo);
    }

    function mueve() {
        do {
            pos=Math.floor(Math.random() *9) +1;
        } while (pos_ulit==pos);
        $(".scene").each(function(){$(this).css("background-image","url('./img/white2.png')")});
        $(("#d"+pos)).css("background-image","url('./img/topo1.png')");
        pos_ulit=pos
    }

    $("div").filter(".scene").mousedown(function(){
        let txt_pulsado = $(this).css("background-image");
        $("#result").text(punto=txt_pulsado.substring(txt_pulsado.length-7,txt_pulsado.length-2) == "1.png" ? puntos++ : puntos);
    });

    $("#reset").click(function(){
        clearInterval(timer);
        clearInterval(movimiento);
        reiniciar();
        $(".scene").each(function(){$(this).css("background-image","url('./img/white2.png')")});
        $("#play").attr("disabled",false);
    });

});

//IIFE
(function (){
//Classe da animação
var target = $(".anime"),
    animeClass = "anime-start",
    offset = $(window).height() * 2/4;

//Função para pegar a distancia do topo e animar
function animeScroll(){
    
    //Distância do scroll
    var distanceTop = $(document).scrollTop();

    //Pegando o valor do elemento
    target.each(function(){
        
        //Pegando o valor da distância do elemento
        var itemTop = $(this).offset().top;

        //Verificando a distância entre o scroll e o elemento, caso seja maior, ele anima 
        if(distanceTop > itemTop - offset){
            $(this).addClass(animeClass);
            $(this).removeClass("anime");
        }else{
            $(this).addClass("anime");
            $(this).removeClass(animeClass);
        }

        if(distanceTop >= 806.34375 - offset && distanceTop <= 1508.03125 + offset){
            $(".progress").addClass("anime-progress");
        }else{
            $(".progress").removeClass("anime-progress");
        }
    });
}

//Executando pela primeira vez para a home
animeScroll();

//Ativando pelo movimento do scroll

$(document).scroll(function(){
    animeScroll();
});

//Animação gif da tela projeto
$(".gif").hover(function(){
    $(".gif-sobre").css("z-index", "1");
    }, function(){
    $(".gif-sobre").css("z-index", "-1");
});



}());

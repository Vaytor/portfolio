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
    });
}

//Executando pela primeira vez para a home
animeScroll();

//Ativando pelo movimento do scroll

$(document).scroll(function(){
    animeScroll();
});

}());
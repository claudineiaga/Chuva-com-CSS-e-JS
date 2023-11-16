var makeItRain = function () {
    //limpar tudo
    $('.rain').empty();
    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //alguns números aleatórios para usar em várias randomizações
        //número aleatório entre 98 e 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //número aleatório entre 5 e 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //incremento
        increment += randoFiver;
        //adicione uma nova gota de chuva com várias randomizações para certas propriedades CSS
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}
//mostrar pingos caindo no chão
$('.splat-toggle.toggle').on('click', function () {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
});
//vários pingos de chuva
$('.back-row-toggle.toggle').on('click', function () {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
});
//um pingo de chuva
$('.single-toggle.toggle').on('click', function () {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
});
makeItRain();
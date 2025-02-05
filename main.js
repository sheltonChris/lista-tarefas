$(document).ready(function () {
    $('header button').on('click', function(){
        $('form').slideToggle(900);
    })




    $('ul').on('click', 'li', function () {
        $(this).toggleClass('rabiscado');
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val(); /*não pode esquecer de colocar o seletor de id "#"*/
        const novaTarefa = $(`<li>${tarefa}</li>`);
        $('ul').append(novaTarefa);
        $('#nova-tarefa').val('');



        $('#btn-limpar').click(function () {
            $('ul').empty();
        })
    });
})

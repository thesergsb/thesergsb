$('select').addClass('shadow_select');
$('select').wrap('<span class="select-wrapper" />');
$('.select-wrapper').width($(this).width());

$('select').focusin(function() {
    $('.select-wrapper').addClass('webkit_specific');
});

$('select').focusout(function() {
    $('.select-wrapper').removeClass('webkit_specific');
});

$("#largeTextbox").keyup(function(event){
    if(event.keyCode == 13){
        $("#submitButton").click();
    }
});

function show(solution_array){
    html = ''
	for (var i = 0; i < solution_array.length; i++){
        html += '<p class="well">' + solution_array[i] + '</p>'
    }
    document.getElementById("cube").innerHTML = html;
}

function solve(text){
    layers = text.split(',');
    show(layers);
}
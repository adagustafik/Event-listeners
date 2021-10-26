$('#first').click(() => {
    console.log ("Yeah, you clicked me");
});
$('#second').click(() => {
    $('#first').text('TEXT CHANGE');
});
$('#third').one('click',() => {
    $('button').css('background-color', $('input:text').val());
});
$('#first').click(() => {
    console.log ("Yeah, you clicked me");
});
$('#second').click(() => {
    $('#first').text('TEXT CHANGE');
});
$('#third').click(() => {
    $('button').css('background-color', 'yellow');
});
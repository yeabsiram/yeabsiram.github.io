function callAjax()
{
    $.ajax({
        'url': './text.txt',
        'type': 'GET',
        'success': onSucess,
        'error': onFail
    });
}


function onSucess(data){
    console.log(data);
}

function onFail(xhr, status, exception){
    console.log(exception);
}
$(function(){
    callAjax();
})
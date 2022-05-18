$(()=>{

    $("#frm").submit(()=>{
        callAjax();
        return false;
    });
    $("#text").keypress(function(event){
        if(event.which == 13)
        {
            callAjax();
        }
    })
    function callAjax()
    {
        let url = "/8ball";
        $.get(url).done(success).fail(failure);
    }
    function success(data){
        let abc = $("#text");
        abc.val(JSON.stringify(data));
        abc.select();
    }
    function failure(xhr, status, exception){
        $("#msg").val("Failed to get data");
    }

});
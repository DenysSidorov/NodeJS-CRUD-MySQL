function deleteUser(id) {
    console.log(id);
    var link  = '/' + id;
    $.post(link, function( data ) {
        console.log(data);
        window.location.reload();
    });
}

function editUser(id) {
    console.log(id);
    $.ajax({
        url: '/script.cgi',
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
        }
    });
}
function deleteUser(id) {
    console.log(id);
    var link  = '/' + id;
    $.ajax({
        url: link,
        type: 'DELETE',
        success: function( data ) {
            window.location.reload();
        }
    });
}

function editUser(id) {
    var link  = '/' + id;
    console.log(id);
    $.ajax({
        url: link,
        type: 'PUT',
        success: function(result) {
            // Do something with the result
        }
    });
}
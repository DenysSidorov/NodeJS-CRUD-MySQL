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
    window.location = link;
    // console.log(id);
    // $.ajax({
    //     url: link,
    //     type: 'PUT',
    //     success: function(result) {
    //         console.log(result);
    //         window.location = link;
    //         $("html").html(result);
    //
    //     }
    // });
}
function addUser() {
    var button = document.getElementById('idAdd');
    button.stopPropagation();
    button.preventDefault();
    console.log('click');
    // var link  = '/add';
    // $.ajax({
    //     url: link,
    //     type: 'POST',
    //     success: function( data ) {
    //         window.location.reload();
    //     }
    // });
}
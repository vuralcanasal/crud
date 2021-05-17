
$("#add_memory").submit(function(event){
    alert("Data Created Successfully!!");
});

$("#update_memory").submit(function(event){
    var data = {}

    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    });

    var request = {
        "url" : `http://localhost:3000/api/memories/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Memory Updated Successfully!");
    });
});

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data_id");

        var request = {
            "url" : `http://localhost:3000/api/memories/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Are you sure??")){
            $.ajax(request).done(function(response){
                alert("Memory Deleted Successfully!");
                location.reload();
            });
        }
    });
}
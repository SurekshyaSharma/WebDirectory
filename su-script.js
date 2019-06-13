$(document).ready(function () {

    console.log("Here We Go");
    $("button").click(function(){
        $("p").toggle();
      });
    ShowAcamedicDepartments();
}); 

function  ShowAcamedicDepartments() {

    console.log("(ajax-call)Starting.........");

    $.ajax({
        type: "GET",

        url:"https://directory.aws.stthomas.edu/api.htm?requestType=getAcademicDepartments",
        dataType: "jsonP",

        error: function(error){
            alert("Error Occurred");
            console.log("Failed ajax call" , error);
        },
        
        success: function(data){
            console.log("DATA:", data);
            console.log("DATA:", data.departments);
            console.log("DATA:", data.departments[0]);
            
            
        $.each(data.departments, function(key, value){
               
            //console.log("Name:", value.Name);
            //console.log("Phone :", value.Phone);
            //console.log("Site :", value.Url);
                
            var Name = value.Name;
            var Phone = value.Phone;
            var Site =value.Url;
            var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N',
            'O', 'P', 'R', 'S', 'T', 'U', 'W'];
            var currentAlpha;

        

                alpha.forEach(function(letter){
                    currentAlpha= letter
                    console.log(currentAlpha);
                    if (value.Name.startsWith(letter)){

                        // $('#QuickLinks').append(  
                        //     '<a href="#QuickLinks-' + letter + '">' + letter + '</a>' + ' | ' 
                        // );
                
                        $('#ShowTable').append( 
                    
                        '<div id =ShowTable style="float: left">' +
                        currentAlpha +
                        '</div>'+ '<table id=individualtable>' + 

                        '<div id =ShowTable style="float: right">' +
                                '<a href=#top>Top </a> '+
                        '</div>'+
                            
                        '<table id="individualtable' + currentAlpha +'">' + 
                        
                        '<tr>'+
                        '<th>Name</th>'+
                        '<th>Phone</th>'+
                        '<th>Site</th>'+
                        '</tr>'+
        
                        '<tr>'+
                        '<td>'+Name+'</td>'+
                        '<td>'+Phone+'</td>'+ 
                        '<td>'+' <a href="'+ value.Url+'"target="_blank">Site</a>'+'</td>'+
                        '</tr>'+
                        
                        '</table>'
                    );
                }
            })
    } 
        )}
    });

}
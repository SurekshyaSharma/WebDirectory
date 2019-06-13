$(document).ready(function () {

    console.log("Surekshya Sharma");

    // call get dep function
    getAdministrativeDepartment();
    //getCenterDepartments();
    getAcademicDepartments();

});

function getAcademicDepartments() {

    console.log("Making a ajax call for API");

    $.ajax({
        type: "GET",

        url: "https://directory.aws.stthomas.edu/api.htm?requestType=getAcademicDepartments",

        dataType: "jsonP",

        error: function (e) {
            alert("An error occurred while processing API calls");
            console.log("Calling failed: ", e);
        },

        success: function (data) {
            console.log("Showing data : ", data);
            
            var dep = data.departments
            //our data is inside the department as a arrays of data 

            console.log("View data: ", dep);
            

            $.each(dep, function (key, value) {

                var name =  value.Name;
                var phone = value.Phone;
                var email = value.Email; 
                var url = value.Url;
                var fax = value.Fax;
                var location = value.Location;
                
                if (phone == null){
                    phone = "unavailable";
                }

                if (email == null) {
                    email = "Unavailable";
                }
                
                var content = '<span>' + name + '</span><br>' + 
                              '<span>' + phone + '</span><br>' +
                              '<span>' + email + '</span><br><br>';

                // $('#DepList').append(content);

                var i;
                var alpha = ['A','B','C','D','E','F','G','H','I','J','k',"L",];

                for (i=1; i<=12; i++)
                {
                    if (value.Name.startsWith(alpha[i])) {

                        // add list of department starting with A into the table
                        $('#departments'+alpha[i]).append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');
                    }
    
                }
/*
                if (value.Name.startsWith('A')) {

                    // add list of department starting with A into the table
                    $('#departmentsA').append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');

                } else if (value.Name.startsWith('B')){
                    // add list of department starting with B into the table
                    $('#departmentsB').append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');

                } else if (value.Name.startsWith('C')) {
                    // add list of department starting with C into the table
                    $('#departmentsC').append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');

                } else if (value.Name.startsWith('D')) {
                    // add list of department starting with D into the table
                    $('#departmentsD').append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');

                } else if (value.Name.startsWith('E')) {
                    // add list of department starting with E into the table
                    $('#departmentsE').append('<tr><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>');

                }*/
            });
        }

    });
}
/**************************************************************************** */
function getAdministrativeDepartment(){
    console.log("Calling...");

    var request =new XMLHttpRequest();
    request.open('GET', 'https://directory.aws.stthomas.edu/api.htm?requestType=getAdministrativeDepartments');
    request.responseType = 'json';
    request.onload =function() {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

         if (request.status >= 200 && request.status < 400) {
            
           console.log("show data: ", data);
            
         } else {
            console.log('error')
        }

        // poemDisplay.jsonContent = request.response;
        console.log("show: ", data);
        
    
    request.send();
    console.log("Ending...");
    
}

}
/****************************************************************************************/
function getAcademicDepartments(){
// Call the fetch function passing the url of the API as a parameter
fetch('https://directory.aws.stthomas.edu/api.htm?requestType=getAcademicDepartments') .then(function(response) {
    console.log("Display data: ", data);

    var myData = JSON.stringify(data);
    console.log("Display data: ", myData);
    
    return response.json();

// Your code for handling the data you get from the API
})
.catch(function() {
// This is where you run code if the server returns any errors
console.log(error)
});
}


    // read data from demo.xml
//  function studentData() {

//     $.ajax({
//         type: "GET",
//         url: "./demo.xml",
//         // data: "data",
//         dataType: "xml",
//         success: function (response) {

//             // make sure the ul is empty
//             $("ul").children().remove();

//             $(response).find("info").each(function () {
//                 var _name = 'Name: ' + $(this).find('name').text();
//                 console.log(_name);

//                 var _position = 'Position: ' + $(this).find('position').text();

//                 var _major = 'Major: ' + $(this).find('major').text();

//                 // add content to the HTML          
//                 $("ul").append('<li>' + _name + '</li>');
//                 $("ul").append('<li>' + _position + '</li>');
//                 $("ul").append('<li>' + _major + '</li>');
//             });
//         }
//     });
// }
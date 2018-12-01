function openNav() {
    document.getElementById("websiteNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "260px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("websiteNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "10%";
    document.body.style.backgroundColor = "white";
}

// function uploadFile() {
//     // get the file as a string
//     var formData = new FormData($("#first")[0]);
//     var xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", transferComplete, false);
//     xhr.addEventListener("error", transferFailed, false);
//     xhr.addEventListener("abort", transferCanceled, false);
//     xhr.open('POST', 'upload.php', true);
//     xhr.send(formData); 		     // actually send the form data
//     function transferComplete(evt) {     // stylized upload complete
//         $("#progress").css("width", "100%");
//         $("#progress").html("100%");
//     }
//     function transferFailed(evt) {
//         alert("An error occurred while transferring the file.");
//     }
//     function transferCanceled(evt) {
//         alert("The transfer has been canceled by the user.");
//     }
// }

// //single file
// var xhr = new XMLHttpRequest();
// // reference to the 1st file input field
// var theFile = $(":file")[0].files[0];
// var formData = new FormData();
// formData.append('images', theFile);

// //multiple files
// var allFiles = $(":file")[0].files;
// for (var i = 0; i < allFiles.length; i++) {
//     formData.append('images[]', allFiles[i]);
// }

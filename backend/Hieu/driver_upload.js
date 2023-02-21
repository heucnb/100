module.exports =  function(req, res, con , fs, path, get_data_file_manager,multer){

   
    // try {
    //   fs.renameSync('./static' + req.body.file_cu , './static' + req.body.file_moi);
    
    //   return  res.send("ok"); 
    // } catch (error) {
    //   return  res.send(error); 
    // }

  

   
    console.log(req);
//     var fileReader = new FileReader();
//     fileReader.readAsDataURL(req.body.file);
//     // nếu đọc file text
//     // fileReader.readAsText(file, "UTF-8");
// // quá trình đọc file
//     fileReader.onload = function(progressEvent) {
//         var data = fileReader.result;

//         // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
//         console.log(2222,data);
//         //

//         return  res.send("ok"); 
    
//     }

return  res.send("ok"); 
}
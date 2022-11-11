const express = require("express");
let babel = require('@babel/core');
const app = express();
const fs = require('fs');
const path = require('path');
function ghep_file(){
    const Folder = './static/fontend';
   
    var get_all_path_in_folder = function(srcDir) {
   
     var list =  fs.readdirSync(srcDir) ;
     let ket_qua = [] ;
     let ket_qua_end = [] ;
     var src;
     list.forEach(function(file) {
         src = srcDir + '/' + file;
     
         ket_qua.push(src);
         var stat = fs.statSync(src);
         if (stat && stat.isDirectory()) {
             // hàm đệ quy
             get_all_path_in_folder(src) ;
         } 
     });


      for (let index = 0 , len = ket_qua.length ; index < len ; index++) { 
          if (path.extname(ket_qua[index]) === ".js" && ket_qua[index] !== './static/fontend/index.js' ){
               ket_qua_end.push(ket_qua[index]);
          }

       }

       ket_qua_end.push('./static/fontend/index.js');
     return ket_qua_end;
 }



 let all_path_js = get_all_path_in_folder(Folder) ;
  
    var fileData = [];

     
    for (let index = 0,  len = all_path_js.length; index <len ; index++) {
         // đọc data các file 
    
        fileData.push(fs.readFileSync(all_path_js[index] , 'utf8'));
   }

  

     
      var file = "";
      for (let index = 0; index < fileData.length; index++) {
           file = file + fileData[index];   
      }


      fs.writeFile('./static/index_ghep_file.js', file, { flag: 'w+' }, err => {});
    console.log('ok');
    
    // convert string jsx của react thành javascript với babel

             

               // babel.transform(
               //      file,
               //      {
               //      babelrc: true,
               //      filename: '.babelrc'
               //      },
               //      function(err, result) {
               //      fs.writeFile('./static/index_ghep_file.js', result.code, { flag: 'w+' }, err => {});
                    
               //      }
               // )
               
               
};
ghep_file();

app.listen(7000, () => console.log("Khi có sự thay đổi ở fontend sẽ ghép các file lại thành file index_ghep_file.js----" + 7000));

// chạy command line trong node js
//------
// const { exec } = require("child_process");

// exec("./node_modules/.bin/babel ./static/index_ghep_file.js > ./static/index_product_babel.js", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
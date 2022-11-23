// đối với file css
//tailwind
const { exec } = require("child_process");

exec("npx tailwindcss -i ./src/tailwind.css -o ./static/fontend/style.css", (error) => {
    if (error) { console.log(`error: ${error.message}`); return; }
  
});



const express = require("express");

const app = express();
const fs = require('fs');
const path = require('path');
function ma_hoa(path_file){
 let data_text =   fs.readFileSync(path_file , 'utf8') ;
 // lấy tên tất cả các function trong file cần mã hoá cho vào mảng
   let array_name_fuction = [];
   data_text.replace(/function\s*[a-zA-Z0-9_]*_[a-zA-Z0-9_]*\s*\(/gi, function (x) {
  let   name_fuction = `${x.slice(8,-1).trim()}`;
    array_name_fuction.push(name_fuction);

    

    return ;

}); 





console.log(array_name_fuction);

//  
let string_regex = "" ;
// nếu mã hoá từ file chưa babel thì
//  array_name_fuction.map((i, index)=>{string_regex = string_regex + '\\<\\s*'+i +'|' + ',\\s*' + i + '\\s*\\)' +'|' }) ;
//nếu mã hoá từ file đã babel thì
 array_name_fuction.map((i, index)=>{string_regex = string_regex + 'React\\.createElement\\('+i +'|' + i + '\\s*\\('+ '|' + ',\\s*' + i + '\\s*\\)' +'|' }) ;
var re = new RegExp(string_regex.slice(0,-1),"gi");
console.log(re);

                    let text_hoan_thanh =   data_text.replace(re, function (x) {

                        let name_function_after_replace ;
                    // nếu mã hoá từ file chưa babel thì        
                    // if (`${x.slice(0,1)}`==='<') {

                    //     let name_fuction = `${x.slice(1).trim()}` ;
                    //     let code_number_name_fuction = [];
                    //     let len = name_fuction.length;
                    //     for (let index = 0; index < len; index++) {
                        
                        
                    //         if ((name_fuction.charCodeAt(index)+3>= 65 && name_fuction.charCodeAt(index)+3<=90)||(name_fuction.charCodeAt(index)+3>= 97 && name_fuction.charCodeAt(index)+3<=122)) {
                    //             code_number_name_fuction[index] = name_fuction.charCodeAt(index) + 3;
                    //         }else{
                        
                    //             code_number_name_fuction[index] = name_fuction.charCodeAt(index) ;
                    //         }
                        
                            
                    //     }
                        
                        
                        
                    //     name_function_after_replace = '<' + String.fromCharCode.apply(null, code_number_name_fuction) ;
                        
                    // }

                    //nếu mã hoá từ file đã babel thì
                  
                    if (`${x.slice(0,20)}`==='React.createElement(') {

                        let name_fuction = `${x.slice(20)}` ;
                     
                        let code_number_name_fuction = [];
                        let len = name_fuction.length;
                        for (let index = 0; index < len; index++) {
                        
                        
                            if ((name_fuction.charCodeAt(index)+3>= 65 && name_fuction.charCodeAt(index)+3<=90)||(name_fuction.charCodeAt(index)+3>= 97 && name_fuction.charCodeAt(index)+3<=122)) {
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) + 3;
                            }else{
                        
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) ;
                            }
                        
                            
                        }
                        
                        
                        
                        name_function_after_replace = 'React.createElement(' + String.fromCharCode.apply(null, code_number_name_fuction) ;
                        
                    }
                    else if (`${x.slice(0,1)}`===',') {

                             let name_fuction = `${x.slice(1,-1).trim()}` ;
                        let code_number_name_fuction = [];
                        let len = name_fuction.length;
                        for (let index = 0; index < len; index++) {
                        
                        
                            if ((name_fuction.charCodeAt(index)+3>= 65 && name_fuction.charCodeAt(index)+3<=90)||(name_fuction.charCodeAt(index)+3>= 97 && name_fuction.charCodeAt(index)+3<=122)) {
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) + 3;
                            }else{
                        
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) ;
                            }
                        
                            
                        }
                        
                        
                        
                        name_function_after_replace = ',' + String.fromCharCode.apply(null, code_number_name_fuction) + ')' ;



                    }
                    else {

                        let name_fuction = `${x.slice(0,-1).trim()}` ;
                        let code_number_name_fuction = [];
                        let len = name_fuction.length;
                        for (let index = 0; index < len; index++) {
                        
                        
                            if ((name_fuction.charCodeAt(index)+3>= 65 && name_fuction.charCodeAt(index)+3<=90)||(name_fuction.charCodeAt(index)+3>= 97 && name_fuction.charCodeAt(index)+3<=122)) {
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) + 3;
                            }else{
                        
                                code_number_name_fuction[index] = name_fuction.charCodeAt(index) ;
                            }
                        
                            
                        }
                        
                        
                        
                        name_function_after_replace = String.fromCharCode.apply(null, code_number_name_fuction)+ '(' ;
                        
                    }
                    


                    return name_function_after_replace;

                    })


  

 return text_hoan_thanh ;
               
};

let text_ma_hoa_xong = ma_hoa('./static/index_ghep_file.js');

//minify file  tiếp----------------------------------------------------------------------------
// var UglifyJS = require("uglify-js");
// var obj_minify = UglifyJS.minify(text_ma_hoa_xong);
// console.log(obj_minify);
// // sau đó xoá console.log bằng
// let text_remove_log = obj_minify.code.replace(/console\.log\(([^)]|\n)*\)(;|,)*/g, "");

// console.log(text_remove_log);

// fs.writeFile('./static/ma_hoa_xong.js', text_remove_log , { flag: 'w+' }, err => { console.log(err);});

fs.writeFile('./static/ma_hoa_xong.js', text_ma_hoa_xong , { flag: 'w+' }, err => { console.log(err);});

//sau khi chạy ma_hoa() xong thì các hàm ta viết sẽ bị đổi tên khó hiểu được
// sau đó convert JSX thanhf Javascript bằng https://babeljs.io/
// sau đó ta minifier bằng UglifyJS 3: Online JavaScript minifier
// sau đó xoá console.log bằng
// console\.log\(([^)]|\n)*\)(;|,)*
// điều kiện là đã minifile bằng UglifyJS. phải minifile mới xoá console.log đúng được
// trong console.log không được chứa hàm VD console.log(ham()); sẽ không xoá được
// nó tìm thấy cả console.log trong comment nên đôi khi số lượng console.log tìm thấy trong file gốc lớn hơn trong file minifier
// sau đó bảo mật bằng https://javascriptobfuscator.com/Javascript-Obfuscator.aspx


//----------------------------------------------------------------------------------------------------------------

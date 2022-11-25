
// đối với file css
//tailwind
const { exec } = require("child_process");

exec("npx tailwindcss -i ./src/tailwind.css -o ./static/fontend/style.css", (error) => {
    if (error) { console.log(`error: ${error.message}`); return; }
  
});







const fs = require('fs');

function ma_hoa_bien(path_file){
 let data_text =   fs.readFileSync(path_file , 'utf8') ;

 // lấy tên tất cả các function trong file cần mã hoá cho vào mảng
   let array_name_variable = [];
   data_text.replace(/(var\s+[a-zA-Z0-9_]*_[a-zA-Z0-9_]*(\s|;))|(let\s+[a-zA-Z0-9_]*_[a-zA-Z0-9_]*(\s|;))|(const\s+[a-zA-Z0-9_]*_[a-zA-Z0-9_]*(\s|;))|(function\s+[a-zA-Z0-9_]*_[a-zA-Z0-9_]*\s*\()/g, function (x) {
   
    let   name_variable = x.slice(0,-1).split(/var|let|const|function/)[1].trim();
 
  array_name_variable.push(name_variable);
    return ;

}); 





// đầu tiên phải thay thế các biến hoặc fuction là tên_biến( bằng tên_biến( . thêm dấu cách
// vì khi 2 function hoặc biến viết liền nhau vd: function_1(function_2,
// thì khi dùng hàm replace điểm bắt đầu tìm kiếm tiếp theo là function_2, nếu trong regex ta tìm (function_2, sẽ không thấy
// do vậy ở đây ta phải thêm dấu cách trước.
let string_regex_1 = "" ;
array_name_variable.map(( i, index )=>{  string_regex_1 = string_regex_1 + i + '\\(' + '|'

  })
  var re_1 = new RegExp(string_regex_1.slice(0,-1),'g');


let data_text_1 = data_text.replace(re_1, function (x) {
   
return  x + ' ' ; ;
    
});



let string_regex = "" ;

array_name_variable.map((i, index)=>{string_regex = string_regex + '(\\s|,|\\(|;|\\+|-|\\*|/|\\.|\\{|\\[|&|\\||>|<|!|:|\\n)' + i + '(\\s|,|\\)|;|\\+|-|\\*|/|\\.|\\}|\\]|\\[|&|\\||>|<|!|:|\\n|\\()' + '|'  }) ;
var re = new RegExp(string_regex.slice(0,-1),'g');




let text_hoan_thanh =   data_text_1.replace(re, function (x) {
  
    let truoc_x = x.slice(0,1) ;
    let sau_x = x.slice(-1) ;
    let name_function_after_replace ;
  
    let name_variable = `${x.slice(1,-1)}` ;
          
    let code_number_name_variable = [];
    let len = name_variable.length;
    for (let index = 0; index < len; index++) {
    
    
        if ((name_variable.charCodeAt(index)+3>= 65 && name_variable.charCodeAt(index)+3<=90)||(name_variable.charCodeAt(index)+3>= 97 && name_variable.charCodeAt(index)+3<=122)) {
            code_number_name_variable[index] = name_variable.charCodeAt(index) + 3;
        }else{
    
            code_number_name_variable[index] = name_variable.charCodeAt(index) ;
        }
    
        
    }

    name_function_after_replace =  String.fromCharCode.apply(null, code_number_name_variable) ;
   
   return  truoc_x +  name_function_after_replace  + sau_x ;
})






return text_hoan_thanh ;

}



 let text_ma_hoa_xong = ma_hoa_bien('./static/index_ghep_file.js');

 // sau đó xoá console.log bằng
let text_remove_log = text_ma_hoa_xong.replace(/console\.log\(([^)]|\n)*\)\s*(;|,)*/g, "");



 
//minify file  tiếp----------------------------------------------------------------------------
var UglifyJS = require("uglify-js");
var obj_minify = UglifyJS.minify(text_remove_log);

fs.writeFile('./static/ma_hoa_xong.js', obj_minify.code , { flag: 'w+' }, err => { console.log(err);});
console.log('ok----------------');




//sau khi chạy ma_hoa() xong thì các hàm ta viết sẽ bị đổi tên khó hiểu được
// sau đó convert JSX thanhf Javascript bằng https://babeljs.io/
// sau đó ta minifier bằng UglifyJS 3: Online JavaScript minifier
// sau đó xoá console.log bằng
// console\.log\(([^)]|\n)*\)(;|,)*
// trong console.log không được chứa hàm VD console.log(ham()); hoặc trong đó enter xuống dòng sẽ không xoá được
// điều kiện là đã minifile bằng UglifyJS. 
// nó tìm thấy cả console.log trong comment nên đôi khi số lượng console.log tìm thấy trong file gốc lớn hơn trong file minifier
// sau đó bảo mật bằng https://javascriptobfuscator.com/Javascript-Obfuscator.aspx

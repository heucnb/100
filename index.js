const express = require("express");

var fs = require("fs");

// lưu file index.html vào ram
var index_html =  fs.readFileSync('./'+ '/' + 'index.html', 'utf8') ;

const path = require('path');

// Với việc sử dụng .env : Giấu các thông tin bí mật (username, password) trong file .env, không được commit thông qua git thông thường. Tận dụng để chuyển qua lại giữa các môi trường ứng với mục đích sử dụng khác nhau.
const dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");
var con = mysql.createConnection({ host: process.env.host, user: process.env.user, password:process.env.password, database: process.env.database, }); con.connect(function (err) { if (err) { console.log("Error connecting to Db"); return; } console.log("Connection mysql established"); });

const app = express();
const port = process.env.port;
//vd: truy cập file /static/product_index.js trên url gõ localhost/product_index.js





app.use( function (req, res, next) {

  if (req.query.home === "true") {

    res.write(index_html); 
    return res.end();
   
    
  }
// phải dùng next() ở đây vì sau khi trả về trang index_html 
// trong trang index_html có code lại truy cập đến server  rồi vào  app.use ở đây trước 
// tại đây không có next nó sẽ không sang được app khác
  next() ;
      
});





var options = {
  etag: true,
  redirect: true,
  setHeaders: function (res, _path, stat) {

    // _path là các string src có trong file index.html mà chưa bị cache được brower gửi lên sever để lấy dữ liệu
    // _path.includes('index_ghep_file.js')  kiểm tra trong string _path có chứa string 'index_ghep_file.js' nếu có trả về true
    // max-age tính bằng giây  604800 là 1 tuần
    res.set({

        'Cache-Control' :  (_path.includes('index_ghep_file.js')||_path.includes('styles.css')||_path.includes('/excel/file') ) ? 'no-store' : 'public, max-age=604800'
      });
  }
}

app.use(express.static((__dirname + "/static") , options   )  );




app.use(express.urlencoded({extended: true }));
// nhận body post từ axios phải dùng app.use(express.json());
//  để gửi data dữ liệu lớn lên server phải dùng post  .   
// dùng get giới hạn dữ liệu gửi đi
app.use(express.json());



app.get('/excel/file',function(req,res){

  if (req.query.home === "true") {

   
    res.send(index_html); 
    
  } else {

    const Folder = './static/excel/file';
    let file_name = [];
    fs.readdirSync(Folder).forEach(file => { 
      file_name.push(file)
    });
  
    return  res.send(file_name); 
  
  }
  
  
});

app.post('/excel/save',function(req,res){


if (req.query.home === "true") {
  res.send(index_html); 
} else {

  let data = req.body.a ;

 


 fs.writeFile(`./static/excel/file/${data.file_name}.json`, JSON.stringify(data), (err) => {
   if (err) throw err;
  
});

 return  res.send("ok"); 
  
}


 
});


app.get('/hh.html',function(req,res){
  const data = fs.readFileSync('./static/hh.html', 'utf8');
 
  res.write(data); 
  return res.end();
  
});



app.get('/file.html',function(req,res){
 
  const data = fs.readFileSync('./file.html', 'utf8');
  res.write(data); 
  return res.end();

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // readdirSync(Folder)  : đọc Folder sẽ được tên các file
    // tao array Url vào [] file_name
    const Folder = './backend';
    let file_name = "";
    fs.readdirSync(Folder).forEach(file => { 
     if (path.extname(file) == ""){ fs.readdirSync(Folder + "/" + file ).forEach(file_con => { file_name  =   file_name + "," +"/" + file + "/" + file_con.slice(0,file_con.length - 3) ;}) };
     if (path.extname(file) == ".js"){ file_name  =   file_name + "," +"/" + file.slice(0, file.length - 3) };
    });
    file_name = file_name.split(",");
    file_name = file_name.slice(1);
let model = [];

//  model[index] là fuction khớp với file_name[index]    
// vd: model[index]  là  function (req, res, con) { return  res.send(req.body["id"].toString()); }
// vd: app.all(  "/decrement"  , function (req, res) {    model[index](req, res, con); }); 

// vd: http://localhost:8000/Dem/increment
for (let index = 0; index < file_name.length; index++) {
  console.log(file_name[index]);

 model.push( require("./backend" + file_name[index] + ".js"));

 app.all(file_name[index], function (req, res ) {  model[index](req, res, con , fs, path) });

}




app.use( function (req, res) {

  console.log(req.path);
  let string_path = req.path ;
  // lấy string đầu tiên có / và đừng sau là bất kì ký tự gì
 let path_match =  string_path.match(/\/.*/) ;
 console.log(path_match[0]);
      if (string_path === path_match[0]) {
        return  res.send(index_html); 
        
      }

      
});


// http://localhost:8000
app.listen(port, () => console.log("Backend server live on " + port));

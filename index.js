const jwt = require('jsonwebtoken');
const express = require("express");
var events = require('events');
var em = new events.EventEmitter();
var fs = require("fs");
const busboy = require('busboy');

function get_all_path_in_folder(folder) {

  let ket_qua = [] ;
  // let ket_qua_end = [] ;
            function get_all_path_in_folder_run(srcDir) {
       
            var list =  fs.readdirSync(srcDir) ;
       
            var src;
            list.forEach(function(file) {
                 src = srcDir + '/' + file;
            
            
                 var stat = fs.statSync(src);
                 if (stat && stat.isDirectory()) {
                 // hàm đệ quy
           
                 get_all_path_in_folder_run(src) ;
                 } else{
       
                 ket_qua.push(src);
                 }
            });
       
            return ket_qua ;
       
       }

       return get_all_path_in_folder_run(folder)

  
 }

   function get_data_file_manager( _path) {

   // chú ý nếu ta dùng hàm bất đòng bộ ở đây thì   get_data_file_manager là hàm bất đồng bộ 
   // hàm bất đồng bộ thì giá trị trả về phải là 1 Promise thì khi dùng làm con của hàm khác mới lấy giá trị trả về được
   // ***********************************--------- hàm bất đồng bộ này sau đó ta dùng làm con trong các hàm khác thì chỉ có thể trả về qua await được thôi.
           return new Promise(function(resolve, reject) {
              fs.lstat('./static'+  _path, (err, stats) => {

                        
                if(err)
                reject(console.log("lỗi", err)) ;
              
              
                // nếu path là thư mục thì chạy
                if (stats.isDirectory() === true) {
              
                  let array_file = [];
                  let array_name_file = fs.readdirSync('./static'+  _path);
                
              console.log( 'Hieu/driver' ,  array_name_file);
                  array_name_file.map(file => {
              
                    let stats = fs.statSync('./static'+  _path + '/' + file);
                          if (stats.isDirectory() !== true) {
                            let size = stats.size ;
                            let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
                          array_file.push([file, date,   new Intl.NumberFormat('en-IN').format( size ) + ' KB']); 
              
                          }
                          if (stats.isDirectory() === true) {
                            let size = stats.size ;
                            let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
                          array_file.push([file, date, ""]); 
              
                          }
                    
                  });

                  console.log( 'Hieu/driver' ,  array_file);
              
                  // array_file trả về quy định array_file[index][2] = "" là folder. khác "" là file

                  resolve(array_file);
                
                  
                }


          });

            
            });
   
  
  

  
}


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
let refreshTokens = [] ;
const token_secret = process.env.TOKEN_SECRET;
const refresh_secret = process.env.REFRESH_TOKEN_SECRET;
const verifyToken = (req, res, next) => {
  const token =req.body.token ;
  let refreshToken = req.body.refreshToken ;
console.log(99999, token);
  if (token === undefined) {
    return  res.send('Bạn phải đăng nhập lại'); 
  }
  try {
    jwt.verify(token, token_secret);
    return next();
    
  } catch (err) {
    // kiểm tra refresh token
                                try {
                                  jwt.verify(refreshToken, refresh_secret);
                                  return next();
                                  
                                } catch (error) {
                                  
                                  return  res.send('Có lỗi, Bạn phải đăng nhập lại'); 
                                  
                                }
  
  }
 
};


// app.use( function (req, res, next) {

//   if (req.query.home === "true") {

//     res.write(index_html); 
//     return res.end();
   
    
//   }
// // phải dùng next() ở đây vì sau khi trả về trang index_html 
// // trong trang index_html có code lại truy cập đến server  rồi vào  app.use ở đây trước 
// // tại đây không có next nó sẽ không sang được app khác
//   next() ;
      
// });






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

//vd: truy cập file /static/product_index.js trên url gõ localhost/product_index.js

app.use('/static', express.static((__dirname + "/static") , options   )  );





// nhận body post từ axios phải dùng app.use(express.json());
//  để gửi data dữ liệu lớn lên server phải dùng post  .   
// dùng get giới hạn dữ liệu gửi đi


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


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


app.post('/login',function(req,res){
console.log( req.body.name, req.body.password );
// kiểm tra trong data login có
//gửi về token
const token = jwt.sign({name: req.body.name , quyen : 'bt' ,  }, token_secret , { expiresIn: '1800s' });
const refreshToken = jwt.sign({name: req.body.name , quyen : 'bt' ,  } , refresh_secret , { expiresIn: '180000s'})
refreshTokens.push(refreshToken) ;
  res.write([token, refreshToken]); 
  return res.end();
  
});

app.post('/truy_van', verifyToken ,function(req,res){
  console.log( "token phù hợp" );
  
   
    res.write('token phù hợp'); 
    return res.end();
    
  });


app.get('/hh',verifyToken,function(req,res){
  console.log('--------verifyToken------phù hợp');
  const data = fs.readFileSync('./static/hh.html', 'utf8');
 
  res.write(data); 
  return res.end();
  
});


app.get('/test1',function(req,res){

 
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
  return res.end();



 
  
});
app.get('/gobal',function(req,res){

  em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
    res.write(data); 
    return res.end();
});

  // setInterval(( )=>{ 
  //   console.log(xxx);
  //   if (xxx === true) {
  //   res.write('333333333333333333'); 
  //   return res.end();
    
  //  }  }, 1000);
 
 
  
});
app.get('/google',function(req,res){
  console.log('+++++++++++++++++++++++++++++++++');
  console.log(req);
  const data = 'ok';
 
  res.write(data); 
  return res.end();
  
});


//---------------------------------------------------------------------
app.post('/profile_chunk',  function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 
  const bb = busboy({ headers: req.headers });
 let saveTo ;
 let folder ;
  bb.on('file', (name, file, info) => {
    console.log('tai------------------file');
     folder = './static/'+req.query.save +'/';
     saveTo = folder + req.query.name_uniqueId ;
    let stream = fs.createWriteStream(saveTo, {flags:'a'});
      file.pipe(stream);
   
  });
  bb.on('close', () => {
   
    if (req.query.part === req.query.part_max) {
      // nếu client post phần cuối cùng của file thì đổi tên file
      let list =  fs.readdirSync(folder) ;
      let name = req.query.name ;
      if (list.indexOf(name)===-1) {
        fs.renameSync(saveTo, folder + name);  
        
      }else{
        let name_change ;
          let index ;
              for (index = 1 ; index < 10000 ; index++) { 
          
                name_change =  index  +'_' + name ;
                if (list.indexOf(name_change)===-1) {
                  fs.renameSync(saveTo , folder + name_change);
                
                    break ;
                }
    
            }

      }

   
      
    }
    



     res.send("ok"); 
    
  });

  req.pipe(bb);
  
  
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // readdirSync(Folder)  : đọc Folder sẽ được tên các file
    // tao array Url vào [] file_name
    const Folder = './backend';
    let array_file_name = get_all_path_in_folder(Folder);
  
let model = [];
let array_url = [] ;
//  model[index] là fuction được lấy từ path  array_file_name[index]    
// vd: model[index]  là  function (req, res, con) { return  res.send(req.body["id"].toString()); }
// vd: app.all(  "/decrement"  , function (req, res) {    model[index](req, res, con); }); 

// vd: http://localhost:8000/Dem/increment
for (let index = 0; index < array_file_name.length; index++) {
 
  array_url[index] = array_file_name[index].slice(9,-3)
  //-------------***------------------------------------
// require copy string từ đường dẫn path tới file này và chuyển nó thành fuction
// chú ý require khi chuyển thành fuction không covert text giống biến toàn cục thành biến toàn cục để sử dụng. Mọi text không khai báo let, var , const , fuction sẽ được hiểu là parameters
// chú ý eval khi chuyển thành fuction sẽ covert text giống biến toàn cục thành biến toàn cục để sử dụng => khác biệt
// do đó ta phải truyển argument từ file này tới fuction mà require tạo ra
// khi truyền argument kích thước lớn cũng không ảnh hưởng tới hiệu suất. ** đã test thử thậm chí còn thấy nhanh hơn truyền 1 giá trị cố định***  vì nó chỉ truyền tham chiếu
 model.push( require( array_file_name[index] ));
 console.log(111,array_url[index]);
 app.all(array_url[index], function (req, res ) {

  // cho phép truy cập host từ trang web khác
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  
  model[index](req, res, con , fs, path, get_data_file_manager) });

}

app.get('/test100',function(req,res){
  console.time();
  let i = 1;
while (i < 10000000000) {

  i++;
}
console.timeEnd();
  return  res.send('2222222222'); 
});

app.get('/',function(req,res){
  return  res.send(index_html); 
});


// app.use( function (req, res) {

 
//   console.log(222,req.path);
//   let string_path = req.path ;
//   let result = string_path.indexOf("/static/");

//       if (result === -1) {
//         console.log('---------',req.path);
//         return  res.send(index_html); 
    
//       }


      
// });


// http://localhost:8000
app.listen(port, () => console.log("Backend server live on " + port));

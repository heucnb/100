module.exports =  function(req,res ,con , fs, path){
    // viêt hàm copy thư mục theo đẹ quy
    var copy = function(srcDir, dstDir) {
     
    
        var list =  fs.readdirSync(srcDir) ;
   
        var src, dst;
        list.forEach(function(file) {
            src = srcDir + '/' + file;
          
            dst = dstDir + '/'  + file;
            //console.log(src);
            var stat = fs.statSync(src);
            if (stat && stat.isDirectory()) {
                try {
                    console.log('creating dir: ' + dst);
                    fs.mkdirSync(dst);
                } catch(e) {
                    console.log('directory already exists: ' + dst);
                }
                // hàm đệ quy
               copy(src, dst) ;
            } else {
                try {
                    console.log('copying file: ' + dst);
                    //fs.createReadStream(src).pipe(fs.createWriteStream(dst));
                    fs.writeFileSync(dst, fs.readFileSync(src));
                } catch(e) {
                    console.log('could\'t copy file: ' + dst);
                }
              
            }
        });
        return "ok";
    }




    // kiểm tra xem người dùng copy file hay thư mục
    var stat_0 = fs.statSync('./static'+ req.body.file[0]);

    let folder_name_begin = path.basename('./static' + req.body.file[0]) ;
if (stat_0.isDirectory()) {
     // nếu trong thư đích không có folder cần copy thì tạo folder gốc cần copy
     // ngược lại tạo folder gốc cần copy với tên là tên folder gốc cần copy với thời gian tạo
    
       // tạo folder gốc cần copy
       try {
        fs.mkdirSync('./static' + req.body.file[1] + '/' + folder_name_begin );
       } catch (error) {
        return res.send( "error" )
       }
      

    return  res.send(  copy('./static' + req.body.file[0], './static' + req.body.file[1] + '/' + folder_name_begin )  )  ;
   


    
} else {

    fs.writeFileSync( './static' + req.body.file[1] + '/' + folder_name_begin  , fs.readFileSync( './static' + req.body.file[0] ));
    res.send("ok"); 

}
   

  
 
   
 
 
  }
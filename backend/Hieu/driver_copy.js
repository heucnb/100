module.exports = async function(req,res ,con , fs, path, get_data_file_manager ){
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


    let array_path_copy = req.body.file[0] ;
    let len = array_path_copy.length ;

     for (let index = 0 ; index < len ; index++) { 

             //----- đoạn code dưới đây copy_paste 1 file hay 1 thư mục   
                 // kiểm tra xem người dùng copy file hay thư mục
            var stat_0 = fs.statSync('./static'+ array_path_copy[index]);
            // lấy tên file
            let folder_name_begin = path.basename('./static' + array_path_copy[index]) ;

                    
                if (stat_0.isDirectory()) {
                    // nếu trong thư đích không có folder cần copy thì tạo folder gốc cần copy
                    // ngược lại tạo folder gốc cần copy với tên là tên folder gốc cần copy với thời gian tạo
                    
                    // tạo folder gốc cần copy
                    try {

                        // list là array  folder name and file name của thư mục ta cần paste vào
                        let path_paste = './static' + '/' + req.body.file[1] ;
                        let list =  fs.readdirSync(path_paste) ;
                        let name_folder_paste;

                            if (list.indexOf(folder_name_begin)===-1) {
                             // nếu ở chỗ paste không trùng tên với folder ta copy thì paste luôn không cần đổi tên       
                                fs.mkdirSync(path_paste + '/' + folder_name_begin );
                                copy('./static' + array_path_copy[index], './static' + req.body.file[1] + '/' + folder_name_begin )   ;
                             
                                
                            } else {

                                 // nếu ở chỗ paste  trùng tên với folder ta copy thì đổi tên sau đó paste

                                        for (let index = 1  ; index < 10000 ; index++) { 
                            
                                            name_folder_paste = 'Copy ' +  index  +' ' + folder_name_begin ;
                                            if (list.indexOf(name_folder_paste)===-1) {
                                
                                                break ;
                                            }
                                
                                        }
                                
                                        fs.mkdirSync(path_paste + '/' + name_folder_paste );
                                        copy('./static' + array_path_copy[index], './static' + req.body.file[1] + '/' + name_folder_paste ) 
                
                                     
                                
                            }

                    
                    } catch (error) {
                        console.log(error);

                        return res.send( "error" )
                    }
                    

                


                    
                } else {
                // nếu copy-paste file thì chạy code dưới đây

                            // req.body.file[1] là string đến folder ta cần paste vào không chứa './static'
                            // path_paste là string đến folder ta cần paste vào
                                let path_paste = './static' + '/' + req.body.file[1] ;
                                let list =  fs.readdirSync(path_paste) ;
                                
                                let name_file_paste;
                                if (list.indexOf(folder_name_begin)===-1) {

                                    fs.writeFileSync( path_paste +'/' + folder_name_begin , fs.readFileSync( './static' + array_path_copy[index] ));
                                  
                    

                                }
                                else{


                                                for (let index = 1  ; index < 10000 ; index++) { 
                                        
                                                    name_file_paste = 'Copy ' +  index  +' ' + folder_name_begin ;
                                                    if (list.indexOf(name_file_paste)===-1) {
                                
                                                        break ;
                                                    }
                                
                                                }


                                                fs.writeFileSync( path_paste +'/' + name_file_paste , fs.readFileSync( './static' + array_path_copy[index] ));
                                            
                                

                                }

                            

                            
                    


                }
                

  




      }


   
 
   // sau khi paste trên sever xong thì gửi data cho client

      return  res.send(["ok", await get_data_file_manager(req.body.file[1])]); 
 
 
  }
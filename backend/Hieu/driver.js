module.exports =  function(req,res ,con , fs){

  
    //------------------------------------------------------------------------------------------------------------
    if (req.body.folder===undefined) {
      let array_file = [];
      let array_name_file = fs.readdirSync('./static');
// dùng hàm bất đồng bộ như sau         
  //     array_name_file.map(file => {
  //     fs.stat('./static/'+ file ,  function(err, stats){ array_file.push([file, stats.mtime , stats.size ]); });
  //   });

 

  //   const intervalObj = setInterval(() => {
  //   if (array_file.length === array_name_file.length) {
  //     clearInterval(intervalObj);
  //     return  res.send( array_file); 
  //   }
  // }, 0);
  
// ta có thể  dùng hàm đồng bộ như sau
  array_name_file.map(file => {
    let stats = fs.statSync('./static/'+ file);
    if (stats.isDirectory() !== true) {
      let size = stats.size ;
      let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
    array_file.push([file, date,new Intl.NumberFormat('en-IN').format( size ) + ' KB']); 

    }
    if (stats.isDirectory() === true) {
     
      let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
    array_file.push([file, date,""]); 

    }
   
  });

  
    return  res.send( array_file); 
    }
  //--------------------------------------------------------------------------------------------------------------------------
  if (req.body.folder!==undefined) {
    let  _path = req.body.folder ;
console.log(_path);
fs.lstat('./static'+  _path, (err, stats) => {

  if(err)
      return console.log(err); //Handle error

  // nếu path là thư mục thì chạy
  if (stats.isDirectory() === true) {

    let array_file = [];
    let array_name_file = fs.readdirSync('./static'+  _path);
    array_name_file.map(file => {

      let stats = fs.statSync('./static'+  _path + '/' + file);
            if (stats.isDirectory() !== true) {
              let size = stats.size ;
              let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
            array_file.push([file, date,new Intl.NumberFormat('en-IN').format( size ) + ' KB']); 

            }
            if (stats.isDirectory() === true) {
              let size = stats.size ;
              let date =    Intl.DateTimeFormat('vi-VN', { month: '2-digit', day: '2-digit', year: 'numeric',  hour: '2-digit',  minute: '2-digit',  second: '2-digit' }).format( stats.mtime) ;
            array_file.push([file, date,""]); 

            }
      
    });

    
      return  res.send( array_file); 
    
  }
 
});


  

  }
  }
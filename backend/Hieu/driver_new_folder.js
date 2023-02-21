module.exports = async function(req,res ,con , fs, path, get_data_file_manager ){
    let path_to_new_folder ='./static'+ req.body.path_post ;
    function create_folder(fs, _path) {
      return  new Promise(function(resolve, reject) {
            fs.access(_path,fs.constants.F_OK, (error) => {
       
                // To check if the given directory 
                // already exists or not
                if (error) {
                            // If current directory does not exist
                            // then create it
                            fs.mkdir(_path, (error) => {
                                if (error) {
                                console.log(error);
                                } else {
                                    resolve("ok");
                           
                                }
                            });
                } else {
                    resolve("Given Directory already exists !!");
                }
              });
          
    
    
        })
        
    }
    
   
  let x =   await create_folder(fs , path_to_new_folder ) ;

 if (x === 'ok') {
    return  res.send(["ok", await get_data_file_manager(req.body.path_begin)]);    
 } else {
    return res.send( "error" )
 }
     
    
 
  }
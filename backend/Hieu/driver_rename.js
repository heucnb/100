module.exports =  function(req,res ,con , fs){

   
      try {
        fs.renameSync('./static' + req.body.file_cu , './static' + req.body.file_moi);
      
        return  res.send("ok"); 
      } catch (error) {
        return  res.send(error); 
      }
  
    
  
 
 
  }
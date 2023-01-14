module.exports =  function(req,res ,con , fs){


      try {
        fs.renameSync('./static' + req.body.file, './Trash' + '/'+ req.body.name_file);
      
        return  res.send("ok"); 
      } catch (error) {
        return  res.send(error); 
      }
  
    
  }
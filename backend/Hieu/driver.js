module.exports = async function(req,res ,con , fs, path, get_data_file_manager){
  
  // khởi tạo folder ="" thì fs.lstat trả về stats của static
  // => khởi tạo là post lên folder static lấy data về
  // sau đó ở client đã quy định nếu click vào folder thì mới post lên đây lấy data về
  // nếu click vào file thì lấy trực tiếp file về lúc trởi tạo app express bằng hàm express.static rồi
  let  path_to_folder = req.body.folder ;
 
  let data = await get_data_file_manager(path_to_folder) ; 
 
  return res.send( data )  ;

  }
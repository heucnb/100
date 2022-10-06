function path_name_test( path_name, string_test) {

    if ( path_name === string_test ||  path_name === ( string_test + "/") ) {
      return true ;
    }else{
  
      return false
    }
  
  
  }



// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
 // vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'


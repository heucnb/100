function path_name_test( path_name, string_test) {

    if ( path_name === string_test ||  path_name === ( string_test + "/") ) {
      return true ;
    }else{
  
      return false
    }
  
  
  }



// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
 // vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// điều kiện trong file html trong body phải có    <div id="convert_text_to_pixcel"></div>
//  function convert_text_to_pixcel(text) {
//   let _div = document.createElement('div');
//      _div.textContent = text ;
//      _div.setAttribute( 'style', 'display: inline;', );
//    let _root = document.getElementById("convert_text_to_pixcel") ;  
//    _root.appendChild(_div);
//    let _width = _root.children[ 0].getBoundingClientRect().width ;
//    _root.removeChild(_root.children[ 0]);
//    return _width ;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_text_to_pixcel(text, font_size) {

 
   return text.length*(font_size/2) ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function convert_file_name_to_type(file_name) {
  // (Math.max(0, file_name.lastIndexOf(".")) trả về 0 
  // thì (Math.max(0, file_name.lastIndexOf(".")) || Infinity  sẽ là 0 || Infinity 
  // do 0 Logical operators sẽ convert thành False nên False || Infinity  sẽ trả về Infinity
  // chú ý tên file là .sdgdf sẽ trả về "" do file_name.lastIndexOf(".") trả về 0
let extension =    file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  let array_type = [  "text/plain", 
                        "text/html" ,
                        " text/csv" ,
                       "text/pdf " ,
                        " video/mp4" ,
                         " video/mpeg" ,
                         "application/zip" ,
                         "application/msword" ,
                         " application/vnd.ms-excel" ,
                       
                         " image/jpg",
                          " image/png" ] ;
  let array_extension = [
  "text" ,
  "html" ,
  "csv" ,
  "pdf" ,
  "mp4" ,
  "mpeg" ,
  "zip" ,
  "doc" ,
  "xlsx" ,
  "jpg" ,

  "png" 
  
  ]
    // nếu  tìm thấy thì trả về  type phù hợp        
   for (let index = 0 , len = array_extension.length ; index < len ; index++) {  
    if (array_extension[index] === extension ) {
      return array_type[index] ;
      
    }

   }
 // nếu không tìm thấy thì trả về  "text/plain"
   return array_type[0] ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// trên Dom dùng onMouseOver để lắng nghe
function hover(event, object_style,object_style_leave, dom) { 
  

         Object.assign( dom.style, object_style) ;
     
         dom.onmouseleave = function (event) {
        
    
           Object.assign( dom.style,  object_style_leave  ) ; 
          };

    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

 
function _alert(componet_react) {
  function Alert() {

    return ( <div  style={  { position: 'absolute', padding: '1rem 1rem', top : '10%',  left : '30%', border: '1px solid transparent', borderRadius: '0.25rem',   backgroundColor: '#fff3cd', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}  } >
      <div> {componet_react} </div>
        <button  style={  {boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '0.25rem',  color: 'white', backgroundColor: '#0275d8',  border: '1px solid transparent' ,   marginLeft: '70%',  marginTop: 15, padding: 5, }  } onClick ={( )=>{   ReactDOM.unmountComponentAtNode( _div);  }} >Thoát</button>
        </div> 
    )
    
  }

  let _div = document.createElement("_div");
  document.getElementById("root").appendChild(_div);
  return   ReactDOM.render( <Alert />  ,  _div ) ;
   
}

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
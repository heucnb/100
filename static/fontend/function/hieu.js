
  function path_match(string) {
    if (string.slice(-1) === '/') {
      return string.slice(0,-1) ;
    }else
    {
      return string ;
    }
    
  }
    

// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
 // vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function select_icon_from_file_name( file_name) {
        

    extension =    file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  
    switch (extension) {
      case '':
        return  "/SVG/folder.svg" ;
        case 'jpg':
          return  "/SVG/file_image.svg" ;
    
          case 'png':
            return    "/SVG/file_image.svg" ;
        
            case 'git':
              return "/SVG/file_image.svg" ;
           
            case 'js':
              return  "/SVG/file_js.svg" ;
         
            case 'json':
              return   "/SVG/file_json.svg" ;
          
        default:
          return  "/SVG/file_document.svg" ;
    }
      
    
  
  
  
}
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
  
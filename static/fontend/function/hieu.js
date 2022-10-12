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
 function convert_text_to_pixcel(text) {
  let _div = document.createElement('div');
     _div.textContent = text ;
     _div.setAttribute( 'style', 'display: inline;', );
   let _root = document.getElementById("convert_text_to_pixcel") ;  
   _root.appendChild(_div);
   let _width = _root.children[ 0].getBoundingClientRect().width ;
   _root.removeChild(_root.children[ 0]);
   return _width ;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// trên Dom dùng onMouseOver để lắng nghe
function hover(event, object_style) { 
  // không dùng this bởi vì this không truyền vào Dom được vì truyền vào sẽ trở thành this của Dom
     hover.style_old_dom = {} ;
      // lặp qua các array key của object để tạo object mới
     Object.keys(object_style).map(( i, index )=>{  hover.style_old_dom [i] = event.target.style[i]  }) ;
 
         Object.assign(  event.target.style, object_style) ;
     
         event.target.onmouseout = function () { Object.assign(  event.target.style,  hover.style_old_dom  ) ; };
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

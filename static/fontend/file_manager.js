
async function file_manager( dom ) {

    function Content_mennu() {
    
    let css = {
    
      hover   : {   backgroundColor: '	#acac9a'  } , 
      leave   : {   backgroundColor: 'white'  } , 
      _row : {  width: '22%', overflow: 'hidden', whiteSpace: 'nowrap',    backgroundColor: 'inherit',  margin: '2px 5px 2px 2px', textAlign: 'start', fontSize: 16,  border: '0px solid #00A170 ',     },
        
    };
            
    let ref_Content_mennu = useRef(null) ;
               useEffect(() => {    
    
                                        let collection = ref_Content_mennu.current.children;
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////              
                                  for (let index = 0, len = collection.length; index < len; index++) {
    
                                    ref_Content_mennu.current.children[index].onmouseenter = function () {
    
                                      hover(event, css.hover, css.leave , ref_Content_mennu.current.children[index]) ;
    
                                      }
    
                                  }
    
                                  console.log( ref_Content_mennu.current.children[2]);
    
                     //------------------------------------------------------------------------------------------------             
                      // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                      // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                      ref_Content_mennu.current.children[2].onmousedown = function _rename() {
                       
                        let index = File_manager.ref_0_index ;
                     
                    
                        File_manager.ref_0.children[index].children[0].children[1].innerHTML = ` <div    style="  position:absolute;      background-color: azure; width: inherit; height: inherit ;   white-space: nowrap;    "> ${   File_manager.ref_0.children[index].children[0].children[1].textContent }  </div>`;
                      
                      let div_rename = File_manager.ref_0.children[index].children[0].children[1].children[0] ;
                     
                      div_rename.setAttribute("contenteditable", true) ;
                
                      // phải setTimeout ở đây vì đợi onblur ở File_manager chạy xong đã
                      setTimeout(() => {
                        let range = new Range();
                    // childNodes[0] lấy text trong div chú ý remove space
                    // ta có thể dùng textContent 
                      let len = div_rename.childNodes[0].length ;
                      range.setStart(div_rename.childNodes[0], 0);
    
                      range.setEnd(div_rename.childNodes[0], len);
                      document.getSelection().removeAllRanges();
                      document.getSelection().addRange(range);
    
                      div_rename.onblur = function () {
                      let text = div_rename.textContent ;
                      let parent = div_rename.parentElement ;
                      parent.innerHTML = text ;
                      File_manager.data[index -1][0] = text ;
                      console.log(File_manager.data);
                      // sau đó post lên server xử lý tiếp
    
    
    
    
    
    
    
                        }
    
    
                      }, 0);
                     
                    
                    
    
    
                        }
    
                    //---------------------------------------------------------------------------------------------------------------------    
    
    
                     // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                      // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                      ref_Content_mennu.current.children[3].onmousedown = function _detele() {
                      let index = File_manager.ref_0_index ;
                        File_manager._detele(index - 1);
                      }
    
    
                      //---------------------------------------------------------------------------------------------------------------------    
    
    
                     // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                      // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                      ref_Content_mennu.current.children[0].onmousedown = function _copy() {
                      let index = File_manager.ref_0_index ;
                        File_manager._copy(index - 1 );
                      }
    
    
    
    
    
    
    
                    }, []);
    
          return  (<div  ref = { ref_Content_mennu}  style={ {  padding: '2px 10px 2px 10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',}  } > 
    
          <div  > Copy  </div>
          <div  > Paste </div> 
          <div  > Rename </div> 
          <div  > Delete  </div> 
          </div> 
          ) ;
          }  ; 
    
    
    
    
    
    
    
    function  File_manager(props) {
    let change_width ;
    let vi_tri_change ;
    let [name_foder_and_file, set_state_1] =  useState( props.value.data );
    
    
    
    
    let [css, set_css] = useState(( )=>{  
    return {
         
         flex_container : { width: '100%',   display: "flex",  boxSizing: 'border-box' ,   backgroundColor: 'white', border: '1px solid #633517 ' },
         flex_item : {overflow: 'hidden', whiteSpace: 'nowrap',  margin: '2px 5px 2px 2px', textAlign: 'center', fontSize: 16,  border: '0px solid #00A170 ', padding: 2,  display: "flex",  alignItems: 'center'  },
         title : {  alignContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', whiteSpace: 'nowrap',   textAlign: 'start',  border: '0px solid #00A170 ', padding: 2,  display: "flex",   },
         icon : {  display: "flex",   marginRight: 2, alignItems: 'center',} , 
         select_file : {   width: '100%',} , 
        
         _row : {  width: '15%', overflow: 'hidden', whiteSpace: 'nowrap',    backgroundColor: 'inherit',  margin: '2px 5px 2px 2px', textAlign: 'start', fontSize: 16,  border: '0px solid #00A170 ',     },
        
         giai_thich_file   : {   position: 'absolute', top: 200, left: 300,  display: "flex",  backgroundColor: 'white',  } , 
        content_menu   : {   position: 'absolute', top: 200, left: 300,  display: "flex",  backgroundColor: 'white',  } , 
        hover   : {   backgroundColor: '	#acac9a'  } , 
        leave   : {   backgroundColor: 'white' , border: '0px solid white '  } , 
        max_width_size : (function () { let array_size = name_foder_and_file.map(( i, index )=>{ return i = i[2].length }); return Math.max(...array_size)*8+'px'; })(),
    
    
      };
    });
    
    
    let  x_mouse =  useRef(null) ;
    let y_mouse =  useRef(null) ;
      let ref_giai_thich_file =  useRef(null) ;
      let ref_content_menu =  useRef(null) ;
      let ref_0 =  useRef(null) ;
      let ref_driver =  useRef(null) ;
      let ref_bar =  useRef(null) ;
      let ref_bar_1 =  useRef(null) ;
      let ref_bar_2 =  useRef(null) ;
      let ref_bar_3 =  useRef(null) ;
      let ref_bar_4 =  useRef(null) ;
      let ref_bar_5 =  useRef(null) ;
      let ref_embed =  useRef(null) ;
      let path_cu =  useRef([""]) ;
      let ref_show_file =  useRef(null) ;
      let ref_copy =  useRef(null) ;
      File_manager._detele = function ( i ) {
        path_cu.current.push(name_foder_and_file[i][0])
        axios.post("/Hieu/driver_detele", { file : path_cu.current.join("/") }).then(function (response) { 
          console.log(response.data); 
    
          path_cu.current.splice(-1,1) ;
          console.log(path_cu.current);
          set_state_1( ( name_foder_and_file )=>{ 
          File_manager.data.splice(i, 1) ;
          let name_foder_and_file_update =  [].concat(File_manager.data);
         
          return name_foder_and_file_update ;} ) ;
    
        }) ;
    
       
    
       
      }
    
      File_manager._copy = function ( i ) {
      
        let name_file_copy = [name_foder_and_file[i][0] , name_foder_and_file[i][1] , name_foder_and_file[i][2] ];
        path_cu.current.push(name_file_copy[0]) ;
        let path_file_copy = path_cu.current.join("/") ;
        console.log(path_file_copy);
        path_cu.current.splice(-1,1) ;
        function Copy() {
    
    
              function paste_here() {
               
                let path_file_paste = path_cu.current.join("/") ;
                console.log(path_file_paste);
                axios.post("/Hieu/driver_copy", { file : [path_file_copy,  path_file_paste ] }).then(function (response) { 
    
    
                 if (response.data === "ok") {
                  set_state_1( ( name_foder_and_file )=>{ File_manager.data.push( name_file_copy ) ; let name_foder_and_file_update =  [].concat(File_manager.data); return name_foder_and_file_update ;} ) ;
    
                  ReactDOM.unmountComponentAtNode( ref_copy.current ); 
    
                  
                 } else {   
                    
                  _alert( <div  > Thư mục { path_file_paste } đã có folder trùng tên là:   <span  style={  {   color: 'crimson' }  } >  {name_foder_and_file[i][0]  } </span>   rồi  </div>) ;
                
             
    
              
                    }
    
                   
                 
                 
    
                }) ;
    
    
                
              }
    
          return ( <div  style={  {display: 'flex',boxSizing: 'border-box', position: 'relative', backgroundColor: 'blanchedalmond',  width: '100%',  border: '1px solid #633517 ' , justifyContent: 'space-between',  }  } >  
            
            <div  style={  { margin: 6, }  } > {  name_foder_and_file[i][0] }  </div> 
           <div style={  { margin: 6,  display: 'flex',}  } >  
    
                    <div  style={  { marginRight: 6, }  } > Canel  </div>
                    <div  onClick = {( event )=>{  paste_here() }} >  Paste here </div>
             </div>
            </div>
    
    
          )
          
        }
    
       ReactDOM.render( <Copy />  ,  ref_copy.current) ;
       
    
       
      }
    
    
     
          useEffect(() => {
          
          
         
            console.log(path_cu.current);
    
            File_manager.data = name_foder_and_file ;
            window.addEventListener("contextmenu", e => e.preventDefault());
    
          
           
            let myTimeout ;
            let kiem_tra_Content_mennu = false ;
            let index_truoc_do ;
           
            let collection = ref_0.current.children;
    ////////////////////////////////////////////////////////////////////////////////////////////////          
            collection[0].onmouseenter = function (event) {
              clearTimeout(myTimeout);
              ReactDOM.unmountComponentAtNode( ref_giai_thich_file.current); 
            }
    //////////////////////////////////////////////////////////////////////////////////////////////////        
            for (let index = 1, len = collection.length; index < len; index++) {
    
              
            //--------------------------------------------------------------------
            // khi hover vào dòng thì hiện hover_show_giai_thich_file
              collection[index].onmouseenter = function (event) {
                 x_mouse.current = event.clientX ;
                y_mouse.current = event.clientY ;
                console.log('--',  x_mouse.current, y_mouse.current);
                event.target.onmousemove = function (event) {
                  // event.preventDefault() ;
                   x_mouse.current = event.clientX ;
                  y_mouse.current = event.clientY ;
                }
                // kiem_tra_Content_mennu === true thì không cho  onmouseenter xảy ra ở tất cả các dòng
                if (kiem_tra_Content_mennu === false  ) {
            
                   
                          // khi hover ra khỏi xoá giải thích file
                        collection[index].onmouseleave = function (event) {
                          ReactDOM.unmountComponentAtNode( ref_giai_thich_file.current); 
                          clearTimeout(myTimeout);
                    
                           };

                     hover_show_giai_thich_file(index);
                
                }
                 
              }
    
             //-------------------------------------------------------------------------- 
          
             collection[index].onmousedown = function (event) {
    
            if (event.buttons === 1) {
             
                        
                            path_cu.current.push(name_foder_and_file[index-1][0]) ;
                         
                            
                     
                           // Ở backend ta đã thiết lập name_foder_and_file[index-1][2] ==="" là folder khác "" là file
                           // nếu là ấn vào folder thì chạy
                            if ( name_foder_and_file[index-1][2] ==="") {
                              console.log(  path_cu.current );
                              axios.post("/Hieu/driver", { folder : path_cu.current.join("/") }).then(function (response) { 
                                    
                                    let data = response.data ;
                                   
                                      
                                     
                                    set_state_1(data) ;
                                   
                               
                                    ReactDOM.render( < Path_to_folder   value = { ["Driver"].concat(path_cu.current.slice(1)).map(( i, index )=>{ return i = i+ " /" })  } />, ref_driver.current );
        
                                    function Path_to_folder(props) {
        
        
                                      function _back() {
                                        console.log(path_cu.current);
        
                                        if (path_cu.current.length === 1 && path_cu.current[0] === "" ) {
                                          return ;
                                        } else {
                                          // thay đổi mảng hiện tại bằng cách cát đi 1 phần tử ở vị trí cuối cùng -1
                                        path_cu.current.splice(-1,1) ;
                                     
                                          axios.post("/Hieu/driver", { folder :  path_cu.current.join("/") }).then(function (response) {
                                        
                                            set_state_1(response.data) ;
                                           
                                            ReactDOM.render( < Path_to_folder   value = {  ["Driver"].concat(path_cu.current.slice(1)).map(( i, index )=>{ return i = i+ " /" })   } />, ref_driver.current );
                                          })
        
                                          
                                        }
                                        
                                          }
        
        
        
                                      return ( <div style={{  display: "flex", alignItems: 'center',  }}   >  
                                        <img className={'w-4 h-[13px] ml-1 mr-1'}  src = "/SVG/back.svg"  onClick={(event)=>{ _back() }} />
                                       
                                        {
        
                                          props.value.map(( i, index )=>{  return <div  style={  { padding: 2,  }} onMouseEnter = { ( event)=>{ hover(event,css.hover, css.leave , ref_driver.current.children[0].children[index + 1]   )  }} >  {i} </div> })
        
                                        }
                                       
                                      </div>
                                      );
                                      
                                    }
        
                                   
                                  
                                  });
        
                 
                              
                            }
    
                            //   // nếu là file   thì chạy
                            if ( name_foder_and_file[index-1][2] !=="") {
    
                                  console.log(  path_cu.current );
                                    ReactDOM.render( <div  style={  {  position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0,  background: ' rgba(		0, 0, 0, 0.8)', zIndex: 2, }}  >
                                          <div className={'flex  items-center'}  >  
                                          <img className={'w-4 h-[13px] ml-2 mr-1 mt-1 '}  src = "/SVG/back_path_white.svg"  onClick={(event)=>{ path_cu.current.splice(-1,1) ;  ReactDOM.unmountComponentAtNode( ref_show_file.current );   }} />
                                    
                                          <img className={'w-4 mr-[4px]'} src = {select_icon_from_file_name(name_foder_and_file[index-1][0])} />
                                          <div className={'text-white  mt-1 '} > { name_foder_and_file[index-1][0] }  </div>
                                          </div>
                                          
                                          <div  ref = {  ref_embed } >   </div>
                                         
                                          </div>, ref_show_file.current );
                                      
                                     ref_embed.current.innerHTML = ` <embed type= ${ convert_file_name_to_type(name_foder_and_file[index-1][0])} src= ${ encodeURI(path_cu.current.join("/"))  }   style= '  width: 90%; height: 90%; top: 5%; left: 5%; background-color: white; position: fixed; z-index: 3;'  >`      
                              
                              
                            }
    
    
                           
                           
    
              } 
            if (event.buttons === 2) {
    
              collection[index].style.backgroundColor = css.hover.backgroundColor ;
              // xoá bỏ tô màu dòng trước đó
              if (index_truoc_do !== undefined) {
                  Object.assign( collection[index_truoc_do].style , css.leave ) ;
                
                }
              
              // xoá bỏ sự kiện onmouseleave ở dòng này
              if ( typeof collection[index].onmouseleave === "function") {
              
                collection[index].onmouseleave = null ; 
              }
              // tô màu dòng này
              Object.assign( collection[index].style ,{ backgroundColor: 'red' ,} , { border: '1px solid #00A170 ' }) ;
              ref_giai_thich_file.current.style.display = "none" ;
    
              // Hiển thị Content_mennu
              // set tabIndex để sự kiện onblur được lắng nghe
              collection[index].setAttribute("tabIndex", "-1") ;
          
                                    
                                      let  _top  = y_mouse.current+ 'px' ;
                                    
                                       let left =  x_mouse.current  + 'px';
    
               setTimeout(() => {
    
                File_manager.ref_0 =  ref_0.current ;
                File_manager.ref_0_index = index ;
                Object.assign(ref_content_menu.current.style , css.content_menu , { top:_top, left : left }) ;
           
              ReactDOM.render( <Content_mennu />  ,  ref_content_menu.current) ;
              kiem_tra_Content_mennu = true ; 
               // điều kiện để dòng này kích hoạt
             
                index_truoc_do = index ;
               }, 0);                     
              
            
    
            }
    
         
          }
    
          //---------------------------------------------------------------------
    
              collection[index].onblur = function (event) {
                console.log('onblur');
                
                Object.assign( collection[index].style , css.leave  ) ;
                ref_content_menu.current.style.display = 'none' ;
                kiem_tra_Content_mennu = false ;
               
                index_truoc_do = undefined ;
    
              }
    
           //--------------------------------------------------------------------------   
    
            }
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////
    
    let width_at_element = (i)=>{ return ref_0.current.children[0].children[i].getBoundingClientRect().x ; } 
    let xac_dinh_co_change_width_khong_and_vi_tri_change = ( x )=>{  
    
    let array = [] ;
    
    for (let index = 1  ; index < 3 ; index++) { 
    
      array[index] = ( x >= (width_at_element(index) -5) && x <= (width_at_element(index) +5)  ) ;
      if ( array[index] === true) {
        vi_tri_change = index ;
        return true ;
      }
    }
    
    return false ;
    
    } ;

    // khi move chuột tại góc element thì xuất hiện biểu tượng thay đổi kích thước cột
    // nếu ấn giữ chuột trái khi move thì thay đổi kích thước cột
    
    ref_0.current.children[0].onmousemove = function col_resize(event) {
    
    event.preventDefault() ;
    console.log(change_width);
    
    let x= event.clientX ;
    
    if (  xac_dinh_co_change_width_khong_and_vi_tri_change(x)||change_width === true ) {
    document.body.style.cursor ="col-resize" ;
    console.log(change_width);
    ref_0.current.children[0].onmousedown = function (event) {
    
      if (event.buttons === 1) { 
        // change_width = true sau đó dùng  document.addEventListener('mousemove' lắng nghe sự kiện onmousemove để thực thi fucntion col_resize
        change_width = true ;
      }
      
    }
    
    
    
    }else{
    change_width = undefined   ;
     document.body.style.cursor ="default" ;
    
    }
    
    
    }
    
    //-------------------------------------------------------------------------------
    
    ref_0.current.children[0].onmouseleave = function (event) {
    
      if (change_width !== true ) {  console.log('onmouseleave'); change_width = undefined   ; document.body.style.cursor ="default" ; }
    }
    
    /////////////////////////////////////////////////////////////////////////
    
    
    ref_bar_1.current.onclick = function create_folder(event) {
    
    set_state_1( ( name_foder_and_file )=>{
    let  name_foder_and_file_update = [["foder_new","date_115/10/2022" ,"type_1", "size"]].concat(name_foder_and_file);
    return name_foder_and_file_update  ;} ) ;
    
    ref_0.current.children[1].children[0].children[1].innerHTML = ` <div    style="  position:absolute;      background-color: azure; width: inherit; height: inherit ;   white-space: nowrap;    "> ${  name_foder_and_file[0][0] }  </div>`;
      
    let div_rename = ref_0.current.children[1].children[0].children[1].children[0] ;
    
    div_rename.setAttribute("contenteditable", true) ;
    
    
    let range = new Range();
    // childNodes[0] lấy text trong div chú ý remove space
    // ta có thể dùng textContent 
    let len = div_rename.childNodes[0].length ;
    range.setStart(div_rename.childNodes[0], 0);
    
    range.setEnd(div_rename.childNodes[0], len);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    //--------------------------------------------------
    div_rename.onblur = function () {
    
    
      let text = div_rename.textContent ;
     
      set_state_1( ( name_foder_and_file )=>{
    let  name_foder_and_file_update = [].concat(File_manager.data);
    name_foder_and_file_update[0][0] = text ;
    return name_foder_and_file_update  ;} ) ;
    
    
    
    }
    
    
    }
    
 
    ////////////////////////////////////////////////////////////////////////
    function hover_show_giai_thich_file(i ){
          // chú ý lỗi trong react 16
          //Method Object.freeze() giúp chúng ta chuyển một object thông thường sang trạng thái không thể modified(sửa đổi).
          // trong react Object cấp 2 sẽ bị Object.freeze()
          // có thể dùng hàm Object.isFrozen(css.giai_thich_file) để kiểm tra nó sẽ trả về true
          // muốn truy cập để sửa đổi được ta phải tạo một bản copy bằng cách dùng hàm Object.assign()
          // vd  Object.assign({}, css.giai_thich_file ,{top: _top},) sủa đổi luôn
          // hoặc sau khi tạo bản copy rồi ta có thể sửa css.giai_thich_file.left = x_mouse - 20 + 'px'; được nhưng trước đó ta phải tạo bản copy
          
        
    
                              
                                function Giai_thich_file() {
    
                                                                      
    
                                  return  (<div className={`  absolute bg-white top-[${_top}] left-[${_left}] px-0.5 py-2.5 shadow-2xl `} > 
                                  
                                  <div  > { name_foder_and_file[index-1][0]}  </div>
                                  <div  > {name_foder_and_file[index-1][1] } </div> 
                                  <div  > { name_foder_and_file[index-1][2]}  </div> 
                             
                                  </div> 
                                  ) ;
                                  }  ; 
    
                                  let index = i ; 
                                  let _left =  x_mouse.current - 20 + 'px';
                                  let _top  = ref_0.current.children[ index  ].getBoundingClientRect().y + 25 + 'px' ;
                                  
                                  myTimeout = setTimeout(() => {
                                              
                                    let  max_x_mouse =  ref_0.current.children[ index  ].children[ 1].getBoundingClientRect().x  ; 
                                      
                                    let width_col_name = ref_0.current.children[  index  ].children[ 0].getBoundingClientRect().width ; 
                                    let width_icon = ref_0.current.children[  index  ].children[ 0].children[ 0].getBoundingClientRect().width ;
                                   if ( x_mouse.current < max_x_mouse &&( convert_text_to_pixcel(name_foder_and_file[index-1][0],font_size) + width_icon)  >= width_col_name ) {
    
                                      ReactDOM.render( <Giai_thich_file />  ,  ref_giai_thich_file.current) ;

                                   } 
                            
                                              
                                          }, 200);




                  
  
                  
                                           
    
          };
           
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    
          }, [name_foder_and_file]);
    
    useEffect(() => {   
            
    
                
                function change_width_to_undefined(event) {
                
                event.preventDefault() ;
                
                change_width = undefined ;  document.body.style.cursor ="default" ;
                
                }


                
                
                // xoá bỏ lắng nghe sự kiện thay đổi kích thước cột tại element kích hoạt sự kiện
                document.addEventListener('mouseup', change_width_to_undefined);
                
                // change_width === true tức là đã ấn giữ chuột trái khi di chuyển 
                // dùng document lắng nghe để khi di chuyển ra ngoài element kích hoạt sự kiện sự kiện vẫn xảy ra
                document.addEventListener('mousemove', function (event) {
                
                if ( change_width === true ) {
                
                    let collection = ref_0.current.children ;
                    let width ;
                        width = event.clientX - ref_0.current.children[0].children[vi_tri_change - 1].getBoundingClientRect().x ;
                      
                        ref_0.current.parentElement.style.overflowX = 'auto' ;
                        // collection[0].style.width = '150%' ;
                        // collection[0].children[vi_tri_change - 1].classList.remove("grid-cols-3");
                        // collection[0].className  = `grid-cols-[${width}px_300px_300px] grid box-border  bg-slate-200 `;
                        // collection[0].children[vi_tri_change - 1].style.width = width + 'px' ;
                        // for (let index = 1, len = collection.length; index < len; index++) {
                        //   collection[index].style.width = '150%' ;
                        //   collection[index].children[vi_tri_change - 1].style.width = width + 'px' ;
                        // }


                        collection[0].style.gridTemplateColumns = `${width}px 300px 300px`;



                  
                        
                      }
                  
                
                });





            

    
               
     
    
    
          }, []);
    
    
     return (<div className={'pl-1 pt-1'}  >
    <div ref = { ref_giai_thich_file }   >   </div>
    <div ref = { ref_content_menu } >   </div>
    <div ref = { ref_show_file } >   </div>
    
      {/* -------------------------------------------------------------------------------------------------------------------- */}
    <div className={'flex w-3/4 border border-solid border-yellow-900 justify-between'} >  
     
        <div ref = { ref_driver } > 
          <div className={'pl-[0.12rem]'} >  Driver  </div> 
        </div>
     
        
        <div  > 
          <input className={'focus:bg-red-100 m-0 hover:bg-sky-700 outline-0 placeholder-slate-400 placeholder-shown:italic'} type="text" placeholder="Search..."  /> 
        </div>
       
       
    
    </div>
    
    
      {/* -------------------------------------------------------------------------------------------------------------------- */}



    <div ref = { ref_bar }  className={'w-3/4 flex box-border bg-white border-l border-r border-solid border-yellow-900'} >
      <div ref = { ref_bar_1 } className={'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'}    >
          <img className={'w-4 mr-1'}  src = "/SVG/folder.svg" />
      <div   > New folder   </div>  
      </div>
    <div ref = { ref_bar_2 } className={'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'}   > 
    <img className={'w-4 mr-1'}  src = "/SVG/file_document.svg" />
     <div    >  New text file  </div>
    </div>
    <div ref = { ref_bar_3 } className={'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'}    >
       <img className={'w-4 mr-1'}  src = "/SVG/file_upload.svg" /> 
        <div     >  Upload file </div> 
         </div>  
    <div  ref = { ref_bar_4 } className={'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'}    >
       <img className={'w-4 mr-1'}  src = "/SVG/folder_upload.svg" /> 
        <div    >  Upload Folder </div> 
     </div>
    <div ref = { ref_bar_5 } className={'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'}    > 
    <img className={'w-4 mr-1'}  src = "/SVG/folder_upload.svg" /> 
     <div   > Thông báo   </div>
    </div>
    
    </div>



     {/* -------------------------------------------------------------------------------------------------------------------- */}


    <div  className={'w-3/4 grid box-border bg-white border border-solid border-yellow-900 overflow-hidden'}   >  


                {/* -------------------------------------------------------------------------------------------------------------------- */}
    
            <div ref = { ref_0 }    className={ 'w-full h-[75vh] overflow-auto  box-border bg-white border-0  border-solid border-yellow-900 '}  >  
                  <div className={'grid grid-cols-3  box-border  bg-slate-200'}    >
                    
                      <div className={' box-border pl-1 overflow-hidden '} > Name </div> 
                      <div  className={ ' box-border pl-1 overflow-hidden  border-l border-r border-solid border-yellow-700 '} >  Date modified  </div> 
                  
                      <div  className={ ' box-border pl-1 overflow-hidden '} >  Size  </div> 
                  </div>

              
    
                  {
                    name_foder_and_file.map( ( i, index )=>{ 
                        return <div className={'grid grid-cols-3 hover:bg-sky-700 w-full   box-border '}  >
                                    <div  className={ 'flex box-border m-1 overflow-hidden whitespace-no-wrap '} > 
                                     <img className={'w-4 mr-[4px]'}  src = {select_icon_from_file_name(i[0])} /> 
                                      <div  >{i[0]}</div>    
                                    </div>
                                   
                                    <div  className={ ' box-border m-1 overflow-hidden  '} >  {i[1]}  </div> 
                                    <div  className={ ' box-border m-1 overflow-hidden  '} >  {i[2]}  </div> 
                            
                              </div>   } )
                    
                  }  
              
          </div>
    
              {/* -------------------------------------------------------------------------------------------------------------------- */}
    
          <div ref = { ref_copy } >   </div>       
    </div>
    
    
    
      
     </div>
    
     
    
     )
    }
    
    
    
    
    return ReactDOM.render( <File_manager value = {await axios.post("/Hieu/driver" ,{ folder : "" }) }  /> ,  dom ) ;
    
    }
    
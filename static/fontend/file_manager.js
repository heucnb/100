
async function file_manager( dom ) {

   
    
    
    
    
    
    
    function  File_manager(props) {
    let change_width ;
    let vi_tri_change ;
    let [name_foder_and_file, set_state_1] =  useState( props.value.data );
    let ref = useRef({}) ;
    
   

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
    
      let ref_show_file =  useRef(null) ;
      let ref_rename =  useRef(null) ;
      let ref_copy =  useRef(null) ;
      let useEffect_array_change =  useRef(0) ;
      
      // xoá mặc định ban đầu để điều khiển bằng javascript
      // ta phải khởi tạo input type radio checked = {false}  để tắt addEventListener mặc định của radiol này sau đó điều khiển bằng javascript

      function radio_checked(index, event) {
          if (ref.current['radio'][index].checked === true) {

        
            // xác định array file hoặc folder cần copy
            delete  array_radio_checked.current[index];
             ref.current['radio'][index].checked = false ;
            
            // di chuyển content_menu tới vị trí radio_checked
             ref_content_menu.current.children[0].style.top = y_mouse.current +'px'
             ref_content_menu.current.children[0].style.left = x_mouse.current+20 +'px'

             return;
          }else{
             // xác định array file hoặc folder cần copy
            array_radio_checked.current[index] = index;
            console.log(array_radio_checked.current);
              ref.current['radio'][index].checked = true ;
            // di chuyển content_menu tới vị trí radio_checked
              ref_content_menu.current.children[0].style.top = y_mouse.current +'px'
              ref_content_menu.current.children[0].style.left = x_mouse.current+20 +'px'
 
              return;
          }
        
      }
      function Content_mennu( props) {

        let ref = useRef({}) ;
     
                   useEffect(() => { 
                           
                   
                    console.log(array_radio_checked.current);

                         //------------------------------------------------------------------------------------------------             
                          // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                          // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                          ref.current['rename'].onmousedown = function _rename() {
                           
                            let index = props.value.index -1 ;
                        
                            ReactDOM.render( <Re_name />,  props.value.rename) ;
                            function Re_name() {
                              let ref_0 = useRef(null) ;
                              let ref_cancel = useRef(null) ;
                              let ref_ok = useRef(null) ;
                                 useEffect(() => {      

                                  let len = ref_0.current.textContent.length ;
                                  get_selection(ref_0.current,0,len) ;
                                  //------------------------------------------------------------------------------------
                                  ref_0.current.onmousedown =function click_rename(event) {
                                    document.getSelection().removeAllRanges();
                                  }

                                  
                                  ref_cancel.current.onclick =function click_cancel(event) {
                                   
                                    ReactDOM.unmountComponentAtNode( props.value.rename);
                                  }


                                  ref_ok.current.onclick =function click_ok(event) {

                                   let copy_array_path_cu_1 = [].concat(path_cu.current);
                                   copy_array_path_cu_1.push(name_foder_and_file[index][0]);
                                   let copy_array_path_cu_2 = [].concat(path_cu.current);
                                   copy_array_path_cu_2.push(ref_0.current.textContent);

                            
                                    axios.post("/Hieu/driver_rename", { file_cu : copy_array_path_cu_1.join("/"), file_moi : copy_array_path_cu_2.join("/") }).then(function (response) { 
                                     
                                      if (response.data !=="ok") { _alert('Có lỗi'); }
                                    
                                    }) ;

                                    useEffect_array_change.current = useEffect_array_change.current + 1 ;
                                    set_state_1( ( name_foder_and_file )=>{ 

                                     name_foder_and_file[index][0] = ref_0.current.textContent ;
                                      let name_foder_and_file_update =  [].concat(name_foder_and_file);
                                     
                                      return name_foder_and_file_update ;} ) ;


                                      ReactDOM.unmountComponentAtNode( props.value.rename);

                                     
                                  

                                
                                  }


                                 
                                    }, []);
                              return <div className={'absolute flex justify-center items-center align-middle w-full h-full top-0 left-0 bg-slate-400 bg-opacity-50'} > 
                              <div   className={' _shadow rounded w-1/2 bg-white  '}  > 
                                      <div className={'flex flex-wrap'} >  
                                          <div  className={`mx-5 mt-2 w-full`}  >  Rename  </div>
                                          <div ref = {ref_0 } contentEditable='true'  className={'mx-5  mt-2 p-2 w-full border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '} >{props.value.data[index][0]}</div>
                                          <div className={' my-2 w-full flex justify-end'} > 
                                                <div ref = {ref_cancel } className={`mx-10 rounded w-16 flex justify-center bg-stone-200 hover:bg-stone-400 _shadow` } >  Cancel </div>
                                                <div ref = {ref_ok } className={'mx-10 rounded w-16 flex justify-center bg-sky-500 hover:bg-sky-700 _shadow'} >  OK </div>
                                          </div>
                                        
                          
                                      </div>
                                        
                                </div>
                             
                               </div>
                              
                            }
                         
        
                            }
        
                        //---------------------------------------------------------------------------------------------------------------------    
        
        
                         // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                          // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                          ref.current['detele'].onmousedown = function _detele() {
                          let index = props.value.index -1 ;
                          let copy_array_path_cu_1 = [].concat(path_cu.current);

                          copy_array_path_cu_1.push(name_foder_and_file[index][0])
                            axios.post("/Hieu/driver_detele", { file : copy_array_path_cu_1.join("/"), name_file : name_foder_and_file[index][0] }).then(function (response) { 
                              console.log(response.data); 
                              useEffect_array_change.current = useEffect_array_change.current + 1 ;
                              set_state_1( ( name_foder_and_file )=>{ 
                                name_foder_and_file.splice(index, 1) ;
                              let name_foder_and_file_update =  [].concat(name_foder_and_file);
                            
                              return name_foder_and_file_update ;} ) ;
                        
                            }) ;
    
                           
                          }
        
        
                          //---------------------------------------------------------------------------------------------------------------------    
        
        
                         // không dùng được onclick ở đây vì nó sẽ chạy sau onblur
                          // khi onblur chạy Content_mennu mất nên onclick không được thực thi
                          ref.current['copy'].onmousedown = function _copy() {
                            console.log(array_radio_checked.current);
                               let index = props.value.index - 1 ;
                               let copy_array_path_cu_1 = [].concat(path_cu.current);   
                                          
                                let name_file_copy = [name_foder_and_file[index][0] , name_foder_and_file[index][1] , name_foder_and_file[index][2] ];
                                copy_array_path_cu_1.push(name_file_copy[0]); 
                                let path_file_copy = copy_array_path_cu_1.join("/") ;
                              console.log('copy' , path_file_copy);
                                function Copy() {
                            
                            
                                      function paste_here() {
                                      // path_cu là đường dẫn khi ta đã di chuyển dến thư mục khác.
                                      let copy_array_path_cu_2 = [].concat(path_cu.current);    
                                        let path_file_paste = copy_array_path_cu_2.join("/") ;
                                        console.log('paste',path_file_paste);
                                        axios.post("/Hieu/driver_copy", { file : [path_file_copy,  path_file_paste ] }).then(function (response) { 
                            
                            
                                        if (response.data[0] === "ok") {
                                          useEffect_array_change.current = useEffect_array_change.current + 1 ;
                                          set_state_1( response.data[1] ) ;
                                          // xoá hiển thị contextmenu copy-p
                                          ReactDOM.unmountComponentAtNode( ref_copy.current ); 
                            
                                          
                                        } else {   
                                            
                                          _alert( <div  > Paste  <span  style={  {   color: 'crimson' }  } >  error  </span>     </div>) ;
                                        
                                           
                                        }
                            
                                          
                                        
                                        
                            
                                        }) ;
                            
                            
                                        
                                      }
                            
                                  return ( <div  style={  {display: 'flex',boxSizing: 'border-box', position: 'relative', backgroundColor: 'blanchedalmond',  width: '100%',  borderTop: '1px solid #633517 ' , justifyContent: 'space-between',  }  } >  
                                    
                                    <div  className={` p-2  `} > {  name_foder_and_file[index][0] }  </div> 
                                  <div className={` flex p-2  `}>  
                            
                                            <div className={`flex mr-2 justify-center rounded w-14 text-white bg-yellow-600 _shadow `} > Canel  </div>
                                            <div className={`flex justify-center rounded w-24 text-white bg-sky-600 _shadow `} onClick = {( event )=>{  paste_here() }} >  Paste here </div>
                                    </div>
                                    </div>
                            
                            
                                  )
                                  
                                }
                            
                              ReactDOM.render( <Copy />  ,  ref_copy.current) ;


                          }
        
        
        
        
        
        
        
                        }, []);
    
                     
              return  (<div   style={  {  top: props.value.top + 'px', left: props.value.left+ 20 + 'px', }  } className={` flex flex-wrap rounded w-40 absolute bg-stone-200 border border-stone-700 border-solid  _shadow ` } > 
        
              <div ref = {(el)=> { ref.current['copy'] = el } }  className={`w-full px-5  hover:bg-sky-200`} > Copy  </div>
              <div ref = {(el)=> { ref.current['paste'] = el } } className={`w-full px-5  hover:bg-sky-200`} > Paste </div> 
              <div  ref = {(el)=> { ref.current['rename'] = el } }  className={`w-full px-5  hover:bg-sky-200`} > Rename </div> 
              <div ref = {(el)=> { ref.current['detele'] = el } } className={`w-full px-5  hover:bg-sky-200`} > Delete  </div> 
              </div> 
              ) ;
              }  ; 
    
    
      
    
    
     
          useEffect(() => {


          
          console.log('------------------------------------------');
         
            console.log(path_cu.current);
    
            File_manager.data = name_foder_and_file ;
            window.addEventListener("contextmenu", e => e.preventDefault());
    
          
           
            let myTimeout ;

        
           
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
                if (isMobile !== true) {
                      x_mouse.current = event.clientX ;
                      y_mouse.current = event.clientY ;
                      console.log('------------',  x_mouse.current, y_mouse.current, kiem_tra_Content_mennu.current );
                      event.target.onmousemove = function (event) {
                        // event.preventDefault() ;
                        x_mouse.current = event.clientX ;
                        y_mouse.current = event.clientY ;
                      }
                      // kiem_tra_Content_mennu.current === true thì không cho  onmouseenter xảy ra ở tất cả các dòng (tức là không show hover_show_giai_thich_file)
                      if (kiem_tra_Content_mennu.current === false  ) {
                  
                        
                                // khi hover ra khỏi xoá giải thích file
                              collection[index].onmouseleave = function (event) {
                                console.log('-------------------------------------------------');
                                ReactDOM.unmountComponentAtNode( ref_giai_thich_file.current); 
                                clearTimeout(myTimeout);
                          
                                };

                          hover_show_giai_thich_file(index);
                      
                      }
                  
                }
                          
                            
              }
    
             //-------------------------------------------------------------------------- 
          
             collection[index].onmousedown = function _open(event) {
  

            if (event.buttons === 1 && ref.current['radio'][index-1] === undefined ) {
            
             
                        
                            path_cu.current.push(name_foder_and_file[index-1][0]) ;
                         
                            
                     
                           // Ở backend ta đã thiết lập name_foder_and_file[index-1][2] ==="" là folder khác "" là file
                           // nếu là ấn vào folder thì chạy
                            if ( name_foder_and_file[index-1][2] ==="") {
                              console.log(  path_cu.current );
                              axios.post("/Hieu/driver", { folder : path_cu.current.join("/") }).then(function (response) { 
                                    
                                    let data = response.data ;

                                    useEffect_array_change.current = useEffect_array_change.current + 1 ;
                                 
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

                                         useEffect_array_change.current = useEffect_array_change.current + 1 ;
                                            set_state_1(response.data) ;
                                           
                                            ReactDOM.render( < Path_to_folder   value = {  ["Driver"].concat(path_cu.current.slice(1)).map(( i, index )=>{ return i = i+ " /" })   } />, ref_driver.current );
                                          })
        
                                          
                                        }
                                        
                                          }
        
        
        
                                      return ( <div style={{  display: "flex", alignItems: 'center',  }}   >  
                                        <img className={'w-4  ml-1 mr-1'}  src = "/SVG/back.svg"  onClick={(event)=>{ _back() }} />
                                       
                                        {
        
                                          props.value.map(( i, index )=>{  return <div  className={`hover:bg-sky-700`} >  {i} </div> })
        
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
            if (event.buttons === 2&&ref.current['radio'][index-1] === undefined) {
              // ReactDOM.render tại một Dom khi gọi nhiều lần cũng chỉ chạy một lần. do đó ta phải ReactDOM.unmountComponentAtNode( ref_content_menu.current ); 
              // để ReactDOM.render chạy mỗi lần khi được gọi
              // dùng trong trường hợp: khi click chuột phải vào dòng sau mà chưa onblur
              ReactDOM.unmountComponentAtNode( ref_content_menu.current ); 
              console.log(  index, ' collection[index] lắng nghe  mouse right down   ' );
              
              // remove hover và tabindex ở tất cả các dòng
              for (let index = 1, len = collection.length; index < len; index++) { collection[index].removeAttribute('tabindex') ;  collection[index].classList.remove("hover:bg-sky-100")  ; collection[index].classList.remove("bg-sky-100")  } ;
              // Hiển thị Content_mennu
              // set tabIndex để sự kiện onblur được lắng nghe
              collection[index].classList.add("bg-sky-100");
              collection[index].setAttribute("tabIndex", "-1") ;
             
                                 
              select_row.current = 1;
              
              useEffect_array_change.current = useEffect_array_change.current + 1 ;
              set_state_1( (  )=>{  return [].concat(name_foder_and_file)  ;} ) ;
           
              ReactDOM.render( <Content_mennu  value = { { data : name_foder_and_file ,  rename : ref_rename.current  ,  dom : ref_0.current , index : index , top : y_mouse.current, left : x_mouse.current  } }  />  ,  ref_content_menu.current) ;
             console.log(ref.current['radio'][index-1]);
             array_radio_checked.current[ (index-1)] = (index-1) ;

              ref.current['radio'][index-1].checked = true;
             
              select_row.current = null; 
              kiem_tra_Content_mennu.current = true ; 
                
            
    
            }
    
         
          }
    
          //---------------------------------------------------------------------
              // sự kiện onblur sẽ kích hoạt sau onmousedown
              collection[index].onblur = function (event) {
                // nếu collection[index] có tabindex mới  kích hoạt onblur
                // tránh trường hợp khi click mouse right liên tiếp vào các dòng khác nhau cũng click hoạt onblur
                if ( collection[index].hasAttribute("tabindex")&&ref.current['radio'][index-1] === undefined  ) {

                  console.log(   index , ' collection[index] lắng nghe  onblur  ' );
                  console.log('onblur');
                  for (let index = 1, len = collection.length; index < len; index++) {   collection[index].classList.add("hover:bg-sky-700")   } ;
               
                  collection[index].classList.remove("bg-sky-700");
                  ReactDOM.unmountComponentAtNode( ref_content_menu.current ); 
                 
                  kiem_tra_Content_mennu.current = false ;
                  
                }
               
             
    
              }
    
           //--------------------------------------------------------------------------   
    
            }
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////
    // hàm này trả về toạ đọ trục hoành của element con của ref_0.current.children[0]
    let x_at_element = (i)=>{ return ref_0.current.children[0].children[i].getBoundingClientRect().x ; } 
    // x là toạ đọ trục hoành của mouse
    let xac_dinh_co_change_width_khong_and_vi_tri_change = ( x )=>{  
    
    let array = [] ;
    
    for (let index = 1  ; index < 3 ; index++) { 
    
      array[index] = ( x >= (x_at_element(index) -5) && x <= (x_at_element(index) +5)  ) ;
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

     useEffect_array_change.current = useEffect_array_change.current + 1 ;
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
      useEffect_array_change.current = useEffect_array_change.current + 1 ;
      set_state_1( ( name_foder_and_file )=>{
    let  name_foder_and_file_update = [].concat(name_foder_and_file);
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
          

          let index = i ; 
          let _left =  x_mouse.current - 20 + 'px';
          let _top  = ref_0.current.children[ index  ].getBoundingClientRect().y + 25 + 'px' ;
          let  max_x_mouse =  ref_0.current.children[ index  ].children[ 1].getBoundingClientRect().x  ; 
              
          let width_col_name = ref_0.current.children[  index  ].children[ 0].getBoundingClientRect().width ; 
          let width_icon = ref_0.current.children[  index  ].children[ 0].children[ 0].getBoundingClientRect().width ;
          myTimeout = setTimeout(() => {
                      
          
           if ( x_mouse.current < max_x_mouse &&( convert_text_to_pixcel(name_foder_and_file[index-1][0],font_size) + width_icon)  >= width_col_name ) {

              ReactDOM.render( <Giai_thich_file />  ,  ref_giai_thich_file.current) ;

           } 
    
                      
                  }, 200);
    
                              
                                function Giai_thich_file() {
                                    let ref_0 = useRef(null)
                                                             
                                  return  (<div ref = { ref_0  }  style={  { top: _top , left : _left  }  } className={` border border-stone-700 border-solid absolute text-stone-700 bg-stone-100 px-0.5 py-1 _shadow `} > 
                                  
                                  <div  > { name_foder_and_file[index-1][0]}  </div>
                                  <div  > {name_foder_and_file[index-1][1] } </div> 
                                  <div  > { name_foder_and_file[index-1][2]}  </div> 
                             
                                  </div> 
                                  ) ;
                                  }  ; 
    
                                




                  
  
                  
                                           
    
          };
           
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   


    

    
          },[useEffect_array_change.current]);
    
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
                        // xác định min của cột
                        if (width <= font_size*10 && vi_tri_change === 2) {
                          width = font_size*10 ;
                          document.body.style.cursor ="not-allowed" ;
                        }else if
                        (width <= font_size*3 && vi_tri_change === 1) {
                          width = font_size*3 ;
                          document.body.style.cursor ="not-allowed" ;
                        }else{
                          document.body.style.cursor ="col-resize" ;
                        }

                        // col_initialization là mảng cột sau đó ta cắt cột thay đổi kích thước được cột không thay đổi kích thước
                        let col_initialization = [0,1,2];
                        col_initialization.splice(vi_tri_change - 1,1) ;
                        let width_col_initialization = ref_0.current.children[0].children[col_initialization[0]].getBoundingClientRect().width + 'px' ;
                      let array_gridTemplateColumns =  [width_col_initialization, width_col_initialization, width_col_initialization] ;
                      array_gridTemplateColumns.map(( i, index )=>{ if (index === vi_tri_change - 1) { array_gridTemplateColumns[index]  =  width +'px' }  }) ;
                      let string_gridTemplateColumns =  array_gridTemplateColumns.join(' ') ;
                    console.log(string_gridTemplateColumns, "---", col_initialization);
                        ref_0.current.parentElement.style.overflowX = 'auto' ;
                        collection[0].style.gridTemplateColumns = string_gridTemplateColumns;
                        for (let index = 1, len = collection.length; index < len; index++) {
                          collection[index].style.gridTemplateColumns = string_gridTemplateColumns;
                        }


                        



                  
                        
                      }
                  
                
                });



                //----------------------------------------------------------------------
               
            

    
               
     
    
    
          }, []);

//-----------------------------------------------------------------------------------------------------------------------------------------          

            ref.current['radio'] = [];
            let kiem_tra_Content_mennu = useRef(false) ;
            let array_radio_checked =useRef([]) ;
            let path_cu =  useRef([""]) ;
            let select_row =  useRef(null) ;
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
            return (<div className={`${tb('pl-1 pt-1', '')}  `}  >
            <div ref = { ref_giai_thich_file }   >   </div>
            <div ref = { ref_content_menu } >   </div>
            <div ref = { ref_show_file } >   </div>
            <div ref = { ref_rename } >   </div>
              {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className={` flex ${tb('w-3/4 border border-solid border-yellow-900', 'w-full')}    justify-between `} >  
             
                <div ref = { ref_driver } > 
                  <div className={'pl-[0.12rem]'} >  Driver  </div> 
                </div>
             
                
                <div  > 
                  <input className={'focus:bg-red-100 m-0 hover:bg-sky-700 outline-0 placeholder-slate-400 placeholder-shown:italic'} type="text" placeholder="Search..."  /> 
                </div>
               
               
            
            </div>
            
            
              {/* -------------------------------------------------------------------------------------------------------------------- */}
        
        
        
            <div ref = { ref_bar }  className={`${tb('w-3/4 border-l border-r border-solid border-yellow-900', 'w-full')}  flex box-border bg-yellow-800  `} >
              <div ref = { ref_bar_1 } className={`hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}    >
               <div className={` flex justify-center items-center w-full`} >  <img className={`${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`}  src = "/SVG/folder.svg" />  </div>  
              <div  className={` ${tb('','w-full')}  text-white `} > New folder   </div>  
              </div>
            
            <div ref = { ref_bar_2 } className={`hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}   > 
            <div className={` flex justify-center items-center w-full`} >  <img className={`${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`}  src = "/SVG/file_document.svg" />  </div>
           
             <div  className={` ${tb('','w-full')}   text-white `}  >  New text file  </div>
            </div>
            <div ref = { ref_bar_3 } className={`hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}    >
            <div className={` flex justify-center items-center w-full`} >  <img className={`${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`}  src = "/SVG/file_upload.svg" />  </div>
            
                <div  className={` ${tb('','w-full')}   text-white `}   >  Upload file </div> 
                 </div>  
            <div  ref = { ref_bar_4 } className={`hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}    >
            <div className={` flex justify-center items-center w-full`} >  <img className={`${tb('w-5 h-5 pr-1', 'w-8 h-4 mt-1 pr-1 self-end ')}`}  src = "/SVG/folder_upload.svg" />  </div>
           
                <div  className={` ${tb('','w-full')}  text-white `}  >  Upload Folder </div> 
             </div>
            {tb(<div ref = { ref_bar_5 } className={`hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex ${tb('','flex-wrap')} items-center border-yellow-900`}    > 
            <img className={'w-5 h-5 pr-1'}  src = "/SVG/folder_upload.svg" /> 
             <div   > Thông báo   </div>
            </div>,        )}
            
            </div>
        
        
        
             {/* -------------------------------------------------------------------------------------------------------------------- */}
        
        
            <div  className={` ${tb('w-3/4 border border-solid border-yellow-900', 'w-full')} grid box-border bg-white   overflow-hidden `}   >  
        
        
                        {/* -------------------------------------------------------------------------------------------------------------------- */}
            
                    <div ref = { ref_0 }    className={ `w-full ${tb('h-[75vh]', '')} overflow-auto  box-border bg-white `}  >  
                          <div className={` ${tb('grid grid-cols-3  box-border  bg-slate-200', 'h-0 overflow-hidden')}  `}    >
                            
                              <div className={' box-border pl-1 overflow-hidden text-ellipsis '} > Name </div> 
                              <div  className={ ` box-border pl-1 overflow-hidden whitespace-nowrap  border-l border-r border-solid border-yellow-700  `} >  Date modified  </div> 
                          
                              <div  className={ ' box-border pl-1 overflow-hidden '} >  Size  </div> 
                          </div>
        
                      
            
                          {
                            name_foder_and_file.map( ( i, index )=>{ 
                                return <div className={` grid ${tb('grid-cols-3  hover:bg-sky-100 ','grid-cols-1  relative  overflow-hidden border-b border-solid border-stone-200 ' )}w-full   box-border `}  >
                                            <div  className={ '  flex   box-border pl-1 overflow-hidden whitespace-no-wrap  '} > 
                                            {  function () {   if (select_row.current !== null) {return <input checked = {false} ref={(el)=> {  ref.current['radio'][index] = el }}   type="radio"  onMouseDown ={ ( event )=>{  radio_checked(index, event) ; } } className={`shrink-0 w-4 h-4 mr-1 text-blue-600 bg-red-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600   `} /> }     }() }
                                             <img className={` ${tb('w-5 h-5',' absolute top-1/2  transform -translate-y-1/2  w-10 h-10')}  pr-1`}  src = {select_icon_from_file_name(i[0])} /> 
                                                {/*khi dùng transform hoặc realative di chuyển tag div với with tự động full thì nó sẽ tạo thanh scroll vì width đã dài hơn. do đó thẻ mẹ dùng overflow-hidden hoặc flex để xoá đi */}
                                              <div className={` ${tb('overflow-hidden whitespace-nowrap text-ellipsis',' transform translate-x-10 break-all')} `} >{i[0]}</div>    
                                            </div>
                                           
                                            <div  className={ ` ${tb('overflow-hidden whitespace-nowrap text-ellipsis','transform translate-x-11  text-sm italic ')}  box-border text-stone-500   `} >  {i[1]}  </div> 
                                            <div  className={ ` ${tb('overflow-hidden whitespace-nowrap text-ellipsis','absolute top-full  transform -translate-y-full right-4 text-sm italic ')}   box-border text-stone-500  `} >  {i[2]}  </div> 
                                    
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
    
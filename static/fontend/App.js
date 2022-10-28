

 

   function Footer() {

                    function css() {
                    
                        return {
                        
                            center_bottom : {   backgroundColor: "#d8dcd6",  textAlign: "center" ,        border: "1px ridge #ccc",  }  ,
                
                
                        }
                    }
                
                    var css = css();

  
   return (
  <div>
    <div style={css.center_bottom}>
      <h3>Foolish Developer</h3>
      <p>
        Foolish Developer is a blog website where you will find great tutorials on web design and development
    </p>
    </div>
  </div>
)

   } ;



   


 function App() { 

 

    let ref_1 =  useRef(null) ;
    let ref_2 =  useRef(null) ;
    let ref_3 =  useRef(null) ;
    let ref_return =  useRef(null) ;

  

  
    console.log(path_name);
 
   if (  path_name.startsWith('/excel') ) {
   
    return ( <div> <Table_hieu_2 /> </div> ); 
     
   


   }
   else if ( path_name.startsWith('/A')) {
  
  
              function A() {

                function From_1() {

                  let ref_return =  useRef(null) ;
                  let ref_year =  useRef(null) ;
                  let ref_trai =  useRef(null) ;
                  return ( <div>
                      <h2>From_1 </h2>
                      <input ref = {ref_year }  type="text" placeholder="year"  />
                      <input ref = {ref_trai }  type="text" placeholder="trai" />
                      <button  onClick={ () => ReactDOM.render( "80%" ,  ref_return.current)}  >ty_le_phoi</button>
                      <div  ref = {ref_return }> Dữ liệu</div>
                    </div>
                  );
              
                 } ;
              
                 function From_2() {
              
                  let ref_return =  useRef(null) ;
                  let ref_year =  useRef(null) ;
                  let ref_trai =  useRef(null) ;
                  return ( <div>
                      <h2>From_2 </h2>
                      <input ref = {ref_year }  type="text" placeholder="year"  />
                      <input ref = {ref_trai }  type="text" placeholder="trai" />
                      <button  onClick={ () => ReactDOM.render( "90%" ,  ref_return.current)}  >ty_le_đẻ</button>
                      <div  ref = {ref_return }> Dữ liệu</div>
                    </div>
                  );
              
                 } ;
              
                 function From_3() {
              
                  let ref_return =  useRef(null) ;
                  let ref_year =  useRef(null) ;
                  let ref_trai =  useRef(null) ;
                  return ( <div>
                      <h2>From_3 </h2>
                      <input ref = {ref_year }  type="text" placeholder="year"  />
                      <input ref = {ref_trai }  type="text" placeholder="trai" />
                      <button  onClick={ () => ReactDOM.render( "100%" ,  ref_return.current)}  >cai sữa</button>
                      <div  ref = {ref_return }> Dữ liệu</div>
                    </div>
                  );
              
                 } ;


                 function get_A_get_From_1(event) {

                  ReactDOM.render( <From_1 /> ,  ref_return.current) ;

                  let url_change = "/A/From_1" ;
                  window.history.replaceState(null, null, url_change);

                 }
              
                 function get_A_get_From_2(event) {

                  ReactDOM.render( <From_2 /> ,  ref_return.current) ;
                  let url_change = "/A/From_2" ;
                  window.history.replaceState(null, null, url_change);
                 }
                 function get_A_get_From_3(event) {

                  ReactDOM.render( <From_3 /> ,  ref_return.current) ;
                  let url_change =  "/A/From_3" ;
                  window.history.replaceState(null, null, url_change);
                 }
              


                useEffect(() => {

               
                  if (  path_name_test(path_name ,'/A/From_1' ) ) {  get_A_get_From_1() ;  }
                  if ( path_name_test(path_name ,'/A/From_2' ) ) {  get_A_get_From_2() ; }
                  if ( path_name_test(path_name ,'/A/From_3' ) ) {  get_A_get_From_3() ; }
              }, []);

              return ( <div>
                  <div  ref ={ ref_1 }   onClick={ (event) => { get_A_get_From_1(event)}  } > From 1</div>
                  <div  ref ={ ref_2 }   onClick={ (event) => { get_A_get_From_2(event)}  } > From 2</div>
                  <div  ref ={ ref_3 }   onClick={ (event) => { get_A_get_From_3(event)}  }> From 3</div>

                  <div   ref ={ ref_return }   > Data</div>

                  <div    > { <Footer />  }</div>

              </div> ); 
          
              }


return ( <div> <A /> </div> ); 
     
   }

   else if ( path_name.startsWith('/B')) {
    return 'trang B'; 
     
   }
   else {
    return 'trang chủ'; 
     
   }



   
   
    
};
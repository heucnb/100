
   
   function F() {
    
    let ref_1 =  useRef(null) ;
    let ref_2 =  useRef(null) ;
    let ref_3 =  useRef(null) ;
    let ref_return =  useRef(null) ;

  

    function From_1() {

      let ref_return =  useRef(null) ;
      let ref_year =  useRef(null) ;
      let ref_trai =  useRef(null) ;
      let ref_button =  useRef(null) ;
         useEffect(() => {       
          ref_button.current.onclick = function () {

            console.log(99999999999);
            ReactDOM.render("hieuuuuuuuuu", ref_return.current)
         
          }


           }, []);
      return ( <div>
          <h2>From_1 </h2>
          <input ref = {ref_year }  type="text" placeholder="year"  />
          <input ref = {ref_trai }  type="text" placeholder="trai" />
          <button  ref = {ref_button }   >ty_le_phoi</button>
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


    F.show_From_1 = function () {

      ReactDOM.render( <From_1 /> ,  ref_return.current) ;

      let url_change = "/F/From_1" ;
      window.history.replaceState(null, null, url_change);
      console.log(666666666666666666);
     }
  
     F.show_From_2 =  function () {

      ReactDOM.render( <From_2 /> ,  ref_return.current) ;
      let url_change = "/F/From_2" ;
      window.history.replaceState(null, null, url_change);
     }
     F.show_From_3 = function () {

      ReactDOM.render( <From_3 /> ,  ref_return.current) ;
      let url_change =  "/F/From_3" ;
      window.history.replaceState(null, null, url_change);
     }
  


  return ( <div>
      <div  ref ={ ref_1 }   onClick={ F.show_From_1 } > From 1</div>
      <div  ref ={ ref_2 }   onClick={ F.show_From_2  } > From 2</div>
      <div  ref ={ ref_3 }   onClick={ F.show_From_3  }> From 3</div>

      <div   ref ={ ref_return }   > Data</div>

  </div> ); 

  }

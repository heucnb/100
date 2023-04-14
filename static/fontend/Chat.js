

function Chat() {
                            
    let ref_0 = useRef(null) ;
    let ref_input = useRef(null) ;
    let ref_send = useRef(null) ;
       useEffect(() => {  
        ref_send.current.onclick =function (event) {

            socket.emit('chat message', ref_input.current.textContent);
            ref_input.current.textContent = '';;
        }
        let messages = ref_send.current ;
        socket.on('chat message', function(msg) {
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
          });
    

              }, []);

return ( 
   <div className={'flex flex-wrap'} >  
                  <div ref = {ref_0 } className={`mx-5 mt-2 w-full`}  > Chat socket  </div>
                  <div ref = {ref_input } contentEditable='true'  className={'mx-5  mt-2 p-2 grow  border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '} >

                  </div>
                  <div ref = {ref_send } className={' my-2  flex justify-end'} > 
                    Send   
                  </div>
                
  
</div>

  


)

}


function Chat_2() {
                            
    let ref_0 = useRef(null) ;
    let ref_input = useRef(null) ;
    let ref_send = useRef(null) ;
       useEffect(() => {  
        ref_send.current.onclick =function (event) {

            socket.emit('chat message_2', ref_input.current.textContent);
            ref_input.current.textContent = '';;
        }
        let messages = ref_send.current ;
        socket.on('chat message_2', function(msg) {
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
          });
    

              }, []);

return ( 
   <div className={'flex flex-wrap'} >  
                  <div ref = {ref_0 } className={`mx-5 mt-2 w-full`}  > Chat socket  </div>
                  <div ref = {ref_input } contentEditable='true'  className={'mx-5  mt-2 p-2 grow  border border-solid border-emerald-400  focus:border-2 focus:border-solid focus:border-emerald-600 outline-0  '} >

                  </div>
                  <div ref = {ref_send } className={' my-2  flex justify-end'} > 
                    Send   
                  </div>
                
  
</div>

  


)

}



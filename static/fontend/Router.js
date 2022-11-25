

function Router() {

  
    console.log(path_name);
   
     if (  path_name.startsWith('/excel') ) {
     
      return  ReactDOM.render(React.createElement(Table_hieu_2, null), document.getElementById('root'));
     }
    //-------------------------------------------------------------------------------
    if (path_name_test(path_name, '/F/From_1')) {
  
      ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
      F.show_From_1();
      return;
    }
  
  //------------------------------------------------------------------------------------------
    if (path_name_test(path_name, '/F/From_2')) {
  
      ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
      F.show_From_2();
      return;
    }
  //------------------------------------------------------------------------------------------------  
    
    if (path_name_test(path_name, '/F/From_3')) {
  
      ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
      F.show_From_3();
      return;
    }
  //------------------------------------------------------------------------------------------  
    if (path_name.startsWith('/F')) {
  
  
      return ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
  
    }
  //------------------------------------------------------------------------------------------  
  
    if (path_name.startsWith('/B')) {
      return ReactDOM.render("trang B", document.getElementById('root'));
  
    }
  //------------------------------------------------------------------------------------------
  
  if (path_name.startsWith('/File')) {
    return   file_manager(document.getElementById('root'))  ;
  
  }
  
  //-----------------------------------------------------------------------------------------
  
  if (path_name.startsWith('/')) {
    return ReactDOM.render("trang home", document.getElementById('root'));
  
  }
  
  
  }
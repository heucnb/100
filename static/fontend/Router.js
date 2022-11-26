

function Router() {

  
    console.log(path_name);
   
     if ( path_name_test(path_name, '/excel') ) {
     
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
    if (path_name_test(path_name, '/F')) {
  
  
      return ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
  
    }
  //------------------------------------------------------------------------------------------  
  
    if (path_name_test(path_name, '/B')) {
      return ReactDOM.render("trang B", document.getElementById('root'));
  
    }
  //------------------------------------------------------------------------------------------
  
  if (path_name_test(path_name, '/File')) {
    return   file_manager(document.getElementById('root'))  ;
  
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  if (path_name_test(path_name, '/hh')) {
  
  
    return ReactDOM.render(React.createElement(Svg_folder, null), document.getElementById('root'));

  }
  
  //-----------------------------------------------------------------------------------------
  
  if (path_name.startsWith('/')) {
    return ReactDOM.render("trang home", document.getElementById('root'));
  
  }
  
  
  }
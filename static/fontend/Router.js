

function Router() {


 let path_quy_ve = path_match (path_name) ;
 console.log(path_quy_ve);
    switch (path_quy_ve) {
      //-----------------------------------------------------------------------------------------------------------------
      case '/excel':
       ReactDOM.render(React.createElement(Table_hieu_2, null), document.getElementById('root'));
       break;
       //----------------------------------------------------------------------------------------------------------------
       case '/F':
        ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
        break;
         //----------------------------------------------------------------------------------------------------------------
        case '/F/From_1':
          ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
          F.show_From_1();
          break;
           //----------------------------------------------------------------------------------------------------------------
        case '/F/From_2':
          ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
          F.show_From_2();
          break;
           //----------------------------------------------------------------------------------------------------------------
          case '/F/From_3':
            ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
            F.show_From_3();
            break;
             //----------------------------------------------------------------------------------------------------------------
            case '/B':
              ReactDOM.render("trang B", document.getElementById('root'));
              break;
               //----------------------------------------------------------------------------------------------------------------
              case '/File':
                file_manager(document.getElementById('root'))  ;
                break;
                 //----------------------------------------------------------------------------------------------------------------
                case '/hh':
                  ReactDOM.render(React.createElement(Svg_file, null), document.getElementById('root'));
                  break;
      default:
        ReactDOM.render("trang home", document.getElementById('root'));
        break;
    }
   
    
  

    _html.style.fontSize = `${font_size}px`;
  
  }
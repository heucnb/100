

function Router() {


 let path_quy_ve = path_match (path_name) ;
 console.log(path_quy_ve);
    switch (path_quy_ve) {
      //-----------------------------------------------------------------------------------------------------------------
      case '/node/Login':
       ReactDOM.render(React.createElement(Login, null), document.getElementById('root'));
       break;
      //-----------------------------------------------------------------------------------------------------------------
      case '/node/excel':
       ReactDOM.render(React.createElement(Table_hieu_2, null), document.getElementById('root'));
       break;
       //----------------------------------------------------------------------------------------------------------------
       case '/node/F':
        ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
        break;
         //----------------------------------------------------------------------------------------------------------------
        case '/node/F/From_1':
          ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
          F.show_From_1();
          break;
           //----------------------------------------------------------------------------------------------------------------
        case '/node/F/From_2':
          ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
          F.show_From_2();
          break;
           //----------------------------------------------------------------------------------------------------------------
          case '/node/F/From_3':
            ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
            F.show_From_3();
            break;
             //----------------------------------------------------------------------------------------------------------------
            case '/node/B':
              ReactDOM.render("trang B", document.getElementById('root'));
              break;
               //----------------------------------------------------------------------------------------------------------------
              case '/node/File':
                file_manager(document.getElementById('root'))  ;
                break;
                 //----------------------------------------------------------------------------------------------------------------
                case '/node/hh':
                  ReactDOM.render(React.createElement(Svg_file, null), document.getElementById('root'));
                  break;
                  case '/node/test':
                    ReactDOM.render(React.createElement(Table,  { value: { data :  [[1,2,3,4,5,6],[10,11,12,13,14,15,16]]}}), document.getElementById('root'));
                    break;
      default:
        ReactDOM.render("trang home", document.getElementById('root'));
        break;
    }
   
    
  

    _html.style.fontSize = `${font_size}px`;
  
  }
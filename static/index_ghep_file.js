function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(F, null), /*#__PURE__*/React.createElement(Footer, null));
}
;
function F() {
  let ref_1 = useRef(null);
  let ref_2 = useRef(null);
  let ref_3 = useRef(null);
  let ref_return = useRef(null);
  function From_1() {
    let ref_return = useRef(null);
    let ref_year = useRef(null);
    let ref_trai = useRef(null);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "From_1 "), /*#__PURE__*/React.createElement("input", {
      ref: ref_year,
      type: "text",
      placeholder: "year"
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref_trai,
      type: "text",
      placeholder: "trai"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => ReactDOM.render("80%", ref_return.current)
    }, "ty_le_phoi"), /*#__PURE__*/React.createElement("div", {
      ref: ref_return
    }, " D\u1EEF li\u1EC7u"));
  }
  ;
  function From_2() {
    let ref_return = useRef(null);
    let ref_year = useRef(null);
    let ref_trai = useRef(null);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "From_2 "), /*#__PURE__*/React.createElement("input", {
      ref: ref_year,
      type: "text",
      placeholder: "year"
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref_trai,
      type: "text",
      placeholder: "trai"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => ReactDOM.render("90%", ref_return.current)
    }, "ty_le_\u0111\u1EBB"), /*#__PURE__*/React.createElement("div", {
      ref: ref_return
    }, " D\u1EEF li\u1EC7u"));
  }
  ;
  function From_3() {
    let ref_return = useRef(null);
    let ref_year = useRef(null);
    let ref_trai = useRef(null);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "From_3 "), /*#__PURE__*/React.createElement("input", {
      ref: ref_year,
      type: "text",
      placeholder: "year"
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref_trai,
      type: "text",
      placeholder: "trai"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => ReactDOM.render("100%", ref_return.current)
    }, "cai s\u1EEFa"), /*#__PURE__*/React.createElement("div", {
      ref: ref_return
    }, " D\u1EEF li\u1EC7u"));
  }
  ;
  F.show_From_1 = function () {
    ReactDOM.render( /*#__PURE__*/React.createElement(From_1, null), ref_return.current);
    let url_change = "/F/From_1";
    window.history.replaceState(null, null, url_change);
    console.log(666666666666666666);
  };
  F.show_From_2 = function () {
    ReactDOM.render( /*#__PURE__*/React.createElement(From_2, null), ref_return.current);
    let url_change = "/F/From_2";
    window.history.replaceState(null, null, url_change);
  };
  F.show_From_3 = function () {
    ReactDOM.render( /*#__PURE__*/React.createElement(From_3, null), ref_return.current);
    let url_change = "/F/From_3";
    window.history.replaceState(null, null, url_change);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: ref_1,
    onClick: F.show_From_1
  }, " From 1"), /*#__PURE__*/React.createElement("div", {
    ref: ref_2,
    onClick: F.show_From_2
  }, " From 2"), /*#__PURE__*/React.createElement("div", {
    ref: ref_3,
    onClick: F.show_From_3
  }, " From 3"), /*#__PURE__*/React.createElement("div", {
    ref: ref_return
  }, " Data"));
}
async function file_manager(dom) {
  function Content_mennu() {
    let css = {
      hover: {
        backgroundColor: '	#acac9a'
      },
      leave: {
        backgroundColor: 'white'
      },
      _row: {
        width: '22%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: 'inherit',
        margin: '2px 5px 2px 2px',
        textAlign: 'start',
        fontSize: 16,
        border: '0px solid #00A170 '
      }
    };
    let ref_Content_mennu = useRef(null);
    useEffect(() => {
      let collection = ref_Content_mennu.current.children;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////              
      for (let index = 0, len = collection.length; index < len; index++) {
        ref_Content_mennu.current.children[index].onmouseenter = function () {
          hover(event, css.hover, css.leave, ref_Content_mennu.current.children[index]);
        };
      }
      console.log(ref_Content_mennu.current.children[2]);

      //------------------------------------------------------------------------------------------------             
      // kh??ng d??ng ???????c onclick ??? ????y v?? n?? s??? ch???y sau onblur
      // khi onblur ch???y Content_mennu m???t n??n onclick kh??ng ???????c th???c thi
      ref_Content_mennu.current.children[2].onmousedown = function _rename() {
        let index = File_manager.ref_0_index;
        File_manager.ref_0.children[index].children[0].children[1].innerHTML = ` <div    style="  position:absolute;      background-color: azure; width: inherit; height: inherit ;   white-space: nowrap;    "> ${File_manager.ref_0.children[index].children[0].children[1].textContent}  </div>`;
        let div_rename = File_manager.ref_0.children[index].children[0].children[1].children[0];
        div_rename.setAttribute("contenteditable", true);

        // ph???i setTimeout ??? ????y v?? ?????i onblur ??? File_manager ch???y xong ????
        setTimeout(() => {
          let range = new Range();
          // childNodes[0] l???y text trong div ch?? ?? remove space
          // ta c?? th??? d??ng textContent 
          let len = div_rename.childNodes[0].length;
          range.setStart(div_rename.childNodes[0], 0);
          range.setEnd(div_rename.childNodes[0], len);
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(range);
          div_rename.onblur = function () {
            let text = div_rename.textContent;
            let parent = div_rename.parentElement;
            parent.innerHTML = text;
            File_manager.data[index - 1][0] = text;
            console.log(File_manager.data);
            // sau ???? post l??n server x??? l?? ti???p
          };
        }, 0);
      };

      //---------------------------------------------------------------------------------------------------------------------    

      // kh??ng d??ng ???????c onclick ??? ????y v?? n?? s??? ch???y sau onblur
      // khi onblur ch???y Content_mennu m???t n??n onclick kh??ng ???????c th???c thi
      ref_Content_mennu.current.children[3].onmousedown = function _detele() {
        let index = File_manager.ref_0_index;
        File_manager._detele(index - 1);
      };

      //---------------------------------------------------------------------------------------------------------------------    

      // kh??ng d??ng ???????c onclick ??? ????y v?? n?? s??? ch???y sau onblur
      // khi onblur ch???y Content_mennu m???t n??n onclick kh??ng ???????c th???c thi
      ref_Content_mennu.current.children[0].onmousedown = function _copy() {
        let index = File_manager.ref_0_index;
        File_manager._copy(index - 1);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref_Content_mennu,
      style: {
        padding: '2px 10px 2px 10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    }, /*#__PURE__*/React.createElement("div", null, " Copy  "), /*#__PURE__*/React.createElement("div", null, " Paste "), /*#__PURE__*/React.createElement("div", null, " Rename "), /*#__PURE__*/React.createElement("div", null, " Delete  "));
  }
  ;
  function File_manager(props) {
    let change_width;
    let vi_tri_change;
    let [name_foder_and_file, set_state_1] = useState(props.value.data);
    let [css, set_css] = useState(() => {
      return {
        flex_container: {
          width: '100%',
          display: "flex",
          boxSizing: 'border-box',
          backgroundColor: 'white',
          border: '1px solid #633517 '
        },
        flex_item: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: '2px 5px 2px 2px',
          textAlign: 'center',
          fontSize: 16,
          border: '0px solid #00A170 ',
          padding: 2,
          display: "flex",
          alignItems: 'center'
        },
        title: {
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'start',
          border: '0px solid #00A170 ',
          padding: 2,
          display: "flex"
        },
        icon: {
          display: "flex",
          marginRight: 2,
          alignItems: 'center'
        },
        select_file: {
          width: '100%'
        },
        _row: {
          width: '15%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: 'inherit',
          margin: '2px 5px 2px 2px',
          textAlign: 'start',
          fontSize: 16,
          border: '0px solid #00A170 '
        },
        giai_thich_file: {
          position: 'absolute',
          top: 200,
          left: 300,
          display: "flex",
          backgroundColor: 'white'
        },
        content_menu: {
          position: 'absolute',
          top: 200,
          left: 300,
          display: "flex",
          backgroundColor: 'white'
        },
        hover: {
          backgroundColor: '	#acac9a'
        },
        leave: {
          backgroundColor: 'white',
          border: '0px solid white '
        },
        max_width_size: function () {
          let array_size = name_foder_and_file.map((i, index) => {
            return i = i[2].length;
          });
          return Math.max(...array_size) * 8 + 'px';
        }()
      };
    });
    let x_mouse = useRef(null);
    let y_mouse = useRef(null);
    let ref_giai_thich_file = useRef(null);
    let ref_content_menu = useRef(null);
    let ref_0 = useRef(null);
    let ref_driver = useRef(null);
    let ref_bar = useRef(null);
    let ref_bar_1 = useRef(null);
    let ref_bar_2 = useRef(null);
    let ref_bar_3 = useRef(null);
    let ref_bar_4 = useRef(null);
    let ref_bar_5 = useRef(null);
    let ref_embed = useRef(null);
    let path_cu = useRef([""]);
    let ref_show_file = useRef(null);
    let ref_copy = useRef(null);
    File_manager._detele = function (i) {
      path_cu.current.push(name_foder_and_file[i][0]);
      axios.post("/Hieu/driver_detele", {
        file: path_cu.current.join("/")
      }).then(function (response) {
        console.log(response.data);
        path_cu.current.splice(-1, 1);
        console.log(path_cu.current);
        set_state_1(name_foder_and_file => {
          File_manager.data.splice(i, 1);
          let name_foder_and_file_update = [].concat(File_manager.data);
          return name_foder_and_file_update;
        });
      });
    };
    File_manager._copy = function (i) {
      let name_file_copy = [name_foder_and_file[i][0], name_foder_and_file[i][1], name_foder_and_file[i][2]];
      path_cu.current.push(name_file_copy[0]);
      let path_file_copy = path_cu.current.join("/");
      console.log(path_file_copy);
      path_cu.current.splice(-1, 1);
      function Copy() {
        function paste_here() {
          let path_file_paste = path_cu.current.join("/");
          console.log(path_file_paste);
          axios.post("/Hieu/driver_copy", {
            file: [path_file_copy, path_file_paste]
          }).then(function (response) {
            if (response.data === "ok") {
              set_state_1(name_foder_and_file => {
                File_manager.data.push(name_file_copy);
                let name_foder_and_file_update = [].concat(File_manager.data);
                return name_foder_and_file_update;
              });
              ReactDOM.unmountComponentAtNode(ref_copy.current);
            } else {
              _alert( /*#__PURE__*/React.createElement("div", null, " Th\u01B0 m\u1EE5c ", path_file_paste, " \u0111\xE3 c\xF3 folder tr\xF9ng t\xEAn l\xE0:   ", /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'crimson'
                }
              }, "  ", name_foder_and_file[i][0], " "), "   r\u1ED3i  "));
            }
          });
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            boxSizing: 'border-box',
            position: 'relative',
            backgroundColor: 'blanchedalmond',
            width: '100%',
            border: '1px solid #633517 ',
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            margin: 6
          }
        }, " ", name_foder_and_file[i][0], "  "), /*#__PURE__*/React.createElement("div", {
          style: {
            margin: 6,
            display: 'flex'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            marginRight: 6
          }
        }, " Canel  "), /*#__PURE__*/React.createElement("div", {
          onClick: event => {
            paste_here();
          }
        }, "  Paste here ")));
      }
      ReactDOM.render( /*#__PURE__*/React.createElement(Copy, null), ref_copy.current);
    };
    useEffect(() => {
      console.log(path_cu.current);
      File_manager.data = name_foder_and_file;
      window.addEventListener("contextmenu", e => e.preventDefault());
      let myTimeout;
      let kiem_tra_Content_mennu = false;
      let index_truoc_do;
      let collection = ref_0.current.children;
      ////////////////////////////////////////////////////////////////////////////////////////////////          
      collection[0].onmouseenter = function (event) {
        clearTimeout(myTimeout);
        ReactDOM.unmountComponentAtNode(ref_giai_thich_file.current);
      };
      //////////////////////////////////////////////////////////////////////////////////////////////////        
      for (let index = 1, len = collection.length; index < len; index++) {
        //--------------------------------------------------------------------
        // khi hover v??o d??ng th?? hi???n hover_show_giai_thich_file
        collection[index].onmouseenter = function (event) {
          x_mouse.current = event.clientX;
          y_mouse.current = event.clientY;
          console.log('--', x_mouse.current, y_mouse.current);
          event.target.onmousemove = function (event) {
            // event.preventDefault() ;
            x_mouse.current = event.clientX;
            y_mouse.current = event.clientY;
          };
          // kiem_tra_Content_mennu === true th?? kh??ng cho  onmouseenter x???y ra ??? t???t c??? c??c d??ng
          if (kiem_tra_Content_mennu === false) {
            // khi hover ra kh???i xo?? gi???i th??ch file
            collection[index].onmouseleave = function (event) {
              ReactDOM.unmountComponentAtNode(ref_giai_thich_file.current);
              clearTimeout(myTimeout);
            };
            hover_show_giai_thich_file(index);
          }
        };

        //-------------------------------------------------------------------------- 

        collection[index].onmousedown = function (event) {
          if (event.buttons === 1) {
            path_cu.current.push(name_foder_and_file[index - 1][0]);

            // ??? backend ta ???? thi???t l???p name_foder_and_file[index-1][2] ==="" l?? folder kh??c "" l?? file
            // n???u l?? ???n v??o folder th?? ch???y
            if (name_foder_and_file[index - 1][2] === "") {
              console.log(path_cu.current);
              axios.post("/Hieu/driver", {
                folder: path_cu.current.join("/")
              }).then(function (response) {
                let data = response.data;
                set_state_1(data);
                ReactDOM.render( /*#__PURE__*/React.createElement(Path_to_folder, {
                  value: ["Driver"].concat(path_cu.current.slice(1)).map((i, index) => {
                    return i = i + " /";
                  })
                }), ref_driver.current);
                function Path_to_folder(props) {
                  function _back() {
                    console.log(path_cu.current);
                    if (path_cu.current.length === 1 && path_cu.current[0] === "") {
                      return;
                    } else {
                      // thay ?????i m???ng hi???n t???i b???ng c??ch c??t ??i 1 ph???n t??? ??? v??? tr?? cu???i c??ng -1
                      path_cu.current.splice(-1, 1);
                      axios.post("/Hieu/driver", {
                        folder: path_cu.current.join("/")
                      }).then(function (response) {
                        set_state_1(response.data);
                        ReactDOM.render( /*#__PURE__*/React.createElement(Path_to_folder, {
                          value: ["Driver"].concat(path_cu.current.slice(1)).map((i, index) => {
                            return i = i + " /";
                          })
                        }), ref_driver.current);
                      });
                    }
                  }
                  return /*#__PURE__*/React.createElement("div", {
                    style: {
                      display: "flex",
                      alignItems: 'center'
                    }
                  }, /*#__PURE__*/React.createElement("img", {
                    className: 'w-4 h-[13px] ml-1 mr-1',
                    src: "/SVG/back.svg",
                    onClick: event => {
                      _back();
                    }
                  }), props.value.map((i, index) => {
                    return /*#__PURE__*/React.createElement("div", {
                      style: {
                        padding: 2
                      },
                      onMouseEnter: event => {
                        hover(event, css.hover, css.leave, ref_driver.current.children[0].children[index + 1]);
                      }
                    }, "  ", i, " ");
                  }));
                }
              });
            }

            //   // n???u l?? file   th?? ch???y
            if (name_foder_and_file[index - 1][2] !== "") {
              console.log(path_cu.current);
              ReactDOM.render( /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: ' rgba(		0, 0, 0, 0.8)',
                  zIndex: 2
                }
              }, /*#__PURE__*/React.createElement("div", {
                className: 'flex  items-center'
              }, /*#__PURE__*/React.createElement("img", {
                className: 'w-4 h-[13px] ml-2 mr-1 mt-1 ',
                src: "/SVG/back_path_white.svg",
                onClick: event => {
                  path_cu.current.splice(-1, 1);
                  ReactDOM.unmountComponentAtNode(ref_show_file.current);
                }
              }), /*#__PURE__*/React.createElement("img", {
                className: 'w-4 mr-[4px]',
                src: select_icon_from_file_name(name_foder_and_file[index - 1][0])
              }), /*#__PURE__*/React.createElement("div", {
                className: 'text-white  mt-1 '
              }, " ", name_foder_and_file[index - 1][0], "  ")), /*#__PURE__*/React.createElement("div", {
                ref: ref_embed
              }, "   ")), ref_show_file.current);
              ref_embed.current.innerHTML = ` <embed type= ${convert_file_name_to_type(name_foder_and_file[index - 1][0])} src= ${encodeURI(path_cu.current.join("/"))}   style= '  width: 90%; height: 90%; top: 5%; left: 5%; background-color: white; position: fixed; z-index: 3;'  >`;
            }
          }
          if (event.buttons === 2) {
            collection[index].style.backgroundColor = css.hover.backgroundColor;
            // xo?? b??? t?? m??u d??ng tr?????c ????
            if (index_truoc_do !== undefined) {
              Object.assign(collection[index_truoc_do].style, css.leave);
            }

            // xo?? b??? s??? ki???n onmouseleave ??? d??ng n??y
            if (typeof collection[index].onmouseleave === "function") {
              collection[index].onmouseleave = null;
            }
            // t?? m??u d??ng n??y
            Object.assign(collection[index].style, {
              backgroundColor: 'red'
            }, {
              border: '1px solid #00A170 '
            });
            ref_giai_thich_file.current.style.display = "none";

            // Hi???n th??? Content_mennu
            // set tabIndex ????? s??? ki???n onblur ???????c l???ng nghe
            collection[index].setAttribute("tabIndex", "-1");
            let _top = y_mouse.current + 'px';
            let left = x_mouse.current + 'px';
            setTimeout(() => {
              File_manager.ref_0 = ref_0.current;
              File_manager.ref_0_index = index;
              Object.assign(ref_content_menu.current.style, css.content_menu, {
                top: _top,
                left: left
              });
              ReactDOM.render( /*#__PURE__*/React.createElement(Content_mennu, null), ref_content_menu.current);
              kiem_tra_Content_mennu = true;
              // ??i???u ki???n ????? d??ng n??y k??ch ho???t

              index_truoc_do = index;
            }, 0);
          }
        };

        //---------------------------------------------------------------------

        collection[index].onblur = function (event) {
          console.log('onblur');
          Object.assign(collection[index].style, css.leave);
          ref_content_menu.current.style.display = 'none';
          kiem_tra_Content_mennu = false;
          index_truoc_do = undefined;
        };

        //--------------------------------------------------------------------------   
      }

      /////////////////////////////////////////////////////////////////////////////////////////////

      let width_at_element = i => {
        return ref_0.current.children[0].children[i].getBoundingClientRect().x;
      };
      let xac_dinh_co_change_width_khong_and_vi_tri_change = x => {
        let array = [];
        for (let index = 1; index < 3; index++) {
          array[index] = x >= width_at_element(index) - 5 && x <= width_at_element(index) + 5;
          if (array[index] === true) {
            vi_tri_change = index;
            return true;
          }
        }
        return false;
      };

      // khi move chu???t t???i g??c element th?? xu???t hi???n bi???u t?????ng thay ?????i k??ch th?????c c???t
      // n???u ???n gi??? chu???t tr??i khi move th?? thay ?????i k??ch th?????c c???t

      ref_0.current.children[0].onmousemove = function col_resize(event) {
        event.preventDefault();
        console.log(change_width);
        let x = event.clientX;
        if (xac_dinh_co_change_width_khong_and_vi_tri_change(x) || change_width === true) {
          document.body.style.cursor = "col-resize";
          console.log(change_width);
          ref_0.current.children[0].onmousedown = function (event) {
            if (event.buttons === 1) {
              // change_width = true sau ???? d??ng  document.addEventListener('mousemove' l???ng nghe s??? ki???n onmousemove ????? th???c thi fucntion col_resize
              change_width = true;
            }
          };
        } else {
          change_width = undefined;
          document.body.style.cursor = "default";
        }
      };

      //-------------------------------------------------------------------------------

      ref_0.current.children[0].onmouseleave = function (event) {
        if (change_width !== true) {
          console.log('onmouseleave');
          change_width = undefined;
          document.body.style.cursor = "default";
        }
      };

      /////////////////////////////////////////////////////////////////////////

      ref_bar_1.current.onclick = function create_folder(event) {
        set_state_1(name_foder_and_file => {
          let name_foder_and_file_update = [["foder_new", "date_115/10/2022", "type_1", "size"]].concat(name_foder_and_file);
          return name_foder_and_file_update;
        });
        ref_0.current.children[1].children[0].children[1].innerHTML = ` <div    style="  position:absolute;      background-color: azure; width: inherit; height: inherit ;   white-space: nowrap;    "> ${name_foder_and_file[0][0]}  </div>`;
        let div_rename = ref_0.current.children[1].children[0].children[1].children[0];
        div_rename.setAttribute("contenteditable", true);
        let range = new Range();
        // childNodes[0] l???y text trong div ch?? ?? remove space
        // ta c?? th??? d??ng textContent 
        let len = div_rename.childNodes[0].length;
        range.setStart(div_rename.childNodes[0], 0);
        range.setEnd(div_rename.childNodes[0], len);
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(range);
        //--------------------------------------------------
        div_rename.onblur = function () {
          let text = div_rename.textContent;
          set_state_1(name_foder_and_file => {
            let name_foder_and_file_update = [].concat(File_manager.data);
            name_foder_and_file_update[0][0] = text;
            return name_foder_and_file_update;
          });
        };
      };

      ////////////////////////////////////////////////////////////////////////
      function hover_show_giai_thich_file(i) {
        // ch?? ?? l???i trong react 16
        //Method Object.freeze() gi??p ch??ng ta chuy???n m???t object th??ng th?????ng sang tr???ng th??i kh??ng th??? modified(s???a ?????i).
        // trong react Object c???p 2 s??? b??? Object.freeze()
        // c?? th??? d??ng h??m Object.isFrozen(css.giai_thich_file) ????? ki???m tra n?? s??? tr??? v??? true
        // mu???n truy c???p ????? s???a ?????i ???????c ta ph???i t???o m???t b???n copy b???ng c??ch d??ng h??m Object.assign()
        // vd  Object.assign({}, css.giai_thich_file ,{top: _top},) s???a ?????i lu??n
        // ho???c sau khi t???o b???n copy r???i ta c?? th??? s???a css.giai_thich_file.left = x_mouse - 20 + 'px'; ???????c nh??ng tr?????c ???? ta ph???i t???o b???n copy

        function Giai_thich_file() {
          return /*#__PURE__*/React.createElement("div", {
            className: `  absolute bg-white top-[${_top}] left-[${_left}] px-0.5 py-2.5 shadow-2xl `
          }, /*#__PURE__*/React.createElement("div", null, " ", name_foder_and_file[index - 1][0], "  "), /*#__PURE__*/React.createElement("div", null, " ", name_foder_and_file[index - 1][1], " "), /*#__PURE__*/React.createElement("div", null, " ", name_foder_and_file[index - 1][2], "  "));
        }
        ;
        let index = i;
        let _left = x_mouse.current - 20 + 'px';
        let _top = ref_0.current.children[index].getBoundingClientRect().y + 25 + 'px';
        myTimeout = setTimeout(() => {
          let max_x_mouse = ref_0.current.children[index].children[1].getBoundingClientRect().x;
          let width_col_name = ref_0.current.children[index].children[0].getBoundingClientRect().width;
          let width_icon = ref_0.current.children[index].children[0].children[0].getBoundingClientRect().width;
          if (x_mouse.current < max_x_mouse && convert_text_to_pixcel(name_foder_and_file[index - 1][0], font_size) + width_icon >= width_col_name) {
            ReactDOM.render( /*#__PURE__*/React.createElement(Giai_thich_file, null), ref_giai_thich_file.current);
          }
        }, 200);
      }
      ;

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }, [name_foder_and_file]);
    useEffect(() => {
      function change_width_to_undefined(event) {
        event.preventDefault();
        change_width = undefined;
        document.body.style.cursor = "default";
      }

      // xo?? b??? l???ng nghe s??? ki???n thay ?????i k??ch th?????c c???t t???i element k??ch ho???t s??? ki???n
      document.addEventListener('mouseup', change_width_to_undefined);

      // change_width === true t???c l?? ???? ???n gi??? chu???t tr??i khi di chuy???n 
      // d??ng document l???ng nghe ????? khi di chuy???n ra ngo??i element k??ch ho???t s??? ki???n s??? ki???n v???n x???y ra
      document.addEventListener('mousemove', function (event) {
        if (change_width === true) {
          let collection = ref_0.current.children;
          let width;
          width = event.clientX - ref_0.current.children[0].children[vi_tri_change - 1].getBoundingClientRect().x;
          ref_0.current.parentElement.style.overflowX = 'auto';
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
    return /*#__PURE__*/React.createElement("div", {
      className: 'pl-1 pt-1'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_giai_thich_file
    }, "   "), /*#__PURE__*/React.createElement("div", {
      ref: ref_content_menu
    }, "   "), /*#__PURE__*/React.createElement("div", {
      ref: ref_show_file
    }, "   "), /*#__PURE__*/React.createElement("div", {
      className: 'flex w-3/4 border border-solid border-yellow-900 justify-between'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_driver
    }, /*#__PURE__*/React.createElement("div", {
      className: 'pl-[0.12rem]'
    }, "  Driver  ")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      className: 'focus:bg-red-100 m-0 hover:bg-sky-700 outline-0 placeholder-slate-400 placeholder-shown:italic',
      type: "text",
      placeholder: "Search..."
    }))), /*#__PURE__*/React.createElement("div", {
      ref: ref_bar,
      className: 'w-3/4 flex box-border bg-white border-l border-r border-solid border-yellow-900'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_bar_1,
      className: 'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'
    }, /*#__PURE__*/React.createElement("img", {
      className: 'w-4 mr-1',
      src: "/SVG/folder.svg"
    }), /*#__PURE__*/React.createElement("div", null, " New folder   ")), /*#__PURE__*/React.createElement("div", {
      ref: ref_bar_2,
      className: 'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'
    }, /*#__PURE__*/React.createElement("img", {
      className: 'w-4 mr-1',
      src: "/SVG/file_document.svg"
    }), /*#__PURE__*/React.createElement("div", null, "  New text file  ")), /*#__PURE__*/React.createElement("div", {
      ref: ref_bar_3,
      className: 'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'
    }, /*#__PURE__*/React.createElement("img", {
      className: 'w-4 mr-1',
      src: "/SVG/file_upload.svg"
    }), /*#__PURE__*/React.createElement("div", null, "  Upload file ")), /*#__PURE__*/React.createElement("div", {
      ref: ref_bar_4,
      className: 'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'
    }, /*#__PURE__*/React.createElement("img", {
      className: 'w-4 mr-1',
      src: "/SVG/folder_upload.svg"
    }), /*#__PURE__*/React.createElement("div", null, "  Upload Folder ")), /*#__PURE__*/React.createElement("div", {
      ref: ref_bar_5,
      className: 'hover:bg-sky-700 overflow-hidden whitespace-nowrap m-0 pr-2 pl-2 text-center text-base border-0 border-solid p-0 flex items-center border-yellow-900'
    }, /*#__PURE__*/React.createElement("img", {
      className: 'w-4 mr-1',
      src: "/SVG/folder_upload.svg"
    }), /*#__PURE__*/React.createElement("div", null, " Th\xF4ng b\xE1o   "))), /*#__PURE__*/React.createElement("div", {
      className: 'w-3/4 grid box-border bg-white border border-solid border-yellow-900 overflow-hidden'
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref_0,
      className: 'w-full h-[75vh] overflow-auto  box-border bg-white border-0  border-solid border-yellow-900 '
    }, /*#__PURE__*/React.createElement("div", {
      className: 'grid grid-cols-3  box-border  bg-slate-200'
    }, /*#__PURE__*/React.createElement("div", {
      className: ' box-border pl-1 overflow-hidden '
    }, " Name "), /*#__PURE__*/React.createElement("div", {
      className: ' box-border pl-1 overflow-hidden  border-l border-r border-solid border-yellow-700 '
    }, "  Date modified  "), /*#__PURE__*/React.createElement("div", {
      className: ' box-border pl-1 overflow-hidden '
    }, "  Size  ")), name_foder_and_file.map((i, index) => {
      return /*#__PURE__*/React.createElement("div", {
        className: 'grid grid-cols-3 hover:bg-sky-700 w-full   box-border '
      }, /*#__PURE__*/React.createElement("div", {
        className: 'flex box-border m-1 overflow-hidden whitespace-no-wrap '
      }, /*#__PURE__*/React.createElement("img", {
        className: 'w-4 mr-[4px]',
        src: select_icon_from_file_name(i[0])
      }), /*#__PURE__*/React.createElement("div", null, i[0])), /*#__PURE__*/React.createElement("div", {
        className: ' box-border m-1 overflow-hidden  '
      }, "  ", i[1], "  "), /*#__PURE__*/React.createElement("div", {
        className: ' box-border m-1 overflow-hidden  '
      }, "  ", i[2], "  "));
    })), /*#__PURE__*/React.createElement("div", {
      ref: ref_copy
    }, "   ")));
  }
  return ReactDOM.render( /*#__PURE__*/React.createElement(File_manager, {
    value: await axios.post("/Hieu/driver", {
      folder: ""
    })
  }), dom);
}
function Footer() {
  function css() {
    return {
      center_bottom: {
        backgroundColor: "#d8dcd6",
        textAlign: "center",
        border: "1px ridge #ccc"
      }
    };
  }
  var css = css();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: css.center_bottom
  }, /*#__PURE__*/React.createElement("h3", null, "Foolish Developer"), /*#__PURE__*/React.createElement("p", null, "Foolish Developer is a blog website where you will find great tutorials on web design and development")));
}
;
function path_match(string) {
  if (string.slice(-1) === '/') {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
// vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function select_icon_from_file_name(file_name) {
  extension = file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  switch (extension) {
    case '':
      return "/SVG/folder.svg";
    case 'jpg':
      return "/SVG/file_image.svg";
    case 'png':
      return "/SVG/file_image.svg";
    case 'git':
      return "/SVG/file_image.svg";
    case 'js':
      return "/SVG/file_js.svg";
    case 'json':
      return "/SVG/file_json.svg";
    default:
      return "/SVG/file_document.svg";
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_text_to_pixcel(text, font_size) {
  return text.length * (font_size / 2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convert_file_name_to_type(file_name) {
  // (Math.max(0, file_name.lastIndexOf(".")) tr??? v??? 0 
  // th?? (Math.max(0, file_name.lastIndexOf(".")) || Infinity  s??? l?? 0 || Infinity 
  // do 0 Logical operators s??? convert th??nh False n??n False || Infinity  s??? tr??? v??? Infinity
  // ch?? ?? t??n file l?? .sdgdf s??? tr??? v??? "" do file_name.lastIndexOf(".") tr??? v??? 0
  let extension = file_name.slice((Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1);
  let array_type = ["text/plain", "text/html", " text/csv", "text/pdf ", " video/mp4", " video/mpeg", "application/zip", "application/msword", " application/vnd.ms-excel", " image/jpg", " image/png"];
  let array_extension = ["text", "html", "csv", "pdf", "mp4", "mpeg", "zip", "doc", "xlsx", "jpg", "png"];
  // n???u  t??m th???y th?? tr??? v???  type ph?? h???p        
  for (let index = 0, len = array_extension.length; index < len; index++) {
    if (array_extension[index] === extension) {
      return array_type[index];
    }
  }
  // n???u kh??ng t??m th???y th?? tr??? v???  "text/plain"
  return array_type[0];
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tr??n Dom d??ng onMouseOver ????? l???ng nghe
function hover(event, object_style, object_style_leave, dom) {
  Object.assign(dom.style, object_style);
  dom.onmouseleave = function (event) {
    Object.assign(dom.style, object_style_leave);
  };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function _alert(componet_react) {
  function Alert() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        padding: '1rem 1rem',
        top: '10%',
        left: '30%',
        border: '1px solid transparent',
        borderRadius: '0.25rem',
        backgroundColor: '#fff3cd',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    }, /*#__PURE__*/React.createElement("div", null, " ", componet_react, " "), /*#__PURE__*/React.createElement("button", {
      style: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '0.25rem',
        color: 'white',
        backgroundColor: '#0275d8',
        border: '1px solid transparent',
        marginLeft: '70%',
        marginTop: 15,
        padding: 5
      },
      onClick: () => {
        ReactDOM.unmountComponentAtNode(_div);
      }
    }, "Tho\xE1t"));
  }
  let _div = document.createElement("_div");
  document.getElementById("root").appendChild(_div);
  return ReactDOM.render( /*#__PURE__*/React.createElement(Alert, null), _div);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Router() {
  let path_quy_ve = path_match(path_name);
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
      file_manager(document.getElementById('root'));
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
// *** th??? input v?? button khi click s??? l??m m???t s??? ki???n ti??u ??i???m c???a focus, th??? div th?? kh??ng. Do ???? ta ph???i setTimeout ????? l???y l???i ti??u ??i???m sau.

function Table_hieu_2(props) {
  // d??ng fill ch???m h??n m???t ??t kh??ng ????ng k??? so v???i for 
  var Data = new Array(1000).fill(null).map(i => i = new Array(1000).fill(null));
  var text_formular = new Array(1000).fill(null).map(i => i = new Array(1000).fill(null));
  var index_formular = new Array(1000).fill(null).map(i => i = new Array(1000).fill(null));
  var formular = [];
  var Data_show;
  var Data_show_0;
  let limit = 50;
  let limit_col = 50;
  let fileHandle;
  if (props.value === undefined) {} else {
    let Data_save = props.value.Data_save;
    let _len = Data_save.length;
    for (let index = 0; index < _len; index++) {
      Data[Data_save[index][0]][Data_save[index][1]] = Data_save[index][2];
      text_formular[Data_save[index][0]][Data_save[index][1]] = Data_save[index][3];
      index_formular[Data_save[index][0]][Data_save[index][1]] = Data_save[index][4];
    }
    let len_formular = props.value.formular.length;
    let formular_save = props.value.formular;
    for (let index = 0; index < len_formular; index++) {
      formular.push(eval(formular_save[index]));
    }
    setTimeout(() => {
      ref_file_name.current.innerHTML = props.file_name;
    }, 0);
  }
  Data_show = Data.slice(0, limit);
  Data_show_0 = Data_show.map((item, index) => {
    return item.slice(0, limit_col);
  });
  let ref_file = useRef(null);
  var vi_tri_o_truoc = [null, null];
  var vi_tri_click_in_Data = [null, null, null, null];
  var cong_thuc_chua_hoan_thanh = "";
  var onKeyDown_1_element = false;
  var onKeyDown = false;
  var onclick_tinh_toan = false;
  var thanh_dia_chi_0_on_keydown = false;
  var cong_thuc_them_vao = [null, null, null];
  var vi_tri_cong_thuc_them_vao;
  var table_excel = useRef(null);
  var a = useRef(null);
  var canvas_ = useRef(null);
  var ref_0 = useRef(null);
  var ref_file_name = useRef(null);
  var thanh_dia_chi_0 = useRef(null);
  var thanh_dia_chi_1 = useRef(null);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var limit_view;
  var limit_col_view;
  let tro_ve_vi_tri_begin;
  useEffect(() => {
    table_excel.current.addEventListener("scroll", _onScroll);
    tro_ve_vi_tri_begin = a.current.children[1].children[limit_col + 1].getBoundingClientRect().left;
    document.body.style.zoom = "100%";

    // ng??n c???n zoom b???ng ctr
    // ph???i truy???n th??m thu???c t??nh  {passive: false}  m???i ng??n c???n ???????c
    document.body.addEventListener("wheel", e => {
      if (e.ctrlKey === true) {
        e.preventDefault();
      }
    }, {
      passive: false
    });
    width_bar_reference_col = a.current.children[0].children[0].clientWidth;
    console.log(width_bar_reference_col);
    document.body.style.margin = "0px 20px 20px 20px";
    console.log(table_excel.current.clientHeight);
    var sum = 0;
    while (a.current.children[sum + 1].children[0].getBoundingClientRect().y <= table_excel.current.clientHeight - 2 + table_excel.current.getBoundingClientRect().y) {
      sum++;
    }
    limit_view = sum - 1;
    console.log('---------------------------------' + limit_view);
    var sum_col = 0;
    while (a.current.children[0].children[sum_col + 1].getBoundingClientRect().x <= table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth - 2) {
      sum_col++;
    }
    limit_col_view = sum_col - 1;
    console.log('---------------------------------' + limit_col_view);
    for (let i = 0; i <= limit_view; i++) {
      for (let j = 0; j <= limit_col_view; j++) {
        a.current.children[i + 1].children[j + 1].style.zIndex = j;
      }
    }
    vi_tri_click_in_Data = [0, 0, 0, 0];
    key_enter(0, 0, 0, 0); // t?? m??u v?? focus

    mien_select_array_2d[0] = 0;
    mien_select_array_2d[1] = 0;
    _onMouseEnter_not_event(0, 0, 0, 0);

    // canvas l??m m???t l???ng nghe s??? ki???n wheel ??? table_excel khi v??? tr?? mouse ??? canvas
    // th??m s??? ki???n n??y ????? khi cu???n canvas table_excel di chuy???n
    canvas_.current.addEventListener("wheel", evt => {
      table_excel.current.scrollTop = table_excel.current.scrollTop + evt.deltaY;
    });

    //   canvas l??m m???t l???ng nghe s??? ki???n click, double click 
    // th??m s??? ki???n n??y ????? ???n cavas ??i
    canvas_.current.onmousedown = function (event) {
      // khi click v??o canvas n???u kh??ng fill th?? s??? ???n canvas ??i
      if (trang_thai_fill === false) {
        console.log('???n canvas----------------');
        Object.assign(canvas_.current.style, {
          display: "none"
        });
        turn_off_onMouseEnter = true;
      }
    };

    // ta d??ng addEventListener ????? l???ng nghe 2 s??? ki???n document mousemove k??ch ho???t ??? 2 ch??? kh??c nhau
    //n???u d??ng  document.onmousemove = fuction th?? khi s??? ki???n 2 ta c??ng d??ng document.onmousemove = fuction kh??c th?? n?? s??? g??n th??nh 1 s??? ki???n
    document.addEventListener("mousemove", evt => {
      // v???tr?? ?? vi???t c??ng th???c kh??ng n???m trong khung nh??n th?? focus t???i thanh c??ng th???c
      if (vi_tri_o_truoc[0] <= limit_view - 1 & vi_tri_o_truoc[0] >= 0 && vi_tri_o_truoc[1] <= limit_col_view - 1 & vi_tri_o_truoc[1] >= 0) {} else {
        thanh_dia_chi_0.current.focus({
          preventScroll: true
        });
      }
    });
    if (path_name_test(path_name, "/excel/save")) {
      get_excel_get_save();
    }
    if (path_name.startsWith("/excel/file")) {
      get_excel_get_file();
    }
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // h??m n??y tr??? v??? array trong ???? array[1], v?? array[2] d??ng ????? x??c ?????nh v??? tr?? c???a con tr??? trong text m???i
  function paint_text(text, vi_tri_focus) {
    text = text.slice(0, vi_tri_focus) + "|_|_|" + text.slice(vi_tri_focus);
    console.log(text);
    var array_color = ['red', 'blue', 'orange', '#34568b', '#FF6F61', '#88B04B', '#9C4722', '#00A170', '#CE3175', '#0072B5', '	#999900', '#926AA6', '#00008B', '#CD212A', '#282D3C'];
    let array = [];
    let text_after_replace;
    text_after_replace = text.replace(/Data\$?\[[0-9]*\]\$?\[[0-9]*\]/gi, function (x) {
      let index_color;
      if (array.indexOf(x) !== -1) {
        // ?????u ti??n m???ng r???ng ch???y else tr?????c
        // l???n l???p sau ???? ch???y l???i ki???m tra xem Data[][] ti???p c?? ch??a n???u c?? r???i th?? l???y m??u c?? , n???u ch??a c?? xu???ng else push m??u m???i
        index_color = array.indexOf(x);
      } else {
        // ?????u ti??n t??m ???????c Data[][] kh???p th?? push v??o array
        // sau ???? x??c ?????nh m??u cho Data[][] ????
        array.push(x);
        index_color = array.length - 1;
      }
      // khi ???? h???t m??u m?? v???n c?? Data[][] th?? l???p l???i m??u t??? ?????u b???ng c??ch nh??n b???n array_color 
      if (index_color >= array_color.length) {
        array_color = array_color.concat(array_color);
      }
      return `<span   style='color: ${array_color[index_color]}'>${x}</span>`;
    });
    let offset;
    let node_index;
    const div = document.createElement("div");
    div.innerHTML = text_after_replace;
    let children = div.childNodes;
    let array_children = Array.from(children);
    console.log(array_children);
    let len = array_children.length;
    for (var i = 0; i < len; i++) {
      if (array_children[i].data !== undefined) {
        let kt = array_children[i].data.indexOf("|_|_|");
        if (kt !== -1) {
          node_index = i;
          offset = kt;
          break;
        }
      }
    }
    text_after_replace = text_after_replace.replace("|_|_|", "");
    return [text_after_replace, node_index, offset];
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function dia_chi_o_click(dia_chi_o_click_array_2d_row, dia_chi_o_click_array_2d_col, dia_chi_o_click_in_view_row, dia_chi_o_click_in_view_col) {
    // set ?????a ch??? ?? click trong array2d sau h??nh ?????ng tr??n

    vi_tri_click_in_Data[0] = dia_chi_o_click_array_2d_row;
    vi_tri_click_in_Data[1] = dia_chi_o_click_array_2d_col;
    // set ?????a ch??? ?? click trong khung nh??n hi???n th???
    vi_tri_click_in_Data[2] = dia_chi_o_click_in_view_row;
    vi_tri_click_in_Data[3] = dia_chi_o_click_in_view_col;
    thanh_dia_chi_1.current.innerHTML = vi_tri_click_in_Data;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function run_function_when_input_focus(input_, i, j, i_array_2d, j_array_2d) {
    var input_formula = thanh_dia_chi_0.current;
    // khi di chuy???n chu???t trong th??? input x??c ?????nh v??? tr?? c???a con chu???t t???i v??? tr?? n??o trong text input
    input_.onmousedown = function (event) {
      let range = document.createRange();
      let selection = window.getSelection();
      // setTimeout ??? ????y ????? window.getSelection() l???y v??? tr?? xong m???i cho v??o range
      setTimeout(() => {
        range.setStart(input_.firstChild, 0);
        range.setEnd(selection.anchorNode, selection.anchorOffset);
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
        console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
      }, 0);
    };

    // input nh???n b??n ph??m b???t ?????u t??? k?? t??? th??? 2.

    // sau ???? khi ???n 1 k?? t??? b???t k??? t??? b??n ph??m th?? l??u n?? v??o  text_formular
    //????? khi scroll th?? n?? xu???t hi???n l???i tr??n input
    input_.onkeydown = function (event) {
      // h??m n??y s??? ???????c k??ch ho???t l???i m???i khi nh???n b??n ph??m v??o input
      console.log("---------------------_input_.onkeydown");
      // khi ???n ph??m kh??c enter th?? ti???n h??nh ghi d??? li???u v??o th??? input
      if (event.keyCode !== 13) {
        let range = document.createRange();
        let selection = window.getSelection();
        // setTimeout ??? ????y ????? window.getSelection() l???y v??? tr?? xong m???i cho v??o range
        setTimeout(() => {
          console.log(selection.anchorNode, selection.anchorOffset);
          console.log(input_.firstChild);
          if (input_.firstChild === null) {
            vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 0;
          } else {
            // x??c ?????nh v??? tr?? con tr??? trong input
            range.setStart(input_.firstChild, 0);
            range.setEnd(selection.anchorNode, selection.anchorOffset);
            vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
            console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);

            //**************** */ trong javscript thu???n ghi gi?? tr??? t??? b??n ph??m v??o th??? input s??? di???n ra sau vi???c l???y gi?? tr??? t??? th??? input v??o bi???n.
            // ph???i setTimeout ??? ????y v?? ph???i ?????i input l???y gi?? tr??? t??? b??n ph??m m???i g??n v??o text_formular
            // sau ???? g??n gi?? tr??? khi nh???n l??n input_formula
            text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent;
            console.log('text_formular--' + text_formular[i + i_array_2d][j + j_array_2d]);
            console.log(i + i_array_2d, j + j_array_2d);
            input_formula.value = text_formular[i + i_array_2d][j + j_array_2d];
            input_formula.vi_tri = [i + i_array_2d, j + j_array_2d];
            let paint = paint_text(text_formular[i + i_array_2d][j + j_array_2d], vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
            input_.innerHTML = paint[0];
            let width_input_focus = table_excel.current.clientWidth - (a.current.children[i + 1].children[j + 1].getBoundingClientRect().x - table_excel.current.getBoundingClientRect().x) - 6 + 'px';
            Object.assign(input_.style, {
              width: width_input_focus
            });

            // di chuy???n focus t???i v??? tr?? c??
            selection.removeAllRanges();
            range.setStart(input_.childNodes[paint[1]], paint[2]);
            selection.addRange(range);
          }
        }, 0);
      }

      // khi ???n enter th?? ti???n h??nh t??nh to??n.                                                       
      if (event.keyCode === 13) {
        // key code of the keybord key

        console.log("-------------------input enter");
        console.log(onKeyDown_1_element);

        //  key_enter ch???y xong cho onKeyDown_1_element = false
        // m?? element cha c???a input c??ng l???ng nghe onkeydown ch???y sau input l???ng nghe
        // khi element cha c???a input c??ng l???ng nghe onkeydown m?? onKeyDown_1_element = false th?? n?? s??? ch???y
        //  setTimeout ??? ????y v?? khi element cha c???a input c??ng l???ng nghe onkeydown  do c?? setTimeout  onKeyDown_1_element v???n ??ang l?? true  n??n kh??ng ch???y n???a nh?? ch??ng ta mu???n
        setTimeout(() => {
          console.log('setTimeout---------------- ????? onKeyDown_1_element = true .   cu???i c??ng m???i chuy???n sang flase');

          // khi ???n enter th?? c??ng th???c ch??a ho??n th??nh c??ng t??nh
          tinh_toan(i, j, "xoa_ky_tu_cong_thuc_thua");

          // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
          dia_chi_o_click(i + 1 + i_array_2d, j + j_array_2d, i + 1, j);
          key_enter(vi_tri_o_truoc[0], vi_tri_o_truoc[1], i + 1, j); // t?? m??u v?? focus
          console.log('focus   ', i + 1 + i_array_2d, j_array_2d + j);
          mien_select_array_2d[0] = i_array_2d + i + 1;
          mien_select_array_2d[1] = j_array_2d + j;
          _onMouseEnter_not_event(i + 1, j, i + 1, j);
          onKeyDown = false;
          onKeyDown_1_element = false;
          thanh_dia_chi_0_on_keydown = false;
          onclick_tinh_toan = false;
        }, 0);
      }
    };
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // h??m x??? l?? xu???t hi???n th??? input khi scroll 
  function change_input_scroll(row_vi_tri_remove, col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

    //  xo?? t?? m??u  v??? tr?? tr?????c ????: n???u v??? tr?? tr?????c ????  kh??ng n???m trong khung nh??n th?? xo?? focus ??ang hi???n di???n ng?????c l???i xo?? t?? m??u

    if (row_vi_tri_remove < 0 || row_vi_tri_remove > limit_view - 1 || col_vi_tri_remove < 0 || col_vi_tri_remove > limit_col_view - 1) {} else {
      Object.assign(a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove + 1].style, css.remove_click);
      a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove + 1].blur();
    }

    // t?? m??u

    if (row_vi_tri_add < 0 || row_vi_tri_add > limit_view - 1 || col_vi_tri_add < 0 || col_vi_tri_add > limit_col_view - 1) {
      console.log(vi_tri_click_in_Data);
      vi_tri_o_truoc[0] = row_vi_tri_add;
      vi_tri_o_truoc[1] = col_vi_tri_add;
      // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
      dia_chi_o_click(row_vi_tri_add + i_array_2d, col_vi_tri_add + j_array_2d, row_vi_tri_add, col_vi_tri_add);
    } else {
      Object.assign(a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].style, css.click);
      vi_tri_o_truoc[0] = row_vi_tri_add;
      vi_tri_o_truoc[1] = col_vi_tri_add;
      console.log('xu???t hi???n l???i th??? input v?? xo?? t?? m??u:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove);
      console.log('xu???t hi???n l???i th??? input v?? t?? m??u:  ' + row_vi_tri_add + '-' + col_vi_tri_add);
      // ph???i focus th??? div d??? th??? ???? nh???n s??? ki???n t??? b??n ph??m ???????c
      // mu???n focus th??? div ph???i ?????t tabindex cho th??? ????
      // ** ???nh h?????ng c???a input v?? button khi click s??? l??m m???t ???????ng vi???n ??en focus c???a th??? div ; ch??nh l?? thu???c t??nh Outline  c???a css
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].setAttribute('tabindex', -1);
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].focus({
        preventScroll: true
      });

      // xu???t hi???n l???i th??? input v?? focus

      console.log('xu???t hi???n l???i th??? input v?? focus');
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].style.zIndex = 100;
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].innerHTML = '<div  contenteditable="true"></div>';
      var input_ = a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].children[0];
      let width_input_focus = table_excel.current.clientWidth - (a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].getBoundingClientRect().x - table_excel.current.getBoundingClientRect().x) - 6 + 'px';
      Object.assign(input_.style, css.input_focus, {
        width: width_input_focus
      });
      if (text_formular[row_vi_tri_add + i_array_2d][col_vi_tri_add + j_array_2d] === null) {
        input_.focus({
          preventScroll: true
        });
      } else {
        // focus t???i v??? tr?? m???i nh??ng kh??ng set l???i vi_tri_con_tro_khi_di_chuyen_trong_double_click_input. Bi???n n??y v???n ??? tr???ng th??i tr?????c ????
        let vi_tri_focus;
        if (cong_thuc_them_vao[0] === null) {
          vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input;
        } else {
          vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length;
        }
        console.log(vi_tri_focus);
        let paint = paint_text(text_formular[row_vi_tri_add + i_array_2d][col_vi_tri_add + j_array_2d], vi_tri_focus);
        input_.innerHTML = paint[0];

        // di chuy???n focus t???i v??? tr?? c??
        let range = document.createRange();
        let selection = window.getSelection();
        selection.removeAllRanges();
        range.setStart(input_.childNodes[paint[1]], paint[2]);
        // khi click v??o div kh??c ho???c scroll th?? div input_truoc_do ???? b??? m???t focus, s??? ki???n m???t focus di???n ra cu???i c??ng.
        // do v???y ta ph???i setTimeout ??? ????y ????? l???y l???i focus. => selection.addRange(range) s??? di???n ra cu???i c??ng
        setTimeout(() => {
          selection.addRange(range);
        }, 0);
      }
      run_function_when_input_focus(input_, row_vi_tri_add, col_vi_tri_add, i_array_2d, j_array_2d);

      // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
      dia_chi_o_click(row_vi_tri_add + i_array_2d, col_vi_tri_add + j_array_2d, row_vi_tri_add, col_vi_tri_add);
      console.log(vi_tri_click_in_Data);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // h??m t?? m??u v?? focus khi click ho???c enter
  function key_enter(row_vi_tri_remove, col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {
    // khi click v??o cell n???u c?? file ??ang m??? th?? ???n ??i
    ref_file.current.style.display = "none";

    // chuy???n tr???ng th??i onKeyDown_1_element = false; v?? khi input tr?????c ???? xu???t hi???n onKeyDown_1_element l?? true do c?? ch??? settimeout
    onKeyDown_1_element = false;
    thanh_dia_chi_0_on_keydown = false;
    turn_off_onMouseEnter = false;
    //1.  xo?? t?? m??u v??? tr?? tr?????c
    //  xo?? t?? m??u  v??? tr?? tr?????c ????: n???u v??? tr?? tr?????c ???? = null ho???c kh??ng n???m trong khung nh??n th?? xo?? focus ??ang hi???n di???n ng?????c l???i xo?? t?? m??u
    // row_vi_tri_remove = 0  th?? d???u ti??n remove t?? m??u b???ng c??ch ch???y ??o???n if else tr??n ; sau ???? ch???y ??o???n if d?????i k??ch ho???t document.activeElement.blur(); 

    if (row_vi_tri_remove < 0 || row_vi_tri_remove > limit_view || col_vi_tri_remove < 0 || col_vi_tri_remove > limit_col_view) {} else {
      Object.assign(a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove + 1].style, css.remove_click);
      a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove + 1].blur();
    }

    // 2.T?? m??u v??? tr?? m???i
    // t?? m??u v??? tr?? m???i  n???u v??? tr?? tr?????c ???? = null ho???c kh??ng n???m trong khung nh??n th?? set l???i v??? tr?? tr?????c ???? ng?????c l???i  t?? m??u

    if (row_vi_tri_add < 0 || row_vi_tri_add > limit_view || col_vi_tri_add < 0 || col_vi_tri_add > limit_col_view) {
      vi_tri_o_truoc[0] = row_vi_tri_add;
      vi_tri_o_truoc[1] = col_vi_tri_add;
    } else {
      Object.assign(a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].style, css.click);
      vi_tri_o_truoc[0] = row_vi_tri_add;
      vi_tri_o_truoc[1] = col_vi_tri_add;
      console.log('xo?? t?? m??u:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove);
      console.log('t?? m??u:  ' + row_vi_tri_add + '-' + col_vi_tri_add);
      // ph???i focus th??? div d??? th??? ???? nh???n s??? ki???n t??? b??n ph??m ???????c
      // mu???n focus th??? div ph???i ?????t tabindex cho th??? ????
      // ** ???nh h?????ng c???a input v?? button khi click s??? l??m m???t ???????ng vi???n ??en focus c???a th??? div ; ch??nh l?? thu???c t??nh Outline  c???a css
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].setAttribute('tabindex', -1);
      a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add + 1].focus({
        preventScroll: true
      });
    }
    xuat_hien_the_input = false;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // h??m t??nh to??n c??ng th???c 
  // i, j ??? ????y l?? gi?? tr??? d??ng v?? c???t ??? v??? tr?? tr?????c ????.
  function tinh_toan(i, j, z) {
    console.log('t??nh to??n----------');
    console.log('t??nh to??n           ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);
    var text = text_formular[i + i_array_2d][j + j_array_2d];
    console.log('text      ' + text);
    console.log(i + i_array_2d, j + j_array_2d);

    // chuy???n text null b???ng '' ????? slice kh??ng b??? l???i.
    if (text == null) {
      text = '';
    }
    // B?????c 1: ki???m tra xem c??ng th???c ho??n th??nh ch??a n???u ch??a vi???t ti???p ???????c.    
    // khi b???m enter th?? xo?? k?? t??? c??ng th???c th???a g???n focus nh???t ????? c??ng th???c kh??ng ho??n th??nh c??ng t??nh
    let text_den_vi_tri_con_tro = text.slice(0, vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
    // z ch??? n??y ch???y khi t??nh to??n b???ng c??ch b???m enter    
    // k???t th??c c??ng th???c to??n b??? text co nhi???u d???u ch???ng h???n +9+6+++ th?? xo?? h???t d???u + ??? cu???i ??i

    if (z === "xoa_ky_tu_cong_thuc_thua") {
      console.log('text_den_vi_tri_con_tro           ' + text_den_vi_tri_con_tro);

      // khi b???m enter z = xoa_ky_tu_cong_thuc_thua ta xo?? 1 k?? t??? c??ng th???c  cu???i ch??? v??? tr?? con tr??? ????? c??ng th???c kh??ng ho??n th??nh c??ng t??nh
      // vd:    +9+6+(Data[10][1])+(Data[10][2]) n???u v??? tr?? con tr??? ??? (Data[10][1])+ th?? ta xo?? + n??n c??ng th???c tr??? th??nh ho??n th??nh
      // n???u v??? tr?? con tr??? ??? (Data[   th?? if ??? ????y kh??ng ch???y nh??ng ph??a d?????i s??? c?? h??m ki???m tra th???y c???nh v??? tr?? con tr??? kh??ng ph???i l?? + n??n c??ng th???c tr??? th??nh ho??n th??nh
      if ((text_den_vi_tri_con_tro.slice(0, 1) === "=" || text_den_vi_tri_con_tro.slice(0, 1) === "+") && (text_den_vi_tri_con_tro.slice(-1) === "+" || text_den_vi_tri_con_tro.slice(-1) === "-" || text_den_vi_tri_con_tro.slice(-1) === "*" || text_den_vi_tri_con_tro.slice(-1) === "/")) {
        while (text_den_vi_tri_con_tro.slice(-1) === "+" || text_den_vi_tri_con_tro.slice(-1) === "-" || text_den_vi_tri_con_tro.slice(-1) === "*" || text_den_vi_tri_con_tro.slice(-1) === "/") {
          text_den_vi_tri_con_tro = text_den_vi_tri_con_tro.slice(0, text_den_vi_tri_con_tro.length - 1);
        }
      }

      // k???t th??c c??ng th???c to??n b??? text co nhi???u d???u ch???ng h???n +9+6+++ th?? xo?? h???t d???u + ??? cu???i ??i 
      if ((text.slice(0, 1) === "=" || text.slice(0, 1) === "+") && (text.slice(-1) === "+" || text.slice(-1) === "-" || text.slice(-1) === "*" || text.slice(-1) === "/")) {
        while (text.slice(-1) === "+" || text.slice(-1) === "-" || text.slice(-1) === "*" || text.slice(-1) === "/") {
          text = text.slice(0, text.length - 1);
        }
      }
    }
    // z ch??? n??y ch???y khi t??nh to??n b???ng c??ch ???n chu???t tr??i sang ?? kh??c
    if (z === "xoa_ky_tu_cong_thuc_thua_mouse_down") {
      console.log('text_den_vi_tri_con_tro           ' + text_den_vi_tri_con_tro);
      if ((text_den_vi_tri_con_tro.slice(0, 1) === "=" || text_den_vi_tri_con_tro.slice(0, 1) === "+") && (text_den_vi_tri_con_tro.slice(-1) === "+" || text_den_vi_tri_con_tro.slice(-1) === "-" || text_den_vi_tri_con_tro.slice(-1) === "*" || text_den_vi_tri_con_tro.slice(-1) === "/")) {
        while (text_den_vi_tri_con_tro.slice(-2) === "++" || text_den_vi_tri_con_tro.slice(-2) === "--" || text_den_vi_tri_con_tro.slice(-2) === "**" || text_den_vi_tri_con_tro.slice(-2) === "//") {
          text_den_vi_tri_con_tro = text_den_vi_tri_con_tro.slice(0, text_den_vi_tri_con_tro.length - 1);
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input - 1;
        }
      }
      if ((text.slice(0, 1) === "=" || text.slice(0, 1) === "+") && (text.slice(-1) === "+" || text.slice(-1) === "-" || text.slice(-1) === "*" || text.slice(-1) === "/")) {
        while (text.slice(-2) === "++" || text.slice(-2) === "--" || text.slice(-2) === "**" || text.slice(-2) === "//") {
          text = text.slice(0, text.length - 1);
        }
      }
    }

    //*******/.--------------n???u v??? tr?? con tr??? trong th??? input ?????ng sau d???u + th??  k???t th??c h??m t??nh to??n ??? ????y b???ng tr??? v??? c??ng th???c ch??a ho??n th??nh kh??c "" ????? s??? ki???n kh??c t??nh ti???p
    // ng?????c l???i n???u v??? tr?? con tr??? kh??ng ?????ng sau d???u + th?? th?? th???c hi???n c??c l???nh ph??a sau l?? t??nh to??n v?? tr??? v??? k???t qu???
    console.log('text_den_vi_tri_con_tro----           ' + text_den_vi_tri_con_tro);
    if ((text_den_vi_tri_con_tro.slice(0, 1) === "=" || text_den_vi_tri_con_tro.slice(0, 1) === "+") && (/[\+|\-|\*|\/]/i.test("'" + text_den_vi_tri_con_tro.slice(-1) + "'") || /[\+|\-|\*|\/][\(]+/i.test("'" + text_den_vi_tri_con_tro.slice(-2) + "'"))) {
      console.log('c??ng th???c ch??a ho??n th??nh k???t th??c ??? ????y kh??ng t??nh to??n');
      console.log(cong_thuc_chua_hoan_thanh);
      return cong_thuc_chua_hoan_thanh = [i, j, text];
    }

    // B?????c 2: t??nh to??n
    //2.------------------ki???m tra c??ng th???c ng?????i d??ng vi???t c?? b??? l???i kh??ng n???u b??? l???i th??  k???t th??c h??m t??nh to??n ??? ????y b???ng tr??? v??? bi???n l???i error true ????? s??? ki???n kh??c t??nh ti???p
    //2.------------------ n???u kh??ng l???i th??m c??ng th???c ng?????i d??ng vi???t v??o m???ng formular n??i ch???a t???t c??? c??c c??ng th???c
    if (text.slice(0, 1) === "=" || text.slice(0, 1) === "+") {
      // t??nh to??n xong th?? xo?? d??? li???u nh???p v??o ??? thanh ?????a ch???
      setTimeout(() => {
        thanh_dia_chi_0.current.value = "";
      }, 0);
      console.log('l??u c??ng th???c vi???t v??o m???ng formular ');
      var kiem_tra_loi;
      try {
        // Code c?? th??? g???p l???i n??o ????

        eval(text.replaceAll('$', ''));
      } catch (error) {
        // Code x??? l?? khi l???i x???y ra

        console.log('c??ng th???c nh???p v??o b??? l???i');
        kiem_tra_loi = true;
        console.log(kiem_tra_loi);
        // ki???m tra xem trong m???ng formular c?? t???n t???i v??? tr?? index ???????c l??u ch??a. N???u c?? thay ?????i c??ng th???c ??? v??? tr?? ????.
        var index_;
        if (index_formular[i + i_array_2d][j + j_array_2d] !== null) {
          index_ = index_formular[i + i_array_2d][j + j_array_2d];
          console.log("khac nhau");
          // ph???i c?? ( ) tr?????c, sau function v?? ????? sau n??y ch???y function ta d??ng ()() m???i ch???y ???????c
          formular[index_] = eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " = " + "'" + error.message + "'" + ";})");
          formular[index_]();
          // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
          let _len = formular.length;
          for (let index = 0; index < _len; index++) {
            if (formular[index] !== undefined) {
              formular[index]();
            }
            ;
          }

          // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
          for (let index = 0; index <= limit_view; index++) {
            for (let index_j = 0; index_j <= limit_col_view; index_j++) {
              // v???i m???i cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
              let max_zindex = limit_col_view + 1;
              for (let x = limit_col_view; x >= 0; x--) {
                if (Data[index + i_array_2d][x + j_array_2d] === null) {} else {
                  a.current.children[index + 1].children[x + 1].style.zIndex = max_zindex;
                  max_zindex = x;
                }
              }
              a.current.children[index + 1].children[index_j + 1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[index + i_array_2d][index_j + j_array_2d]}  </div>`;
            }
          }
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
          cong_thuc_chua_hoan_thanh = "";
        } else {
          console.log("push 1 cong thuc vao cuoi ----------------");
          // ph???i c?? ( ) tr?????c, sau function v?? ????? sau n??y ch???y function ta d??ng ()() m???i ch???y ???????c
          formular.push(eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " = " + "'" + error.message + "'" + ";})"));
          index_formular[i + i_array_2d][j + j_array_2d] = formular.length - 1;

          // t??nh 1 c??ng th???c cu???i c??ng
          formular[formular.length - 1]();

          // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
          let _len = formular.length;
          for (let index = 0; index < _len; index++) {
            if (formular[index] !== undefined) {
              formular[index]();
            }
            ;
          }
          // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh n???u gi?? tr??? t??nh to??n sau khi scroll n???m trong khung nh??n
          // do push v??o cu???i n??n ch??? hi???n l???i ?? ???? th??i kh??ng l???p t???t c??? c??c ??
          if (i <= limit_view - 1 & i >= 0 && j <= limit_col_view - 1 & j >= 0) {
            if (Data[i + i_array_2d][j + j_array_2d] === null) {} else {
              // v???i  cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
              let max_zindex = limit_col_view + 1;
              for (let x = limit_col_view; x >= 0; x--) {
                if (Data[i + i_array_2d][x + j_array_2d] === null) {} else {
                  a.current.children[i + 1].children[x + 1].style.zIndex = max_zindex;
                  max_zindex = x;
                }
              }
              a.current.children[i + 1].children[j + 1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[i + i_array_2d][j + j_array_2d]}  </div>`;
            }
          }
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
          cong_thuc_chua_hoan_thanh = "";
        }
      }

      // n???u c??ng th???c nh???p v??o kh??ng b??? l???i th?? th???c hi???n ??o???n code d?????i ????y -----------------------------------------------------------------------------------------------------------------------
      if (kiem_tra_loi === undefined) {
        // ki???m tra xem trong m???ng formular c?? t???n t???i v??? tr?? index ???????c l??u ch??a. N???u c?? thay ?????i c??ng th???c ??? v??? tr?? ????.
        var index_;
        if (index_formular[i + i_array_2d][j + j_array_2d] !== null) {
          index_ = index_formular[i + i_array_2d][j + j_array_2d];
          console.log("khac nhau");

          // ki???m tra tham chi???u l???p

          var array_loi_tham_chieu = [];
          let vi_tri_loi_tham_chieu;
          text_formular.map((item, index) => {
            item.map((j_item, index_j) => {
              if (j_item !== null) {
                if (j_item.indexOf("Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]") !== -1) {
                  array_loi_tham_chieu.push([index, index_j]);
                }
              }
            });
          });
          if (array_loi_tham_chieu.some((item, index) => {
            vi_tri_loi_tham_chieu = item;
            return text.indexOf("Data[" + item[0] + "][" + item[1] + "]") !== -1;
          }) === true) {
            // ph???i c?? ( ) tr?????c, sau function v?? ????? sau n??y ch???y function ta d??ng ()() m???i ch???y ???????c
            formular[index_] = eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " =" + "'#REF!'" + ";})");
            formular[index_]();
            Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]] = "#REF!";
            alert("L???i tham chi???u t???i " + "Data[" + vi_tri_loi_tham_chieu[0] + "][" + vi_tri_loi_tham_chieu[1] + "]");
          } else {
            formular[index_] = eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " = " + text.slice(1).replaceAll('$', '') + ";})");
            formular[index_]();
          }

          // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
          let _len = formular.length;
          for (let index = 0; index < _len; index++) {
            console.log(formular[index]);
            if (formular[index] !== undefined) {
              formular[index]();
            }
            ;
          }

          // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
          for (let index = 0; index <= limit_view; index++) {
            for (let index_j = 0; index_j <= limit_col_view; index_j++) {
              if (Data[index + i_array_2d][index_j + j_array_2d] === null) {} else {
                // v???i m???i cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
                let max_zindex = limit_col_view + 1;
                for (let x = limit_col_view; x >= 0; x--) {
                  if (Data[index + i_array_2d][x + j_array_2d] === null) {} else {
                    a.current.children[index + 1].children[x + 1].style.zIndex = max_zindex;
                    max_zindex = x;
                  }
                }
                a.current.children[index + 1].children[index_j + 1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[index + i_array_2d][index_j + j_array_2d]}  </div>`;
              }
            }
          }
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
          cong_thuc_chua_hoan_thanh = "";
        } else {
          console.log("push 1 cong thuc vao cuoi ----------------");

          // ki???m tra tham chi???u l???p

          var array_loi_tham_chieu = [];
          let vi_tri_loi_tham_chieu;
          text_formular.map((item, index) => {
            item.map((j_item, index_j) => {
              if (j_item !== null) {
                console.log(j_item);
                if (j_item.indexOf("Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]") !== -1) {
                  array_loi_tham_chieu.push([index, index_j]);
                }
              }
            });
          });
          if (array_loi_tham_chieu.some((item, index) => {
            vi_tri_loi_tham_chieu = item;
            return text.indexOf("Data[" + item[0] + "][" + item[1] + "]") !== -1;
          }) === true) {
            // ph???i c?? ( ) tr?????c, sau function v?? ????? sau n??y ch???y function ta d??ng ()() m???i ch???y ???????c
            formular.push(eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " =" + "'#REF!'" + ";})"));
            Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]] = "#REF!";
            alert("L???i tham chi???u t???i " + "Data[" + vi_tri_loi_tham_chieu[0] + "][" + vi_tri_loi_tham_chieu[1] + "]");
          } else {
            formular.push(eval("(function(){return " + "Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "]" + " = " + text.slice(1).replaceAll('$', '') + ";})"));
            index_formular[i + i_array_2d][j + j_array_2d] = formular.length - 1;
          }

          // t??nh 1 c??ng th???c cu???i c??ng
          formular[formular.length - 1]();

          // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
          let _len = formular.length;
          for (let index = 0; index < _len; index++) {
            if (formular[index] !== undefined) {
              formular[index]();
            }
            ;
          }

          // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh n???u gi?? tr??? t??nh to??n sau khi scroll n???m trong khung nh??n
          // do push v??o cu???i n??n ch??? hi???n l???i ?? ???? th??i kh??ng l???p t???t c??? c??c ??
          if (i <= limit_view - 1 & i >= 0 && j <= limit_col_view - 1 & j >= 0) {
            if (Data[i + i_array_2d][j + j_array_2d] === null) {} else {
              // v???i  cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
              let max_zindex = limit_col_view + 1;
              for (let x = limit_col_view; x >= 0; x--) {
                if (Data[i + i_array_2d][x + j_array_2d] === null) {} else {
                  a.current.children[i + 1].children[x + 1].style.zIndex = max_zindex;
                  max_zindex = x;
                }
              }
              a.current.children[i + 1].children[j + 1].innerHTML = ` <div    style="  position:absolute;       background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[i + i_array_2d][j + j_array_2d]}  </div>`;
            }
            if (vi_tri_loi_tham_chieu !== undefined) {
              a.current.children[vi_tri_loi_tham_chieu[0] + 1 - i_array_2d].children[vi_tri_loi_tham_chieu[1] + 1 - j_array_2d].innerHTML = Data[vi_tri_loi_tham_chieu[0]][vi_tri_loi_tham_chieu[1]];
            }
          }
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
          cong_thuc_chua_hoan_thanh = "";
        }
      }
    }
    ;

    //3.---------------------------------------------------------------------------------------------------------
    //n???u ng?????i d??ng kh??ng vi???t c??ng th???c m?? vi???t gi?? tr??? th?? ghi gi?? tr??? ng?????i d??ng vi???t v??o m???ng Data

    if (text.slice(0, 1) != "=" && text.slice(0, 1) != "+") {
      // t??nh to??n xong th?? xo?? d??? li???u nh???p v??o ??? thanh ?????a ch???
      setTimeout(() => {
        thanh_dia_chi_0.current.value = "";
      }, 0);

      // n???u ng?????i d??ng nh???p s???  v??o input th?? h??m + text  s??? chuy???n k?? t??? kh??c s??? th??nh s???. Vd: c?? nhi???u ph??m c??ch "  59" s??? chuy???n th??nh 59, "  .2" s??? chuy???n th??nh 2 
      if (isNaN(Number(text)) == false) {
        Data[i + i_array_2d][j + j_array_2d] = +text;

        // n???u ng?????i d??ng kh??ng nh???p g?? th?? isNaN(Number(text))  s??? tr??? v??? false khi ???? ta g??n Data[i+i_array_2d][j] = '' ;
        if (text === "") {
          Data[i + i_array_2d][j + j_array_2d] = "";
        }

        // ki???m tra xem trong m???ng formular c?? t???n t???i v??? tr?? index ???????c l??u ch??a. N???u c?? xo?? c??ng th???c ??? v??? tr?? ????    
        var index_;
        if (index_formular[i + i_array_2d][j + j_array_2d] !== null) {
          index_ = index_formular[i + i_array_2d][j + j_array_2d];
          console.log("khac nhau");

          // xo?? c??ng th???c ??? v??? tr?? ????  nh??ng v???n ????? l???i trong index_formular v??? tr?? index_
          delete formular[index_];
        }

        // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
        let _len = formular.length;
        for (let index = 0; index < _len; index++) {
          if (formular[index] !== undefined) {
            formular[index]();
          }
          ;
        }
        // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
        for (let index = 0; index <= limit_view; index++) {
          for (let index_j = 0; index_j <= limit_col_view; index_j++) {
            if (Data[index + i_array_2d][index_j + j_array_2d] === null) {} else {
              // v???i m???i cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
              let max_zindex = limit_col_view + 1;
              for (let x = limit_col_view; x >= 0; x--) {
                if (Data[index + i_array_2d][x + j_array_2d] === null) {} else {
                  a.current.children[index + 1].children[x + 1].style.zIndex = max_zindex;
                  max_zindex = x;
                }
              }
              a.current.children[index + 1].children[index_j + 1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[index + i_array_2d][index_j + j_array_2d]}  </div>`;
            }
          }
        }
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
        cong_thuc_chua_hoan_thanh = "";
      }

      // n???u ng?????i d??ng nh???p ch??? th?? g??n ch???
      if (isNaN(Number(text)) == true) {
        Data[i + i_array_2d][j + j_array_2d] = text;

        // ki???m tra xem trong m???ng formular c?? t???n t???i v??? tr?? index ???????c l??u ch??a. N???u c?? xo?? c??ng th???c ??? v??? tr?? ????  
        var index_;
        if (index_formular[i + i_array_2d][j + j_array_2d] !== null) {
          index_ = index_formular[i + i_array_2d][j + j_array_2d];
          console.log("khac nhau");

          // xo?? c??ng th???c ??? v??? tr?? ????  nh??ng v???n ????? l???i trong index_formular v??? tr?? index_
          delete formular[index_];
        }

        // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t
        let _len = formular.length;
        for (let index = 0; index < _len; index++) {
          if (formular[index] !== undefined) {
            formular[index]();
          }
          ;
        }
        // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
        for (let index = 0; index <= limit_view; index++) {
          for (let index_j = 0; index_j <= limit_col_view; index_j++) {
            if (Data[index + i_array_2d][index_j + j_array_2d] === null) {} else {
              // v???i m???i cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
              let max_zindex = limit_col_view + 1;
              for (let x = limit_col_view; x >= 0; x--) {
                if (Data[index + i_array_2d][x + j_array_2d] === null) {} else {
                  a.current.children[index + 1].children[x + 1].style.zIndex = max_zindex;
                  max_zindex = x;
                }
              }
              a.current.children[index + 1].children[index_j + 1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;  "> ${Data[index + i_array_2d][index_j + j_array_2d]}  </div>`;
            }
          }
        }
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined;
        cong_thuc_chua_hoan_thanh = "";
      }
    }
  }
  ;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // l???ng nghe c??c s??? khi???n khi thao t??c v???i b??n ph??m (d??ng b??n ph??m)
  async function _onKeyDown(event, i, j) {
    console.log('_onKeyDown------------------------------');
    //  onKeyDown_1_element === false t???c ch??a xu???t hi???n th??? input
    // khi xu???t hi???n th??? input th?? onKeyDown_1_element === true
    // m???c ????ch khi xu???t hi???n th??? input th?? t???t l???ng nghe s??? ki???n _onKeyDown ??? elment n??y
    if (onKeyDown_1_element === false) {
      let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
      let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

      // 1. element ???????c k??ch ho???t v?? element kh??ng ??? tr???ng th??i t??nh to??n m?? b???m ph??m enter s??? xu???ng d??ng 
      if (event.key == "Enter") {
        function enter_not_scroll() {
          console.log("khi b???m ph??m enter m?? kh??ng xu???t hi???n th??? input th?? kh??ng ph???i t??nh to??n");

          // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
          dia_chi_o_click(i + 1 + i_array_2d, j + j_array_2d, i + 1, j);
          key_enter(i, j, i + 1, j); // t?? m??u v?? focus
          mien_select_array_2d[0] = i_array_2d + i + 1;
          mien_select_array_2d[1] = j_array_2d + j;
          _onMouseEnter_not_event(i + 1, j, i + 1, j);
          xuat_hien_the_input = false;
          onKeyDown = false;
          onclick_tinh_toan = false;
          onKeyDown_1_element = false;
        }
        function enter_affter_scroll() {
          console.log("khi b???m ph??m enter m?? kh??ng xu???t hi???n th??? input th?? kh??ng ph???i t??nh to??n");

          // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
          dia_chi_o_click(i - 1 + 1 + i_array_2d, j + j_array_2d, i - 1 + 1, j);
          key_enter(i - 1, j, i + 1 - 1, j); // t?? m??u v?? focus
          mien_select_array_2d[0] = i_array_2d + i + 1 - 1;
          mien_select_array_2d[1] = j_array_2d + j;
          _onMouseEnter_not_event(i - 1 + 1, j, i - 1 + 1, j);
          xuat_hien_the_input = false;
          onKeyDown = false;
          onclick_tinh_toan = false;
          onKeyDown_1_element = false;

          // table_excel.current.removeEventListener("scroll", enter_affter_scroll);   
        }

        if (i >= limit_view - 1) {
          // ta kh??ng truy???n table_excel.current.scrollTop = table_excel.current.scrollTop  * click_scroll_dichuyen 
          // v?? m???i l???n truy???n v?? s??? ki???n onscroll nh???n table_excel.current.scrollTop s??? c?? sai s???
          // khi enter nhi???u l???n s??? c???ng c??c sai s??? l???i n??n khi l??m tr??n v??? tr?? c??t b??? sai 1 ?????n v??? n??n c?? l???i.
          window.requestAnimationFrame(enter_affter_scroll);
          table_excel.current.scrollTop = (i_array_2d + 1) * click_scroll_dichuyen;
          // ta c?? th??? d??ng addEventListener ????? c??c h??m b???t ?????ng b??? ch???y theo th??? t??? ( ch?? ?? ??? ????y   table_excel.current.addEventListener  s??? ch???y tr?????c nh??ng sau ???? table_excel.current.scrollTop ch???y l??m ph??t sinh scroll n??n h??m trong scroll m???i ch???y.  ho???t ?????ng nh?? v???y n?? s??? nhanh h??n setTimeout)
          // ho???c d??ng
          // window.requestAnimationFrame(enter_affter_scroll);  khi ???? h??m enter_affter_scroll kh??ng c???n d??ng   table_excel.current.removeEventListener("scroll", enter_affter_scroll);   n??y n???a
          // ch?? ??  requestAnimationFrame s??? ch???y sau  scrollTop nh??ng ch???y tr?????c setTimeout
          // kh??ng d??ng setTimeout ???????c v?? setTimeout v?? scrollTop l?? 2 h??m b???t ?????ng b??? n??n khi ???n gi??? ch???t enter n?? s??? ch???y kh??ng theo th??? t??? m?? m???c ????ch ta mu???n h??m ch???y theo th??? t???
          // table_excel.current.addEventListener("scroll", enter_affter_scroll);
        } else {
          enter_not_scroll();
        }
      }
      if (event.key != "Enter") {
        console.log("_onKeyDown--nh???p d??? li???u");
        // khi ???n ph??m kh??c enter th?? vi???t c??ng th???c ho???c d??? li???u v??o ?? ???? (thi???t l???p ?? ???? ??? tr???ng th??i t??nh to??n)
        a.current.children[i + 1].children[j + 1].style.zIndex = 100;
        a.current.children[i + 1].children[j + 1].innerHTML = '<div  contenteditable="true"  ></div>';
        let input_ = a.current.children[i + 1].children[j + 1].children[0];
        // l???y ti??u ??i???m ????? input_ c?? th??? l???ng nghe ???????c s??? ki???n

        input_.focus({
          preventScroll: true
        });
        console.log(input_);
        xuat_hien_the_input = true;
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 1;
        Object.assign(input_.style, css.input_focus);

        // l??c n??y input nh???n gi?? tr??? t??? b??n ph??m hi???n l??n th??? input 

        // g??n gi?? tr??? ?????u ti??n khi nh???n ph??m ???? v??o text_formular; c??c gi?? tr??? ti???p theo input xu???t hi???n s??? l???ng nghe s??? ki???n onKeyDown ????? g??n ti???p
        //**************** */ trong javscript thu???n ghi gi?? tr??? t??? b??n ph??m v??o th??? input s??? di???n ra sau vi???c l???y gi?? tr??? t??? th??? input v??o bi???n.
        // ph???i setTimeout ??? ????y v?? ph???i ?????i input l???y gi?? tr??? t??? b??n ph??m m???i g??n v??o text_formular
        // sau ???? g??n gi?? tr??? khi nh???n l??n input_formula
        var input_formula = thanh_dia_chi_0.current;
        setTimeout(() => {
          text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent;
          console.log(text_formular[i + i_array_2d][j + j_array_2d]);
          input_formula.value = text_formular[i + i_array_2d][j + j_array_2d];
          input_formula.vi_tri = [i + i_array_2d, j + j_array_2d];
        }, 0);
        onclick_tinh_toan = true;
        vi_tri_o_truoc[0] = i;
        vi_tri_o_truoc[1] = j;

        // tr?????c g??n s??? ki???n keydown cho input th?? ta ph???i t???t l???ng nghe s??? ki???n onkedown cho 1 element table cha c???a input 
        onKeyDown_1_element = true;
        run_function_when_input_focus(input_, i, j, i_array_2d, j_array_2d);
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var mien_select = [0, 0, 0, 0];
  var mien_select_quy_ve = [0, 0, 0, 0];
  var mien_select_array_2d = [0, 0, 0, 0];
  var turn_off_onMouseEnter = false;

  // v??? khung mi???n l???a ch???n v?? n???u tho??? m??n ??i???u ki???n th?? v??? bi???u t?????ng fill
  function _onMouseEnter_not_event(x, y, i, j, thay_doi_mien_select_array_2d) {
    console.log('v??? canvas');
    console.log(mien_select_array_2d);
    // xo?? bi???u t?????ng fill ???? xu???t hi???n khi move mouse
    console.log('xo?? bi???u t?????ng fill');
    var ctx = canvas_.current.getContext("2d");
    ctx.clearRect(0, 0, canvas_.current.width, canvas_.current.height);
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);
    mien_select[0] = x;
    mien_select[1] = y;
    mien_select[2] = i;
    mien_select[3] = j;
    if (thay_doi_mien_select_array_2d === false) {} else {
      mien_select_array_2d[2] = i_array_2d + i;
      mien_select_array_2d[3] = j_array_2d + j;
    }
    if (mien_select[0] <= mien_select[2]) {
      mien_select_quy_ve[0] = mien_select[0];
      mien_select_quy_ve[2] = mien_select[2];
    } else {
      mien_select_quy_ve[0] = mien_select[2];
      mien_select_quy_ve[2] = mien_select[0];
    }
    if (mien_select[1] <= mien_select[3]) {
      mien_select_quy_ve[1] = mien_select[1];
      mien_select_quy_ve[3] = mien_select[3];
    } else {
      mien_select_quy_ve[1] = mien_select[3];
      mien_select_quy_ve[3] = mien_select[1];
    }
    var x_r0c0 = a.current.children[mien_select_quy_ve[0] + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().x;
    var x_r0c1 = a.current.children[mien_select_quy_ve[2] + 1].children[mien_select_quy_ve[3] + 1 + 1].getBoundingClientRect().x;
    var y_r0c0 = a.current.children[mien_select_quy_ve[0] + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().y;
    var y_r1c0 = a.current.children[mien_select_quy_ve[2] + 1 + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().y;
    css.canvas_.width = x_r0c1 - x_r0c0 - 4 + 'px';
    css.canvas_.height = y_r1c0 - y_r0c0 - 4 + 'px';
    css.canvas_.top = y_r0c0 - ref_0.current.getBoundingClientRect().y + 'px';
    css.canvas_.left = x_r0c0 - ref_0.current.getBoundingClientRect().x + 'px';
    if (x_r0c0 - ref_0.current.getBoundingClientRect().x + (x_r0c1 - x_r0c0 - 4) >= table_excel.current.clientWidth) {
      css.canvas_.width = table_excel.current.clientWidth - (x_r0c0 - table_excel.current.getBoundingClientRect().x) + 'px';
    }
    if (y_r0c0 - table_excel.current.getBoundingClientRect().y + (y_r1c0 - y_r0c0 - 4) >= table_excel.current.clientHeight) {
      css.canvas_.height = table_excel.current.clientHeight - (y_r0c0 - table_excel.current.getBoundingClientRect().y) + 'px';
    }

    // v??? l???i  bi???u t?????ng fill 
    console.log('v??? l???i bi???u t?????ng fill');
    let ty_le_canvas_width = table_excel_width / (x_r0c1 - x_r0c0 - 4);
    let ty_le_canvas_height = table_excel_height / (y_r1c0 - y_r0c0 - 4);
    if (trang_thai_fill === true) {
      // v??? l???i  bi???u t?????ng fill  n???u trang_thai_fill === true
      ctx.beginPath();
      if (mien_select[2] >= mien_select[0] && mien_select[3] >= mien_select[1]) {
        ctx.fillRect(ty_le_canvas_width * (x_r0c1 - x_r0c0 - 4) - 10 * ty_le_canvas_width, ty_le_canvas_height * (y_r1c0 - y_r0c0 - 4) - 10 * ty_le_canvas_height, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
        ctx.globalAlpha = 0.3;
      } else if (mien_select[3] <= mien_select[1] && mien_select[2] >= mien_select[0]) {
        ctx.fillRect(0, ty_le_canvas_height * (y_r1c0 - y_r0c0 - 4) - 10 * ty_le_canvas_height, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
        ctx.globalAlpha = 0.3;
      } else if (mien_select[3] >= mien_select[1] && mien_select[2] <= mien_select[0]) {
        ctx.fillRect(ty_le_canvas_width * (x_r0c1 - x_r0c0 - 4) - 10 * ty_le_canvas_width, 0, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
        ctx.globalAlpha = 0.3;
      } else {
        ctx.fillRect(0, 0, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
        ctx.globalAlpha = 0.3;
      }
      ctx.closePath();
    } else {
      // v??? l???i  bi???u t?????ng fill  n???u tr?????c ???? bi???u t?????ng fill ???? xu???t hi???n r???i
      if (mouse_X > x_r0c1 - 14 && mouse_X <= x_r0c1 && mouse_Y > y_r1c0 - 14 && mouse_Y <= y_r1c0) {
        console.log('ve-------------------enter');
        ctx.beginPath();
        ctx.fillRect(ty_le_canvas_width * (x_r0c1 - x_r0c0 - 4) - 10 * ty_le_canvas_width, ty_le_canvas_height * (y_r1c0 - y_r0c0 - 4) - 10 * ty_le_canvas_height, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
        ctx.globalAlpha = 0.3;
        ctx.closePath();
      }
    }

    // v??? khung mi???n l???a ch???n
    Object.assign(canvas_.current.style, css.canvas_);
    console.log(mien_select_array_2d);
  }

  // h??m ch???n mi???n ????? sau ???? copy gi???ng excel

  function _onMouseEnter(event, x, y, i, j) {
    console.log('_onMouseEnter');
    if (xuat_hien_the_input === true) {
      console.log('so lan chay stop');
      return;
    }
    if (turn_off_onMouseEnter === true) {
      var _this = a.current.children[i + 1].children[j + 1];
      _onMouseDown(_this, i, j);
      console.log('turn_off_onMouseEnter = true');
      return;
    }

    // event.persist();    d??ng ????? bi???n  s??? ki???n tr??n react  th??nh s??? ki???n g???c tr??n dom  vd: onMouseEnter  th??nh  onmouseenter
    // react thi???t l???p event.buttons b???ng null : kh??ng ??i???u khi???n n??t chu???t ????? t??ng hi???u su???t. ????? thi???t l???p event.buttons nh?? javascript g???c c???n ch???y h??m event.persist();

    event.persist();
    if (event.buttons == 1) {
      _onMouseEnter_not_event(x, y, i, j);

      // khi nh???n chu???t tr??i v?? di chuy???n trong box canvas_ th?? ???n canvas_ ??i
      // l??c n??y b???ng t??nh ph??a sau canvas_ s??? kh??ng b??? canvas_ che n???a
      // v?? n?? s??? l???ng nghe s??? ki???n _onMouseEnter v?? v??? l???i khung mi???n l???a ch???n m???i

      canvas_.current.onmousemove = function (e) {
        let X, Y;
        let y = e.clientY;
        let x = e.clientX;
        let a_1 = vi_tri_o_truoc[0];
        let b_1 = vi_tri_o_truoc[1];
        if (a_1 < 0) {
          a_1 = 0;
        }
        if (b_1 < 0) {
          b_1 = 0;
        }
        if (a_1 > limit_view - 1) {
          a_1 = limit_view - 1;
        }
        if (b_1 > limit_col_view) {
          b_1 = limit_col_view;
        }
        console.log(a_1, b_1, mien_select[2], mien_select[3]);
        if (a_1 <= mien_select[2] && b_1 <= mien_select[3]) {
          // cell ??o X, Y l?? cell cu???i l???a ch???n
          Y = a.current.children[mien_select[2] + 1].children[mien_select[3] + 1].getBoundingClientRect().y;
          X = a.current.children[mien_select[2] + 1].children[mien_select[3] + 1].getBoundingClientRect().x;
          if (e.buttons == 1 && x <= X && y <= Y) {
            console.log('ve lai trong canvas_ --- duoi phai');
            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3]);
            } else if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3] - 1);
            }
          } else if (e.buttons == 1 && x <= X) {
            console.log('ve lai trong canvas_--- duoi phai');
            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3]);
            } else if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            }
          } else if (e.buttons == 1 && y <= Y) {
            console.log('ve lai trong canvas_--- duoi phai');
            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3]);
            } else if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3]);
            }
          }
        }
        if (a_1 <= mien_select[2] && b_1 > mien_select[3]) {
          // cell ??o X, Y l?? cell cu???i l???a ch???n c??ch 1 c???t
          Y = a.current.children[mien_select[2] + 1].children[mien_select[3] + 1 + 1].getBoundingClientRect().y;
          X = a.current.children[mien_select[2] + 1].children[mien_select[3] + 1 + 1].getBoundingClientRect().x;
          if (e.buttons == 1 && x >= X && y <= Y) {
            console.log('ve lai trong canvas_--- duoi trai');
            console.log(mien_select[2], mien_select[3] + 1);

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] + 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3] + 1);
            }
          } else if (e.buttons == 1 && x >= X) {
            console.log('ve lai trong canvas_--- duoi trai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] + 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] + 1);
            }
          } else if (e.buttons == 1 && y <= Y) {
            console.log('ve lai trong canvas_--- duoi trai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[2] === a_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] + 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] - 1, mien_select[3]);
            }
          }
        }
        if (a_1 > mien_select[2] && b_1 <= mien_select[3]) {
          // cell ??o X, Y l?? cell cu???i l???a ch???n c??ch 1 d??ng
          Y = a.current.children[mien_select[2] + 1 + 1].children[mien_select[3] + 1].getBoundingClientRect().y;
          X = a.current.children[mien_select[2] + 1 + 1].children[mien_select[3] + 1].getBoundingClientRect().x;
          if (e.buttons == 1 && x <= X && y >= Y) {
            console.log('ve lai trong canvas_--- tren phai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] + 1, mien_select[3] - 1);
            }
          } else if (e.buttons == 1 && x <= X) {
            console.log('ve lai trong canvas_--- tren phai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            }
          } else if (e.buttons == 1 && y >= Y) {
            console.log('ve lai trong canvas_--- tren phai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??

            if (mien_select[3] === b_1) {
              _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] - 1);
            } else {
              _onMouseEnter(event, a_1, b_1, mien_select[2] + 1, mien_select[3]);
            }
          }
        }
        if (a_1 > mien_select[2] && b_1 > mien_select[3]) {
          // cell ??o X, Y l?? cell cu???i l???a ch???n c??ch 1 d??ng, 1 c???t
          Y = a.current.children[mien_select[2] + 1 + 1].children[mien_select[3] + 1 + 1].getBoundingClientRect().y;
          X = a.current.children[mien_select[2] + 1 + 1].children[mien_select[3] + 1 + 1].getBoundingClientRect().x;
          if (e.buttons == 1 && x >= X && y >= Y) {
            console.log('ve lai trong canvas_--- tren trai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??
            _onMouseEnter(event, a_1, b_1, mien_select[2] + 1, mien_select[3] + 1);
          } else if (e.buttons == 1 && x >= X) {
            console.log('ve lai trong canvas_--- tren trai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??
            _onMouseEnter(event, a_1, b_1, mien_select[2], mien_select[3] + 1);
          } else if (e.buttons == 1 && y >= Y) {
            console.log('ve lai trong canvas_--- tren trai');

            // t???i ?? c??ch ?? cu???i theo ???????ng ch??o 1 ??
            _onMouseEnter(event, a_1, b_1, mien_select[2] + 1, mien_select[3]);
          }
        }
      };

      // khi nh???n chu???t ho???c b??n ph??m g?? v??o khung canvas_  th?? ???n canvas_ ??i
      // l??c n??y b???ng t??nh ph??a sau canvas_ s??? kh??ng b??? canvas_ che n???a
      // v?? n?? s??? l???ng nghe s??? ki???n _onMouseEnter nh??ng l??c n??y ta thi???t l???p   turn_off_onMouseEnter = true
      // ????? ch???y s??? ki???n gi???ng nh?? click chu???t v??o 1 ?? trong b???ng t??nh

      canvas_.current.onmousedown = function (event) {
        // khi click v??o canvas n???u kh??ng fill th?? s??? ???n canvas ??i
        if (trang_thai_fill === false) {
          console.log('???n canvas');
          Object.assign(canvas_.current.style, {
            display: "none"
          });
          turn_off_onMouseEnter = true;
        }
      };
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // th???c hi???n c??c s??? ki???n khi chu???t tr??i ???????c nh???n xu???ng (d??ng chu???t)
  let xuat_hien_the_input = false;
  let vi_tri_con_tro_khi_di_chuyen_trong_double_click_input;
  function _onMouseDown(_this, i, j, event) {
    // khi click chu???t th?? ta t???t element n??y l???ng nghe b??n ph??m.
    // ?????ng th???i ph??a d?????i ta t???o h??m  _this.onkeydown ????? l???ng nghe s??? ki???n t??? b??n ph??m tr??n element n??y
    // do v???y khi ta click sang ?? kh??c ho???c scroll ta ph???i xo?? _this.onkeydown tr??n element n??y ??i  n???u kh??ng s??? x???y ra v???n ????? sau
    // khi ta scroll elment n??y tr??? th??nh elment m???i theo Data th???c t??? n?? ph???i ch??a c?? _this.onkeydown do ta ch??a kich v??o ????
    // nh??ng khi ta ???n enter xu???ng elment n??y n?? ????? c?? _this.onkeydown r???i n??n n?? s??? l???ng nghe _this.onkeydown m?? m???c ????ch khi ta ???n enter 
    // l?? ????? elment n??y l???ng nghe h??m _onKeyDown.
    // m???t kh??c  h??m _this.onkeydown c??ng ch???y kh??ng ra k???t qu??? ta mong nu???m v?? n?? g???i h??m ?? trong cloure c?? c?? i_array_2d , i_array_2d l???y t??? th???i gian c?? tr?????c ????
    // xo?? _this.onkeydown ??? v??? tr?? tr?????c ??i

    console.log(vi_tri_o_truoc[0], vi_tri_o_truoc[1], "onKeyDown = null ");
    if (vi_tri_o_truoc[0] >= 0 && vi_tri_o_truoc[1] >= 0 && vi_tri_o_truoc[0] <= limit_view && vi_tri_o_truoc[1] <= limit_col_view) {
      a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1] + 1].onkeydown = null;
    }
    console.log("_onMouseDown");
    // n???u tr???ng th??i fill t???n t???i th?? k???t th??c fuction
    if (trang_thai_fill === true) {
      return;
    }
    if (thanh_dia_chi_0_on_keydown === true) {
      onKeyDown_1_element = true;
    } else {
      // chuy???n tr???ng th??i onKeyDown_1_element = false; v?? khi input tr?????c ???? xu???t hi???n onKeyDown_1_element l?? true do c?? ch??? settimeout
      onKeyDown_1_element = false;
    }
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

    // ?????u ti??n n?? ch???y h??m 1 click kh???i t???o kiem_tra = 1 do ???? khi click th??m trong v??ng 300 ms gi??y th?? kiem_tra v???n = 1 => n?? ch???y h??m 2 click

    // 2 click _chu???t tr??i trong v??ng 300 ms gi??y th?? ch???y l???i h??m _onMouseDown . L??c n??y kiem_tra l?? 1 thu???c t??nh to??n c???u l??u tr??n dom n??y ( ta l??u v??o kiem_tra thu???c t??nh c???a element v?? n???u l??u bi???n to??n c???c th?? s??? ph???i t???o m???ng bi???n v?? truy c???p th?? ph???i truy???n v??? tr?? r???t ph???c t???p)
    // khi doubleclick xong xu???t hi???n th??? input n??n _this.children[0] === "object"  n??n s??? kh??ng ch???y ch??? 1 click n???a.

    // n???u l??c n??y 2 click th?? n?? s??? ch???y l???i _onDoubleClick
    if (_this.kiem_tra == 1) {
      console.log("_onDoubleClick");
      _this.style.zIndex = 100;
      _this.innerHTML = '<div  contenteditable="true"  ></div>';
      xuat_hien_the_input = true;
      onclick_tinh_toan = true;
      vi_tri_o_truoc[0] = i;
      vi_tri_o_truoc[1] = j;
      onKeyDown = true;
      let input_ = _this.children[0];

      // khi di chuy???n chu???t trong input n??y th?? l??u l???i v??? tr?? c???a con tr??? v??o bi???n vi_tri_con_tro_khi_di_chuyen_trong_double_click_input
      //????? khi element table _this nh???n b??n ph??m th?? l??m xu???t hi???n th??? input l???i v?? focus t???i v??? tr?? tr?????c ???? 
      //******** */ s??? ki???n onkeydown ch??? ???nh h?????ng l??n element ???? khi n?? ???????c focus. N???u n?? kh??ng ???????c l???y ti??u ??i???m th?? kh??ng k??ch ho???t ???????c s??? ki???n
      // do v???y khi input xu???t hi???n v?? focus th?? element cha n??y s??? kh??ng l???ng nghe s??? ki???n onkeydown n???a. ==>  _this.onkeydown  ch??? ch???y ???????c 1 l???n ?????u ti??n duy nh???t v?? _this l???ng nghe s??? ki???n onkeydown tr?????c khi th??? input xu???t hi???n. 

      //  input_.textContent n???u text_formular[i+i_array_2d][j + j_array_2d] l?? null khi hi???n th??? l??n th??nh ""

      if (text_formular[i + i_array_2d][j + j_array_2d] === null) {
        Object.assign(input_.style, css.input_focus);
        input_.focus({
          preventScroll: true
        });
      } else {
        let width_input_focus = table_excel.current.clientWidth - (a.current.children[i + 1].children[j + 1].getBoundingClientRect().x - table_excel.current.getBoundingClientRect().x) - 6 + 'px';
        Object.assign(input_.style, css.input_focus, {
          width: width_input_focus
        });
        let len = text_formular[i + i_array_2d][j + j_array_2d].length;
        let paint = paint_text(text_formular[i + i_array_2d][j + j_array_2d], len);
        input_.innerHTML = paint[0];
        //focus sau ???? di chuy???n ?????n cu???i 

        let range = document.createRange();
        let selection = window.getSelection();
        selection.removeAllRanges();
        range.setStart(input_.childNodes[paint[1]], paint[2]);
        selection.addRange(range);

        //focus
        console.log('--------------------------------------------------------------------------');
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = len;
        console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
      }
      input_.onmousedown = function (event) {
        let range = document.createRange();
        let selection = window.getSelection();
        // setTimeout ??? ????y ????? window.getSelection() l???y v??? tr?? xong m???i cho v??o range
        setTimeout(() => {
          range.setStart(input_.firstChild, 0);
          range.setEnd(selection.anchorNode, selection.anchorOffset);
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
          console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
        }, 0);
      };
    }

    // 1 click  xu???ng th?? ch???y h??m t??nh to??n
    // t??nh to??n n???u ch???y xong th?? t?? m??u
    // trong khi t??nh to??n n???u cong_thuc_chua_hoan_thanh kh??c ""  th?? vi???t ti???p c??ng th???c
    // khi 1 click ta c??ng t???t l???ng nghe s??? ki???n onkedown ??? element n??y n??n ta c???n g??n l???i s??? ki???n onkedown ??? element n??y ch???y ??? cloure kh??c khi element ???????c click ????? ki???m so??t code d??? h??n

    if ((_this.kiem_tra == 0 || _this.kiem_tra == undefined) && function () {
      if (_this.children[0] !== undefined) {
        return _this.children[0].hasAttribute("contenteditable");
      } else {
        return false;
      }
      ;
    }() === false) {
      // hu??? b??? mi???n ch???n c??

      Object.assign(canvas_.current.style, {
        display: "none"
      });
      mien_select_array_2d[0] = i + i_array_2d;
      mien_select_array_2d[1] = j + j_array_2d;
      vi_tri_khung_nhin_truoc_scroll[0] = i_array_2d;
      vi_tri_khung_nhin_truoc_scroll[1] = j_array_2d;

      // thi???t l???p ?????  element div n??y kh??ng l???ng nghe s??? ki???n onKeyDown  (khi d??ng chu???t ta s??? kho?? nh???n b??n ph??m)
      onKeyDown = false;
      console.log("_onClick---");
      //1.----------------------------------------------------------------
      // n???u ?? tr?????c ???? ??ang vi???t c??ng th???c th?? onclick_tinh_toan ???? ???????c chuy???n th??nh true
      //n??n khi click v??o ?? kh??c th?? s??? ph???i t??nh to??n l???i ng?????c l???i kh??ng xu???t hi???n th??? input onclick_tinh_toan == flase  kh??ng ph???i t??nh to??n l???i
      if (onclick_tinh_toan) {
        // ki???m tra n???u ?? tr?????c ???? ch???a c??ng th???c ho???c c??ng th???c b??? s???a th?? ph???i t??nh to??n. Ng?????c l???i kh??ng ph???i t??nh to??n.
        console.log("_onClick---tinh_toan");
        tinh_toan(vi_tri_o_truoc[0], vi_tri_o_truoc[1], "xoa_ky_tu_cong_thuc_thua_mouse_down");

        // khi t??nh to??n xong n???u tr??? v???   cong_thuc_chua_hoan_thanh kh??c ""  th?? vi???t ti???p c??ng th???c v??o th??? input
        // ng?????c l???i  cong_thuc_chua_hoan_thanh b???ng ""  th?? t?? m??u v?? focus  
        if (cong_thuc_chua_hoan_thanh != "") {
          console.log("_onClick---viet ti???p c??ng th???c v??o th??? input");
          // viet ti???p c??ng th???c v??o th??? input n??n ph???i  ?????  onKeyDown_1_element = true; ????? kh??ng l???ng nghe s??? ki???n keydown ??? element cha c???a input
          onKeyDown_1_element = true;
          console.log(cong_thuc_chua_hoan_thanh);
          // kh??ng thay ?????i mien_select_array_2d
          // mien_select_array_2d v???n l?? ?? click tr?????c ????
          mien_select_array_2d[0] = mien_select_array_2d[2];
          mien_select_array_2d[1] = mien_select_array_2d[3];
          // n???u c??ng th???c ??ang vi???t d??? th?? khi onclick s??? vi???t ti???p c??ng th???c v??o ?? tr?????c ????.
          // r,c l?? v??? tr?? r,c th??? input trong khung nh??n n???u l?? s??? ??m ho???c l???n h??n limit th?? l?? v??? tr?? ???? c??ch to??? ????? 0,0 c???a khung nh??n 
          // r + i_array_2d l?? v??? tr?? th???c t???
          var r = parseInt(cong_thuc_chua_hoan_thanh[0]);
          var c = parseInt(cong_thuc_chua_hoan_thanh[1]);

          // g??n c??ng th???c c?? v??o text
          var text = cong_thuc_chua_hoan_thanh[2];
          let len_text = text.length;

          // khi l???n th??? 2 nh???n v??o ?? kh??c m?? kh??ng di chuy???n con tr??? th?? vi_tri_con_tro_khi_di_chuyen_trong_double_click_input v???n nh?? c??
          // v?? th??? tr?????c ???? v???n l?? d???u + n??n c??ng th???c ch??a ho?? th??nh
          // n???u ???n ti???p v??o ?? kh??c m?? kh??ng vi???t th??m k?? t??? + ?????ng sau. ta c???n xo?? c??ng th???c c?? ???? vi???t ??i

          console.log("cong_thuc_chua_hoan_thanh    " + r + '    ' + c);
          console.log(cong_thuc_them_vao[0]);
          // khi click v??o ?? kh??c l???n 2,3 ????? thay ?????i c??ng th???c vi???t ta c???n xo?? c??ng th???c c?? ???? vi???t ??i
          // click v??o ?? kh??c l???n 2,3 th?? input_truoc_do.cong_thuc_them_vao[0] v??  input_truoc_do.vi_tri_cong_thuc_them_vao[0]  ???? ???????c set value
          // n???u input_truoc_do.cong_thuc_them_vao[0] === undefined t???c l???n nh???n ?????u th?? kh??ng c?? c??ng th???c c?? ????? xo?? n??n kh??ng l??m g??
          //  input_truoc_do.vi_tri_cong_thuc_them_vao[0] !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ngh??a l?? ???? di chuy???n con chu???t trong th??? input t???c l?? ch???p nh???n c??ng th???c ???? vi???t n??n kh??ng xo?? n???a
          if (cong_thuc_them_vao[0] === null || vi_tri_cong_thuc_them_vao !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) {} else {
            //  xo?? c??ng th???c c?? ???? vi???t ??i: ????? d??i xo?? l?? cong_thuc_them_vao[0].length
            text = text.slice(0, vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length, len_text);
          }

          // update c??ng th???c m???i
          let text_update = text.slice(0, vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + "(Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "])" + text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input, len_text);
          cong_thuc_them_vao[0] = "(Data[" + (i + i_array_2d) + "][" + (j + j_array_2d) + "])";
          cong_thuc_them_vao[1] = i + i_array_2d;
          cong_thuc_them_vao[2] = j + j_array_2d;
          vi_tri_cong_thuc_them_vao = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input;
          console.log(cong_thuc_them_vao[0]);

          // khi scroll n???u input tr?????c ???? n???m trong khung nh??n th?? vi???t ti???p c??ng th???c v??o input ????
          // n???u input tr?????c ???? kh??ng n???m trong khung nh??n th?? vi???t r???i l??u c??ng th???c v??o m???ng text_formular
          // sau ???? hi???n c??ng th???c ???? l??n thanh formular ????? ng?????i d??ng vi???t ti???p.
          if (r <= limit_view - 1 & r >= 0 && c <= limit_col_view - 1 && c >= 0) {
            var input_truoc_do = a.current.children[r + 1].children[c + 1].children[0];

            // focus t???i v??? tr?? m???i nh??ng kh??ng set l???i vi_tri_con_tro_khi_di_chuyen_trong_double_click_input. Bi???n n??y v???n ??? tr???ng th??i tr?????c ????
            let vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length;
            console.log('vi_tri_focus      ' + vi_tri_focus);
            console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input      ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
            console.log(text_update);
            text_formular[r + i_array_2d][c + j_array_2d] = text_update;
            cong_thuc_chua_hoan_thanh[2] = text_update;
            let paint = paint_text(text_update, vi_tri_focus);
            console.log(paint);
            input_truoc_do.innerHTML = paint[0];

            // di chuy???n focus t???i v??? tr?? c??
            let range = document.createRange();
            let selection = window.getSelection();
            selection.removeAllRanges();
            range.setStart(input_truoc_do.childNodes[paint[1]], paint[2]);
            // khi click v??o div kh??c th?? div input_truoc_do ???? b??? m???t focus, s??? ki???n m???t focus di???n ra cu???i c??ng.
            // do v???y ta ph???i setTimeout ??? ????y ????? l???y l???i focus. => selection.addRange(range) s??? di???n ra cu???i c??ng
            // c??ng h??m n??y nh??ng ??? ch??? doubleclick kh??ng c???n setTimeout do kh??ng click v??o div kh??c n??n kh??ng b??? m???t focus
            setTimeout(() => {
              selection.addRange(range);
            }, 0);

            // hi???n c??ng th???c ???? l??n thanh formular ????? ng?????i d??ng vi???t ti???p.
            var input_formula = thanh_dia_chi_0.current;
            input_formula.value = text_formular[r + i_array_2d][c + j_array_2d];
            console.log(text_formular[r + i_array_2d][c + j_array_2d]);
            input_formula.vi_tri = [r + i_array_2d, c + j_array_2d];
            if (thanh_dia_chi_0_on_keydown === true) {
              setTimeout(() => {
                input_formula.focus({
                  preventScroll: true
                });
              }, 0);
            }
          } else {
            text_formular[r + i_array_2d][c + j_array_2d] = text_update;
            cong_thuc_chua_hoan_thanh[2] = text_formular[r + i_array_2d][c + j_array_2d];
            // hi???n c??ng th???c ???? l??n thanh formular ????? ng?????i d??ng vi???t ti???p.
            var input_formula = thanh_dia_chi_0.current;
            input_formula.value = text_formular[r + i_array_2d][c + j_array_2d];
            input_formula.vi_tri = [r + i_array_2d, c + j_array_2d];
            // thay ?????i ????? r???ng c???a input ph?? h???p v???i k?? t??? nh???p v??o
            var length_ = (input_formula.value.length + 1) * 8;
            if (length_ >= 100) {
              input_formula.style.width = length_ + 'px';
            }
            setTimeout(() => {
              input_formula.focus({
                preventScroll: true
              });
            }, 0);
          }
          onclick_tinh_toan = true;
          // ????? t???t input l???ng nghe s??? ki???n b??n ph??m tr??n all element l??c render
          onKeyDown = true;
        } else {
          //khi t??nh to??n ??? tr??n xong n???u cong_thuc_chua_hoan_thanh === ""
          // th?? t?? m??u v?? focus
          // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
          dia_chi_o_click(i + i_array_2d, j + j_array_2d, i, j);
          // t?? m??u v??o v??? tr?? i,j
          key_enter(vi_tri_o_truoc[0], vi_tri_o_truoc[1], i, j); // t?? m??u v?? focus

          mien_select_array_2d[0] = i_array_2d + i;
          mien_select_array_2d[1] = j_array_2d + j;
          _onMouseEnter_not_event(i, j, i, j);
          onKeyDown = false;
          onclick_tinh_toan = false;
        }
      } else {
        console.log("_onClick----------------- kh??ng tinh_toan", "ch??? t?? m??u th??i");
        // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
        dia_chi_o_click(i + i_array_2d, j + j_array_2d, i, j);
        // t?? m??u v??o v??? tr?? i,j
        key_enter(vi_tri_o_truoc[0], vi_tri_o_truoc[1], i, j); // t?? m??u v?? focus

        mien_select_array_2d[0] = i_array_2d + i;
        mien_select_array_2d[1] = j_array_2d + j;
        _onMouseEnter_not_event(i, j, i, j);
      }
    }

    ///////////////////////////////////////////////
    // khi click v??o element th?? g??n s??? ki???n onkeydown cho element ????
    _this.onkeydown = function (event) {
      //  elment l???ng nghe 2 s??? ki???n 
      //1.onkeydown m???c ?????nh khi kh???i t???o  => t???t s??? ki???n n??y onkeydown === false
      //2. khi elment ???????c click th?? onkeydown === false => ta ???? t???t onkeydown l??c kh???i t???o r???i n??n ??? ????y ta vi???t h??m n??y ????? elment nh???n l???i onkeydown ??? cloure kh??c
      //  onKeyDown_1_element === false t???c ch??a xu???t hi???n th??? input
      // khi xu???t hi???n th??? input th?? onKeyDown_1_element === true
      // m???c ????ch khi xu???t hi???n th??? input th?? t???t l???ng nghe s??? ki???n  ??? elment _this.onkeydown  n??y  
      console.log(onKeyDown_1_element);
      if (onKeyDown_1_element === false) {
        console.log("_onMouseDown_onKeyDown");
        // enter-----xu???t hi???n th??? input khi double click m?? kh??ng nh???p g?? ch??? ???n enter c??ng kh??ng c???n t??nh to??n
        // khi nh???p ph??m kh??c enter th?? s??? k??ch ho???t th??? input m???i vi???c ti???p theo th??? input lo
        if (event.keyCode === 13) {
          console.log("enter-----kh??ng xu???t hi???n th??? input kh??ng t??nh to??n");
          console.log("enter-----xu???t hi???n th??? input khi double click m?? kh??ng nh???p g?? c??ng kh??ng c???n t??nh to??n");
          if (Data[i + i_array_2d][j + j_array_2d] === null) {
            a.current.children[i + 1].children[j + 1].innerHTML = null;
            // n???u xu???t hi???n th??? input khi double click m??  kh??ng nh???p g?? c??ng kh??ng c???n t??nh to??n nh??ng ph???i thay ?????i zindex v??? nh?? c?? v?? khi double click ta ???? x??c ?????nh zIndex: l?? 100
            a.current.children[i + 1].children[j + 1].style.zIndex = j;
          } else {
            // v???i  cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
            let max_zindex = limit_col_view + 1;
            for (let x = limit_col_view; x >= 0; x--) {
              if (Data[i + i_array_2d][x + j_array_2d] === null) {} else {
                a.current.children[i + 1].children[x + 1].style.zIndex = max_zindex;
                max_zindex = x;
              }
            }
            a.current.children[i + 1].children[j + 1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;   "> ${Data[i + i_array_2d][j + j_array_2d]}  </div>`;
          }

          // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
          dia_chi_o_click(i + 1 + i_array_2d, j + j_array_2d, i + 1, j);
          key_enter(i, j, i + 1, j); // t?? m??u v?? focus
          mien_select_array_2d[0] = i_array_2d + i + 1;
          mien_select_array_2d[1] = j_array_2d + j;
          _onMouseEnter_not_event(i + 1, j, i + 1, j);
          xuat_hien_the_input = false;
          onKeyDown = false;
          onclick_tinh_toan = false;
          onKeyDown_1_element = false;
        }

        // khi nh???p ph??m kh??c enter th?? s??? k??ch ho???t th??? input, ??o???n code d?????i ch??? s??? l?? k?? t??? ?????u ti??n khi nh???n t??? b??n ph??m m???i vi???c ti???p theo th??? input lo

        //ch??? s??? l?? k?? t??? ?????u ti??n khi nh???n t??? b??n ph??m v?? khi xu???t hi???n th??? input ph???i t???t l???ng nghe s??? ki???n c???a element n??y b???ng  onKeyDown_1_element = true ;
        if (event.keyCode != 13) {
          console.log("_onMouseDown_onKeyDown_keyCodekhac enter");

          // khi ???n ph??m kh??c enter th?? vi???t c??ng th???c ho???c d??? li???u v??o ?? ???? (thi???t l???p ?? ???? ??? tr???ng th??i t??nh to??n)
          a.current.children[i + 1].children[j + 1].style.zIndex = 100;
          a.current.children[i + 1].children[j + 1].innerHTML = '<div  contenteditable="true"></div>';
          // bi???n n??y d??ng ????? x??c ?????nh ???nh h?????ng t???i scoll
          xuat_hien_the_input = true;
          var input_ = a.current.children[i + 1].children[j + 1].children[0];
          Object.assign(input_.style, css.input_focus);
          var input_formula = thanh_dia_chi_0.current;
          // l???y ti??u ??i???m ????? input_ c?? th??? l???ng nghe ???????c s??? ki???n
          input_.focus({
            preventScroll: true
          });
          console.log('vi_tri_con_tro         ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
          if (vi_tri_con_tro_khi_di_chuyen_trong_double_click_input === undefined) {
            // n???u th??? element table tr?????c ???? kh??ng ???????c double click th?? vi_tri_con_tro_khi_di_chuyen_trong_double_click_input s??? l??  undefined
            // ta b??i ??en mi???n l???a ch???n ??? ????y ????? khi nh???n ph??m s??? xo?? to??n b??? k?? t??? c?? n???u element table kh??ng ???????c double click tr?????c ????.
            // l??c n??y s??? ki???n ghi k??  t??? ???? nh???n v??o input_ s??? ch???y v?? th??m k?? t??? v??o( ho???c xo?? k?? t??? n???u nh???n ph??m backspace)

            // g??n gi?? tr??? ?????u ti??n khi nh???n ph??m ???? v??o text_formular; c??c gi?? tr??? ti???p theo input ???? s??? l??ng nghe s??? ki???n onkeydown ????? g??n ti???p
            //**************** */ trong javscript thu???n ghi gi?? tr??? t??? b??n ph??m v??o th??? input s??? di???n ra sau vi???c l???y gi?? tr??? t??? th??? input v??o bi???n.
            // ph???i setTimeout ??? ????y v?? ph???i ?????i input l???y gi?? tr??? t??? b??n ph??m m???i g??n v??o text_formular
            // sau ???? g??n gi?? tr??? khi nh???n l??n input_formula
            setTimeout(() => {
              text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent;
              console.log(text_formular[i + i_array_2d][j + j_array_2d]);
              input_formula.value = text_formular[i + i_array_2d][j + j_array_2d];
              input_formula.vi_tri = [i + i_array_2d, j + j_array_2d];
              vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 1;
            }, 0);
          } else {
            // n???u tr?????c ???? double click input_ hi???n l??n c??ng th???c c?? ????? vi???t
            // m???c ????ch c???a ng?????i d??ng l?? vi???t ti???p c??ng th???c khi ???n ph??m th??
            // di chuy???n con tr??? t???i v??? tr?? focus tr?????c  ????.
            // n???u th??? element table tr?????c ???? ???????c double click th?? vi_tri_con_tro_khi_di_chuyen_trong_double_click_input s??? l?? kh??c undefined
            let len = text_formular[i + i_array_2d][j + j_array_2d].length;
            let paint = paint_text(text_formular[i + i_array_2d][j + j_array_2d], len);
            input_.innerHTML = paint[0];
            //focus sau ???? di chuy???n ?????n cu???i 

            let range = document.createRange();
            let selection = window.getSelection();
            selection.removeAllRanges();
            range.setStart(input_.childNodes[paint[1]], paint[2]);
            selection.addRange(range);

            // l??c n??y s??? ki???n ghi k??  t??? ???? nh???n v??o input_ s??? ch???y v?? th??m k?? t??? v??o( ho???c xo?? k?? t??? n???u nh???n ph??m backspace)

            // g??n gi?? tr??? ?????u ti??n khi nh???n ph??m ???? v??o text_formular; c??c gi?? tr??? ti???p theo input ???? s??? l??ng nghe s??? ki???n onkeydown ????? g??n ti???p
            //**************** */ trong javscript thu???n ghi gi?? tr??? t??? b??n ph??m v??o th??? input s??? di???n ra sau vi???c l???y gi?? tr??? t??? th??? input v??o bi???n.
            // ph???i setTimeout ??? ????y v?? ph???i ?????i input l???y gi?? tr??? t??? b??n ph??m m???i g??n v??o text_formular
            // sau ???? g??n gi?? tr??? khi nh???n l??n input_formula
            setTimeout(() => {
              text_formular[i + i_array_2d][j + j_array_2d] = input_.textContent;
              console.log(text_formular[i + i_array_2d][j + j_array_2d]);
              input_formula.value = text_formular[i + i_array_2d][j + j_array_2d];
              input_formula.vi_tri = [i + i_array_2d, j + j_array_2d];
              let range = document.createRange();
              let selection = window.getSelection();
              // setTimeout ??? ????y ????? window.getSelection() l???y v??? tr?? xong m???i cho v??o range

              console.log(selection.anchorNode, selection.anchorOffset);
              range.setStart(input_.firstChild, 0);
              range.setEnd(selection.anchorNode, selection.anchorOffset);
              vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = range.toString().length;
              console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
            }, 0);
          }
          onclick_tinh_toan = true;
          vi_tri_o_truoc[0] = i;
          vi_tri_o_truoc[1] = j;
          // t???t l???ng nghe s??? ki???n onKeyDown cho div element
          onKeyDown_1_element = true;
          run_function_when_input_focus(input_, i, j, i_array_2d, j_array_2d);
        }
      }
    };

    // h??m n??y kh??ng ?????ng b??? ch???y cu???i c???a l???n click ????.
    setTimeout(() => {
      return _this.kiem_tra = 0;
    }, 300);
    _this.kiem_tra = 1;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // h??m copy

  var mien_copy;
  function copy(event) {
    mien_copy = [...mien_select_array_2d];
    let text_copy = "";
    for (let index = mien_copy[0]; index < mien_copy[2]; index++) {
      let text_copy_row = "";
      // ?????u ti??n n?? truy???n index = mien_copy[0] xu???ng for sau ???? n?? l???p qua c??c c???t gh??p th??nh text d??ng
      for (let index_j = mien_copy[1]; index_j < mien_copy[3]; index_j++) {
        text_copy_row = text_copy_row + Data[index][index_j] + "\t";
      }
      // cu???i c??ng c???a text_copy_row kh??ng c?? "\t"
      text_copy_row = text_copy_row + Data[index][mien_copy[3]];
      // gh??p t???t c??? c??c d??ng l???i t???o th??nh text table copy t???i excel ???????c

      text_copy = text_copy + text_copy_row + "\r";
    }

    // cu???i c??ng c???a text_copy t???i mien_copy[2] kh??ng c?? "\r"
    let text_copy_row = "";
    for (let index_j = mien_copy[1]; index_j < mien_copy[3]; index_j++) {
      text_copy_row = text_copy_row + Data[mien_copy[2]][index_j] + "\t";
    }

    // cu???i c??ng c???a text_copy_row kh??ng c?? "\t"
    text_copy_row = text_copy_row + Data[mien_copy[2]][mien_copy[3]];
    text_copy = text_copy + text_copy_row;
    console.log(text_copy);
    navigator.clipboard.writeText(text_copy);
    canvas_.current.style.borderStyle = "dashed";
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  function paste(event) {
    console.log(vi_tri_o_truoc);
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);
    navigator.clipboard.readText().then(clipText => {
      // chuy???n text t??? clipboard sang array_paste k???t h???p chuy???n data t??? array_paste sang Data cho performance
      var array_paste;
      array_paste = clipText.split("\r");
      // ch?? ?? xem l???i s??? s???ng let trong v??ng l???p for kh??c var
      for (let index = 0, len = array_paste.length; index < len; index++) {
        array_paste[index] = array_paste[index].split("\t");
        for (let index_col = 0, len_col = array_paste[0].length; index_col < len_col; index_col++) {
          Data[vi_tri_o_truoc[0] + index + i_array_2d][vi_tri_o_truoc[1] + index_col + j_array_2d] = JSON.parse(array_paste[index][index_col]);
          console.log(vi_tri_o_truoc[0] + index + i_array_2d, vi_tri_o_truoc[1] + index_col + j_array_2d);
          console.log(Data[vi_tri_o_truoc[0] + index + i_array_2d][vi_tri_o_truoc[1] + index_col + j_array_2d]);
          text_formular[vi_tri_o_truoc[0] + index + i_array_2d][vi_tri_o_truoc[1] + index_col + j_array_2d] = array_paste[index][index_col];
        }
      }

      // hi???n d??? li???u l??n khung nh??n

      for (let index = 0; index <= limit_view; index++) {
        for (let index_j = 0; index_j <= limit_col_view; index_j++) {
          a.current.children[index + 1].children[index_j + 1].innerHTML = Data[index + i_array_2d][index_j + j_array_2d];
        }
      }
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  let trang_thai_fill = false;
  let kieu_fill;
  function fill(event) {
    let data_array_2d = [];
    let text_inclue_Data;
    let keo_doc;
    let keo_ngang;
    keo_doc = mien_select_array_2d[2] - mien_select_array_2d[0];
    keo_ngang = mien_select_array_2d[3] - mien_select_array_2d[1];
    let text = text_formular[vi_tri_click_in_Data[0]][vi_tri_click_in_Data[1]];
    console.log(text);
    let text_replace;
    let kq;
    let text_cong_thuc_cell_next;
    if (text === null) {
      text_inclue_Data = false;
    } else {
      text_inclue_Data = text.indexOf("Data") !== -1;
    }

    // ti???n h??nh fill v??o m???ng data_array_2d
    if (text === null || text_inclue_Data === false) {
      for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
        let data_array_col = [];
        for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
          data_array_col.push(text);
        }

        // l???p qua c??c cell theo d??ng ?????y v??o m???ng data_array_2d
        data_array_2d.push(data_array_col);
      }
    } else {
      text_replace = text.replaceAll('Data', '|_|Data');
      // t???o m???ng l??u tr??? text c??ng th???c vi???t
      kq = text_replace.split('|_|');
      for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
        let data_array_col = [];
        for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
          // fill xong th?? l??u v??o m???ng text_cong_thuc_cell_next
          text_cong_thuc_cell_next = kq.map(i => {
            console.log(i);
            // trong m???ng kq ti???n h??nh fill t???ng item n???u tho??? m??n ??i???u ki???n
            // tr?????c ti??n ki???m tra item c?? tho??? m??n ??i???u ki???n kh??ng
            // h??m match tr??? v??? 1 ph???n item tho??? m??n ??i???u ki???n
            // i_row l??:                 (Data$[0]
            // i_col l?? ph???n c??n l???i:    $[1])
            let i_row = i.match(/.*Data\$?\[[0-9]+\]/i);

            //  x(?!y)	Ch??? kh???p x n???u ngay sau x kh??ng ph???i l?? y
            // (?!\[|\$)  kh???p n???u ngay sau kh??ng ph???i l?? [ ho???c $
            let i_col = i.match(/\$?\[[0-9]+\](?!\[|\$).*/i);

            // n???u kh??ng match ???????c th?? i_row === null
            // n??u item t???c i ch???a Data t???c macth ???????c tr??? v??? m???ng kh??c null th?? ti???n h??nh fill 
            // ng?????c l???i i kh??ng  ch???a data th?? tr??? v??? i ????? sau ???? join l???i
            if (i_row != null) {
              console.log(i_row, i_col);
              // ki???m tra tr?????c row c?? k?? t??? $ kh??ng
              let co_dinh_row = /\$/i.test(i_row[0]);
              // ki???m tra tr?????c c???t c?? k?? t??? $ kh??ng
              let co_dinh_col = /\$/i.test(i_col[0]);
              if (co_dinh_col === false) {
                // ???? tho??? m??n ??i???u ki???n ti???n h??nh fill    

                let text_moi = i_col[0].match(/[0-9]+/i)[0] * 1 + index_doc;
                let i_col_replace = i_col[0].replace(/[0-9]+/i, text_moi);
                i_col = i_col_replace;
              }
              if (co_dinh_col === true) {
                i_col = i_col;
              }

              // tr?????c r??ng kh??ng c?? k?? t??? $ th?? fill +1 d??ng
              if (co_dinh_row === false) {
                // ???? tho??? m??n ??i???u ki???n ti???n h??nh fill  
                let text_moi = i_row[0].match(/[0-9]+/i)[0] * 1 + index_ngang;
                let i_replace = i_row[0].replace(/[0-9]+/i, text_moi) + i_col;
                return i_replace;
              }
              if (co_dinh_row === true) {
                return i_row + i_col;
              }
            } else {
              return i;
            }
          });

          // text_cong_thuc_cell_next.join('') l?? fill xong 1 cell
          // l???p qua c??c cell theo c???t ?????y v??o m???ng data_array_col
          data_array_col.push(text_cong_thuc_cell_next.join(''));
        }

        // l???p qua c??c cell theo d??ng ?????y v??o m???ng data_array_2d
        data_array_2d.push(data_array_col);
      }
    }
    console.log(data_array_2d);
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

    // l???p trong m???ng data_array_2d l???y c??ng th???c push v??o formular
    for (let index = 0, len = keo_doc; index <= len; index++) {
      for (let index_col = 0, len_col = keo_ngang; index_col <= len_col; index_col++) {
        // b??? qua cell ?????u ti??n
        if (index === 0 && index_col === 0) {} else {
          // index_  l?? th??? t??? c??ng th???c ???? trong  formular
          let index_ = index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col];
          // index_!== null  t???c l?? ta fill v??o ?? ???? c?? c??ng th???c r???i
          if (index_ !== null) {
            // index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]   l?? v??? tr?? index trong    formular

            // push c??ng th???c m???i v??o v??? tr?? c??
            if (text === null) {
              // n???u fill ?? ch??? ch???a gi?? tr??? l?? null th?? ghi gi?? tr??? v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
              console.log(Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
              delete formular[index_];
            } else if (text.slice(0, 1) !== "=" && text.slice(0, 1) !== "+") {
              // n???u fill ?? ch??? ch???a gi?? tr??? th?? ghi gi?? tr??? v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = +data_array_2d[index][index_col];
              console.log(Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              delete formular[index_];
            } else if (text.slice(0, 1) === "=" && text.slice(0, 1) === "+" && text_chi_chua_value_hoac_cong_thuc === true) {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c kh??ng c?? ch???a Data th?? t??nh c??ng th???c r???i ghi v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              delete formular[index_];
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c ch???a   Data th?? push v??o formular
            } else {
              formular[index_] = eval("(function(){return " + "Data[" + (vi_tri_o_truoc[0] + i_array_2d + index) + "][" + (vi_tri_o_truoc[1] + j_array_2d + index_col) + "]" + " = " + data_array_2d[index][index_col].replaceAll('$', '') + ";})");
              // t??nh to??n l???i c??ng th???c m???i ghi
              formular[index_]();
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            }
          } else {
            // d??? li???u fill v??o ?? ch??a vi???t c??ng th???c n??n ch??? push c??ng th???c m???i v??o formular kh??ng ph???i xo?? c??ng th???c c??

            if (text === null) {
              // n???u fill ?? ch??? ch???a gi?? tr??? l?? null th?? ghi gi?? tr??? v??o Data
            } else if (text.slice(0, 1) !== "=" && text.slice(0, 1) !== "+") {
              // n???u fill ?? ch??? ch???a gi?? tr??? th?? ghi gi?? tr??? v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = +data_array_2d[index][index_col];
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            } else if (text.slice(0, 1) === "=" && text.slice(0, 1) === "+" && text_chi_chua_value_hoac_cong_thuc === true) {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c kh??ng c?? ch???a Data th?? t??nh c??ng th???c r???i ghi v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            } else {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c ch???a   Data th?? push v??o formular
              formular.push(eval("(function(){return " + "Data[" + (vi_tri_o_truoc[0] + i_array_2d + index) + "][" + (vi_tri_o_truoc[1] + j_array_2d + index_col) + "]" + " = " + data_array_2d[index][index_col].replaceAll('$', '') + ";})"));
              // t??nh to??n l???i c??ng th???c m???i ghi

              formular[formular.length - 1]();
              index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = formular.length - 1;
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            }
          }
        }
        ;
      }
    }
    let _len = formular.length;

    // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t

    for (let index = 0; index < _len; index++) {
      if (formular[index] !== undefined) {
        formular[index]();
      }
      ;
    }

    // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
    for (let index = 0; index <= limit_view; index++) {
      for (let index_j = 0; index_j <= limit_col_view; index_j++) {
        a.current.children[index + 1].children[index_j + 1].innerHTML = Data[index + i_array_2d][index_j + j_array_2d];
      }
    }
  }

  //  vd: ch???y fuction fill        console.log(fill('1 + (Data[600][10]) + (Data[1][20])', 4, 3))
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function fill_21(event) {
    console.log(mien_select_array_2d);
    let keo_doc;
    let keo_ngang;
    let n_fill;
    keo_doc = 0;
    keo_ngang = mien_select_array_2d[3] - mien_select_array_2d[1];
    n_fill = mien_select_array_2d[2] - mien_select_array_2d[0];
    let text_inclue_Data = [];
    let data_array_2d = [];

    // th???c hi???n h??m fill    n   l???n
    for (let index = 0; index <= n_fill; index++) {
      // ti???n h??nh fill t???ng  c???t cell m???t

      let text = text_formular[vi_tri_click_in_Data[0] + index][vi_tri_click_in_Data[1]];
      console.log(text);
      let text_replace;
      let kq;
      let text_cong_thuc_cell_next;
      if (text === null) {
        text_inclue_Data[index] = false;
      } else {
        text_inclue_Data[index] = text.indexOf("Data") !== -1;
      }
      if (text === null || text_inclue_Data[index] === false) {
        for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
          let data_array_col = [];
          for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
            data_array_col.push(text);
          }

          // l???p qua c??c cell theo d??ng ?????y v??o m???ng data_array_2d
          data_array_2d.push(data_array_col);
        }
      } else {
        text_replace = text.replaceAll('Data', '|_|Data');
        // t???o m???ng l??u tr??? text c??ng th???c vi???t
        kq = text_replace.split('|_|');
        for (let index_ngang = 0; index_ngang <= keo_doc; index_ngang++) {
          let data_array_col = [];
          for (let index_doc = 0; index_doc <= keo_ngang; index_doc++) {
            // fill xong th?? l??u v??o m???ng text_cong_thuc_cell_next
            text_cong_thuc_cell_next = kq.map(i => {
              // trong m???ng kq ti???n h??nh fill t???ng item n???u tho??? m??n ??i???u ki???n
              // tr?????c ti??n ki???m tra item c?? tho??? m??n ??i???u ki???n kh??ng
              // h??m match tr??? v??? 1 ph???n item tho??? m??n ??i???u ki???n
              // i_row l??:                 (Data$[0]
              // i_col l?? ph???n c??n l???i:    $[1])
              let i_row = i.match(/.*Data\$?\[[0-9]+\]/i);
              //  x(?!y)	Ch??? kh???p x n???u ngay sau x kh??ng ph???i l?? y
              // (?!\[|\$)  kh???p n???u ngay sau kh??ng ph???i l?? [ ho???c $
              let i_col = i.match(/\$?\[[0-9]+\](?!\[|\$).*/i);

              // n???u kh??ng match ???????c th?? i_row === null
              // n??u item t???c i ch???a Data t???c macth ???????c tr??? v??? m???ng kh??c null th?? ti???n h??nh fill 
              // ng?????c l???i i kh??ng  ch???a data th?? tr??? v??? i ????? sau ???? join l???i

              if (i_row != null) {
                // ki???m tra tr?????c row c?? k?? t??? $ kh??ng
                let co_dinh_row = /\$/i.test(i_row[0]);
                // ki???m tra tr?????c c???t c?? k?? t??? $ kh??ng
                let co_dinh_col = /\$/i.test(i_col[0]);
                if (co_dinh_col === false) {
                  // ???? tho??? m??n ??i???u ki???n ti???n h??nh fill    

                  let text_moi = i_col[0].match(/[0-9]+/i)[0] * 1 + index_doc;
                  let i_col_replace = i_col[0].replace(/[0-9]+/i, text_moi);
                  i_col = i_col_replace;
                }
                if (co_dinh_col === true) {
                  i_col = i_col;
                }

                // tr?????c r??ng kh??ng c?? k?? t??? $ th?? fill +1 d??ng
                if (co_dinh_row === false) {
                  // ???? tho??? m??n ??i???u ki???n ti???n h??nh fill  
                  let text_moi = i_row[0].match(/[0-9]+/i)[0] * 1 + index_ngang;
                  let i_replace = i_row[0].replace(/[0-9]+/i, text_moi) + i_col;
                  return i_replace;
                }
                if (co_dinh_row === true) {
                  return i_row + i_col;
                }
              } else {
                return i;
              }
            });

            // text_cong_thuc_cell_next.join('') l?? fill xong 1 cell
            // l???p qua c??c cell theo c???t ?????y v??o m???ng data_array_col
            data_array_col.push(text_cong_thuc_cell_next.join(''));
          }

          // l???p qua c??c cell theo d??ng ?????y v??o m???ng data_array_2d
          data_array_2d.push(data_array_col);
        }
      }
    }
    console.log(data_array_2d);
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

    // l???p trong m???ng data_array_2d l???y c??ng th???c push v??o formular

    for (let index = 0; index <= n_fill; index++) {
      for (let index_col = 1; index_col <= keo_ngang; index_col++) {
        // index_  l?? th??? t??? c??ng th???c ???? trong  formular
        let index_ = index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col];
        console.log(index, index_col);

        // index_!== null  t???c l?? ta fill v??o ?? ???? c?? c??ng th???c r???i
        if (index_ !== null) {
          // index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]   l?? v??? tr?? index trong    formular

          // push c??ng th???c m???i v??o v??? tr?? c??
          if (data_array_2d[index][index_col] === null) {
            // n???u fill ?? ch??? ch???a gi?? tr??? l?? null th?? ghi gi?? tr??? v??o Data
            Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
            console.log(Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
            text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = null;
            delete formular[index_];
            console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
          } else if (data_array_2d[index][index_col].slice(0, 1) !== "=" && data_array_2d[index][index_col].slice(0, 1) !== "+") {
            // n???u fill ?? ch??? ch???a gi?? tr??? th?? ghi gi?? tr??? v??o Data
            Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = +data_array_2d[index][index_col];
            console.log(Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col]);
            text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            delete formular[index_];
            console.log('bbbbbbbbbbbbbbbbbbbbbbbbb');
          } else {
            if (text_inclue_Data[index]) {
              formular[index_] = eval("(function(){return " + "Data[" + (vi_tri_o_truoc[0] + i_array_2d + index) + "][" + (vi_tri_o_truoc[1] + j_array_2d + index_col) + "]" + " = " + data_array_2d[index][index_col].replaceAll('$', '') + ";})");
              // t??nh to??n l???i c??ng th???c m???i ghi
              formular[index_]();
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              console.log('DataDataData---change');
            } else {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c kh??ng c?? ch???a Data th?? t??nh c??ng th???c r???i ghi v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              delete formular[index_];
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c ch???a   Data th?? push v??o formular
              console.log('ccccccccccccccccccccccccccc');
            }
          }
        } else {
          // d??? li???u fill v??o ?? ch??a vi???t c??ng th???c n??n ch??? push c??ng th???c m???i v??o formular kh??ng ph???i xo?? c??ng th???c c??

          if (data_array_2d[index][index_col] === null) {
            // n???u fill ?? ch??? ch???a gi?? tr??? l?? null th?? ghi gi?? tr??? v??o Data

            console.log('11111111111111111111111111111111111');
          } else if (data_array_2d[index][index_col].slice(0, 1) !== "=" && data_array_2d[index][index_col].slice(0, 1) !== "+") {
            // n???u fill ?? ch??? ch???a gi?? tr??? th?? ghi gi?? tr??? v??o Data
            Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = +data_array_2d[index][index_col];
            text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
            console.log('22222222222222222222222222222222');
          } else {
            if (text_inclue_Data[index]) {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c ch???a   Data th?? push v??o formular
              formular.push(eval("(function(){return " + "Data[" + (vi_tri_o_truoc[0] + i_array_2d + index) + "][" + (vi_tri_o_truoc[1] + j_array_2d + index_col) + "]" + " = " + data_array_2d[index][index_col].replaceAll('$', '') + ";})"));
              // t??nh to??n l???i c??ng th???c m???i ghi

              formular[formular.length - 1]();
              index_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = formular.length - 1;
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              console.log('DataDataDataDataData');
            } else {
              // n???u fill ?? ch???a c??ng th???c m?? trong c??ng th???c kh??ng c?? ch???a Data th?? t??nh c??ng th???c r???i ghi v??o Data
              Data[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = eval(data_array_2d[index][index_col]);
              text_formular[vi_tri_o_truoc[0] + i_array_2d + index][vi_tri_o_truoc[1] + j_array_2d + index_col] = data_array_2d[index][index_col];
              console.log('33333333333333333333333333333333333');
            }
          }
        }
      }
    }
    let _len = formular.length;

    // t??nh to??n l???i t???t c??? c??c c??ng th???c ???? vi???t

    for (let index = 0; index < _len; index++) {
      if (formular[index] !== undefined) {
        formular[index]();
      }
      ;
    }

    // hi???n th??? gi?? tr??? ???? t??nh to??n l??n trang web b???ng t??nh
    for (let index = 0; index <= limit_view; index++) {
      for (let index_j = 0; index_j <= limit_col_view; index_j++) {
        a.current.children[index + 1].children[index_j + 1].innerHTML = Data[index + i_array_2d][index_j + j_array_2d];
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // khi di chuy???n scroll ?????n v??? tr?? cu???i n???u ????? scroll ?????ng scrollHeight s??? t??? ?????ng t??ng k??ch th?????c.
  // c??? ?????nh scrollHeight th?? m???i scroll ?????n cu???i ???????c.
  // c??? ?????nh scrollHeight b???ng m?? if ( Math.round(_table.scrollTop) >= data_lenght - 100*20 )
  // ho???c ????? chi???u d??i bar_scroll + scrollTop b?? h??n scrollHeight (data.lenght  10000 tr??? l??n th?? ???????c)
  let table_excel_height = window.innerHeight - 87.742 - 60;
  let table_excel_width = window.innerWidth - 40;

  // ??? zoom 100 % 1 click scroll ??? chrome di chuy???n 40 pixcel 
  let zoom = window.devicePixelRatio;
  let click_scroll_dichuyen = 40 / zoom;
  let data_lenght = 900 * click_scroll_dichuyen;
  let data_col_lenght = 950 * click_scroll_dichuyen;
  var width_bar_reference_col;
  var vi_tri_khung_nhin_truoc_scroll = [null, null];
  function _onScroll(event) {
    let vi_tri_cat;
    let vi_tri_cat_col;
    let _table = table_excel.current;
    var di_chuyen = _table.scrollTop;
    var di_chuyen_col = _table.scrollLeft;
    console.log('_onScroll-----------------------' + di_chuyen);
    vi_tri_cat = Math.round(di_chuyen / click_scroll_dichuyen);
    vi_tri_cat_col = Math.round(di_chuyen_col / click_scroll_dichuyen);
    let vi_tri_cat_truoc_do = a.current.children[0 + 1].children[0].innerHTML; // l?? v??? tr?? c???t tr?????c ????
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);

    // scrollHeight chi???u cao c???a c??? thanh scroll
    // scrollTop kho???ng c??ch t??? top 0 ?????n v??? tr?? hi???n t???i
    //*******/ khi scroll n???u click kho???ng cach scroll l???n h??n chi???u cao c???a element c?? state height th?? n?? s??? rerender l???i h??m _onScroll
    // element c?? 10000 d??ng row_height b???ng 20 th?? c?? 200000px m???i 1 click scroll s??? l?? 40px v???i zoom 100% do ???? vi_tri_cat s??? chia cho s??? ????
    // ????nh d???u v??ng l???a ch???n

    // d???ng scroll t???i v??? tr?? mu???n

    if (di_chuyen <= data_lenght) {} else {
      // ch?? ?? *****
      // ??? ch??? kh??c th?? (b??nh th?????ng kh??ng c???n quan t??m th??? t??? s???p x???p h??m scrollTop s??? ch???y ?????u ti??n sau ???? requestAnimationFrame cu???i c??ng l?? setTimeout)
      // nh??ng ??? ????y scrollTop s??? d???ng trong h??m scroll (scrollTop ???????c t???o b???i addEventListener scroll) t???c l?? n?? ph???i ?????i c??c h??m trong s??? ki???n scroll ??? ????y 
      // ch???y xong th?? n?? m???i k??ch ho???t h??m scrollTop n??n ??? ????y th??? t??? s??? l?? requestAnimationFrame sau ???? setTimeout sau ???? scrollTop
      // do ???? ??? ????y ta kh??ng d??ng ???????c    // window.requestAnimationFrame(remove_scroll); t???c l?? ?????i scrollTop scroll t???i v??? tr?? mong mu???n r???i xoa b??? l???ng nghe scroll  ???????c
      // v??  window.requestAnimationFrame s??? ch???y tr?????c scrollTop
      // m?? thay v??o ???? ta ph???i d??ng  // window.requestAnimationFrame(_onScroll); ho???c c?? th??? ch??? d??ng ********   _onScroll();  
      // m???c ????ch ????? khi g???i h??m _onScroll t???c l?? s??? ki???n scroll ???????c k??ch ho???t do ???? h??m scrollTop s??? ???????c k??ch ho???t ch???y lu??n
      // ??? ????y h??m n??y ch???y tr?????c ????? quay l???i v??ng l???p ch??? n??y 1 ho???c 2 l???n tu??? ta scroll m???nh kh??ng r???i brower patting n??n kh??ng b??? l??c.

      // n???u kh??ng d??ng window.requestAnimationFrame(_onScroll) ho???c g???i th??m h??m _onScroll()  m?? ch??? c??  _table.scrollTop = data_lenght ;  s??? b??? l??c v?? s??? ki???n oncsroll s??? b??? l???ng nghe r???t nhi???u l???n r???i scrollTop m???i ch???y do ???? s??? ???????c patting tr?????c scrollTop n??n g??y l??c
      // n???u vi???t th??m window.requestAnimationFrame(_onScroll) ho???c g???i th??m h??m _onScroll() th?? n?? s??? k??ch ho???t h??m scrollTop s??? ???????c k??ch ho???t ch???y lu??n tr?????c khi l???ng nghe  
      // c??c s??? ki???n oncsroll kh??c m?? h??m scrollTop ch???y t???n th???i gian n??n c??c s??? ki???n oncsroll kh??c ch??? ch???y th??m ???????c 1 l???n khi ta scrool m???nh th??i.
      // *** gi???i th??ch th??m 
      // s??? ki???n oncsroll s??? b??? l???ng nghe r???t nhi???u l???n n???u kh??ng d??ng window.requestAnimationFrame(_onScroll) ho???c g???i th??m h??m _onScroll() v??
      // scrollTop l?? h??m b???t ?????ng b??? s??? b??? ?????y ra ????? c??c s??? ki???n oncsroll ???????c l???ng nghe
      // khi oncsroll ???????c l???ng nghe n?? l???p l???i ??o???n code n??y do ??o???n code n??y tr??? v??? ngay n??n trong kho???ng th???i gian 16ms l???ng nghe v?? th???c thi code  n?? s??? ???????c l???ng nghe r???t nhi???u l???n
      // ch?? ?? th??m ****
      // n???u ch??? d??ng _onScroll(); th?? _onScroll(); ph???i ?????t sau  _table.scrollTop = data_lenght ;
      // v?? n???u ?????t tr?????c th?? s??? t???o th??nh v??ng l???p v?? h???n n??n l???i
      // ?????t sau th?? _onScroll() s??? k??ch ho???t l???p t???c scrollTop s??? r??? nh??nh b??n tr??n tho??t kh???i v??ng l???p
      _table.scrollTop = data_lenght;
      _onScroll();
      //ho???c ta c?? th??? d??ng window.requestAnimationFrame(_onScroll);

      return di_chuyen = data_lenght;
    }

    // d???ng scroll t???i v??? tr?? mu???n tthanh cu???n ngang
    if (di_chuyen_col <= data_col_lenght) {} else {
      //ho???c ta c?? th??? d??ng window.requestAnimationFrame(_onScroll);
      _table.scrollLeft = data_col_lenght;
      _onScroll();
      return di_chuyen_col = data_col_lenght;
    }

    // v??? tr?? c???t l??  a.current.children[0 + 1].children[0].innerHTML l??c sau khi render UI xong

    // khi scroll xong th?? thay ?????i top, left width, height c???a a ????? viewport v???n v???y     
    Object.assign(a.current.style, {
      paddingTop: di_chuyen + 'px',
      height: data_lenght - di_chuyen + 'px',
      paddingLeft: di_chuyen_col + 'px',
      width: data_col_lenght - di_chuyen_col + 'px'
    });
    let vi_tri_cat_truoc_do_col = a.current.children[0].children[0 + 1].innerHTML; // l?? v??? tr?? c???t tr?????c ????

    // update l???i width_bar_reference_col  sau khi scroll
    width_bar_reference_col = a.current.children[0].children[0].clientWidth;
    var sum = 0;
    while (a.current.children[sum + 1].children[0].getBoundingClientRect().y <= table_excel.current.clientHeight - 2 + table_excel.current.getBoundingClientRect().y) {
      sum++;
    }
    limit_view = sum - 1;
    var sum_col = 0;
    while (a.current.children[0].children[sum_col + 1].getBoundingClientRect().x <= table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth - 2) {
      sum_col++;
    }
    limit_col_view = sum_col - 1;

    // xo?? _this.onkeydown ??? v??? tr?? tr?????c ??i
    try {
      a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1] + 1].onkeydown = null;
      console.log(vi_tri_o_truoc[0], vi_tri_o_truoc[1], "onKeyDown = null ");
    } catch (error) {
      // b??? qua l???i
    }

    // c???p nh???t l???i d??? li???u khi scroll -- b?????c1
    for (let index = 0; index <= limit_view; index++) {
      a.current.children[index + 1].children[0].innerHTML = index + vi_tri_cat;
      for (let index_j = 0; index_j <= limit_col_view; index_j++) {
        if (index === 0) {
          a.current.children[0].children[index_j + 1].innerHTML = index_j + vi_tri_cat_col;
        }

        // v???i  cell hi???n l??n trang web b???ng t??nh th?? ta duy???t t??? cu???i t???i ?????u d??ng ???? ????? x??c ?????nh zIndex cho cell ????
        let max_zindex = limit_col_view + 1;
        for (let x = limit_col_view; x >= 0; x--) {
          if (Data[index + vi_tri_cat][x + vi_tri_cat_col] === null) {
            a.current.children[index + 1].children[x + 1].style.zIndex = x;
          } else {
            a.current.children[index + 1].children[x + 1].style.zIndex = max_zindex;
            max_zindex = x;
          }
        }
        if (Data[index + vi_tri_cat][index_j + vi_tri_cat_col] === null) {
          a.current.children[index + 1].children[index_j + 1].innerHTML = null;
        } else {
          a.current.children[index + 1].children[index_j + 1].innerHTML = ` <div    style="  position:absolute;      background: inherit;   height: inherit ;   white-space: nowrap;   pointer-events: none;   "> ${Data[index + vi_tri_cat][index_j + vi_tri_cat_col]}  </div>`;
        }
      }
    }

    // c??c cell b??? ???n b??n tr??i tr???c
    // t??m c??c cell cell b??? ???n b??n tr??i tr???c g???n nh???t ????? hi???n d??? li???u l??n div show c??c cell ???n
    // sau ???? di chuy???n div ???? ph?? h???p v???i khung nh??n
    for (let index = 0; index <= limit_view; index++) {
      let sum_col_hide = 1;
      for (let x = vi_tri_cat_col - 1; x >= 0; x--) {
        a.current.children[index + 1].children[limit_col + 1].style.visibility = "hidden";
        if (Data[index + vi_tri_cat][x] === null) {
          sum_col_hide = sum_col_hide + 1;
        } else {
          a.current.children[index + 1].children[limit_col + 1].style.visibility = "visible";
          // div ???? hi???n d??? li???u
          a.current.children[index + 1].children[limit_col + 1].innerHTML = Data[index + vi_tri_cat][x];
          // di chuy???n div ???? ph?? h???p v???i khung nh??n
          a.current.children[index + 1].children[limit_col + 1].style.left = -tro_ve_vi_tri_begin - sum_col_hide * 85 + 'px';
          // x??c d???nh zindex cho div ????
          for (let x = 0; x <= limit_col_view; x++) {
            if (Data[index + vi_tri_cat][x + vi_tri_cat_col] === null) {} else {
              a.current.children[index + 1].children[limit_col + 1].style.zIndex = x;
              break;
            }
          }
          break;
        }
      }
    }

    //B?????c 2:  n???u c??ng th???c ch??a ho??n th??nh(xu???t hi???n th??? input)

    if (xuat_hien_the_input) {
      console.log('xuat_hien_the_input--' + xuat_hien_the_input);
      change_input_scroll(vi_tri_o_truoc[0], vi_tri_o_truoc[1], vi_tri_o_truoc[0] - (vi_tri_cat - vi_tri_cat_truoc_do), vi_tri_o_truoc[1] - (vi_tri_cat_col - vi_tri_cat_truoc_do_col));
    } else {
      // B?????c 2: n???u sau khi scroll v??? tr?? t?? m??u update n???m trong khung nh??n th?? t?? m??u l???i ng?????c l???i th?? kh??ng t?? m??u l???i
      console.log('key_enter:   ', vi_tri_o_truoc[0], vi_tri_o_truoc[1], vi_tri_o_truoc[0] - vi_tri_cat + vi_tri_cat_truoc_do, vi_tri_o_truoc[1] - vi_tri_cat_col + vi_tri_cat_truoc_do_col);
      // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
      dia_chi_o_click(vi_tri_o_truoc[0] + i_array_2d, vi_tri_o_truoc[1] + j_array_2d, vi_tri_o_truoc[0] - (vi_tri_cat - vi_tri_cat_truoc_do), vi_tri_o_truoc[1] - (vi_tri_cat_col - vi_tri_cat_truoc_do_col));
      key_enter(vi_tri_o_truoc[0], vi_tri_o_truoc[1], vi_tri_o_truoc[0] - (vi_tri_cat - vi_tri_cat_truoc_do), vi_tri_o_truoc[1] - (vi_tri_cat_col - vi_tri_cat_truoc_do_col));
      console.log(vi_tri_click_in_Data);
      console.log(vi_tri_o_truoc);
    }
    console.log("---------/////////////////////////////////////////////////////////////--------------------------");
    console.log(vi_tri_o_truoc);

    // b?????c 4 
    // v???tr?? ?? vi???t c??ng th???c kh??ng n???m trong khung nh??n th?? focus t???i thanh c??ng th???c
    if (vi_tri_o_truoc[0] <= limit_view - 1 & vi_tri_o_truoc[0] >= 0 && vi_tri_o_truoc[1] <= limit_col_view - 1 & vi_tri_o_truoc[1] >= 0) {} else {
      console.log("---------/////////////////////////////////////////////////////////////--------------------------");
      thanh_dia_chi_0.current.focus({
        preventScroll: true
      });
    }

    // b?????c 3 : v??? l???i mu???n select

    if (position_mouse_brower === 'ouside_brower') {
      console.log('position_mouse_brower = ouside_brower');
      let x = vi_tri_o_truoc[0];
      let y = vi_tri_o_truoc[1];
      let i = mien_select[2];
      let j = mien_select[3];
      console.log(x, y, i, j);
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      if (x > limit_view - 1) {
        x = limit_view - 1;
      }
      if (y > limit_col_view) {
        y = limit_col_view;
      }
      if (i > limit_view - 1) {
        i = limit_view - 1;
      }
      if (j > limit_col_view) {
        j = limit_col_view;
      }
      _onMouseEnter_not_event(x, y, i, j);
    }
    if (position_mouse_brower === undefined) {
      console.log('position_mouse_brower === undefined');
      console.log(mien_select_array_2d);
      mien_select[2] = vi_tri_o_truoc[0] + mien_select_array_2d[2] - mien_select_array_2d[0];
      mien_select[3] = vi_tri_o_truoc[1] + mien_select_array_2d[3] - mien_select_array_2d[1];
      let x = vi_tri_o_truoc[0];
      let y = vi_tri_o_truoc[1];
      let i = mien_select[2];
      let j = mien_select[3];
      console.log(x, y, i, j);
      if (i < 0 && x < 0) {
        return Object.assign(canvas_.current.style, {
          display: "none"
        });
      }
      if (j < 0 && y < 0) {
        return Object.assign(canvas_.current.style, {
          display: "none"
        });
      }
      if (x > limit_view - 1 && i > limit_view - 1) {
        return Object.assign(canvas_.current.style, {
          display: "none"
        });
      }
      if (y > limit_col_view && j > limit_col_view) {
        return Object.assign(canvas_.current.style, {
          display: "none"
        });
      }
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      if (x > 0 && i < 0) {
        i = 0;
      }
      if (y > 0 && j < 0) {
        j = 0;
      }
      if (i > limit_view - 1) {
        i = limit_view - 1;
      }
      if (j > limit_col_view) {
        j = limit_col_view;
      }
      _onMouseEnter_not_event(x, y, i, j, false);
    }
    if (position_mouse_brower === 'on_thanh_dia_chi_onMouseDown') {
      console.log('position_mouse_brower === on_thanh_dia_chi_onMouseDown');
      console.log(mien_select_array_2d);
      mien_select[2] = vi_tri_o_truoc[0] + mien_select_array_2d[2] - mien_select_array_2d[0];
      mien_select[3] = vi_tri_o_truoc[1] + mien_select_array_2d[3] - mien_select_array_2d[1];
      let x = vi_tri_o_truoc[0];
      let y = vi_tri_o_truoc[1];
      let i = mien_select[2];
      let j = mien_select[3];
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      if (i > limit_view - 1) {
        i = limit_view - 1;
      }
      if (j > limit_col_view) {
        j = limit_col_view;
      }
      if (i < 0) {
        i = 0;
      }
      if (j < 0) {
        j = 0;
      }
      console.log(x, y, i, j);
      _onMouseEnter_not_event(x, y, i, j, false);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////

  function thanh_dia_chi_onkeydown(event) {
    console.log("thanh_dia_chi_onkeydown");
    let i_array_2d = parseInt(a.current.children[0 + 1].children[0].innerHTML);
    let j_array_2d = parseInt(a.current.children[0].children[0 + 1].innerHTML);
    onclick_tinh_toan = true;
    thanh_dia_chi_0_on_keydown = true;
    if (event.keyCode != 13) {
      console.log(vi_tri_click_in_Data);
      setTimeout(() => {
        text_formular[vi_tri_click_in_Data[0]][vi_tri_click_in_Data[1]] = thanh_dia_chi_0.current.value;
        console.log(text_formular[vi_tri_click_in_Data[0]][vi_tri_click_in_Data[1]]);
        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = thanh_dia_chi_0.current.value.length;
        console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
        // n???u v??? tr?? click khi c?? c??ng th???c th??m v??o array_2d[][] kh??ng n???m trong khung nh??n th?? kh??ng l??m g?? ng?????c l???i vi???t v??o khung nh??n

        if (i_array_2d <= vi_tri_click_in_Data[0] - limit_view || i_array_2d >= vi_tri_click_in_Data[0] || j_array_2d <= vi_tri_click_in_Data[1] - limit_col_view || j_array_2d >= vi_tri_click_in_Data[1]) {} else {
          // thay ?????i ????? r???ng c???a input ph?? h???p v???i k?? t??? nh???p v??o tr?????c khi ???n ph??m

          var parent_input = a.current.children[vi_tri_click_in_Data[2] + 1].children[vi_tri_click_in_Data[3] + 1];
          var input_ = parent_input.children[0];
          var length_ = (thanh_dia_chi_0.current.value.length + 1) * 8;
          if (input_ !== undefined) {
            if (length_ >= 100) {
              input_.style.width = length_ + 'px';
            }
            ;
            input_.textContent = thanh_dia_chi_0.current.value;
          }
          if (input_ === undefined) {
            // khi ???n ph??m kh??c enter th?? vi???t c??ng th???c ho???c d??? li???u v??o ?? ???? (thi???t l???p ?? ???? ??? tr???ng th??i t??nh to??n)
            parent_input.style.zIndex = 100;
            parent_input.innerHTML = '<div  contenteditable="true"></div>';
            let input_ = parent_input.children[0];
            // bi???n n??y d??ng ????? x??c ?????nh ???nh h?????ng t???i scoll
            xuat_hien_the_input = true;

            // tr?????c g??n s??? ki???n keydown cho input th?? ta ph???i t???t l???ng nghe s??? ki???n onkedown cho 1 element table cha c???a input 

            onKeyDown_1_element = true;
            input_.textContent = thanh_dia_chi_0.current.value;
            run_function_when_input_focus(input_, vi_tri_click_in_Data[2], vi_tri_click_in_Data[3], i_array_2d, j_array_2d);
            setTimeout(() => {
              thanh_dia_chi_0.current.focus({
                preventScroll: true
              });
            }, 0);
          }
        }
      }, 0);
    }
    if (event.keyCode === 13) {
      mien_select_array_2d[0] = vi_tri_click_in_Data[0];
      mien_select_array_2d[1] = vi_tri_click_in_Data[1];

      // khi enter n???u v???tr?? ?? vi???t c??ng th???c kh??ng n???m trong khung nh??n th?? di chuy???n ?????n ???? sau ???? t??nh to??n      

      if (i_array_2d <= vi_tri_click_in_Data[0] - limit_view || i_array_2d >= vi_tri_click_in_Data[0] || j_array_2d <= vi_tri_click_in_Data[1] - limit_col_view || j_array_2d >= vi_tri_click_in_Data[1]) {
        console.log('v???tr?? ?? vi???t c??ng th???c kh??ng n???m trong khung nh??n th?? di chuy???n ?????n ???? sau ???? t??nh to??n');
        if ((i_array_2d <= vi_tri_click_in_Data[0] - limit_view || i_array_2d >= vi_tri_click_in_Data[0]) && (j_array_2d <= vi_tri_click_in_Data[1] - limit_col_view || j_array_2d >= vi_tri_click_in_Data[1])) {
          table_excel.current.scroll(vi_tri_click_in_Data[1] * click_scroll_dichuyen, vi_tri_click_in_Data[0] * click_scroll_dichuyen);
        } else {
          if (i_array_2d <= vi_tri_click_in_Data[0] - limit_view || i_array_2d >= vi_tri_click_in_Data[0]) {
            table_excel.current.scroll(j_array_2d * click_scroll_dichuyen, vi_tri_click_in_Data[0] * click_scroll_dichuyen);
          }
          if (j_array_2d <= vi_tri_click_in_Data[1] - limit_col_view || j_array_2d >= vi_tri_click_in_Data[1]) {
            table_excel.current.scroll(vi_tri_click_in_Data[1] * click_scroll_dichuyen, i_array_2d * click_scroll_dichuyen);
          }
        }
        thanh_dia_chi_0_on_keydown = false;

        // n???u ?? tr?????c ???? ??ang vi???t c??ng th???c th?? onclick_tinh_toan ???? ???????c chuy???n th??nh true
        //n??n khi enter th?? s??? ph???i t??nh to??n l???i ng?????c l???i kh??ng ph???i t??nh to??n l???i
        if (onclick_tinh_toan) {
          tinh_toan(vi_tri_click_in_Data[0] - i_array_2d, vi_tri_click_in_Data[1] - j_array_2d, "xoa_ky_tu_cong_thuc_thua");
        }

        // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
        dia_chi_o_click(vi_tri_click_in_Data[0] + 1, vi_tri_click_in_Data[1], vi_tri_click_in_Data[2] + 1, vi_tri_click_in_Data[3]);
        xuat_hien_the_input = false;
        onKeyDown = false;
        onKeyDown_1_element = false;
        onclick_tinh_toan = false;
      } else {
        thanh_dia_chi_0_on_keydown = false;
        console.log('v???tr?? ?? vi???t c??ng th???c n???m trong khung nh??n th?? kh??ng c???n di chuy???n ?????n ????, sau ???? t??nh to??n');
        tinh_toan(vi_tri_click_in_Data[0] - i_array_2d, vi_tri_click_in_Data[1] - j_array_2d, "xoa_ky_tu_cong_thuc_thua");
        key_enter(vi_tri_click_in_Data[2], vi_tri_click_in_Data[3], vi_tri_click_in_Data[2] + 1, vi_tri_click_in_Data[3]); // t?? m??u v?? focus

        _onMouseEnter_not_event(vi_tri_click_in_Data[2] + 1, vi_tri_click_in_Data[3], vi_tri_click_in_Data[2] + 1, vi_tri_click_in_Data[3]);

        // set ?????a ch??? ?? click  sau h??nh ?????ng tr??n
        dia_chi_o_click(vi_tri_click_in_Data[0] + 1, vi_tri_click_in_Data[1], vi_tri_click_in_Data[2] + 1, vi_tri_click_in_Data[3]);
        xuat_hien_the_input = false;
        onKeyDown = false;
        onKeyDown_1_element = false;
        onclick_tinh_toan = false;
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  function thanh_dia_chi_onMouseDown(event) {
    position_mouse_brower = 'on_thanh_dia_chi_onMouseDown';
    console.log("thanh_dia_chi_onMouseDown");
    console.log(vi_tri_click_in_Data);

    // khi ???n chu???t tr??i v??o thanh ?????a ch??? n???u v??? tr?? t?? m??u kh??ng n???m trong khung nh??n th?? cu???n ????? v??? tr?? t?? m??u n???m trong khung nh??n
    // n???u xu???t hi???n th??? input ????? vi???t c??ng th???c th?? kh??ng cu???n
    if ((vi_tri_click_in_Data[2] > limit_view - 1 || vi_tri_click_in_Data[2] < 0 || vi_tri_click_in_Data[3] > limit_col_view - 1 || vi_tri_click_in_Data[3] < 0) && xuat_hien_the_input === false) {
      console.log(vi_tri_khung_nhin_truoc_scroll[1]);
      console.log(vi_tri_khung_nhin_truoc_scroll[0]);
      table_excel.current.scrollTo(vi_tri_khung_nhin_truoc_scroll[1] * click_scroll_dichuyen, vi_tri_khung_nhin_truoc_scroll[0] * click_scroll_dichuyen);
      setTimeout(() => {
        thanh_dia_chi_0.current.focus({
          preventScroll: true
        });
      }, 0);
      console.log('scroll t???i v??? tr?? c???n khi thanh ?????a ch??? ???????c click');
    }

    // event.persist();    d??ng ????? bi???n  s??? ki???n tr??n react  th??nh s??? ki???n g???c tr??n dom  vd: onMouseEnter  th??nh  onmouseenter
    // react thi???t l???p event.buttons b???ng null : kh??ng ??i???u khi???n n??t chu???t ????? t??ng hi???u su???t. ????? thi???t l???p event.buttons nh?? javascript g???c c???n ch???y h??m event.persist();

    event.persist();
    setTimeout(() => {
      let selection = window.getSelection();
      let vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = selection.anchorOffset;
      console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
    }, 0);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  var mouse_Y;
  var mouse_X;
  var myInterval;
  var myInterval_0;
  var position_mouse_brower;
  var i_truyen;
  var j_truyen;
  function _onMouseMove(event) {
    // event.persist();    d??ng ????? bi???n  s??? ki???n tr??n react  th??nh s??? ki???n g???c tr??n dom  vd: onMouseEnter  th??nh  onmouseenter
    // react thi???t l???p event.buttons b???ng null : kh??ng ??i???u khi???n n??t chu???t ????? t??ng hi???u su???t. ????? thi???t l???p event.buttons nh?? javascript g???c c???n ch???y h??m event.persist();

    event.persist();
    document.onmouseup = function () {
      clearTimeout(myInterval_0);
      clearTimeout(myInterval);
      position_mouse_brower = undefined;
      trang_thai_fill = false;
      if (kieu_fill === 1) {
        console.log('------------------------fill kieu 1');
        fill();
      }
      if (kieu_fill === 21) {
        console.log('------------------------fill kieu 21');
        fill_21();
      }
      if (kieu_fill === 22) {
        console.log('------------------------fill kieu 22');
        fill_22();
      }
    };
    document.onmousemove = function (event_window) {
      // console.log('document++++++++++onmousemove');

      var table_excel_scrollTop = table_excel.current.scrollTop;
      var table_excel_scrollLeft = table_excel.current.scrollLeft;
      clearTimeout(myInterval_0);
      clearTimeout(myInterval);
      position_mouse_brower = undefined;
      mouse_Y = event_window.clientY;
      mouse_X = event_window.clientX;

      // v??? bi???u t?????ng fill

      var x_r0c0 = a.current.children[mien_select_quy_ve[0] + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().x;
      var x_r0c1 = a.current.children[mien_select_quy_ve[2] + 1].children[mien_select_quy_ve[3] + 1 + 1].getBoundingClientRect().x;
      var y_r0c0 = a.current.children[mien_select_quy_ve[0] + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().y;
      var y_r1c0 = a.current.children[mien_select_quy_ve[2] + 1 + 1].children[mien_select_quy_ve[1] + 1].getBoundingClientRect().y;
      let ty_le_canvas_width = table_excel_width / (x_r0c1 - x_r0c0 - 4);
      let ty_le_canvas_height = table_excel_height / (y_r1c0 - y_r0c0 - 4);

      // n???u tr???ng th??i fill = true t???c l?? ???? v??? r???i kh??ng c???n v??? l???i n???a
      if (trang_thai_fill === true && event_window.buttons === 1) {} else {
        // v??? khi v??? tr?? mouse n???m ??? g??c cu???i mi???n l???a ch???n
        if (mouse_X > x_r0c1 - 14 && mouse_X <= x_r0c1 && mouse_Y > y_r1c0 - 14 && mouse_Y <= y_r1c0 && event_window.buttons !== 1 && (mien_select_array_2d[1] === mien_select_array_2d[3] || mien_select_array_2d[0] === mien_select_array_2d[2])) {
          console.log('ve-------------------move');
          var ctx = canvas_.current.getContext("2d");
          // xo?? bi???u t?????ng fill ???? xu???t hi???n khi move mouse
          console.log('xo?? bi???u t?????ng fill');
          ctx.clearRect(0, 0, canvas_.current.width, canvas_.current.height);

          // v??? l???i bi???u t?????ng fill
          console.log('v??? l???i bi???u t?????ng fill');
          ctx.beginPath();
          ctx.fillRect(ty_le_canvas_width * (x_r0c1 - x_r0c0 - 4) - 10 * ty_le_canvas_width, ty_le_canvas_height * (y_r1c0 - y_r0c0 - 4) - 10 * ty_le_canvas_height, 10 * ty_le_canvas_width, 10 * ty_le_canvas_height);
          ctx.globalAlpha = 0.3;
          ctx.closePath();
          trang_thai_fill = true;
          if (mien_select_array_2d[0] === mien_select_array_2d[2] && mien_select_array_2d[1] === mien_select_array_2d[3]) {
            kieu_fill = 1;
            console.log('ve-------------------move-- kieu_fill = 1');
          } else {
            if (mien_select_array_2d[1] === mien_select_array_2d[3]) {
              kieu_fill = 21;
              console.log('ve-------------------move-- kieu_fill = 21');
            } else {
              kieu_fill = 22;
              console.log('ve-------------------move-- kieu_fill = 22');
            }
          }
        } else {
          kieu_fill = undefined;
          trang_thai_fill = false;
          canvas_.current.getContext("2d").clearRect(0, 0, canvas_.current.width, canvas_.current.height);
        }
      }

      // cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a d?????i b??n ph???i -----------------------------------------------------------------
      if (event_window.buttons == 1 && mouse_Y > table_excel.current.getBoundingClientRect().y + table_excel.current.clientHeight && mouse_X > table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth) {
        console.log('cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a d?????i b??n ph???i');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTo(table_excel_scrollLeft + click_scroll_dichuyen, table_excel_scrollTop + click_scroll_dichuyen);
          table_excel_scrollTop += click_scroll_dichuyen;
          table_excel_scrollLeft += click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
      }
      // cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a d?????i b??n tr??i -----------------------------------------------------------------
      else if (event_window.buttons == 1 && mouse_Y > table_excel.current.getBoundingClientRect().y + table_excel.current.clientHeight && mouse_X < table_excel.current.getBoundingClientRect().x + width_bar_reference_col) {
        console.log('cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a d?????i b??n tr??i ');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTo(table_excel_scrollLeft - click_scroll_dichuyen, table_excel_scrollTop + click_scroll_dichuyen);
          table_excel_scrollTop += click_scroll_dichuyen;
          table_excel_scrollLeft -= click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
      }
      // cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i g??c tr??n b??n tr??i----------------------------------------------------------------------------------
      else if (event_window.buttons == 1 && mouse_Y < table_excel.current.getBoundingClientRect().y + 21 && mouse_X < table_excel.current.getBoundingClientRect().x + width_bar_reference_col) {
        console.log('cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i g??c tr??n b??n tr??i');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTo(table_excel_scrollLeft - click_scroll_dichuyen, table_excel_scrollTop - click_scroll_dichuyen);
          table_excel_scrollTop -= click_scroll_dichuyen;
          table_excel_scrollLeft -= click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
      }
      // cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a tr??n b??n ph???i -----------------------------------------------------------------
      else if (event_window.buttons == 1 && mouse_Y < table_excel.current.getBoundingClientRect().y + 21 && mouse_X > table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth) {
        console.log('cu???n c??? 2 thanh khi b??n ngo??i brower v??? tr?? mouse ngo??i ph??a tr??n b??n ph???i');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTo(table_excel_scrollLeft + click_scroll_dichuyen, table_excel_scrollTop - click_scroll_dichuyen);
          table_excel_scrollTop -= click_scroll_dichuyen;
          table_excel_scrollLeft += click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
      }
      // cu???n thanh d???c khi v??? tr?? mouse n???m d?????i brower
      else if (event_window.buttons == 1 && mouse_Y > table_excel.current.getBoundingClientRect().y + table_excel.current.clientHeight) {
        console.log('cu???n thanh d???c khi v??? tr?? mouse n???m d?????i brower');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTop = table_excel_scrollTop + click_scroll_dichuyen;
          table_excel_scrollTop += click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);
        // setTimeout ??? ????y ????? v??? l???i ch???y sau c??c h??m khi scroll
        setTimeout(() => {
          var index = 1;
          while (a.current.children[limit_view].children[index + 1].getBoundingClientRect().x <= mouse_X && index <= limit_col_view) {
            index++;
          }
          var elem_i = limit_view - 1;
          var elem_j = index - 1;
          // ch??? v??? l???i khi v??? tr?? chu???t t???i ?? kh??c t????ng ???ng

          if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) {
            console.log('v??? l???i----------');
            console.log(vi_tri_o_truoc[0], vi_tri_o_truoc[1], elem_i, elem_j);
            i_truyen = elem_i;
            j_truyen = elem_j;
            let x = vi_tri_o_truoc[0];
            let y = vi_tri_o_truoc[1];
            if (x < 0) {
              x = 0;
            }
            if (y < 0) {
              y = 0;
            }
            if (x > limit_view - 1) {
              x = limit_view - 1;
            }
            if (y > limit_col_view) {
              y = limit_col_view;
            }
            _onMouseEnter(event, x, y, elem_i, elem_j);
          }
        }, 0);
      }
      // cu???n thanh ngang khi v??? tr?? mouse n???m ngo??i b??n ph???i brower
      else if (event_window.buttons == 1 && mouse_X > table_excel.current.getBoundingClientRect().x + table_excel.current.clientWidth) {
        console.log('cu???n thanh ngang khi v??? tr?? mouse n???m ngo??i b??n ph???i brower');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollLeft = table_excel_scrollLeft + click_scroll_dichuyen;
          table_excel_scrollLeft += click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);

        // setTimeout ??? ????y ????? v??? l???i ch???y sau c??c h??m khi scroll
        setTimeout(() => {
          var index = 1;
          while (a.current.children[index].children[0].getBoundingClientRect().y <= mouse_Y && index <= limit_view) {
            index++;
          }
          var elem_i = index - 1;
          var elem_j = limit_col_view;

          // ch??? v??? l???i khi v??? tr?? chu???t t???i ?? kh??c t????ng ???ng

          if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) {
            i_truyen = elem_i;
            j_truyen = elem_j;
            let x = vi_tri_o_truoc[0];
            let y = vi_tri_o_truoc[1];
            if (x < 0) {
              x = 0;
            }
            if (y < 0) {
              y = 0;
            }
            if (x > limit_view - 1) {
              x = limit_view - 1;
            }
            if (y > limit_col_view) {
              y = limit_col_view;
            }
            _onMouseEnter(event, x, y, elem_i, elem_j);
          }
        }, 0);
      }

      // cu???n thanh doc khi v??? tr?? mouse n???m ngo??i b??n tr??n brower
      else if (event_window.buttons == 1 && mouse_Y < table_excel.current.getBoundingClientRect().y + 21) {
        console.log('cu???n thanh doc khi v??? tr?? mouse n???m ngo??i b??n tr??n brower');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollTop = table_excel_scrollTop - click_scroll_dichuyen;
          table_excel_scrollTop -= click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);

        // setTimeout ??? ????y ????? v??? l???i ch???y sau c??c h??m khi scroll
        setTimeout(() => {
          var index = 1;
          while (a.current.children[limit_view].children[index + 1].getBoundingClientRect().x <= mouse_X) {
            index++;
          }
          var elem_i = 0;
          var elem_j = index - 1;
          // ch??? v??? l???i khi v??? tr?? chu???t t???i ?? kh??c t????ng ???ng

          if (event_window.buttons == 1 && i_truyen != elem_i || j_truyen != elem_j) {
            i_truyen = elem_i;
            j_truyen = elem_j;
            let x = vi_tri_o_truoc[0];
            let y = vi_tri_o_truoc[1];
            if (x < 0) {
              x = 0;
            }
            if (y < 0) {
              y = 0;
            }
            if (x > limit_view - 1) {
              x = limit_view - 1;
            }
            if (y > limit_col_view) {
              y = limit_col_view;
            }
            _onMouseEnter(event, x, y, elem_i, elem_j);
          }
        }, 0);
      }
      // cu???n thanh ngang khi v??? tr?? mouse n???m ngo??i b??n tr??i brower
      else if (event_window.buttons == 1 && mouse_X < table_excel.current.getBoundingClientRect().x + width_bar_reference_col) {
        console.log('cu???n thanh ngang khi v??? tr?? mouse n???m ngo??i b??n tr??i brower');
        position_mouse_brower = 'ouside_brower';
        myInterval_0 = setTimeout(function doSomething() {
          table_excel.current.scrollLeft = table_excel_scrollLeft - click_scroll_dichuyen;
          table_excel_scrollLeft -= click_scroll_dichuyen;
          myInterval = setTimeout(doSomething, 10);
        }, 10);

        // setTimeout ??? ????y ????? v??? l???i ch???y sau c??c h??m khi scroll
        setTimeout(() => {
          var index = 1;
          while (a.current.children[index].children[0].getBoundingClientRect().y <= mouse_Y) {
            index++;
          }
          var elem_i = index - 1;

          // ch??? v??? l???i khi v??? tr?? chu???t t???i ?? kh??c t????ng ???ng

          if (event_window.buttons == 1 && i_truyen != elem_i) {
            i_truyen = elem_i;
            let x = vi_tri_o_truoc[0];
            let y = vi_tri_o_truoc[1];
            if (x < 0) {
              x = 0;
            }
            if (y < 0) {
              y = 0;
            }
            if (x > limit_view - 1) {
              x = limit_view - 1;
            }
            if (y > limit_col_view) {
              y = limit_col_view;
            }
            _onMouseEnter(event, x, y, elem_i, 0);
          }
        }, 0);
      }
    };
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // ph???i th??m s??? ki???n _onMouseOut  ??? ????y v?? s??? ki???n _onMouseMove khi di chuy???n chu???t v??i t???c ????? nhanh qu?? s??? kh??ng b???t k???p do v???y th??m _onMouseOut ????? b???t 1 l???n n???a.
  function _onMouseOut(event) {
    _onMouseMove(event);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  function get_excel_get_file(event) {
    if (path_name_test(path_name, "/excel/file") === false && path_name_test(path_name, "/excel") === false) {
      return axios.get(path_name).then(function (response) {
        console.log(response.data);
      });
    }
    function get_excel_get_file_get_file_name(event, file_name) {
      axios.get(`/excel/file/${file_name}`).then(function (response) {
        let url_change = `/excel/file/${file_name}?` + "&home=true";
        window.history.replaceState(null, null, url_change);

        // l???nh n??y ????? g??? b??? Dom ???o react g???n v??o root
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        // update root Dom react l???i t??? ?????u
        ReactDOM.render( /*#__PURE__*/React.createElement(Table_hieu_2, {
          value: response.data,
          file_name: file_name
        }), document.getElementById('root'));
      });
    }
    axios.get('/excel/file').then(function (response) {
      ref_file.current.style.display = 'block';
      ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, " Open "), /*#__PURE__*/React.createElement("hr", null), response.data.map(i => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "far fa-file-excel",
          style: {
            fontSize: '16px',
            color: '#00A170 '
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: 'black',
          onClick: event => {
            get_excel_get_file_get_file_name(event, i);
          }
        }, " ", i, " "));
      })), ref_file.current);
      let url_change = "/excel/file?" + "&home=true";
      console.log(url_change);
      console.log(window.history);
      window.history.replaceState(null, null, url_change);
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////

  function get_excel_get_save(event) {
    let Data_save = [];
    for (let i = 0; i < Data.length; i++) {
      for (let j = 0; j < Data[0].length; j++) {
        if (Data[i][j] !== null) {
          Data_save.push([i, j, Data[i][j], text_formular[i][j], index_formular[i][j]]);
        }
      }
    }
    let file_name;
    file_name = ref_file_name.current.textContent;
    // vd: formular[0] l?? (function(){return Data[0][1] = (Data[0][0])+63;})
    // khi get ho???c post l??n sever s??? b??? chuy???n th??nh string     'function(){return Data[0][1] = (Data[0][0])+63;}'
    // ph???i c?? ( ) tr?????c, sau function v?? ????? sau n??y ch???y function ta d??ng ()() m???i ch???y ???????c
    let query = {
      Data_save: Data_save,
      formular: [],
      file_name: file_name
    };
    for (let index = 0; index < formular.length; index++) {
      query.formular[index] = "(" + formular[index] + ")";
    }
    console.log(query);
    axios.post(`/excel/save`, {
      a: query
    }).then(function (response) {
      console.log(response.data);
      let url_change = response.request.responseURL + "&home=true";
      window.history.replaceState(null, null, url_change);
      alert("0k");
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function open_file_computer() {
    id_0.style.cursor = 'pointer';
    [fileHandle] = await window.showOpenFilePicker();

    //  let fileData = await fileHandle.getFile();
    //  let text = await fileData.text();

    //  var myobj = JSON.parse(text);
    //      // l???nh n??y ????? g??? b??? Dom ???o react g???n v??o root
    //      ReactDOM.unmountComponentAtNode(document.getElementById('root'));

    //      // update root Dom react l???i t??? ?????u
    //  var myobj = JSON.parse(text);
    //     ReactDOM.render( <Table_hieu_2   value = { myobj  } file_name = { myobj.file_name }    />  , document.getElementById('root'))  ;

    //  setTimeout(() => {
    //   thanh_dia_chi_0.current.style.width = "1000px";
    //   thanh_dia_chi_0.current.style.height = "1000px";
    //  }, 0);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function save_as_file_computer() {
    const opts = {
      types: [{
        description: 'json file',
        accept: {
          'text/plain': ['.json']
        }
      }]
    };
    fileHandle = await window.showSaveFilePicker(opts);

    // create a FileSystemWritableFileStream to write to
    const writableStream = await fileHandle.createWritable();
    let Data_save = [];
    for (let i = 0; i < Data.length; i++) {
      for (let j = 0; j < Data[0].length; j++) {
        if (Data[i][j] !== null) {
          Data_save.push([i, j, Data[i][j], text_formular[i][j], index_formular[i][j]]);
        }
      }
    }
    let file_name;
    file_name = ref_file_name.current.textContent;
    // vd: formular[0] l?? (function(){return Data[0][1] = (Data[0][0])+63;})
    // khi get ho???c post l??n sever s??? b??? chuy???n th??nh string     'function(){return Data[0][1] = (Data[0][0])+63;}'
    let query = {
      Data_save: Data_save,
      formular: [],
      file_name: file_name
    };
    for (let index = 0; index < formular.length; index++) {
      query.formular[index] = "(" + formular[index] + ")";
    }
    let text_save;
    text_save = JSON.stringify(query);

    // write our file
    await writableStream.write(text_save);

    // close the file and write the contents to disk.
    await writableStream.close();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function save_file_computer() {
    let stream = await fileHandle.createWritable();
    let Data_save = [];
    for (let i = 0; i < Data.length; i++) {
      for (let j = 0; j < Data[0].length; j++) {
        if (Data[i][j] !== null) {
          Data_save.push([i, j, Data[i][j], text_formular[i][j], index_formular[i][j]]);
        }
      }
    }
    let file_name;
    file_name = ref_file_name.current.textContent;
    // vd: formular[0] l?? (function(){return Data[0][1] = (Data[0][0])+63;})
    // khi get ho???c post l??n sever s??? b??? chuy???n th??nh string     'function(){return Data[0][1] = (Data[0][0])+63;}'
    let query = {
      Data_save: Data_save,
      formular: [],
      file_name: file_name
    };
    for (let index = 0; index < formular.length; index++) {
      query.formular[index] = "(" + formular[index] + ")";
    }
    let text_save;
    text_save = JSON.stringify(query);
    await stream.write(text_save);
    await stream.close();
    console.log('save');
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function css() {
    return {
      //verticalAlign: "top" c??n theo c???nh top kh???i c???a element cha, n???u trong cha c?? nhi???u anh em th?? c??n ti???p theo top kh???i c???a anh em tr?????c n??
      textarea: {
        verticalAlign: "top",
        marginLeft: "5px",
        marginRight: "5px",
        border: "1px solid #ccc",
        flexGrow: 1,
        width: `50px`,
        height: "50px",
        resize: "none"
      },
      thanh_dia_chi: {
        marginLeft: "5px",
        marginTop: "10px",
        verticalAlign: "top",
        backgroundColor: "white",
        height: `30px`,
        padding: "5px",
        width: `50px`,
        flexGrow: 0,
        border: "1px solid #ccc"
      },
      //overflow: "auto" : Khi chi???u cao c???a box kh??ng ????? ch???a text, th?? thanh scroll s??? t??? ?????ng hi???n th??? ; Khi s??? d???ng th??nh ph???n n??y s??? xu???t hi???n thanh scroll d???c

      table_excel: {
        height: `${table_excel_height}px`,
        width: `${table_excel_width}px`,
        overflowY: "auto",
        overflowX: "auto"
      },
      bar_reference_row: {
        backgroundColor: "#d8dcd6",
        borderBottomStyle: "none",
        textAlign: "center",
        border: "1px ridge #ccc",
        minWidth: "85px",
        height: "20px",
        display: "table-cell",
        borderRightStyle: 'none',
        borderTopStyle: 'none'
      },
      bar_reference_col: {
        position: 'relative',
        zIndex: 100,
        width: "auto",
        textAlign: "center",
        paddingLeft: "4px",
        paddingRight: "4px",
        backgroundColor: "#d8dcd6",
        borderBottomStyle: "none",
        textAlign: "center",
        border: "1px ridge #ccc",
        height: "20px",
        display: "table-cell",
        borderRightStyle: 'none',
        borderTopStyle: 'none'
      },
      row_excel: {
        display: "table-row"
      },
      col_excel: {
        position: 'relative',
        backgroundColor: "white",
        border: "1px ridge #ccc",
        width: "85px",
        height: "20px",
        display: "table-cell",
        paddingLeft: "4px",
        paddingRight: "4px",
        borderRightStyle: 'none',
        borderTopStyle: 'none'
      },
      click: {
        backgroundColor: "moccasin",
        outline: 'none'
      },
      remove_click: {
        backgroundColor: "white"
      },
      input_focus: {
        height: "inherit",
        paddingLeft: "4px",
        display: 'inline-block',
        position: 'absolute',
        zIndex: 100,
        outlineWidth: "0px",
        border: "0px",
        backgroundColor: "moccasin"
      },
      select: {
        backgroundColor: "moccasin"
      },
      remove_select: {
        backgroundColor: ""
      },
      canvas_: {
        position: "absolute",
        display: "inline-block",
        border: "2px solid #00A170",
        borderRight: '2px solid #00A170'
      },
      button: {
        border: "1px solid #00A170",
        padding: '2px',
        margin: '2px'
      },
      file: {
        display: 'none',
        zIndex: 200,
        backgroundColor: '#FFFFF7',
        position: "absolute",
        width: '500px',
        height: '500px',
        border: "2px solid #00A170"
      }
    };
  }
  var css = css();

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // b???t s??? ki???n onMouseMove  v?? onMouseOut ??? ????y ch??? kh??ng ????? ??? table_excel v?? c?? ??u ??i???m
  // s??? ki???n cha l???ng nghe onMouseMove  kh??ng b??? th??? con canvas che m???t n??n to??? ????? nh???n ???????c ch??nh x??c v?? nh???y (nhanh) h??n ????? ??? table_excel
  // ????? ??? table_excel b??? canvas che m???t n??n ra kh???i canvas m???i nh???n to??? ????? v?? k??ch ho???t l???ng nghe s??? ki???n n??n ch???m. Khi ng?????i d??ng d??ng chu???t v???i t???c ????? c???c k??? nhanh n?? s??? kh???ng l???ng nghe k???p
  // ta th??m s??? ki???n onMouseOut ????? b???t ti???p 1 l???n n???a => di chuy???n chu???t si??u nhanh v???n l???ng nghe k???p
  return /*#__PURE__*/React.createElement("div", {
    onMouseMove: event => {
      _onMouseMove(event);
    },
    onMouseOut: event => {
      _onMouseOut(event);
    },
    ref: ref_0,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexBasis: '100%',
      display: "flex"
    }
  }, "   ", /*#__PURE__*/React.createElement("div", {
    className: "far fa-file-excel",
    style: {
      fontSize: '16px',
      color: '#00A170 ',
      padding: '2px',
      margin: '2px 2px 2px 0px'
    }
  }), "    ", /*#__PURE__*/React.createElement("div", {
    ref: ref_file_name,
    contentEditable: "true",
    style: {
      padding: '2px',
      margin: '2px 2px 2px 0px',
      minWidth: '200px'
    },
    className: 'black'
  }, " New file ", new Date().getFullYear() + "_" + (new Date().getMonth() + 1) + "_" + new Date().getDate(), " "), "  "), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, css.button, {
      margin: '2px 2px 2px 0px'
    }),
    className: 'black',
    onClick: event => {
      copy(event);
    }
  }, " copy "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      paste(event);
    }
  }, " paste "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      fill(event);
    }
  }, " fill "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {}
  }, " clear "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      get_excel_get_file(event);
    }
  }, " file "), /*#__PURE__*/React.createElement("div", {
    style: css.file,
    ref: ref_file
  }, " "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      get_excel_get_save(event);
    }
  }, " save "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      open_file_computer(event);
    }
  }, " file_computer "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      save_as_file_computer(event);
    }
  }, " save_as_computer "), /*#__PURE__*/React.createElement("div", {
    style: css.button,
    className: 'black',
    onClick: event => {
      save_file_computer(event);
    }
  }, " save_computer ")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: "5px",
      paddingTop: "5px",
      paddingBottom: " 5px",
      backgroundColor: "#bdcebe",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: thanh_dia_chi_1,
    style: css.thanh_dia_chi
  }, "ADJK65ggg "), "  ", /*#__PURE__*/React.createElement("textarea", {
    ref: thanh_dia_chi_0,
    style: css.textarea,
    onKeyDown: event => {
      thanh_dia_chi_onkeydown(event);
    },
    onMouseDown: event => {
      thanh_dia_chi_onMouseDown(event);
    }
  })), /*#__PURE__*/React.createElement("canvas", {
    ref: canvas_,
    width: table_excel_width,
    height: table_excel_height,
    style: {
      display: "none",
      zIndex: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: table_excel,
    style: css.table_excel
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${data_lenght}px`,
      width: `${data_col_lenght}px`
    },
    ref: a
  }, /*#__PURE__*/React.createElement("div", {
    style: css.row_excel
  }, " ", /*#__PURE__*/React.createElement("div", {
    style: css.bar_reference_col
  }), " ", Data_show_0[0].map((cell, j) => {
    return /*#__PURE__*/React.createElement("div", {
      style: css.bar_reference_row
    }, j);
  }), "  "), Data_show_0.map((row, i) => {
    return /*#__PURE__*/React.createElement("div", {
      style: css.row_excel
    }, /*#__PURE__*/React.createElement("div", {
      style: css.bar_reference_col
    }, i), " ", row.map((cell, j) => {
      return /*#__PURE__*/React.createElement("div", {
        style: css.col_excel,
        onMouseDown: event => {
          var _this = a.current.children[i + 1].children[j + 1];
          return _onMouseDown(_this, i, j, event);
        },
        onMouseEnter: event => {
          clearTimeout(myInterval_0);
          clearTimeout(myInterval);
          let a_1 = vi_tri_o_truoc[0];
          let b_1 = vi_tri_o_truoc[1];
          if (a_1 < 0) {
            a_1 = 0;
          }
          ;
          if (b_1 < 0) {
            b_1 = 0;
          }
          ;
          if (a_1 > limit_view - 1) {
            a_1 = limit_view - 1;
          }
          ;
          if (b_1 > limit_col_view) {
            b_1 = limit_col_view;
          }
          ;
          _onMouseEnter(event, a_1, b_1, i, j);
        }
        // bi???n onKeyDown m???c ?????nh l?? false
        ,
        onKeyDown: event => {
          if (onKeyDown) {} else {
            _onKeyDown(event, i, j);
          }
        }
      }, " ", cell, "  ");
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: limit_col_view,
        position: "relative",
        display: "inline-block",
        backgroundColor: "white"
      }
    }));
  }))));
}
;
const {
  useState,
  useRef,
  useEffect
} = React;
let path_name = window.location.pathname;
let font_size = 16;
let path_name ; 
// let path_name = window.location.pathname;

      useEffect(() => {
        if (path_name_test(path_name, '/A/From_1')) {
          get_A_get_From_1();
        }
        if (path_name_test( path_name, '/A/From_2')) {
          get_A_get_From_2();
        }
        if (path_name_test(path_name, '/A/From_3')) {
          get_A_get_From_3();
        }
      }, []);

function path_name_test(path_name, string_test) {
  if (path_name === string_test || path_name === string_test + "/") {
    return true;
  } else {
    return false;
  }
}


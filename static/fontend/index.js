
const { useState , useRef, useEffect  } = React ;
let path_name = window.location.pathname ; 
let font_size = 16;
let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
if (isMobile) {font_size = 14 } ;
function tb(string_pc, string_mobi) {
    if (isMobile) {
        return string_mobi ; 
    } else {
        return string_pc ; 
    }
   
    
}
let api_login_google = ' <div id="g_id_onload"  data-client_id="306462046146-abrpr0q4aep5uca528h6ehept83m3ghv.apps.googleusercontent.com" data-callback="handleCredentialResponse" data-auto_prompt="false" > </div> <div class="g_id_signin" data-type="standard" data-size="large" data-theme="outline" data-text="sign_in_with" data-shape="rectangular" data-logo_alignment="left" > </div>'  ;

Router();


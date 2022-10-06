let mySheet = document.getElementById("style").sheet ;
let array_style = mySheet.cssRules ;

// muốn detele
// mySheet.deleteRule(index); index là trong mảng array_style = mySheet.cssRules ;
 //  sheet chỉ truy cập được bằng document.getElementById
mySheet.insertRule('  .black:hover    {      color: hotpink ;         }  ');
mySheet.insertRule('  .black:hover    {       border: 1px solid #5f0de2       }  ');

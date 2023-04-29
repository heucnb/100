



module.exports = async function (req, res, con) {
 
  

    res.header("Access-Control-Allow-Origin", "*");
    var query = "select * from ( SELECT `so tai`,DATE_FORMAT(table1.`ngay phoi`, '%d/%m/%Y'),DATE_FORMAT(table1.`ngay de`, '%d/%m/%Y') as ngay_de_1,table1.`SCCS`as sccs_1,DATE_FORMAT(table2.`ngay de`, '%d/%m/%Y') as ngay_de_2,table2.`SCCS`as sccs_2,IF(table2.`SCCS`IS NULL,100,table1.`SCCS` + table2.`SCCS`) as tong_hai_lan_de FROM (SELECT `ma lan phoi` as ma_lan_phoi, `so tai`,`ngay phoi`,`ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS`  FROM `sheet1` WHERE `SCCS` <= 7 AND `ngay ban loai chet` IS NULL AND `trai` = '101' AND `lan_phoi_them_1` IS NULL AND`ngay de` IS NOT NULL) as table1 LEFT JOIN (SELECT CONCAT(`trai`,'-',`lan phoi`+1,'-',`so tai`) as ma_lan_phoi_sau, `ngay de`,`SCSR`,`chet`,`tat`,`kho`,`coi`,`SCCS` FROM `sheet1` WHERE `SCCS` <= 11 AND `ngay ban loai chet` IS NULL AND `trai` = '101'  AND`ngay de` IS NOT NULL) as table2 ON table1.ma_lan_phoi = table2.ma_lan_phoi_sau ) as x WHERE x.tong_hai_lan_de <=14";
    let myPromise =  new Promise((resolve, reject) => { con.query(query,function (err, result, fields) { if (err) throw err; var data_return =  result.map(function (element) { return Object.values(element); }); resolve( data_return ) ; }); });
  

    var query_2 = "select `so tai` ,`ngay phoi`   from sheet1 limit 50";
    let myPromise_2 =  new Promise((resolve, reject) => { con.query(query_2,function (err, result, fields) { if (err) throw err; var data_return =  result.map(function (element) { return Object.values(element); }); resolve( data_return ) ; }); });
  

  let array = await Promise.all([myPromise, myPromise_2]);

  
  let combinedArray = array[0].concat(array[1]) ;

  return  res.send(combinedArray);


}
/**
 * Created by a on 2017/5/26.
 */
function fun1()
{
    var stringValue="I love my country very much";
    var positions=new Array();
    var pos=stringValue.indexOf("y");
    while(pos>-1){
        positions.push(pos);
        pos=stringValue.indexOf("y",pos+1);
    }
    alert(positions);
}
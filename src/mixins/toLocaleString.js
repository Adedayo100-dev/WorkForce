export function formatNum(val) {
    var a = val.toLocaleString("en-US");
    return a;
}
export function formatNumFloat(val){
    var a = val.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return a;
}
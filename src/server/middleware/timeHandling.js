const substractTime = (a, b) => {
    a = new Date(a);
    b = new Date(b);
    c = a - b;
    d = c / 3600000;
    e = Math.trunc(d);
    f = ( d - e ) * 60;
    result = `${e} hours ${f} mins`;
    return result;
}
module.exports = {
    substractTime
}
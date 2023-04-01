const substractTime = (a, b) => {
    a = new Date(a);
    b = new Date(b);
    c = a - b;
    d = c / 3600000;
    e = Math.trunc(d);
    f = Math.round(( d - e ) * 60);
    result = `${e} hrs ${f} mins`;
    return result;
}
module.exports = {
    substractTime
}
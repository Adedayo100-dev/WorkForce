export const substractTime = (a, b) => {
    a = new Date(a);
    b = new Date(b);
    c = a - b;
    d = c / 3600000;
    e = Math.trunc(d); // hours
    f = Math.round(( d - e ) * 60); // mins
    var result = {
        "hours" : e,
        "minutes" : f
    }
    // if (f == 0) {
    //     result = `${e} hrs`;    
    // } else {
    //     result = `${e} hrs ${f} mins`;
    // }
    return result;
}
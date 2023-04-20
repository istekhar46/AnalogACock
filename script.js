setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotaion = 30 * htime + mtime / 2;
    mrotaion = 6 * mtime;
    srotaion = 6 * stime;

    hour.style.transform = `rotate(${hrotaion}deg)`
    minute.style.transform = `rotate(${mrotaion}deg)`
    second.style.transform = `rotate(${srotaion}deg)`
}, 1000)


setInterval(() => {

    fetch('./quotes.json')
        .then((response) => response.json())
        .then((json) => {

            let qoutearr = json;
            let index = Math.floor(Math.random() * 999);
            let quote = document.getElementById("quoteContainer")
            quote.innerHTML = `" ${qoutearr[index].quote} "`;
        });

}, 1000*10);






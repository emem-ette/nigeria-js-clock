setInterval(clock,1000);

function clock() {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000));
    westAfricanTime = nd.toLocaleString();
    let text = document.getElementById("txt").innerHTML = westAfricanTime;
    console.log(text);
}
clock();

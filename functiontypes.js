function filterIt(callback) {
    if (callback("India"))
        console.log("Passed");
    else
        console.log("Failed");
}
filterIt(function (x) {
    return x.length >= 5 ? true : false;
});
filterIt(function (x) { });

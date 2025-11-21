function calculateSI() {
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    if (p === "" || r === "" || t === "") {
        alert("Please fill all fields!");
        return;
    }

    let si = (p * r * t) / 100;
    document.getElementById("siResult").innerText = "Simple Interest = " + si;
}

function calculateArea() {
    let radius = document.getElementById("radius").value;

    if (radius === "") {
        alert("Please enter radius!");
        return;
    }

    let area = 3.14 * radius * radius;
    document.getElementById("areaResult").innerText = "Area of Circle = " + area;
}

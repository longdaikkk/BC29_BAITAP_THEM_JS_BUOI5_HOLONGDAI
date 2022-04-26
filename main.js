/**
 * Bài 1: Tính tiền thuế
 */
function thuNhapChiuThue(thuNhap, soNg) {
    var kq = 0;
    kq = thuNhap - 4000000 - soNg * 1600000;
    return kq;
}

function tienThue(a) {
    var kq = 0;
    a = a / 1000000;
    if (a <= 60) {
        kq = a * 5 / 100;
    } else if (60 < a && a <= 120) {
        kq = a * 10 / 100;
    } else if (120 < a && a <= 210) {
        kq = a * 15 / 100;
    } else if (210 < a && a <= 384) {
        kq = a * 20 / 100;
    } else if (384 < a && a <= 624) {
        kq = a * 25 / 100;
    } else if (624 < a && a <= 960) {
        kq = a * 30 / 100;
    } else if (960 < a) {
        kq = a * 35 / 100;
    } else {
        alert("nhập sai");
    }
    return kq * 1000000;
}

document.getElementById("kiemTra").onclick = function () {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = document.getElementById("thuNhap").value * 1;
    var soNg = document.getElementById("soNguoi").value * 1;
    var thuNhapCT = thuNhapChiuThue(thuNhap, soNg);
    var thue = tienThue(thuNhapCT);
    var content = "";
    var currentFormat = new Intl.NumberFormat("vn-VN");

    if (thuNhap <= 4000000) {
        thue = 0;
    }

    content = "Họ Tên: " + hoTen + "; Tiền thuế thu nhập cá nhân: " + currentFormat.format(thue) + " VND";
    document.getElementById("ketQua").innerHTML = content;
}

/**
 * Bài 2: Tính tiền cáp
 */
const nd_Hd = 4.5;
const nd_Dv = 20.5;
const nd_Cc = 7.5;

const DN_Hd = 15;
const DN_Dv = 75;
const DN_Cc = 50;

function tienCapNhaDan(soKenh) {
    var kq = 0;
    return kq = nd_Hd + nd_Dv + nd_Cc * soKenh;
}

function tienCapDoanhNghiep(soKn, soKenh) {
    var kq = 0;
    if (soKn <= 10) {
        kq = DN_Hd + DN_Dv + DN_Cc * soKenh;
    } else {
        kq = DN_Hd + DN_Dv + (soKn - 10) * 5 + DN_Cc * soKenh;
    }
    return kq;
}

document.getElementById("select").onclick = function () {
    if (document.getElementById("select").value == "DN") {
        document.getElementById("soKn").style.display = "inline-block";
    }else{
        document.getElementById("soKn").style.display = "none";
    }
}


console.log(document.getElementById("select").value);
document.getElementById("tinhTien").onclick = function () {
    var ms = document.getElementById("ms").value;
    var soKenh = document.getElementById("soK").value * 1;
    var select = document.getElementById("select").value;
    var soKn = document.getElementById("soKn").value * 1;
    var tongTien = 0;
    var currentFormat = new Intl.NumberFormat("en-US");
    switch (select) {
        case "nhaDan":
            tongTien = tienCapNhaDan(soKenh);
            break;
        case "DN":
            tongTien = tienCapDoanhNghiep(soKn, soKenh);
            break;
        default:
            alert("Chọn loại khách hàng");
            break;
    }

    document.getElementById("ketQua2").innerHTML = "Mã số khách hàng: " + ms + "; Tiền cáp: $" + currentFormat.format(tongTien);

}


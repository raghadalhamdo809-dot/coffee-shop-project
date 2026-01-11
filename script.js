
console.log("JavaScript çalışıyor");

document.addEventListener("DOMContentLoaded", function () {

    
    const orderBtn = document.querySelector(".order-btn");

    
    if (orderBtn) {
        orderBtn.addEventListener("click", function (event) {
            
            alert("Sipariş vermek için iletişim formunu doldurabilirsiniz.");
        });
    }

});
function siparisVer(urun, fiyat) {
    fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product: urun,
            price: fiyat
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Sipariş başarıyla gönderildi ✅");
        console.log(data);
    })
    .catch(err => {
        alert("Bir hata oluştu ❌");
        console.log(err);
    });
}

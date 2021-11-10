
function keypress(){
    let timkiem = document.getElementById("timkiem").value;
    if(timkiem.length > 0)
        console.log(timkiem);
    else{
        alert('Bạn cần tìm gì?');
    }
}


<form onsubmit="return frmValidate5(this);"></form>
function frmValidate5(frm) {
    alert("Đã gửi dữ liệu");
    return true;

    
    }
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailReg.test(email.value)== false) {
        return false;
    }
    if(psw.value.length < 8){
        return false;
    }
    if (fname.value.length<4){
        return false
    }
    if(length.value.length<10){
        
        return false;
    
    }

    var itemList = {
        "sp001": {
            "name": "Sữa Chua Vị Kiwi",
            "price": 21000,
            "photo": "images/kiwi.jpg"
        },
        "sp002": {
            "name": "Sữa Chua Vị Xoài",
            "price": 22000,
            "photo": "images/mango.jpg"
        },
        "sp003": {
            "name": "Sữa Chua Vị Dưa lưới",
            "price": 23000,
            "photo": "images/cantaloupe.jpg"
        },
        "sp004": {
            "name": "Sữa Chua Vị Mâm Xôi",
            "price": 24000,
            "photo": "images/blackberry.jpg"
        },
        "sp005": {
            "name": "Sữa Chua Vị Dâu Tây",
            "price": 25000,
            "photo": "images/strawberry.jpg"
        },
        "sp006": {
            "name": "Sữa Chua Vị Việt Quất",
            "price": 26000,
            "photo": "images/blueberry.jpg"
        },
        "sp007": {
            "name": "Sữa Chua Vị Bưởi",
            "price": 27000,
            "photo": "images/grapes.jpg"
        },
        "sp008": {
            "name": "Sữa Chua Vị Táo Xanh",
            "price": 28000,
            "photo": "images/green-apple.jpg"
        },
        "sp009": {
            "name": "Sữa Chua Vị Dứa",
            "price": 29000,
            "photo": "images/pineapple.jpg"
        }
    };
    
        
function addCart(code) {
    let name = 'input-sl-'+code
        console.log('name',name)
    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number)
         }  
     if(sum >=101){
        alert("Giỏ hàng đã đầy")
         }
     if(sum < 100){
        number=parseInt(document.getElementById(code).value)
        current=parseInt(window.localStorage.getItem(code))
        window.localStorage.setItem(code,current+number) 
    }}


        
    
    function showCart(){
        let name = 'input-sl-'+code
        console.log('name',name)
        let sl = document.getElementById('input-sl-'+code)
        TotalPreTax = 0 //Tổng Trước Thuế
        localStorage{
            item = itemList[sl]
            console.log(item)
            photo = item.photo
            name = item.name
            price = item.price
            orderNumber = localStorage.getItem(sl)
            href = photo
            width ='100px'
            TotalPreTax = TotalPreTax +(price . orderNumber) 
        }
    }
    function removeCart(code)
{ 
if(typeof window.localStorage[code] !== "undefined")
 {
 //xóa sản phẩm khỏi localStorage 
 window.localStorage.removeItem(code);
 //Xóa nội dung của phần thân của bảng (<tbody>)
document.getElementById("cartDetail") 
 .getElementsByTagName('tbody')[0].innerHTML="";
 //Hiển thị lại nội dung chi tiết của đơn hàng 
 showCart();
 } 
 } 
 function getDiscountRate()
{
 var d=new Date();//lấy ngày hiện tại của máy tính 
 var weekday=d.getDay();//lấy ngày trong tuần 
 var totalMins=d.getHours()*60+d.getMinutes();//đổi 

if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
 return 0.1;
 return 0;
}
window.onstorage = () => {
    showCart();
    }






    
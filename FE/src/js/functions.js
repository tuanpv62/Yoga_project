
var openModalButtonLogin = document.getElementById("openModalButtonLogin");
var openModalButtonRegister = document.getElementById("openModalButtonRegister");
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
var loginLink = document.getElementById("login-link");
var registerLink = document.getElementById("register-link");
var closeButton = document.getElementsByClassName("close")[0];
var formTrial = document.getElementById("trial-form");
var formTrialOpen = document.getElementById("open-trial-form");



// Xử lý sự kiện khi nhấp vào nút đăng nhập
openModalButtonLogin.onclick = function () {
  loginModal.style.display = "flex";
}
// xử lý đăng kí
openModalButtonRegister.onclick = function () {
  registerModal.style.display = "flex";
}
// Xử lý sự kiện khi nhấp vào nút đóng cửa sổ đăng nhập
closeButton.onclick = function () {
  loginModal.style.display = "none";
  registerModal.style.display = "none";
  
}
// xử lý đăng kí học thử
formTrialOpen.onclick = function(){
  formTrial.style.display = "flex";
} 

// Xử lý sự kiện khi nhấp vào bất kỳ vị trí nào bên ngoài cửa sổ đăng nhập
window.onclick = function (event) {
 
    if (event.target == loginModal || event.target == registerModal || event.target == formTrial ) {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
      formTrial.style.display= "none";
    }
  

}

// Lấy tham chiếu đến button
const button = document.getElementById("myButton");

// Thêm sự kiện khi di chuột vào button
button.addEventListener('mouseover', function () {
  button.classList.add('highlight');
});

// Thêm sự kiện khi di chuột ra khỏi button
button.addEventListener('mouseout', function () {
  button.classList.remove('highlight');
});

// Xử lý sự kiện click cho dòng chữ "Đã có tài khoản"
loginLink.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
  // Ẩn khung đăng ký và hiển thị khung đăng nhập
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
});
// Xử lý sự kiện click cho dòng chữ "Chưa có tài khoản"
registerLink.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
  // Ẩn khung đăng nhập và hiển thị khung đăng ký
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
});


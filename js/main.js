document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("loginError");

  if (username === "admin" && password === "12345") {
    localStorage.setItem("isLoggedIn", "true");
    document.getElementById("addBlogCard").style.display = "block";
    document.getElementById("loginNav").classList.add("d-none");
    document.getElementById("logoutNav").classList.remove("d-none");
    errorDiv.classList.add("d-none");
    const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    loginModal.hide();
  } else {
    errorDiv.classList.remove("d-none");
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  document.getElementById("addBlogCard").style.display = "none";
  document.getElementById("logoutNav").classList.add("d-none");
  document.getElementById("loginNav").classList.remove("d-none");
}

window.onload = function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("addBlogCard").style.display = "block";
    document.getElementById("loginNav").classList.add("d-none");
    document.getElementById("logoutNav").classList.remove("d-none");
  }
};

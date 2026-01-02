const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");

loginBtn.onclick = () => {
  const username = usernameInput.value.trim();
  if (!username) return alert("Nhập tên người dùng");

  const user = {
    id: Date.now(),
    name: username,
    createdAt: new Date().toISOString(),
    progress: {},
    scores: {}
  };

  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
};
import { courses } from "./data.js";


const user = {
  name: "Người dùng",
  email: "user@email.com",
  progress: {}
};

const sidebarItems = document.querySelectorAll(".sidebar li");
const views = document.querySelectorAll(".view");

const courseList = document.getElementById("courseList");

const totalCourses = document.getElementById("totalCourses");
const totalLessons = document.getElementById("totalLessons");
const avgScore = document.getElementById("avgScore");

const userName = document.getElementById("userName");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const logoutBtn = document.getElementById("logoutBtn");


userName.innerText = `Xin chào, ${user.name}`;
profileName.innerText = user.name;
profileEmail.innerText = user.email;


sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const viewId = item.dataset.view;
    views.forEach(v => v.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
  });
});


function renderCourses() {
  courseList.innerHTML = "";

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <span>${course.level}</span>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("currentCourse", course.id);
      window.location.href = "course.html";
    });

    courseList.appendChild(card);
  });
}


function updateStats() {
  totalCourses.innerText = courses.length;

  let lessonCount = 0;
  courses.forEach(c => {
    lessonCount += c.lessons.length;
  });

  totalLessons.innerText = lessonCount;
  avgScore.innerText = "0%"; // sau này tính từ history
}


logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});


renderCourses();
updateStats();

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
const communityPosts = [
  {
    title: "Học AI từ con số 0: Đừng lao vào Deep Learning quá sớm",
    author: "Nguyễn Minh AI",
    date: "2 ngày trước",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    content:
      "Sai lầm lớn nhất của người mới học AI là nhảy ngay vào Neural Network..."
  },
  {
    title: "Machine Learning quan trọng hơn framework",
    author: "Lê Hoàng",
    date: "3 ngày trước",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    content:
      "Nắm vững toán học và tư duy mô hình sẽ giúp bạn đi xa hơn..."
  },
  {
    title: "Lộ trình AI cho Web Developer",
    author: "Trần Anh",
    date: "4 ngày trước",
    image: "https://images.unsplash.com/photo-1526378722443-4ac5e2c47a3a",
    content:
      "Nếu bạn xuất thân từ Web, hãy bắt đầu AI bằng Data Analysis..."
  },
];
const communityFeed = document.getElementById("communityFeed");

function renderCommunity() {
  if (!communityFeed) return;

  communityFeed.innerHTML = "";

  communityPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-card";

    div.innerHTML = `
      <div class="post-image">
        <img src="${post.image}" alt="">
      </div>
      <div class="post-content">
        <h3>${post.title}</h3>
        <div class="post-meta">
          ${post.author} • ${post.date}
        </div>
        <p>${post.content}</p>
      </div>
    `;

    communityFeed.appendChild(div);
  });
}

renderCommunity();

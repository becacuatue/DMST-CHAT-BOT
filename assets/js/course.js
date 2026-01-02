import { courses, analyzeAnswers } from "./data.js";

const courseId = localStorage.getItem("currentCourse");
const course = courses.find(c => c.id === courseId);

const lesson = course.lessons[0];
document.getElementById("video").src = lesson.videoUrl;
document.getElementById("summary").innerText = lesson.summary;

const form = document.getElementById("quiz");
lesson.questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${q.question}</p>` + q.options.map((o, idx) => `
    <label><input type="radio" name="q${i}" value="${idx}">${o}</label>
  `).join("");
  form.appendChild(div);
});

form.onsubmit = e => {
  e.preventDefault();
  const answers = lesson.questions.map((_, i) =>
    Number(form[`q${i}`].value)
  );

  const result = analyzeAnswers(answers, lesson.questions);
  document.getElementById("result").innerText =
    `Điểm: ${result.score}/${result.total}\nKỹ năng yếu: ${Object.keys(result.weakSkills).join(", ")}`;
};
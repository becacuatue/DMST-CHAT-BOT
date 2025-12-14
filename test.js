const scenarioSelect = document.getElementById("scenarioSelect");
const scenarioBox = document.getElementById("scenarioBox");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const feedbackBox = document.getElementById("feedbackBox");


const scenarios = {
work: "Bạn là nhân viên mới và cần góp ý với sếp về một kế hoạch chưa hợp lý.",
social: "Bạn gặp người lạ trong một buổi tiệc và muốn bắt chuyện tự nhiên.",
conflict: "Bạn không hài lòng khi đồng nghiệp thường xuyên đến trễ."
};


scenarioSelect.addEventListener("change", () => {
const value = scenarioSelect.value;
scenarioBox.textContent = scenarios[value] || "";
chatBox.innerHTML = "";
feedbackBox.innerHTML = '<p class="muted">Phản hồi từ AI sẽ hiển thị tại đây</p>';
});


sendBtn.addEventListener("click", () => {
const text = userInput.value.trim();
if (!text) return;


addMessage(text, "user");
userInput.value = "";


// Mô phỏng phản hồi AI (placeholder)
setTimeout(() => {
addMessage("Tôi đã hiểu ý của bạn. Bạn có thể nói rõ hơn không?", "ai");
feedbackBox.innerHTML = `
<strong>Nhận xét:</strong>
<ul>
<li>Cách nói khá rõ ràng</li>
<li>Có thể mềm mại hơn ở phần mở đầu</li>
<li>Nên đặt câu hỏi để tạo đối thoại</li>
</ul>
<strong>Gợi ý:</strong>
<p>"Em rất tôn trọng ý kiến của anh/chị, tuy nhiên em có một đề xuất nhỏ..."</p>
`;
}, 600);
});


function addMessage(text, sender) {
const div = document.createElement("div");
div.className = `message ${sender}`;
div.textContent = text;
chatBox.appendChild(div);
chatBox.scrollTop = chatBox.scrollHeight;
}
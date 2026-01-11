export const courses = [
  {
    id: "js-basic",
    title: "Giới thiệu về đạo đức AI",
    level: "Beginner",
    description: "Vai trò của đạo đức AI trong học tập và công việc",
    lessons: [
      {
        id: "js-1",
        title: "Biến và Kiểu dữ liệu",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
        summary: "let, const, number, string, boolean",
        questions: [
          {
            question: "const dùng để làm gì?",
            options: ["Biến thay đổi", "Hằng số", "Hàm", "Object"],
            correctIndex: 1,
            skill: "variables"
          },
          {
            question: "typeof dùng để?",
            options: ["So sánh", "Kiểm tra kiểu", "Khai báo", "Gán"],
            correctIndex: 1,
            skill: "datatypes"
          }
        ]
      }
    ]
  },

  {
    id: "html-css",
    title: "Các nguyên tắc đạo đức cốt lõi trong AI",
    level: "Beginner",
    description: "Nguyên tắc công bằng và không thiên lệch",
    lessons: [
      {
        id: "html-1",
        title: "Semantic HTML",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        summary: "header, section, article, footer",
        questions: [
          {
            question: "Thẻ semantic giúp gì?",
            options: ["SEO", "Tốc độ", "JS", "Database"],
            correctIndex: 0,
            skill: "html"
          }
        ]
      }
    ]
  },

  { id: "react", title: "CÁC CÔNG CỤ AI PHỔ BIẾN HIỆN NAY", level: "Intermediate", description: "Tổng quan về các nhóm công cụ AI", lessons: [] },
  { id: "node", title: "Thêm và quản lý tài liệu nguồn", level: "Intermediate", description: "Server & API", lessons: [] },
  { id: "db", title: "Thực tiễn sử dụng AI trong đời sống và học tập", level: "Intermediate", description: "AI trong học tập, nghiên cứu và làm bài tập", lessons: [] },
  { id: "algo", title: "Giới thiệu chung về Chatbot AI", level: "Advanced", description: "Các chatbot AI phổ biến hiện nay", lessons: [] },
  { id: "system", title: "Tổng quan về AI trong xử lý hình ảnh", level: "Advanced", description: "Scalable system", lessons: [] },
  { id: "security", title: "Các công cụ chỉnh sửa hình ảnh phổ biến", level: "Advanced", description: "OWASP", lessons: [] },
  { id: "ai", title: "AI for Developers", level: "Advanced", description: "ML & AI", lessons: [] },
  { id: "career", title: "Vai trò của AI trong thuyết trình hiện đại", level: "All", description: "CV & Interview", lessons: [] }
];

export function analyzeAnswers(answers, questions) {
  let score = 0;
  const weakSkills = {};

  questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) {
      score++;
    } else {
      weakSkills[q.skill] = (weakSkills[q.skill] || 0) + 1;
    }
  });

  return {
    score,
    total: questions.length,
    weakSkills
  };
}
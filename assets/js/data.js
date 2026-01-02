export const courses = [
  {
    id: "js-basic",
    title: "JavaScript Cơ Bản",
    level: "Beginner",
    description: "Nắm vững nền tảng JavaScript",
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
    title: "HTML & CSS Professional",
    level: "Beginner",
    description: "Xây dựng giao diện chuẩn thương mại",
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

  { id: "react", title: "React Cơ Bản", level: "Intermediate", description: "Component & State", lessons: [] },
  { id: "node", title: "Node.js Backend", level: "Intermediate", description: "Server & API", lessons: [] },
  { id: "db", title: "Database Design", level: "Intermediate", description: "SQL & NoSQL", lessons: [] },
  { id: "algo", title: "Thuật Toán", level: "Advanced", description: "Logic & Performance", lessons: [] },
  { id: "system", title: "System Design", level: "Advanced", description: "Scalable system", lessons: [] },
  { id: "security", title: "Web Security", level: "Advanced", description: "OWASP", lessons: [] },
  { id: "ai", title: "AI for Developers", level: "Advanced", description: "ML & AI", lessons: [] },
  { id: "career", title: "Career Path", level: "All", description: "CV & Interview", lessons: [] }
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
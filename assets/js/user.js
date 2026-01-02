export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function saveProgress(courseId, data) {
  const user = getCurrentUser();
  user.progress[courseId] = data;
  localStorage.setItem("currentUser", JSON.stringify(user));
}
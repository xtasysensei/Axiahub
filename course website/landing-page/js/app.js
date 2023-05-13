const showBtn = document.querySelector(".show-courses");
const cancelBtn = document.querySelector(".cancel");
const courses = document.querySelector(".courses");

showBtn.addEventListener("click", toggle);

cancelBtn.addEventListener("click", toggle);

function toggle() {
  courses.classList.toggle("show");

  if (courses.classList.contains("show")) {
    showBtn.innerHTML = `Courses <i class="fa-solid fa-caret-up"></i>`;
  } else {
    showBtn.innerHTML = `Courses <i class="fa-solid fa-caret-down"></i>`;
  }
}

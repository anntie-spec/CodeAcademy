// courses.js — pure HTML/CSS/JS version (no backend/server needed).
// The course data lives right here as a plain array. Edit this array
// directly to add, remove, or change courses — everything else in this
// file just displays whatever is in it.

const COURSES = [
  {
    id: 'html5',
    name: 'HTML & CSS Modules',
    tag: 'HTML5',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$10.99',
    description:
      'Learn the building blocks of every website: semantic HTML structure and modern CSS layout. This course is designed for absolute beginners and gets you writing real pages fast.',
    color: '#e34f26',
    image: 'images/html.png' // e.g. 'images/html5-course.jpg' — leave blank to use the colored badge
  },
  {
    id: 'cpp-windows',
    name: 'C# Windows Desktop Development',
    tag: 'C#',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$200.99',
    description:
      'Learn essential C# programming concepts and understand how to solve problems using logic and data structures. You will learn to work with arrays, loops, conditions, functions, and basic data organization.',
    color: '#178600',
    image: 'images/C_sharp.png'
  },
  {
    id: 'python',
    name: 'Python Basics and Data Handling',
    tag: 'Python',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$122.99',
    description:
      'Learn Python basics and data handling. This course is designed for beginners who want a practical, hands-on introduction to one of the most in-demand languages.',
    color: '#3776ab',
    image: 'images/python.png'
  },
  // {
  //   id: 'C++',
  //   name: 'C++ Windows Desktop Development',
  //   tag: 'C++',
  //   level: 'Beginner',
  //   duration: '8-10 Hours',
  //   price: '$111.99',
  //   description:
  //     'the fundamentals of C++ programming and build interactive desktop applications.',
  //   color: '#9b4f96',
  //   image: 'images/C_plus.png'
  // }
];

// Builds the little logo box: a real <img> if the course has an "image"
// path filled in, otherwise the colored badge with the tag text.
function courseLogo(course) {
  if (course.image) {
    return `<img class="course-card__logo" src="${course.image}" alt="${course.name}" style="height:140px;width:100%;object-fit:cover;">`;
  }
  return `<div class="course-card__logo" style="background:${course.color}">${course.tag}</div>`;
}

function courseLogoLarge(course) {
  if (course.image) {
    return `<img class="course-detail__logo" src="${course.image}" alt="${course.name}" style="object-fit:cover;">`;
  }
  return `<div class="course-detail__logo" style="background:${course.color}">${course.tag}</div>`;
}

function courseCard(course) {
  return `
    <a class="course-card" href="course.html?id=${course.id}">
      ${courseLogo(course)}
      <div class="course-card__body">
        <h3>${course.name}</h3>
        <div class="course-card__meta">
          <span>${course.level}</span>
          <span>${course.duration}</span>
        </div>
        <span class="course-detail__price">${course.price}</span>
      </div>
    </a>
  `;
}

function renderCourseGrid() {
  const grid = document.querySelector('[data-course-grid]');
  if (!grid) return;
  grid.innerHTML = COURSES.map(courseCard).join('');
}

function renderCourseDetail() {
  const wrap = document.querySelector('[data-course-detail]');
  if (!wrap) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    wrap.innerHTML = '<p>Course not found. <a href="courses.html">Back to courses</a></p>';
    return;
  }

  wrap.innerHTML = `
    <div class="course-detail__head">
      ${courseLogoLarge(course)}
      <h1>${course.name}</h1>
    </div>
    <div class="course-detail__meta">
      <span>${course.level}</span>
      <span>${course.duration}</span>
      <span class="course-detail__price">${course.price}</span>
    </div>
    <div class="course-detail__card">
      <h4>COURSE DESCRIPTION</h4>
      <p>${course.description}</p>
      <button class="btn btn--primary btn--block" type="button">Enroll Now</button>
    </div>
  `;
}

renderCourseGrid();
renderCourseDetail();

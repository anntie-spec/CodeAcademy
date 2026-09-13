// instructors.js — pure HTML/CSS/JS version (no backend/server needed).
// The instructor data lives right here as a plain array. Edit this
// array directly to add, remove, or change instructors.

const INSTRUCTORS = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'Lead Code Design Engineer',
    bio: 'Sarah has spent over a decade building developer tools and leads our systems curriculum. She specializes in turning intimidating architecture concepts into approachable, hands-on lessons for beginners and career switchers alike.',
    avatarBg: '111111',
    photo: 'images/sarah_chen.png' // e.g. 'images/sarah-chen.jpg' — leave blank to use the generated avatar
  },
  {
    id: 'chen-jonh',
    name: 'Chen Jonh',
    title: 'Senior Frontend Architect',
    bio: 'Chen has led frontend teams at several fast-growing startups. His courses focus on real-world component design, accessibility, and performance — the things textbooks tend to skip.',
    avatarBg: 'f4a6c1',
    photo: 'images/chen_jonh.png'
  },
  {
    id: 'jonh-doe',
    name: 'Jonh Doe',
    title: 'Backend Web Lead',
    bio: 'Jonh builds resilient backend systems for a living and teaches the same patterns he uses in production: clean APIs, sensible data models, and just enough architecture to scale without overengineering.',
    avatarBg: '111111',
    photo: 'images/Jonh_Doe.png'
  },
  {
    id: 'anya',
    name: 'Anya',
    title: 'Product Design Mentor',
    bio: 'Anya mentors aspiring product designers on translating rough ideas into interfaces people actually enjoy using, with an emphasis on research, iteration, and clear design rationale.',
    avatarBg: 'f4a6c1',
    photo: 'images/anya.png'
  },
  {
    id: 'jonan-zang-data',
    name: 'Jonan Zang',
    title: 'Data Science Mentor',
    bio: 'Jonan has spent years turning messy datasets into clear, actionable insight. His mentoring style is practical and project-based — you will spend more time in notebooks than in slide decks.',
    avatarBg: '111111',
    photo: 'images/Jonan_zang.png'
  },
  {
    id: 'jonan-zang-mobile',
    name: 'Jonan Zang',
    title: 'Senior Mobile App Developer',
    bio: 'Jonan has shipped mobile apps used by millions and teaches the practical side of mobile development: performance, platform quirks, and getting an app from prototype to app store.',
    avatarBg: 'f4a6c1',
    photo: 'images/JonanZang.png'
  }
];

// Builds the photo: a real <img src="..."> if "photo" is filled in,
// otherwise a generated initials avatar (ui-avatars.com).
function instructorPhotoUrl(instructor) {
  if (instructor.photo) return instructor.photo;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&background=${instructor.avatarBg}&color=fff&size=300`;
}

function instructorCard(instructor) {
  return `
    <a class="instructor-card" href="instructor.html?id=${instructor.id}">
      <span class="instructor-card__tag">${instructor.title.split(' ')[0]}</span>
      <img src="${instructorPhotoUrl(instructor)}" alt="${instructor.name}">
      <div class="instructor-card__body">
        <h3>${instructor.name}</h3>
        <span class="role">${instructor.name} - ${instructor.title}</span>
      </div>
    </a>
  `;
}

function renderInstructorGrid() {
  const grid = document.querySelector('[data-instructor-grid]');
  if (!grid) return;
  grid.innerHTML = INSTRUCTORS.map(instructorCard).join('');
}

function renderInstructorDetail() {
  const wrap = document.querySelector('[data-instructor-detail]');
  if (!wrap) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const instructor = INSTRUCTORS.find((i) => i.id === id);

  if (!instructor) {
    wrap.innerHTML = '<p>Instructor not found. <a href="instructors.html">Back to instructors</a></p>';
    return;
  }

  wrap.innerHTML = `
    <div class="detail-hero">
      <img src="${instructorPhotoUrl(instructor)}" alt="${instructor.name}">
      <div>
        <h1>${instructor.name}</h1>
        <p class="role">${instructor.title}</p>
      </div>
    </div>
    <div class="detail-body">
      <p>${instructor.bio}</p>
    </div>
  `;
}

renderInstructorGrid();
renderInstructorDetail();

const DEFAULT_HOME_ENTRIES = [
  {
    title: "STAY launch week",
    date: "2024-12-01",
    summary: "Welcome to the new STAY home base. Drop new updates here anytime.",
    tag: "Announcement",
    link: "",
  },
  {
    title: "Studio check-in",
    date: "2024-11-12",
    summary: "Behind the scenes with the team while preparing the next release.",
    tag: "Behind the scenes",
    link: "",
  },
];

const DEFAULT_DISCOGRAPHY = [
  {
    title: "STAY - Blooming",
    date: "2024-10-18",
    type: "Single",
    notes: "First single in the new era."
  },
  {
    title: "STAY - Starline",
    date: "2024-06-02",
    type: "EP",
    notes: "5 tracks, featuring fan favorites."
  },
];

const MEMBERS = [
  {
    id: "yunho",
    name: "Yunho (정윤호)",
    role: "Lead dancer, lead vocalist",
    group: "Ateez",
    company: "KQ Entertainment",
    debut: "2018-10-24",
    birth: "1999-03-23",
    generation: "4th",
    schedules: [
      {
        label: "Current era",
        start: "2024-01-01",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      },
      {
        label: "Next era",
        start: "2025-01-01",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "sungchan",
    name: "Sungchan (정성찬)",
    role: "Main rapper, lead dancer, sub vocalist",
    group: "Riize",
    company: "SM Entertainment",
    debut: "2020-09-12 (with NCT), 2023-09-04 (with RIIZE)",
    birth: "2001-09-13",
    generation: "5th",
    schedules: [
      {
        label: "Current era",
        start: "2024-01-01",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        label: "Next era",
        start: "2025-01-01",
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "juyeon",
    name: "Juyeon (이주연)",
    role: "Main dancer, lead rapper, sub vocalist",
    group: "The Boyz",
    company: "One Hundred",
    debut: "2017-12-06",
    birth: "1998-01-15",
    generation: "3rd",
    schedules: [
      {
        label: "Current era",
        start: "2024-01-01",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      },
      {
        label: "Next era",
        start: "2025-01-01",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "sunghoon",
    name: "Sunghoon (박성훈)",
    role: "Sub vocalist, maknae",
    group: "Enhypen",
    company: "Belift Lab (HYBE Labels)",
    debut: "2020-11-30",
    birth: "2002-12-08",
    generation: "4th",
    schedules: [
      {
        label: "Current era",
        start: "2024-01-01",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
      },
      {
        label: "Next era",
        start: "2025-01-01",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "taehyung",
    name: "Taehyung (김태형)",
    role: "Leader, main vocalist",
    group: "BTS",
    company: "Big Hit Music (HYBE Labels)",
    debut: "2013-06-13",
    birth: "1995-12-30",
    generation: "3rd",
    schedules: [
      {
        label: "Current era",
        start: "2024-01-01",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      },
      {
        label: "Next era",
        start: "2025-01-01",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

const STORAGE_KEYS = {
  homeEntries: "stay_home_entries",
  discography: "stay_discography",
  memberPhotos: "stay_member_photos",
};

const bannerSchedule = [
  {
    start: "2024-01-01",
    title: "New Era Spotlight",
    subtitle: "Celebrate the next chapter with STAY",
    theme: "linear-gradient(135deg, rgba(233, 109, 167, 0.35), rgba(109, 220, 255, 0.25))",
  },
  {
    start: "2025-01-01",
    title: "Future release mode",
    subtitle: "Schedule your banner for upcoming eras",
    theme: "linear-gradient(135deg, rgba(109, 220, 255, 0.25), rgba(233, 109, 167, 0.15))",
  },
];

const $ = (selector) => document.querySelector(selector);

const sortByDateDesc = (items) =>
  [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

const loadFromStorage = (key, fallback) => {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Failed to parse storage", error);
    return fallback;
  }
};

const saveToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const setupLoadingScreen = () => {
  const loader = $("#loading-screen");
  if (!loader) return;
  loader.classList.add("active");
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      loader.classList.remove("active");
    }, 600);
  });
};

const formatDisplayDate = (date) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hasBirthdayPassed) age -= 1;
  return age;
};

const getScheduledItem = (schedule) => {
  const today = new Date();
  return [...schedule]
    .filter((item) => new Date(item.start) <= today)
    .sort((a, b) => new Date(b.start) - new Date(a.start))[0];
};

const renderHomeEntries = () => {
  const list = $("#home-entry-list");
  if (!list) return;
  const entries = sortByDateDesc(
    loadFromStorage(STORAGE_KEYS.homeEntries, DEFAULT_HOME_ENTRIES)
  );

  list.innerHTML = "";
  entries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "entry-card";
    card.innerHTML = `
      <span class="tag">${entry.tag || "Update"}</span>
      <h3>${entry.title}</h3>
      <p>${entry.summary}</p>
      <p class="muted">${formatDisplayDate(entry.date)}</p>
      ${
        entry.link
          ? `<a href="${entry.link}" target="_blank" rel="noopener">Open highlight</a>`
          : ""
      }
    `;
    list.appendChild(card);
  });
};

const handleHomeForm = () => {
  const form = $("#home-entry-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const entry = {
      title: data.get("title").trim(),
      date: data.get("date"),
      summary: data.get("summary").trim(),
      tag: data.get("tag").trim() || "Update",
      link: data.get("link").trim(),
    };
    const entries = loadFromStorage(
      STORAGE_KEYS.homeEntries,
      DEFAULT_HOME_ENTRIES
    );
    entries.push(entry);
    saveToStorage(STORAGE_KEYS.homeEntries, entries);
    form.reset();
    renderHomeEntries();
  });

  const clearButton = $("#clear-home-entries");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      saveToStorage(STORAGE_KEYS.homeEntries, DEFAULT_HOME_ENTRIES);
      renderHomeEntries();
    });
  }
};

const renderDiscography = () => {
  const list = $("#discography-list");
  if (!list) return;
  const releases = sortByDateDesc(
    loadFromStorage(STORAGE_KEYS.discography, DEFAULT_DISCOGRAPHY)
  );
  list.innerHTML = "";

  releases.forEach((release) => {
    const card = document.createElement("article");
    card.className = "entry-card";
    card.innerHTML = `
      <span class="tag">${release.type || "Release"}</span>
      <h3>${release.title}</h3>
      <p>${release.notes || "No notes added yet."}</p>
      <p class="muted">${formatDisplayDate(release.date)}</p>
    `;
    list.appendChild(card);
  });
};

const handleDiscographyForm = () => {
  const form = $("#discography-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const release = {
      title: data.get("title").trim(),
      date: data.get("date"),
      type: data.get("type").trim(),
      notes: data.get("notes").trim(),
    };
    const releases = loadFromStorage(
      STORAGE_KEYS.discography,
      DEFAULT_DISCOGRAPHY
    );
    releases.push(release);
    saveToStorage(STORAGE_KEYS.discography, releases);
    form.reset();
    renderDiscography();
  });

  const clearButton = $("#clear-discography");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      saveToStorage(STORAGE_KEYS.discography, DEFAULT_DISCOGRAPHY);
      renderDiscography();
    });
  }
};

const renderMembers = () => {
  const grid = $("#member-grid");
  if (!grid) return;
  const storedPhotos = loadFromStorage(STORAGE_KEYS.memberPhotos, {});

  grid.innerHTML = "";
  MEMBERS.forEach((member) => {
    const card = document.createElement("article");
    card.className = "member-card";
    const scheduled = getScheduledItem(member.schedules) || member.schedules[0];
    const age = calculateAge(member.birth);
    const photoLinks = storedPhotos[member.id] || [];
    const debutLine = member.debut.includes("(")
      ? member.debut
      : formatDisplayDate(member.debut);

    card.innerHTML = `
      <div class="member-hero" style="background-image: url('${scheduled.image}'); background-size: cover; background-position: center;">
        <span>${scheduled.label}</span>
      </div>
      <div class="member-content">
        <h3>${member.name}</h3>
        <p class="member-detail"><strong>Role:</strong> ${member.role}</p>
        <p class="member-detail"><strong>Group:</strong> ${member.group}</p>
        <p class="member-detail"><strong>Company:</strong> ${member.company}</p>
        <p class="member-detail"><strong>First debut:</strong> ${debutLine}</p>
        <p class="member-detail"><strong>Birthdate:</strong> ${formatDisplayDate(
          member.birth
        )} (age ${age})</p>
        <p class="member-detail"><strong>Generation:</strong> ${member.generation}</p>
        <div class="photo-list">
          <p class="member-detail"><strong>Photo compilation:</strong></p>
          ${
            photoLinks.length
              ? photoLinks
                  .map(
                    (link) =>
                      `<a href="${link}" target="_blank" rel="noopener">${link}</a>`
                  )
                  .join("")
              : "<p class=\"muted\">No photos added yet.</p>"
          }
        </div>
        <form class="form-grid" data-member="${member.id}">
          <label class="full">
            Add photo URL
            <input name="photo" type="url" placeholder="https://" required />
          </label>
          <button class="primary" type="submit">Save photo link</button>
        </form>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll("form[data-member]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const link = data.get("photo").trim();
      if (!link) return;
      const memberId = form.dataset.member;
      const updated = loadFromStorage(STORAGE_KEYS.memberPhotos, {});
      updated[memberId] = [...(updated[memberId] || []), link];
      saveToStorage(STORAGE_KEYS.memberPhotos, updated);
      renderMembers();
    });
  });
};

const applyBannerSchedule = () => {
  const hero = $("#hero-banner");
  if (!hero) return;
  const scheduled = getScheduledItem(bannerSchedule) || bannerSchedule[0];
  hero.style.background = scheduled.theme;
  hero.querySelector("h1").textContent = scheduled.title;
  hero.querySelector(".hero-copy").textContent = scheduled.subtitle;
};

const setupScrollButtons = () => {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scroll);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });
};

setupLoadingScreen();
applyBannerSchedule();
setupScrollButtons();
renderHomeEntries();
handleHomeForm();
renderDiscography();
handleDiscographyForm();
renderMembers();

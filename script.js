const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const toTop = document.getElementById("to-top");
const progress = document.getElementById("scroll-progress");
const typedEl = document.getElementById("typed");
const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const copyEmailBtn = document.getElementById("copy-email");

document.getElementById("year").textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  header.classList.toggle("scrolled", window.scrollY > 40);
  toTop.classList.toggle("visible", window.scrollY > 500);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

const sections = document.querySelectorAll("section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 70}ms`;
  revealObserver.observe(el);
});

const phrases = ["web.", "web apps.", "APIs.", "UIs.", "experiences."];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const phrase = phrases[phraseIndex];
  charIndex += deleting ? -1 : 1;
  typedEl.textContent = phrase.slice(0, charIndex);

  let delay = deleting ? 55 : 110;
  if (!deleting && charIndex === phrase.length) {
    delay = 1600;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }
  setTimeout(type, delay);
}
type();

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("hello@ronakmaniya.dev");
      showToast("Email copied to clipboard!");
    } catch {
      showToast("hello@ronakmaniya.dev");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
  const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
  window.location.href = `mailto:hello@ronakmaniya.dev?subject=${subject}&body=${body}`;
  showToast("Opening your email app…");
});

const skillFills = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      skillObserver.unobserve(entry.target);
      entry.target.style.width = `${entry.target.dataset.level}%`;
    });
  },
  { threshold: 0.4 }
);
skillFills.forEach((fill) => skillObserver.observe(fill));

const statNums = document.querySelectorAll(".stat-card__num[data-count]");
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      statObserver.unobserve(entry.target);
      animateCount(entry.target);
    });
  },
  { threshold: 0.6 }
);

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";

  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

statNums.forEach((el) => statObserver.observe(el));

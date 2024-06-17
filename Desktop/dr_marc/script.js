console.log("Hello, world");

// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = 3000;

// nav open function
// const btnNav = ducoment.querySelector(".btn-mobile-nav");
// const headerEl = ducoment.querySelector(".header");
// btnNav.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// sticky navigation
const navEl = document.querySelector(".header-nav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(navEl);

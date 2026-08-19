/* ============================================================
   B&Z Visuals — interactivity
   Mobile nav, header scroll state, scroll reveal, booking modal,
   contact form (mailto), theme toggle, year.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("site-header");
  var onScroll = function () {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.hasAttribute("hidden");
      if (open) mobileNav.removeAttribute("hidden");
      else mobileNav.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- Booking modal ---------- */
  var modal = document.getElementById("booking-modal");
  var openBtns = document.querySelectorAll("[data-open-booking]");
  var closeBtns = document.querySelectorAll("[data-close-booking]");

  function openModal() {
    if (!modal) return;
    modal.removeAttribute("hidden");
    requestAnimationFrame(function () {
      modal.classList.add("open");
    });
    document.body.style.overflow = "hidden";
    var first = modal.querySelector("input, select, textarea");
    if (first) first.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function () {
      modal.setAttribute("hidden", "");
    }, 200);
  }

  openBtns.forEach(function (b) {
    b.addEventListener("click", openModal);
  });
  closeBtns.forEach(function (b) {
    b.addEventListener("click", closeModal);
  });
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) {
      closeModal();
    }
  });

  /* ---------- Build a mailto: link from a form ---------- */
  function buildMailto(form) {
    var data = new FormData(form);
    var name = (data.get("name") || "").toString().trim();
    var email = (data.get("email") || "").toString().trim();
    var need = (data.get("need") || "").toString().trim();
    var message = (data.get("message") || "").toString().trim();

    var subject = "New project inquiry — " + (name || "Website");
    var lines = [];
    if (name) lines.push("Name: " + name);
    if (email) lines.push("Email: " + email);
    if (need) lines.push("Service: " + need);
    if (message) lines.push("Message: " + message);
    var body = lines.join("\n\n");

    return (
      "mailto:contact@bzvisuals.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }

  /* ---------- Booking form submit ---------- */
  var bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }
      window.location.href = buildMailto(bookingForm);
    });
  }

  /* ---------- Contact form submit ---------- */
  var contactForm = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      window.location.href = buildMailto(contactForm);
      if (status) {
        status.textContent = "Opening your email app… if nothing happened, email contact@bzvisuals.com.";
      }
    });
  }
})();

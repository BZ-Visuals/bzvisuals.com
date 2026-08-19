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

  /* ---------- Form submission (via Formsubmit.co) ----------
     Forms POST to https://formsubmit.co/contact@bzvisuals.com.
     On success Formsubmit redirects to ?sent=true#contact.
     We validate client-side first, then let the native submit go through.
     A hidden honeypot (_honey) drops bot submissions. */
  function wireForm(form) {
    if (!form) return;
    var btn = form.querySelector('button[type="submit"]');
    var label = btn ? btn.dataset.submitLabel : null;
    form.addEventListener("submit", function (e) {
      // honeypot filled = bot; bail silently
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) {
        e.preventDefault();
        return;
      }
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }
      // valid — let it submit; show a sending state on the button
      if (btn && label) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
    });
  }
  wireForm(document.getElementById("contact-form"));
  wireForm(document.getElementById("booking-form"));

  /* ---------- Show success banner after redirect back ---------- */
  var params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "true") {
    var banner = document.getElementById("success-banner");
    if (banner) banner.removeAttribute("hidden");
    // clean the URL so a refresh doesn't re-show it
    history.replaceState(null, "", window.location.pathname + window.location.hash);
  }
})();

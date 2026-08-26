/* Muhammad Sajjad — portfolio interactions (vanilla, no deps) */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* year */
  var yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  /* header shadow on scroll + back-to-top */
  var header = $("#site-header");
  var toTop = $("#totop");
  function onScroll() {
    var y = window.pageYOffset;
    header.classList.toggle("scrolled", y > 12);
    if (toTop) toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile nav */
  var toggle = $("#navToggle"), links = $("#navLinks");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("a", links).forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* reveal on scroll */
  var revealables = $$(".reveal");
  var ro;
  if ("IntersectionObserver" in window) {
    ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        // reveal when in view, or when the user has already scrolled past it
        if (e.isIntersecting || e.boundingClientRect.top < window.innerHeight) {
          e.target.classList.add("in");
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    revealables.forEach(function (el) { ro.observe(el); });
    // safety net: nothing should stay invisible for long
    window.addEventListener("load", function () {
      setTimeout(function () {
        $$(".reveal:not(.in)").forEach(function (el) {
          if (el.getBoundingClientRect().top < window.innerHeight * 1.5) el.classList.add("in");
        });
      }, 900);
    });
  } else {
    revealables.forEach(function (el) { el.classList.add("in"); });
  }

  /* count-up */
  function runCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counts = $$("[data-count]");
  if ("IntersectionObserver" in window && counts.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting || e.boundingClientRect.top < window.innerHeight) { runCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counts.forEach(function (el) { co.observe(el); });
  } else {
    counts.forEach(runCount);
  }

  /* skill bars */
  var fills = $$(".fill");
  if ("IntersectionObserver" in window && fills.length) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting || e.boundingClientRect.top < window.innerHeight) {
          e.target.style.width = (e.target.getAttribute("data-w") || 0) + "%";
          fo.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    fills.forEach(function (el) { fo.observe(el); });
  } else {
    fills.forEach(function (el) { el.style.width = (el.getAttribute("data-w") || 0) + "%"; });
  }

  /* active nav link */
  var sections = $$("section[id]");
  var navMap = {};
  $$("#navLinks a[href^='#']").forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("active"); });
          if (navMap[e.target.id]) navMap[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- project scenes (lightweight inline SVG mockups) ---------- */
  function frame(inner) {
    return '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img">' +
      '<defs>' +
      '<linearGradient id="ac" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#a855f7"/></linearGradient>' +
      '<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111a2f"/><stop offset="1" stop-color="#0b1120"/></linearGradient>' +
      '</defs>' +
      '<rect width="480" height="300" fill="url(#bg)"/>' +
      '<rect x="0" y="0" width="480" height="30" fill="#0e1626"/>' +
      '<circle cx="18" cy="15" r="4" fill="#2b3a57"/><circle cx="34" cy="15" r="4" fill="#2b3a57"/><circle cx="50" cy="15" r="4" fill="#2b3a57"/>' +
      '<rect x="72" y="9" width="360" height="12" rx="6" fill="#16233b"/>' +
      inner + '</svg>';
  }
  function truckMarker(x, y, label) {
    return '<g>' +
      '<circle cx="' + x + '" cy="' + y + '" r="13" fill="url(#ac)" opacity=".18"/>' +
      '<rect x="' + (x - 11) + '" y="' + (y - 6) + '" width="15" height="11" rx="2" fill="url(#ac)"/>' +
      '<rect x="' + (x + 4) + '" y="' + (y - 3) + '" width="8" height="8" rx="2" fill="url(#ac)"/>' +
      '<circle cx="' + (x - 6) + '" cy="' + (y + 6) + '" r="2.4" fill="#0a0f1c"/>' +
      '<circle cx="' + (x + 7) + '" cy="' + (y + 6) + '" r="2.4" fill="#0a0f1c"/>' +
      (label ? '<rect x="' + (x - 14) + '" y="' + (y - 25) + '" width="' + (label.length * 6 + 12) + '" height="15" rx="4" fill="#0e1830" stroke="#22304f"/>' +
        '<text x="' + (x - 8) + '" y="' + (y - 14) + '" fill="#cbd5e6" font-family="Segoe UI,Arial" font-size="9">' + label + '</text>' : '') +
      '</g>';
  }
  var scenes = {
    tmsTrack: frame(
      '<g stroke="#16233b" stroke-width="7" fill="none" stroke-linecap="round">' +
        '<path d="M-10 208 C 90 178 130 88 240 96 S 420 58 490 42"/>' +
        '<path d="M22 40 C 62 120 118 160 128 250"/>' +
        '<path d="M472 118 C 380 150 320 220 250 250 S 110 250 -10 250"/>' +
      '</g>' +
      '<path d="M-10 208 C 90 178 130 88 240 96 S 420 58 490 42" fill="none" stroke="url(#ac)" stroke-width="3" stroke-dasharray="1 8" stroke-linecap="round"/>' +
      '<g opacity=".3" stroke="#22304f"><path d="M0 92h480M0 168h480M0 240h480M132 30v270M270 30v270M388 30v270"/></g>' +
      truckMarker(128, 150, 'TRK-114') + truckMarker(300, 88, '') + truckMarker(206, 250, '') +
      '<g><rect x="70" y="232" width="20" height="12" rx="2" fill="#6b7a99"/><rect x="86" y="235" width="8" height="9" rx="2" fill="#6b7a99"/>' +
      '<circle cx="76" cy="246" r="3" fill="#1c2b46"/><circle cx="89" cy="246" r="3" fill="#1c2b46"/></g>' +
      '<rect x="284" y="176" width="172" height="94" rx="9" fill="#0e1830" stroke="#22304f"/>' +
      '<circle cx="300" cy="196" r="4" fill="#34d399"/>' +
      '<text x="312" y="200" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="12" font-weight="700">TRK-114 · en route</text>' +
      '<text x="298" y="222" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Speed 62 mph    ETA 14:20</text>' +
      '<rect x="298" y="230" width="144" height="6" rx="3" fill="#1c2b46"/><rect x="298" y="230" width="98" height="6" rx="3" fill="url(#ac)"/>' +
      '<text x="298" y="256" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Engine 71°C    Fuel 58%</text>' +
      '<rect x="26" y="42" width="150" height="24" rx="6" fill="#0e1830" stroke="#22304f"/>' +
      '<circle cx="40" cy="54" r="4" fill="url(#ac)"/><text x="50" y="58" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">3 moving</text>' +
      '<circle cx="112" cy="54" r="4" fill="#6b7a99"/><text x="122" y="58" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">1 idle</text>'
    ),
    tmsMetrics: frame(
      '<text x="40" y="48" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="11">Fleet overview · today</text>' +
      grid(4, 1, 40, 58, 95, 66, function (x, y, i) {
        var d = [["Active", "128"], ["Miles", "14.2k"], ["Avg mph", "54"], ["Alerts", "7"]][i];
        return '<rect x="' + x + '" y="' + y + '" width="95" height="66" rx="9" fill="#0f1c33" stroke="#22304f"/>' +
          '<text x="' + (x + 12) + '" y="' + (y + 22) + '" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="9">' + d[0] + '</text>' +
          '<text x="' + (x + 12) + '" y="' + (y + 47) + '" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="19" font-weight="700">' + d[1] + '</text>';
      }) +
      '<rect x="40" y="140" width="250" height="128" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
      '<text x="54" y="160" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Telemetry events / hour</text>' +
      (function () { var hs = [30, 46, 38, 64, 52, 70, 58, 44], o = ""; for (var i = 0; i < 8; i++) { o += '<rect x="' + (56 + i * 28) + '" y="' + (252 - hs[i]) + '" width="16" height="' + hs[i] + '" rx="3" fill="url(#ac)" opacity=".9"/>'; } return o; })() +
      '<rect x="300" y="140" width="140" height="128" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
      '<text x="314" y="160" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Fleet utilization</text>' +
      '<circle cx="370" cy="212" r="34" fill="none" stroke="#1c2b46" stroke-width="10"/>' +
      '<circle cx="370" cy="212" r="34" fill="none" stroke="url(#ac)" stroke-width="10" stroke-linecap="round" stroke-dasharray="167 214" transform="rotate(-90 370 212)"/>' +
      '<text x="370" y="217" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="16" font-weight="700" text-anchor="middle">78%</text>'
    ),
    tmsCam: frame(
      grid(2, 2, 40, 44, 200, 118, function (x, y, i) {
        var cams = ["CAM 01 · Front", "CAM 02 · Cabin", "CAM 03 · Rear", "CAM 04 · Left"];
        var s = '<clipPath id="cc' + i + '"><rect x="' + x + '" y="' + y + '" width="200" height="118" rx="8"/></clipPath>' +
          '<rect x="' + x + '" y="' + y + '" width="200" height="118" rx="8" fill="#0c1524" stroke="#22304f"/>' +
          '<g clip-path="url(#cc' + i + ')">' +
            '<rect x="' + x + '" y="' + y + '" width="200" height="70" fill="#12233d"/>' +
            '<rect x="' + x + '" y="' + (y + 70) + '" width="200" height="48" fill="#0f1a2c"/>' +
            '<path d="M' + x + ' ' + (y + 70) + ' H' + (x + 200) + '" stroke="#22304f"/>' +
            '<path d="M' + (x + 82) + ' ' + (y + 118) + ' L' + (x + 96) + ' ' + (y + 70) + ' M' + (x + 118) + ' ' + (y + 118) + ' L' + (x + 104) + ' ' + (y + 70) + '" stroke="#33456b" stroke-width="3" stroke-dasharray="6 6"/>' +
          '</g>' +
          '<circle cx="' + (x + 16) + '" cy="' + (y + 16) + '" r="4" fill="#ef4444"/>' +
          '<text x="' + (x + 26) + '" y="' + (y + 20) + '" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="9" font-weight="700">REC</text>' +
          '<text x="' + (x + 12) + '" y="' + (y + 108) + '" fill="#cbd5e6" font-family="Segoe UI,Arial" font-size="9">' + cams[i] + '   12:41:0' + i + '</text>';
        if (i === 0) s += '<circle cx="' + (x + 100) + '" cy="' + (y + 55) + '" r="16" fill="rgba(10,15,28,.55)"/><path d="M' + (x + 94) + ' ' + (y + 47) + ' l14 8 -14 8Z" fill="#fff"/>';
        return s;
      })
    ),
    tmsVideo: frame(
      '<clipPath id="pvc"><rect x="40" y="44" width="286" height="180" rx="10"/></clipPath>' +
      '<rect x="40" y="44" width="286" height="180" rx="10" fill="#0c1524" stroke="#22304f"/>' +
      '<g clip-path="url(#pvc)"><rect x="40" y="44" width="286" height="120" fill="#12233d"/><rect x="40" y="164" width="286" height="60" fill="#0f1a2c"/>' +
      '<path d="M140 224 L165 164 M232 224 L207 164" stroke="#33456b" stroke-width="4" stroke-dasharray="7 7"/></g>' +
      '<circle cx="183" cy="132" r="22" fill="rgba(10,15,28,.55)"/><path d="M175 120 l18 12 -18 12Z" fill="#fff"/>' +
      '<text x="52" y="62" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="10" font-weight="700">TRK-114 · 2026-02-11 12:30:04</text>' +
      '<rect x="40" y="236" width="286" height="6" rx="3" fill="#1c2b46"/><rect x="40" y="236" width="150" height="6" rx="3" fill="url(#ac)"/>' +
      '<circle cx="190" cy="239" r="6" fill="#fff"/>' +
      '<rect x="96" y="233" width="4" height="12" rx="2" fill="#f59e0b"/><rect x="150" y="233" width="4" height="12" rx="2" fill="#ef4444"/><rect x="250" y="233" width="4" height="12" rx="2" fill="#f59e0b"/>' +
      '<text x="344" y="56" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Event clips</text>' +
      rows(3, 0, 66, function (y, i) {
        var t = [["Harsh brake", "12:30"], ["Speeding", "11:58"], ["Idle > 5m", "10:12"]][i];
        return '<rect x="340" y="' + y + '" width="104" height="46" rx="7" fill="#0f1c33" stroke="#22304f"/>' +
          '<rect x="348" y="' + (y + 9) + '" width="28" height="28" rx="4" fill="#12233d"/>' +
          '<path d="M358 ' + (y + 17) + ' l8 5 -8 5Z" fill="url(#ac)"/>' +
          '<text x="384" y="' + (y + 21) + '" fill="#cbd5e6" font-family="Segoe UI,Arial" font-size="8">' + t[0] + '</text>' +
          '<text x="384" y="' + (y + 34) + '" fill="#74839f" font-family="Segoe UI,Arial" font-size="8">' + t[1] + '</text>';
      })
    ),
    video: frame(
      grid(3, 2, 40, 50, 118, 92, function (x, y, i) {
        return '<rect x="' + x + '" y="' + y + '" width="118" height="92" rx="8" fill="#0f1c33" stroke="#22304f"/>' +
          '<circle cx="' + (x + 59) + '" cy="' + (y + 40) + '" r="15" fill="url(#ac)"/>' +
          '<path d="M' + (x + 54) + ' ' + (y + 32) + ' l14 8 -14 8Z" fill="#0a0f1c"/>' +
          '<rect x="' + (x + 12) + '" y="' + (y + 68) + '" width="70" height="7" rx="3" fill="#1c2b46"/>';
      })
    ),
    review: frame(
      '<rect x="40" y="52" width="150" height="196" rx="14" fill="#0f1c33" stroke="#22304f"/>' +
      '<rect x="54" y="66" width="122" height="90" rx="8" fill="#12223d"/>' +
      '<circle cx="115" cy="111" r="16" fill="url(#ac)"/><path d="M109 103l14 8-14 8Z" fill="#0a0f1c"/>' +
      '<g fill="url(#ac)"><path d="M60 176l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z"/></g>' +
      '<rect x="92" y="178" width="80" height="8" rx="4" fill="#1c2b46"/><rect x="92" y="194" width="64" height="8" rx="4" fill="#1c2b46"/>' +
      rows(4, 220, 60, function (y, i) {
        return '<rect x="220" y="' + y + '" width="220" height="40" rx="8" fill="#0e1830" stroke="#22304f"/>' +
          '<circle cx="242" cy="' + (y + 20) + '" r="10" fill="url(#ac)"/>' +
          '<rect x="262" y="' + (y + 9) + '" width="120" height="8" rx="4" fill="#1c2b46"/>' +
          '<rect x="262" y="' + (y + 23) + '" width="80" height="7" rx="3.5" fill="#17233a"/>' +
          '<text x="410" y="' + (y + 25) + '" fill="url(#ac)" font-family="Segoe UI,Arial" font-size="13" font-weight="700">#' + (i + 1) + '</text>';
      })
    ),
    dashboard: frame(
      '<rect x="40" y="50" width="180" height="96" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
      '<polyline points="52,124 84,100 116,112 148,78 180,92 208,64" fill="none" stroke="url(#ac)" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="240" y="50" width="90" height="96" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
      '<text x="255" y="80" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">Revenue</text>' +
      '<text x="255" y="104" fill="#e8edf7" font-family="Segoe UI,Arial" font-size="18" font-weight="700">$48.2k</text>' +
      '<rect x="340" y="50" width="100" height="96" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
      '<circle cx="390" cy="98" r="28" fill="none" stroke="#1c2b46" stroke-width="8"/>' +
      '<circle cx="390" cy="98" r="28" fill="none" stroke="url(#ac)" stroke-width="8" stroke-dasharray="120 176" stroke-linecap="round" transform="rotate(-90 390 98)"/>' +
      grid(4, 1, 40, 168, 92, 78, function (x, y, i) {
        var h = [40, 62, 30, 52][i];
        return '<rect x="' + x + '" y="' + y + '" width="92" height="78" rx="8" fill="#0e1830" stroke="#22304f"/>' +
          '<rect x="' + (x + 14) + '" y="' + (y + 62 - h) + '" width="64" height="' + h + '" rx="4" fill="url(#ac)" opacity=".85"/>';
      })
    ),
    listings: frame(
      grid(3, 2, 40, 48, 118, 96, function (x, y, i) {
        return '<rect x="' + x + '" y="' + y + '" width="118" height="96" rx="8" fill="#0f1c33" stroke="#22304f"/>' +
          '<rect x="' + x + '" y="' + y + '" width="118" height="54" rx="8" fill="#12223d"/>' +
          '<path d="M' + (x + 20) + ' ' + (y + 42) + ' l24 -20 24 20 22 -16 v34 h-92Z" fill="#1c2b46"/>' +
          '<rect x="' + (x + 12) + '" y="' + (y + 64) + '" width="64" height="7" rx="3.5" fill="#1c2b46"/>' +
          '<rect x="' + (x + 12) + '" y="' + (y + 78) + '" width="40" height="7" rx="3.5" fill="url(#ac)"/>';
      })
    ),
    board: frame(
      grid(3, 1, 40, 50, 122, 200, function (x, y, i) {
        var titles = ["Open jobs", "Proposals", "In contract"];
        var cards = [3, 2, 3][i];
        var s = '<rect x="' + x + '" y="' + y + '" width="122" height="200" rx="10" fill="#0f1c33" stroke="#22304f"/>' +
          '<text x="' + (x + 12) + '" y="' + (y + 22) + '" fill="#9aa8c2" font-family="Segoe UI,Arial" font-size="10">' + titles[i] + '</text>';
        for (var k = 0; k < cards; k++) {
          var cy = y + 34 + k * 50;
          s += '<rect x="' + (x + 10) + '" y="' + cy + '" width="102" height="42" rx="7" fill="#0e1830" stroke="#22304f"/>' +
            '<circle cx="' + (x + 24) + '" cy="' + (cy + 14) + '" r="7" fill="url(#ac)"/>' +
            '<rect x="' + (x + 36) + '" y="' + (cy + 9) + '" width="64" height="6" rx="3" fill="#1c2b46"/>' +
            '<rect x="' + (x + 12) + '" y="' + (cy + 27) + '" width="46" height="6" rx="3" fill="#17233a"/>' +
            '<rect x="' + (x + 70) + '" y="' + (cy + 26) + '" width="28" height="8" rx="4" fill="url(#ac)"/>';
        }
        return s;
      })
    ),
    learn: frame(
      '<rect x="40" y="50" width="270" height="170" rx="12" fill="#0f1c33" stroke="#22304f"/>' +
      '<circle cx="175" cy="128" r="30" fill="url(#ac)"/><path d="M166 112l20 16-20 16Z" fill="#0a0f1c"/>' +
      '<rect x="40" y="230" width="270" height="10" rx="5" fill="#1c2b46"/><rect x="40" y="230" width="150" height="10" rx="5" fill="url(#ac)"/>' +
      rows(3, 328, 56, function (y, i) {
        return '<rect x="328" y="' + y + '" width="112" height="46" rx="8" fill="#0e1830" stroke="#22304f"/>' +
          '<rect x="340" y="' + (y + 12) + '" width="18" height="18" rx="4" fill="url(#ac)"/>' +
          '<rect x="366" y="' + (y + 13) + '" width="60" height="7" rx="3.5" fill="#1c2b46"/>' +
          '<rect x="366" y="' + (y + 25) + '" width="40" height="6" rx="3" fill="#17233a"/>';
      })
    )
  };
  function grid(cols, rowN, x0, y0, w, h, fn) {
    var gap = 14, out = "", i = 0;
    for (var r = 0; r < rowN; r++) for (var c = 0; c < cols; c++) {
      out += fn(x0 + c * (w + gap), y0 + r * (h + gap), i++);
    }
    return out;
  }
  function rows(n, x, y0, fn) {
    var gap = 12, out = "";
    for (var i = 0; i < n; i++) out += fn(y0 + i * (48 + gap - 8), i);
    return out;
  }

  /* ---------- projects ---------- */
  var P = [
    { id: "tms", title: "Truck Management System (TMS)", tag: "Logistics · IoT", cats: ["iot", "saas"], scene: "tmsTrack",
      shots: ["tmsTrack", "tmsMetrics", "tmsCam", "tmsVideo"],
      stack: ["NestJS", "PostgreSQL", "MongoDB Atlas", "Redis", "WebSockets", "Docker", "AWS", "Azure"],
      short: "Real-time fleet-tracking backend for mission-critical logistics — live GPS tracking, dashboard metrics, dashcam feeds and event-clip retrieval.",
      long: "I architect the backend services powering a Truck Management System for a US logistics operation. The platform integrates with fleet telematics and IoT hardware — GPS trackers, dashcams and ELDs — to ingest live vehicle location and telemetry. It surfaces real-time tracking on a live map, fleet-wide dashboard metrics (active vehicles, mileage, utilisation, alerts), multi-camera dashcam feeds, and retrieval of event-triggered video clips (harsh braking, speeding, prolonged idle). The data layer spans PostgreSQL, MongoDB Atlas and Redis and is designed for millions of tracking events with low-latency reads, exposed through secure REST APIs and microservices containerised with Docker across AWS and Azure.",
      note: "Interface panels are schematic illustrations of the system, not screenshots of the client's product." },

    { id: "navisavi", title: "Navisavi — Travel Video Marketplace & API", tag: "Video Marketplace", cats: ["saas", "market", "fintech"],
      img: "img/navisavi.webp", shots: ["img/navisavi.webp", "img/navisavi-2.webp", "img/navisavi-3.webp"],
      link: "https://www.navisavitravel.com/",
      stack: ["React", "Next.js", "Redux", "Node.js", "PostgreSQL", "MongoDB", "Mux", "AWS EC2 / S3", "Stripe"],
      short: "Global travel-video marketplace with creator revenue-sharing, secure adaptive streaming and a licensed video API for travel platforms.",
      long: "Navisavi is a worldwide marketplace where creators upload, sell and stream short travel videos, plus a B2B API that lets travel platforms, brands and apps embed pre-cleared, licensed travel video with structured destination and keyword metadata. I worked on secure upload and adaptive streaming with Mux and AWS S3, a revenue-sharing engine with automated Stripe payouts, and a Next.js storefront and video library backed by Node.js APIs over PostgreSQL and MongoDB, deployed on AWS EC2." },

    { id: "moat", title: "MOAT — Hotel & Airline Rating Platform", tag: "Reviews · Ranking", cats: ["market", "saas"], scene: "review",
      stack: ["Node.js", "Express.js", "React.js", "Vue.js", "MongoDB", "PostgreSQL"],
      short: "Video-first review platform for hotels and airlines with a weighted global ranking system.",
      long: "MOAT is a review platform where travellers post short video reviews of hotels and airlines. I built REST APIs in Node.js / Express over MongoDB and PostgreSQL, a weighted global ranking algorithm that scores properties from verified reviews, and moderation dashboards, with client apps in React and Vue." },

    { id: "yureka", title: "Yureka — B2B Video Advertising SaaS", tag: "B2B SaaS", cats: ["saas", "fintech"], scene: "dashboard",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Jest", "Cypress"],
      short: "B2B SaaS for running video ad campaigns — audience targeting with automated hourly billing.",
      long: "Yureka is a B2B platform for planning and running video advertising campaigns. I delivered campaign management, audience targeting and an automated hourly-billing engine, built on a MERN stack and kept above 95% coverage with Jest and Cypress." },

    { id: "alaska", title: "Alaska ERP — Pharmacy POS & Management", tag: "Pharmacy ERP · POS", cats: ["saas"], img: "img/alaska.webp",
      link: "https://www.alaskaerp.com/",
      stack: ["Vue.js", "Vuex", "Node.js", "IndexedDB", "PouchDB", "Socket.IO"],
      short: "Offline-first pharmacy ERP & POS — sale/purchase orders, GRN, tax, discounts and audit — with real-time multi-device sync.",
      long: "Alaska ERP is an offline-first ERP and point-of-sale system for single stores and multi-chain pharmacy brands. I built an offline-capable single-page app with IndexedDB and PouchDB that keeps working without a connection and syncs in real time via Socket.IO once back online. It covers sale and purchase orders, GRN, tax and discount rules, and full audit trails." },

    { id: "tripplets", title: "Tripplets — Flight Search Engine", tag: "Travel · Laravel", cats: ["fintech", "market"], img: "img/tripplets.webp", img2: "img/tripplets-2.webp",
      link: "https://www.tripletstravel.com/",
      stack: ["Laravel (PHP)", "Vue.js", "Nuxt.js", "PostgreSQL", "Stripe", "PayPal"],
      short: "International flight, hotel and car-rental booking with real-time fare aggregation, multi-currency and a dynamic CMS.",
      long: "A global flight-search and booking engine with a Laravel backend and a Vue / Nuxt front end. I built real-time fare aggregation across providers, multi-currency pricing, a dynamic CMS for packages and content, and Stripe / PayPal checkout over PostgreSQL." },

    { id: "dugsi", title: "Online Quran Learning Platform (DUGSI)", tag: "E-Learning", cats: ["learn"], img: "img/dugsi.webp",
      link: "https://dugsi.us/",
      stack: ["MongoDB", "Express.js", "Vue.js", "Node.js", "Zoom API"],
      short: "Live online Quran academy with Admin, Teacher and Student dashboards, quizzes, assignments and a rewards system.",
      long: "DUGSI is an e-learning platform for teaching the Quran online to students in any country. I integrated the Zoom API for live classes, built three role-based dashboards (Admin, Teacher, Student), and added quizzes, assignments and a rewards system, on a MEVN stack." },

    { id: "teenycoder", title: "TeenyCoder — Kids Coding E-Learning", tag: "E-Learning", cats: ["learn", "fintech"], scene: "learn",
      stack: ["Vue.js", "Nuxt.js", "Node.js", "Zoom API", "Easypaisa"],
      short: "Coding e-learning platform for children with live Zoom classes and Easypaisa checkout.",
      long: "TeenyCoder teaches programming to children through live instructor-led sessions. I integrated Zoom for live classes and the Easypaisa payment gateway for secure local transactions, with a Vue / Nuxt front end and Node.js APIs." },

    { id: "lovelyfares", title: "LovelyFares — Travel Agency Platform", tag: "Travel Booking", cats: ["fintech"], img: "img/lovelyfares.webp", img2: "img/lovelyfares-2.webp",
      link: "https://lovelyfares.ca/",
      stack: ["Vue.js", "Node.js", "Express.js", "MongoDB"],
      short: "Booking portal for a TICO/IATA-accredited Canadian travel company with access to millions of airline fares.",
      long: "A booking portal for LovelyFares.ca, part of a fast-growing Canadian travel company. I built search over millions of multi-airline fares including complex multi-leg itineraries, plus package and hotel booking flows." },

    { id: "mainrx", title: "MainRx — Online Pharmacy", tag: "Online Pharmacy", cats: ["market"], img: "img/mainrx.webp", img2: "img/mainrx-2.webp",
      link: "http://themainrx.com",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      short: "US online pharmacy with prescription upload, pharmacist formula matching and same-day delivery scheduling.",
      long: "MainRx is an online pharmacy for US customers. Users order medicine and upload prescriptions, and pharmacists match formulas against each prescription. I added same-day delivery, scheduled shipping and pick-up scheduling flows." },

    { id: "energybh", title: "EnergyBh — Real Estate Marketplace", tag: "Real Estate", cats: ["market"], scene: "listings",
      stack: ["Vue.js", "Nuxt.js", "Node.js", "PostgreSQL"],
      short: "Property buy / sell / rent marketplace connecting agents, agencies and buyers with advanced listing filters.",
      long: "EnergyBh is a real-estate marketplace connecting agents, agencies and buyers. I built advanced multi-facet listing filters, agency and agent profiles, and listing management, with a Vue / Nuxt front end over Node.js and PostgreSQL." },

    { id: "utility", title: "Utility Mechanic — Home Services Marketplace", tag: "Home Services", cats: ["market"], img: "img/utility.webp",
      link: "http://utilitymechanic.herokuapp.com/",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      short: "On-demand marketplace to book electricians, plumbers, painters and carpenters — with claims and complaints handling.",
      long: "A MERN marketplace for home and office services. Customers register, browse and book tradespeople (electrician, plumber, painter, carpenter), pay for completed jobs, and can file claims or complaints against a worker." },

    { id: "freelance", title: "Freelancer Marketplace (Upwork-style)", tag: "Marketplace", cats: ["market", "saas"], scene: "board",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      short: "Two-sided freelancing marketplace — job posting, proposals, contracts, milestones, messaging and reviews.",
      long: "An Upwork-style marketplace connecting freelancers with clients. I built job posting and proposals, contract and milestone tracking, in-app messaging and a review system, on a MERN stack." }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function isImg(s) { return /^(img\/|https?:|\/)/.test(s); }
  function renderShot(s, title) {
    return isImg(s)
      ? '<img src="' + s + '" alt="' + esc(title || "Project") + ' screenshot" loading="lazy">'
      : (scenes[s] || scenes.dashboard);
  }
  function cardMedia(p) {
    return p.img ? renderShot(p.img, p.title) : (scenes[p.scene] || scenes.dashboard);
  }
  function getShots(p) {
    if (p.shots && p.shots.length) return p.shots;
    var a = [];
    if (p.img) a.push(p.img);
    if (p.img2) a.push(p.img2);
    if (!a.length) a.push(p.scene || "dashboard");
    return a;
  }

  var pgrid = $("#projGrid");
  P.forEach(function (p) {
    var el = document.createElement("article");
    el.className = "card reveal";
    el.setAttribute("data-cats", p.cats.join(" "));
    el.innerHTML =
      '<div class="media"><span class="tag">' + esc(p.tag) + '</span>' + cardMedia(p) + '</div>' +
      '<div class="body">' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p>' + esc(p.short) + '</p>' +
        '<div class="stack">' + p.stack.slice(0, 4).map(function (s) { return '<span>' + esc(s) + '</span>'; }).join("") + '</div>' +
        '<span class="more">View details <svg style="width:14px;height:14px"><use href="#i-arrow"/></svg></span>' +
      '</div>';
    el.addEventListener("click", function () { openModal(p); });
    pgrid.appendChild(el);
  });

  /* re-observe newly added reveal cards */
  if (typeof ro !== "undefined") $$("#projGrid .reveal").forEach(function (el) { ro.observe(el); });
  else $$("#projGrid .reveal").forEach(function (el) { el.classList.add("in"); });

  /* filters */
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach(function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    var f = b.getAttribute("data-f");
    $$("#projGrid .card").forEach(function (c) {
      var show = f === "all" || c.getAttribute("data-cats").indexOf(f) > -1;
      c.style.display = show ? "" : "none";
    });
  });

  /* modal */
  var pm = $("#pm");
  var curShots = [];
  function openModal(p) {
    curShots = getShots(p);
    $("#pmMedia").innerHTML = renderShot(curShots[0], p.title);
    var tb = $("#pmThumbs");
    if (curShots.length > 1) {
      tb.style.display = "flex";
      tb.innerHTML = curShots.map(function (s, i) {
        return '<button type="button" data-i="' + i + '"' + (i === 0 ? ' class="active"' : "") + ' aria-label="View ' + (i + 1) + '">' + renderShot(s, p.title) + "</button>";
      }).join("");
    } else {
      tb.style.display = "none";
      tb.innerHTML = "";
    }
    $("#pmTag").textContent = p.tag;
    $("#pmTitle").textContent = p.title;
    $("#pmDesc").textContent = p.long;
    $("#pmStack").innerHTML = p.stack.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
    $("#pmNote").textContent = p.note || "";
    $("#pmNote").style.display = p.note ? "block" : "none";
    $("#pmActions").innerHTML = p.link
      ? '<a class="btn btn-primary" href="' + p.link + '" target="_blank" rel="noopener"><svg><use href="#i-ext"/></svg>Visit live site</a>'
        + '<button class="btn btn-ghost" data-close type="button">Close</button>'
      : '<button class="btn btn-ghost" data-close type="button">Close</button>';
    if (typeof pm.showModal === "function") pm.showModal();
    else pm.setAttribute("open", "");
  }
  function closeModal() { if (typeof pm.close === "function") pm.close(); else pm.removeAttribute("open"); }
  $("#pmThumbs").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    $$("#pmThumbs button").forEach(function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    $("#pmMedia").innerHTML = renderShot(curShots[+b.getAttribute("data-i")]);
  });
  $("#pmClose").addEventListener("click", closeModal);
  pm.addEventListener("click", function (e) {
    if (e.target === pm || e.target.hasAttribute("data-close")) closeModal();
  });
  pm.addEventListener("cancel", function () { closeModal(); });
})();

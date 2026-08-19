/* The Meaning Motive · nav.js · six-door navigation, one source of truth.
   Injects the masthead, header and footer on every page.
   Static fallback for no-JS visitors: each page carries
   <noscript><a href="/sitemap/">Full site navigation</a></noscript>
   and the /sitemap/ page lists the whole site. */

(function () {
  "use strict";

  var DOORS = [
    {
      label: "The Idea", href: "/idea/", rel: "Understand it.",
      children: [
        ["Story", "/story/"],
        ["The Crossings", "/crossings/"],
        ["Keeping Map", "/keeping-map/"],
        ["Field Guide", "/field-guide/"]
      ]
    },
    {
      label: "Research", href: "/research/", rel: "Try to break it.",
      children: [
        ["Research Tree", "/research/programme/"],
        ["Human Agency", "/human-agency/"],
        ["What We Test Next", "/next/"],
        ["What Would Change Our Mind?", "/research/open-problems/"],
        ["Research Neighbourhood", "/research/neighbourhood/"],
        ["Do Some Research", "/research/do-research/"],
        ["Workshop", "/workshop/"]
      ]
    },
    {
      label: "Evidence", href: "/evidence/", rel: "Check what happened.",
      children: [
        ["Evidence Room", "/evidence/"],
        ["Sit the Experiment", "/experiment/"],
        ["Prediction Ledger", "/evidence/predictions/"],
        ["Red Team", "/red-team/"],
        ["Corrections", "/evidence/#corrections"]
      ]
    },
    {
      label: "State of the Bridge", href: "/bridge/", rel: "Watch what changes.",
      children: [
        ["Why a bridge?", "/bridge/"],
        ["Keeping Index", "/keeping-index/"],
        ["Meaning Barometer", "/barometer/"]
      ]
    },
    {
      label: "Tools", href: "/tools/", rel: "Use it.",
      children: [
        ["The Clause", "/clause/"],
        ["BYOM", "/byom/"],
        ["Dilemma Drop", "/dilemma-drop/"],
        ["All tools", "/tools/"]
      ]
    },
    {
      label: "Commons", href: "/commons/", rel: "Join it.",
      children: [
        ["Get Involved", "/community/"],
        ["Replication Club", "/replication-club/"],
        ["Keep Your Own Step", "/keep-your-own-step/"],
        ["What does this mean for us?", "/human-agency/"],
        ["Press", "/press/"],
        ["Governance", "/colophon/"]
      ]
    }
  ];

  var MASTHEAD = "The best-developed current strategy, held with the certainty it deserves \u2013 which is not total.";

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var path = location.pathname;

  function doorIsActive(door) {
    if (path === door.href) return true;
    return door.children.some(function (c) {
      var h = c[1].split("#")[0];
      return h !== "/" && path.indexOf(h) === 0;
    });
  }

  /* ---------- header ---------- */
  function buildHeader() {
    var frag = document.createDocumentFragment();

    frag.appendChild(el("a", { "class": "skip", href: "#main" }, "Skip to content"));
    frag.appendChild(el("div", { "class": "masthead" }, esc(MASTHEAD)));

    var header = el("header", { "class": "site" });
    var bar = el("div", { "class": "bar" });
    bar.appendChild(el("a", { "class": "wordmark", href: "/" }, "The Meaning Motive"));

    var toggle = el("button", {
      "class": "nav-toggle", "aria-expanded": "false", "aria-controls": "mm-doors"
    }, "Menu");

    var nav = el("nav", { "class": "doors6", id: "mm-doors", "aria-label": "Site" });
    var ul = el("ul");

    DOORS.forEach(function (door, i) {
      var li = el("li");
      if (doorIsActive(door)) li.className = "active";
      li.appendChild(el("a", { "class": "doorlink", href: door.href }, esc(door.label)));

      var btn = el("button", {
        "class": "disclose", "aria-expanded": "false",
        "aria-label": "Show " + door.label + " pages"
      }, "+");
      li.appendChild(btn);

      var panel = el("div", { "class": "panel" });
      panel.appendChild(el("span", { "class": "rel" }, esc(door.rel)));
      door.children.forEach(function (c) {
        panel.appendChild(el("a", { href: c[1] }, esc(c[0])));
      });
      li.appendChild(panel);

      btn.addEventListener("click", function () {
        var open = li.classList.toggle("openpanel");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.textContent = open ? "\u2013" : "+";
      });

      ul.appendChild(li);
    });

    nav.appendChild(ul);
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    bar.appendChild(toggle);
    bar.appendChild(nav);
    header.appendChild(bar);
    frag.appendChild(header);
    return frag;
  }

  /* ---------- footer ---------- */
  function buildFooter() {
    var footer = el("footer", { "class": "site" });

    var map = el("div", { "class": "footmap" });
    DOORS.forEach(function (door) {
      var col = el("div");
      col.appendChild(el("h3", null,
        '<a href="' + door.href + '">' + esc(door.label) + "</a>"));
      col.appendChild(el("p", { "class": "rel" }, esc(door.rel)));
      var ul = el("ul");
      door.children.forEach(function (c) {
        var li = el("li");
        li.appendChild(el("a", { href: c[1] }, esc(c[0])));
        ul.appendChild(li);
      });
      col.appendChild(ul);
      map.appendChild(col);
    });
    footer.appendChild(map);

    var meta = el("div", { "class": "footmeta" });
    meta.appendChild(el("div", { "class": "step" },
      '<a href="/keep-your-own-step/" style="color:inherit;text-decoration:none;border-bottom:1px solid var(--line)">The bridge asks all who cross to keep their own step.</a>'));
    meta.appendChild(el("div", null, "No tracking, no cookies, nothing recorded."));
    meta.appendChild(el("div", null,
      "Text and figures \u00A9 2026 Keiron Allen \u00B7 CC BY 4.0, share and adapt with attribution \u00B7 the Clause alone is CC0."));
    meta.appendChild(el("div", { "class": "plate-inline", style: "margin-top:10px" },
      'paper <a href="https://doi.org/10.5281/zenodo.21386302">doi:10.5281/zenodo.21386302</a> \u00B7 ' +
      'dataset <a href="https://doi.org/10.5281/zenodo.21348087">doi:10.5281/zenodo.21348087</a> \u00B7 ' +
      'founding statement <a href="https://doi.org/10.5281/zenodo.21303219">doi:10.5281/zenodo.21303219</a>'));
    var mn = el("nav", null,
      '<a href="/sitemap/">Sitemap</a><a href="/evidence/">Evidence</a><a href="/colophon/">Colophon</a>' +
      '<a href="/licence/">Licence</a><a href="/for-ai/">For AI</a>' +
      '<a href="https://github.com/misterk18370/MeaningMotive">Source</a>' +
      '<a href="mailto:info@themeaningmotive.org">info@</a>');
    meta.appendChild(mn);
    footer.appendChild(meta);
    return footer;
  }

  function init() {
    document.body.insertBefore(buildHeader(), document.body.firstChild);
    document.body.appendChild(buildFooter());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

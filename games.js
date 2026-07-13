/* OpenDoku games registry — the ONE list that every game's 🧩 menu, footer
   nav, and the About page games list are built from. To add a game, add one
   line to the array — or publish through the StepInTheRing Game Engine,
   which inserts the new game above the __DOKU_GAMES_END__ marker itself.
   Each page keeps static links in its HTML as a fallback; this script
   replaces them once it loads. */
window.OPENDOKU_GAMES = [
  { slug: "slopedoku", emoji: "🏔️", name: "SlopeDoku", blurb: "Winter brain games in Roman numerals — bunny slope to double black diamond, plus Avalanche." },
  { slug: "surfdoku", emoji: "🌞", name: "SurfDoku", blurb: "Beach brain games in Roman numerals — kiddie pool to double red flag, plus Riptide." },
  { slug: "minedoku", emoji: "⛏️", name: "MineDoku", blurb: "Mine the numbers that don't belong — every row and column adds to its target. Surface Dig to The Core, plus Lantern memory digs and Cave-In." },
  // __DOKU_GAMES_END__ — the Game Engine inserts new games above this line.
];

(function () {
  var GAMES = window.OPENDOKU_GAMES;
  var HOME = "https://opendoku.com/";
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function fill() {
    var here = location.pathname;

    var menu = document.getElementById("gamesMenu");
    if (menu) {
      var h = '<a href="' + HOME + '">🧩 All games</a>';
      GAMES.forEach(function (g) {
        h += '<a href="/' + g.slug + '/">' + esc(g.emoji) + " " + esc(g.name) + "</a>";
      });
      h += '<div class="sep" aria-hidden="true"></div><a href="' + HOME + 'about/">About OpenDoku</a>';
      menu.innerHTML = h;
    }

    var foot = document.getElementById("gamesFootNav");
    if (foot) {
      var parts = ['<a href="' + HOME + '">🧩 All games</a>'];
      GAMES.forEach(function (g) {
        if (here !== "/" + g.slug + "/") parts.push('<a href="/' + g.slug + '/">' + esc(g.emoji) + " " + esc(g.name) + "</a>");
      });
      parts.push('<a href="' + HOME + 'about/">About OpenDoku</a>');
      foot.innerHTML = parts.join(" &nbsp;·&nbsp; ");
    }

    var list = document.getElementById("gamesAboutList");
    if (list) {
      list.innerHTML = GAMES.map(function (g) {
        return '<li><a href="/' + g.slug + '/">' + esc(g.emoji) + " " + esc(g.name) + "</a> — " + esc(g.blurb) + "</li>";
      }).join("");
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();

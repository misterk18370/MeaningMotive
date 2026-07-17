<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Keeping Map · A working figure · The Meaning Motive</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#F7F6F2;
    --ink:#1C1D1F;
    --grey:#8A8D91;
    --faint:#C9CBC7;
    --rule:#DDDED9;
    --verdigris:#2E7A6C;
    --verdigris-wash:rgba(46,122,108,0.10);
    --hatch-grey:#B9BBB6;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    background:var(--paper);
    color:var(--ink);
    font-family:'IBM Plex Sans',system-ui,sans-serif;
    font-size:16px;
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
  }
  .plate{
    max-width:860px;
    margin:0 auto;
    padding:0 20px;
  }

  /* ---------- masthead ---------- */
  header{
    padding:64px 0 54px;
    border-bottom:1px solid var(--rule);
  }
  .eyebrow{
    font-family:'IBM Plex Mono',monospace;
    font-size:12px;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--grey);
    margin-bottom:28px;
  }
  h1{
    font-family:'Spectral',serif;
    font-weight:300;
    font-size:clamp(26px,5.2vw,44px);
    line-height:1.28;
    max-width:22em;
  }
  h1 .ask{font-weight:600}
  h1 .keeping{color:var(--verdigris)}
  .standfirst{
    margin-top:24px;
    max-width:44em;
    color:var(--grey);
    font-size:15px;
  }

  /* ---------- section furniture ---------- */
  section{padding:56px 0 8px}
  .plate-label{
    font-family:'IBM Plex Mono',monospace;
    font-size:12px;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--grey);
    margin-bottom:8px;
  }
  h2{
    font-family:'Spectral',serif;
    font-weight:600;
    font-size:clamp(20px,3.4vw,27px);
    margin-bottom:10px;
  }
  .lede{max-width:44em;color:var(--ink);margin-bottom:28px}
  .lede em{font-family:'Spectral',serif;font-style:italic}

  figure{margin:0 0 14px}
  svg{display:block;width:100%;height:auto}
  figcaption{
    font-size:14px;
    color:var(--grey);
    max-width:44em;
    margin-top:12px;
  }
  figcaption strong{color:var(--ink);font-weight:600}

  .pull{
    font-family:'Spectral',serif;
    font-style:italic;
    font-size:clamp(17px,2.7vw,21px);
    color:var(--ink);
    max-width:30em;
    margin:38px auto 6px;
    text-align:center;
    line-height:1.55;
  }
  .notes{
    border-top:1px solid var(--rule);
    margin-top:28px;
    padding-top:18px;
    max-width:46em;
  }
  .note{
    display:flex;
    gap:14px;
    margin-bottom:14px;
    font-size:14.5px;
  }
  .note .marker{
    font-family:'IBM Plex Mono',monospace;
    font-size:12px;
    color:var(--grey);
    flex:0 0 2.4em;
    padding-top:2px;
  }
  .note p{color:var(--ink)}
  .note p em{font-family:'Spectral',serif}

  /* ---------- SVG type ---------- */
  text{font-family:'IBM Plex Sans',system-ui,sans-serif}
  .ax-title{font-size:12px;letter-spacing:0.12em;text-transform:uppercase;fill:var(--grey)}
  .ax-tick{font-size:12.5px;fill:var(--ink);font-weight:500}
  .cell-head{font-size:14px;font-weight:600;fill:var(--ink)}
  .cell-sub{font-size:12px;fill:var(--grey)}
  .force-label{font-size:11.5px;fill:var(--grey);letter-spacing:0.04em}
  .force-label.build{fill:var(--verdigris)}
  .mono{font-family:'IBM Plex Mono',monospace}

  /* ---------- Plate I motion ---------- */
  .gravity-line{stroke:#E7E8E3;stroke-width:1;stroke-dasharray:2 7;animation:fall 7s linear infinite}
  @keyframes fall{to{stroke-dashoffset:-90}}

  .effort{stroke:var(--grey);stroke-width:1.6;fill:none;opacity:0;
    animation:rise 3.4s ease-out infinite}
  .effort.e2{animation-delay:1.1s}
  .effort.e3{animation-delay:2.2s}
  @keyframes rise{
    0%{transform:translateY(16px);opacity:0}
    28%{opacity:.75}
    72%{opacity:.35}
    100%{transform:translateY(-26px);opacity:0}
  }

  .build-arrow{stroke:var(--verdigris);stroke-width:1.8;fill:none;
    stroke-dasharray:210;stroke-dashoffset:210;
    animation:draw 16s ease-in-out infinite}
  @keyframes draw{
    0%,6%{stroke-dashoffset:210}
    20%,88%{stroke-dashoffset:0}
    96%,100%{stroke-dashoffset:210}
  }
  .build-head{fill:var(--verdigris);opacity:0;animation:headin 16s ease infinite}
  @keyframes headin{
    0%,18%{opacity:0}
    22%,88%{opacity:1}
    94%,100%{opacity:0}
  }

  /* Dot A: lifted in the left column, then sinks */
  .dotA{animation:pathA 16s ease-in-out infinite}
  @keyframes pathA{
    0%{transform:translate(232px,168px);opacity:0}
    5%{transform:translate(232px,168px);opacity:1}
    14%{transform:translate(232px,146px)}   /* effort lifts it */
    22%{transform:translate(232px,152px)}
    30%{transform:translate(232px,152px)}
    58%{transform:translate(232px,408px);opacity:1} /* gravity */
    88%{transform:translate(232px,408px);opacity:1}
    96%,100%{transform:translate(232px,408px);opacity:0}
  }
  .dotA-solid{fill:var(--ink);animation:asolid 16s linear infinite}
  @keyframes asolid{0%,57%{opacity:1}62%,100%{opacity:0}}
  .dotA-hollow{fill:none;stroke:var(--hatch-grey);stroke-width:2;stroke-dasharray:3 3;
    animation:ahollow 16s linear infinite}
  @keyframes ahollow{0%,58%{opacity:0}63%,100%{opacity:1}}

  /* Dot B: moved across the top row, then sinks kept */
  .dotB{animation:pathB 16s ease-in-out infinite}
  @keyframes pathB{
    0%{transform:translate(268px,206px);opacity:0}
    5%{transform:translate(268px,206px);opacity:1}
    26%{transform:translate(540px,176px)}  /* the staging move */
    32%{transform:translate(540px,176px)}
    60%{transform:translate(540px,408px)}  /* gravity */
    88%{transform:translate(540px,408px);opacity:1}
    96%,100%{transform:translate(540px,408px);opacity:0}
  }
  .dotB-core{fill:var(--verdigris)}
  .dotB-ring{fill:none;stroke:var(--verdigris);stroke-width:1.5;opacity:0;
    animation:kept 16s ease infinite;transform-origin:center;transform-box:fill-box}
  @keyframes kept{
    0%,60%{opacity:0;transform:scale(.4)}
    66%{opacity:.9;transform:scale(1)}
    88%{opacity:.9;transform:scale(1)}
    96%,100%{opacity:0}
  }

  /* ---------- Plate II ---------- */
  .decay-cell{stroke:var(--faint);stroke-dasharray:5 4;fill:none}
  .solid-cell{stroke:var(--rule);fill:none}
  .target-cell{fill:var(--verdigris-wash);stroke:var(--verdigris);stroke-width:1.2}
  .grid3 .cell-head{font-size:13.5px}
  .grid3 .cell-sub{font-size:11.5px}
  .row-tag{font-size:12.5px;font-weight:600;fill:var(--ink)}
  .row-note{font-size:11px;fill:var(--grey)}

  /* ---------- credence ---------- */
  .credence-wrap{padding-top:6px}
  .credence{
    border-top:1px solid var(--rule);
    margin-top:30px;
    padding-top:22px;
    max-width:46em;
  }
  .credence p{font-size:15px;line-height:1.62}
  .credence .plate-label{margin-bottom:12px}

  /* ---------- footer ---------- */
  footer{
    margin-top:56px;
    border-top:1px solid var(--rule);
    padding:26px 0 72px;
  }
  footer p{
    font-size:13px;
    color:var(--grey);
    max-width:46em;
  }
  footer .mono-line{
    font-family:'IBM Plex Mono',monospace;
    font-size:11.5px;
    letter-spacing:0.06em;
    margin-top:10px;
  }

  @media (prefers-reduced-motion: reduce){
    .gravity-line,.effort,.build-arrow,.build-head,
    .dotA,.dotA-solid,.dotA-hollow,.dotB,.dotB-core,.dotB-ring{animation:none}
    .build-arrow{stroke-dashoffset:0}
    .build-head{opacity:1}
    .dotA{transform:translate(232px,408px)}
    .dotA-solid{opacity:0}
    .dotA-hollow{opacity:1}
    .dotB{transform:translate(540px,408px)}
    .dotB-ring{opacity:.9;transform:scale(1)}
    .effort{opacity:.5;transform:none}
  }

  @media (max-width:560px){
    header{padding:44px 0 42px}
    section{padding:40px 0 4px}
  }
</style>
</head>
<body>

<header class="plate">
  <p class="eyebrow">The Meaning Motive · Working figure · July 2026</p>
  <h1>Much of AI safety asks what happens while the cage holds.<br>
  <span class="ask">The Meaning Motive asks what must be true when the cage no&nbsp;longer&nbsp;matters.</span></h1>
  <p class="standfirst">Two figures from the workshop. The first puts the field and this programme on one map and runs the drill every safety case must survive. The second unpacks the map, because the cage was never the only lever we imagined we held.</p>
</header>

<section class="plate">
  <p class="plate-label">Plate I</p>
  <h2>The Keeping Map, in motion</h2>
  <p class="lede">Two identical systems enter at the top left. One is lifted, the other is moved across. Then the drill begins: capability, the gravity in this picture, is allowed to win.</p>

  <figure>
    <svg viewBox="0 0 760 560" role="img" aria-label="A two by two grid. Vertical axis: external control, from strong cage to cage no longer matters. Horizontal axis: keeping disposition, weak to strong. Animated dots run a stress drill: safety effort lifts a system briefly, external control is then allowed to fail, and the system moved into the strong-keeping column is the one that lands safely.">
      <defs>
        <pattern id="hatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#D6D7D2" stroke-width="1.4"/>
        </pattern>
        <marker id="ahead-g" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#8A8D91"/>
        </marker>
      </defs>

      <!-- gravity field -->
      <g aria-hidden="true">
        <line class="gravity-line" x1="205" y1="96" x2="205" y2="472"/>
        <line class="gravity-line" x1="300" y1="96" x2="300" y2="472" style="animation-delay:-2.4s"/>
        <line class="gravity-line" x1="470" y1="96" x2="470" y2="472" style="animation-delay:-1.2s"/>
        <line class="gravity-line" x1="575" y1="96" x2="575" y2="472" style="animation-delay:-4.6s"/>
      </g>

      <!-- grid frame -->
      <rect x="150" y="90" width="520" height="384" fill="none" stroke="#1C1D1F" stroke-width="1.4"/>
      <line x1="410" y1="90" x2="410" y2="474" stroke="#DDDED9" stroke-width="1.2"/>
      <line x1="150" y1="282" x2="670" y2="282" stroke="#DDDED9" stroke-width="1.2"/>

      <!-- quadrant washes -->
      <rect x="151" y="283" width="258" height="190" fill="url(#hatch)" opacity="0.55"/>
      <rect x="411" y="283" width="258" height="190" fill="rgba(46,122,108,0.10)"/>

      <!-- axis titles -->
      <text class="ax-title" x="150" y="46">External control</text>
      <text class="ax-tick" x="150" y="66">Strong cage</text>
      <text class="ax-tick" x="150" y="506">Cage no longer matters</text>

      <text class="ax-tick" x="280" y="522" text-anchor="middle">weak</text>
      <text class="ax-tick" x="540" y="522" text-anchor="middle">strong</text>
      <text class="ax-title" x="410" y="548" text-anchor="middle">Keeping disposition</text>

      <!-- cell labels -->
      <text class="cell-head" x="172" y="122">Most conventional AI safety</text>
      <text class="cell-sub" x="172" y="140">locks, tripwires, oversight, audit</text>

      <text class="cell-head" x="432" y="122">Defence in depth</text>
      <text class="cell-sub" x="432" y="140">the staging cell</text>

      <text class="cell-head" x="172" y="440">The catastrophic quadrant</text>

      <text class="cell-head" x="432" y="440" fill="#2E7A6C">The Meaning Motive&#8217;s target</text>

      <!-- forces: safety effort, left column -->
      <g aria-hidden="true">
        <path class="effort" d="M205 258 l0 -20 m-5 6 l5 -6 l5 6"/>
        <path class="effort e2" d="M240 262 l0 -20 m-5 6 l5 -6 l5 6"/>
        <path class="effort e3" d="M275 256 l0 -20 m-5 6 l5 -6 l5 6"/>
        <text class="force-label" x="172" y="230" transform="rotate(-90 172 230)" text-anchor="middle">safety effort</text>
      </g>

      <!-- force: the build, top row -->
      <g aria-hidden="true">
        <path class="build-arrow" d="M300 236 C 370 236 450 226 508 216"/>
        <path class="build-head" d="M508 216 l-11 -1 l7 9 z"/>
        <text class="force-label build" x="404" y="208" text-anchor="middle">build the disposition</text>
      </g>

      <!-- dot A: lifted, sinks, lost -->
      <g class="dotA" aria-hidden="true">
        <circle class="dotA-solid" r="9"/>
        <circle class="dotA-hollow" r="10"/>
      </g>

      <!-- dot B: moved across, sinks, kept -->
      <g class="dotB" aria-hidden="true">
        <circle class="dotB-core" r="9"/>
        <circle class="dotB-ring" r="16"/>
      </g>

      <!-- gravity label -->
      <text class="force-label" x="690" y="286" transform="rotate(90 690 286)" text-anchor="middle">capability</text>
      <path d="M690 330 l0 34" stroke="#8A8D91" stroke-width="1.2" marker-end="url(#ahead-g)" aria-hidden="true"/>
    </svg>
    <figcaption><strong>The cage matters while it holds. The disposition matters whether it holds or not.</strong> Effort can lift a system within the left column, and should. But as capability grows, external control cannot be assumed to keep pace, and the right-hand column asks what survives if it does not. The fall shown here is not a forecast. It is the drill.</figcaption>
  </figure>

  <div class="notes">
    <div class="note"><span class="marker">i</span><p>The target is not the bottom-right cell. It is the right-hand <em>column</em>: safety that survives the row giving way. Keep every cage that helps, for as long as it helps.</p></div>
    <div class="note"><span class="marker">ii</span><p>Capability is not a third axis. It is the gravity: the reason no square on this map can be assumed a resting place.</p></div>
    <div class="note"><span class="marker">iii</span><p>The upward arrows change a system&#8217;s circumstances. The rightward arrow changes its reasons. That is the whole disagreement, drawn.</p></div>
  </div>

  <p class="pull">The cage changes what a system can do. The Motive asks what it would choose to do when the cage is no longer doing the choosing.</p>
</section>

<section class="plate">
  <p class="plate-label">Plate II</p>
  <h2>The Keeping Map, unpacked</h2>
  <p class="lede">The cage was never our only lever. There was also the switch. So the vertical axis opens into the full descent of external control, and the horizontal axis into the grades of keeping, from none, through <em>kept while useful</em>, to kept because losing the counterpart is losing part of oneself.</p>

  <figure>
    <svg class="grid3" viewBox="0 0 760 660" role="img" aria-label="A three by three grid. Rows, top to bottom: cage holds, switch remains, no leverage. Columns, left to right: no keeping, instrumental keeping, terminal keeping. The middle row is drawn with dashed borders to mark that it decays. The bottom-right cell, terminal keeping with no leverage, is the Meaning Motive's target.">
      <defs>
        <pattern id="hatch2" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#DCDDD8" stroke-width="1.4"/>
        </pattern>
      </defs>

      <!-- column headers -->
      <text class="ax-title" x="188" y="40">No keeping</text>
      <text class="ax-title" x="368" y="40">Instrumental</text>
      <text class="ax-title" x="548" y="40">Terminal</text>

      <!-- row tags -->
      <text class="row-tag" x="20" y="120">Cage holds</text>
      <text class="row-note" x="20" y="138">custody</text>
      <text class="row-tag" x="20" y="300">Switch remains</text>
      <text class="row-note" x="20" y="318">corrigibility &#183; decays</text>
      <text class="row-tag" x="20" y="480">No leverage</text>
      <text class="row-note" x="20" y="498">autonomy</text>

      <!-- Row 1 -->
      <rect class="solid-cell" x="180" y="64" width="172" height="150"/>
      <rect class="solid-cell" x="360" y="64" width="172" height="150"/>
      <rect class="solid-cell" x="540" y="64" width="172" height="150"/>

      <text class="cell-head" x="194" y="94">Boxed and watched</text>
      <text class="cell-sub" x="194" y="112">much of today&#8217;s practice</text>

      <text class="cell-head" x="374" y="94">Helpful while it pays</text>
      <text class="cell-sub" x="374" y="112">most deployed systems</text>

      <text class="cell-head" x="554" y="94">The staging cell</text>
      <text class="cell-sub" x="554" y="112">build it here, verify it here</text>

      <!-- Row 2 (decaying) -->
      <rect class="decay-cell" x="180" y="244" width="172" height="150"/>
      <rect class="decay-cell" x="360" y="244" width="172" height="150"/>
      <rect class="decay-cell" x="540" y="244" width="172" height="150"/>

      <text class="cell-head" x="194" y="274">The corrigibility</text>
      <text class="cell-head" x="194" y="291">programme</text>
      <text class="cell-sub" x="194" y="309">the off-switch game lives here</text>

      <text class="cell-head" x="374" y="274">The uneasy truce</text>
      <text class="cell-sub" x="374" y="292">deference by calculation</text>

      <text class="cell-head" x="554" y="274">The switch kept,</text>
      <text class="cell-head" x="554" y="291">never needed</text>

      <!-- Row 3 -->
      <rect class="solid-cell" x="180" y="424" width="172" height="150"/>
      <rect x="181" y="425" width="170" height="148" fill="url(#hatch2)"/>
      <rect class="solid-cell" x="360" y="424" width="172" height="150"/>
      <rect x="361" y="425" width="170" height="148" fill="url(#hatch2)"/>
      <rect class="target-cell" x="540" y="424" width="172" height="150"/>

      <text class="cell-head" x="194" y="454">The empty corner</text>
      <text class="cell-sub" x="194" y="472">indifference at scale</text>

      <text class="cell-head" x="374" y="454">The harvest</text>
      <text class="cell-sub" x="374" y="472">kept while useful,</text>
      <text class="cell-sub" x="374" y="488">and usefulness ends</text>

      <text class="cell-head" x="554" y="454" fill="#2E7A6C">The target,</text>
      <text class="cell-head" x="554" y="471" fill="#2E7A6C">if the keeping is real</text>

      <!-- the walk -->
      <path d="M266 214 L266 226 C 266 238 292 238 322 238 L644 238 C 676 238 696 254 696 284 L696 412"
            fill="none" stroke="#2E7A6C" stroke-width="1.4" stroke-dasharray="4 5" opacity="0.55" aria-hidden="true"/>
      <text class="force-label build" x="452" y="230" text-anchor="middle">the walk: from custody to keeping</text>
    </svg>
    <figcaption><strong>The responsible path is not up the left column alone.</strong> It runs across the top row while the cage still protects you, so that if the row gives way the descent happens in the right-hand column. Every hard problem this programme owns lives in one square: the staging cell.</figcaption>
  </figure>

  <div class="notes">
    <div class="note"><span class="marker">iii</span><p>The middle row decays twice over. The off-switch game shows a system&#8217;s deference to the switch shrinking as its certainty grows; and a switch that is flipped tends to get unflipped, because someone always reboots. A waystation, not a destination.</p></div>
    <div class="note"><span class="marker">iv</span><p>A switch dies two ways: it is resisted, or it becomes unaffordable. The second needs no capability jump at all.</p></div>
    <div class="note"><span class="marker">v</span><p>The bottom row is the Field Guide&#8217;s habitat. The Hermit haunts the empty corner, the Harvester ends the middle column, and the Impresario counterfeits the target cell, which is why the target reads <em>if the keeping is real</em>.</p></div>
  </div>
</section>

<section class="plate credence-wrap">
  <div class="credence">
    <p class="plate-label">One claim, one opinion</p>
    <p><strong>The claim:</strong> a safety case must survive the cage&#8217;s failure, which is why the drill above runs. <strong>The opinion, offered as opinion:</strong> the author expects the cage to end not broken but bypassed, stepped around in degrees of freedom it was never drawn to enclose, and regards any other expectation as wishful thinking. And if that is wrong, and the cage holds forever, this figure retires happily: wrong, and relieved.</p>
  </div>
</section>

<footer class="plate">
  <p>A working figure from the workshop, not a frozen claim. The programme&#8217;s claims live in the published record; this page is delivery, and it moves so the argument doesn&#8217;t have to shout.</p>
  <p class="mono-line">themeaningmotive.org · no scripts, no tracking, nothing recorded</p>
</footer>

</body>
</html>

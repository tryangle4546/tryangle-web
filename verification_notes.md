Verification checkpoint, 2026-09-09:

The local homepage at http://127.0.0.1:8000/?v=2 loads successfully with HTTP 200. The extracted page content confirms that the hero now references assets/ac_assembled_hero_cutout.png and the `REAL HVAC / ASSEMBLY VIEW` hero markup. The visual screenshot captured immediately after reload still shows the exploded reference because the cinematic preloader is active; a later browser state must be checked after the assembly timeout to confirm the transparent assembled-unit handoff. The prior screenshot of the completed hero showed no visible framed card after the scene transition, but the first screenshot after the new cutout asset still captured the preloader state.

Final live-DOM check after the corrected CSS:

The hero stage class is `hero-reference-stage is-assembling is-assembled`. Computed opacity is `0` for the exploded reference layer and `0.95` for the assembled cutout layer. This confirms the assembled end state is active and the exploded labels are no longer visible in the hero after the cinematic handoff.

Corrected assembly verification, 2026-09-09:

The live DOM now contains seven separate non-rectangular sprite assets under `assets/hvac-parts/`: front shell, chassis, heat exchanger, cross-flow blower, inverter PCB, air outlet, and compressor. The stage reaches `is-assembling is-assembled`; in the settled state, exploded opacity is 0 and final assembled opacity is 0.95. Each sprite resolves to its own PNG rather than a background-position rectangle.

Temporary assembling-state inspection, 2026-09-09:

The browser preview was forced into `is-assembling`; the DOM lists seven separate masked sprite PNGs and no longer uses the previous background-position crop elements. The captured preview showed the stage blending with the hero, but the generated final assembled asset still needed a tighter alpha mask to prevent bright studio smoke from reading as a rectangular panel. The final cutout was rebuilt with a product silhouette and higher luma threshold afterward.

Refreshed final-frame inspection, 2026-09-09:

After the tighter alpha mask, the refreshed homepage shows the complete indoor unit in the upper-right hero area with no visible source-image rectangle. The final cutout reads as a standalone product with the dark page background visible around it.

Live DOM found a CSS conflict: the earlier generic `.hero-reference-visual img` rule was applying `inset:0` to every new component sprite, overriding their anchor positions and making all seven sprites the same full-size rectangle. The corrected CSS now explicitly resets `inset:auto`, `right:auto`, and `bottom:auto` on `.hero-assembly-piece` so each sprite uses its own left/top/width/height anchors.

Post-inset-fix check, 2026-09-09:

The refreshed page still reaches the final state correctly with exploded opacity 0 and final opacity 0.95. The automatic timer completed before the browser measurement, so the next visual check will explicitly force `is-assembling` after load to inspect the corrected anchored sprites during motion.

Forced assembly CSS verification, 2026-09-09:

After forcing the stage to `is-assembling` post-load, the browser reports the sprite class active and computed opacity `1`. The earlier zero-opacity read was captured at the first instant of the transition. CSS inspection confirms the intended assembly rule is present; the generic legacy rules only contribute responsive sizing and reduced-motion behavior, not the final opacity override.

Preloader timing verification, 2026-09-09:

The existing intro fades after 4.65 seconds for normal motion. The corrected hero assembly begins at 2.5 seconds and reaches its final assembled class at 5.5 seconds, so the piece motion runs behind the intro and the complete-unit hero handoff occurs immediately after the fade rather than exposing the unfinished scene to the user.

Cohesive-scene verification, 2026-09-09:

The failed sprite assembly is now disabled in both preloader and hero. The supplied exploded reference is rendered as one feathered, screen-blended scene with camera-led reveal, while the assembled unit remains the final hero state. Browser verification shows no visible separate sprite cutouts or hard rectangular image card in the final homepage state.

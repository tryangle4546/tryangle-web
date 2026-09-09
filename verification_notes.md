Verification checkpoint, 2026-09-09:

The local homepage at http://127.0.0.1:8000/?v=2 loads successfully with HTTP 200. The extracted page content confirms that the hero now references assets/ac_assembled_hero_cutout.png and the `REAL HVAC / ASSEMBLY VIEW` hero markup. The visual screenshot captured immediately after reload still shows the exploded reference because the cinematic preloader is active; a later browser state must be checked after the assembly timeout to confirm the transparent assembled-unit handoff. The prior screenshot of the completed hero showed no visible framed card after the scene transition, but the first screenshot after the new cutout asset still captured the preloader state.

Final live-DOM check after the corrected CSS:

The hero stage class is `hero-reference-stage is-assembling is-assembled`. Computed opacity is `0` for the exploded reference layer and `0.95` for the assembled cutout layer. This confirms the assembled end state is active and the exploded labels are no longer visible in the hero after the cinematic handoff.

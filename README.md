# Skydive

Just Cause 2's grappling hook, parachute and skydiving in Skyrim, with Rico's animations, canopy and sounds built from your own copy of Just Cause 2 (SKSE plugin).

**Skydive is made by [apinanaivot](https://github.com/apinanaivot).** All credit for the mod goes to them.

- Original project: https://github.com/apinanaivot/Skydive
- Report bugs and ask questions there: https://github.com/apinanaivot/Skydive/issues
- Upstream release packaged here: [1.0.1](https://github.com/apinanaivot/Skydive/releases/tag/1.0.1) (commit [`dce7254`](https://github.com/apinanaivot/Skydive/tree/dce7254c950b9e68e0b4479997fd473388c3967f))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> Bugs in the mod itself go to the author's issue tracker above; problems with the one-click install go to this repository's issues.

## What you need

- **The Elder Scrolls V: Skyrim Special Edition** ([Steam](https://store.steampowered.com/app/489830/)): tested on 1.7.104 (Anniversary Edition runtime); not VR.
- **Just Cause 2** ([Steam](https://store.steampowered.com/app/8190/)).
- skse64: the build for your Skyrim runtime; start Skyrim with skse64_loader.exe (https://skse.silverlock.org/).
- address-library-skse: the file for your Skyrim runtime ("All in one (Anniversary Edition)" for 1.6 / 1.7) (https://www.nexusmods.com/skyrimspecialedition/mods/32444).
- Windows and the [SIGF app](https://sigf.ai). The app installs  for you.

## Install

In the SIGF app, open **Skydive** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. `Skydive-0.1.0.zip` comes from the author's own release.

### Good to know

- You need Skyrim Special Edition / Anniversary Edition on PC (tested on 1.7.104) and Just Cause 2 installed (Steam, GOG or any version). Install SKSE64 and Address Library for SKSE Plugins first (links above).
- One step after Install, once: open your Skyrim folder, then Data\Skydive Installer, and run Skydive-Installer.exe. It finds Just Cause 2 and Skyrim (Browse... if a line is red), leave "Install the files into" as filled in (Skyrim's Data folder) and click Install; it says Done after a minute or two. It builds the animations, parachute, hook and sounds from your own Just Cause 2: nothing from Just Cause 2 is downloaded. Without this step the mod does nothing.
- Start Skyrim with skse64_loader.exe. G fires the grapple (iGrappleKey in Data\SKSE\Plugins\Skydive.ini), Jump in the air opens the parachute, fall from high up to skydive, F10 opens the options.
- The mod is downloaded from the author's own release and installed into Skyrim's Data folder; Restore removes it. Restore does not remove what Skydive-Installer.exe built: after Restore, delete Data\meshes\jc2mech, Data\textures\jc2mech and Data\sound\fx\jc2mech by hand.
- Beta, first release: report bugs to the author on the upstream issue tracker.

## What this repository holds

Skydive has no license (no LICENSE file), so SIGF may not rehost it. This repository holds **only SIGF's own files**, never the author's:

1. This README, `sigf/` (the script that built the recipe, for reference) and `mashup.json` (the SIGF app recipe).
2. Not here: `Skydive-0.1.0.zip` (sha256 `89138470163a3f00aa7ae3965cbbd7a2884cb0aaddbbeeb7995e3fc5fc9ada93`). The app downloads it on the player's demand from the author's release, as released: https://github.com/apinanaivot/Skydive/releases/download/1.0.1/Skydive-0.1.0.zip
3. The release `v0.1.0`, which has no assets: the recipe's only download is the author's file above.

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| Skydive (`Skydive-0.1.0.zip`, the author's release file) | no license file: all rights reserved by apinanaivot. Not stored here; the app downloads it from the author's release | https://github.com/apinanaivot/Skydive |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes Skydive installable in one click, credited to apinanaivot. If you are the author and want anything changed or taken down, open an issue here.

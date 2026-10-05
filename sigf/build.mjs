// Skydive (apinanaivot, no license): Just Cause 2's grapple, reel, parachute and skydive on Skyrim's player, an SKSE
// plugin. No license, so upstream fetch (PLATFORM-SPEC section 4, "Upstream fetch"): Skydive-0.1.0.zip is downloaded
// by the app from the author's release `1.0.1` as released, never rehosted. SIGFAI/skydive hosts only the recipe.
//
// The zip is rooted at Data (SKSE/Plugins/Skydive.dll + .ini, "Skydive Installer/" = a PyInstaller one-folder exe,
// "Skydive - README.txt"), so it unpacks into {game}/Data as released, no `root`. The plugin is inert until the player
// runs "Skydive Installer\Skydive-Installer.exe" once: it builds the JC2-derived animations, canopy/hook/rope meshes
// and sounds from the player's own Just Cause 2 and Skyrim installs. It writes into the folder holding
// SKSE/Plugins/Skydive.dll, found next to or above its own folder (installer/install.py `mod_folder()`), i.e.
// {game}/Data: meshes\jc2mech, textures\jc2mech, sound\fx\jc2mech. The app never runs it (a player step), and those
// built files are written after the snapshot, so Restore does not remove them (notes say which folders to delete).
//   node library/skydive/build.mjs       (outputs: library/lib.mjs)
import { asset, card, dl, emit, pinned } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/apinanaivot/Skydive', tag: '1.0.1', commit: 'dce7254c950b9e68e0b4479997fd473388c3967f', // tag -> commit
  authors: ['apinanaivot'],
  zip: { file: 'Skydive-0.1.0.zip', sha256: '89138470163a3f00aa7ae3965cbbd7a2884cb0aaddbbeeb7995e3fc5fc9ada93' }, // = GitHub digest, 2026-10-05
};
const ID = 'skydive', VERSION = '0.1.0', NAME = 'Skydive';
const TAGLINE = 'Just Cause 2\'s grappling hook, parachute and skydiving in Skyrim, with Rico\'s animations, canopy and sounds built from your own copy of Just Cause 2 (SKSE plugin).';

const upUrl = `${UP.repo}/releases/download/${UP.tag}/${UP.zip.file}`;
const mod = asset(UP.zip.file, await pinned(upUrl, UP.zip.sha256), { zipped: true, upstream: upUrl });
const assets = [mod];

const make = (urls, set) => ({
  id: `sigf/${ID}`,
  version: VERSION,
  name: NAME,
  tagline: TAGLINE,
  kind: 'mashup',
  games: [
    { game: 'skyrim', role: 'host', label: 'The Elder Scrolls V: Skyrim Special Edition', engine: 'Skyrim Special Edition + SKSE64 plugin (C++, CommonLibSSE-NG 9.3.0)',
      apps: { steam: '489830' }, runtime: 'tested on 1.7.104 (Anniversary Edition runtime); not VR' },
    { game: 'justcause2', role: 'guest', label: 'Just Cause 2', apps: { steam: '8190' }, note: 'read by the author\'s asset builder on your PC (any version); never started' },
  ],
  requires: [
    { id: 'skse64', page: 'https://skse.silverlock.org/', license: 'no rehosting (skse64_readme.txt: link to skse.silverlock.org)', note: 'the build for your Skyrim runtime; start Skyrim with skse64_loader.exe' },
    { id: 'address-library-skse', page: 'https://www.nexusmods.com/skyrimspecialedition/mods/32444', license: 'Nexus Mods download only', note: 'the file for your Skyrim runtime ("All in one (Anniversary Edition)" for 1.6 / 1.7)' },
  ],
  install: [
    { game: 'skyrim', strategy: 'game-dir-snapshot', loader: 'skse64', files: [
      // Upstream file as released, rooted at Data. contents lists every entry (the installer's 1,020 runtime files too).
      { src: mod.name, dst: '{game}/Data', unpack: true, contents: mod.contents, ...dl(mod, urls) },
    ] },
  ],
  // exe: SKSE's loader (the app does not read it yet; the notes tell the player). Just Cause 2 is never started.
  launch: [{ game: 'skyrim', args: [], exe: 'skse64_loader.exe' }],
  files: set.map(a => ({ name: a.name, ...dl(a, urls) })),
  source: {
    repo: UP.repo, license: 'No license (upstream download)', upstream_license: null, fetch: 'upstream', tag: UP.tag, commit: UP.commit,
    hosted: `https://github.com/SIGFAI/${ID}`,
    linked: [{ name: 'CommonLibSSE-NG', version: 'v9.3.0', repo: 'https://github.com/alandtse/CommonLibSSE-NG', license: 'GPL-3.0-or-later WITH Modding Exception' }],
  },
  media: {},
  built_by: { author: UP.authors[0], authors: UP.authors, packaged_by: 'SIGF' },
  idea_by: UP.authors[0],
  built_at: '2026-10-05T00:00:00.000Z',
  ...card(UP.repo),
  notes: [
    'You need Skyrim Special Edition / Anniversary Edition on PC (tested on 1.7.104) and Just Cause 2 installed (Steam, GOG or any version). Install SKSE64 and Address Library for SKSE Plugins first (links above).',
    'One step after Install, once: open your Skyrim folder, then Data\\Skydive Installer, and run Skydive-Installer.exe. It finds Just Cause 2 and Skyrim (Browse... if a line is red), leave "Install the files into" as filled in (Skyrim\'s Data folder) and click Install; it says Done after a minute or two. It builds the animations, parachute, hook and sounds from your own Just Cause 2: nothing from Just Cause 2 is downloaded. Without this step the mod does nothing.',
    'Start Skyrim with skse64_loader.exe. G fires the grapple (iGrappleKey in Data\\SKSE\\Plugins\\Skydive.ini), Jump in the air opens the parachute, fall from high up to skydive, F10 opens the options.',
    'The mod is downloaded from the author\'s own release and installed into Skyrim\'s Data folder; Restore removes it. Restore does not remove what Skydive-Installer.exe built: after Restore, delete Data\\meshes\\jc2mech, Data\\textures\\jc2mech and Data\\sound\\fx\\jc2mech by hand.',
    'Beta, first release: report bugs to the author on the upstream issue tracker.',
  ],
});

// No app fixture: the zip is the author's unlicensed file (24.5 MB).
emit({ slug: ID, version: VERSION, assets, fixtureAssets: null, make });

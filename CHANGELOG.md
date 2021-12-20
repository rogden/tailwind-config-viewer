# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.3]

### Fixed
- [#51](https://github.com/rogden/tailwind-config-viewer/issues/51) Tailwind v3 not included in peerDependencies

## [1.6.2]

### Fixed
- [#46](https://github.com/rogden/tailwind-config-viewer/issues/46) Incorrect rendered font size when font size is declared as an array in Tailwind 2.0 (bug introduced in v1.6.0)

## [1.6.1]

### Fixed
- Color section removed from config viewer

## [1.6.0]

### Added

- [#30](https://github.com/rogden/tailwind-config-viewer/issues/30) Output current Tailwind version

### Fixed

- [#32](https://github.com/rogden/tailwind-config-viewer/issues/32) Font sizes don't always appear sorted by font size
- [#33](https://github.com/rogden/tailwind-config-viewer/issues/33) ESLint warning in stickyEvents module
- [#44](https://github.com/rogden/tailwind-config-viewer/issues/44) Don't display sections that have been disabled in corePlugins

### Changed

- Various UI improvements ([#35](https://github.com/rogden/tailwind-config-viewer/issues/24) [#36](https://github.com/rogden/tailwind-config-viewer/issues/36), [#39](https://github.com/rogden/tailwind-config-viewer/issues/39),) by [@olets](https://github.com/olets)


## [1.5.1] - 2021-03-16

### Fixed

- Config viewer not working with @nuxtjs/tailwindcss module 4.x+ [Issue](https://github.com/nuxt-community/tailwindcss-module/issues/297)

## [1.5.0] - 2021-01-22

### Added

- [#24](https://github.com/rogden/tailwind-config-viewer/issues/24) `typographyExample` config option
- `baseFontSize` config option
- [#23](https://github.com/rogden/tailwind-config-viewer/issues/23) Display equivalent pixel value for any rem value
- [#25](https://github.com/rogden/tailwind-config-viewer/issues/25) Highlight current section in side nav

### Fixed

- Screen section class name prefix now uses separator value from config file
- Remove DEFAULT suffix from ease class name when using Tailwind 2.0

### Changed

- Moved Vue related deps to devDeps to prevent uncessary install

## [1.4.0] - 2020-12-21

### Added

- Copy multiple classes via shift+click
- Sticky Color and Spacing section header controls for easier access while scrolling
- Mobile breakpoint improvements

### Fixed

- Namespaced dark mode local storage key to avoid conflicts with apps running on same port (Nuxt)

## [1.3.1] - 2020-12-13

### Fixed

- Global `npx tailwind-config-viewer` command error due to missing module

## [1.3.0] - 2020-12-13

### Added

- Ability to serve config viewer via middleware

### Fixed

- themeReplacements not working correctly [Issue](https://github.com/rogden/tailwind-config-viewer/issues/18).
- Labels were displaying -DEFAULT for certain values when used with Tailwind 2.0
- Font Size labels were displaying array instead of font size value when used with Tailwind 2.0

### Changed

- Tailwind is now peer dependency. This change allows the resolving of the Tailwind config to use the same version of Tailwind as your project. Previously, if you project was using Tailwind 2.0, the config displayed in the config viewer would use the Config Viewers version of tailwind resulting in the wrong default values in some instances.

## [1.2.4] - 2020-10-31

### Fixed

- Selected color property not referencing correct theme color object. Previously background, text and border were all referencing `theme.colors`. They now correctly reference `theme.backgroundColors`, `theme.textColors` and `theme.borderColors`.

## [1.2.3] - 2020-10-14

### Fixed

- Extra dash added to Tailwind config prefix value [Issue](https://github.com/rogden/tailwind-config-viewer/issues/14)

## [1.2.2] - 2020-09-05

### Added

- Ability to replace theme values used in the config viewer [Issue](https://github.com/rogden/tailwind-config-viewer/issues/11)

## [1.2.1] - 2020-09-02

### Fixed

- Incorrect dark mode button hover color

## [1.2.0] - 2020-08-29

### Added

- Transitions Section
- Dark Mode

### Changed

- Made spacing and sizing of section rows more consistent
- Removed divider between text section rows

## [1.1.3] - 2020-08-17

### Fixed

- `export` command error [Issue](https://github.com/rogden/tailwind-config-viewer/issues/9)

## [1.1.2] - 2020-07-28

### Added

- Demo of viewer using default Tailwind config

### Fixed

- Asset paths are now relative enabling static export to be hosted in subdirectories

## [1.1.1] - 2020-07-28

### Fixed

- Error due to missing lib directory in npm package [Issue](https://github.com/rogden/tailwind-config-viewer/issues/7)

## [1.1.0] - 2020-07-27

### Added

- `export` command to export the viewer for static hosting
- `serve` command to serve the viewer. This is the default command and equivalent to running `tailwind-config-viewer` without specifying a command.

## [1.0.0] - 2020-07-21

- Initial Release

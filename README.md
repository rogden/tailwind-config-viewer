# Tailwind Config Viewer

![Screenshot of UI](https://github.com/rogden/tailwind-config-viewer/raw/master/ui-example.jpg)

Tailwind Config Viewer is a local UI tool for visualizing your Tailwind CSS configuration file. Keep it open during development to quickly reference custom Tailwind values/classes. Easily navigate between sections of the configuration and copy class names to your clipboard by clicking on them. 

## Installation

### NPX
Run `npx tailwind-config-viewer` from within the directory that contains your Tailwind configuration file.

### Globally
`npm i tailwind-config-viewer`

### Locally
`npm i tailwind-config-viewer -D`

## Usage
Run the `tailwind-config-viewer` command from within the directory that contains your Tailwind configuration file.

## Options
There are a few options you can provide to the `tailwind-config-viewer` command.

|Option|Default|Description|
|----|----|----|
|-p, --port|`3000`|The port to run the viewer on. If occupied it will use next available port.|
|-o, --open|`false`|Open the viewer in default browser|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|

## Roadmap
- [ ] Add support for loading custom fonts / font family section
- [ ] Add Transition section
- [ ] Dark Mode toggle
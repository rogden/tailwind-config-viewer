# Tailwind Config Viewer

![Screenshot of UI](https://github.com/rogden/tailwind-config-viewer/raw/master/ui-example.jpg)

Tailwind Config Viewer is a local UI tool for visualizing your Tailwind CSS configuration file. Keep it open during development to quickly reference custom Tailwind values/classes. Easily navigate between sections of the configuration and copy class names to your clipboard by clicking on them. 

**[Demo using the default Tailwind config](https://rogden.github.io/tailwind-config-viewer/)**

## Installation

### NPX
Run `npx tailwind-config-viewer` from within the directory that contains your Tailwind configuration file.

### Globally
`npm i tailwind-config-viewer -g`

### Locally
`npm i tailwind-config-viewer -D`

When installing locally, you can add an entry into the package.json scripts field to run and open the viewer:

```json
"scripts": {
  "tailwind-config-viewer": "tailwind-config-viewer -o"
}
```

## Usage

Run the `tailwind-config-viewer` command from within the directory that contains your Tailwind configuration file.

## Commands

### serve (default)

The `serve` command is the default command. Running `tailwind-config-viewer` is the same as `tailwind-config-viewer serve`. 

**Options**

|Option|Default|Description|
|----|----|----|
|-p, --port|`3000`|The port to run the viewer on. If occupied it will use next available port.|
|-o, --open|`false`|Open the viewer in default browser|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|

### export

Exports the viewer to a directory that can be uploaded to a static host. It accepts both the src and output directories path as arguments. 

`tailwind-config-viewer export ./source-dir ./output-dir`

If a `source directory` isn't specificied it will use `dist`.
If an `output directory` isn't specificied it will be output to `tcv-build`.

**Options**

|Option|Default|Description|
|----|----|----|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|


## Roadmap

- [x] Add static export 
- [ ] Add support for loading custom fonts / font family section
- [ ] Add Transition section
- [ ] Dark Mode toggle
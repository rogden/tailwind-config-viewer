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
|--css|`style.css`| Path to your stylesheet file (CSS). Inject CSS to head element of config viewer. This is handy for defining CSS variables|

### export

Exports the viewer to a directory that can be uploaded to a static host. It accepts the output directory path as its sole argument. 

`tailwind-config-viewer export ./output-dir`

If an output directory isn't specificied it will be output to `tcv-build`.

**Options**

|Option|Default|Description|
|----|----|----|
|-c, --config|`tailwind.config.js`|Path to your Tailwind config file|

## Configuration

You can declare a `configViewer` property in your Tailwind configuration's theme object in order to customize certain aspects of the config viewer.

```js
module.exports = {
  theme: {
    // ...your Tailwind theme config
    configViewer: {
      // ... configViewer Options
    }
  }
}
```
### themeReplacements

In some instances you may want to replace values used in your Tailwind config when it is displayed in the config viewer. One scenario where this is necessary is when you are using CSS variables for your theme values:

```js
module.exports = {
  theme: {
    colors: {
      black: 'var(--color-black)'
    }
  }
}
```

In order for the config viewer to properly display this color, you need to provide a replacement for it:

```js
module.exports = {
  theme: {
    colors: {
      black: 'var(--color-black)'
    },
    configViewer: {
      themeReplacements: {
        'var(--color-black)': '#000000'
      }
    }
  }
}
```

You can replace any value in your theme for display in the config viewer by setting the corresponding `valueToFind: valueToReplace` in the `themeReplacements` object.

### CSS inject

You can inject CSS file to head of the config viewer. This is useful when you got defined your properties in config as CSS variables, also useful for importing fonts.

For defining variables in dark mode use class name `mode-dark`

```js
module.exports = {
  theme: {
    colors: {
      'blue-50':  'var(--color-blue-50)',
      'blue-100': 'var(--color-blue-100)',
      'blue-200': 'var(--color-blue-200)',
      'blue-300': 'var(--color-blue-300)',
      'blue-400': 'var(--color-blue-400)',
      'blue-500': 'var(--color-blue-500)',
      'blue-600': 'var(--color-blue-600)',
      'blue-700': 'var(--color-blue-700)',
      'blue-800': 'var(--color-blue-800)',
      'blue-900': 'var(--color-blue-900)',
      'blue-950': 'var(--color-blue-950)',
    },
  }
}
```

style.css example

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fustat:wght@200..800&display=swap');

:root {
  --color-blue-50:  #f0f9ff;
  --color-blue-100: #e0f2fe;
  --color-blue-200: #bae6fd;
  --color-blue-300: #7dd3fc;
  --color-blue-400: #38bdf8;
  --color-blue-500: #0ea5e9;
  --color-blue-600: #0284c7;
  --color-blue-700: #0369a1;
  --color-blue-800: #075985;
  --color-blue-900: #0c4a6e;
  --color-blue-950: #ffffff;
}

.mode-dark {
   --color-blue-50:  #f0f9ff;
   --color-blue-100: #dbeafe;
   --color-blue-200: #bfdbfe;
   --color-blue-300: #93c5fd;
   --color-blue-400: #60a5fa;
   --color-blue-500: #3b82f6;
   --color-blue-600: #2563eb;
   --color-blue-700: #0369a1;
   --color-blue-800: #1d4ed8;
   --color-blue-900: #1e40af;
   --color-blue-950: #1e3a8a;
}
```

### baseFontSize

The config viewer displays the pixel equivalent of any rem values. By default `baseFontSize` is set to 16 to mirror the default root element font size in most browsers. If you plan on using a different root font size in your project, you should set the value of `baseFontSize` to match.

```js
module.exports = {
  theme: {
    // ...your Tailwind theme config
    configViewer: {
      baseFontSize: 20 // default is 16
    }
  }
}
```

### typographyExample

You can change the default sentence used in the typography sections (Font Size, Letter Spacing etc.)
by setting the `typographyExample` option:

```js
module.exports = {
  theme: {
    // ...your Tailwind theme config
    configViewer: {
      typographyExample: 'The quick brown fox jumps over the lazy dog.'
    }
  }
}
```

### fonts

You can add custom fonts to the config viewer that are used in your Tailwind config by passing in a font url as a string, or an array of font urls.

**Notes**

* If multiple font weights are provided in a single url (see example) only the last weight will be used.
* If fonts are in your Tailwind theme config but urls are not provided they will not display correctly (currently with no warning).
* Fonts can only be provided via urls not local files. If this something you need, please open a ticket or a pull request.

```js
module.exports = {
  theme: {
    // ...your Tailwind theme config
    configViewer: {
      // single font
      fonts: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      // or multiple fonts
      fonts: [
        "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
        "https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap" // <- only 500 will be used
      ]
        }
      ]
    }
  }
}
```

## Usage Tips

- `Shift+Click` on the Tailwind class names to copy multiple to your clipboard at once

## Roadmap

- [x] Add static export 
- [x] Add Transition section
- [x] Dark Mode toggle
- [x] Add support for loading custom fonts / font family section

# Custom code color for [Visual Studio Code](http://code.visualstudio.com)

<a href="https://marketplace.visualstudio.com/items?itemName=warmthsea.vscode-custom-code-color" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/warmthsea.vscode-custom-code-color.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

![20230915112812](https://github.com/warmthsea/vscode-custom-code-color/assets/45450994/e26815b1-22d2-4b6a-908a-a23712289eec)

## Download

[marketplace.visualstudio/vscode-custom-code-color](https://marketplace.visualstudio.com/items?itemName=warmthsea.vscode-custom-code-color)

## Getting started

### `.vscode/settings.json`
``` json
 {
    "vscodeCustomCodeColor.fileLanguageIdList": [
        "vue",
        "typescript",
    ],
    "vscodeCustomCodeColor.highlightValue": "v-role",
    "vscodeCustomCodeColor.highlightValueColor": "#6366f1",
}
```
**You can customize it, the above is just the default settings.**

### `.vscode/extensions.json`
``` json
{
  "recommendations": [
    "warmthsea.vscode-custom-code-color",
  ]
}
```

## License

[MIT License](./LICENSE) © 2023 [warmthsea](https://github.com/warmthsea)

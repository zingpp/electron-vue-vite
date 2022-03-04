# Vue 3 + Typescript + Vite+Electron

- 初始项目版本 (可以升级注意项目依赖，国内镜像打包 **拉取electron相关依赖会有一些问题**)

  - ```
    - node v16.14.0
    - npm 8.5.2
    - electron 17.1.0
    ```

## start

```ts
yarn
yarn dev //浏览器开发
yarn electron:dev //electron开发
yarn app:pack //发布，只合并，不产生压缩包
yarn app:build //发布应用
```

国内用户注意：如果electron 打包报错请看以下操作：

（undownload 文件也可以更改自行下载对应版本）

```
系统文件夹

Linux: $XDG_CACHE_HOME or ~/.cache/electron/   //Linux还未配置
MacOS: ~/Library/Caches/electron/    //macos还未配置
Windows: %LOCALAPPDATA%/electron/Cache or ~/AppData/Local/electron/Cache/


undownload 文件夹下
	electron/Cache
		-electron-v17.1.0-win32-x64
	
	electron/builder
		-nsis（解压）
		-winCodeSign（解压）
```






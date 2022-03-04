/*
 * @Author: zingpp
 * @Date: 2022-03-04 13:49:46
 * @LastEditors: zingpp
 * @LastEditTime: 2022-03-04 13:49:46
 * @FilePath: \zingpp\vite-electron\electron\preload.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
// electron/preload.js
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
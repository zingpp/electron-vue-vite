/*
 * @Author: zingpp
 * @Date: 2022-03-04 13:42:29
 * @LastEditors: zingpp
 * @LastEditTime: 2022-03-04 13:48:14
 * @FilePath: \zingpp\vite-electron\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : "",
  plugins: [vue()]
})

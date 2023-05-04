import { cva } from "class-variance-authority";

export const container = cva(`
  bg-gray-50 px-16 py-8 w-full
  flex items-center justify-between
  shadow-sm shadow-gray-800
`)

export const categoryFilters = cva(`
 flex items-center gap-4
`)
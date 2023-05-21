import React from 'react'

// Can't use import syntax because colorthief doesn't contain a declaration module for ts
import ColorThief from 'colorthief'

const colorThief = new ColorThief()

const getPokemonColor = (imgElement: HTMLImageElement) => {
  colorThief
    .getColor(imgElement)
    .then((color: string) => {
      console.log(color)
    })
    .catch((err: string) => {
      console.log(err)
    })
}

export default getPokemonColor

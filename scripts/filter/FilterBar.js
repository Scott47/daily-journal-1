import {MoodFilter} from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters"
)

export const FilterBar = () => {
  render = () => {
    contentTarget.innerHTML = `
      ${MoodFilter()}
    `
  }
  render()
}


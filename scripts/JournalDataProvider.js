// This is the original data.
const journal = [
  {
      id: 1,
      date: "10/06/2020",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Cryin"
  },
  {
    id: 2,
    date: "10/07/2020",
    concept: "Git Workflow",
    entry: "Repetition helps, just do it over and over and don't work on your main branch!",
    mood: "Head might explode"
},
{
  id: 3,
  date: "10/08/2020",
  concept: "Importing in scripts",
  entry: "Still confused about it, but you have to export and import functions in scripts and then put one import and function in main.js.",
  mood: "Chippin away"
}
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}
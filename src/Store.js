import { create } from "zustand";
let NOTES = [
  {
    id: "10",
    title: "Title0",
    desc: "desc",
    colorCode: "bg-[#7ECBFF]",
  },
  {
    id: "11",
    title: "Title1",
    desc: "desc",
    colorCode: "bg-[#FFA447]",
  },
  {
    id: "12",
    title: "Title2",
    desc: "desc",
    colorCode: "bg-[#FFA6C4]",
  },
  {
    id: "13",
    title: "Title3",
    desc: "desc",
    colorCode: "bg-[#1ECCC3]",
  },
];
export const useNotesStore = create((set) => ({
  notesData: NOTES,
  setNotesData: (data) => set((state) => ({ notesData: data })),
  noteEdit: '',
  setNoteEdit: (data) => set((state) => ({ noteEdit: data })),
}));

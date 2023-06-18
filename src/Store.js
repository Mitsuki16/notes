import { create } from "zustand";
export const useNotesStore = create((set) => ({
  notesData: [],
  setNotesData: (data) => set((state) => ({ notesData: data })),
  noteEdit: '',
  setNoteEdit: (data) => set((state) => ({ noteEdit: data })),
}));

import create from "zustand"

const useBearStore = create((set) => ({
  currentHeader: "none",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setCurrentHeader: (header) => set(() => ({ currentHeader: header })),
}))

import { create } from 'zustand'

export const Store = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears:any) => set({ bears: newBears }),
}))

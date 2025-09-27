import { create } from 'zustand'
type State = { count: number }
type Actions = { inc: () => void, dec: () => void }
export const useCounterStore = create<State & Actions>((set) => ({
  count: 0,
  inc: () => set(s => ({ count: s.count + 1 })),
  dec: () => set(s => ({ count: s.count - 1 })),
}))
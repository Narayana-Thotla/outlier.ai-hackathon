import { create } from 'zustand'

type TabOption = 'explorebymood' | 'nightlife' | 'diningout' |'delivery'

interface StoreState {
  currentTab: TabOption,
  currentCuisines:string[],
  updateTab: (val: TabOption) => void,
  updateCuisines: (val: string[]) => void;
}

export const useStore = create<StoreState>((set) => ({
    currentTab: 'diningout',
    currentCuisines:[] ,// default tab
  updateTab: (val:any) => set({ currentTab: val }),
  updateCuisines:(val:any) => set({currentCuisines:val})
  
}))
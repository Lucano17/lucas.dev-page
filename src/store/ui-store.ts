import { create } from 'zustand';

interface State {
    isEducationModalOpen: boolean;

    openEducationModal: () => void;
    closeEducationModal: () => void;
}

export const useUIStore = create<State>((set) => ({
    isEducationModalOpen: false,

    openEducationModal: () => set({ isEducationModalOpen: true }),
    closeEducationModal: () => set({ isEducationModalOpen: false }),
}))
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  address?: string;
  phone?: string;
}

interface UserStore {
  profile: UserProfile | null;
  updateProfile: (profile: UserProfile) => void;
  updateAvatar: (avatar: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: null,
      updateProfile: (profile) => set({ profile }),
      updateAvatar: (avatar) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, avatar } : null,
        })),
      logout: () => set({ profile: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);
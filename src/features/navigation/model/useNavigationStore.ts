import { create } from 'zustand';

interface NavigationState {
  isBookingModalOpen: boolean;
  isMobileMenuOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isBookingModalOpen: false,
  isMobileMenuOpen: false,
  openBookingModal: () => set({ isBookingModalOpen: true, isMobileMenuOpen: false }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));

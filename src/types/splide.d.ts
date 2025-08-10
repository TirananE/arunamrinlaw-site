declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SplideOptions {
    type?: string;
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    autoplay?: boolean;
    interval?: number;
    pauseOnHover?: boolean;
    resetProgress?: boolean;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    [key: string]: unknown;
  }
  
  export interface SplideProps {
    options?: SplideOptions;
    'aria-label'?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }
  
  export interface SplideSlideProps {
    children?: ReactNode;
    [key: string]: unknown;
  }
  
  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<{children?: ReactNode; [key: string]: unknown}>;
}

declare module '@splidejs/react-splide/css';
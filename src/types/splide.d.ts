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
    [key: string]: any;
  }
  
  export interface SplideProps {
    options?: SplideOptions;
    'aria-label'?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  export interface SplideSlideProps {
    children?: ReactNode;
    [key: string]: any;
  }
  
  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<{children?: ReactNode; [key: string]: any}>;
}

declare module '@splidejs/react-splide/css';

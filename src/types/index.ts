// Common interfaces
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Testimonial {
  name: string;
  jobTitle: string;
  comment: string;
  imageUrl: string;
}

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

// Context Types
export interface AppContextState {
  isDarkMode: boolean;
  isNavOpen: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ErrorResponse {
  error: string;
  status: number;
  details?: unknown;
} 
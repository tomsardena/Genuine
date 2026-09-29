import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    // Check hash first if deployed to static host without pushState rewrite
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window === 'undefined') return;
    
    // Normalize path
    let normalized = path;
    if (!normalized.startsWith('/')) {
      normalized = '/' + normalized;
    }

    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, className, children, title, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If command or control key is pressed, let browser handle new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} title={title} {...rest}>
      {children}
    </a>
  );
};

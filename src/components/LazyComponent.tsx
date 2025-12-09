import { Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<any>;
  fallback?: React.ReactNode;
}

const LazyComponent = ({ component, fallback }: LazyComponentProps) => {
  const LazyLoadedComponent = lazy(component);
  
  return (
    <Suspense fallback={fallback || <div className="flex items-center justify-center p-8">Loading...</div>}>
      <LazyLoadedComponent />
    </Suspense>
  );
};

export default LazyComponent; 
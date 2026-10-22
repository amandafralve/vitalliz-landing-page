import { Suspense, useEffect, useRef, useState, type ComponentType } from 'react';

interface DeferredSectionProps {
  id?: string;
  component: ComponentType;
  className?: string;
}

export function DeferredSection({
  id,
  component: Component,
  className,
}: DeferredSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={className}
      style={className ? undefined : { minHeight: 1 }}
    >
      {shouldRender && (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}

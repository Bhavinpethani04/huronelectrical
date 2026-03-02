import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset + 1;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id.replace('#', ''));
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}


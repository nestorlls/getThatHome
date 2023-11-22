import React, { JSX, useEffect, useRef, useState } from 'react';

import { DesktopHeader } from '@components/compositeComponents';
import { MobileHeader } from '@components/compositeComponents/mobileHeader/mobileHeader.component';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
export const Header: React.FC = (): JSX.Element => {
  const [fixed, setFixed] = useState<boolean>(false);
  const ref_content_header = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (ref_content_header.current && window.document.documentElement) {
      if (
        ref_content_header.current.scrollTop <
        window.document.documentElement.scrollTop
      ) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={ref_content_header}
      onScroll={handleScroll}
      className={`header-fixed ${fixed ? 'shadow-box' : ''}`}
    >
      <header className="header  section">
        <span className="mobile  container">
          <MobileHeader />
        </span>
        <span className="desktop container">
          <DesktopHeader />
        </span>
      </header>
    </section>
  );
};

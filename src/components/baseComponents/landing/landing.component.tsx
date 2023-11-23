import React from 'react';

import illustrator from '@assets/images/landing.png';

export const LandingIllustrator: React.FC = (): React.JSX.Element => {
  return (
    <section className="relative w-full h-fit">
      <img
        src={illustrator}
        alt="Landing illustrator"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

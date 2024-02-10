import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}
export const SignUpLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <section className="signup-wrapper">
      <div className="child-first"></div>
      <div className="child-second"></div>
      {children}
    </section>
  );
};

import React from 'react';

interface CardPropAtribuitProps<T> {
  atribuite: T;
  icon: React.ReactNode;
  units?: string;
}

/**
 * Renders a card property attribute with an icon, value, and units.
 *
 * @param props - The component props.
 * @param props.atribuit - The attribute value.
 * @param props.icon - The icon element.
 * @param props.units - The units of measurement.
 * @returns The rendered component.
 */
export const CardPropertyAtribuite: React.FC<
  CardPropAtribuitProps<number | boolean>
> = ({ atribuite, icon, units }) => {
  return (
    <div className="property-atribuit-wrapper">
      <span>{icon}</span>
      <div className="flex gap-[2px]">
        <span>{atribuite}</span>
        <span>{units}</span>
      </div>
    </div>
  );
};

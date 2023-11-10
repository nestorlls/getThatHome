import React from 'react';

interface IPropAtribuitProps<T> {
  atribuite: T;
  icon: React.ReactNode;
  units?: string;
  atribuiteText?: string;
  size?: 'a-sm' | 'a-md' | 'a-lg';
}

/**
 * Renders a card property attribute with an icon, value, and units.
 *
 * @param props - The component props.
 * @param props.atribuit - The attribute value.
 * @param props.icon - The icon element.
 * @param props.units - The units of measurement.
 * @param props.size - The size of the attribute.
 * @returns The rendered component.
 */
export const PropertyAtribuite: React.FC<
  IPropAtribuitProps<number | boolean | string>
> = ({ atribuite, icon, units, atribuiteText, size = 'a-sm' }) => {
  return (
    <div className={`property-atribuit-wrapper ${size}`}>
      <span>{icon}</span>
      <div className="flex gap-[4px]">
        <span>{atribuite}</span>
        {atribuiteText && <span className="capitalize">{atribuiteText}</span>}
        {units && <span>{units}</span>}
      </div>
    </div>
  );
};

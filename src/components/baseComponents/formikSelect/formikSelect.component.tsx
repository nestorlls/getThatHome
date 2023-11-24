import { useField } from 'formik';
import React from 'react';

interface ISelectProps {
  id: string;
  name: string;
  label?: string;
  children: React.ReactNode;
}

/**
 * Renders a Select component using Formik.
 *
 * @param {React.FC<ISelectProps>} ISelectProps -The props for the Select component.
 * @param {string} label - The label for the label (optional).
 * @param {string} id - The id for the select.
 * @param {string} name - The name for the select.
 * @param {React.ReactNode} children - The children for the select.
 * @returns {JSX.Element} The rendered component.
 */
export const FormikSelect: React.FC<ISelectProps> = ({
  label,
  ...props
}: ISelectProps) => {
  const [field] = useField(props);

  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={props.id || props.name} className="label">
          {label}
        </label>
      )}
      <select {...field} {...props} className="select-field" />
    </div>
  );
};

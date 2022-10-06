import React, { useId } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Input({
  value,
  type,
  change,
  name,
  placeHolder,
  loading,
  inputClass,
  blockClass,
  prevIcon,
}) {
  const id = useId();

  return (
    <div className={blockClass}>
      {prevIcon && (
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      )}
      <input
        className={inputClass}
        id={id}
        name={name}
        value={value}
        type={type}
        disabled={loading}
        placeholder={placeHolder}
        onChange={(e) => change(name, e.target.value)}
      />
    </div>
  );
}
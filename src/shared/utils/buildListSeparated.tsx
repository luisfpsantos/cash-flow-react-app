/* eslint-disable react/no-array-index-key */
import React from 'react';

export default function buildListSeparated<T>(
  array: T[],
  separatorElement: JSX.Element,
  callback: (el: T) => JSX.Element,
) {
  return (
    <>
      {array.map((e, index) => (
        <React.Fragment key={index}>
          {callback(e)}
          {index < array.length - 1 && separatorElement}
        </React.Fragment>
      ))}
    </>
  );
}

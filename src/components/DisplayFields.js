// components/DisplayFields.js

import React from 'react';
import { connect } from 'react-redux';
import { clearFields } from '../actions/fieldActions';

const DisplayFields = ({ fields, dispatch }) => {
  const handleClearFields = () => {
    dispatch(clearFields());
  };

  return (
    <div>
      <h2>Display Fields</h2>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            <strong>Field Type:</strong> {field.fieldType},{' '}
            <strong>Display Name:</strong> {field.displayName},{' '}
            <strong>Validation:</strong> {field.validation},{' '}
            <strong>Data Type:</strong> {field.dataType},{' '}
            {renderDataTypeField(field)}
            <strong>Mandatory:</strong> {field.mandatory},{' '}
            <strong>Field Data:</strong> {field.fieldData},{' '}
          </li>
        ))}
      </ul>
      <button onClick={handleClearFields}>Reset</button>
    </div>
  );
};

const renderDataTypeField = (field) => {
  switch (field.dataType) {
    case 'string':
      return (
        <span>
          <strong>String Data:</strong> {field.stringData}
        </span>
      );
    case 'number':
      return (
        <span>
          <strong>Number Data:</strong> {field.numberData}
        </span>
      );
    case 'date':
      return (
        <span>
          <strong>Date Data:</strong> {field.dateData}
        </span>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  fields: state.fields.fields,
});

export default connect(mapStateToProps)(DisplayFields);

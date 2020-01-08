import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_ADC_A_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'ADC A, (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 1;

  const opCodeInBinary = '10001110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Add the contents of memory specified by register pair HL and the CY flag
      to the contents of register A, and store the results in register A.
    </p>
  );

  return instruction;
};

export default generate_ADC_A_memory_at_HL; // eslint-disable-line camelcase

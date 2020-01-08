import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SBC_A_d8 = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SBC A, d8';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    CY: '8-bit',
    H: '8-bit',
    N: '1',
    Z: 'Z',
  };
  instruction.cycles = '2';
  instruction.bytes = 2;

  const opCodeInBinary = '11011110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Subtract the contents of the 8-bit immediate operand d8 and the carry flag CY
      from the contents of register A, and store the results in register A.
    </p>
  );

  return instruction;
};

export default generate_SBC_A_d8; // eslint-disable-line camelcase

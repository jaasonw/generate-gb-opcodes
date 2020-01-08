import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_INC_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'INC (HL)';
  instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
  instruction.flags = {
    H: '8-bit',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '3';
  instruction.bytes = 1;

  const opCodeInBinary = '00110100';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Increment the contents of memory specified by register pair HL by 1.
    </p>
  );

  return instruction;
};

export default generate_INC_memory_at_HL; // eslint-disable-line camelcase

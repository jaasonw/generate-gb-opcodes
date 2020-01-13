import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_SLA_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'SLA (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '(HL)7',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '4';
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100100110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Shift the contents of memory specified by register pair HL to the left. That is,
      the contents of bit 0 are copied to bit 1, and the previous contents of bit 1
      (before the copy operation) are copied to bit 2. The same operation is repeated
      in sequence for the rest of the memory location. The contents of bit 7 are copied to the
      CY flag, and bit 0 of (HL) is reset to 0.
    </p>
  );

  return instruction;
};

export default generate_SLA_memory_at_HL; // eslint-disable-line camelcase

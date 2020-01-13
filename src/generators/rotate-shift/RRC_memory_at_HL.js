import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RRC_memory_at_HL = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RRC (HL)';
  instruction.type = instructionTypes.ROTATE_SHIFT;
  instruction.flags = {
    CY: '(HL)0',
    H: '0',
    N: '0',
    Z: 'Z',
  };
  instruction.cycles = '4';
  instruction.bytes = 2;

  const opCodeInBinary = '1100101100001110';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <p>
      Rotate the contents of memory specified by register pair HL to the right. That is,
      the contents of bit 7 are copied to bit 6, and the previous contents of bit 6
      (before the copy operation) are copied to bit 5. The same operation is repeated
      in sequence for the rest of the memory location. The contents of bit 0 are placed in
      both the CY flag and bit 7 of (HL).
    </p>
  );

  return instruction;
};

export default generate_RRC_memory_at_HL; // eslint-disable-line camelcase

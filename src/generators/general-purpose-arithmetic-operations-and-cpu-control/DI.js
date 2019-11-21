import { instructionTypes } from "../constants";
import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_DI = () => {
  const instruction = {};

  instruction.mnemonic = 'DI';
  instruction.type = instructionTypes.GENERAL_PURPOSE_ARITHMETIC_OPERATIONS_AND_CPU_CONTROL;
  instruction.flags = {};
  instruction.cycles = 1;

  const opCodeInBinary = '11110011';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}
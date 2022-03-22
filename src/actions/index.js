export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_DISPLAY = "MEMORY_DISPLAY";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOPP = (number) => {
  return { type: CHANGE_OPERATION, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryDisplay = () => {
  return { type: MEMORY_DISPLAY };
};

export const applyMemory = () => {
  return { type: MEMORY_APPLY };
};

export const clearMemory = () => {
  return { type: MEMORY_CLEAR };
};

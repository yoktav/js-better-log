// --- Convenience inspection utilities ---

export const isUndefined = value => value === undefined;

export const isNull = value => value === null;

export const isEmptyString = value => value === '';

export const isUndefinedOrNull = value => isUndefined(value) || isNull(value);

export const isUndefinedOrNullOrEmpty = value => isUndefinedOrNull(value) || isEmptyString(value);

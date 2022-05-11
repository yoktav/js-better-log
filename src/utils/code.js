export function getExecutedCodeLine(params = {}) {
  const { executedOrder = 2 } = params;

  let executedCodeLine = new Error();

  executedCodeLine = executedCodeLine.stack.split('\n')[executedOrder].trim();

  return `executedCodeLine: ${executedCodeLine}`;
}

import { isUndefinedOrNullOrEmpty } from './utils/inspect';
import { getExecutedCodeLine } from './utils/code';

export function betterLog(params = {}) {
  const { message, errors } = params;

  const hasMessage = !isUndefinedOrNullOrEmpty(message);
  const hasMultipleErrors = !isUndefinedOrNullOrEmpty(errors);

  // 1 -> getExecutedCodeLine()2133
  // 2 -> betterLog
  // 3 -> where code executed
  const executedCodeLine = getExecutedCodeLine({ executedOrder: 3 });

  let tableData = [];

  if ((hasMessage && hasMultipleErrors) || (!hasMessage && !hasMultipleErrors)) {
    betterLog({ message: 'Please provide only errors or message argument', where: executedCodeLine });

    return;
  }

  tableData = hasMultipleErrors ? errors : [{ message, where: executedCodeLine }];

  console.table(tableData, ['message', 'where']);
}

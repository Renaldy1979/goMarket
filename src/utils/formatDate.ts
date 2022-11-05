/* eslint-disable import/no-duplicates */
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { format } from 'date-fns-tz';

function formatDateToDisplay(data: string) {
  if (!data) {
    return '';
  }
  const date = parseISO(data);

  const result = format(date, 'dd/MM/yy', { locale: pt });

  return result;
}

function formatDateToDefault(data: string) {
  if (!data) {
    return '';
  }

  const newData = data.split('-');
  const formatedData = `${newData[0]}-${newData[1]}-${newData[2]}T10:00:00.000Z`;
  return formatedData;
}
export { formatDateToDisplay, formatDateToDefault };

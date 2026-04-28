import dayjs from 'dayjs';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

export const formatDate = (date: Date, format: string = DEFAULT_DATE_FORMAT) => dayjs(date).format(format);
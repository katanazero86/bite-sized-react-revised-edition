import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

export const KST_TIMEZONE = 'Asia/Seoul';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';

export const formatDate = (date: Date, format: string = DEFAULT_DATE_FORMAT) => dayjs(date).tz(KST_TIMEZONE).format(format);
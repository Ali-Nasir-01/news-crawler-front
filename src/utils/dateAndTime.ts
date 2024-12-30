import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export const changeToJalali = (date: string, format = "YYYY/M/D HH:mm") => {
  return dayjs(date).calendar("jalali").locale("fa").format(format);
};

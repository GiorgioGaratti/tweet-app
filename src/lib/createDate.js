import {DateTime} from "luxon";

// generate local dates with a given offset from UTC 
const createDate = (offsetInMin) => {
    const dateToAssign = DateTime.local().toUTC(offsetInMin);
    const dateExit = {
        // date in ISO format (needed for comparing dates)
        dateISO: dateToAssign.toISO(),
        // date in "hh:mm - gg 'mm' yyyy" string format
        dateFormatted: dateToAssign.toFormat("t - DD") 
    };
    return dateExit;
}

export default createDate;
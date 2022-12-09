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

const datetime1 = createDate(-15);
const datetime2 = createDate(15);
const datetime3 = createDate(25);
const datetime4 = createDate(45);
const datetime5 = createDate(-35);
const datetime6 = createDate(-55);
const datetime7 = createDate(55);

// gets called from API to assign dates to tweets
const getDates = () => {
    return [datetime1, datetime2, datetime3, datetime4, datetime5, datetime6, datetime7];
}

export default getDates;

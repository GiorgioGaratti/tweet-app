import {DateTime} from "luxon";

const createDate = (offsetInMin) => {
    const dateToAssign = DateTime.local().toUTC(offsetInMin);
    const dateExit = {
        // data in formato iso (utile per il confronto)
        dateISO: dateToAssign.toISO(),
        // stringa con la data formattata "hh:mm - gg 'mm' yyyy" 
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

const getDates = () => {
    return [datetime1, datetime2, datetime3, datetime4, datetime5, datetime6];
}

export default getDates;

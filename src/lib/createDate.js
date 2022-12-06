import {DateTime} from "luxon";

const createDate = () => {
    const dateGenerated = DateTime.now().setLocale('en-GB');
    
    return dateGenerated.toFormat('t - DD');
}

export default createDate;
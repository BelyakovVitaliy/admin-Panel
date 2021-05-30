import * as moment from "moment";

export const DateFormatter = ({value}) => {
    return value ? moment(value).format('DD.MM.YYYY'): null;
};
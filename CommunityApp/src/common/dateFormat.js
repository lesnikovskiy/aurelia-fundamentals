import moment from "moment";

export class DateFormatValueConverter {
    toView(value, format) {
       if (!format) {
           format = "M/D/YYYY h:mm a";
       }
       return moment(value).format(format) 
    }
    
    fromView(value) {
        return new Date(value);
    }
}
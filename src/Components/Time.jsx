import Clock from 'react-live-clock';
import moment from 'moment';

export default function Time() {
  // function appendLeadingZeroes(n){
  //   return n <= 9 ? "0" + n : n;
  // }

  // let current_datetime = new Date()
  // let formatted_date = appendLeadingZeroes(current_datetime.getHours()) + ":" + appendLeadingZeroes(current_datetime.getMinutes()) + ":" + appendLeadingZeroes(current_datetime.getSeconds()) + " on " + current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate());
  // return formatted_date;
  return moment().format("MMMM Do YYYY [at] HH:mm:ss");
}

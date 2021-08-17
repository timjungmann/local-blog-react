import moment from 'moment';

export default function Time() {
  return moment().format("MMMM Do YYYY HH:mm:ss");
}

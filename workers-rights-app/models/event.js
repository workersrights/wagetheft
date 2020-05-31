class Event {
  constructor(
    id,
    title,
    date,
    imageUrl,
    organizer,
    location,
    price,
    category,
    description
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.imageUrl = imageUrl;
    this.organizer = organizer;
    this.location = location;
    this.price = price;
    this.category = category;
    this.description = description;
  }

  Date = (formatStr = "MMMM Mo, YYYY") => {
    var moment = require('moment');
    const date = moment(this.date).format(formatStr);
    return date.toString();
  };

  Time = () => {
    var moment = require('moment');
    const date = moment(this.date).format("LT");
    return date.toString();
  };

}

export default Event;

export const compareEvents = (e1, e2) => {
var moment = require('moment');
const date1 = moment(e1.date);
const date2 = moment(e2.date);
if(date1.isSame(date2))
  return 0;

return (date1.isBefore(date2)) ? -1 : 1;
}
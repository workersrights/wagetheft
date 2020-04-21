class Event {
  constructor(
    eventId,
    title,
    date,
    image,
    organizer,
    location,
    price,
    category,
    description
  ) {
    this.id = eventId;
    this.title = title;
    this.date = date;
    this.image = image;
    this.organizer = organizer;
    this.location = location;
    this.price = price;
    this.category = category;
    this.description = description;
  }
}

export default Event;

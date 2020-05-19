class Event {
  constructor(
    id,
    title,
    date,
    imageUrl,
    organizer,
    location,
    category,
    description
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.imageUrl = imageUrl;
    this.organizer = organizer;
    this.location = location;
    this.category = category;
    this.description = description;
  }
}

export default Event;
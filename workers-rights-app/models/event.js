class Event  {
    contructor(
        title, 
        date, 
        image = 'https://www.clipartkey.com/mpngs/m/220-2204245_calendaring-clipart-everyday-calendar-icon-png-white.png', 
        organizer, 
        location, 
        price = '0', 
        category, 
        description = '')
        
    {
        this.title = title;
        this.date = date;
        this.image = image;
        this.organizer = organizer;
        this.location = location;
        this.price = price;
        this.category = category;
        this.description = description
    }
}

export default Event;
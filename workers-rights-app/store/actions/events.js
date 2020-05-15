import Event from '../../models/event'

export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';
export const POST_EVENT = 'POST_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

export const fetchEvents = () => {
    return async dispatch => {
        const response = await fetch('https://workers-rights-46c43.firebaseio.com/events.json');
        const resData = await response.json();
        const loadedEvents = [];
        for(const key in resData) {
            loadedEvents.push(new Event(
                key,
                key.title,
                key.date,
                key.time,
                key.image,
                key.organizer,
                key.location,
                key.price,
                key.category,
                key.description
            ));
        }
        console.log(resData);
        dispatch({type: SET_EVENTS, events: loadedEvents});
    };
};

export const postEvent = (
    title,
    date,
    time,
    image,
    organizer,
    location,
    price,
    category,
    description) => {
    return async dispatch => {
        const response = await fetch('https://workers-rights-46c43.firebaseio.com/events.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                date,
                time,
                image,
                organizer,
                location,
                price,
                category,
                description})
        });

        const resData = await response.json();
        console.log(resData);
        dispatch({ 
            type: POST_EVENT, 
        });
    }
};

export const setYourEvent = eventId => {
    return { 
        type: SET_YOUR_EVENT, 
        id: eventId
    };
};
import Event from '../../models/event'

export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';
export const POST_EVENT = 'POST_EVENT';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_YOUR_EVENTS = 'FETCH_YOUR_EVENTS';

export const fetchEvents = () => {
    return async dispatch => {
        const response = await fetch('https://workers-rights-46c43.firebaseio.com/events.json');
        
        const resData = await response.json();
        const loadedEvents = [];
        
        for(const key in resData) {
            const e = new Event(
                key,
                resData[key].title,
                resData[key].date,
                resData[key].image,
                resData[key].organizer,
                resData[key].location,
                resData[key].category,
                resData[key].description
            )
            loadedEvents.push(e);
        }
        dispatch({type: FETCH_EVENTS, events: loadedEvents});
    };
};



export const setYourEvent = (
    title,
    date,
    image,
    organizer,
    location,
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
                image,
                organizer,
                location,
                category,
                description})
        });
        const resData = await response.json();
        dispatch({ 
            type: SET_YOUR_EVENT, 
            id: resData.name
        });
    }
};
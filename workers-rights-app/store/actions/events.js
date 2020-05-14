import { useSelector } from 'react-redux'; 
export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';

export const setYourEvent = (
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
        const response = await fetch('https://workers-rights-46c43.firebaseio.com/events', {
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
            type: SET_YOUR_EVENT, 
            id: eventId
        });
    }
};
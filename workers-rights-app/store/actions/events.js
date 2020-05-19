import Event from '../../models/event'

export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';
export const FETCH_EVENTS = 'FETCH_EVENTS';
//export const FETCH_YOUR_EVENTS = 'FETCH_YOUR_EVENTS';
//export const ADD_YOUR_EVENT = 'ADD_YOUR_EVENT';
//export const REMOVE_YOUR_EVENT = 'REMOVE_YOUR_EVENT';


/**
 * Fetches both all events are your events
 */
export const fetchEvents = () => {
    return async dispatch => {
        try{
            const response = await fetch('https://workers-rights-46c43.firebaseio.com/events.json');
            if(!response.ok){
                throw new Error('Something went wrong!');
            }
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

            const response2 = await fetch('https://workers-rights-46c43.firebaseio.com/testYourEvents.json');
            if(!response2.ok){
                throw new Error('Something went wrong!');
            }
            const resData2 = await response2.json();
            const loadedYourEvents = [];
            for(const key in resData2) {
                loadedYourEvents.push(loadedEvents.filter(event => event.id === key));
            }

            dispatch({type: FETCH_EVENTS, events: loadedEvents, yourEvents: loadedYourEvents});
        } catch (err) {
            throw err;
        }
    };
};

/**
 * Adds an event to Your Events
 * @param {*} id 
 * @param {*} title 
 * @param {*} date 
 * @param {*} imageUrl 
 * @param {*} organizer 
 * @param {*} location 
 * @param {*} category 
 * @param {*} description 
 */
export const addYourFavorites = (
    id,
    title,
    date,
    imageUrl,
    organizer,
    location,
    category,
    description) => {
    return async dispatch => {
        const response = await fetch(`https://workers-rights-46c43.firebaseio.com/testYourEvents/${id}.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                date,
                imageUrl,
                organizer,
                location,
                category,
                description
            })
          }
        );
        dispatch({type: SET_YOUR_EVENT, id: id});
      };
};

/**
 * Removes an event from your events
 * @param {*} id 
 * @param {*} title 
 * @param {*} date 
 * @param {*} imageUrl 
 * @param {*} organizer 
 * @param {*} location 
 * @param {*} category 
 * @param {*} description 
 */
export const removeYourFavorites = id => {
    return async dispatch => {
        const response = await fetch(`https://workers-rights-46c43.firebaseio.com/testYourEvents/${id}.json`,
          {
            method: 'DELETE'
          }
        );
        dispatch({type: SET_YOUR_EVENT, id: id});
      };
};

export const setYourEvent = (
    inYourEvent,
    id,
    title,
    date,
    imageUrl,
    organizer,
    location,
    category,
    description) => {
    return (inYourEvent) ? addYourFavorites(id, title, date, imageUrl, organizer, location, category, description) :
        removeYourFavorites(id);
};
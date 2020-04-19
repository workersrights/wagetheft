export const SET_YOUR_EVENT = 'SET_YOUR_EVENT';

export const setYourEvent = eventId => {
    return { type: SET_YOUR_EVENT, id: eventId};
};
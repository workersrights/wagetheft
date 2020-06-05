import Event, { compareEvents } from "../../models/event";
import Constants from "expo-constants";
import { insertEvent, fetchYourEvents, deleteEvent } from '../../helpers/db';
export const SET_UNIQID = "SET_UNIQID";
export const SET_YOUR_EVENT = "SET_YOUR_EVENT";
export const FETCH_EVENTS = "FETCH_EVENTS";

const uniqId = Constants.installationId;

/**
 * Fetches both all events and your events from the database
 */
export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://workers-rights-46c43.firebaseio.com/events.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      let loadedEvents = [];
      for (const key in resData) {
        const e = new Event(
          key,
          resData[key].title,
          resData[key].date,
          resData[key].image,
          resData[key].organizer,
          resData[key].location,
          resData[key].category,
          resData[key].description
        );
        loadedEvents.push(e);
      }

      const dbResult = await fetchYourEvents();
      const arr = dbResult.rows._array;
      let loadedYourEvents = arr.map(e => new Event(
        e.id,
        e.title,
        e.date,
        e.imageUrl,
        e.organizer,
        e.location,
        e.category,
        e.description
      ));
      
      dispatch({
        type: FETCH_EVENTS,
        events: loadedEvents.sort(compareEvents),
        yourEvents: loadedYourEvents.sort(compareEvents),
      });
    } 
    catch (err) {
      throw err;
    }
  };
};

/**
 * Adds an event to Your Events
 * @param {*} id
 * @param {*} title
 * @param {*} date
 * @param {*} image
 * @param {*} organizer
 * @param {*} location
 * @param {*} category
 * @param {*} description
 */
export const addYourFavorites = (
  id,
  title,
  date,
  image,
  organizer,
  location,
  category,
  description
) => {
  return async (dispatch) => {
    try {
      await insertEvent(id, title, date, image, organizer, location, category, description);
      dispatch({ type: SET_YOUR_EVENT, id: id });

    }
    catch(err) {
      throw err;
    }
    
  };
};

/**
 * Removes an event from your events
 * @param {*} id
 */
export const removeYourFavorites = (id) => {
  return async (dispatch) => {
    await deleteEvent(id);
    dispatch({ type: SET_YOUR_EVENT, id: id });
  };
};

export const setYourEvent = (
  inYourEvent,
  id,
  title,
  date,
  image,
  organizer,
  location,
  category,
  description
) => {
  return !inYourEvent
    ? addYourFavorites(
        id,
        title,
        date,
        image,
        organizer,
        location,
        category,
        description
      )
    : removeYourFavorites(id);
};

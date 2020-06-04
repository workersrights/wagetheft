import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('storedEvents.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS storedEvents (id TEXT NOT NULL, title TEXT NOT NULL, date TEXT NOT NULL, imageUrl TEXT NOT NULL, organizer TEXT NOT NULL, location TEXT NOT NULL, category TEXT NOT NULL, description TEXT NOT NULL);',
            [],
            () => {
                resolve();
            },
            (_, err) => {
                reject(err);
            });
        });
    });
    return promise;
};

export const insertEvent = (
    id,
    title,
    date,
    imageUrl,
    organizer,
    location,
    category,
    description) => {
        const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                'INSERT INTO storedEvents (id, title, date, imageUrl, organizer, location, category, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',    
                [id, title, date, imageUrl, organizer, location, category, description],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                });
            });
        });
        return promise;
};

export const deleteEvent = id => {
        const promise = new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                'DELETE FROM storedEvents WHERE id = ?;',    
                [id],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                });
            });
        });
        return promise;
};

export const fetchYourEvents = () => {
   const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
            "SELECT * FROM storedEvents",
            [],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            });
        });
    });
    return promise;
}


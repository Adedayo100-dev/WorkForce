import mongoose from 'mongoose';

export const mapEventsToCalendar = (cal, dataSet) => {
    // Function to map objects based on the date
    return cal.map((week) => {
        return week.map((dayItem) => {
            const correspondingItem = dataSet.find((item2) => dayItem.dayNum == item2.date.dayNum && dayItem.dayMonth.num == item2.date.dayMonth && dayItem.dayYear == item2.date.dayYear);

            // Check if correspondingItem is a Mongoose document
            const cleanItem = correspondingItem instanceof mongoose.Document ? correspondingItem.toObject() : correspondingItem;
            return { ...dayItem, ...cleanItem };
        });
    });
}
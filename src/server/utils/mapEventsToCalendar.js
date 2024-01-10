import mongoose from 'mongoose';

export const mapEventsToCalendar = (cal, dataSet) => {
    // Function to map objects based on the date
    return cal.map((week) => {
        return week.map((dayItem) => {
            const correspondingItems = dataSet.filter((item2) => dayItem.dayNum == item2.date.start.dayNum && dayItem.dayMonth.num == item2.date.start.dayMonth && dayItem.dayYear == item2.date.start.dayYear);
            const events = [].concat(...correspondingItems);
            // console.log(events);
            // Check if correspondingItem is a Mongoose document
            // const cleanItem = correspondingItems instanceof mongoose.Document ? correspondingItems.toObject() : correspondingItems;
            var a = { ...dayItem, events };
            return a;
        });
    });
}
import mongoose from 'mongoose';

export const mapEventsToCalendar = (cal, dataSet) => {
    // Function to map objects based on the date
    return cal.map((week) => {
        return week.map((dayItem) => {
            const correspondingItems = dataSet.filter((item2) => dayItem.dayNum == item2.date.dayNum && dayItem.dayMonth.num == item2.date.dayMonth && dayItem.dayYear == item2.date.dayYear);

            const events = [].concat(...correspondingItems);
            // Check if correspondingItem is a Mongoose document
            // const cleanItem = correspondingItems instanceof mongoose.Document ? correspondingItems.toObject() : correspondingItems;
            var a = { ...dayItem, events };
            console.log(events);
            return a;
        });
    });
}
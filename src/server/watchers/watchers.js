
const Work = require('../models/workModel');
const Employer = require('../models/employerModel');

module.exports = (io) => {
    
    // Watching for Work changes
    Work.watch().on('change', (change) => {
        io.emit('work-db-change', change);
    });


    Employer.watch().on('change', (change) => {
        io.emit('employer-db-change', change);
    });
}





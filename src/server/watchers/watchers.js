
import Work from '../models/workModel.js';
import Employer from '../models/employerModel.js';

export default function watchers(io) {
    
    // Watching for Work changes
    Work.watch().on('change', (change) => {
        io.emit('work-db-change', change);
    });


    Employer.watch().on('change', (change) => {
        io.emit('employer-db-change', change);
    });
}





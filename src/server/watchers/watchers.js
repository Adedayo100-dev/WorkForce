
import Work from '../models/workModel.js';
import Employer from '../models/employerModel.js';

export default function watchers(io) {
    
    // Watching for Work changes
    const workChangeStream = Work.watch();
    workChangeStream.on('change', (change) => {
        io.emit('work-db-change', change);
    });

    workChangeStream.on('error', (error) => {
        console.error('Work change stream error:', error);
    });

    // Watching for Employer changes
    const employerChangeStream = Employer.watch();
    employerChangeStream.on('change', (change) => {
        io.emit('employer-db-change', change);
    });

    employerChangeStream.on('error', (error) => {
        console.error('Employer change stream error:', error);
    });


    // Handle cleanup when your application is shutting down
    process.on('SIGINT', () => {
        workChangeStream.close(() => {
            console.log('Work change stream closed.');
            employerChangeStream.close(() => {
                console.log('Employer change stream closed.');
                process.exit(0);
            });
        });
    });
}





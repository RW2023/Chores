const mongoose = require('mongoose');




mongoose.connection.collection('kids').drop((err) => {
    if (!err) {
        console.log('Kids collection dropped successfully.');
    } else {
        console.error('Error dropping Kids collection:', err);
    }
});

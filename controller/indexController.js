const Practice = require('../models/Practice');
exports.homePage = (req, res, next) => {
    res.render('index', { title: 'Davinder Kaur' });
  };

 

  exports.table = async (req, res, next) => {
    const practiceTable = await Practice.find().sort({ title: 'asc' });
    res.render('table', { 
        title: 'Table',
        practiceTable});
  };

   
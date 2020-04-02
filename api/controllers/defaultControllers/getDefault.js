module.exports = (table) => {
  return ((req, res) => {

    // There should be some kind of pagination, especially for default
    db.query('SELECT * FROM ' + table).then(data => {
      res.status(200).json(data.rows)
    }).catch(err => {
      console.log(err.stack);
      res.status(500);
    }).finally(() => {
    });
  });
}
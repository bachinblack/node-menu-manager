module.exports = (table) => {
  return ((req, res) => {

    db.query('SELECT * FROM ' + table + ' WHERE id = $1', [req.params.id]).then(data => {
      res.send(data.rows[0])
    }).catch(err => {
      console.log(err.stack);
      res.status(500);
    }).finally(() => {
    });
  });
}
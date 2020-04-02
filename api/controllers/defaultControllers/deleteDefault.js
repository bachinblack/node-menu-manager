module.exports = (table) => {
  return ((req, res) => {

    db.query('DELETE FROM ' + table + ' WHERE id = $1', [req.params.id]).then(data => {
      res.status(200).send({'message': `Deleted ${table} with ID: ${req.params.id}`});
    }).catch(err => {
      console.log(err.stack);
      res.status(500).send(err.stack);
    }).finally(() => {
    });
  });
}

module.exports = (table, fields) => {
  return ((req, res) => {
    const validationFields = fields

    let keys = [];
    let values = []
    let i = 1;

    validationFields.forEach((f) => {
      if (f in req.body) {
        keys.push(`${f} = $${i++}`);
        values.push(req.body[f]);
      }
    })
    query = `UPDATE ${table} SET ${keys.join(',')}`;

    values.push(req.params.id);

    query += 'WHERE id = $' + i;
    query += 'RETURNING *';

    db.query(query, values
    ).then(data => {
      res.status(201).send(data.rows[0]);
    }).catch(err => {
      console.log(err.stack);
      res.status(500);
    }).finally(() => {
    });
  });
}
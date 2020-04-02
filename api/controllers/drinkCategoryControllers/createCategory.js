module.exports = function (req, res) {
    if (!('name' in req.body)) {
        res.status(403).send("Bad request");
    }

    db.query(
        'INSERT INTO drink_categories(name, note) VALUES($1, $2) RETURNING *',
        [req.body.name, req.body.note || ""]
    ).then(data => {
        res.status(201).send(data.rows[0]);
    }).catch(err => {
        console.log(err.stack);
        res.status(500);
    }).finally(() => {
    });
}

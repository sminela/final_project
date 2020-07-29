var conn = require('./connection');

module.exports = {

    getAllProjects: function (req, res) {
        conn.query('SELECT * FROM PROJECT order by date DESC', function (err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    getLastThree: function (req, res) {
        conn.query('SELECT * FROM PROJECT order by date DESC limit 3', function (err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    removeProject: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM project WHERE id=?', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json({message: 'Uspjesno obrisan projekat'})
        })
    },

    addNewProject: function(req, res) {
        const project = req.body;
        conn.query('INSERT INTO project SET ?', [project], function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results.insertId)
        });
    },
}
exports.getBackend = (req, res) => {
    try {
        res.status(200).render('backend.ejs');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.getFrontend = (req, res) => {
    try {
        res.status(200).render('frontend.ejs');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

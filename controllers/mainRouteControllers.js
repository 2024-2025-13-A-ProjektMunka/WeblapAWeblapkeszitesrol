exports.getMain = (req, res) => {
    try {
        res.status(200).render('index');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const Style = require('../models/style');
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Style({ name, slug: slugify(name)}).save());
    } catch (err) {
        console.log(err);
        res.status(400).send('Create category failed');
    }
};


exports.list = async (req, res) => {
    res.json(await Style.find({}).sort({ createdAt: -1 }).exec());
};


exports.read = async (req, res) => {
    let style = await Style.findOne({ slug: req.params.slug }).exec();
    res.json(style);
}

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Style.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name)},
            { new: true }
        );
        res.json(updated)
    } catch (err) {
        res.status(400).send("Style update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Style.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Style delete failed");
    }
};


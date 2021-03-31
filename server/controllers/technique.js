const Technique = require('../models/technique');
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Technique({ name, slug: slugify(name)}).save());
    } catch (err) {
        console.log(err);
        res.status(400).send('Create category failed');
    }
};


exports.list = async (req, res) => {
    res.json(await Technique.find({}).sort({ createdAt: -1 }).exec());
};


exports.read = async (req, res) => {
    let Technique = await Technique.findOne({ slug: req.params.slug }).exec();
    res.json(Technique);
}

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Technique.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name)},
            { new: true }
        );
        res.json(updated)
    } catch (err) {
        res.status(400).send("Technique update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Technique.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Technique delete failed");
    }
};
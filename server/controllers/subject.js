const Subject = require('../models/subject')
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        // const category = await new Category({ name, slug: slugify(name) }).save();
        res.json(await new Subject({ name, slug: slugify(name) }).save());
    } catch (err) {
        console.log(err);
        res.status(400).send('Create subject failed');
    }
};

exports.list = async (req, res) => {
    res.json(await Subject.find({}).sort({ createdAt: -1 }).exec());
};

exports.read = async (req, res) => {
    let subject = await Subject.findOne({ slug: req.params.slug }).exec();
    res.json(subject);
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await Subject.findOneAndUpdate(
            { slug: req.params.slug }, 
            {name, slug: slugify(name)},
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).send("Subject update failed");
    }
    //
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Subject.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Subject delete failed");
    }
};

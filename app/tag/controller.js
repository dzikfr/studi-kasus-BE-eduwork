const Tag = require('./model.js');

const store = async(req, res, next) => {
    try {
        let payload = req.body;
        let category = new Tag(payload);
        await category.save();
        return res.json(category);
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const update = async(req, res, next) => {
    try {
        let payload = req.body;
        let category = await Tag.findByIdAndUpdate(req.params.id, payload, {new: true, runValidators: true});
        return res.json(category);
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const destroy = async(req, res, next) => {
    try {
        let category = await Tag.findByIdAndDelete(req.params.id);
        return res.json(category);
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const index = async(req, res, next) => {
    try {
        let category = await Tag.find();
        return res.json(category);
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

module.exports = {
    store,
    update,
    destroy,
    index
}
const {celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]:Joi.object().keys({
            name: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }),
    }),
    getById: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]:Joi.object().keys({
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.BODY]:Joi.object().keys({

        })
    }),
    
};
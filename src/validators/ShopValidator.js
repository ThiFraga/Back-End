const {celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]:Joi.object().keys({
            user_id: Joi.string().required(),
            product_id: Joi.string().required(),
        })
    }),
    getProducts: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
            product_id: Joi.string().required(),
        }),
    }),
    
};
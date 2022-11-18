const {celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]:Joi.object().keys({
            name: Joi.string().required(),
            price: Joi.string().required(),
            source: Joi.string().required(),
        })
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
        
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
        [Segments.BODY]:Joi.object().keys({
            name: Joi.string().optional(),
            price: Joi.string().optional(),
            source: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
    
};
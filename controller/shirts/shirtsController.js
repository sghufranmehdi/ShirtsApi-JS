const Joi = require("joi");
const shirtsService = require("../../service/shirtsService");
//We do validations in controller

const shirtsSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getShirt: (req, res) => {
    const data = shirtsService.getShirt(req.body);
    res.send(data);
  },

  getShirtById: (req, res) => {
    const data = shirtsService.getShirtById(req.params.id, req.body);
    res.send(data);
  },

  updateShirt: (req, res) => {
    const data = shirtsService.updateShirt(req.params.id);
    res.send(data);
  },
  deleteShirt: (req, res) => {
    const data = shirtsService.deleteShirt(req.params.id);
    res.send(data);
  },
  addShirt: (req, res) => {
    try {
      const validate = shirtsSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = shirtsService.addShirt(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};

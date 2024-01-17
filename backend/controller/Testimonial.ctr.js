const Testimonial = require('../model/Testimonial');

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const { name, content } = req.body;
        const testimonial = new Testimonial({ name, content });
        await testimonial.save();
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a testimonial
exports.updateTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, content } = req.body;
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, { name, content }, { new: true });
        res.json(updatedTestimonial);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        await Testimonial.findByIdAndDelete(id);
        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

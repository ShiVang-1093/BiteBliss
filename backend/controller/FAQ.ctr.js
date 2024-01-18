const FAQ = require('../model/FAQ');

// Get all FAQs
exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new FAQ
exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const faq = new FAQ({ question, answer });
        await faq.save();
        res.status(201).json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing FAQ
exports.updateFAQ = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;
        const faq = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an FAQ
exports.deleteFAQ = async (req, res) => {
    try {
        const { id } = req.params;
        await FAQ.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const Coupon = require('../model/Coupons');

// Get all coupons
exports.getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new coupon
exports.createCoupon = async (req, res) => {
    try {
        const { code, discount } = req.body;
        const newCoupon = new Coupon({ code, discount });
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a coupon
exports.updateCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const { code, discount } = req.body;
        const updatedCoupon = await Coupon.findByIdAndUpdate(id, { code, discount }, { new: true });
        if (!updatedCoupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }
        res.status(200).json(updatedCoupon);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCoupon = await Coupon.findByIdAndDelete(id);
        if (!deletedCoupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }
        res.status(200).json({ message: 'Coupon deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



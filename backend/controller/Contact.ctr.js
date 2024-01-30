const Contact = require('../model/Contact');

exports.createContact = async (req, res) => {
    try {
        const {fname,lname,email,phone,message} = req.body;
        const contact = await Contact.create({fname,lname,email,phone,message});
        return res.status(201).json({ contact }); // Sending the created contact back in the response
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// exports.getContacts = async (req, res) => {
//     try {
//         const contacts = await Contact.find();
//         return res.status(200).json({ contacts });
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// };

// exports.getContact = async (req, res) => {
//     try {
//         const contact = await Contact.findById(req.params.id);
//         return res.status(200).json({ contact });
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// };

// exports.updateContact = async (req, res) => {
//     try {
//         const contact = await Contact.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         return res.status(200).json({ contact });
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// };

// exports.deleteContact = async (req, res) => {
//     try {
//         const contact = await Contact.findByIdAndDelete(req.params.id);
//         return res.status(200).json({ contact });
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// };

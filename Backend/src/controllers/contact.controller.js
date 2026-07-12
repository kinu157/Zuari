import mongoose from "mongoose"
import { contactModel } from "../models/contact.model.js"
import { Apierror } from "../utils/Apierror.js"
import { Apiresponse } from "../utils/Apiresponse.js"
import { asynchandler } from "../utils/asynchandler.js"

const createContact = asynchandler(async (req, res) => {
    const { name, email, phoneNo, company, teamSize, interestedIn } = req.body || {};
    
    const contact = await contactModel.create({ name, email, phoneNo, company, teamSize, interestedIn });
    return res.status(201).json({
        success: true,
        message: "Contact created successfully",
        data: contact
    });
});

export { createContact };
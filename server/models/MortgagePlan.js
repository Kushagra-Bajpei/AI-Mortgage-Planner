import mongoose from 'mongoose';

const mortgagePlanSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    loanAmount: {
        type: Number,
    },
    interestRate: {
        type: Number,
    },
    tenure: {
        type: Number, // in years
    },
    monthlyEMI: {
        type: Number,
    },
    totalInterest: {
        type: Number,
    },
    totalPayment: {
        type: Number,
    },
    advice: {
        type: String,
    },
    propertyType: {
        type: String, // e.g. 'apartment', 'villa', 'plot'
    },
    bankName: {
        type: String,
    },
}, { timestamps: true });

const MortgagePlan = mongoose.model('MortgagePlan', mortgagePlanSchema);

export default MortgagePlan;

import MortgagePlan from '../models/MortgagePlan.js';
import { errorHandler } from '../middleware/error.js';

export const createMortgagePlan = async (req, res, next) => {
    const { title, loanAmount, interestRate, tenure, monthlyEMI, totalInterest, totalPayment, advice, propertyType, bankName } = req.body;

    if (!title) {
        return next(errorHandler(400, 'Title is required'));
    }

    const newPlan = new MortgagePlan({
        userId: req.user.id,
        title,
        loanAmount,
        interestRate,
        tenure,
        monthlyEMI,
        totalInterest,
        totalPayment,
        advice,
        propertyType,
        bankName,
    });

    try {
        const savedPlan = await newPlan.save();
        res.status(201).json(savedPlan);
    } catch (error) {
        next(error);
    }
};

export const getMortgagePlans = async (req, res, next) => {
    try {
        const plans = await MortgagePlan.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(plans);
    } catch (error) {
        next(error);
    }
};

export const deleteMortgagePlan = async (req, res, next) => {
    try {
        const plan = await MortgagePlan.findById(req.params.planId);
        if (!plan) {
            return next(errorHandler(404, 'Mortgage plan not found'));
        }
        if (plan.userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to delete this plan'));
        }
        await MortgagePlan.findByIdAndDelete(req.params.planId);
        res.status(200).json('Mortgage plan has been deleted');
    } catch (error) {
        next(error);
    }
};

export const updateMortgagePlan = async (req, res, next) => {
    try {
        const plan = await MortgagePlan.findById(req.params.planId);
        if (!plan) {
            return next(errorHandler(404, 'Mortgage plan not found'));
        }
        if (plan.userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to update this plan'));
        }

        const updatedPlan = await MortgagePlan.findByIdAndUpdate(
            req.params.planId,
            {
                $set: {
                    title: req.body.title,
                }
            },
            { returnDocument: 'after' }
        );
        res.status(200).json(updatedPlan);
    } catch (error) {
        next(error);
    }
};

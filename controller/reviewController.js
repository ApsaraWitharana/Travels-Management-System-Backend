import Tour from "../model/Tour.js";
import Review from "../model/Review.js"; // Correct import

export const createReview = async (req, res) => {
    const tourId = req.params.tourId;

    // Validate tourId
    if (!tourId) {
        return res.status(400).json({
            success: false,
            message: "Tour ID is required",
        });
    }

    // Validate request body
    const { rating, reviewText, userId } = req.body;
    if (!rating || !reviewText || !userId) {
        return res.status(400).json({
            success: false,
            message: "Rating, review text, and user ID are required",
        });
    }

    try {
        // Create a new review
        const newReview = new Review({
            ...req.body,
            tour: tourId, // Associate the review with the tour
        });

        // Save the review
        const savedReview = await newReview.save();

        // Update the tour's reviews array
        await Tour.findByIdAndUpdate(tourId, {
            $push: {
                reviews: savedReview._id,
            },
        });

        // Send success response
        res.status(200).json({
            success: true,
            message: "Review submitted",
            data: savedReview,
        });
    } catch (err) {
        console.error("Error creating review:", err);
        res.status(500).json({
            success: false,
            message: "Failed to submit review",
        });
    }
};
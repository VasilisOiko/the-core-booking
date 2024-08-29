const REQUEST = Object.freeze({
    FAILED: {
        WRONG_USER_DATA: "'Λάθος όνομα χρήστη ή κωδικός'",
        UNKNOWN_ERROR: "unknown_error"
    },
    SUCCESSFUL: "successful",
})

const BOOKING_REQUEST = Object.freeze({
    SUCCESSFUL: "successful",
    SUBSCRIPTION_EXPIRED: "subscription_expired",
    ALREADY_BOOKED: "already_booked",
    UNKNOWN_ERROR: "unknown_error",
})

const REVALIDATE_TAG = Object.freeze({
    CLASSES: "classes",
    ATHLETE: "athlete",
})

export { REVALIDATE_TAG, REQUEST, BOOKING_REQUEST }
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

const CHANGE_PASSWORD_REQUEST = Object.freeze({
    SUCCESSFUL: true,
    INVALID_OLD_PASSWORD: "Λάθος παλιός κωδικός",
    INVALID_NEW_PASSWORD: "Ο καινούργιος σας κωδικός πρέπει να περιέχει τουλάχιστον ένα αριθμό και σύμβολο",
    UNKNOWN_ERROR: "unknown_error",
})

const REVALIDATE_TAG = Object.freeze({
    CLASSES: "classes",
    ATHLETE: "athlete",
})

export { REVALIDATE_TAG, REQUEST, BOOKING_REQUEST, CHANGE_PASSWORD_REQUEST }
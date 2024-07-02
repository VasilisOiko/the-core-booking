const REQUEST = Object.freeze({
    FAILED: {
        WRONG_USER_DATA: "'Λάθος όνομα χρήστη ή κωδικός'",
        UNKNOWN_ERROR: "unknown_error"
    },
    SUCCESSFUL: "successful",
})

const REVALIDATE_TAG = Object.freeze({
    CLASSES: "classes",
    ATHLETE: "athlete",
})

export { REVALIDATE_TAG, REQUEST }
export class DatabaseConnectionError extends Error {
    constructor() {
        super();
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}
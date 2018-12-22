/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Ambiente
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/***
 * connstring
 * 
 */
let connstring;
if (process.env.NODE_ENV == 'dev') {
    connstring = 'mongodb://localhost:27017/cafe';
} else {
    connstring = process.env.MONGO_URI;
}
process.env.connstring = connstring;
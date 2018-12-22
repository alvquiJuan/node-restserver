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
/*if (process.env.NODE_ENV == 'dev') {
    connstring = 'mongodb://localhost:27017/cafe';
} else {*/
connstring = 'mongodb://cafeUser:ph5yC2FF@ds121982.mlab.com:21982/jmaquino-cafe';
//}
process.env.connstring = connstring;
module.exports = {
    service: {
        name: process.env.SERVICE_NAME || 'service-template',
        port: process.env.SERVICE_PORT || 3000,
    },
    logger: {
        level: String(process.env.LOG_LEVEL || 'info').toLowerCase()
    }
};

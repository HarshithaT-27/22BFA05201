const logger = {
  info: (msg, data) => console.log(`INFO: ${msg}`, data || ''),
  error: (msg, data) => console.error(`ERROR: ${msg}`, data || '')
};

export default logger;

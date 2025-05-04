exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function works! Ready for MT5 webhook." })
  };
};
const { setupExpressApp } = require("./server");

const server = setupExpressApp();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is listening start ${PORT}`);
});

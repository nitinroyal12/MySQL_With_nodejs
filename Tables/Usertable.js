const createTable = `
  CREATE TABLE IF NOT EXISTS checkdata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    password VARCHAR(50)
  )
`;

module.exports = {
    createTable
}
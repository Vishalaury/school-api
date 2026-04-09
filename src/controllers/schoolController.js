// const db = require("../config/db");
// const getDistance = require("../utils/distance");

// /* ✅ Add School */
// exports.addSchool = (req, res) => {
//   const { name, address, latitude, longitude } = req.body;

//   if (!name || !address || !latitude || !longitude) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   if (isNaN(latitude) || isNaN(longitude)) {
//     return res.status(400).json({ message: "Invalid coordinates" });
//   }

//   const query = `
//     INSERT INTO schools (name, address, latitude, longitude)
//     VALUES (?, ?, ?, ?)
//   `;

//   db.query(query, [name, address, latitude, longitude], (err, result) => {
//     if (err) return res.status(500).json(err);

//     res.status(201).json({
//       message: "School added successfully",
//       id: result.insertId,
//     });
//   });
// };

// /* 🔥 List Schools */
// exports.listSchools = (req, res) => {
//   const { latitude, longitude } = req.query;

//   if (!latitude || !longitude) {
//     return res.status(400).json({ message: "Latitude & Longitude required" });
//   }

//   db.query("SELECT * FROM schools", (err, schools) => {
//     if (err) return res.status(500).json(err);

//     const sortedSchools = schools
//       .map((school) => {
//         const distance = getDistance(
//           parseFloat(latitude),
//           parseFloat(longitude),
//           school.latitude,
//           school.longitude
//         );

//         return { ...school, distance };
//       })
//       .sort((a, b) => a.distance - b.distance);

//     res.json(sortedSchools);
//   });
// };

// const db = require("../config/db");
// const getDistance = require("../utils/distance");

// // ✅ Add School
// exports.addSchool = (req, res) => {
//   const { name, address, latitude, longitude } = req.body;

//   if (!name || !address || !latitude || !longitude) {
//     return res.status(400).json({
//       message: "All fields are required",
//     });
//   }

//   if (isNaN(latitude) || isNaN(longitude)) {
//     return res.status(400).json({
//       message: "Invalid coordinates",
//     });
//   }

//   const query = `
//     INSERT INTO schools (name, address, latitude, longitude)
//     VALUES (?, ?, ?, ?)
//   `;

//   db.query(query, [name, address, latitude, longitude], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: "Database error",
//         error: err.message,
//       });
//     }

//     res.status(201).json({
//       message: "School added successfully",
//       id: result.insertId,
//     });
//   });
// };

// // ✅ List Schools
// exports.listSchools = (req, res) => {
//   const { latitude, longitude } = req.query;

//   if (!latitude || !longitude) {
//     return res.status(400).json({
//       message: "Latitude & Longitude required",
//     });
//   }

//   db.query("SELECT * FROM schools", (err, schools) => {
//     if (err) {
//       return res.status(500).json({
//         message: "Database error",
//         error: err.message,
//       });
//     }

//     const sortedSchools = schools
//       .map((school) => {
//         const distance = getDistance(
//           parseFloat(latitude),
//           parseFloat(longitude),
//           school.latitude,
//           school.longitude
//         );

//         return {
//           ...school,
//           distance: Number(distance.toFixed(2)), // 🔥 rounded
//         };
//       })
//       .sort((a, b) => a.distance - b.distance);

//     res.json({
//       message: "Schools fetched successfully",
//       count: sortedSchools.length,
//       data: sortedSchools,
//     });
//   });
// };


const db = require("../config/db");
const getDistance = require("../utils/distance");

// ✅ Add School
exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({
        message: "Invalid coordinates",
      });
    }

    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
};

// ✅ List Schools
exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        message: "Latitude & Longitude required",
      });
    }

    const [schools] = await db.query("SELECT * FROM schools");

    const sortedSchools = schools
      .map((school) => {
        const distance = getDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          school.latitude,
          school.longitude
        );

        return {
          ...school,
          distance: Number(distance.toFixed(2)),
        };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json({
      message: "Schools fetched successfully",
      count: sortedSchools.length,
      data: sortedSchools,
    });
  } catch (err) {
    res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
};
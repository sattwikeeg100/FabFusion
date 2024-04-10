const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Setup Multer for handling file upload

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

// Uploading Photo using multer

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 }, // 1 MB
});


// Resizing Images using sharp

const productImgResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
        req.files.map(async (file) => {
            await sharp(file.path)
                .resize(300, 300)
                .toFormat("jpeg")
                .jpeg({ quality: 90 })
                .toFile(`public/images/products/${file.filename}`);

                // Asynchronously delete the original file with error handling
                try {
                  fs.unlink(`public/images/products/${file.filename}`, (err) => {
                      if (err) {
                          console.error('Error deleting file:', err);
                      } else {
                          console.log('File deleted successfully 2');
                      }
                  });
              } catch (err) {
                  console.error('Error deleting file 2:', err);
              }
        })
    );
    next();
};

const blogImgResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
        req.files.map(async (file) => {
        await sharp(file.path)
            .resize(300, 300)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(`public/images/blogs/${file.filename}`);
        fs.unlinkSync(`public/images/blogs/${file.filename}`);
        })
    );
    next();
};
module.exports = { uploadPhoto, productImgResize, blogImgResize };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const googleapis_1 = require("googleapis");
const uploadFile = ({ createReadStream, mimetype }) => (auth) => {
    const drive = googleapis_1.google.drive({ version: 'v3', auth });
    const media = {
        mimeType: mimetype,
        body: createReadStream,
    };
    drive.files.create({
        media: media,
        fields: 'id',
    }, function (err, file) {
        if (err) {
            // Handle error
            console.error(err);
        }
        else {
            console.log('File Id: ', file.id);
        }
    });
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=methods.js.map
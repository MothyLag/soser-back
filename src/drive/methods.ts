import { google } from 'googleapis';
import { IUploadFile } from '../resolvers/user/models/user.interface';

export const uploadFile = ({ createReadStream, mimetype }: IUploadFile) => (
  auth
) => {
  const drive = google.drive({ version: 'v3', auth });
  const media = {
    mimeType: mimetype,
    body: createReadStream,
  };
  drive.files.create(
    {
      media: media,
      fields: 'id',
    },
    function (err, file: any) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        console.log('File Id: ', file.id);
      }
    }
  );
};

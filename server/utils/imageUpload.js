import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const uploadImage = async (base64String) => {
  try {
    // Extract the actual base64 data from the data URL
    const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid base64 string');
    }

    const imageBuffer = Buffer.from(matches[2], 'base64');
    const mimeType = matches[1];
    const extension = mimeType.split('/')[1];
    const fileName = `${uuidv4()}.${extension}`;
    
    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, imageBuffer);

    // Return the URL path to the uploaded image
    return `/uploads/${fileName}`;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default uploadImage;

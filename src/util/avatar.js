import ImageCompressor from 'image-compressor.js';

// compress the image
export const compressImage = async (file, options) => {
  return new Promise((resolve, reject) => {
    const imageCompressor = new ImageCompressor();
    imageCompressor.compress(file, options)
      .then((compressedFile) => resolve(compressedFile))
      .catch((error) => reject(error));
  });
};

// encode avatars to base64 form
export const encodeFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };


// decode avatars
export const decodeBase64ToFile = (base64String, fileType) => {
  const byteCharacters = atob(base64String);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: fileType });
  const file = new File([blob], 'avatar.png', { type: fileType });
  return file;
};
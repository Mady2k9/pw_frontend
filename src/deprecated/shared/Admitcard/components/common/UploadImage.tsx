'use client';
import React, { useRef, useState } from 'react';
// import Info from './icons/Info';
import { uploadImage } from '../../api/imageUploadService';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
// import { validateImage } from '@/utils/utils';

export interface UploadImageProps {
  title?: string;
  size?: number;
  height?: number;
  width?: number;
  register?: any;
  uploadedImgUrl?: string | null;
  setUploadedImgUrl?: (data: string) => void;
  defaultValue?: string;
  multiple?: boolean;
  uploadedImgUrls?: string[];
  setUploadedImgUrls?: (data: string[]) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  title = 'No File Chosen',
  size = 120,
  height = 1224,
  width = 160,
  uploadedImgUrl = null,
  setUploadedImgUrl,
  uploadedImgUrls = [],
  multiple = false,
  setUploadedImgUrls,
}) => {
  const imageUploadRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  const uploadFile = async (e: any) => {
    console.log('Upload File Func', e.target.files);
    const files = Array.prototype.slice.call(e.target.files);
    const uploadImg: Promise<{
      data: {
        key: string;
        baseUrl: string;
      };
    }>[] = [];
    files.map((file: any) => {
      // validateImage(size, height, width, file)
      if (file.size > 3 * 1024 * 1000) {
        setError('File size exceeded 3MB');
        return;
      } else if (!file.name.toLowerCase().endsWith('.pdf')) {
        setError('Please upload the admit card in a supported format');
        return;
      } else {
        const formData = new FormData();
        formData.append('file', file);
        uploadImg.push(uploadImage(formData));
        setError('');
      }

      Promise.all(uploadImg).then((resp) => {
        const imgUrls: string[] = [];
        resp.map((img) => {
          const imageUrl = img?.data?.baseUrl + img?.data?.key;
          imgUrls.push(imageUrl);
        });
        setUploadedImgUrl && setUploadedImgUrl(imgUrls[0]);
        setUploadedImgUrls && setUploadedImgUrls(imgUrls);
        const displayFileName = displayTextLimiter(e.target.files[0]?.name, 20);
        setFileName(displayFileName);
      });
    });
  };

  const displayTextLimiter = (text: string, count: number) => {
    console.log('Text>>>', text);
    return text.slice(0, count) + (text.length > count ? '...' : '');
  };

  const clickImage = () => {
    if (imageUploadRef?.current) {
      imageUploadRef.current.click();
    }
  };

  const removeMultiImage = (index: number) => {
    const urls = uploadedImgUrls.splice(0, uploadedImgUrls.length);
    urls.splice(index, 1);
    setUploadedImgUrls && setUploadedImgUrls(urls);
  };

  return (
    <div>
      <div
        className={`w-full px-2 border border-slate-300 rounded-md flex ${
          uploadedImgUrl ? 'flex-col' : ''
        } md:flex-row justify-between`}
      >
        <div className="flex flex-col justify-center">
          <h3 className="my-1">{fileName || 'No File Chosen'}</h3>
        </div>
        {uploadedImgUrls?.length > 0 ? (
          <div className="block">
            {uploadedImgUrls.map((src, index) => {
              return (
                <div key={src}>
                  <img className="h-40" src={src} alt="img" />
                  <button
                    onClick={() => removeMultiImage(index)}
                    className="p-2 border mt-2 border-[#5A4BDA] text-center bg-white text-[#5A4BDA] rounded-md"
                  >
                    Remove Image
                  </button>
                </div>
              );
            })}
          </div>
        ) : uploadedImgUrl ? (
          <>
            {/* <img className="h-40" src={uploadedImgUrl} alt="img" /> */}
            <div className="flex justify-between">
              <button
                onClick={clickImage}
                className="p-2 text-center bg-white text-[#5A4BDA]"
              >
                <p>Reupload</p>
                <input
                  type="file"
                  className="hidden"
                  accept="image"
                  onInput={uploadFile}
                  ref={imageUploadRef}
                  multiple={multiple}
                />
              </button>
              <button
                onClick={() => {
                  setUploadedImgUrl && setUploadedImgUrl('');
                  setFileName('');
                }}
                className="p-2 text-center bg-white text-[#BF2734]"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={clickImage}
            className="p-2 text-center bg-white text-[#5A4BDA]"
          >
            <p>Upload File</p>
            <input
              type="file"
              className="hidden"
              accept="image"
              onInput={uploadFile}
              ref={imageUploadRef}
              multiple={multiple}
            />
          </button>
        )}
      </div>
      {error.length > 0 ? (
        <div className="flex my-1 text-sm text-red-600">
          <div className="flex flex-col justify-center">
            <ExclamationTriangleIcon
              className={'h-[15px] w-[15px] text-red-500 mr-1'}
            />
          </div>
          <div>{error}</div>
          {/* Image size doesnt match the expected requirement */}
        </div>
      ) : null}
    </div>
  );
};

export default UploadImage;

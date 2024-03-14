import React, { ReactNode, useEffect } from "react";
import Button from "../Button";

interface CloudinaryUploadWidgetProps {
  children: ReactNode;
  onUpload: (info: any) => void;
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ children, onUpload }) => {
  useEffect(() => {
    const myWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "djvfnekle",
        uploadPreset: "fo7eztcw",
      },
      (error: Error, result) => {
        console.log(!error && result && result.event === "success");
        
        if (!error && result && result.event === "success") {
          onUpload(result.info.url);
        }
      }
    );

    const uploadButton = document.getElementById("upload_widget");
    if (uploadButton) {
      uploadButton.addEventListener("click", () => {
        myWidget.open();
      });
    }

    return () => {
      if (uploadButton) {
        uploadButton.removeEventListener("click", () => {
          myWidget.open();
        });
      }
    };
  }, [onUpload]);

  return (
    <Button id='upload_widget' className='cloudinary-button'>
      {children}
    </Button>
  );
};

export default CloudinaryUploadWidget;

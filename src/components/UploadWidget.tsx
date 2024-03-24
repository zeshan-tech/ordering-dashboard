// UploadWidget.tsx
import { useState, useEffect, ReactNode } from "react";
import Button, { ButtonProps } from "./Button";

interface CloudinaryUploadWidgetProps extends ButtonProps {
  children: ReactNode;
  onUpload: (info: any) => void;
}

export default function UploadWidget({ children, onUpload, ...buttonProps }: Readonly<CloudinaryUploadWidgetProps>) {
  const [widget, setWidget] = useState<any>(null);

  useEffect(() => {
    const widgetInstance = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "djvfnekle",
        uploadPreset: "fo7eztcw",
        // cropping: true,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          onUpload(result.info.url);
        }
      }
    );

    setWidget(widgetInstance);

    return () => {
      if (widgetInstance) {
        widgetInstance.close();
      }
    };
  }, []);

  const showWidget = () => {
    if (widget) {
      widget.open();
    }
  };

  return (
    <Button onClick={showWidget} {...buttonProps}>
      {children}
    </Button>
  );
}

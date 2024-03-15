// UploadWidget.tsx
import { useState, useEffect, ReactNode } from "react";
import Button from "./Button";

interface CloudinaryUploadWidgetProps {
  children: ReactNode;
  onUpload: (info: any) => void;
}

export default function UploadWidget({ children, onUpload }: CloudinaryUploadWidgetProps) {
  const [widget, setWidget] = useState<any>(null);

  useEffect(() => {
    const widgetInstance = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "djvfnekle",
        uploadPreset: "fo7eztcw",
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
    console.log(widget);

    if (widget) {
      widget.open();
    }
  };

  return <Button onClick={showWidget}>{children}</Button>;
}

// UploadWidget.tsx
import { useState, useEffect, ReactNode, cloneElement, ReactElement } from "react";
import Button, { ButtonProps } from "./Button";
import { IconWrapperProps } from "./icons";

interface CloudinaryUploadWidgetProps extends Omit<ButtonProps, "component"> {
  children?: ReactNode;
  onUpload: (info: any) => void;
  component?: ReactElement<IconWrapperProps | ButtonProps>;
}

export default function UploadWidget({ children, onUpload, component, ...buttonProps }: Readonly<CloudinaryUploadWidgetProps>) {
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

  if (component) {
    return cloneElement(component, {
      onClick: showWidget,
    });
  }

  return (
    <Button onClick={showWidget} {...buttonProps}>
      {children}
    </Button>
  );
}

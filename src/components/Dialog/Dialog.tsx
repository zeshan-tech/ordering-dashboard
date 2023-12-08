import { Dialog as MuiDialog, DialogProps as MuiDialogProps, Paper, PaperProps } from "@mui/material";
import { ClearIcon } from "../icons";
import DialogHeader from "./DialogHeader";
import Draggable from "react-draggable";

interface DialogProps extends MuiDialogProps {
  headerText?: string;
  headerHidden?: boolean;
  onClose?: () => void;
  outareaClose?: boolean;
  isDraggable?: boolean; // New prop for making isDraggable optional
}

function PaperComponent(props: PaperProps & { isDraggable?: boolean }) {
  if (props.isDraggable) {
    return (
      <Draggable handle="#isDraggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  } else {
    return <Paper {...props} />;
  }
}

export default function Dialog({ onClose, headerHidden = false, headerText, outareaClose = true, children, isDraggable = true, ...restProps }: DialogProps) {
  return (
    <MuiDialog PaperComponent={(paperProps) => <PaperComponent {...paperProps} isDraggable={isDraggable} />} onClose={outareaClose ? onClose : () => {}} {...restProps}>
      {!headerHidden ? <DialogHeader id="isDraggable-dialog-title" isDragable={isDraggable} title={headerText} rightIcons={[<ClearIcon onClick={onClose} />]} /> : null}
      {children}
    </MuiDialog>
  );
}

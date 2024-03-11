import { ReactNode, useEffect, useState } from "react";
import mousetrap from "mousetrap";
import Typography from "@mui/material/Typography";
import { Dialog, DialogTitle } from "@/components/Dialog";
import { DialogContent } from "@mui/material";
import { ClearIcon } from "@/components/icons";

interface KeyboardShortcutsContextProps {
  children: ReactNode;
}

export default function KeyboardShortcutsContext({ children }: Readonly<KeyboardShortcutsContextProps>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  useEffect(() => {
    mousetrap.bind("ctrl+s", toggleDialog);

    return () => {
      mousetrap.unbind("ctrl+s");
      mousetrap.unbind("ctrl+n");
    };
  }, []);

  return (
    <>
      <Dialog fullWidth maxWidth='sm' onClose={toggleDialog} open={isDialogOpen}>
        <DialogTitle variant='h5' flexDirection={"row"} justifyContent={"space-between"} display={"flex"} alignItems={"center"}>
          Keyboard Shortcuts
          <ClearIcon onClick={toggleDialog} iconButton={false} />
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant='body1'>
            <strong>Action:</strong> Save
          </Typography>
          <Typography variant='body2'>
            <strong>Shortcut:</strong> Ctrl+S
          </Typography>
        </DialogContent>
      </Dialog>
      {children}
    </>
  );
}

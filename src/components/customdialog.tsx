import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  desc: string;
  label1: string;
  label1prop: string;
  label2: string;
  label2prop: string;
  actionBtnText: string;
  actionBtnStyle: string;
}

const CustomDialog = ({
  open,
  onOpenChange,
  title,
  desc,
  label1,
  label1prop,
  label2,
  label2prop,
  actionBtnText,
  actionBtnStyle,
}: CustomDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-0 mt-6 translate-y-0 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">{label1}</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={label1prop} />
              </SelectTrigger>
              <SelectContent>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="desc">{label2}</Label>
            <Textarea id="desc" name="desc" placeholder={label2prop} className="resize-none" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="button" className={actionBtnStyle}>
            {actionBtnText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;

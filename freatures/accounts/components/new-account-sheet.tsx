import { useNewAccount } from "@/freatures/accounts/hooks/use-new-account";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function NewAccountSheet() {
  const { isOpen, onClose } = useNewAccount();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 text-black">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            create a new account to track transactions
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

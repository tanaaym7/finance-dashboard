"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/freatures/accounts/components/new-account-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};

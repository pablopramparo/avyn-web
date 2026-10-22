"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
  buttonLabel: string;
  closeLabel: string;
};

export function ScreenshotViewer({
  children,
  src,
  alt,
  width,
  height,
  buttonLabel,
  closeLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button className="screenshot-preview" type="button" aria-label={buttonLabel} onClick={() => setOpen(true)}>
        {children}
      </button>
      <dialog
        className="screenshot-lightbox"
        ref={dialogRef}
        aria-label={alt}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <button className="screenshot-lightbox-close" type="button" aria-label={closeLabel} onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
        <Image src={src} alt={alt} width={width} height={height} className="screenshot-lightbox-image" sizes="92vw" />
      </dialog>
    </>
  );
}

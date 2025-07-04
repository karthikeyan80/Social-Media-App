import type { OurFileRouter } from "@/app/api/uploadthing/core";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { FileRouterInputConfig } from "uploadthing/next";

// Get the file size limit from the router configuration
const getFileSizeLimit = (endpoint: keyof OurFileRouter) => {
  if (endpoint === "postImage") {
    return "16MB"; // Updated to match the new limit in core.ts
  }
  return "4MB"; // Default fallback
};

export const UploadButton = generateUploadButton<OurFileRouter>();

// Custom UploadDropzone with updated file size limit text
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Export a helper function to get the file size limit for display in UI
export const getUploadFileSizeLimit = getFileSizeLimit;

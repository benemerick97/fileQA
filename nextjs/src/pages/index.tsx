import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex items-left text-left h-screen flex-col">
      <Head>
        <title>Enable AI</title>
      </Head>
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800">
        <h1 className="text-4xl">Technical Document Q&A</h1>

        <div className="">
          To search for answers from the content in your files, upload them here
          and we AI to find answers from the
          relevant technical documents.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={100}
          maxFileSizeMB={50}
        />

        <FileQandAArea files={files} />
      </div>
    </div>
  );
}

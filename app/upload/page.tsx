"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/documents/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Industrial Document
      </h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={handleUpload}
        className="mt-6 bg-black text-white px-6 py-2 rounded"
      >
        Upload
      </button>

      <pre
        className="
          mt-8
        bg-white
        text-black
          p-6
          rounded-lg
          overflow-auto
          whitespace-pre-wrap
        "
      >
        {result}
      </pre>
    </main>
  );
}
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CloudinaryUploader() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  async function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const signRes = await fetch('/api/cloudinary/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: 'codverse/uploads' }),
      });

      if (!signRes.ok) {
        throw new Error('Failed to generate upload signature');
      }

      const signData = await signRes.json();
      const formData = new FormData();

      formData.append('file', file);
      formData.append('api_key', signData.apiKey);
      formData.append('timestamp', String(signData.timestamp));
      formData.append('signature', signData.signature);
      formData.append('folder', signData.folder);
      formData.append('upload_preset', signData.uploadPreset);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${signData.cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const uploaded = await uploadRes.json();
      if (!uploadRes.ok) {
        throw new Error(uploaded.error?.message || 'Upload failed');
      }

      setImageUrl(uploaded.secure_url || '');
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <label htmlFor="cloudinary-file" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Upload an Image (Cloudinary)
      </label>
      <input id="cloudinary-file" type="file" accept="image/*" onChange={handleUpload} />

      {uploading && <p style={{ marginTop: '0.75rem' }}>Uploading...</p>}
      {error && <p style={{ marginTop: '0.75rem', color: '#ef4444' }}>{error}</p>}

      {imageUrl && (
        <div style={{ marginTop: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>Uploaded successfully:</p>
          <Image src={imageUrl} alt="Uploaded preview" width={600} height={350} style={{ borderRadius: '0.75rem' }} />
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', wordBreak: 'break-all' }}>{imageUrl}</p>
        </div>
      )}
    </div>
  );
}

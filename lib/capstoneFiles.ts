export const DOCPACK_FILES: { name: string; content: string }[] = [
  {
    name: "compress_app.py",
    content: `"""DocPack — compress many documents into one smaller ZIP.

Run locally:
    pip install -r requirements.txt
    streamlit run compress_app.py
"""
from __future__ import annotations

import io
import zipfile

import streamlit as st

st.set_page_config(page_title="DocPack Compressor", layout="centered")
st.title("DocPack — document compressor")
st.caption("Upload several files. DocPack packs them into one ZIP using DEFLATE compression.")

uploads = st.file_uploader(
    "Select documents (txt, pdf, csv, images, office files…)",
    accept_multiple_files=True,
)

level = st.select_slider("Compression", options=["faster", "balanced", "smallest"], value="balanced")
compress = {
    "faster": zipfile.ZIP_STORED,
    "balanced": zipfile.ZIP_DEFLATED,
    "smallest": zipfile.ZIP_DEFLATED,
}[level]

if uploads and st.button("Compress documents"):
    original = sum(len(f.getvalue()) for f in uploads)
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", compression=compress) as archive:
        for file in uploads:
            info = zipfile.ZipInfo(file.name)
            if compress == zipfile.ZIP_DEFLATED:
                info.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(info, file.getvalue())
    packed = buf.getvalue()
    st.success(f"Original {original:,} bytes → ZIP {len(packed):,} bytes")
    st.download_button("Download compressed ZIP", packed, file_name="docpack.zip", mime="application/zip")
elif not uploads:
    st.info("Add at least two files to see the size drop.")
`,
  },
  {
    name: "requirements.txt",
    content: "streamlit>=1.36.0\n",
  },
  {
    name: ".gitignore",
    content: ".venv/\n__pycache__/\n*.pyc\n.env\n",
  },
  {
    name: "README.md",
    content: `# DocPack — multi-document compressor

A small Python app that takes several documents and writes one compressed ZIP so email, Git, and backups stay smaller.

## Run on your computer

\`\`\`bash
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
streamlit run compress_app.py
\`\`\`

## Ship from GitHub

1. Push this folder to a GitHub repository (the course app can create the repo for you).
2. Deploy on [Streamlit Community Cloud](https://share.streamlit.io/):
   - New app → pick this repo → Main file: \`compress_app.py\`
3. Open the public URL and upload real files to confirm compression.

Optional: [Render](https://render.com) Web Service with start command:

\`\`\`bash
streamlit run compress_app.py --server.port $PORT --server.address 0.0.0.0
\`\`\`
`,
  },
];

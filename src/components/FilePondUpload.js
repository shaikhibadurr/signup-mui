import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondUpload(a) {
  const [files, setFiles] = useState([]);
    console.log(a);
    return (
      <div className="container mt-4">
        <FilePond
          allowMultiple={a.allowMultiple}
          files={files}
          maxFiles={5}
          allowReorder={true}
          server="" // File upload api goes here
          labelIdle={a.labelIdle}
        />
      </div>
    )
}
export default FilePondUpload
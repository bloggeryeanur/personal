import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroCard({ img, title, desc1, desc2 }) {

  // Resume Download button
  const handleDownload = () => {
    // Replace 'sample.pdf' with the actual path to your PDF file
    const pdfPath = '../BSc_Certificate.pdf';
    downloadPDF(pdfPath);
  };

  const downloadPDF = (path) => {
    fetch(path)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloaded.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error downloading PDF:', error));
  };

  return (
    <Box style={{ position: "relative", textAlign: "center" }}>
      <Image
        src={img}
        alt="Your Image Alt Text"
        style={{ width: "100%", height: "100vh", opacity: 0.7 }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingTop: "1rem",
        }}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography>{desc1}</Typography>
          <Typography>{desc2}</Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleDownload}>
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

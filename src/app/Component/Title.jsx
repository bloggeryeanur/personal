import { Box, Typography } from "@mui/material";

const Title = ({title,text,text2}) => {
  return (
    <Box sx={{textAlign:'center', margin: '4rem 0', background:''}}>
      <Typography color='secondary' variant="h4" sx={{padding: '1rem 0',fontWeight: 700}}>{title}</Typography>
      <Typography sx={{fontWeight: 400}}>
       {text}
      </Typography>
      <Typography sx={{fontWeight: 400}}>
       {text2}
      </Typography>
    </Box>
  );
};

export default Title;

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Container, Grid, Typography } from "@mui/material";
import Title from "../Component/Title";
import SkillCard from "./SkillCard";

// Grid Function
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Skill = () => {
  return (
    <Container maxWidth="lg">
      <Title title="Skill | Experience" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <Typography variant="h5" color="primary">
                Frontend Basic
              </Typography>
              <SkillCard
                skill1="HTML"
                skill2="CSS"
                skill3="Twillwind"
                skill4="Bootstrap"
                persent1="90%"
                persent2="65%"
                persent3="65%"
                persent4="75%"
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <Typography variant="h5" color="primary">
                Frontend Advanced
              </Typography>
              <SkillCard
                skill1="JavaScript"
                skill2="ReactJs"
                skill3="NextJs"
                skill4="VueJs"
                persent1="90%"
                persent2="65%"
                persent3="65%"
                persent4="75%"
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <Typography variant="h5" color="primary">
                Advanced Backend
              </Typography>
              <SkillCard
                skill1="NodeJs"
                skill2="MongoDB"
                skill3="ExpressJs"
                skill4="Strapi"
                persent1="90%"
                persent2="65%"
                persent3="65%"
                persent4="75%"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Skill;

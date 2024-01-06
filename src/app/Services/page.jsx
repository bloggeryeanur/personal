import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Title from "../Component/Title";
import ServicesCard from "./ServicesCard";
import One from "../image/services/1.png";
import Two from '../image/services/2.png'
import Three from '../image/services/3.png'
import Four from '../image/services/4.png'
import Five from '../image/services/5.png'
import Six from '../image/services/6.png'

// Grid Material UI
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "",
  color: theme.palette.text.secondary,
}));

export default function Services() {
  return (
    <Container maxWidth="lg">
      {/* Import title component form Title file */}
      <Title
        title="Full Stack Web Services"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sequi vel laborum perspiciatis,"
        text2="provident, consequuntur nulla ad laboriosam iste! Nisi incidunt, "
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/*-------------First Services section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="Frontend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={One}
              />
            </Item>
          </Grid>
          {/*-------------First Services section End-------------*/}

          {/*-------------Second Services section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="Backend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Two}
              />
            </Item>
          </Grid>
          {/*-------------Second Services section End-------------*/}

          {/*-------------Third Services section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="FullStack"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Three}
              />
            </Item>
          </Grid>
          {/*-------------Third Services section End-------------*/}

          {/*-------------Fourth Services section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="UI/UX"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Four}
              />
            </Item>
          </Grid>
          {/*-------------Fourth Services section End-------------*/}

          {/*-------------Fifth Services section Start-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="E-comers"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Five}
              />
            </Item>
          </Grid>
          {/*-------------Fifth Services section End-------------*/}

          {/*-------------Sixth Services section End-------------*/}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              {/* Import Services minified component from ServicesCard file */}
              <ServicesCard
                title="News"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repudiandae exercitationem velit est? Dicta, odit quae sint laudantium, temporibus voluptas obcaecati aperiam veniam fugiat,"
                img={Six}
              />
            </Item>
          </Grid>
          {/*-------------Sixth Services section End-------------*/}
        </Grid>
      </Box>
    </Container>
  );
}

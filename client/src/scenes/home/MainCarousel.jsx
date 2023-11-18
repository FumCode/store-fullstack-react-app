import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import img1 from '../../assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg';
import img2 from '../../assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg';
import img3 from '../../assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg';
import img4 from '../../assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg';
import img5 from '../../assets/toa-heftiba-dti56waifB4-unsplash.jpeg'

// imports all images from assets folder
// function importAll(r) {
//     let images = {};
//     r.keys().forEach((item) => {
//         if (/\.(png|jpe?g|svg)$/.test(item)) {
//             images[item.replace("./", "")] = r(item);
//         }
//     });
//     return images;
// }
//
// const context = require.context("../../assets", false, /\.(png|jpe?g|svg)$/);
// export const heroTextureImports = importAll(context);

export const heroTextureImports = {
    img1,
    img2,
    img3,
    img4,
    img5,
}


const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
        >
            {Object.values(heroTextureImports).map((texture, index) => (
                <Box key={`carousel-image-${index}`}>
                    <img
                        src={texture}
                        alt={`carousel-${index}`}
                        style={{
                            width: "100%",
                            height: "700px",
                            objectFit: "cover",
                            backgroundAttachment: "fixed",
                        }}
                    />
                    <Box
                        color="white"
                        padding="20px"
                        borderRadius="1px"
                        textAlign="left"
                        backgroundColor="rgb(0, 0, 0, 0.4)"
                        position="absolute"
                        top="46%"
                        left={isNonMobile ? "10%" : "0"}
                        right={isNonMobile ? undefined : "0"}
                        margin={isNonMobile ? undefined : "0 auto"}
                        maxWidth={isNonMobile ? undefined : "240px"}
                    >
                        <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                        <Typography variant="h1">Summer Sale</Typography>
                        <Typography
                            fontWeight="bold"
                            color={shades.secondary[300]}
                            sx={{ textDecoration: "underline" }}
                        >
                            Discover More
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
};

export default MainCarousel;

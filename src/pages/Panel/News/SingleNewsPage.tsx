import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@/config/axiosInterceptor";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { changeToJalali } from "@/utils/dateAndTime";

interface News {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  images: string[];
  category: string;
  agency: string;
  publishDate: string;
  link: string;
}

const SingleNewsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get(`/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        <a href={news.link}>{news.title}</a>
      </Typography>
      <Typography variant='h5' gutterBottom>
        {news.subtitle}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {news.images.map((image, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(33.333% - 16px)",
              maxWidth: "calc(33.333% - 16px)",
            }}
          >
            <CardMedia
              component='img'
              height='200'
              image={image}
              alt={`news image ${index + 1}`}
            />
          </Card>
        ))}
      </Box>
      <Typography variant='body1' paragraph>
        {news.text}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 100%", maxWidth: "100%" }}>
          <Card>
            <CardContent>
              <Typography variant='subtitle1'>
                دسته‌بندی: {news.category}
              </Typography>
              <Typography variant='subtitle1'>
                خبرگزاری: {news.agency}
              </Typography>
              <Typography variant='subtitle1'>
                {changeToJalali(news.publishDate, "YYYY/M/DD")}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleNewsPage;

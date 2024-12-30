import React, { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInterceptor";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { changeToJalali } from "@/utils/dateAndTime";
import { useNavigate } from "react-router";

interface News {
  id: number;
  title: string;
  subtitle: string;
  publishDate: string;
  text: string;
  agency: string;
  category: string;
}

const NewsPanel: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get("/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const ellipsisStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "150px",
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>عنوان</TableCell>
            <TableCell>زیرعنوان</TableCell>
            <TableCell>تاریخ انتشار</TableCell>
            <TableCell>خبرگزاری</TableCell>
            <TableCell>دسته‌بندی</TableCell>
            <TableCell>مشاهده</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((newsItem) => (
            <TableRow key={newsItem.id}>
              <TableCell style={{ maxWidth: "150px" }}>
                {newsItem.title}
              </TableCell>
              <TableCell style={ellipsisStyle}>{newsItem.subtitle}</TableCell>
              <TableCell dir='ltr'>
                {changeToJalali(newsItem.publishDate, "YYYY/M/D")}
              </TableCell>
              <TableCell>{newsItem.agency}</TableCell>
              <TableCell>{newsItem.category}</TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => navigate(`/panel/news/${newsItem.id}`)}
                >
                  ادامه...
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsPanel;

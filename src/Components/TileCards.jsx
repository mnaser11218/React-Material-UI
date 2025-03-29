import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LineChartReChart from '../styled-components/LineChart';

export default function TileCard(props) {
  const {title, amount, endpoint, graphData} = props
  return (
    <Card  elevation={7}> 
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" >
        <Button href={endpoint} sx={{color: "#5f6b7a", fontWeight:"bold", textTransform: "none", fontSize:"1em", fontFamily:"AmazonEmberBold,Helvetica Neue Bold,Helvetica Neue,Helvetica,Arial,sans-serif" }}  >{title}</Button>
        </Typography>
        <LineChartReChart  graphData={[{}]} tableName={title}/> 
      </CardContent>
    </Card>
  );
}
import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreditDetail } from './data'
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone'
import RecommendTwoToneIcon from '@mui/icons-material/RecommendTwoTone'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ShowCredit() {
  // เรียงลำดับ CreditDetail จากวันที่ใหม่สุดไปยังเก่าสุด
  const sortedCreditDetail = [...CreditDetail].sort((a, b) => {
    if (a.from.Express === 'กำลังรอส่ง' && b.from.Express !== 'กำลังรอส่ง') {
      return -1 // a มีค่า 'กำลังรอส่ง' จึงขึ้นก่อน b
    } else if (
      a.from.Express !== 'กำลังรอส่ง' &&
      b.from.Express === 'กำลังรอส่ง'
    ) {
      return 1 // b มีค่า 'กำลังรอส่ง' จึงขึ้นก่อน a
    } else {
      return new Date(b.from.Date) - new Date(a.from.Date) // เรียงลำดับตามวันที่ใหม่สุดไปเก่าสุด
    }
  })

  return (
    <div className=" container m-5 mx-auto card " style={{ width: '1200px' }}>
      <div className=" text-center mt-3 ">
        <h1>เครดิตการซื้อขายทั้งหมด</h1>
        <h2 className="">
          {' '}
          FACEBOOK :{' '}
          <a className=" text-danger ">
            <KeyboardDoubleArrowRightIcon />
          </a>
          <a
            href="https://www.facebook.com/akeza.hackrockgark/"
            className=" text-primary"
          >
            Jasdakorn Ake
          </a>
          <a className=" text-danger ">
            <KeyboardDoubleArrowLeftIcon />
          </a>
        </h2>

        <span> รองรับธนาคาร </span>
        <AccountBalanceTwoToneIcon />
        <RecommendTwoToneIcon />
        <span className=" text-success">KBANK</span>
        <span className=" text-purple">,UOB</span>
        <span className=" text-primary">,Bangkok</span>
        <span className=" text-purple">,SCB</span>
      </div>

      <div className=" text-center justify-content-center row">
        {sortedCreditDetail.map((item, index) => (
          <Card
            className="m-3 text-center"
            color="warning"
            variant="soft"
            sx={{ width: 350 }}
            key={index}
          >
            <div>
              <Typography level="title-lg">
                {index + 1} | สินค้า : {item.from.Product}
              </Typography>
              <Typography level="body-sm text-black">
                Facebook ผู้ซื้อ :{' '}
                <span className="text-primary">{item.from.Name}</span>
              </Typography>
              <Typography level="body-sm text-black">
                {item.from.Date}
              </Typography>
            </div>
            <AspectRatio minHeight="250px" maxHeight="250px">
              {item.from.ImageExpress}
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">ราคารวมส่ง:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  {item.from.Cost} ฿ ส่งผ่าน ({item.from.Express})
                </Typography>
                <Typography>เลขพัสดุ : {item.from.TrackID}</Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                default=""
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
                <FacebookTwoToneIcon />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

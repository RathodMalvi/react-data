import express from "express";
const app = express();
import Stripe from 'stripe';
import cors from 'cors'
import nodemailer from "nodemailer";

const stripe = new Stripe
('sk_test_51PdTEBLwFkhAVpn3VPkE2YQwMt4cIFNjiMS6Jvkqu3Yjv2NXxbaVeHXCisl2RiVJa33X700v4tm6eqdIbINpyTy400Dy6IZq4X');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello from server")
})




app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;
// console.log(res.body);
const {totalAmount} = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount*100,
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "rathodmalvi259@gmail.com",
    pass: "qndw veed ujhd fwmg",
  },
});

app.post('/sendmail',async(req,res)=>{
  let {email,status,amount,name,payment} =  req.body
  try{
    
  const info = await transporter.sendMail({
    from: `"Admin" <rathodmalvi259@gmail.com>`,
    to: email,
    subject: `Your order has been ${status}`,
    text: ``,
    html: `Hello ${name} <br/><b>Thank you for ordering us</b><br> Amount=${amount}<br/>
            Order Status: ${status}<br/>
            Payment:${payment}<br/>
            Thank You<br/>Admin`,
  });
  res.send({'message':'Mail sent'})
  }
  catch(error){
    res.send({'message':'Something Went Wrong'})
  }

})

const PORT=1000
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
const express=require("express");
const app=express();
const userRoutes=require("./routes/User");
const stripe=require("stripe")("sk_test_51Ph5HV2MW3uATXl1zCGGpcdHWhsEv4Q5yXXRHhobKVdbFiUzpjReCF3sfuvC4oUrPGtX34fp9C56uQcQzXgLAknV00iD7IxeIO");
const propertytaxroutes=require("./routes/Propertytaxrouter");
const profileRoutes=require("./routes/Profile");
const paymentRoutes=require("./routes/User");
const courseRoutes=require("./routes/Course");
const database=require("./config/database");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const {cloudinaryConnect}=require("./config/cloudinary");
const fileUpload=require("express-fileupload");
const dotenv=require("dotenv");
const Payment = require("./models/PaymentModel");
const User = require("./models/User");

dotenv.config();
const PORT=process.env.PORT||4000;
//database connect
database.connect();
//middelwares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:['http://localhost:3000', 'http://192.168.56.1:3000'],
        credentials:true,
    })
)
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)
//cloudinary connection
cloudinaryConnect();
//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/p",propertytaxroutes);
app.use("/api/v1/p",propertytaxroutes);
//def route
/*app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: "Products must be an array" });
    }
    
    try {
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name || "Unknown Product", // Default value if product name is not provided
          },
          unit_amount: (product.taxAmount || 0) * 100, // Default to 0 if taxAmount is not provided
        },
        quantity: 1 // Adjust quantity if needed
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
*/

app.post("/api/create-checkout-session", async (req, res) => {
  const { products,pid} = req.body;

  if (!Array.isArray(products) || !pid) {
    return res.status(400).json({ error: "Products must be an array and pid is required" });
  }

  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name || "Unknown Product",
        },
        unit_amount: (product.taxAmount || 0) * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // Create a payment record with pid
    const payment = new Payment({
      paymentId: session.id,
      amount: products.reduce((total, product) => total + (product.taxAmount || 0), 0),
      currency: "inr",
      pid: pid,
      status: "Completed",
    });
    await payment.save();

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







app.post('/api/payment-details', async (req, res) => {
  try {
    const { pid } = req.body;
console.log(pid);
    if (!pid) {
      return res.status(400).json({ error: 'Property ID (pid) is required' });
    }

    const payment = await Payment.findOne({ pid: pid });

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json(payment);
  } catch (error) {
    console.error('Error fetching payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.post('/api/user-details', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



















app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your server is up and running....'
    })
})
app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
})
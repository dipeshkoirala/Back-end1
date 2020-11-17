
const express=require('express')


const welcomeRouter=require("./router/welcome-router")
const authRouter=require("./router/auth-router")

const server=express()
// server.use(helmet());
// server.use(cors());

server.use(express.json())

// server.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.JWT_SECRET || "Secret word",
//   })
// );
// server.use(logger)
// server.use(helmet())





server.use("/api/auth",logger,authRouter)
server.get("/",logger,welcomeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
module.exports=server


// logger middleware
function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
        'Origin'
      )}`
    );
  
    next();
  }
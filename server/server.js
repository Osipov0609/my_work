const express = require("express");
const cors = require("cors"); // Դոմեյններից FrontEnd_ին կապել BackEnd_ի Հետ > Բռաուզերը Չառքելափակվի;
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 5000;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Բարդացնել;

const app = express();
app.use(cors()); // cors body-parser > PORT Json_ը Կարդացվի;
app.use(bodyParser.json()); // Ստանալ Json_եր FrontEnd_ից;
app.use(bodyParser.urlencoded( { extended : true } ));

const USERS = [ // 1ից ավել password login;
    { id : 1, username : '123', password : bcrypt.hashSync("123", 9)  },
    { id : 2, username : 'login_2', password : bcrypt.hashSync("pass_2", 11) },
    { id : 3, username : 'login_3', password : bcrypt.hashSync("pass_3", 13) },
    { id : 4, username : 'login_4', password : bcrypt.hashSync("pass_4", 15) },
];

// console.log(USERS[0].password);
const SECRET_KEY = 'verysecretkey';

// POST > Սկզբնական Ստանալ FrontEnd_ի տվյալններին > Որ սկսի BackEnd_ը իր Գործը;
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // Էկրանից Վերցնել Մեր Բաղայում Ստուգելով Գրված Login_ին Արդյոք գոյություն ունի թե ոչ;
    const for_login = USERS.find(object => object.username === username);
    
    if(!for_login) {
        res.status(404).json({ message : "Սխալ եք Գրել Login_ը" })
    }
    
    const for_password = bcrypt.compareSync( password, for_login.password );
    // console.log(for_password);
    if(!for_password) {
        res.status(404).json({ message : "Սխալ Գաղտնաբառ" });
    }
    
    const token = jwt.sign({ id : for_login.id }, SECRET_KEY, { expiresIn : "1h" } );
    res.json({ token });
});

app.listen(PORT, () => {
    // Չբացել;
    console.log("Server Worked at http://localhost:5000");
});



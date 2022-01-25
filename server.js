import express from "express";
import axios from "axios";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();

// Express - Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Pixabay - config
const API_KEY = "PIXABAY_API_KEY";
const PORT = 5000;

let database = {
    users: [
        {
            id: 0,
            name: "john",
            email: "john@doe.com",
            password: "1234",
            entries: 0,
            joined: new Date(),
        },
    ],
};

app.get("/", (req, res) => {
    // return react app
    res.json({ msg: "React app route" });
});

app.get("/users", (req, res) => {
    res.json(database.users);
});

app.post("/register", (req, res) => {
    const { email, name, password } = req.body;

    database.users.push({
        id: database.users[database.users.length - 1].id + 1,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date(),
    });

    res.json(database.users[database.users.length - 1]);
});

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (
        email === database.users[0].email &&
        password === database.users[0].password
    ) {
        res.json({ msg: "Success" });
    } else {
        res.status(400).json({ msg: "Failed" });
    }
});

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;

    database.users.forEach((user) => {
        if (user.id === Number(id)) return res.json(user);
    });

    res.status(404).json({ msg: "User was not found" });
});

app.get("/image/:id/:query", (req, res) => {
    const id = Number(req.params.id);
    const query = req.params.query.split(" ").join("+");

    let user,
        found = false;

    database.users.some((_user) => {
        if (_user.id === id) {
            user = _user;
            return (found = true);
        }
    });

    if (!found) return res.status(404).json({ msg: "User is not found" });

    user.entries++;

    axios
        .get(
            `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`
        )
        .then((images) => {
            return res.json(images.data.hits);
        })
        .catch((err) => {
            console.log(err);
            return res
                .status(500)
                .json({ msg: "Something unexpected happened" });
        });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

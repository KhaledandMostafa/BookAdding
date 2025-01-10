const express = require("express");
const { title } = require("process");
const router = express.Router();
const booksarray = [
  {
    title: "The Great Gatsby",
    price: 10.99,
    description:
      "A classic novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.",
  },
  {
    title: "To Kill a Mockingbird",
    price: 8.49,
    description:
      "Harper Lee's timeless story of racial injustice and moral growth in the American South.",
  },
  {
    title: "1984",
    price: 9.99,
    description:
      "George Orwell's dystopian novel about a totalitarian regime and the dangers of surveillance.",
  },
  {
    title: "The Catcher in the Rye",
    price: 7.99,
    description:
      "J.D. Salinger's coming-of-age story about a teenager navigating identity and society.",
  },
  {
    title: "Moby-Dick",
    price: 12.5,
    description:
      "Herman Melville's epic tale of obsession and revenge in the pursuit of the white whale.",
  },
];

router.use(express.json());


router
  .route("/")
  .get((req, res) => res.send(booksarray))
  .post((req, res) => {
    const { title, price, description } = req.body;
    booksarray.push({ title, price, description });
    res.send(booksarray);
  });

module.exports = router;
